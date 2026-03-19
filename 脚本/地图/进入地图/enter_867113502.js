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
      cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
      cm.setMobImage("SoundEff.img/PL_AfterLand/clear_night", 200);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.afterlandChangeMapObject("rainbow", 1, 0, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400222, "oid=22513243", -750, 50, 7, -800, -700, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22513243", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, -800, 130);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22513243", 'action', 0, 0);
          cm.afterlandChangeMapObject("rainbow", 1, 1, 3000, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_PlayMusic("Game.img/MagnifierSuccess");
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=22513243", 1);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_NormalSpeechBalloon("#fs12#嘿嘿，出发吧？", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400222, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=22513243", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                      cm.effect_PlayMusic("Game.img/Portal");
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                        } else if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.setStandAloneMode(false);
                          cm.forceCompleteQuest(63085);
                          cm.gainExp(952800);
                          cm.updateInfoQuest(63085, "exp=1");
                          cm.npc_LeaveField("oid=22513243");
                          cm.npc_LeaveField("oid=22513243");
                          cm.dispose();
                          cm.warp(867113400, 0, true);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;