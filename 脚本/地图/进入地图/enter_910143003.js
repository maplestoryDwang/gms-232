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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -544, 100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 180, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('惨叫声……停止了？', 3, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(6);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("好像没有任何……人#fs16#嗯#fs20#嗯#fs24#嗯#fs28#嗯！！！！！！！", 3, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.emotion(6, 99999999);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(1501014, "oid=15575141", -70, 120, 32, -120, -20, 1, false, 1500, false);
                                cm.npc_SetSpecialAction("oid=15575141", "summon", 0, 0);
                                cm.setNPC_Fadein(1501014, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(100, 1500, 100, -270, 100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(100, 2500, 100, -95, 125);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(100, 3500, 100, -70, 150);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close", 200);
                                              cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -270, 150);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#fs28#啊啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！！！", 3, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk('喂。', 5, 1501012, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -600, 150);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_ChangeController(1501012, "oid=15575148", -640, 130, 21, -690, -590, 0, true, false);
                                                          cm.npc_SetSpecialAction("oid=15575148", "summon", 0, 0);
                                                          cm.setNPC_Fadein(1501012, 1);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_MoveAction(7);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("请……听我说……", 5, 1501012, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk('啊……', 3, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.emotion(7, 999999);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(4);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -640, 150, 1, 0, 1, 1, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk('哈……', 5, 1501012, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.npc_LeaveField("oid=15575141");
                                                                                      cm.npc_LeaveField("oid=15575148");
                                                                                      cm.dispose();
                                                                                      cm.warp(101082000, 0);
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