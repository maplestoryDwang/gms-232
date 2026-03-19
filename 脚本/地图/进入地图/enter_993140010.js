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
      if (cm.isQuestFinished(37402)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3004433, "oid=504383", -300, -40, 5, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504383", "summon", 0, 0);
      cm.npc_ChangeController(3004431, 'oid=504384', -118, -40, 5, -168, -68, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504384", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=504385", 290, -40, 6, 240, 340, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=504385", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=504386", -400, -40, 5, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504386", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=504387", -460, -40, 5, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504387", "summon", 0, 0);
      if (cm.isQuestFinished(37401)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -134, -898);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("SoundEff.img/cernium2/seawave", 100, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, -134, -189);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.forceCompleteQuest(37401);
                      cm.updateInfoQuest(39800, "01=h1;11=h1");
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.setStandAloneMode(false);
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
  }
}