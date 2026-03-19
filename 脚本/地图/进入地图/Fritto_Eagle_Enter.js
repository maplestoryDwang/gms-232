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
    cm.updateInfoQuest(31359, '');
    cm.onCreateGun();
    cm.curNodeEventEnd(true);
    cm.eventSKill(0);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.fieldEffect_Effect14("PoloFritto/msg1", 7, 1);
    cm.onSetGun('shotgun', "shotgun", 1, 200, -8, -8, 8, 8);
    cm.onSetAmmo(20);
    cm.updateInfoQuest(15141, "mob2=2;reward=1;mob3=4;point=0;ammo=20;mob0=6;mob1=3");
    cm.fieldEffect_ScreenMsg("PoloFritto/msg4");
    cm.spawnMobLimit(9833000, 1, 70, 35, 100);
    cm.spawnMobLimit(9833000, 1, 70, 35, 100);
    cm.spawnMobLimit(9833000, 1, -40, 35, 100);
    cm.spawnMobLimit(9833000, 1, -40, 35, 100);
    cm.spawnMobLimit(9833000, 1, -277, 215, 100);
    cm.spawnMobLimit(9833000, 1, -277, 215, 100);
    cm.spawnMobLimit(9833001, 1, 70, 35, 100);
    cm.spawnMobLimit(9833001, 1, 70, 35, 100);
    cm.spawnMobLimit(9833001, 1, -40, 35, 100);
    cm.spawnMobLimit(9833003, 1, 70, 35, 100);
    cm.spawnMobLimit(9833003, 1, 70, 35, 100);
    cm.spawnMobLimit(9833003, 1, -40, 35, 100);
    cm.spawnMobLimit(9833003, 1, -40, 35, 100);
    cm.spawnMobLimit(9833002, 1, -277, 215, 100);
    cm.spawnMobLimit(9833002, 1, -400, 215, 100);
    cm.curNodeEventEnd(true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;