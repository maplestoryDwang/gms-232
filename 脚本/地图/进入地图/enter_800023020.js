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
      cm.updateInfoQuest(58768, "phase=2");
      cm.sendNormalTalk_Bottom("跟暗对话吧！", 57, 0, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}