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
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
      cm.npc_ChangeController(1540460, "oid=22423771", 466, 69, 4, 416, 516, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22423771", "summon", 0, 0);
      cm.npcMove(1540460, 0, -35, 0);
      cm.npc_SetSpecialAction("oid=22423771", 'cry', -1, 1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 227, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/flyingdeck_fire", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Voice("Voice3.img/BlackHeaven/fran/13", 100);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_NormalSpeechBalloon("#fn黑体##fs22#快救救弗朗西斯!!!", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540460, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 460, 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#快把我救出来！！我要被烫死了！", 37, 1540620, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(1540636, "oid=22424665", -325, 56, 1, -375, -275, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=22424665", "summon", 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 227, 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(2);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.sendNormalTalk_Bottom("#h0#！！", 37, 1540459, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=22424665", 1, 300, 150);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#h0#，大事不好了！", 37, 1540459, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b操纵室#k那里已经挤满了敌人！", 37, 1540459, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setAmbience("Ambience.img/warning", 100, 60);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22424665"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.userSetFieldFloating(350031500, 2, 2, 20);
                                                        cm.onCameraTilt(-7, 4000);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.emotion(5, 5000);
                                                          cm.sendNormalTalk_Bottom("呃啊！船体开始倾斜了！", 37, 1540459, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.onCameraTilt(-3, 3000);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                              cm.sendNormalTalk_Bottom("我们必须重新掌握#b操纵室#k！", 37, 1540459, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("说不定飞船马上就要坠毁了！", 37, 1540459, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("快走吧！", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(350031500, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                                          cm.sendNormalTalk_Bottom("#face0#喂，先把我救出来再走！", 37, 1540620, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.userSetFieldFloating(350031500, 5, 5, 20);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              cm.effect_Voice("SoundEff.img/blackHeaven/explosion1", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.userSetFieldFloating(350031500, 2, 2, 20);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(50);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.onCameraTilt(6, 2500);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#呃啊啊啊啊！", 37, 1540620, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("走之前得赶紧把他救出来。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("那么做是违反军法的。那家伙肯定会趁机逃跑。", 37, 1540459, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(350031500, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(50);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我不会逃跑的！", 37, 1540620, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我还没有见到奥尔卡，我不能就这么死了！", 37, 1540620, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.askMenu_Bottom("你打算怎么做呢？\r\n#b#L0#虽然他是俘虏，但我们也不能见死不救！#l\r\n#L1#还是直接前往操纵室吧！#l", 37, 1540459);
                                                                                                selectionLog[100] = -1;
                                                                                              } else {
                                                                                                if (selectionLog[100] < 0) {
                                                                                                  selectionLog[100] = e;
                                                                                                }
                                                                                                var O = 'action分支' + selectionLog[100];
                                                                                                eval(O)(f, E, e, V);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("那也没办法了。", 37, 1540459, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#谢谢你，这份恩情我绝对不会忘！", 37, 1540620, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 232, 54);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.npcMove(1540460, -100, 35, 0);
              cm.setNpcSpecialActionReset("oid=22423771");
              cm.npc_SetSpecialAction("oid=22423771", "fire2", -1, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 100);
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
                    cm.sendNormalTalk_Bottom("#face0#快帮我把火灭了！！", 37, 1540621, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('请你监视弗朗西斯。', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我先前往操纵室。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(350031600, 0, true);
                                cm.inGameDirectionEvent_MoveAction(0);
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
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("没……没关系吗？", 37, 1540459, false, true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(200);
    } else {
      if (status === V++) {
        cm.userSetFieldFloating(350031500, 5, 5, 20);
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_Voice("SoundEff.img/blackHeaven/explosion1", 100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(350031500, 2, 2, 20);
          cm.inGameDirectionEvent_AskAnswerTime(50);
        } else {
          if (status === V++) {
            cm.onCameraTilt(9, 2500);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呃啊啊啊啊！", 37, 1540620, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("果然还是不行。快把他救出来再走吧。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#谢谢你，这份恩情我绝对不会忘！", 37, 1540620, true, true);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(350031500, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 232, 54);
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.npcMove(1540460, -100, 35, 0);
                          cm.setNpcSpecialActionReset("oid=22423771");
                          cm.npc_SetSpecialAction("oid=22423771", "fire2", -1, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 100);
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
                                cm.sendNormalTalk_Bottom("#face0#快帮我把火灭了！！", 37, 1540621, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("请你监视弗朗西斯。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我先前往操纵室。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.dispose();
                                            cm.warp(350031600, 0, true);
                                            cm.npc_LeaveField("oid=22423771");
                                            cm.npc_LeaveField("oid=22423771");
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=294353920");
                                            cm.npc_LeaveField("oid=294353920");
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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