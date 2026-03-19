var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip23=1;skip15=1;skip17=1;act5=350053700");
    cm.addPopupSay(0, 1000, "该死, 奥尔卡……", '', 0);
    cm.addPopupSay(0, 1000, "话说, 我要怎么离开这里呢?", '', 0);
    cm.addPopupSay(0, 1000, "难道没有路了吗?", '', 0);
    cm.addPopupSay(0, 1000, "敌人数量太多了. ", '', 0);
    cm.scheduleWarpTask(30, 350053750, 0, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;