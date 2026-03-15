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
  } else {
    if (status === V++) {
      cm.askText("#b（要说出暗号才能进入。）#k", '', 2091009, 0, 1000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(925040100, 0, false);
      cm.spawnMobLimit(9300351, 1, 900, 43, 100);
      cm.spawnMobLimit(9300352, 1, 900, 51, 100);
      cm.dispose();
    }
  }
}