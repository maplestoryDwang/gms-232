var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(O, q, t) {
  if (status == 0 && O == 0) {
    cm.dispose();
    return;
  }
  if (O == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = t;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else {
    if (status === K++) {
      cm.sendOk("这里现在还没开放。");
    } else {
      cm.dispose();
    }
  }
}