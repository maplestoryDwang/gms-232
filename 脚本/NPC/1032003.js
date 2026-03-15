var 目的地 = 0;
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
      if (!cm.isQuestActive(2050) && !cm.isQuestActive(2051)) {
        cm.sendNormalTalk("你想进去吗？我也听说里面有名贵的草药，但是我不会让我不认识的人进入去的。对不起你回去吧。", 0, 1032003, false, true);
        cm.dispose();
        return;
      } else {
        if (cm.isQuestActive(2050)) {
          目的地 = 910130000;
        } else if (cm.isQuestActive(2051)) {
          目的地 = 910130100;
        }
        cm.sendNormalTalk("你想进去吗？我也听说里面有名贵的草药。", 0, 1032003, false, true);
      }
    } else if (status === V++) {
      cm.warp(目的地, 0, false);
      cm.dispose();
    }
  }
}