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
    cm.scheduleWarpTask(1800, 993123000, 0, false);
    cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100354);
    cm.getWeatherEffectNotice("请消灭火花精灵，搜索躲藏的高等翼人侦察兵的痕迹。", 297, 7000, 1);
    cm.updateInfoQuest(100357, "mobCount=0;lefCount=0;state=0");
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    cm.cerniumFindSpyStart();
    cm.dispose();
  }
}