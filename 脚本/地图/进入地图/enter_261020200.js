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
    if (cm.isQuestActive(3314)) {
      cm.getTopMsgFont("点击罗赛伦的桌子，可以获得新药。", 3, 20, 8, 0, 0);
    }
    cm.Hidden_background("q3314", 1, cm.isQuestActive(3314) ? 1 : 0, 0, 0);
    cm.dispose();
  }
}