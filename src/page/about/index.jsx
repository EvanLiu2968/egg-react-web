/* 
 * About
 */
import React from 'react'
import webInject from 'web-inject'
import '@/asset/css/global.css'

webInject.css(`
body {
  font-family: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #1E1D23;
  overflow: hidden;
  background: -webkit-linear-gradient(top, rgb(51, 45, 61) 0%, rgb(30, 29, 35) 120%);
  background: -moz-linear-gradient(top, rgb(51, 45, 61) 0%, rgb(30, 29, 35) 120%);
  background: -o-linear-gradient(top, rgb(51, 45, 61) 0%, rgb(30, 29, 35) 120%);
  background: -ms-linear-gradient(top, rgb(51, 45, 61) 0%, rgb(30, 29, 35) 120%);
  background: linear-gradient(top, rgb(51, 45, 61) 0%, rgb(30, 29, 35) 120%);
}
`)

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const Shaper = require('@/libs/shaper');
    Shaper.Drawing.init(document.getElementById("canvas"))
    Shaper.Drawing.simulate([
      `#circle`,
      'I am EvanLiu',
      'It is my website',
      'I love coding',
      'I love vlog',
      '& esay life',
      `for next`,
      `#time`,
      `remember`,
      '#countdown 10',
      '#rectangle',
      `后会有期`,
    ]);
    Shaper.Drawing.loop(function () {
      Shaper.Shape.render();
    });
  }
  render(){
    return (
      <canvas id="canvas"></canvas>
    )
  }
}