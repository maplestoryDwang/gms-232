var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.getMap().getNumMonsters() > 0) {
      cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
    } else {
      cm.sendNormalTalk("#b(拿出了嘉比的衣服。快把它交给阿贝尔特吧。)#k", 0, 2159301, false, false);
      cm.gainItem(4032757, 1);
    }
    cm.dispose();
  }
}