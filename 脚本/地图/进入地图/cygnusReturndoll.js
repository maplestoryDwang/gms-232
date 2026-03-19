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
    if (cm.isQuestActive(20912)) {
      cm.npc_ChangeController(1104314, "oid=1134881", 679, 245, 78, 629, 729, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1134881", 'summon', 0, 0);
      cm.killAllMobNoExp();
      cm.spawnMobLimit(9300739, 1, 33, 259, 100);
      cm.spawnMobLimit(9300739, 1, 133, 259, 100);
      cm.spawnMobLimit(9300739, 1, 13, 249, 100);
      cm.spawnMobLimit(9300739, 1, 203, 255, 100);
      cm.spawnMobLimit(9300739, 1, 293, 255, 100);
      cm.spawnMobLimit(9300739, 1, 343, 251, 100);
      cm.spawnMobLimit(9300739, 1, 393, 259, 100);
      cm.spawnMobLimit(9300739, 1, 463, 249, 100);
      cm.spawnMobLimit(9300739, 1, 553, 249, 100);
      cm.spawnMobLimit(9300739, 1, 623, 247, 100);
      cm.spawnMobLimit(9300739, 1, 726, 245, 100);
    }
    cm.dispose();
  }
}