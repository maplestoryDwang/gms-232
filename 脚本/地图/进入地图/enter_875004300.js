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
    cm.spawnMobLimit(9601656, 1, -280, 277, 20);
    cm.spawnMobLimit(9601656, 1, -100, 305, 20);
    cm.spawnMobLimit(9601656, 1, 1500, 308, 20);
    cm.spawnMobLimit(9601656, 1, -580, -11, 20);
    cm.spawnMobLimit(9601656, 1, -380, -11, 20);
    cm.spawnMobLimit(9601656, 1, -215, 26, 20);
    cm.spawnMobLimit(9601656, 1, -20, 26, 20);
    cm.spawnMobLimit(9601656, 1, 1585, 26, 20);
    cm.spawnMobLimit(9601656, 1, 410, -35, 20);
    cm.spawnMobLimit(9601656, 1, 610, -35, 20);
    cm.spawnMobLimit(9601656, 1, -575, -184, 20);
    cm.spawnMobLimit(9601656, 1, -380, -184, 20);
    cm.spawnMobLimit(9601656, 1, -515, -415, 20);
    cm.spawnMobLimit(9601656, 1, -300, -415, 20);
    cm.spawnMobLimit(9601656, 1, -80, -328, 20);
    cm.spawnMobLimit(9601656, 1, 1500, -328, 20);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0##b（怪物的数量太多，进行考试太危险了。最好适当消灭掉一些，然后继续往上走。）", '', 0);
    cm.dispose();
  }
}