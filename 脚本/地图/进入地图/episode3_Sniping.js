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
    cm.eventSKill(0);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.fieldEffect_Effect14("colossus/msg1", 7, 1);
    cm.fieldEffect_Effect14("colossus/exit", 8, 1);
    cm.onSetGun('shotgun', 'shotgun', 1, 200, -8, -8, 8, 8);
    cm.onSetAmmo(50);
    cm.spawnMobLimit(8230035, 1, -294, 245, 12);
    cm.spawnMobLimit(8230035, 1, 0, 245, 12);
    cm.spawnMobLimit(8230035, 1, 274, 245, 12);
    cm.spawnMobLimit(8230035, 1, -251, 5, 12);
    cm.spawnMobLimit(8230035, 1, 248, 5, 12);
    cm.spawnMobLimit(8230035, 1, -3, -115, 12);
    cm.spawnMobLimit(8230035, 1, -243, -295, 12);
    cm.spawnMobLimit(8230035, 1, -260, -295, 12);
    cm.spawnMobLimit(8230035, 1, -210, 5, 12);
    cm.spawnMobLimit(8230035, 1, 235, 5, 12);
    cm.spawnMobLimit(8230035, 1, -59, -115, 12);
    cm.spawnMobLimit(8230035, 1, 141, -115, 12);
    cm.dispose();
  }
}