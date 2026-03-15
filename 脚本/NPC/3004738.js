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
      if (!cm.isQuestActive(37711)) {
        cm.playerMessage(-1, '一朵奇怪的花。');
        cm.dispose();
        return;
      } else {
        var w = cm.getPlayer().getPosition();
        var N = Math.abs(w.x + 355) < 110;
        var u = Math.abs(w.x - 1211) < 110;
        var Q = Math.abs(w.x - 1198) < 110;
        var m = Math.abs(w.x - 598) < 110;
        var c = Math.abs(w.x - 90) < 110;
        if (N || u || Q || m || c) {
          cm.addNumberForQuestInfo(37711, "flower", 1);
          cm.addPopupSay(0, 2000, "#face0#已经调查了#r" + cm.getNumberFromQuestInfo(37711, "flower") + "朵#k花。再去调查一下其他花吧。", '', 0);
        } else {
          cm.playerMessage(-1, "再靠近一点，对花进行调查吧。");
          cm.playerMessage(5, "再靠近一点，对花进行调查吧。");
          cm.dispose();
          return;
        }
      }
      cm.dispose();
    }
  }
}