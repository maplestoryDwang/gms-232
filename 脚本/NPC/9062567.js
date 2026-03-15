var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(h, x, j) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  if (h == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else if (status === b++) {
    cm.dispose();
    cm.sendStorage();
  }
}