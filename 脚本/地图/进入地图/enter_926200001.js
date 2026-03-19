var status = -1;
var selectionLog = [];
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
    if (cm.isQuestActive(31053)) {
      cm.playerMessage(-1, '寻找通道.');
      cm.playerMessage(-1, "把盗墓者全部消灭掉.");
      cm.updateInfoQuest(31057, "door=0;kill=0");
      cm.spawnMobLimit(8870202, 1, 900, 75, 4);
      cm.spawnMobLimit(8870202, 1, 1361, -465, 4);
      cm.spawnMobLimit(8870202, 1, 400, -465, 4);
      cm.spawnMobLimit(8870202, 1, -210, -225, 4);
      cm.forceJoinEvent("希拉_阿斯旺下层1");
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;