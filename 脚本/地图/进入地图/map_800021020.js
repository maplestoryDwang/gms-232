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
    cm.spawnMobLimit(9400062, 1, 1278, 35, 1);
    cm.spawnMobLimit(9400059, 1, 581, 35, 1);
    cm.getTopMsgFont("请消灭妖鬼，保护棘鬼和镰鼬。", 3, 20, 20, 0, 0);
    cm.spawnMobLimit(9400031, 1, -270, 35, 100);
    cm.spawnMobLimit(9400031, 1, -250, 35, 100);
    cm.spawnMobLimit(9400031, 1, -230, 35, 100);
    cm.spawnMobLimit(9400031, 1, -210, 35, 100);
    cm.spawnMobLimit(9400031, 1, -190, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1660, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1450, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1680, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1700, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1720, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1740, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1760, 35, 100);
    cm.spawnMobLimit(9400031, 1, -307, 35, 100);
    cm.spawnMobLimit(9400031, 1, -459, 35, 100);
    cm.spawnMobLimit(9400031, 1, 79, 35, 100);
    cm.spawnMobLimit(9400031, 1, -46, 35, 100);
    cm.spawnMobLimit(9400031, 1, -459, 35, 100);
    cm.spawnMobLimit(9400032, 1, -180, 35, 100);
    cm.spawnMobLimit(9400032, 1, -170, 35, 100);
    cm.spawnMobLimit(9400032, 1, -150, 35, 100);
    cm.spawnMobLimit(9400032, 1, -130, 35, 100);
    cm.spawnMobLimit(9400032, 1, -100, 35, 100);
    cm.spawnMobLimit(9400032, 1, -90, 35, 100);
    cm.spawnMobLimit(9400032, 1, 1580, 35, 100);
    cm.spawnMobLimit(9400032, 1, 1600, 35, 100);
    cm.spawnMobLimit(9400032, 1, 1620, 35, 100);
    cm.spawnMobLimit(9400032, 1, 1640, 35, 100);
    cm.spawnMobLimit(9400033, 1, -270, 35, 100);
    cm.spawnMobLimit(9400033, 1, -250, 35, 100);
    cm.spawnMobLimit(9400033, 1, -230, 35, 100);
    cm.spawnMobLimit(9400033, 1, -210, 35, 100);
    cm.spawnMobLimit(9400033, 1, -190, 35, 100);
    cm.spawnMobLimit(9400033, 1, -170, 35, 100);
    cm.spawnMobLimit(9400033, 1, 1450, 35, 100);
    cm.spawnMobLimit(9400033, 1, 1335, 35, 100);
    cm.spawnMobLimit(9400033, 1, 1995, 35, 100);
    cm.spawnMobLimit(9400033, 1, 1966, 35, 100);
    cm.spawnMobLimit(9400033, 1, 2087, 35, 100);
    cm.spawnMobLimit(9400033, 1, 2086, 35, 100);
    cm.spawnMobLimit(9400032, 1, -160, 35, 100);
    cm.spawnMobLimit(9400031, 1, -130, 35, 100);
    cm.spawnMobLimit(9400033, 1, -80, 35, 100);
    cm.spawnMobLimit(9400032, 1, 1580, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1620, 35, 100);
    cm.spawnMobLimit(9400033, 1, 1650, 35, 100);
    cm.dispose();
  }
}