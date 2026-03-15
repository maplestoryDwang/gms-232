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
    if (cm.isQuestActive(33050) && cm.getNumberFromQuestInfo(33050, 'photo') == 1 && cm.getNumberFromQuestInfo(33050, 'ok') == 0) {
      cm.sendNormalTalk_Bottom("照片拍来了? 那就赶快拿给#b南哈特#k看吧! ", 37, 1530100, false, true, 1);
    } else {
      cm.sendOk("乌乌乌……");
    }
  } else {
    cm.dispose();
  }
}