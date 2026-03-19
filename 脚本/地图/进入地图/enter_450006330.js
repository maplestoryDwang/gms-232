var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getNumberFromQuestInfo(34266, "enter") < 1 || cm.getNumberFromQuestInfo(34266, "book") < 1) {
    action3(f, E, e);
  } else if (cm.isQuestFinished(34561) && !cm.isQuestFinished(34562)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h1;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
      cm.forceStartQuest(34299, '');
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1487, 69);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#嗯……一动不动。", 37, 3003500, false, true);
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
              cm.sendNormalTalk_Bottom("#face0#要炸掉吗？我这里有的是炸弹。", 37, 3003502, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#嗯？当然不行。没接到那种命令。\r\n比起这个，我们的首要任务是和#b那个人#k见面。", 37, 3003500, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("（那个人？啊，那个服装是#b冒险骑士团#k！）", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#他不会已经穿过这扇门了吧？", 37, 3003502, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#嗯……有这个可能。", 37, 3003500, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#完成任务的前提条件是和#h0#见面。没办法了。\r\n只能炸掉。好了，三，二……", 37, 3003502, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#哇啊啊！！等，等一下，住手！快劝劝他，梅尔朗！", 37, 3003500, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#呼……", 37, 3003501, true, true);
                          } else {
                            if (status === V++) {
                              cm.updateInfoQuest(34561, "first=fin");
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003475, "oid=49694", 1589, 63, 5, 1539, 1639, 1, false, false);
      cm.npc_ChangeController(3003540, "oid=49695", 1397, 63, 4, 1347, 1447, 0, false, false);
      cm.Hidden_background("6330_gate", 1, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 270, 22);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 630, 90);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003406, "oid=2010790", 300, 0, 1, 250, 350, 1, true, false);
        cm.npc_SetSpecialAction("oid=2010790", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2010790", 1, 440, 160);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 240);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 700, 90);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我有件事很好奇。", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2010790", -1);
                  cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003406, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你是怎么进入地下监狱的？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#写着秘密通道位置的纸条，不是你留下的吗？", 37, 3003406, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("纸条？啊……(难道是夏伊留下的？)", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#？？", 37, 3003406, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2010790", 0);
                            cm.sendNormalTalk_Bottom("没、没错。留下纸条的是我。你怎么知道的？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那封信……嗯？就是一种感觉……", 37, 3003406, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2010790", 1, 50, 140);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#站住，如果再靠近，就会启动保护魔法。", 37, 3003404, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3003404, "oid=2010795", 1250, 0, 4, 1200, 1300, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=2010795", "summon", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1000, 90);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("阿卡伊勒？！", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#可、可恶！！", 37, 3003406, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 210);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#冷静点。我是来帮你们的。", 37, 3003404, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2010795", -1, 140, 170);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 900, 90);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 1);
                                                        cm.sendNormalTalk_Bottom("莫非大家都知道？！", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#嗯，我都知道。一开始我就只是好奇……\r\n现在我跟夏伊你是同样的心情。第618号，不，一定要救出塔纳。", 37, 3003404, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('骗人！', 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#难道你还没发现？\r\n#r#fs20#仪式成败与否，全在于你的内心。", 37, 3003404, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#如果塔纳本人拒绝，仪式根本无法成功。", 37, 3003404, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#海加顿马上就会看出端倪……\r\n这样一来会怎么对付无法死去的塔纳呢……", 37, 3003404, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#呼！！", 37, 3003406, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#绝不能发生那种事，这就是我的理由。", 37, 3003404, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("胡说！你以为我会相信你吗？", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face13#等等，夏伊。你听我说嘛。", 37, 3003406, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("你不了解那个人！小心啊！", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#嗯？听你的口气好像对我很了解？", 37, 3003404, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("(这么看来他是……#fs18##r被沼泽残蚀#k#fs16#了？)", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#换句话说……身为时间神官的我拥有一定的预知能力。\r\n虽然过程不太清楚，那仪式终将失败。", 37, 3003404, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#所以我选择了人类。", 37, 3003404, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#给，收下钥匙吧。", 37, 3003404, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2010790", 1, 80, 170);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 1000, 90);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('江！', 57, 0, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#你就相信他吧。如果他有心杀我，我早就死了。", 37, 3003406, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                            cm.updateInfoQuest(34265, "enter=1");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(940204009, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;