console.show();
log("京东 618 自动叠蛋糕");
log('正在寻找小金人...')
let goldMan = textContains('点我得金币').exists();
let sign = textContains('签到').exists();
// 判断小金人是否存在
if (goldMan) {
  for (let j = 0;j < 99;j++) {
    if (goldMan) {
      textContains('点我得金币').findOne().parent().click()
      sleep(88)
      log('点击小金人')
    } else {
      sleep(8888)
      if (!goldMan) {
        log('点击小金人任务已完成，准备开始做任务！')
        break
      }
    }
  }
} else {
  log('未找到小金人，准备开始做任务！')
}
sleep(1688)

// 打开任务面板
textContains('做任务领金币').findOne().click()
log('打开任务面板！')
sleep(1688)

// 签到
if (sign) {
  textContains('签到').findOne().click()
  log('签到成功！')
} else {
  log('今日已签到！')
}
sleep(1688)

// 浏览会场
let n = textContains('去完成').find().size()
for (let j = 1;j < n;j++) {
  var browse = textContains('去完成').findOnce(j);
  browse.click()
  for (let time = 1;time <= 21;time++) {
    log('开始第 ' + time + ' 次浏览')
    do {
      sleep(200)
    } while ((textContains('7').find().size() == 0) && (textContains('S').find().size() == 0))
    sleep(8888)
    log('完成第 ' + time + ' 次浏览')
    // 返回
    back()
    sleep(1688)
    var browse =  textContains('去完成').findOnce(j);
    sleep(1688)
    browse.click()
  }
}
