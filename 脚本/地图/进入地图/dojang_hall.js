var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(x, e, P) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = P;
  var l = -1;
  if (status <= l++) {
    cm.dispose();
  } else if (status === l++) {
    cm.dispose();
  }
}