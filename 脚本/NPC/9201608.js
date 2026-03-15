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
    if (cm.isQuestFinished(35814)) {
      cm.sendOk("果然是天下无双。现在新的时代即将到来。");
    } else {
      cm.sendOk("阴阳的气息在暴走……");
    }
  } else {
    cm.dispose();
  }
}