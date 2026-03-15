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
    if (cm.isQuestActive(2607) && cm.getItemQuantity(4033178) < 1) {
      if (cm.getPlayer().getPosition().x < -1090 && cm.getPlayer().getPosition().y == -222) {
        cm.gainItem(4033178, 1);
        cm.sendNormalTalk("(猫头鹰很冷漠地丢过来一个证书，就挥了挥翅膀，好像是让我离开...)", 0, 1058000, false, true);
      } else {
        cm.playerMessage(5, "请离近一点吧。");
      }
    } else {
      cm.playerMessage(5, "猫头鹰没东西再给你了。");
    }
    cm.dispose();
  }
}