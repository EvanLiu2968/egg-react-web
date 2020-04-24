/*
 * there are some eggs for users with all pages
 */
import React from 'react';
import ReactDOM from 'react-dom';

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
}
