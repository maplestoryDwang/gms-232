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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064420");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201535, "oid=2756341", 200, 153, 11, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756341", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2756342", 442, 153, 7, 392, 492, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756342", 'summon', 0, 0);
      cm.npc_ChangeController(9201579, "oid=2756343", 263, 153, 11, 213, 313, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756343", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#好了，然后……", 37, 9201535, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#绯红之心……", 37, 9201536, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我也不能让你留在这儿。\r\n你的任务是最重要的。", 37, 9201535, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#但是……", 37, 9201536, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("听我说，卢坎。\r\n这项任务非你不可。", 37, 9201535, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#……我明白了，请下令吧。", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我需要你和我们的小英雄回到一千年以后的未来。\r\n我知道这是个过分的要求，但在那个时间线还留有隐患。", 37, 9201535, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("是幻日的碎片吗？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("没错，再小也好，那也是幻日的一部分。", 37, 9201535, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("因此，迟早会有人试图得到它。", 37, 9201535, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("就算我连这片大陆一起摧毁掉幻日，那块碎片也将继续着欲望和毁灭的轮回。", 37, 9201535, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('你必须处理掉它。', 37, 9201535, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("藏起来也好，毁掉也罢。\r\n除了你以外，不能有人接触到它。\r\n你明白了吗？", 37, 9201535, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    cm.updateInfoQuest(49007, "QET=MNIkV2TX1QE$");
                                    cm.updateInfoQuest(49007, "QET=MNIkV2TX1QE$");
                                    cm.updateInfoQuest(49007, "QET=MNIkV2TX1QE$");
                                    cm.forceStartQuest(49007, '');
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('对我发誓。', 37, 9201535, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我发誓，绯红之心。\r\n我是不会让你失望的。", 37, 9201536, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("等等……既然你已经改变了历史，那块碎片会不会也消失了？\r\n在这条世界线中，纳瑞坎并没有……", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("幻日可没有那么好对付，小英雄。", 37, 9201535, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("它操控时空的力量能让它的碎片独立于世界线存在。", 37, 9201535, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("既是改变了过去，也无法影响未来的幻日。", 37, 9201535, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("除非你把那块碎片也带到了过去……不过那样你们就没法使用穿越传送门了。这就是所谓的时间悖论了。", 37, 9201535, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("唉……时空旅行真讨厌。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#卢坎，你是我所见过的最优秀的战士。\r\n希望你能原谅我这把老糊涂犯下的过错。", 37, 9201535, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#我从未责怪过你，绯红之心。", 37, 9201536, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#那就原谅我对你做出这么过分的要求吧。\r\n但我相信我们的未来可以托付给你。", 37, 9201535, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#绯红之心……", 37, 9201536, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("接下来……", 37, 9201535, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("到你了，小家伙。", 37, 9201535, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我真有那么小吗？", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哈，当然不是。\r\n叫着顺口而已。", 37, 9201535, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#多亏了你，我才发现这个世界即使没有幻日，也不缺英雄豪杰。", 37, 9201535, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#因此，没有了幻日的反转界也会出现新的英雄。\r\n是你让我认识到了这点。", 37, 9201535, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("过奖了，我只是尽我所能而已。", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("你太谦虚了！", 37, 9201535, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("你丝毫不顾及自身安全，和卢坎一起穿越到这个时间线。\r\n对你所做的一切，我都报以诚挚的谢意。", 37, 9201535, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("嘿，我才该谢谢你。\r\n过去在你的努力下改变了……", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("整个世界可能都被你拯救了。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("这样吧。我就把你和卢坎一起送回你的时间线吧。", 37, 9201535, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("谢谢你。", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=2756341", -1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#……我永远忘不了第一次来到冒险岛世界的时候。", 37, 9201535, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=2756341", 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#当时已去过无数世界的我却从未见过这么美丽、这么和平的地方。", 37, 9201535, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#希望你和你这样的英雄能永远守护这里。", 37, 9201535, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("必须的。", 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("好了……终于到了分别的时候了。", 37, 9201535, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("绯红之心……！", 57, 0, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom('嗯？', 37, 9201535, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("我会这么期望的，小英雄。", 37, 9201535, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#绯红之心……！", 37, 9201536, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#再见，卢坎。\r\n不对，这次我们恐怕真的要永别了。", 37, 9201535, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("你未来的道路充满艰难险阻，但你不能放弃希望。", 37, 9201535, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetSpecialAction("oid=2756341", '幻日', 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                  cm.npc_LeaveField("oid=2756342");
                                                                                                                                  cm.npc_LeaveField("oid=2756342");
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.forceCompleteQuest(61364);
                                                                                                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                    cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
                                                                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.eventSKill(0);
                                                                                                                                        cm.warp(610064430, 0, true);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.npc_LeaveField("oid=2756341");
                                                                                                                                        cm.npc_LeaveField("oid=2756341");
                                                                                                                                        cm.npc_LeaveField("oid=2756343");
                                                                                                                                        cm.npc_LeaveField("oid=2756343");
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