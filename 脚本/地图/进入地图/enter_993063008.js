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
      cm.npc_ChangeController(3003717, 'oid=276987', -40, 206, 8, -90, 10, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -80, 155);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h5;15=h1;17=h1;09=h0;79=h1");
          cm.npc_ChangeController(3003724, "oid=2308263", -250, 180, 4, -300, -200, 0, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308263", "summon", 0, 0);
          cm.npc_ChangeController(3003724, "oid=2308264", 90, 180, 1, 40, 140, 1, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308264", "summon", 0, 0);
          cm.npc_ChangeController(3003724, "oid=2308265", -380, 180, 6, -430, -330, 0, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308265", "summon", 0, 0);
          cm.npc_ChangeController(3003725, "oid=2308266", 250, 180, 2, 200, 300, 1, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308266", "summon", 0, 0);
          cm.npc_ChangeController(3003725, "oid=2308267", -500, 180, 7, -550, -450, 0, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308267", 'summon', 0, 0);
          cm.npc_ChangeController(3003725, "oid=2308268", 370, 180, 11, 320, 420, 1, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2308268", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2308263", "stand", -1, 1);
          cm.npc_SetSpecialAction("oid=2308264", 'stand', -1, 1);
          cm.npc_SetSpecialAction("oid=2308265", "stand", -1, 1);
          cm.npc_SetSpecialAction("oid=2308266", 'stand', -1, 1);
          cm.npc_SetSpecialAction("oid=2308267", "stand", -1, 1);
          cm.npc_SetSpecialAction("oid=2308268", 'stand', -1, 1);
          cm.inGameDirectionEvent_OneTimeAction(4, 99999);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(10, 0);
              cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(4, 0);
                cm.npc_SetSpecialAction("oid=2308264", "die1", 1000, 1);
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Die", 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2308264");
                  cm.npc_LeaveField("oid=2308264");
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("咳呃呃……", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003724, "oid=2308279", 90, 180, 1, 40, 140, 1, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=2308279", "summon", 0, 0);
                        cm.npc_SetSpecialAction("oid=2308279", "stand1", -1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Regen", 100);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("呼哧……呼哧……坚持不下去了。最好离开这里！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h5;15=h1;17=h0;09=h0;79=h1");
                                    cm.inGameDirectionEvent_ChangeEquipment([1103137]);
                                    cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2308279", "die1", 1000, 1);
                                      cm.npc_SetSpecialAction("oid=2308266", "die1", 1000, 1);
                                      cm.npc_SetSpecialAction("oid=2308268", "die1", 1000, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Die", 100);
                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644705/Die", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2308279");
                                        cm.npc_LeaveField("oid=2308279");
                                        cm.npc_LeaveField("oid=2308266");
                                        cm.npc_LeaveField("oid=2308266");
                                        cm.npc_LeaveField("oid=2308268");
                                        cm.npc_LeaveField("oid=2308268");
                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else if (status === V++) {
                                                  cm.forceCompleteQuest(35713);
                                                  cm.gainExp(341342713);
                                                  cm.npc_LeaveField("oid=2308263");
                                                  cm.npc_LeaveField("oid=2308263");
                                                  cm.npc_LeaveField("oid=2308265");
                                                  cm.npc_LeaveField("oid=2308265");
                                                  cm.npc_LeaveField("oid=2308267");
                                                  cm.npc_LeaveField("oid=2308267");
                                                  cm.dispose();
                                                  cm.warp(450011220, 1, false);
                                                  cm.setStandAloneMode(false);
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