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
      if (cm.isQuestFinished(34235)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003475, "oid=205316", 1591, 63, 5, 1541, 1641, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.sendNormalTalk_Bottom("咦……那是？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("原来这里有门吗……？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else if (status === V++) {
                      cm.setStandAloneMode(false);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.dispose();
                      cm.warp(450006330, 2, true);
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