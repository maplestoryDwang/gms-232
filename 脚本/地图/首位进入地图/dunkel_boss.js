var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(Y, Q, l) {
  if (status == 0 && Y == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = l;
  var E = -1;
  if (status <= E++) {
    cm.dispose();
  } else if (status === E++) {
    cm.dispose();
  }
}