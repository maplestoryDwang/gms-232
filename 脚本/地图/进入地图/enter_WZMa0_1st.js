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
    cm.killAllMobNoExp();
    if (cm.getMapId() == 400052300) {
      cm.setSessionValue("kill_count", '0');
      cm.setAccountQuestInfo(6, "enter=202009");
      cm.spawnMobLimit(9300812, 1, 100, 29, 100);
      cm.spawnMobLimit(9300812, 1, 200, 29, 100);
      cm.spawnMobLimit(9300812, 1, 300, 29, 100);
      cm.spawnMobLimit(9300812, 1, 400, 29, 100);
      cm.spawnMobLimit(9300812, 1, 500, 29, 100);
      cm.spawnMobLimit(9300812, 1, 600, 29, 100);
      cm.spawnMobLimit(9300812, 1, 700, 29, 100);
      cm.spawnMobLimit(9300812, 1, 800, 29, 100);
      cm.spawnMobLimit(9300812, 1, 900, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1000, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1100, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1200, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1300, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1400, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1500, 29, 100);
      cm.spawnMobLimit(9300812, 1, 1600, 29, 100);
      cm.playerMessage(-1, "请将地图中的幽灵全部消灭，然后通过传送口移动到下个地图。");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    }
    cm.dispose();
  }
}