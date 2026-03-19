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
      cm.inGameDirectionEvent_PushMoveInfo(0, 550, 430, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9130106, "oid=538185574", 593, 169, 7, 543, 643, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=538185574", "summon", 0, 0);
          cm.npc_SetForceMove("oid=538185574", -1, 300, 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("(新来的武将……是女的……？)", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Illus_II("是你带来了唤醒我的药吗？", 0, 5, true, true, 9130106);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus_II("谢谢你！多亏了你，我才能活了下来！", 0, 5, true, true, 9130106);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("(……这还是头一回明明被感谢了，但却不开心呢……)", 17, 0, true, true);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(811000032, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=538185574");
                  cm.npc_LeaveField("oid=538185574");
                  cm.forceStartQuest(58949, '2nd');
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}