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
    cm.getTopMsgFont("请在规定时间内消灭所有妖鬼。", 3, 20, 20, 0, 0);
    cm.setPartner(1, 9111062, 80011300, 0);
    cm.addPopupSay(9111062, 2000, "妖鬼从左边冲过来了！！", '', 0);
    cm.spawnMobLimit(9400031, 1, 1380, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1385, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1390, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1395, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1400, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1405, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1410, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1415, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1425, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1430, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1440, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1445, 32, 100);
    cm.spawnMobLimit(9400031, 1, 1450, 29, 100);
    cm.spawnMobLimit(9400031, 1, 1460, 22, 100);
    cm.spawnMobLimit(9400031, 1, 1475, 12, 100);
    cm.dispose();
  }
}