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
      cm.sendNormalTalk("阴冷的气息正从藏经阁的窗子向外渗出。看来里面一定发生了什么不寻常的事情。", 2, 9310587, false, true);
      cm.setNumberForQuestInfo(62004, 'check3', 1);
    } else {
      cm.dispose();
    }
  }
}