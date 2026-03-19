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
      cm.npc_ChangeController(9400201, "oid=23136965", 78, 145, 8, 28, 128, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23136965", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_NormalSpeechBalloon("#fs13##e谢谢你，年轻人！", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400201, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
          cm.inGameDirectionEvent_AskAnswerTime(501);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_NormalSpeechBalloon("#fs12#你没事吧，老人家？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9400228, "oid=23137458", -400, 230, 13, -450, -350, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=23137458", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(200);
                cm.effect_NormalSpeechBalloon("#fs18##e#r嗬！年轻人，当心背后！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400201, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=23137458", 1, 1000, 300);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/1210100/Die", 100);
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.emotion(5, 3000);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(4);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/0100133/Die", 100);
                        cm.emotion(18, 3000);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/PL_AfterLand/hit");
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/Tombstone", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                            cm.setStandAloneMode(false);
                            cm.dispose();
                            cm.warp(867113100, 0, true);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=23136965");
                            cm.npc_LeaveField("oid=23136965");
                            cm.npc_LeaveField("oid=23137458");
                            cm.npc_LeaveField("oid=23137458");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;