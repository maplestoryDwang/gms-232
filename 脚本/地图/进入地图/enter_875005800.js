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
      cm.spawnMobLimit(9601668, 1, -600, 90, 20);
      cm.spawnMobLimit(9601668, 1, -450, 84, 20);
      cm.spawnMobLimit(9601668, 1, -300, 85, 20);
      cm.spawnMobLimit(9601668, 1, -150, 90, 20);
      cm.spawnMobLimit(9601668, 1, 0, 90, 20);
      cm.spawnMobLimit(9601668, 1, 2550, 90, 20);
      cm.spawnMobLimit(9601668, 1, 300, 88, 20);
      cm.spawnMobLimit(9601668, 1, 450, 82, 20);
      cm.spawnMobLimit(9601668, 1, 600, 87, 20);
      cm.spawnMobLimit(9601668, 1, 750, 89, 20);
      cm.spawnMobLimit(9601668, 1, 900, 86, 20);
      cm.spawnMobLimit(9601668, 1, -550, -240, 20);
      cm.spawnMobLimit(9601668, 1, -260, -240, 20);
      cm.spawnMobLimit(9601668, 1, -20, -240, 20);
      cm.spawnMobLimit(9601668, 1, 2500, -240, 20);
      cm.spawnMobLimit(9601668, 1, 480, -300, 20);
      cm.spawnMobLimit(9601668, 1, 680, -300, 20);
      cm.spawnMobLimit(9601668, 1, 880, -300, 20);
      cm.spawnMobLimit(9601668, 1, 715, 89, 20);
      cm.spawnMobLimit(9601668, 1, 715, 89, 20);
      cm.sendNormalTalk_Bottom("#face3##b（敌人的数量比预计的多太多了……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3##b（入口很窄，还以为内部也不大小呢……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}