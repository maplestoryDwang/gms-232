var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    if (cm.isQuestActive(39512) && cm.getNumberFromQuestInfo(39512, "pop") == 0) {
      cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face5#按下攻击键(Ctrl)，消灭怪物松！", '', 0);
      cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face5#对付怪物松这种小怪连一拳都用不上。", '', 0);
      cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face3#要是我能施展道术……哈哈！", '', 0);
      cm.updateInfoQuest(39512, "pop=1");
    }
    cm.dispose();
  }
}