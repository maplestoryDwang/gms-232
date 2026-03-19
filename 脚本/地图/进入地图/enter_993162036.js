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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001955, "oid=6579453", -365, -170, 2, -415, -315, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6579453", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -350, -170);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#我说事情怎么那么顺利，\r\n真是失算啊，哈哈……", 36, 3001954, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#你为什么不表明身份？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#就算我照实说了，也只会引起不必要的误会。\r\n……不，也许连我自己都觉得不够理直气壮。", 36, 3001954, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#但是，我是真心想要拯救王国。\r\n这是唯一能纠正我先祖过错的途径。", 36, 3001954, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#不管我的境遇如何，这些事都与你无关。\r\n很抱歉让你无辜地被卷进来。", 36, 3001954, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你别担心我，自己找机会逃跑吧。啊，伯爵那家伙\r\n说不定想让你做他的骑士。如果是那样的话……", 36, 3001954, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_Hero9(0, 1000);
                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.fieldEffect_Hero9(100, 500);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm53/TheWallsofTragedy", 0, 0);
                              cm.npc_ChangeController(3001957, "oid=6581217", -150, -200, 2, -200, -100, 1, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=6581217", "summon", 0, 0);
                              cm.npc_ChangeController(3001959, "oid=6581218", -50, -200, 2, -100, 0, 1, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=6581218", "summon", 0, 0);
                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -250, -170);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们又见面了，传说中的骑士。我马上就帮你从那王子……\r\n啊不，是那小偷手里解脱出来。", 36, 3001957, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊，差点忘了，在此之前还有一件事要做。\r\n请稍等一会儿，我的骑士。", 36, 3001957, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6#我绝不会做你的骑士的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#话别说得太早哦。", 36, 3001957, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#少废话……你抓我到底有什么目的？", 36, 3001954, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你这卑鄙苟活的家伙，竟敢和我这么说话。", 36, 3001957, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#别吵了……都到下班时间了，直奔主题吧。\r\n接下来，你需要随伯爵大人走一趟。", 36, 3001959, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#……你们要杀我？", 36, 3001954, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#不，现在留着你还有用。\r\n对你的处置……等之后再说。", 36, 3001959, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face7#杰罗姆！", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_Hero9(0, 1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                  cm.fieldEffect_Hero9(100, 500);
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
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else if (status === V++) {
                                                                          cm.forceCompleteQuest(39625);
                                                                          cm.gainExp(12217);
                                                                          cm.gainExp(1528);
                                                                          cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                          cm.npc_LeaveField("oid=6579453");
                                                                          cm.npc_LeaveField("oid=6581217");
                                                                          cm.npc_LeaveField("oid=6581218");
                                                                          cm.dispose();
                                                                          cm.setStandAloneMode(false);
                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                          cm.warp(993162037, 0, false);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}