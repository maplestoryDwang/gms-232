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
    if (cm.isQuestActive(64906)) {
      cm.askAcceptDecline_Bottom("#face1#麻烦你帮我保护推车，直到平安抵达目的地。准备好了就出发吧。", 37, 9400924);
    } else {
      cm.dispose();
    }
  } else {
    cm.dispose();
    cm.warp(871000070, 0, false);
  }
}