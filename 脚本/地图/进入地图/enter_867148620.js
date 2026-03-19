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
    cm.spawnMobLimit(9601340, 1, -295, 73, 100);
    cm.spawnMobLimit(9601340, 1, -151, 74, 100);
    cm.spawnMobLimit(9601339, 1, 98, 71, 100);
    cm.spawnMobLimit(9601339, 1, -16, 65, 100);
    cm.spawnMobLimit(9601339, 1, 225, 74, 100);
    cm.spawnMobLimit(9601339, 1, 456, 74, 100);
    cm.addPopupSay(9401029, 3000, "消灭迪格和食石者，进去看看吧！", '', 0);
    cm.dispose();
  }
}