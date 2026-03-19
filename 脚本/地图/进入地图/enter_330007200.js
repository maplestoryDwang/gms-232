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
    cm.onCreateGun();
    cm.onSetGun("soccerball", "shotgun", 1, 200, -8, -8, 8, 8);
    cm.onSetAmmo(100);
    cm.updateInfoQuest(31359, '');
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.fieldEffect_Effect14("spinoff1/msg1", 7, 1);
    cm.curNodeEventEnd(true);
    cm.dispose();
    cm.spawnMobLimit(2700029, 1, 222, 86, 1);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;