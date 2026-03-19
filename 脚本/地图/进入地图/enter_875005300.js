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
    cm.npc_ChangeController(9401283, "oid=207207", -767, 155, 28, -817, -717, 4, true, 0, false);
    cm.spawnMobLimit(9601668, 1, -400, 455, 40);
    cm.spawnMobLimit(9601668, 1, -250, 455, 40);
    cm.spawnMobLimit(9601668, 1, -100, 455, 40);
    cm.spawnMobLimit(9601668, 1, 50, 455, 40);
    cm.spawnMobLimit(9601668, 1, 200, 455, 40);
    cm.spawnMobLimit(9601668, 1, 350, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601669, 1, 650, 455, 40);
    cm.spawnMobLimit(9601669, 1, 800, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601669, 1, 700, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601669, 1, 700, 455, 40);
    cm.spawnMobLimit(9601669, 1, 700, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601669, 1, 500, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.spawnMobLimit(9601668, 1, 600, 455, 40);
    cm.spawnMobLimit(9601668, 1, 400, 455, 40);
    cm.dispose();
  }
}