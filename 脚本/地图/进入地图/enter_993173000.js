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
    cm.scheduleWarpTask(1800, 993173150, 0, false);
    cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100340);
    cm.gloryEnableEventSkill(239, 11, 3);
    cm.gloryEnableEventSkill(239, 11, 7);
    cm.gloryEnableEventSkill(239, 12, 769);
    cm.gloryEnableEventSkill(239, 11, 3);
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    cm.getWeatherEffectNotice("敌人在攻打弓手基地！等数值蓄满，弓手基地就会发动强力反击！", 297, 7000, 1);
    cm.dispose();
  }
}