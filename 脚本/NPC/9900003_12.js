var selects;
var mode;
var EventList = Array(Array("#b[签到福利] 每日签到#k#l", 7), Array("#b[签到福利] 连续签到#k#l", 502), Array("#b[HOTTIME] 隐藏的箱子。#k#l", 103), Array("#b[HOTTIME] 数字猜猜猜！#k#l", 104), Array("#b[日常任务] 月枫的需求#k#l", 110), Array("#b[日常任务] 金利奇的口袋#k#l", 120), Array("#b[每日任务] 神秘微章 #k#l", 129), Array("#b[每日任务] 阿尔卡那-解救石精灵 #k#l", 130));
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 0 && f == 0) {
    cm.openNpc(9900003);
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var V = '目前' + cm.getServerName() + "已开始的活动有下列\r\n请按照您的喜好选择活动：\r\n#b";
    for (var w = 0; w < EventList.length; w++) {
      V += '#L' + w + "# " + EventList[w][0] + "\r\n";
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      selects = U;
      f = EventList[selects][1];
      if (EventList[selects][1] >= 10000) {
        cm.openNpc(f);
      } else {
        switch (f) {
          case 130:
            cm.dispose();
            cm.openNpc(3003381);
            break;
          default:
            cm.dispose();
            cm.openNpc(9900003, f);
        }
      }
    }
  }
}
var status = -1;