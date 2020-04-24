/* 
 * List
 */
import React from 'react'
import Container from '@/component/container'
import Echarts from '@/component/echarts'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // mounted
  }
  render(){
    const echartsOption={
      option: {
        title: {
          text: '知乎热点话题关系图'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 11
            },
          }
        },
        legend: {
          x: "center",
          show: false,
          data: ['感觉', '关联', '进步']
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
              name: '感觉',
              itemStyle: {
                normal: {
                  color: "#f04134",
                }
              }
            }, {
              name: '关联',
              itemStyle: {
                normal: {
                  color: "#4582FF",
                }
              }
            }, {
              name: '进步',
              itemStyle: {
                normal: {
                  color: "#3582F",
                }
              }
            }],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                },
              }
            },
            force: {
              repulsion: 900
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                },
                formatter: "{c}"
              }
            },
            data: [{
              name: '房价',
              draggable: true,
            }, {
              name: '一线',
              category: 1,
              draggable: true,
            }, {
              name: '经济',
              category: 1,
              draggable: true,
            }, {
              name: '芯片/半导体',
              category: 1,
              draggable: true,
            }, {
              name: '电影',
              category: 1,
              draggable: true,
            }, {
              name: '创业',
              category: 1,
              draggable: true,
            }, {
              name: '政策',
              category: 1,
              draggable: true,
            }, {
              name: '科技',
              category: 1,
              draggable: true,
            }, {
              name: '恋爱',
              category: 1,
              draggable: true,
            }, {
              name: '视频',
              category: 1,
              draggable: true,
            }, {
              name: '学习',
              category: 1,
              draggable: true,
            }, {
              name: '现实',
              category: 1,
              draggable: true,
            }, {
              name: '体验',
              category: 1,
              draggable: true,
            }],
            links: [{
              source: 0,
              target: 1,
              category: 0,
              value: '关联'
            }, {
              source: 0,
              target: 2,
              value: '关联'
            }, {
              source: 0,
              target: 3,
              value: '关联'
            }, {
              source: 0,
              target: 4,
              value: '关联'
            }, {
              source: 0,
              target: 5,
              value: '关联'
            }, {
              source: 0,
              target: 6,
              value: '感觉'
            }, {
              source: 0,
              target: 7,
              value: '进步'
            }, {
              source: 0,
              target: 7,
              value: '进步'
            }, {
              source: 0,
              target: 8,
              value: '进步'
            }, {
              source: 0,
              target: 9,
              value: '进步'
            }, {
              source: 0,
              target: 10,
              value: '关联'
            }, {
              source: 0,
              target: 11,
              value: '关联'
            }, {
              source: 3,
              target: 4,
              value: '关联'
            }, {
            }, {
              source: 3,
              target: 5,
              value: '关联'
            }, {
            }, {
              source: 7,
              target: 8,
              value: '关联'
            }, {
            }, {
              source: 7,
              target: 9,
              value: '关联'
            }, {
              source: 7,
              target: 12,
              value: '关联'
            }, {
              source: 11,
              target: 9,
              value: '关联'
            }, {
              source: 11,
              target: 10,
              value: '关联'
            }, {
              source: 11,
              target: 12,
              value: '关联'
            }],
            lineStyle: {
              normal: {
                opacity: 0.8,
                width: 1,
                curveness: 0
              }
            }
          }
        ]
      },
      onChartReady: function(){},
      style: {
        minHeight: '500px'
      },
      onEvents: {
        click: function(series){
          // console.log(series)
          if(series.name){
            window.open(`https://www.zhihu.com/search?type=content&q=${series.name}`)
          }
        }
      }
    }
    return (
      <Container>
        <Echarts {...echartsOption} />
      </Container>
    )
  }
}