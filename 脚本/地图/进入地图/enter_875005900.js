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
      cm.spawnMobLimit(9601668, 1, -600, 90, 21);
      cm.spawnMobLimit(9601668, 1, -450, 84, 21);
      cm.spawnMobLimit(9601668, 1, -300, 85, 21);
      cm.spawnMobLimit(9601668, 1, -150, 90, 21);
      cm.spawnMobLimit(9601668, 1, 0, 90, 21);
      cm.spawnMobLimit(9601668, 1, 150, 90, 21);
      cm.spawnMobLimit(9601669, 1, 300, 88, 21);
      cm.spawnMobLimit(9601669, 1, 450, 82, 21);
      cm.spawnMobLimit(9601669, 1, 600, 87, 21);
      cm.spawnMobLimit(9601669, 1, 750, 89, 21);
      cm.spawnMobLimit(9601669, 1, 900, 86, 21);
      cm.spawnMobLimit(9601669, 1, -400, -209, 21);
      cm.spawnMobLimit(9601668, 1, -200, -209, 21);
      cm.spawnMobLimit(9601669, 1, 0, -209, 21);
      cm.spawnMobLimit(9601668, 1, 200, -209, 21);
      cm.spawnMobLimit(9601668, 1, 850, -206, 21);
      cm.spawnMobLimit(9601669, 1, 1301, 83, 21);
      cm.spawnMobLimit(9601669, 1, 1479, 86, 21);
      cm.spawnMobLimit(9601668, 1, 1188, -206, 21);
      cm.spawnMobLimit(9601669, 1, 994, -206, 21);
      cm.spawnMobLimit(9601669, 1, 1228, -206, 21);
      cm.sendNormalTalk_Bottom("#face3##b（呼，呼……还没到头。还要往下走多久啊！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}