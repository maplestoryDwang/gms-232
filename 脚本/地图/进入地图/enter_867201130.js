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
  } else {
    if (status === V++) {
      cm.spawnMobLimit(9402301, 1, 1250, 45, 1);
      cm.spawnMobLimit(9402313, 1, 1350, 45, 1);
      cm.playerMessage(-1, "去收集能吃的花花象肉。");
      cm.dispose();
      cm.forceJoinEvent("莫奈德_地图_Act2.2_收集花花象肉");
      if (cm.isQuestFinished(64046)) {
        return;
      }
      cm.spawnMobLimit(9402311, 1, 1200, 45, 1);
      cm.spawnMobLimit(9402306, 1, 1300, 45, 1);
      cm.spawnMobLimit(9402320, 1, 1400, 45, 1);
      cm.sendNormalTalk_Bottom("#face0#森林里难保会突然窜出什么怪物，大家打猎时尽量远离森林！", 37, 9400587, false, true);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;