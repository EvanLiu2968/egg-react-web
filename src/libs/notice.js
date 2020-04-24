/*
 * 消息通知的话需要注册serviceWorker，通过服务端推送
 * 浏览器端通过Notification显示消息
 */

// Notification.permission值为granted, denied, 或default
if(window.Notification){
  if (Notification.permission == "granted") {
    pushNotice();
  } else if (Notification.permission != "denied") {
    Notification.requestPermission(function (permission) {
      pushNotice();
    });
  }
}

let newMark = sessionStorage.getItem('timestamp');

if(!newMark){
  let timestamp = Date.now();
  sessionStorage.setItem('timestamp', timestamp);
}

let notification = null;
let counter = 1
let title = window.document.title;

document.addEventListener('visibilitychange',function(){
  if(document.visibilityState == 'hidden') {
    title = document.title
    document.title = '记得回来哦 - 捕风捉影'
  }else {
    document.title = title
  }
});

function showNotice(){
  hideNotice()
  // let tabList = localStorage.getItem('tabList') || '';
  // tabList = tabList.split(',').sort((a,b)=>a-b)
  notification = new Notification("尊敬的访客：", {
    body: `您已经浏览了${newMark ? Math.ceil((Date.now()-newMark)/(1000*60)) : 1 }分钟，注意休息哦 (^_−)☆`,
    icon: '//www.evanliu2968.com.cn/public/images/horse.png'
  });
  notification.onclick = function() {
    notification.close();
  };
}
function hideNotice(){
  if(notification){
    notification.close();
  }
}

function pushNotice(){
  setTimeout(() => {
    const time = newMark ? Math.ceil((Date.now()-newMark)/(1000*60)) : 1
    // 每隔10分钟提示一次
    if ( time > counter*10 ) {
      showNotice()
      counter++
    }
  }, 10000)
}
