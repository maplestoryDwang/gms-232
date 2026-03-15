var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(s, X, j) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  if (s == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var E = -1;
  if (status <= E++) {
    cm.dispose();
  } else if (status === E++) {
    cm.sendOk("欢迎光临！");
  } else {
    cm.dispose();
  }
}