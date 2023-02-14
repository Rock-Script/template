const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;


class MailUtils {

  transporter;
  apiKey = defaultClient.authentications['api-key'];
  sender_email;
  sender_name;

  setup(apiKey, sender_email, sender_name) {
    this.apiKey.apiKey = apiKey;
    this.sender_email = sender_email;
    this.sender_name = sender_name;
  }

  async sendMail(to, subject, text, html, attachments) {
    const receivers = [{ email: to }];
    return new Promise((resolve, reject) => {
      new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
        "sender": {
          "email": this.sender_email,
          "name": this.sender_name
        },
        "to": receivers,
        "subject": subject,
        "textContent": text,
        "htmlContent": html,
      }).then(function (data) {
        resolve(data);
      }, function (error) {
        console.error(error);
        reject(error);
      })
    });
  }
}

module.exports = new MailUtils();