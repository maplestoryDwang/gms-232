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
      cm.forceCompleteQuest(63024);
      cm.npc_ChangeController(9400253, "oid=23054498", 550, 230, 4, 500, 600, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23054498", "summon", 0, 0);
      cm.npc_ChangeController(9400200, "oid=23054499", 0, 230, 14, -50, 50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23054499", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 550, 150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("#fs13##e你多小心，年轻人", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(4);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(4);
                  cm.inGameDirectionEvent_AskAnswerTime(400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(4);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(4);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/6400008/Attack1", 100);
                              cm.npc_SetSpecialAction("oid=23054498", 'action', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("#fs18##e#r嗬！！！蝙蝠怪动了！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8830000/Attack1", 100);
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.emotion(18, 15000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(867113631, 20, 20, 20);
                                    cm.fieldEffect_PlayFieldSound("Sound/Game.img/BurningCharacter", 100);
                                    cm.fieldEffect_ScreenMsg("balog/clear/stone");
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(4);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/6400008/Die", 100);
                                          cm.fieldEffect_PlayFieldSound("Sound/Game.img/Tombstone", 100);
                                          cm.userSetFieldFloating(867113631, 0, 0, 0);
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                              cm.dispose();
                                              cm.warp(867113100, 0, true);
                                              cm.setStandAloneMode(false);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=23054498");
                                              cm.npc_LeaveField("oid=23054498");
                                              cm.npc_LeaveField("oid=23054499");
                                              cm.npc_LeaveField("oid=23054499");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;