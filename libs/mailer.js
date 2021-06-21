const nodemailer = require("nodemailer");

class Mailer {
  constructor() {
    this.createHost();
  }

  async createHost() {
    this.testAccount = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "javier.luque@iescampanillas.com", 
        pass: "qpovkqozzxbztruc", 
      },
    });
  }

  async sendMail(mail) {
    this.mail = await this.transporter.sendMail(mail);
    return this.mail;
  }
}

module.exports = new Mailer();
