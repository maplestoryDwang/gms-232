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
    cm.sendNormalTalk("看啊！我就是至高法师，武器锻造大师烁光男！如果你能找到白反转界魔质，请一定把它交给我！", 0, 9201083, false, false);
  } else {
    cm.dispose();
  }
}