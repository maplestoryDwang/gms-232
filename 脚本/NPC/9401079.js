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
      cm.sendNormalTalk_Bottom("#face3#呼呼，我对我的新面貌十分满意。\r\n难道不像是经历了千难万阻的冒险后，荣耀归来的战士吗？", 36, 9401079, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("#h0#，你变得更加强大了呢！\r\n但你马上就会被我的强大力量打败的，哈哈哈！", 36, 9401079, 0, 1);
    }
  } else {
    cm.dispose();
  }
}