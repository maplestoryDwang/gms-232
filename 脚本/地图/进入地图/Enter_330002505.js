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
      cm.npc_ChangeController(1530200, "oid=38422862", 1037, 62, 3, 987, 1087, 1, true, false);
      cm.npc_SetSpecialAction("oid=38422862", 'summon', 0, 0);
      cm.npc_ChangeController(1530305, "oid=38422863", 860, 62, 3, 810, 910, 0, false, false);
      cm.npc_SetSpecialAction("oid=38422863", "summon", 0, 0);
      cm.npc_ChangeController(1530306, "oid=38422864", 730, 62, 2, 680, 780, 0, false, false);
      cm.npc_SetSpecialAction("oid=38422864", 'summon', 0, 0);
      cm.npc_ChangeController(1530307, "oid=38422865", 600, 62, 2, 550, 650, 0, false, false);
      cm.npc_SetSpecialAction("oid=38422865", "summon", 0, 0);
      cm.npc_ChangeController(1530272, "oid=38422866", 470, 62, 1, 420, 520, 0, false, false);
      cm.npc_SetSpecialAction("oid=38422866", "summon", 0, 0);
      cm.npc_ChangeController(1530282, "oid=38422867", 340, 62, 1, 290, 390, 0, false, false);
      cm.npc_SetSpecialAction("oid=38422867", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=38422868", 1203, 62, 3, 1153, 1253, 1, true, false);
      cm.npc_SetSpecialAction("oid=38422868", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38422863", "happy", -1, 1);
      cm.npc_SetSpecialAction("oid=38422864", 'happy', -1, 1);
      cm.npc_SetSpecialAction("oid=38422865", 'happy', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1839, -6);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_Text(["#fn黑体##fs26#教学实习\r\n#fs14# 第1周课程"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……好了，到这里为止，你们都理解了吗？\r\n我刚刚为大家说明的是拉瓦锡的质量守恒定律，又称物质不灭定理。", 37, 1530200, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_03/1", 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("(嗯，我对老师的心意是永恒的……)", 37, 1530300, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_03/2", 100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……根据这个定理，当发生化学反应时……", 37, 1530200, false, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_03/3", 100);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(嗯，老师让我的心发生了化学反应……)", 37, 1530310, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH5_03/4", 100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("发生反应的物质总质量……", 37, 1530200, false, true);
                                cm.effect_Voice("Voice2.img/Friends/CH5_03/5", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("(嗯，很抱歉。我的总质量太重了……为了与老师更加般配，从今天起我会努力减肥。)", 37, 1530300, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH5_03/6", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("当然，如果考虑到爱因斯坦的相对论，这条定律严格地说是不成立的。", 37, 1530200, false, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH5_03/7", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("(不不，老师。我们的关系是可以成立的……你不知道吧？你这个只懂化学的傻瓜。)", 37, 1530310, false, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH5_03/8", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你们这些家伙，还不给我好好听课！不要再胡思乱想了！", 37, 1530370, false, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH5_03/9", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    cm.effect_Voice("Voice2.img/Friends/CH5_03/10", 100);
                                                    cm.effect_NormalSpeechBalloon("老师！你的脸上有股气息萦绕. ", 0, 0, 0, 2500, 1530305, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=38422862"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        cm.effect_Voice("Voice2.img/Friends/CH5_03/12", 100);
                                                        cm.effect_NormalSpeechBalloon("叫做帅#e#r气#k#n", 1, 0, 0, 2000, 1530305, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          cm.effect_NormalSpeechBalloon('....', 1, 0, 0, 2000, 1530200, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#哈哈……真是个有趣的玩笑。", 37, 1530200, false, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH5_03/13", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=38422862", "smile", 0, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=38422863", "love", -1, 1);
                                                                  cm.npc_SetSpecialAction("oid=38422864", "love", -1, 1);
                                                                  cm.npc_SetSpecialAction("oid=38422865", 'love', -1, 1);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38422863"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38422864"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38422865"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38422868"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你们这些家伙，我让你们好好听课……！！", 37, 1530370, false, true);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH5_03/14", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=38422863", 'happy', -1, 1);
                                                                              cm.npc_SetSpecialAction("oid=38422864", "happy", -1, 1);
                                                                              cm.npc_SetSpecialAction("oid=38422865", 'happy', -1, 1);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("今天的课到此为止。你们有什么疑问吗？", 37, 1530200, false, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH5_03/15", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=38422863", 'shine', -1, 1);
                                                                                    cm.npc_SetSpecialAction("oid=38422864", 'shine', -1, 1);
                                                                                    cm.npc_SetSpecialAction("oid=38422865", "shine", -1, 1);
                                                                                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      cm.effect_Voice("Voice2.img/Friends/CH5_03/16", 100);
                                                                                      cm.effect_NormalSpeechBalloon("老师, 你今年多大啊? ", 1, 0, 0, 1500, 1530305, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                        cm.effect_Voice("Voice2.img/Friends/CH5_03/17", 100);
                                                                                        cm.effect_NormalSpeechBalloon("老师, 你有女朋友吗? ", 1, 0, 0, 1500, 1530306, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2800);
                                                                                          cm.effect_Voice("Voice2.img/Friends/CH5_03/18", 100);
                                                                                          cm.effect_NormalSpeechBalloon("老师, 让我们看看你的腹肌吧. ", 1, 0, 0, 1500, 1530307, cm.getPlayer().getId());
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            cm.effect_Voice("Voice2.img/Friends/CH5_03/19", 100);
                                                                                            cm.effect_NormalSpeechBalloon("老师, 你的初吻是在什么时候? ", 1, 0, 0, 1500, 1530305, cm.getPlayer().getId());
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                              cm.effect_Voice("Voice2.img/Friends/CH5_03/20", 100);
                                                                                              cm.effect_NormalSpeechBalloon("老师, 你最近一次接吻是在什么时候啊? ", 1, 0, 0, 1500, 1530306, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                cm.effect_Voice("Voice2.img/Friends/CH5_03/21", 100);
                                                                                                cm.effect_NormalSpeechBalloon("老师, 你会跳舞吗? ", 1, 0, 0, 1500, 1530307, cm.getPlayer().getId());
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH5_03/22", 100);
                                                                                                  cm.effect_NormalSpeechBalloon("老师, 你是不是很会唱歌? ", 1, 0, 0, 1500, 1530305, cm.getPlayer().getId());
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH5_03/23", 100);
                                                                                                    cm.effect_NormalSpeechBalloon("老师, 你有多高啊? ", 1, 0, 0, 1500, 1530306, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38422868"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("你们这些家伙，不要让老师为难……就问一个问题！", 37, 1530370, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH5_03/24", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("老师，你有女朋友吗？", 37, 1530310, true, true);
                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH5_03/25", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#不，没有。", 37, 1530200, true, true);
                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH5_03/26", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=38422863", "happy", -1, 1);
                                                                                                              cm.npc_SetSpecialAction("oid=38422864", 'happy', -1, 1);
                                                                                                              cm.npc_SetSpecialAction("oid=38422865", "happy", -1, 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                              cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530305, cm.getPlayer().getId());
                                                                                                              cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530306, cm.getPlayer().getId());
                                                                                                              cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530307, cm.getPlayer().getId());
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422863"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                cm.effect_Voice("Game.img/CaptureSuccess", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422863"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422864"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422864"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422865"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38422865"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.forceCompleteQuest(33004);
                                                                                                                            cm.updateInfoQuest(32720, "sms=184");
                                                                                                                            cm.updateInfoQuest(32719, "gal=1;sms=1;add=0");
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(330000010, 0);
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