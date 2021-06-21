'use strict';

const jwt = require("jsonwebtoken");
const _db = require("../libs/database");
const mailer = require("../libs/mailer");
const table = "Usuario";

/**
 * Logs user into the system
 *
 *
 * email String The user email for login
 * password String The password for login in clear text
 * returns User
 **/
 exports.login = function (email, password) {
  return new Promise(function (resolve, reject) {
    let sql = `SELECT * FROM '${table}' WHERE email='${email}' AND password='${password}'`;

    _db
      .query(sql)
      .then((user) => {
        let loggedUser = {
          idUsuario: user[0].IDUSUARIO,
          apodo: user[0].APODO,
          email: user[0].EMAIL,
          password: "",
          imagen: user[0].IMAGEN
        };
        resolve(loggedUser);
      })
      .catch((err) => reject({ status: 404 }));
  });
};

/**
 * Logs out current logged in user session
 *
 *
 * no response value expected for this operation
 **/
 exports.logout = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get user password
 *
 *
 * email String The user or employee email.
 * returns String
 **/
 exports.recoverPassword = function (email) {
  return new Promise(async function (resolve, reject) {
    try {
      let user = await _db
        .query(`SELECT * FROM ${table} WHERE email='${email}'`)
        .then((user) => {
          return user[0];
        });

      if (!user) {
        reject({ status: 404 });
      }

      const token = jwt.sign({ id: user.IDUSUARIO }, process.env.JWT_SECRET, {
        expiresIn: "12h",
      });

      mailer.sendMail({
        from: '"Next Up Games" <pabarino@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Contraseña olvidad", // Subject line
        html: `
          <p>Hola ${user.APODO},</p>
          <p>
            Alguien ha solicitado cambiar su contraseña de Next Up Games. Haga clic en el enlace de abajo
            para restablecer su contraseña ahora. 
          </p>
          <button>
            <a href="http://localhost:4200/resetPassword/${token}">Resetear contraseña</a>
          </button>
          <p>
            Si no realizó esta solicitud, ignore este correo electrónico. Tenga en cuenta que su
            contraseña no cambiará a menos que haga clic en el enlace de arriba y cree una nueva. Este 
            enlace caducará en 12 horas. 
          </p>
          <p>
            Si ha solicitado varios correos electrónicos de restablecimiento, asegúrese de hacer clic en el enlace que se encuentra dentro
            del correo electrónico más reciente. 
          </p>
        `, // html body
      });

      resolve({ status: 200 });
    } catch (error) {
      reject({ status: 400 });
    }
  });
};

/**
 * Get user or employee password
 *
 *
 * token String Json Web Token
 * newPassword String The user or employee new password.
 * no response value expected for this operation
 **/
 exports.resetPassword = function (token, newPassword) {
  return new Promise(function (resolve, reject) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //ejemplo con recibo el id por path
    const id = decoded.id;

    let sql = `SELECT * FROM ${table} WHERE idUsuario=${id};`;

    _db
      .query(sql)
      .then((user) => {
        if (user[0]) {
          //si el usuario existe, actualiza su clave

          let sql2 = `UPDATE ${table}
            SET password='${newPassword}'
            WHERE idUsuario=${id}`;

          _db
            .query(sql2)
            .then(() => {
              resolve({ status: 200 });
            })
            .catch((err) => {
              resolve({ message: `${err}`, status: 400 });
            });
        } else {
          resolve({ message: "El usuario no existe", status: 404 });
        }
      })
      .catch((err) => {
        resolve({ message: `${err}`, status: 400 });
      });
  });
};

/**
 * Get user password
 *
 *
 * email String The user or employee email.
 * oldPassword String The user or employee old password.
 * newPassword String The user or employee new password.
 * no response value expected for this operation
 **/
 exports.changePassword = function (email, oldPassword, newPassword) {
  return new Promise(function (resolve, reject) {
    //buscar al usuario por email y clave antigua
    let sql1 = `SELECT * FROM ${table} WHERE email='${email}' AND password='${oldPassword}';`;
    _db
      .query(sql1)
      .then((dato) => {
        if (dato[0]) {
          //si lo encuentra, actualizar la clave actual por la nueva
          let sql2 = `UPDATE ${table} 
            SET PASSWORD='${newPassword}'
            WHERE EMAIL='${email}';`;

          //console.log(dato[0]);
          _db
            .query(sql2)
            .then((updated) => {
              resolve({ status: 200 });
            })
            .catch((err) => {
              reject({ message: `${err}`, status: 400 });
            });
        } else {
          reject({ message: "Email o password no válido", status: 404 });
        }
      })
      .catch((err) => {
        reject({ message: `${err}`, status: 400 });
      });
  });
};
