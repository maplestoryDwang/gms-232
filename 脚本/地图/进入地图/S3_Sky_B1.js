var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(N, p, A) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = A;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else if (status === y++) {
    cm.updateInfoQuest(63511, "e=1");
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b1c_00", 512);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b1c_01", 512);
    cm.getWeatherEffectNotice("立即移动至最后检测站，继续进行。", 230, 15000, 1);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -3112, 63);
    cm.spawnMobLimit(9601335, 1, -362, 74, 11);
    cm.spawnMobLimit(9601335, 1, 6792, 74, 11);
    cm.spawnMobLimit(9601335, 1, 6780, 74, 11);
    cm.spawnMobLimit(9601335, 1, 7643, 74, 11);
    cm.spawnMobLimit(9601335, 1, 8176, 74, 11);
    cm.spawnMobLimit(9601335, 1, 8587, 74, 11);
    cm.spawnMobLimit(9601335, 1, 9397, 74, 11);
    cm.spawnMobLimit(9601335, 1, 9995, 74, 11);
    cm.spawnMobLimit(9601335, 1, 10433, 74, 11);
    cm.spawnMobLimit(9601335, 1, 11322, 74, 11);
    cm.spawnMobLimit(9601335, 1, 11876, 74, 11);
    cm.dispose();
  }
}