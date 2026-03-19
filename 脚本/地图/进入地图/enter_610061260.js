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
      cm.updateInfoQuest(61333, "act1=610061260");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2830101", 2985, 1393, 331, 2935, 3035, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2830101", "summon", 0, 0);
      cm.npc_ChangeController(9201540, "oid=2830102", 2380, 1393, 314, 2330, 2430, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2830102", "summon", 0, 0);
      cm.npc_ChangeController(9201541, "oid=2830103", 2547, 1393, 334, 2497, 2597, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2830103", 'summon', 0, 0);
      cm.npc_ChangeController(9201542, "oid=2830104", 2480, 1393, 334, 2430, 2530, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2830104", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 500, 3020, -450);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1219);
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
              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2959, 1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                cm.inGameDirectionEvent_AskAnswerTime(7200);
                cm.effect_Text(["#fn黑体##fs18#NLC - 克拉齐亚 研究实验室"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这是你要求的克拉齐亚土地样本分析结果，#b张博士#k。", 37, 9201540, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2830101", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#谢谢。\r\n把它放在那儿就好，我一会儿再看。", 37, 9201539, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2830101", 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2830102", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                              cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201540, null, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=2830103", -1);
                                cm.npc_setForceFlip("oid=2830102", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201541, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201542, null, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2830103", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2830101", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#怎么了？\r\n还有别的事吗？", 37, 9201539, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("噢！\r\n没，没事。", 37, 9201540, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2830103", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2830103", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……张博士，恕我直言。\r\n你研究的这个魔法师，纳瑞坎——研究他真的有意义吗？", 37, 9201541, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("啊哟，我刚说没事呢！\r\n不过，张博士，我们确实很好奇。\r\n或者说……很担心。", 37, 9201540, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们来这里的目的是研究克拉齐亚和导致了它从海底冒出来的原因。", 37, 9201540, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("所以说我们到底为什么要去研究#b纳瑞坎#k和#b幻日#k呢？", 37, 9201540, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("至今为止我们找到的线索只有幽影森林中的几行古字和一副壁画。", 37, 9201541, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("这跟克拉齐亚和它的历史一点关系都没有啊！！", 37, 9201541, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("事实上，目前我们的研究只发现了这片大陆曾被成为克拉奇安森林的事实。", 37, 9201541, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#你们都忽略了那些古文告诉我们的信息。", 37, 9201539, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#篆刻在#b守护者的要塞#k中的古文说幻日是一种几乎用之不竭的能源。", 37, 9201539, true, true);
                                                                  cm.forceForfeitQuest(49006);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#而且，如果纳瑞坎真的试图得到它，那不仅对克拉齐亚，对整个冒险岛世界都意义重大。", 37, 9201539, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#甚至还有可能和黑法师相关。", 37, 9201539, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("但……仅仅是可能而已。\r\n说实话，我们找到的这点证据根本不足以支撑如此疯狂的故事，我怀疑我们这是在浪费时间。", 37, 9201541, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#浪费时间？", 37, 9201539, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2830101", -1, 200, 80);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=2830101", 0);
                                                                                    cm.sendNormalTalk_Bottom("#face3#就算纳瑞坎确实跟黑法师一样邪恶好了。", 37, 9201539, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#那要是传说中封印了他的魔法师苏巴尼也真的存在呢？", 37, 9201539, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#如此强大的力量肯定能成为与黑法师的战斗中的一大助力。", 37, 9201539, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#我们现在面对的敌人非常强大。", 37, 9201539, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#因此我们有责任发掘任何可用的武器。", 37, 9201539, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我同意，但问题是，我们没有可靠的证据。", 37, 9201541, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("身为科学家，我们职责就在于发现证据并解答面对的问题。", 37, 9201542, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我们的任务是研究克拉齐亚，而不是追逐童话故事。", 37, 9201542, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#不。\r\n科学家的职责在于为人们创造一个更美好的未来。", 37, 9201539, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#而现在履行这一职责的最佳方式就是去研究这里的这段不为人知的历史。", 37, 9201539, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#你们要是反对我的做法，就请离开好了。\r\n我不想再谈论这一话题了。", 37, 9201539, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=2830101", 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("不——才不呢！我不会走的。\r\n那好，大家继续工作吧。", 37, 9201540, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=2830102", -1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=2830102", 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("那好。我辞职。\r\n我可不是来这儿研究这种幻想故事的。\r\n我当初就不该相信你，强。", 37, 9201541, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("恐怕我也要离开了，博士。\r\n我认可你的能力和智慧，但我真觉得你这只是在浪费时间而已。", 37, 9201542, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("你为了满足个人兴趣而玩忽职守。", 37, 9201542, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("难怪没人愿意一直当你的助手。", 37, 9201542, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_setForceFlip("oid=2830102", -1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=2830102", 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("嗯……呃……那就……\r\n再见吧。", 37, 9201540, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_LeaveField("oid=2830102");
                                                                                                                                            cm.npc_LeaveField("oid=2830103");
                                                                                                                                            cm.npc_LeaveField("oid=2830104");
                                                                                                                                            cm.npc_setForceFlip("oid=2830101", 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#……纳瑞坎绝对是真实存在的。\r\n我很确定。", 37, 9201539, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#我的所有研究都与他相关。\r\n这些故事绝对是真的。", 37, 9201539, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#他们不理解这项工作的重要性。", 37, 9201539, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#我得再了解了解这个名叫纳瑞坎的暗黑存在。", 37, 9201539, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_setForceFlip("oid=2830101", -1);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_SetForceMove("oid=2830101", -1, 200, 80);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_setForceFlip("oid=2830101", 0);
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#我得回#b守护者的要塞#k一趟……就算一个人去也无妨。", 37, 9201539, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#我的研究会起到重要作用的……", 37, 9201539, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                      cm.warp(610061270, 0, true);
                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                      cm.npc_LeaveField("oid=2830101");
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