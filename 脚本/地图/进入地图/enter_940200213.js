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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -797, 114);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -900, 180);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003314, "oid=1832897", -700, 130, 55, -750, -650, 1, true, false);
          cm.npc_SetSpecialAction("oid=1832897", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=1832897", "stand2", -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#把我从这个闷得慌的根里救出去！", 37, 3003314, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_QTE(0);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=1832897");
                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                  cm.npc_SetSpecialAction("oid=1832897", "free", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1440);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(450005400, 3, true);
                      cm.setInGameDirectionMode(false, true, false);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;