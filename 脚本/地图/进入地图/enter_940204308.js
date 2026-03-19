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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -400, -40);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003480, "oid=2011918", -300, 0, 46, -350, -250, 0, true, false);
          cm.npc_SetSpecialAction("oid=2011918", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2011918", 1, 400, 170);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(4000, 1500, 4000, 160, -40);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#通往这里的痕迹……啊！看那个，#h0#！", 37, 3003480, false, true);
                } else {
                  if (status === V++) {
                    cm.setAmbience("Ambience.img/morass_portal", 70, 60);
                    cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, 1000, -480);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/morass/DailyQuest/1", 0, 500, 0, -80, 12, 4, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3003480, "oid=2011928", 960, -570, 36, 910, 1010, 0, true, false);
                            cm.npc_SetSpecialAction("oid=2011928", 'summon', 0, 0);
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1013, -557);
                            cm.sendNormalTalk_Bottom("巨大的……次元门？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#周围的艾尔达正在被吸进去。她打开了那扇门！", 37, 3003480, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#我们再靠近一点看看！", 37, 3003480, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                          cm.sendNormalTalk_Bottom('只要进去就行吗？', 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face13#嗯……", 37, 3003480, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face11#试试就知道了！", 37, 3003480, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2011928", "push", 1100, 1);
                                                cm.inGameDirectionEvent_MoveAction(6);
                                                cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                                                cm.inGameDirectionEvent_AskAnswerTime(50);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("呃啊啊啊啊啊啊啊啊啊啊………………啊？", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(2, 0);
                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("刚……刚才你干嘛推我！还不知道进去会怎样呢！", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face11#不是没事吗？又没受伤。", 37, 3003480, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face11#而且，之前从高处掉下去的次数还少吗？干嘛大惊小怪。", 37, 3003480, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（算了……）", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face10#但是为什么无法通过呢？", 37, 3003480, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("再试一次！", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_MoveAction(5);
                                                                            cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("哎哟，我的鼻子……", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_OneTimeAction(2, 0);
                                                                                cm.sendNormalTalk_Bottom("#face13#好像有什么东西在阻挡我们……", 37, 3003480, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face13#也是，她是不会让别人舒舒服服跟在屁股后面的。", 37, 3003480, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face13#一定是被她挡住了，不让我们通……", 37, 3003480, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.playSoundEffDirectly("Ambience.img/morass_portal");
                                                                                      cm.userSetFieldFloating(940204308, 5, 5, 1);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/FootHold2", 50);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/FootHold2", 50);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(940204308, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face12#咦？", 37, 3003480, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("怎……怎么回事？刚才好像震动了一下……", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(940204308, 10, 10, 1);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/cave", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("呃啊啊啊啊啊啊啊啊啊啊！！！！！！！！！", 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1##h0#！", 37, 3003480, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", '', "bubble"], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.userSetFieldFloating(940204308, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
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
                                                                                                                  cm.npc_LeaveField("oid=2011918");
                                                                                                                  cm.npc_LeaveField("oid=2011928");
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(450006040, 1, true);
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