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
      cm.sendNormalTalk_Bottom("这本书看着倒是很新。", 57, 9201553, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("介绍的是#b反转界的语言#k，主人是……#b张博士？#k\r\n这谁啊？", 57, 9201553, true, true);
      } else if (status === V++) {
        if (cm.getNumberFromQuestInfo(61347, 'c1') == 1) {
          cm.updateInfoQuest(61347, "c1=2");
        }
        cm.dispose();
      }
    }
  }
}