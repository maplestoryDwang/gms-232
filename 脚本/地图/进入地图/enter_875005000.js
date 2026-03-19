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
    if (cm.isQuestActive(65926)) {
      cm.spawnMobLimit(9601656, 1, -650, 2001, 10);
      cm.spawnMobLimit(9601656, 1, -500, 2001, 10);
      cm.spawnMobLimit(9601656, 1, -350, 2001, 10);
      cm.spawnMobLimit(9601656, 1, -200, 2001, 10);
      cm.spawnMobLimit(9601656, 1, -50, 2001, 10);
      cm.spawnMobLimit(9601656, 1, 2000, 2001, 10);
      cm.spawnMobLimit(9601656, 1, 250, 2001, 10);
      cm.spawnMobLimit(9601656, 1, 400, 2001, 10);
      cm.spawnMobLimit(9601656, 1, 450, -108, 10);
      cm.spawnMobLimit(9601656, 1, 600, -108, 10);
      cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0##b（看来大师兄说的是真的。玄山派竟然有木杂鬼出现……）", '', 0);
    }
    cm.dispose();
  }
}