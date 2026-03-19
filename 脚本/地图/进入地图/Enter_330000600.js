var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33502, "enter") == 1) {
    cm.dispose();
    return;
  }
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
      cm.sendNormalTalk_Bottom("嗬！这个究竟是什么……", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("吱吱吱~！", 37, 1530619, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("蹦蹦蹦！", 37, 1530620, true, true);
        } else if (status === V++) {
          cm.updateInfoQuest(33502, "enter=1");
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;