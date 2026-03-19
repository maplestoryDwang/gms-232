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
      cm.npc_ChangeController(3001933, "oid=434366", 922, 121, 4, 879, 979, 5, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434367", 1133, 121, 4, 1041, 1141, 4, true, 0, false);
      cm.npc_ChangeController(3001935, "oid=434368", -481, 21, 11, -531, -431, 0, false, 0, false);
      cm.npc_ChangeController(3001936, "oid=434369", -384, 18, 13, -434, -334, 1, false, 0, false);
      cm.npc_ChangeController(3001936, "oid=434370", -52, 121, 2, -102, -2, 0, false, 0, false);
      cm.npc_ChangeController(3001935, "oid=434371", -147, 121, 2, -197, -97, 0, false, 0, false);
      cm.npc_ChangeController(3001934, "oid=434372", -597, 121, 1, -690, -590, 4, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434373", 662, 121, 3, 606, 706, 4, true, 0, false);
      cm.npc_ChangeController(3001933, 'oid=434374', 501, 121, 3, 488, 588, 3, true, 0, false);
      cm.npc_ChangeController(3001933, "oid=434375", -703, 121, 1, -792, -692, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001952, "oid=6349386", 95, -98, 5, 45, 145, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6349386", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 190, -55);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#你们到底有什么计划？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#我的最终目标，是成为里斯托尼亚的国王！\r\n我要将这个国家打造得像从前一样舒适宜居。", 36, 3001952, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#梦想还真远大。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#总之……在此之前，必须先铲除侵害王国的蛀虫，\r\n也就是那些迫害百姓的贵族。", 36, 3001952, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#伯爵塞德里克……他是我们的主要目标。", 36, 3001952, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#在王室分崩离析之前，塞德里克原本只是个排辈靠后的王族。\r\n然而随着形势扭转，如今他却成了贵族中地位最高的人物。", 36, 3001952, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#那家伙眼里压根儿没有里斯托尼亚的百姓，\r\n除了花天酒地和奢侈挥霍，他什么都不关心。", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……哪怕王国已经欠下巨额的债务，\r\n而这份重担又完完全全地落到了百姓们的肩上，他也依旧不管不顾。", 36, 3001952, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                  cm.userSetFieldFloating(993162071, 5, 5, 5);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(993162071, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
                                      cm.sendNormalTalk_Bottom("#face6#退后！", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#！？", 36, 3001952, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=6349386", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_doldol", 100);
                                            cm.npc_ChangeController(3001960, "oid=6351694", 34, -296, 9, -16, 84, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=6351694", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=6351694", 'special4', 0, 0);
                                              cm.sendNormalTalk_Bottom("#face1#咘呜！", 36, 3001960, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6#你回来啦，布乌！", 36, 3001952, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我看你半天不回来，都开始担心了！\r\n以后不许不打招呼就跑出去哦！", 36, 3001952, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#布乌？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊，这是我的搭档布乌。\r\n他的特长就是变身成各种物品。", 36, 3001952, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#布乌，变个帽子来看看！", 36, 3001952, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=6351694", "special3", 0, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/boo", 100);
                                                              cm.sendNormalTalk_Bottom("#face2#布乌~", 36, 3001960, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#随性也是他的特点之一，哈哈……", 36, 3001952, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=6349386", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#不管怎样，把他带在身边，总会有帮助的。\r\n他之前就帮过我不少忙。", 36, 3001952, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#布乌，这位是阿黛尔。\r\n以后拜托你多多照顾她哦。", 36, 3001952, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=6351694", "special2", 0, 0);
                                                                          cm.sendNormalTalk_Bottom("#face0#咘！", 36, 3001960, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#为了纪念今天的相识，去喝一杯庆祝一下怎么样？\r\n正好布乌也回来了。", 36, 3001952, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=6351694", "special2", 0, 0);
                                                                              cm.sendNormalTalk_Bottom("#face1#布乌，布！", 36, 3001960, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#我讨厌嘈杂的地方。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#哎，今天就放松下嘛。\r\n从明天开始，就要东奔西走地为调查伯爵开始忙碌起来了。", 36, 3001952, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 190, -489);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#该玩的时候好好玩，工作起来也会更顺利哦！", 37, 3001952, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 2);
                                                                                          cm.sendNormalTalk_Bottom("#face2#我累了，我要去休息。", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#唉……想跟你亲近起来，还真不容易。", 37, 3001952, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
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
                                                                                                      cm.warp(993162008, 0, false);
                                                                                                      cm.setStandAloneMode(false);
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.npc_LeaveField("oid=6349386");
                                                                                                      cm.npc_LeaveField("oid=6351694");
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