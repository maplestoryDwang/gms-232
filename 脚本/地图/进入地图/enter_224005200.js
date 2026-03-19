var status = -1;
var selectionLog = [];
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
    cm.npc_ChangeController(2074112, 'oid=14019', 1897, 153, 26, 1847, 1947, 1, false, 0, false);
    cm.spawnMobLimit(5100201, 1, 1650, 103, 4);
    cm.spawnMobLimit(5100201, 1, 1600, 103, 4);
    cm.spawnMobLimit(5100201, 1, 1700, 103, 4);
    cm.spawnMobLimit(5100201, 1, 1750, 103, 4);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;