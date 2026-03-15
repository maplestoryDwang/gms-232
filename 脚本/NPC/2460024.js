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
      if (cm.getMapId() == 326090210) {
        cm.addNumberForQuestInfo(40514, 'count', 1);
        cm.setNumberForQuestInfo(40514, '24', 1);
        cm.sendNormalTalk("……嗯？你说我的……手腕？……是没什么关系，但是……为什么……啊，你们看吧。", 32, 2460024, false, true);
      } else {
        cm.sendNormalTalk('……', 32, 2460024, false, true);
        cm.dispose();
      }
    } else if (status === V++) {
      cm.playerMessage(5, "卡西亚斯的手腕很干净。没有蜘蛛纹身。");
      cm.dispose();
    }
  }
}