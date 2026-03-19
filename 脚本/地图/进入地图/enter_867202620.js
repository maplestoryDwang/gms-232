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
    cm.playerMessage(-1, "消灭跟随斯洛克的怪物。");
    cm.sendNormalTalk_Bottom("#face0#咳……咳！快点帮我！", 37, 9400590, false, true);
    cm.spawnMobLimit(9402306, 1, -60, 105, 1);
    cm.spawnMobLimit(9402308, 1, -600, 105, 1);
    cm.spawnMobLimit(9402313, 1, 400, 105, 1);
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act3.2_迷途知返");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;