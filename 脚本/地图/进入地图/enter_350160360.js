var status = -1;
var selectionLog = [];
function action(w, Y, g) {
  if (status == 0 && w == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = g;
  var p = -1;
  if (status <= p++) {
    cm.dispose();
  } else if (status === p++) {
    if (cm.getMapId() == 350160360) {
      cm.showMapleHero();
      cm.setDisableDrops(true);
    }
    cm.openUI(1115);
    cm.getWeatherEffectNotice("戴米安正在给英雄烙下刻印.完成刻印时英雄们将受到巨大的伤害.", 127, 30000, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;