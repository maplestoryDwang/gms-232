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
      if (cm.getNumberFromQuestInfo(39917, "dir") > 0 && !cm.isQuestFinished(39920)) {
        cm.onSetMapObjectMove("cernium_sky_a", [1, 0, 1]);
        cm.onSetMapObjectMove("cernium_sky_b", [1, 255, 1]);
        cm.onSetMapObjectMove("cernium_sky_c", [1, 0, 1]);
        cm.npc_ChangeController(3004436, "oid=63582920", 330, 0, 11, 280, 380, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63582920", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=63582921", 430, 0, 10, 380, 480, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63582921", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=63582920", "special", -1, 1);
        cm.npc_SetSpecialAction("oid=63582921", "special", -1, 1);
        cm.dispose();
        return;
      }
      cm.onSetMapObjectMove("cernium_sky_a", [1, 0, 1]);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 255, 1]);
      cm.onSetMapObjectMove("cernium_sky_c", [1, 0, 1]);
      cm.npc_ChangeController(3004436, "oid=63581716", 330, 0, 11, 280, 380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63581716", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=63581717", 430, 0, 10, 380, 480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63581717", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=63581716", "special", -1, 1);
      cm.npc_SetSpecialAction("oid=63581717", "special", -1, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setNPC_Fadein(3004516, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 619, 28);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(13000, 0, 1500, 13000, -560, 32);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(15000);
            } else if (status === V++) {
              cm.updateInfoQuest(39917, "dir=1;clear=1");
              cm.eventSKill(0);
              cm.warp(cm.getMapId(), 0, true);
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.npc_LeaveField("oid=63581716");
              cm.npc_LeaveField("oid=63581716");
              cm.npc_LeaveField("oid=63581717");
              cm.npc_LeaveField("oid=63581717");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}