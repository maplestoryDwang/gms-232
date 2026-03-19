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
    cm.setInGameDirectionMode(false, false, false);
    cm.setStandAloneMode(false);
    cm.setAmbience("SoundEff.img/ArcaneRiver/waterfall", 200, 60);
    cm.playerMessage(-1, "跳下去就是啾啾岛了。");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;