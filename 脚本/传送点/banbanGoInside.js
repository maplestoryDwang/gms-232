function enter() {
  var v = cm.getPortal().getId();
  var G = cm.getPortal().getName();
  cm.playerMessage(5, " ");
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(v, G, n) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = n;
  var q = -1;
  if (status <= q++) {
    cm.dispose();
  } else if (status === q++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}