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
    cm.spawnMobLimit(9601656, 1, 0, 271, 20);
    cm.spawnMobLimit(9601656, 1, 200, 271, 20);
    cm.spawnMobLimit(9601656, 1, 400, 271, 20);
    cm.spawnMobLimit(9601656, 1, -610, 81, 20);
    cm.spawnMobLimit(9601656, 1, -410, 81, 20);
    cm.spawnMobLimit(9601656, 1, -220, 81, 20);
    cm.spawnMobLimit(9601656, 1, -10, 81, 20);
    cm.spawnMobLimit(9601656, 1, 380, -35, 20);
    cm.spawnMobLimit(9601656, 1, 570, -35, 20);
    cm.spawnMobLimit(9601656, 1, 770, -35, 20);
    cm.spawnMobLimit(9601657, 1, -550, -183, 20);
    cm.spawnMobLimit(9601657, 1, -350, -183, 20);
    cm.spawnMobLimit(9601657, 1, -150, -213, 20);
    cm.spawnMobLimit(9601657, 1, 50, -183, 20);
    cm.spawnMobLimit(9601657, 1, 250, -183, 20);
    cm.spawnMobLimit(9601657, 1, -460, -394, 20);
    cm.spawnMobLimit(9601657, 1, -270, -394, 20);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0##b（还好路好像没有断掉。）", '', 0);
    cm.dispose();
  }
}