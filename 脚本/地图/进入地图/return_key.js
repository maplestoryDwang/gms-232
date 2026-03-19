var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(N, T, H) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = H;
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else if (status === b++) {
    cm.onActionBarResult(6, -1);
    cm.dispose();
  }
}