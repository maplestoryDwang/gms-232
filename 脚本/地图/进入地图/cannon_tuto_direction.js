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
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true);
    cm.setStandAloneMode(true);
    cm.effect_Direction("Effect/Direction4.img/cannonshooter/Scene00");
    cm.effect_Direction("Effect/Direction4.img/cannonshooter/out00");
    cm.dispose();
  }
}