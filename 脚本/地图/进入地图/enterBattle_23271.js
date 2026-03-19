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
    cm.spawnMobLimit(9300458, 1, 800, 215, 100);
    cm.spawnMobLimit(9300457, 1, 685, 239, 100);
    cm.spawnMobLimit(9300457, 1, 600, 275, 100);
    cm.playerMessage(-1, "请击败奇怪的魔法师一伙，找回禁忌炼金书。");
    cm.gainExp(5000);
    cm.gainExp(5000);
    cm.gainExp(10000);
    cm.dispose();
  }
}