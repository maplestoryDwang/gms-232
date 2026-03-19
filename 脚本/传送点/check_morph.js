function enter() {
  if (!cm.hasBuff(2210091)) {
    cm.openScriptNpc();
  }
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      cm.sendNormalTalk("咳勒勒勒勒。发现入侵者！发现入侵者！", 1, 9075103, false, true);
    } else if (status === R++) {
      cm.dispose();
      cm.warp(957011000, 2);
    }
  }
}