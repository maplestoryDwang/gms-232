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
      if (!cm.allMembersHere() || !cm.isLeader()) {
        cm.sendNext("请队长集合所有队员。");
        cm.dispose();
      } else {
        cm.sendNormalTalk("谢谢。但是还没结束。必须击败看守阿尼，才能安全地逃出去。请你去除掉他。", 0, 9020006, false, true);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("他非常邪恶。千万要小心。", 0, 9020006, true, false);
      } else if (status === V++) {
        cm.warpParty(921160700, 2);
        cm.dispose();
      }
    }
  }
}