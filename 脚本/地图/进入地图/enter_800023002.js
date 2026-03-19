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
      if (cm.getQuestStatus(58758) > 0) {
        cm.dispose();
        return;
      }
      cm.forceStartQuest(58758, '');
      cm.forceStartQuest(58704, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111004, "oid=3845606", -170, 30, 91, -220, -120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3845606", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.sendNormalTalk_Bottom('嗯？有声响……', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3845606", 1, 100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3845606"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('鵺，你要一起去吗？', 57, 0, false, true);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3845606"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face0#哼！哼！你瞎说什么，人类！", 37, 9111004, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯？我以为你想一起去，所以一直跟着我。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……哼！", 37, 9111004, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=3845606", -1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("……。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=3845606", 1, 170, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.npc_setForceFlip("oid=3845606", -1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3845606"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                  cm.sendNormalTalk_Bottom("那你到底干嘛跟着我？！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=3845606", 1, 170, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                            cm.sendNormalTalk_Bottom("切，随你便吧~", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.warp(800023003, 0, false);
                                                cm.npc_LeaveField("oid=3845606");
                                                cm.npc_LeaveField("oid=3845606");
                                                cm.eventSKill(0);
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