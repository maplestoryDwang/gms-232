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
  } else {
    if (status === V++) {
      cm.scheduleWarpTask(90, 800022010, 0, true);
      cm.userSetFieldFloating(800022430, 0, 3, 1);
      var O = em.getMonster(9400040);
      O.setSize(500);
      cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(458, 155));
      cm.spawnMobLimit(8240076, 1, -1175, 155, 100);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 14000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 17000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 20000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 23000);
      cm.spawnMobSchedule(9400090, 1, -1200, 150, 26000);
      cm.spawnMobSchedule(9400090, 1, -1200, 150, 29000);
      cm.spawnMobSchedule(9400090, 1, -1200, 150, 32000);
      cm.spawnMobSchedule(9400093, 1, -1200, 150, 35000);
      cm.spawnMobSchedule(9400092, 1, -900, 150, 38000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 41000);
      cm.spawnMobSchedule(9400093, 1, -1000, 150, 44000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 47000);
      cm.spawnMobSchedule(9400093, 1, -1000, 150, 50000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 53000);
      cm.spawnMobSchedule(9400093, 1, -1000, 150, 56000);
      cm.spawnMobSchedule(9400093, 1, -1200, 150, 59000);
      cm.spawnMobSchedule(9400092, 1, -900, 150, 62000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 65000);
      cm.spawnMobSchedule(9400093, 1, -1000, 150, 68000);
      cm.spawnMobSchedule(9400092, 1, -1200, 150, 72000);
      cm.spawnMobSchedule(9400093, 1, -1000, 150, 75000);
      cm.dispose();
    }
  }
}