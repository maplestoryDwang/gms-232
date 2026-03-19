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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001272, "oid=682323", -1474, 38, 251, -1524, -1424, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=682323", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_QTE(0);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=682323");
              cm.inGameDirectionEvent_OneTimeAction(7, 0);
              cm.npc_SetSpecialAction('oid=682323', "die", 0, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/box_break", 100);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.npc_LeaveField('oid=682323');
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.forceStartQuest(34619, '');
                    cm.updateInfoQuest(34619, "clear=1");
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.dispose();
                    cm.warp(402000000, 2, true);
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