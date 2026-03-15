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
  } else {
    if (status === V++) {
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.forceStartQuest(23131, '1');
        cm.sendNormalTalk("呼……多亏了你，终于没事了。现在我们不用再继续交易了。", 0, 2159202, false, false);
      }
    } else if (status === V++) {
      cm.warp(310000010, 0, false);
      cm.dispose();
    }
  }
}