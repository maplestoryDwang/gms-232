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
    cm.spawnMobLimit(9601340, 1, 981, -450, 100);
    cm.spawnMobLimit(9601340, 1, 793, -450, 100);
    cm.spawnMobLimit(9601340, 1, 608, -450, 100);
    cm.spawnMobLimit(9601340, 1, 1230, 70, 100);
    cm.spawnMobLimit(9601340, 1, 983, 72, 100);
    cm.spawnMobLimit(9601340, 1, 613, 74, 100);
    cm.spawnMobLimit(9601340, 1, -254, -151, 100);
    cm.spawnMobLimit(9601340, 1, 22, -151, 100);
    cm.spawnMobLimit(9601340, 1, 260, -151, 100);
    cm.spawnMobLimit(9601340, 1, 313, 74, 100);
    cm.spawnMobLimit(9601340, 1, 6, 66, 100);
    cm.spawnMobLimit(9601340, 1, -184, 74, 100);
    cm.addPopupSay(9401029, 3000, "队长，那边尽头有一个破背包！", '', 0);
    cm.dispose();
  }
}