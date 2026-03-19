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
    cm.updateInfoQuest(31359, '');
    cm.onCreateGun();
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.fieldEffect_Effect14("colossus/msg2", 7, 1);
    cm.fieldEffect_Effect14("colossus/exit", 8, 1);
    cm.onSetGun("shotgun", 'shotgun', 1, 200, -8, -8, 8, 8);
    cm.onSetAmmo(30);
    cm.spawnMobLimit(9307007, 1, 70, 35, 100);
    cm.spawnMobLimit(9307007, 1, 70, 35, 100);
    cm.spawnMobLimit(9307007, 1, -40, 35, 100);
    cm.spawnMobLimit(9307007, 1, -40, 35, 100);
    cm.spawnMobLimit(9307008, 1, -277, 335, 100);
    cm.spawnMobLimit(9307007, 1, -277, 335, 100);
    cm.spawnMobLimit(9307007, 1, -400, 335, 100);
    cm.spawnMobLimit(9307008, 1, -400, 335, 100);
    cm.spawnMobLimit(9307007, 1, 290, -145, 100);
    cm.spawnMobLimit(9307007, 1, 290, -145, 100);
    cm.spawnMobLimit(9307007, 1, 334, 155, 100);
    cm.spawnMobLimit(9307008, 1, 334, 155, 100);
    cm.spawnMobLimit(9307007, 1, 334, 155, 100);
    cm.curNodeEventEnd(true);
    cm.dispose();
  }
}