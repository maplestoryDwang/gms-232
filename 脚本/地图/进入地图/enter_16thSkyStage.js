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
  } else {
    if (status === V++) {
      cm.setNumberForQuestInfo(16625, 'ark', 0);
      cm.setNumberForQuestInfo(100272, 'end', 0);
      var O = cm.getNumberFromQuestInfo(100272, 'lv');
      cm.setNumberForQuestInfo(100272, "jet", O >= 12 ? 5 : O >= 6 ? 3 : 0);
      cm.openUI(1183);
      cm.sendNewEffects(11, [0, 0, 0, 0, 0]);
    } else if (status === V++) {
      cm.sendNewEffects(13, [0, 0, 220, 0, 0]);
      cm.dispose();
    }
  }
}