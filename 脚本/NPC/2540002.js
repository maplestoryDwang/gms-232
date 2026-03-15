var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(s, R, V) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  if (s == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = V;
  var X = -1;
  if (status <= X++) {
    cm.dispose();
  } else if (status === X++) {
    cm.dispose();
  }
}