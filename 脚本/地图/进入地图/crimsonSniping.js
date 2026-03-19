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
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.fieldEffect_Effect14("colossus/msg1", 7, 1);
    cm.fieldEffect_Effect14("colossus/exit", 8, 1);
    cm.onSetGun("shotgun", "shotgun", 1, 200, -8, -8, 8, 8);
    cm.onSetAmmo(40);
    cm.spawnMobLimit(9307011, 1, -360, -271, 100);
    cm.spawnMobLimit(9307012, 1, -300, -271, 100);
    cm.spawnMobLimit(9307011, 1, -360, -271, 100);
    cm.spawnMobLimit(9307012, 1, -300, -271, 100);
    cm.spawnMobLimit(9307013, 1, -200, -271, 100);
    cm.spawnMobLimit(9307011, 1, -100, -271, 100);
    cm.spawnMobLimit(9307012, 1, 50, -271, 100);
    cm.spawnMobLimit(9307013, 1, 90, -271, 100);
    cm.spawnMobLimit(9307011, 1, -340, -89, 100);
    cm.spawnMobLimit(9307012, 1, -290, -89, 100);
    cm.spawnMobLimit(9307013, 1, -211, -89, 100);
    cm.spawnMobLimit(9307011, 1, -9, -89, 100);
    cm.spawnMobLimit(9307012, 1, 30, -89, 100);
    cm.spawnMobLimit(9307013, 1, 360, -89, 100);
    cm.spawnMobLimit(9307011, 1, -360, 92, 100);
    cm.spawnMobLimit(9307012, 1, 142, 208, 100);
    cm.spawnMobLimit(9307013, 1, 100, 92, 100);
    cm.spawnMobLimit(9307011, 1, 280, 92, 100);
    cm.spawnMobLimit(9307012, 1, 333, 92, 100);
    cm.spawnMobLimit(9307013, 1, 431, 92, 100);
    cm.spawnMobLimit(9307012, 1, 142, 208, 100);
    cm.spawnMobLimit(9307013, 1, 100, 92, 100);
    cm.spawnMobLimit(9307011, 1, 280, 92, 100);
    cm.spawnMobLimit(9307012, 1, 333, 92, 100);
    cm.spawnMobLimit(9307013, 1, 431, 92, 100);
    cm.curNodeEventEnd(true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;