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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background("obj01", 1, 0, 0, 0);
      cm.Hidden_background("obj01_dust", 1, 0, 0, 0);
      cm.Hidden_background('obj02', 1, 0, 0, 0);
      cm.Hidden_background("obj03", 1, 0, 0, 0);
      cm.Hidden_background('obj03_dust', 1, 0, 0, 0);
      cm.npc_ChangeController(9400928, "oid=91905753", 330, 240, 2, 280, 380, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905753", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=91905754", 250, 240, 1, 200, 300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905754", "summon", 0, 0);
      cm.npc_ChangeController(9400931, "oid=91905755", 200, 240, 1, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905755", "summon", 0, 0);
      cm.npc_ChangeController(9400934, "oid=91905756", 150, 240, 1, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905756", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, 240);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400933, "oid=91905757", 50, 240, 1, 0, 100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905757", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=91905758", 0, 240, 1, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91905758", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs20##e稍后……凯尼斯家别馆……"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNewEffects(17, [3000, 1000, 2000, 250, 350]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("#face2#大家都到了吗？", 37, 9400920, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#有什么事吗？让我们都来……", 37, 9400923, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#咳咳！就是这里！艾米咖啡1号店开业的地方！", 37, 9400920, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这不是凯尼斯的家吗？", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#我付出正当代价借来的！", 37, 9400920, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#是……吗？", 37, 9400923, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#呵呵呵", 37, 9400922, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#我叫各位前来，是为了让各位艾米咖啡1号店创业成员相互认识一下！", 37, 9400920, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#创业成员……？", 37, 9400924, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#大家都尝了我制作的果汁，对它的味道也很满意吧？呼呼。我以后还会卖咖啡和沙拉。杰弗里会帮忙做沙拉的！", 37, 9400920, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你答应了吗？", 37, 9400923, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#是的。我每天都可以免费喝果汁！", 37, 9400925, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#真的？！！！", 37, 9400923, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face1#当然。', 37, 9400920, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我要做什么？", 37, 9400923, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#艾丹和米兰达就负责咖啡店的装修吧。我们这里懂装修的人，只有艾丹和米兰达了吧？", 37, 9400920, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#好吧。", 37, 9400923, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#没错。", 37, 9400924, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#如果你们能帮忙装修，我会一~辈~子~都让你们免费使用艾米咖啡店！", 37, 9400920, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#虽然有点吃亏，但我同意！", 37, 9400923, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#貌似很……有趣。", 37, 9400924, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b我要做点什么呢？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1##h0#负责材料补给，宣传，人事。", 37, 9400920, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#(嘀嘀咕咕……好像会有很多鸡毛蒜皮的小事儿……) ", 37, 9400921, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#这件事非~~~~常重要，你会……帮我的吧？", 37, 9400920, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b当然了。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#啊啊！谢谢各位。我有信心，一定会成功的。我一定会努力的！", 37, 9400920, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#那我们就开始吧？！", 37, 9400920, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(19, [0]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                                          cm.npc_LeaveField("oid=91905753");
                                                                          cm.npc_LeaveField("oid=91905754");
                                                                          cm.npc_LeaveField("oid=91905755");
                                                                          cm.npc_LeaveField("oid=91905756");
                                                                          cm.npc_LeaveField("oid=91905757");
                                                                          cm.npc_LeaveField("oid=91905758");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setMobImage("/PL_Sound.img/myHome/construction", 100);
                                                                            cm.Hidden_background("obj01", 1, 1, 0, 0);
                                                                            cm.Hidden_background('obj01_dust', 1, 1, 0, 0);
                                                                            cm.npc_ChangeController(9400931, "oid=91906417", 200, 60, 8, 150, 250, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=91906417", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400933, "oid=91906418", 140, 60, 8, 90, 190, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=91906418", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400932, "oid=91906419", 300, 60, 8, 250, 350, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=91906419", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=91906419", "action", -1, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=91906417");
                                                                                    cm.npc_LeaveField("oid=91906419");
                                                                                    cm.npc_LeaveField("oid=91906418");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.Hidden_background("obj01_dust", 1, 0, 0, 0);
                                                                                      cm.Hidden_background("obj02", 1, 1, 0, 0);
                                                                                      cm.npc_ChangeController(9400934, "oid=91906694", -255, 60, 8, -305, -205, 0, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=91906694", "summon", 0, 0);
                                                                                      cm.npc_ChangeController(9400928, "oid=91906695", -100, 60, 8, -150, -50, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=91906695", "summon", 0, 0);
                                                                                      cm.npc_ChangeController(9400929, "oid=91906696", -40, 60, 8, -90, 10, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=91906696", "summon", 0, 0);
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/6", "oid=91906694"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=91906695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=91906694");
                                                                                                cm.npc_LeaveField("oid=91906695");
                                                                                                cm.npc_LeaveField("oid=91906696");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.Hidden_background('obj03', 1, 1, 0, 0);
                                                                                                  cm.Hidden_background("obj03_dust", 1, 1, 0, 0);
                                                                                                  cm.npc_ChangeController(9400932, "oid=91907043", -180, 260, 1, -230, -130, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=91907043", "summon", 0, 0);
                                                                                                  cm.npc_ChangeController(9400933, "oid=91907044", 110, 260, 1, 60, 160, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=91907044", 'summon', 0, 0);
                                                                                                  cm.npc_ChangeController(9400928, "oid=91907045", 180, 260, 1, 130, 230, 1, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=91907045", "summon", 0, 0);
                                                                                                  cm.npc_ChangeController(9400929, "oid=91907046", 230, 260, 1, 180, 280, 1, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=91907046", "summon", 0, 0);
                                                                                                  cm.npc_SetForceMove("oid=91907043", 1, 200, 80);
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.forceCompleteQuest(65436);
                                                                                                          cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNewEffects(19, [0]);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.warp(871000085, 0, true);
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.setInGameDirectionMode(false, false, false);
                                                                                                            cm.npc_LeaveField("oid=91907043");
                                                                                                            cm.npc_LeaveField("oid=91907044");
                                                                                                            cm.npc_LeaveField("oid=91907045");
                                                                                                            cm.npc_LeaveField("oid=91907046");
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
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}