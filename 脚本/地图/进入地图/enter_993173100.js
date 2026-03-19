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
  } else {
    if (status === V++) {
      cm.scheduleWarpTask(1800, 993173150, 0, false);
      cm.gloryEnableEventSkill(241, 11, 3);
      cm.gloryEnableEventSkill(241, 12, -812);
      cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100340);
      cm.updateInfoQuest(100343, "rope=0;collectCount=0");
      cm.Hidden_background("ropeReady1", 1, 0, 0, 0);
      cm.Hidden_background("ropeReady2", 1, 0, 0, 0);
      cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
      cm.getWeatherEffectNotice("请消灭敌人，前往攀登区域采集太阳花！", 297, 7000, 1);
      cm.dispose();
      switch (cm.rand(1, 11)) {
        case 1:
          cm.spawnMobLimit(9833655, 1, 900, -2700, 1);
          break;
        case 2:
          cm.spawnMobLimit(9833655, 1, 481, -7021, 1);
          break;
        case 3:
          cm.spawnMobLimit(9833655, 1, 115, -3419, 1);
          break;
        case 4:
          cm.spawnMobLimit(9833655, 1, 1021, -4920, 1);
          break;
        case 5:
          cm.spawnMobLimit(9833655, 1, 610, -5643, 1);
          break;
        case 6:
          cm.spawnMobLimit(9833655, 1, -469, -4920, 1);
          break;
        case 7:
          cm.spawnMobLimit(9833655, 1, 900, -2700, 1);
          break;
        case 8:
          cm.spawnMobLimit(9833655, 1, -449, -1978, 1);
          break;
        case 9:
          cm.spawnMobLimit(9833655, 1, 178, -2697, 1);
          break;
        case 10:
          cm.spawnMobLimit(9833655, 1, 930, -4139, 1);
          break;
        case 11:
          cm.spawnMobLimit(9833655, 1, -455, -4142, 1);
          break;
      }
      switch (cm.rand(1, 7)) {
        case 1:
          cm.spawnMobLimit(9833656, 1, -4, -7019, 7);
          break;
        case 2:
          cm.spawnMobLimit(9833656, 1, -184, -5642, 7);
          break;
        case 3:
          cm.spawnMobLimit(9833656, 1, 577, -6299, 7);
          break;
        case 4:
          cm.spawnMobLimit(9833656, 1, 1192, -5640, 7);
          break;
        case 5:
          cm.spawnMobLimit(9833656, 1, 148, -4920, 7);
          break;
        case 6:
          cm.spawnMobLimit(9833656, 1, 1172, -1979, 7);
          break;
        case 7:
          cm.spawnMobLimit(9833656, 1, 898, -3418, 7);
          break;
      }
    }
  }
}