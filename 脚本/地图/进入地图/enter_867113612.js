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
      cm.npc_ChangeController(9400201, "oid=23128237", 664, 1514, 78, 614, 714, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23128237", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("#fs13##e谢谢你，年轻人！\r\n一路爬上来辛苦你了。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400201, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("#fs12#你没事吧，老人家？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(867113612, 20, 20, 20);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_NormalSpeechBalloon("#fs20##e#r嗬！#fs18#年轻人！", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 9400201, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
              cm.effect_NormalSpeechBalloon("#fs18##e#r当心头顶！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400201, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/PL_AfterLand/dropStone");
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/2211006/Hit", 100);
                  cm.inGameDirectionEvent_MoveAction(4);
                  cm.emotion(18, 5000);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Game.img/Tombstone", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(867113612, 0, 0, 0);
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                        } else if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                          cm.setStandAloneMode(false);
                          cm.dispose();
                          cm.warp(867113100, 0, true);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=23128237");
                          cm.npc_LeaveField("oid=23128237");
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