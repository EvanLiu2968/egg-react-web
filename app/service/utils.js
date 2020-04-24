const Service = require('egg').Service
const htmlToPDF = require('../../scripts/htmlToPDF')

module.exports = class UtilsService extends Service {
  async htmlToPDF(url) {
    const { ctx, config, model } = this
    const res = await htmlToPDF(url, {
      shouldWait: false,
      key_path: 'pdf',
      env: 'dev'
    })
    return res
  }
  async isVacationDate() {
    return false
  }
}
