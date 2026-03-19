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
      cm.setInGameDirectionMode(false, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540486, "oid=290737914", 2098, -129, 4, 2048, 2148, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=290737914", 'summon', 0, 0);
            cm.npc_SetSpecialAction("oid=290737914", "appear", 0, 0);
            cm.userSetFieldFloating(350042602, 50, 10, 20);
            cm.inGameDirectionEvent_AskAnswerTime(1300);
            cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(350042602, 0, 0, 0);
              cm.npc_SetSpecialAction("oid=290737914", "stay", -1, 1);
              cm.userSetFieldFloating(350042602, 30, 0, 10);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                } else {
                  if (status === V++) {
                    cm.emotion(5, 3000);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                      cm.effect_NormalSpeechBalloon("……又是那东西, 看来我不该从盖奥勒克上面下来的. ", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                    } else if (status === V++) {
                      cm.playerMessage(5, "请逃离粉碎机. ");
                      cm.dispose();
                      cm.warp(350042700, 0, false);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=290737914");
                      cm.npc_LeaveField("oid=290737914");
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