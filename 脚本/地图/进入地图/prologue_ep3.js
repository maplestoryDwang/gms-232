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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530275, "oid=37219046", 470, 280, 34, 420, 520, 0, true, false);
      cm.npc_SetSpecialAction("oid=37219046", "summon", 0, 0);
      cm.npc_ChangeController(1530309, "oid=37219047", 530, 280, 34, 480, 580, 1, true, false);
      cm.npc_SetSpecialAction("oid=37219047", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=37219046", "love", -1, 1);
      cm.npc_SetSpecialAction("oid=37219047", "love", -1, 1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 500, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(449);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("亲爱哒，我想吃带巧克力的饼干！", 37, 1530300, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH3_00/1", 100);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                cm.sendNormalTalk_Bottom("我的宝贝儿，想吃带巧克力的饼干吗？今天放学后我们一块儿去吃吧？", 37, 1530270, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH3_00/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哦，哦！带巧克力的饼干！……不过，亲爱哒，怎么感觉这么冷呐？", 37, 1530300, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH3_00/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我家宝贝儿冷了吗？生病可不行的呦~让亲爱哒来~抱抱你吧？", 37, 1530270, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH3_00/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("啊，不是的，就是感觉背后有点发凉……", 37, 1530300, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH3_00/5", 100);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm16.img/RedWitch", 0, 0);
                        cm.npc_ChangeController(1530150, "oid=37224371", 400, 280, 34, 350, 450, 0, true, false);
                        cm.npc_SetSpecialAction("oid=37224371", "summon", 0, 0);
                        cm.npc_ChangeController(1530160, "oid=37224372", 600, 280, 34, 550, 650, 1, true, false);
                        cm.npc_SetSpecialAction("oid=37224372", 'summon', 0, 0);
                        cm.npc_SetSpecialAction("oid=37224371", "jealousy", -1, 1);
                        cm.npc_SetSpecialAction("oid=37224372", "jealousy", -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=37219046", -1);
                          cm.npc_SetSpecialAction("oid=37219046", "suprise", -1, 1);
                          cm.npc_setForceFlip("oid=37219046", 1);
                          cm.npc_SetSpecialAction("oid=37219047", "suprise", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                          cm.effect_Voice("Voice2.img/Friends/CH3_00/6", 100);
                          cm.effect_NormalSpeechBalloon('嗬！', 1, 0, 1, 1500, 1530275, cm.getPlayer().getId());
                          cm.effect_NormalSpeechBalloon('嗬！', 1, 0, 1, 1500, 1530309, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#你们在神圣的校园里做什么呢？ \r\n#fs12#(乳臭未干的家伙！)", 37, 1530160, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH3_00/7", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("作为学生，竟然恋爱？\r\n#fs12#(我都没恋爱过！)", 37, 1530150, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH3_00/8", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 800, 600, 330);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_Voice("Voice2.img/Friends/CH3_00/9", 100);
                                    cm.effect_NormalSpeechBalloon("在学校内, ", 0, 0, 0, 1500, 1530160, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 800, 400, 330);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_Voice("Voice2.img/Friends/CH3_00/10", 100);
                                          cm.effect_NormalSpeechBalloon('恋爱！', 0, 0, 0, 1500, 1530150, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2500, 800, 500, 330);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                cm.effect_Voice("Voice2.img/Friends/CH3_00/11", 100);
                                                cm.effect_NormalSpeechBalloon("#fs18##e绝对禁止！", 0, 0, 0, 1500, 1530150, cm.getPlayer().getId());
                                                cm.effect_NormalSpeechBalloon("#fs18##e绝对禁止！", 0, 0, 0, 1500, 1530160, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 800, 500, 330);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_Voice("Voice2.img/Friends/CH3_00/12", 100);
                                                      cm.effect_NormalSpeechBalloon("#fs22##e跟我来！", 0, 0, 0, 1500, 1530150, cm.getPlayer().getId());
                                                      cm.effect_NormalSpeechBalloon("#fs22##e跟我来！", 0, 0, 0, 1500, 1530160, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 800, 500, 330);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setNpcSpecialActionReset("oid=37224372");
                                                            cm.setNpcSpecialActionReset("oid=37224371");
                                                            cm.npc_SetForceMove("oid=37224372", 1, 600, 100);
                                                            cm.npc_SetForceMove("oid=37224371", -1, 600, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setNpcSpecialActionReset("oid=37219046");
                                                              cm.setNpcSpecialActionReset("oid=37219047");
                                                              cm.npc_setForceFlip("oid=37219046", 0);
                                                              cm.npc_setForceFlip("oid=37219047", 0);
                                                              cm.npc_SetForceMove("oid=37219046", -1, 600, 100);
                                                              cm.npc_SetForceMove("oid=37219047", 1, 600, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.playVideoByScript("friendsStory.avi");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                            cm.effect_Text(["#fn黑体##fs24#Chapter 3\r\n#fs18#~校医希拉和体育老师麦格纳斯~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                  cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                          cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                cm.effect_Voice("UI.img/DragStart", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                  cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                    cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                      cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                        cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                          cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/1530571.img/stand/0# Hidden Mission：禁止谈情说爱#fs18#\r\n\r\n               HINT：不管我怎么禁止，\r\n                          学生们还是会偷偷恋爱吧？", 1);
                                                                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.forceStartQuest(33048, '');
                                                                                                              cm.forceStartQuest(32703, '');
                                                                                                              cm.dispose();
                                                                                                              cm.warp(330000010, 1);
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