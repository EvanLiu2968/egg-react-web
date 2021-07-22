/*
 * there are some eggs for users with all pages
 */
import React from 'react';
import ReactDOM from 'react-dom';
import webInject from 'web-inject';

const isClient = typeof window !== 'undefined'

if( isClient ){
  const div = document.createElement('div');
  document.body.appendChild(div);
  const component = (
    <div style={{display:'none'}}>
      <p>想要谈谈人生理想、聊聊电影音乐或者各种不正经？请加微信 eagertolight</p>
    </div>
  )
  ReactDOM.render(component, div);
  try{
    const logger = require('./console.image')
    logger.draw('E v a n  L i u','慎行，独思')
  }catch(e){
    console.log(e)
  }
  /**
   * inject model
   */
  webInject.js('https://l2dwidget.js.org/lib/L2Dwidget.min.js',()=>{
    console.log("window.L2Dwidget", window.L2Dwidget)
    window.L2Dwidget.on("*", (name) => {
      console.log(
        "%c EVENT " + "%c -> " + name,
        "background: #222; color: yellow",
        "background: #fff; color: #000",
      )
    }).init({
      model: {
        //  小帅哥： https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json
        //  萌娘：https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json
        //  小可爱（女）：https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json
        //  小可爱（男）：https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json
        //  初音：https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json
        jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
        scale: 1,
        hHeadPos: 0.5,
        vHeadPos: 0.618,
      },
      "display": {
        "position": "right",
        "width": 150,
        "height": 300,
        "hOffset": 0,
        "vOffset": -20
      },
      dialog: {
        // 开启对话框
        enable: true,
        script: {
          // 每空闲 10 秒钟，显示一条一言
          "every idle 10s": "$hitokoto$",
          // 当触摸到星星图案
          "hover .star": "星星在天上而你在我心里 (*/ω＼*)",
          // 当触摸到角色身体
          "tap body": "哎呀！别碰我！",
          // 当触摸到角色头部
          "tap face": "人家已经不是小孩子了！",
        },
      },
    })
  })
}
