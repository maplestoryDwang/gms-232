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
    cm.gloryEnableEventSkill(240, 11, 7);
    cm.scheduleWarpTask(1800, 993173150, 0, false);
    cm.eventSKill(21, 21, 0, 1, 0, 80002818, 1, 0, 0, 0, 0, 0, 1000, 1);
    cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100340);
    cm.updateInfoQuest(100342, "bomb=0;collectCount=0");
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    if (em.getNumberProperty("ship") == 0) {
      cm.getWeatherEffectNotice("为了摧毁敌方登陆船，必须先消灭炸弹兵，收集炸弹！", 297, 7000, 1);
    } else {
      cm.getWeatherEffectNotice("敌方登陆船出没！请点击NPC/采集快捷键，投掷收集的炮弹！", 297, 7000, 1);
    }
    cm.dispose();
  }
}