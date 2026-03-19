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
      cm.forceCompleteQuest(58770);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=1;9=4");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1620, -360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111001, "oid=3878766", 1250, -215, 28, 1200, 1300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3878766", "summon", 0, 0);
        cm.npc_ChangeController(9111004, "oid=3878767", 1480, -275, 29, 1430, 1530, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3878767", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#唉……天狗去哪儿了……", 37, 9111001, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我还想把这头绳送他做礼物呢……", 37, 9111001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……咳！咳！", 37, 9111004, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3878766"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#face1#……啊！是鵺啊。", 37, 9111001, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face0#……（心跳！）", 37, 9111004, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#亡者窟外的生活你能适应吗？", 37, 9111001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……哦，还行。哼，我可不是那种害怕阳光的软弱亡灵。切！", 37, 9111004, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是嘛。你蛮厉害的。", 37, 9111001, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face0#……（心跳！）", 37, 9111004, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那，那是！唔哈哈哈哈哈哈哈！", 37, 9111004, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我听说这次回收地之五行的事你也帮忙了……？", 37, 9111001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哦，嗯……", 37, 9111004, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#嘿嘿，也没什么……都是为了竹野子你嘛！唔哈哈哈哈哈哈哈", 37, 9111004, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3878766"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face0#(终于说出口了！呃！)", 37, 9111004, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3878766"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("#face1#呵呵呵", 37, 9111001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.sendNormalTalk_Bottom("#face0#………！", 37, 9111004, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#鵺真是个好人，谢谢。", 37, 9111001, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face0#……哈……哈哈哈哈。对我来说这点小事不算什么~", 37, 9111004, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#对了，你来这里有什么事吗？", 37, 9111001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#咳咳！！没什么大事，就是有话要跟你说……", 37, 9111004, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#诶？什么事？", 37, 9111001, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#咳！咳！我，我现在也对人类的事情有点感兴趣……", 37, 9111004, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(9111002, "oid=3879114", 910, -215, 43, 860, 960, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=3879114", "summon", 0, 0);
                                                        cm.sendNormalTalk_Bottom("#face1#喂-！", 37, 9111002, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3878766"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.npc_SetForceMove("oid=3879114", 1, 200, 120);
                                                          cm.npc_setForceFlip("oid=3878766", -1);
                                                          cm.sendNormalTalk_Bottom("#face1#啊！棘鬼！", 37, 9111001, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#竹野子你好！镰鼬在哪里？", 37, 9111002, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#呃，你是不是又想大白天找他喝酒呀？", 37, 9111001, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嘿嘿，反正我现在也没心情做事……", 37, 9111002, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#就算是这样……也要为健康着想啊……", 37, 9111001, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#哈哈，你还惦记我这妖鬼的健康啊。我说鵺，虽然我个子矮了点，你也不至于那么无视我吧？", 37, 9111002, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3879114"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3878766"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#(……可恶……！该死的臭妖鬼……！)", 37, 9111004, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relBreak", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.sendNormalTalk_Bottom("#face0#(……刚才是多好的告白时机……！)", 37, 9111004, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=3878766", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=3878766", "die2", 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=3878766");
                                                                                  cm.npc_LeaveField("oid=3878766");
                                                                                  cm.npc_ChangeController(9111051, "oid=3879372", 1250, -215, 28, 1200, 1300, 0, false, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=3879372", 'summon', 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#竹野子！", 37, 9111002, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#干嘛，人类！什么事！", 37, 9111004, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#啊啊……突然感觉头好……", 37, 9111001, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#这到底是怎么回事！", 37, 9111004, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#呃呃……", 37, 9111001, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=3879372", "overpower2", 0, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_LeaveField("oid=3879372");
                                                                                                  cm.npc_LeaveField("oid=3879372");
                                                                                                  cm.npc_ChangeController(9111031, "oid=3879660", 1250, -215, 28, 1200, 1300, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=3879660", 'summon', 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#快去叫木野子……！", 37, 9111002, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3878767"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.npc_SetForceMove("oid=3878767", 1, 700, 300);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=3878767");
                                                                                                          cm.npc_LeaveField("oid=3878767");
                                                                                                          cm.npc_ChangeController(9111000, "oid=3879682", 2085, -270, 4, 2035, 2135, 1, true, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=3879682", 'summon', 0, 0);
                                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                                cm.sendNormalTalk_Bottom("#face2##p9111001#？！", 37, 9111000, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3879682"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#p9111001#！", 57, 0, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=3879682", -1, 600, 300);
                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=3879660", "falldown", 0, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_LeaveField("oid=3879660");
                                                                                                                            cm.npc_LeaveField("oid=3879660");
                                                                                                                            cm.npc_ChangeController(9111051, "oid=3879954", 1250, -215, 28, 1200, 1300, 0, false, 0, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=3879954", "summon", 0, 0);
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#她的身体烫得像火球似的……！！竹野子的情况跟平时不太一样……", 37, 9111000, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face3#……我们时间不多了。", 37, 9111000, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=3879682", 1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#…#h0#，拜托了。必须尽快把最后一个木之五行找来……！", 37, 9111000, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……好！", 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.warp(800000000, 2, false);
                                                                                                                                        cm.npc_LeaveField("oid=3879114");
                                                                                                                                        cm.npc_LeaveField("oid=3879114");
                                                                                                                                        cm.npc_LeaveField("oid=3879954");
                                                                                                                                        cm.npc_LeaveField("oid=3879954");
                                                                                                                                        cm.npc_LeaveField("oid=3879682");
                                                                                                                                        cm.npc_LeaveField("oid=3879682");
                                                                                                                                        cm.eventSKill(0);
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
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}