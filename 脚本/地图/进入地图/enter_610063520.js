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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063520");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2731829", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2731829", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2731830", -1070, 772, 3, -1120, -1020, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2731830", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2731831", -919, 772, 3, -969, -869, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2731831", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2731832", -1200, 772, 3, -1250, -1150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2731832", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(6200);
        cm.effect_Text(["#fn黑体##fs18#数十年后……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1100, 800);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("绯红之心，最近我们每天都能收到关于纳瑞坎的报告，他一直在干坏事。", 37, 9201536, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我知道了。", 37, 9201535, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我们该怎么做？", 37, 9201536, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2731832", 1, 20, 80);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那个纳瑞坎真是个傻瓜。\r\n他明明知道索求幻日会招致怎样的后果，却仍然一意孤行。", 37, 9201547, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2731830", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#他只是个痛失爱母的小男孩罢了。\r\n这就是他应对痛苦的办法。", 37, 9201536, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#我们还是给他点时间，让他自己冷静下来吧。\r\n我相信他能想通的。", 37, 9201536, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("都过去多久了，卢坎？", 37, 9201547, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("都几十年了。\r\n他要想通早就想通了。", 37, 9201547, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("纳瑞坎已经不是一个痛苦的男孩了。\r\n他现在是个扭曲的大人。", 37, 9201547, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("他妄图夺取幻日的野心也是我们目前面对的最大威胁。", 37, 9201547, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("他还从我们手里偷走了一块幻日碎片！\r\n这可是头一遭！", 37, 9201547, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("他的贪欲会招致毁灭的。", 37, 9201547, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('……', 37, 9201535, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2731830", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("绯红之心，你来决定。\r\n但该怎么做你应该很清楚。", 37, 9201547, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2731830", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#戴尔格兰德，你是建议绯红之心和他的儿子兵戎相见？", 37, 9201536, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("他的职责难道不是守护幻日吗？", 37, 9201547, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("如果是，他就必须清除目前对幻日最大的危险，对方是不是他的儿子都无关紧要。", 37, 9201547, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("而且……纳瑞坎也早就不认他这个爹了。", 37, 9201547, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("他要是还对他的父亲有那么一丝敬意，他就不会做出这些事。", 37, 9201547, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#胡说八道！\r\n你又不如我们了解纳瑞坎。", 37, 9201536, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#就算到了非对付他不可的时候，动手的也会是我们。\r\n不能让绯红之心——", 37, 9201536, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("愚蠢！\r\n纳瑞坎可要比我们强大许多！", 37, 9201536, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("就算有绯红之心，我们可能也——", 37, 9201536, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=2731831", -1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("够了！\r\n别说了。\r\n我不想再谈论这个话题。", 37, 9201535, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=2731830", 1);
                                                                                              cm.npc_SetForceMove("oid=2731830", 1, 20, 50);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#我很抱歉。", 37, 9201536, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_setForceFlip("oid=2731831", 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("纳瑞坎想要幻日不是为了一己私欲。", 37, 9201535, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("他是想终结幻日导致的贪婪与毁灭的悲剧。\r\n不想再让……格罗娜之死重演。", 37, 9201535, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("什么意思，绯红之心？\r\n那你是要站在纳瑞坎一边咯？", 37, 9201547, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#别说这种蠢话，戴尔格兰德。\r\n他失去的事物比你想象的要多得多。\r\n他牺牲了——", 37, 9201536, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=2731831", -1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#我说，够了！\r\n我很快就给你们答复。", 37, 9201535, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你们所有人都回到岗位上。\r\n有事了我再传唤你们。", 37, 9201535, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("好吧，绯红之心。\r\n但我希望你尽快下定决心。", 37, 9201547, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#于是，纳瑞坎成为了世人眼中的恶人。\r\n连他的家人都抛弃了他。", 37, 9201539, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("但……他确实是恶人。\r\n他连爱着他的人都不放过。", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face4#但他是为了达成目的。\r\n你也清楚吧。", 37, 9201539, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#有了幻日的力量，纳瑞坎就能将一切纠正过来。", 37, 9201539, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#他承受了那么多痛苦，理应得到救赎。", 37, 9201539, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_setForceFlip("oid=2731832", -1);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=2731830", -1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_ChangeController(9201546, "oid=2732964", -1317, 772, 3, -1367, -1267, 0, true, 0, false);
                                                                                                                                              cm.npc_SetSpecialAction("oid=2732964", "summon", 0, 0);
                                                                                                                                              cm.npc_SetForceMove("oid=2732964", 1, 50, 50);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("苏巴尼，你必须说服父亲。\r\n他听不进我们的话。", 37, 9201547, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("他还要包庇这个怪物多久？", 37, 9201547, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetForceMove("oid=2731832", -1, 250, 80);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_SetForceMove("oid=2731830", -1, 350, 80);
                                                                                                                                                        cm.npc_setForceFlip("oid=2732964", -1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_LeaveField("oid=2731832");
                                                                                                                                                          cm.npc_LeaveField("oid=2731832");
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=2731830");
                                                                                                                                                            cm.npc_LeaveField("oid=2731830");
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_setForceFlip("oid=2732964", 1);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.forceCompleteQuest(61359);
                                                                                                                                                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                      cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
                                                                                                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                    } else if (status === V++) {
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}