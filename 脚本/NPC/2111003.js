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
    cm.sendNormalTalk("想变成人类。想变成拥有温暖心脏的人类……  那样的话，也许可以握住她的手。但现在不能……", 0, 2111003, false, true);
    if (!cm.haveItem(4031695)) {
      cm.gainItem(4031695, 1);
    }
    cm.dispose();
  }
}