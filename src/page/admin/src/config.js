export const siderMenu = [
  {
    name: '首页',
    url: '/',
    icon: 'home',
  },
  {
    name: '模块管理',
    url: '/module',
    icon: 'heart-o',
    children: [
      { name: '我的文章', url: '/module/article' },
      { name: '时光相片', url: '/module/photo' },
    ]
  },
  {
    name: '统计分析',
    url: '/tongji',
    icon: 'heart-o',
    children: [
      { name: '访客分析', url: '/tongji/visitor' },
      { name: '访问分析', url: '/tongji/visit' },
      { name: '用户反馈', url: '/tongji/feedback' },
    ]
  },
  {
    name: '系统管理',
    url: '/system',
    icon: 'setting',
    children: [
      { name: '用户管理', url: '/system/user' },
      { name: '用户组管理', url: '/system/group' },
    ],
  }
]