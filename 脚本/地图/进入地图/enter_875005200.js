var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.playerMessage(5, "需消灭挡在前方的所有敌人，进行移动。");
    cm.getTopMsgFont("需消灭挡在前方的所有敌人，进行移动。", 3, 20, 20, 0, 0);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face3##b但愿、但愿没事！", '', 0);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face3##b再快一点！", '', 0);
    cm.forceJoinEvent("墨玄_陷入危险的玄山派");
    cm.spawnMobLimit(9601656, 1, -350, 101, 7);
    cm.spawnMobLimit(9601656, 1, -200, 101, 7);
    cm.spawnMobLimit(9601656, 1, -50, 101, 7);
    cm.spawnMobLimit(9601656, 1, 2200, 101, 7);
    cm.spawnMobLimit(9601656, 1, 250, 101, 7);
    cm.spawnMobLimit(9601656, 1, 400, 101, 7);
    cm.spawnMobLimit(9601656, 1, 650, 101, 7);
    cm.dispose();
  }
}