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
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.dispose();
        return;
      }
      if (cm.haveItem(4034874, 1)) {
        cm.sendNormalTalk("已经获得了#t4034874#。返回#m800023015#向#p9112046#报告吧。", 16, 9112057, false, true);
      } else {
        cm.gainItem(4034874, 1);
        cm.sendNormalTalk("获得了#t4034874#。返回#m800023015#向#p9112046#报告吧。", 16, 9112057, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800023015, 4, false);
    }
  }
}