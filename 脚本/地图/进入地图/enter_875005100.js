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
  } else {
    if (status === V++) {
      cm.npc_ChangeController(9401364, "oid=207172", 130, 220, 15, 80, 180, 1, false, 0, false);
      cm.npc_ChangeController(9401283, "oid=207173", 422, -1285, 58, 372, 472, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.spawnMobLevel(9601683, 1, 20, -250, -681);
      cm.spawnMobLevel(9601683, 1, 20, -50, -698);
      cm.spawnMobLevel(9601683, 1, 20, 2050, -696);
      cm.spawnMobLevel(9601683, 1, 20, 350, -692);
      cm.spawnMobLevel(9601683, 1, 20, 550, -707);
      cm.sendNewEffects(13, [3000, 0, 1, 20600]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("哎呀呀！走开，给我走开！", 37, 9401364, false, true, 1);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 530, -1300);
          cm.sendNewEffects(19, [0]);
        } else if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.addPopupSay(9401283, 3000, "#face0#在那下边，大侠！", '', 0);
          cm.spawnMobLevel(9601683, 1, 20, -100, -322);
          cm.spawnMobLevel(9601683, 1, 20, -316, -296);
          cm.spawnMobLevel(9601683, 1, 20, 334, -29);
          cm.spawnMobLevel(9601683, 1, 20, 396, -27);
          cm.spawnMobLevel(9601683, 1, 20, -375, -13);
          cm.spawnMobLevel(9601683, 1, 20, 2003, -31);
          cm.spawnMobLevel(9601683, 1, 20, 546, -42);
          cm.spawnMobLevel(9601683, 1, 20, 61, -31);
          cm.spawnMobLevel(9601683, 1, 20, 548, -42);
          cm.spawnMobLevel(9601683, 1, 20, 66, 304);
          cm.spawnMobLevel(9601683, 1, 20, -375, 304);
          cm.spawnMobLevel(9601683, 1, 20, -375, 303);
          cm.spawnMobLevel(9601683, 1, 20, 608, 304);
          cm.spawnMobLevel(9601683, 1, 20, 365, 304);
          cm.dispose();
        }
      }
    }
  }
}