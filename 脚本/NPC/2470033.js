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
      var w = cm.getNpc() - 2470000;
      if (cm.getNumberFromQuestInfo(40613, '' + w) > 0) {
        cm.playerMessage(5, "已经去除了村民的时间之力。");
        cm.playerMessage(-1, "已经去除了村民的时间之力。");
        cm.dispose();
      } else {
        cm.setNumberForQuestInfo(40613, '' + w, 1);
        cm.sendNormalTalk("#b(要引出童话村村民的时间之力……)", 33, cm.getNpc(), false, true);
      }
    } else {
      if (status === V++) {
        var N = cm.getPlayer().getPosition();
        cm.spawnMobLimit(9300795, 1, N.x + cm.rand(-200, 200), N.y, 100);
        cm.playerMessage(5, "时间的流逝变成怪物的模样跳了出来。将怪物的力量注入准备好的宝珠里吧。");
        cm.dispose();
      }
    }
  }
}