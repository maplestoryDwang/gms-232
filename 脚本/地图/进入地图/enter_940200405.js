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
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003350, "oid=1878569", -662, 25, 6, -712, -612, 1, true, false);
      cm.npc_SetSpecialAction("oid=1878569", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=1878569");
      cm.npc_SetSpecialAction("oid=1878569", "cry", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.playerMessage(-1, "只有消灭野外的所有怪物，才能前往下一地区。");
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else if (status === V++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.spawnMobMultipler(8644020, 1, 20, -1400, -11);
        cm.spawnMobMultipler(8644020, 1, 20, -1310, -11);
        cm.spawnMobMultipler(8644020, 1, 20, -1220, -11);
        cm.spawnMobMultipler(8644020, 1, 20, -1130, -11);
        cm.spawnMobMultipler(8644020, 1, 20, -1040, -11);
        cm.spawnMobMultipler(8644020, 1, 20, -950, -11);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;