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
      if (cm.getNumberFromQuestInfo(39921, 'dir') > 0) {
        cm.npc_ChangeController(3004435, "oid=63706617", -400, 180, 14, -450, -350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706617", "summon", 0, 0);
        cm.npc_ChangeController(3004436, "oid=63706618", -500, 180, 5, -550, -450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706618", 'summon', 0, 0);
        cm.npc_ChangeController(3004481, "oid=63706619", -600, 180, 13, -650, -550, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63706619", "summon", 0, 0);
        cm.npc_ChangeController(3004441, "oid=63706620", 24, 180, 1, -26, 74, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706620", "summon", 0, 0);
        cm.npc_ChangeController(3004430, "oid=63706621", -69, 180, 2, -119, -19, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706621", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63706622", 300, 180, 19, 250, 350, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706622", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63706623", 400, 180, 20, 350, 450, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706623", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63706624", 500, 180, 21, 450, 550, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63706624", "summon", 0, 0);
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3004435, "oid=63705423", -400, 180, 14, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705423", "summon", 0, 0);
      cm.npc_ChangeController(3004436, "oid=63705426", -500, 180, 5, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705426", 'summon', 0, 0);
      cm.npc_ChangeController(3004481, "oid=63705427", -600, 180, 13, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63705427", "summon", 0, 0);
      cm.npc_ChangeController(3004441, "oid=63705429", 24, 180, 1, -26, 74, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705429", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=63705430", -69, 180, 2, -119, -19, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705430", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63705431", 300, 180, 19, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705431", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63705432", 400, 180, 20, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705432", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63705433", 500, 180, 21, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63705433", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Text(["#fn黑体##fs18#战争结束几天后。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.warp(410000810, 0, true);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.updateInfoQuest(39921, "dir=1");
            cm.npc_LeaveField("oid=63705423");
            cm.npc_LeaveField("oid=63705423");
            cm.npc_LeaveField("oid=63705426");
            cm.npc_LeaveField("oid=63705426");
            cm.npc_LeaveField("oid=63705427");
            cm.npc_LeaveField("oid=63705427");
            cm.npc_LeaveField("oid=63705429");
            cm.npc_LeaveField("oid=63705429");
            cm.npc_LeaveField("oid=63705430");
            cm.npc_LeaveField("oid=63705430");
            cm.npc_LeaveField("oid=63705431");
            cm.npc_LeaveField("oid=63705431");
            cm.npc_LeaveField("oid=63705432");
            cm.npc_LeaveField("oid=63705432");
            cm.npc_LeaveField("oid=63705433");
            cm.npc_LeaveField("oid=63705433");
            cm.dispose();
          }
        }
      }
    }
  }
}