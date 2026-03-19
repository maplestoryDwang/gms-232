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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000128, "oid=203413272", 1450, 0, 5, 1400, 1500, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=203413272", 'summon', 0, 0);
        cm.npc_ChangeController(3000129, "oid=203413273", 1550, 0, 12, 1500, 1600, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=203413273", "summon", 0, 0);
        cm.npc_ChangeController(3000122, "oid=203413274", 1650, 0, 15, 1600, 1700, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=203413274", "summon", 0, 0);
        cm.npc_ChangeController(3000130, "oid=203413275", 2070, 0, 3, 2020, 2120, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=203413275", 'summon', 0, 0);
        cm.npc_ChangeController(3000125, "oid=203413276", 2200, 0, 8, 2150, 2250, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=203413276", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("真累人，我觉得快撑不下去了。", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=203413272", 'die1', 0, 1);
              cm.npc_SetSpecialAction("oid=203413273", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=203413274", 'die1', 0, 1);
              cm.npc_SetSpecialAction("oid=203413275", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=203413276", "die1", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=203413272");
                cm.npc_LeaveField("oid=203413272");
                cm.npc_LeaveField("oid=203413273");
                cm.npc_LeaveField("oid=203413273");
                cm.npc_LeaveField("oid=203413274");
                cm.npc_LeaveField("oid=203413274");
                cm.npc_LeaveField("oid=203413275");
                cm.npc_LeaveField("oid=203413275");
                cm.npc_LeaveField("oid=203413276");
                cm.npc_LeaveField("oid=203413276");
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("保护罩复原了！位于保护罩内部的幽灵正在不断死去！", 17, 0, false, true);
                } else if (status === V++) {
                  cm.playerMessage(5, '发生了未知错误。');
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(400000000, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}