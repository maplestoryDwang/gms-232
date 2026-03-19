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
    cm.spawnMobLimit(9400051, 1, 0, 92, 14);
    cm.spawnMobLimit(9400051, 1, 180, 92, 14);
    cm.spawnMobLimit(9400051, 1, 360, 92, 14);
    cm.spawnMobLimit(9400051, 1, 540, 92, 14);
    cm.spawnMobLimit(9400051, 1, 720, 92, 14);
    cm.spawnMobLimit(9400051, 1, 900, 92, 14);
    cm.spawnMobLimit(9400051, 1, 1080, 92, 14);
    cm.spawnMobLimit(9400051, 1, 1260, 92, 14);
    cm.spawnMobLimit(9400051, 1, 1440, 92, 14);
    cm.spawnMobLimit(9400051, 1, 1620, 92, 14);
    cm.spawnMobLimit(9400052, 1, -228, -222, 8);
    cm.spawnMobLimit(9400052, 1, 174, -311, 8);
    cm.spawnMobLimit(9400052, 1, 564, -195, 8);
    cm.spawnMobLimit(9400052, 1, 949, -400, 8);
    cm.spawnMobLimit(9400052, 1, 949, -120, 8);
    cm.spawnMobLimit(9400052, 1, 1336, -217, 8);
    cm.spawnMobLimit(9400051, 1, 1800, 92, 14);
    cm.spawnMobLimit(9400051, 1, 1980, 92, 14);
    cm.spawnMobLimit(9400051, 1, 2160, 92, 14);
    cm.spawnMobLimit(9400051, 1, 2350, 92, 14);
    cm.spawnMobLimit(9400052, 1, 1700, -347, 8);
    cm.spawnMobLimit(9400052, 1, 2025, -305, 8);
    cm.dispose();
  }
}