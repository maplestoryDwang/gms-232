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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004850, "oid=2307410", -519, 195, 5, -569, -469, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2307410", "summon", 0, 0);
      cm.npc_ChangeController(3004851, "oid=2307411", 200, -361, 14, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2307411", "summon", 0, 0);
      cm.npc_ChangeController(3004862, "oid=2307412", -209, -555, 61, -259, -159, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2307412", 'summon', 0, 0);
      cm.npc_ChangeController(3004863, "oid=2307413", -1589, -366, 44, -1639, -1539, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2307413", "summon", 0, 0);
      cm.monadForceMove("cosmic1", 0, 0);
      cm.monadForceMove('cosmic2', 0, 0);
      cm.monadForceMove('cosmic3', 0, 0);
      cm.monadForceMove('cosmic4', 0, 0);
      cm.monadForceMove('cosmic5', 0, 0);
      cm.Hidden_background("sub", 1, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -383, -626);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onSetMapObjectMove("whale", [1, 0, 0]);
      cm.npc_SetSpecialAction("oid=2307410", 'special6', -1, 1);
      cm.Npc_Fadeout("oid=2307411", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -511, 800);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#把灯光亮度调到最大……", 36, 3004850, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1500, 10000, -511, 240);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#这么一来，虽用不了逃生舱……", 36, 3004850, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#事到如今，那都无所谓了。", 36, 3004850, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#把老式电池弄瘪的话……", 36, 3004850, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#唔嗯……！", 36, 3004850, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.setAmbience("SoundEff.img/sellas/mystery", 125, 60);
                                cm.npc_SetSpecialAction("oid=2307410", "special9", -1, 1);
                                cm.userSetFieldFloating(993185017, 3, 3, 6);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#来，过来吧，是你喜欢的光亮。", 36, 3004850, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#这回把我也吞了吧。", 36, 3004850, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2400);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm55/GoodbyeMyFriends", 100, 0);
                                        cm.sendNormalTalk_Bottom("#face3#但我们得做好思想准备。", 36, 3004850, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#以至今为止从没见过的最强的亮度……", 36, 3004850, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#就会发出灿烂的光芒。", 36, 3004850, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=2307410", "special3", 1, 1);
                                                  cm.playSoundEffDirectly("SoundEff.img/sellas/mystery");
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(993185017, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1500, 3500, 300, 240);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 5000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=2307410");
                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/whale3/skeleton", 'trans', "loop", '02'], [0, 0, 1, 0, 1, 10000, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("本以为绝不会面对的恐惧，", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("渐渐分散成了众多的水母群。", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue('还有……', 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_取消复合图片动画('02', 1, 1000);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 200, 210);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                  cm.Npc_Fadeout("oid=2307411", 255, 100);
                                                                                  cm.onSetNpcScript("oid=2307411", 1, ["special3", "special6"], [1, -1]);
                                                                                  cm.monadForceMove("cloud1", 0, 2000);
                                                                                  cm.monadForceMove('cloud2', 0, 2000);
                                                                                  cm.monadForceMove('cloud3', 0, 2000);
                                                                                  cm.monadForceMove("cloud4", 0, 2000);
                                                                                  cm.monadForceMove('cloud5', 0, 2000);
                                                                                  cm.monadForceMove('cloud6', 0, 2000);
                                                                                  cm.monadForceMove('cloud7', 0, 2000);
                                                                                  cm.monadForceMove("cosmic1", 1, 4000);
                                                                                  cm.monadForceMove("cosmic2", 1, 4000);
                                                                                  cm.monadForceMove("cosmic3", 1, 4000);
                                                                                  cm.monadForceMove("cosmic4", 1, 4000);
                                                                                  cm.monadForceMove('cosmic5', 1, 4000);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(8800);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 4, 0, 1, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/hands2/skeleton", "animation", '', '0'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                      cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#休麦？！", 36, 3004851, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#是的，沃莉。", 36, 3004850, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你看。大得像座房子的鲸鱼也一下被打飞了，", 36, 3004851, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#世上有什么是我们不能改变的吗？", 36, 3004851, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#就是说啊。", 36, 3004850, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#星星只有成群出现的时候才会闪亮。", 36, 3004850, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_取消复合图片动画('0', 1, 1000);
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(25, 0, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                          cm.npcMove(3004862, 0, -350, 0);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -335, -846);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=2307411");
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('啊……', 56, 0, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("这个……", 56, 0, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.npc_LeaveField("oid=2307412");
                                                                                                                    cm.npc_LeaveField("oid=2307413");
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(993185018, 0, false);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}