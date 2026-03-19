function enter() {
  if (cm.getQuestStatus(59052) > 0) {
    cm.warp(866033000, 0, false);
  } else {
    cm.playerMessage(-1, "散发着恶毒的味道,并且通往地精王房间的道路被堵。重新回到伍德乐身边吧。");
    cm.playerMessage(5, "散发着恶毒的味道,并且通往地精王房间的道路被堵。重新回到伍德乐身边吧。");
    cm.updateInfoQuest(59049, "met=1");
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
  } else if (status === R++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}