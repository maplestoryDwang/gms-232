var status = -1;
var selectionLog = [];
function action(h, L, p) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = p;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else if (status === x++) {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;