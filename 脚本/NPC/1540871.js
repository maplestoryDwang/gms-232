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
    cm.sendNormalTalk_Bottom("这种长裙还是第一次穿，我还很担心要是不合适该怎么办呢……还挺合适的呢，真是万幸呢！", 36, 1540871, false, false);
  } else {
    cm.dispose();
  }
}