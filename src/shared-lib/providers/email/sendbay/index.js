const sendEmail = require('./send-email');

class Sendbay {
  constructor(config = {}, options = {}) {
    this.config = config;
    this.options = options;
  }

  async sendEmail(emailData, requestMeta = {}) {
    await sendEmail(emailData, this.config, this.options, requestMeta);
  }
}

module.exports = Sendbay;
