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
    cm.Hidden_background("DLep4_door1", 1);
    cm.Hidden_background("DLep4_door2", 0);
    cm.playerMessage(-1, "请守住关卡，不要放敌人过来。");
    cm.dispose();
    cm.scheduleWarpTask(60, 306090090, 0, true);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 5000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 5000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 5000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 5000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 5000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 5000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 5000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 5000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 5000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 5000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 5000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 5000);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 15000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 15000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 15000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 15000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 15000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 15000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 15000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 15000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 15000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 15000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 15000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 15000);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 25000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 25000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 25000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 25000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 25000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 25000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 25000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 25000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 25000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 25000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 25000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 25000);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 35000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 35000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 35000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 35000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 35000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 35000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 35000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 35000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 35000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 35000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 35000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 35000);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 45000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 45000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 45000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 45000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 45000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 45000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 45000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 45000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 45000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 45000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 45000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 45000);
    cm.spawnMobSchedule(8230052, 1, 700, 455, 55000);
    cm.spawnMobSchedule(8230052, 1, 800, 508, 55000);
    cm.spawnMobSchedule(8230052, 1, 900, 515, 55000);
    cm.spawnMobSchedule(8230052, 1, 1000, 515, 55000);
    cm.spawnMobSchedule(8230052, 1, 1100, 515, 55000);
    cm.spawnMobSchedule(8230052, 1, 1200, 515, 55000);
    cm.spawnMobSchedule(8230052, 1, 1300, 515, 55000);
    cm.spawnMobSchedule(8230052, 1, 1400, 515, 55000);
    cm.spawnMobSchedule(8230058, 1, 700, 95, 55000);
    cm.spawnMobSchedule(8230058, 1, 800, 42, 55000);
    cm.spawnMobSchedule(8230058, 1, 900, 35, 55000);
    cm.spawnMobSchedule(8230058, 1, 1000, 35, 55000);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;