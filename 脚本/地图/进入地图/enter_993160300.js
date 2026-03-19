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
    cm.spawnMobLimit(2400561, 1, 740, 38, 100);
    cm.spawnMobLimit(2400561, 1, 634, 38, 100);
    cm.spawnMobLimit(2400561, 1, 252, 38, 100);
    cm.spawnMobLimit(2400561, 1, 138, 38, 100);
    cm.spawnMobLimit(2400561, 1, -380, 38, 100);
    cm.spawnMobLimit(2400561, 1, -489, 38, 100);
    cm.spawnMobLimit(2400561, 1, -600, 38, 100);
    cm.spawnMobLimit(2400561, 1, -729, 38, 100);
    cm.spawnMobLimit(2400561, 1, -616, -370, 100);
    cm.spawnMobLimit(2400561, 1, -727, -370, 100);
    cm.spawnMobLimit(2400561, 1, -839, -370, 100);
    cm.spawnMobLimit(2400561, 1, -956, -370, 100);
    cm.spawnMobLimit(2400561, 1, 554, -144, 100);
    cm.spawnMobLimit(2400561, 1, 434, -144, 100);
    cm.spawnMobLimit(2400561, 1, 323, -144, 100);
    cm.spawnMobLimit(2400561, 1, 202, -144, 100);
    cm.spawnMobLimit(2400561, 1, 157, -370, 100);
    cm.spawnMobLimit(2400561, 1, 50, -370, 100);
    cm.spawnMobLimit(2400561, 1, -66, -370, 100);
    cm.spawnMobLimit(2400561, 1, -187, -370, 100);
    cm.spawnMobLimit(2400561, 1, -94, -168, 100);
    cm.spawnMobLimit(2400561, 1, -206, -168, 100);
    cm.dispose();
  }
}