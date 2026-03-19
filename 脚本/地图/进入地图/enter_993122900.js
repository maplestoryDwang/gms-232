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
    cm.eventSKill(22, 22, 0, 1, 0, 80002836, 1, 0, 0, 0, 0, 0, 5000, 256);
    cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100354);
    cm.getWeatherEffectNotice("移动前，请消灭图书馆灵魂，尽可能多多收集古代魔力！", 297, 8000, 1);
    cm.playerMessage(5, "移动前，请消灭图书馆灵魂，尽可能多多收集古代魔力！");
    cm.updateInfoQuest(100355, "phase=1;cheermid=0;ideaState=0;cheer=0;gauge=0;ready=0");
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    cm.cerniumProtectBookStart(0);
    cm.dispose();
  }
}