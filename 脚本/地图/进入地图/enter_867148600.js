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
    cm.spawnMobLimit(9601339, 1, 296, 74, 100);
    cm.spawnMobLimit(9601339, 1, 421, 74, 100);
    cm.spawnMobLimit(9601339, 1, 543, 74, 100);
    cm.spawnMobLimit(9601339, 1, 33, 67, 100);
    cm.spawnMobLimit(9601339, 1, 166, 74, 100);
    cm.addPopupSay(9401029, 3000, "不是很困难嘛！这样下去应该很快就能到达深渊的尽头了。", '', 0);
    cm.addPopupSay(9401029, 3000, '再进去一些看看吧？', '', 0);
    cm.dispose();
  }
}