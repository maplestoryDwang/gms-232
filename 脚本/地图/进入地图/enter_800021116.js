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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(222, 50000);
        cm.npc_ChangeController(9111003, "oid=47014797", 130, 139, 36, 80, 180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=47014797", 'summon', 0, 0);
        cm.npc_ChangeController(9111005, "oid=47014798", -226, 139, 14, -276, -176, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=47014798", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("(呃呃……头好晕。)", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##h0#！醒醒！", 37, 9111005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啧啧，现在的年轻人小身板真弱。", 37, 9111003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咦，这是什么地方。呃……脑袋疼得像要裂开一样。", 57, 0, true, true);
              } else if (status === V++) {
                cm.warp(800021117, 0, false);
                cm.npc_LeaveField("oid=47014797");
                cm.npc_LeaveField("oid=47014797");
                cm.npc_LeaveField("oid=47014798");
                cm.npc_LeaveField("oid=47014798");
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}