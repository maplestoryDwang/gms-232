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
      cm.sendNormalTalk_Bottom("#face2##h0#，不管何时何地，请你一定要保重身体。", 36, 9401075, 0, 0);
    } else {
      cm.sendNormalTalk_Bottom("虽然我现在只会做针织……这样就足够了吗？", 36, 9401075, 0, 1);
    }
  } else {
    cm.dispose();
  }
}