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
      cm.npc_ChangeController(3003427, "oid=204552", 1812, 24, 98, 1762, 1849, 1, false, false);
      cm.npc_ChangeController(3003426, 'oid=204553', 1983, -449, 89, 1933, 2033, 1, false, false);
      cm.npc_ChangeController(3003410, "oid=204554", 1727, 24, 98, 1677, 1777, 0, false, false);
      cm.Hidden_background("stone_drop", 1, 0, 0, 0);
      cm.Hidden_background("stone_broken", 1, 0, 0, 0);
      cm.Hidden_background('candle', 1, 0, 0, 0);
      cm.Hidden_background("candle_light", 1, 0, 0, 0);
      cm.Hidden_background("screen", 1, 0, 0, 0);
      cm.Hidden_background("stone_trash", 1, 0, 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 475, -500);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003406, "oid=2004261", -800, -50, 93, -850, -750, 0, true, false);
        cm.npc_SetSpecialAction("oid=2004261", "summon", 0, 0);
        cm.npc_ChangeController(3003400, "oid=2004262", -100, -50, 92, -150, -50, 0, true, false);
        cm.npc_SetSpecialAction("oid=2004262", "summon", 0, 0);
        cm.npc_ChangeController(3003408, "oid=2004263", 436, -400, 82, 386, 486, 0, true, false);
        cm.npc_SetSpecialAction("oid=2004263", "summon", 0, 0);
        cm.npc_ChangeController(3003408, "oid=2004264", 250, -50, 91, 200, 300, 1, true, false);
        cm.npc_SetSpecialAction("oid=2004264", 'summon', 0, 0);
        cm.npc_ChangeController(3003408, "oid=2004265", 580, -150, 78, 530, 630, 1, true, false);
        cm.npc_SetSpecialAction("oid=2004265", "summon", 0, 0);
        cm.npc_ChangeController(3003408, "oid=2004266", 180, -50, 91, 130, 230, 0, true, false);
        cm.npc_SetSpecialAction("oid=2004266", "summon", 0, 0);
        cm.npc_ChangeController(3003451, "oid=2004267", 706, -50, 90, 656, 756, 1, false, false);
        cm.npc_SetSpecialAction("oid=2004267", "summon", 0, 0);
        cm.npc_ChangeController(3003451, "oid=2004268", 646, -50, 90, 596, 696, 1, false, false);
        cm.npc_SetSpecialAction("oid=2004268", "summon", 0, 0);
        cm.npc_ChangeController(3003411, "oid=2004269", 50, -50, 91, 0, 100, 0, false, false);
        cm.npc_SetSpecialAction("oid=2004269", "summon", 0, 0);
        cm.npc_ChangeController(3003414, "oid=2004270", 100, -50, 91, 50, 150, 0, false, false);
        cm.npc_SetSpecialAction("oid=2004270", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 475, -50);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#快，下来！下来！", 37, 3003408, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#小、小心点！多危险啊！", 37, 3003408, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(1300, 1500, 1300, -160, -20);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2004261", 1, 400, 180);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#呼呼！这不是白白浪费时间嘛！还害我饿肚子……", 37, 3003406, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003406, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face11#你不是这的人？太好了~饭钱有着落了。", 37, 3003406, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2004261", 1, 180, 180);
                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(940204003, 3, 3, 3);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/hit", 100);
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.npc_setForceFlip("oid=2004262", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(940204003, 0, 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 150, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/morass/Tana/0", 0, 150, 0, -80, 12, 4, 1);
                                      cm.sendNormalTalk_Bottom("#face0#额……额？", 37, 3003406, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face10#你……", 37, 3003400, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face10##fs20##r没有预定。#k", 37, 3003400, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#什么……什么？这是什么……", 37, 3003406, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 150, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 150, 0);
                                                cm.sendNormalTalk_Bottom("#face0#等、等等！绳子！！", 37, 3003408, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/rope", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2004262", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 463, -600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#绳、绳子断了！！快闪开！！", 37, 3003408, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Hidden_background('stone', 1, 0, 0, 0);
                                                            cm.Hidden_background("stone_drop", 1, 1, 0, 0);
                                                            cm.onSetMapTagedObjectVisible(1, "stone_drop", 512);
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.onSetMapTagedObjectVisible(1, "stone_drop", 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/acident", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 463, -50);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/tanapush/skeleton", 'animation', '', 'push'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana3", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#呜、呜哇啊！！", 37, 3003406, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_取消复合图片动画('push', 1, 1000);
                                                                              cm.npc_ChangeController(3003406, "oid=2004290", -1830, -50, 95, -1880, -1780, 0, true, false);
                                                                              cm.npc_SetSpecialAction("oid=2004290", "summon", 0, 0);
                                                                              cm.Npc_Fadeout("oid=2004290", 0, 0);
                                                                              cm.npc_ChangeController(3003400, "oid=2004291", 500, -50, 90, 450, 550, 1, true, false);
                                                                              cm.npc_SetSpecialAction("oid=2004291", 'summon', 0, 0);
                                                                              cm.Npc_Fadeout("oid=2004291", 0, 0);
                                                                              cm.npc_LeaveField("oid=2004261");
                                                                              cm.npc_LeaveField("oid=2004262");
                                                                              cm.npc_LeaveField("oid=2004263");
                                                                              cm.npc_LeaveField("oid=2004264");
                                                                              cm.npc_LeaveField("oid=2004265");
                                                                              cm.npc_LeaveField("oid=2004266");
                                                                              cm.npc_LeaveField("oid=2004267");
                                                                              cm.npc_LeaveField("oid=2004268");
                                                                              cm.npc_LeaveField("oid=2004269");
                                                                              cm.npc_LeaveField("oid=2004270");
                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                              cm.Hidden_background('stone_drop', 1, 0, 0, 0);
                                                                              cm.fieldEffect_PlayFieldSound("Aran/down", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#啊呀呀呀……", 37, 3003406, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#什么啊，这女人……上来就动手……", 37, 3003406, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0##fs20#出、出事故了！", 37, 3003408, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm25.img/knightsStronghold", 0, 0);
                                                                                      cm.sendNormalTalk_Bottom("#face1#事故？！难道，刚刚那闪光……", 37, 3003406, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                        cm.npc_ChangeController(3003408, "oid=2004297", -20, -50, 92, -70, 30, 0, true, false);
                                                                                        cm.npc_SetSpecialAction("oid=2004297", 'summon', 0, 0);
                                                                                        cm.npc_ChangeController(3003451, "oid=2004298", -100, -50, 92, -150, -50, 0, false, false);
                                                                                        cm.npc_SetSpecialAction("oid=2004298", 'summon', 0, 0);
                                                                                        cm.npc_ChangeController(3003451, "oid=2004299", -150, -50, 92, -200, -100, 0, false, false);
                                                                                        cm.npc_SetSpecialAction("oid=2004299", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3003406, "oid=2004300", -350, -50, 92, -400, -300, 0, true, false);
                                                                                        cm.npc_SetSpecialAction("oid=2004300", 'summon', 0, 0);
                                                                                        cm.Hidden_background("stone_trash", 1, 1, 0, 0);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 27, 35);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2004300", 1, 400, 200);
                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#怎、怎么可能……", 37, 3003408, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(5000, 2000, 5000, 600, 35);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                cm.sendNormalTalk_Bottom("#face1#那么多人……竟然都消失了？？", 37, 3003406, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#这到底是怎么回事啊？", 37, 3003451, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我、我什么都不知道。只说过这是#fs18##r普通的反魔力石#k#fs16#！", 37, 3003408, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#快看前面！！那个女人！", 37, 3003451, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 500, 35);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=2004291", "special6", -1, 1);
                                                                                                          cm.Npc_Fadeout("oid=2004291", 255, 2500);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/tana/skeleton", "animation", '', 'tana'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_regen", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(19000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("那东西在广场中央复活了。", 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("我实在睁不开眼睛。", 0);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("那分明是#r超乎人类范畴的存在#k。", 0);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue("既不祥又压抑，而且……", 0);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_Monologue("「太美了……」", 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_取消复合图片动画("tana", 1, 0);
                                                                                                                              cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", '', "bubble"], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                } else if (status === V++) {
                                                                                                                                  cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                  cm.updateInfoQuest(34253, "book=1");
                                                                                                                                  cm.forceCompleteQuest(34253);
                                                                                                                                  cm.Hidden_background("130_stone", 1, 0, 0, 0);
                                                                                                                                  cm.Hidden_background("130_stone2", 1, 0, 0, 0);
                                                                                                                                  cm.Hidden_background("130_candle", 1, 1, 0, 0);
                                                                                                                                  cm.Hidden_background("130_candle2", 1, 1, 0, 0);
                                                                                                                                  cm.Hidden_background("130_building", 1, 1, 0, 0);
                                                                                                                                  cm.gainItem(4036309, -20);
                                                                                                                                  cm.npc_LeaveField("oid=2004290");
                                                                                                                                  cm.npc_LeaveField("oid=2004291");
                                                                                                                                  cm.npc_LeaveField("oid=2004297");
                                                                                                                                  cm.npc_LeaveField("oid=2004298");
                                                                                                                                  cm.npc_LeaveField("oid=2004299");
                                                                                                                                  cm.npc_LeaveField("oid=2004300");
                                                                                                                                  cm.dispose();
                                                                                                                                  cm.warp(450006130, 0, true);
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