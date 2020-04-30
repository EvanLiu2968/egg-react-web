module.exports = {
  schedule: {
    // interval: '10m', // 10 分钟间隔
    // cron: '0 0 */3 * * *', // 每3小时准点执行一次
    cron: '0 55 8 * * 1,2,3,4,5,6', // 每天18:00准点执行一次
    type: 'worker', // all | worker
    disable: false,
    immediate: false
  },
  async task(ctx) {
    const key = '96fc75d5-4456-44a4-b013-04ad58386279'
    const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${key}`
    const axios = require('axios')

    const { isVacationDate } = ctx.service.utils

    if (isVacationDate()) {
      return
    }

    await axios({
      method: 'post',
      url,
      data: {
        msgtype: 'text',
        text: {
          mentioned_list: ["@all"],
          content: '部门小伙伴们，别忘记打卡呀，9点钟准时开始晨会哦～'
        }
      }
    })
  },
}
