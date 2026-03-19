var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(J, e, l) {
  if (status == 0 && J == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = l;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else if (status === K++) {
    cm.updateInfoQuest(63509, "e=1");
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_00", 512);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_01", 512);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_02", 512);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_03", 512);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_04", 512);
    cm.getWeatherEffectNotice("立即移动至最后检测站，继续进行。", 230, 15000, 1);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -3112, 63);
    cm.spawnMobLimit(9601333, 1, -2365, 74, 11);
    cm.spawnMobLimit(9601333, 1, -1590, 74, 11);
    cm.spawnMobLimit(9601333, 1, -678, 74, 11);
    cm.spawnMobLimit(9601333, 1, -678, 74, 11);
    cm.spawnMobLimit(9601334, 1, 55, 74, 11);
    cm.spawnMobLimit(9601334, 1, -96, 74, 11);
    cm.spawnMobLimit(9601334, 1, -206, 74, 11);
    cm.spawnMobLimit(9601333, 1, 1934, 74, 11);
    cm.spawnMobLimit(9601334, 1, 3731, 74, 11);
    cm.spawnMobLimit(9601334, 1, 4486, 74, 11);
    cm.spawnMobLimit(9601333, 1, 6009, 74, 11);
    cm.dispose();
  }
}