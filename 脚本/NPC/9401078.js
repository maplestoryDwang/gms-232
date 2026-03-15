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
    if (cm.isQuestFinished(64932)) {
      cm.sendNormalTalk_Bottom("#face2#感觉就像是终于做了很有意义的事情。", 36, 9401078, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("#h0#好像又成长了呢。我还依旧在原地踏步……", 36, 9401078, 0, 1);
    }
  } else {
    cm.dispose();
  }
}