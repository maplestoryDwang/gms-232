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
      cm.npc_ChangeController(3001924, "oid=434195", -2219, -167, 6, -2270, -2210, 5, true, 0, false);
      cm.npc_ChangeController(3001924, 'oid=434196', -1946, -167, 6, -1992, -1929, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1100, -478);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001952, "oid=6491402", -980, -170, 2, -1030, -930, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6491402", "summon", 0, 0);
        cm.npc_ChangeController(3001960, "oid=6491403", -1200, -170, 4, -1250, -1150, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=6491403", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=6491402", 'special1', 6000, 0);
        cm.npc_SetSpecialAction("oid=6491403", "special3", 6000, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
            cm.userSetFieldFloating(993162026, 5, 5, 5);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993162026, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -1100, -170);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#居然想出这么无厘头的主意……真拿你没办法。\r\n再跟你一起混下去，只怕我也会被传染到你的傻气。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#同时我也在向你学习，变得更稳重啊。\r\n嘻嘻……不是吗，布乌？", 36, 3001952, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#布~？", 36, 3001960, true, true, 1);
                      } else {
                        if (status === V++) {
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
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2188, -170);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6#往右边走，能去到伯爵的办公室。\r\n但因为先前的噪音，佣人们肯定都提高了警惕。", 36, 3001952, false, true, 1);
                                    } else {
                                      if (status === V++) {
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
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1100, -170);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#啊……有了！布乌，是时候用上你的特长了！\r\n能办到吗？", 36, 3001952, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face1#咘！', 36, 3001960, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=6491403", "special10", 2500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/Transform", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.forceCompleteQuest(39640);
                                                                cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h1;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h1");
                                                                cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h1;j=1;54=h0;55=h0;56=h0;57=h1;58=h0;59=h0;q=2");
                                                                cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h1;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h1;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=2");
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
                                                                      cm.warp(410000345, 0, false);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.npc_LeaveField("oid=6491402");
                                                                      cm.npc_LeaveField("oid=6491403");
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