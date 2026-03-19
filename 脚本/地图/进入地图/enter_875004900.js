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
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face6#给我站住！！！！！！！！！", '', 0);
    cm.addPopupSay(9401279, 3000, "#face1#...", '', 0);
    cm.dispose();
    cm.forceJoinEvent("墨玄_激战大师兄");
    cm.spawnMobLevel(9601660, 1, 30, -300, 160);
  }
}