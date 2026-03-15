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
    if (!cm.haveItem(4034864)) {
      cm.playerMessage(-1, '获得了油桶和软管。');
      cm.gainItem(4034864, 1);
      cm.gainItem(4034865, 1);
    }
    cm.dispose();
  }
}