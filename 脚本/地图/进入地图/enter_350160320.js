var status = -1;
var selectionLog = [];
function action(s, p, X) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = X;
  var L = -1;
  if (status <= L++) {
    cm.dispose();
  } else if (status === L++) {
    if (cm.getMapId() == 350160320) {
      cm.showMapleHero();
      cm.setDisableDrops(true);
    }
    cm.getWeatherEffectNotice("戴米安正在给英雄烙下刻印.完成刻印时英雄们将受到巨大的伤害.", 127, 120000, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;