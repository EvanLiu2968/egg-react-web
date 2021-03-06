module.exports = {
  schedule: {
    // interval: '10m', // 10 分钟间隔
    // cron: '0 0 */3 * * *', // 每3小时准点执行一次
    cron: '0 0 18 * * 1,2,3,4,5,6', // 每天18:00准点执行一次
    type: 'worker', // all | worker
    disable: false,
    immediate: false
  },
  async task(ctx) {
    const key = '96fc75d5-4456-44a4-b013-04ad58386279'
    const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${key}`
    const axios = require('axios')

    // const { isVacationDate } = ctx.service.utils

    // if (isVacationDate()) {
    //   return
    // }

    await axios({
      method: 'post',
      url,
      data: {
        msgtype: 'text',
        text: {
          mentioned_list: ["@all"],
          content: '部门小伙伴们抽空写一下日报、更新Teambition任务状态，18:40前完成~'
        }
      }
    })
    await axios({
      method: 'post',
      url,
      data: {
        msgtype: 'markdown',
        markdown: {
          content: '[星火在线1对1项目日报](https://docs.qq.com/sheet/DZG1SUnJCak1jWWVR)\n[Teambition项目迭代](https://www.teambition.com/project/5e061d4a3c30e63a61ff9c92/story/section/all)'
        }
      }
    })
  },
}
