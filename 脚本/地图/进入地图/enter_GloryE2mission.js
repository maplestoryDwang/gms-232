var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = 'action' + (cm.getMapId() - 993173200);
  eval(V)(f, E, e);
}
function action0(f, E, e) {
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
    cm.scheduleWarpTask(1800000, 993173350, 0, false);
    cm.honorEventUIUpdate(8, 2, 1800000, 0, 1800000, 100339);
    cm.getWeatherEffectNotice("你需要消灭翼人军和怪物海鸥，保卫城墙！", 297, 10000, 1);
    cm.dispose();
  }
}
function action50(f, E, e) {
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
    cm.scheduleWarpTask(1800000, 993173350, 0, false);
    cm.honorEventUIUpdate(8, 2, 1800000, 0, 1800000, 100339);
    cm.getWeatherEffectNotice("你需要消灭翼人军，收集能量激活保护罩！", 297, 10000, 1);
    cm.setNumberForQuestInfo(100336, "energy", 0);
    cm.cerniumLightningDefenseReactorEnergy(em.getNumberProperty("energy"));
    cm.cerniumLightningDefenseStart();
    cm.dispose();
  }
}
function action100(f, E, e) {
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
    cm.scheduleWarpTask(1800000, 993173350, 0, false);
    cm.honorEventUIUpdate(8, 2, 1800000, 0, 1800000, 100339);
    cm.getWeatherEffectNotice("你需要消灭翼人军，收集炸弹阻挡空中飞来的魔法炸弹。", 297, 10000, 1);
    cm.setNumberForQuestInfo(100336, "bomb", 0);
    cm.eventSKill(20, 20, 0, 1, 0, 80002822, 1, 0, 0, 0, 0, 0, 0, 1);
    cm.getClockCernium(0, em.getNumberProperty('endTime') + 60000 - new Date().getTime(), 60000);
    cm.dispose();
  }
}