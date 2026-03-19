var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9310596, "oid=6198688", 149, 294, 26, 99, 199, 0, true, false);
      cm.npc_SetSpecialAction("oid=6198688", "summon", 0, 0);
      cm.npc_setForceFlip("oid=6198688", -1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("居然能跟踪到这里……看来是我大意了！", 37, 9310596, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=6198688", "teleportation", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=6198688");
              cm.npc_LeaveField("oid=6198688");
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.getMap().startSimpleMapEffect("你将成为证明我力量的第一个牺牲品!", 5120161);
              cm.spawnMobLimit(9601068, 1, 149, 253, 100);
              cm.spawnMobLimit(9601067, 1, 86, 253, 100);
              cm.spawnMobLimit(9601067, 1, 76, 253, 100);
              cm.spawnMobLimit(9601067, 1, 216, 253, 100);
              cm.spawnMobLimit(9601067, 1, 191, 253, 100);
              cm.spawnMobLimit(9601067, 1, 43, 253, 100);
              cm.spawnMobLimit(9601067, 1, 166, 186, 100);
              cm.spawnMobLimit(9601067, 1, 1435, 253, 100);
              cm.spawnMobLimit(9601067, 1, 1400, 253, 100);
              cm.spawnMobLimit(9601067, 1, 18, 253, 100);
              cm.spawnMobLimit(9601067, 1, -145, 253, 100);
              cm.spawnMobLimit(9601067, 1, -118, 253, 100);
              cm.spawnMobLimit(9601067, 1, -29, 253, 100);
              cm.spawnMobLimit(9601067, 1, -129, 253, 100);
              cm.spawnMobLimit(9601067, 1, 37, 253, 100);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}