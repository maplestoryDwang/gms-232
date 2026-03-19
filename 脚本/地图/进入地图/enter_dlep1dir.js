var status = -1;
function action(f, E, e) {
  status++;
  var V = [[302090000, 1], [302090100, 2], [302090110, 3], [302090120, 4], [302090130, 5], [302090140, 6], [302090200, 7], [302090210, 8], [302090220, 9], [302090230, 10], [302090240, 11], [302090300, 12], [302090310, 13], [302090320, 14], [302090400, 15], [302090402, 16], [302090404, 17], [302090405, 18], [302090406, 19], [302090410, 20], [302090500, 21], [302090510, 22]];
  for (var O = 0; O < V.length; O++) {
    if (cm.getMapId() == V[O][0]) {
      eval('action' + V[O][1])(f, E, e);
      return;
    }
  }
  cm.dispose();
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_Monologue("我是流浪佣兵。\r\n", 0);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice.img/Library/Mercenary/M/0", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("哪怕随时随地死去，也很正常的人生。", 0);
        cm.effect_Voice("Voice.img/Library/Mercenary/M/1", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("夕阳西下，风吹过衣角的某一天，我的尸体也将如同落叶一般，在某个地方飘荡。", 0);
          cm.effect_Voice("Voice.img/Library/Mercenary/M/2", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("\r\n\r\n#fnBatang#―――――――#fn黑体#也许，那天就是今天。", 1);
            cm.effect_Voice("Voice.img/Library/Mercenary/M/3", 100);
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
                  cm.sendNormalTalk("…………", 17, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("全部杀光了？相信你跟随你的那些人全部……？", 17, 0, true, true);
                    cm.effect_Voice("Voice.img/Library/Mercenary/M/4", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 300, 450, 185);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4520);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 300, -906, 185);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4520);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("…………就这样吗？你所说的理想全部都是假话吗？", 17, 0, false, true);
                              cm.effect_Voice("Voice.img/Library/Mercenary/M/5", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("故事要从何说起呢……? ", 1);
                                  cm.effect_Voice("Voice.img/Library/Mercenary/M/7", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("……好吧，就从我第一次听到白魔法师的名字开始说起吧。", 1);
                                    cm.effect_Voice("Voice.img/Library/Mercenary/M/8", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs40#章节 I : 白魔法师", 1);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(302090100, 0, false);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -205, -500);
      cm.curNodeEventEnd(true);
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
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("我一直都是一个人。", 0);
              cm.effect_Voice("Voice.img/Library/Mercenary/M/9", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("还没懂事前，我就学会了拿武器，为了不饿肚子，哪怕是几分钱，我都必须用命去搏。", 0);
                cm.effect_Voice("Voice.img/Library/Mercenary/M/10", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n我运气好，活得久了点，但很多朋友并没有我这么好运。", 1);
                  cm.effect_Voice("Voice.img/Library/Mercenary/M/11", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("当握武器的手上长满厚茧的时候，我终于开始对周围人的死亡无动于衷。", 1);
                    cm.effect_Voice("Voice.img/Library/Mercenary/M/12", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 100, -205, 200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("战争和饥饿，掠夺和灾害……世界正在一点点崩塌。", 0);
                        cm.effect_Voice("Voice.img/Library/Mercenary/M/13", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("然后那些富人们依然在不断地累积着财富。其中阿里安特的大富豪哈萨尔就是一个。", 1);
                          cm.effect_Voice("Voice.img/Library/Mercenary/M/14", 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(2510001, "oid=1987059", -900, 200, 11, -950, -850, 0, false, 0, false);
                              cm.npc_SetSpecialAction("oid=1987059", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("呵呵……我说，你不会是哈萨尔派来的手下吧？让你把我安全带回阿里安特。", 5, 2510001, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("…什么？不是手下，是佣兵？", 5, 2510001, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不管是手下还是佣兵，都没差别！总之太好了。你有水吗？我一个人负责这么多行李，完全忘了这回事。", 5, 2510001, true, true);
                                  } else if (status === V++) {
                                    cm.forceStartQuest(32629, '');
                                    cm.gainExp(25968);
                                    cm.forceCompleteQuest(32629);
                                    cm.warp(302010000, 0, false);
                                    cm.dispose();
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=1987059");
                                    cm.npc_LeaveField("oid=1987059");
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      cm.npc_ChangeController(2510000, "oid=20893", 203, 112, 1, 168, 236, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("原来你就是一个人护卫我的行李马车的佣兵啊。", 5, 2510000, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("我怎么会一下子就知道了？你身上有味道啊。我对两种味道特别敏感。危险的味道，还有就是钱的味道……你身上有危险的味道。看来你当佣兵已经有不少日子了吧？", 5, 2510000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……你是大富豪哈萨尔？你想我从这里得到什么？", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("不想说废话浪费时间，直接问。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("\r\n「 你想我从这里得到什么?  」", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n意外地，哈萨尔好像很满意我无礼的态度，笑了几声，就开始直接说重点了。", 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你帮我找个人。这次的委托不是给佣兵事务所的，而是我交给你个人的。", 5, 2510000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("找人？", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你听说过#e白魔法师#n吗？", 5, 2510000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b(白魔法师……？第一次听说。听听故事吧。)#k", 17, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.eventSKill(0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.dispose();
                              cm.warp(302090120, 0);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("他是一个被称为天才的魔法师。\r\n", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("据说，他年纪轻轻就拥有非凡的魔法造诣，没人能够做他的老师。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("努力达到阶梯的尽头时，却发现什么都没有，这种伤心和空虚不可谓不大。", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.effect_REPEAT("Effect/Direction14.img/effect/WWlegend", 1, 1, 1, 0, 0);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("继续听。\r\n", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("想到达更高的地方。\r\n", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("这个世界上已知的魔法，与他的野心相比，实在是微不足道。", 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("几十年间，他带着一根法杖，孤身游荡世界。疯狂地写书，帮助他人，留下了无数的故事。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("\r\n#fnBatang#―――――――#fn黑体#「 白魔法师. 」", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("拥有纯白头发的他，不知道从何时起，人们开始如此称呼他。", 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("就这样，有一天。\r\n", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("他好像突然领悟了一样，说道。", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("「 终极光明只有在终极黑暗中才能找到。」", 1);
                                        cm.effect_Voice("Voice.img/Library/WhiteWizard/0", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("留下这句话后，白魔法师从此失去了踪迹。", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue(" 他现在在做什么呢? ", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue(" 在喜欢故事的好事者们无尽的猜测中，人们逐渐忘却了他的存在。", 1);
                                                  } else if (status === V++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.warp(302090130, 0);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action5(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2510000, "oid=20896", 203, 112, 1, 168, 236, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("白魔法师曾是冒险岛世界上最优秀的光之魔法师。如果是他，一定能帮我击退妨碍我生意的黑暗怪物们。", 5, 2510000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你觉得那个'白魔法师'会为你做事吗？", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哪怕是要花费很多钱，我也要雇佣他。没有人能够顶住金钱的诱惑，#h0#。如果这次事情成功的话，我会给你足够你挥霍一辈子的钱。怎么样，感兴趣吗？", 5, 2510000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……我只拿该拿的钱。如果找到他，我会和你联系。", 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("钱不是问题。\r\n", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("关键是我确实产生了兴趣。我开始对叫做白魔法师的人产生了好奇。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("他是否也像我一样，感觉到了人生的疲惫和空虚? 他是否找到了答案呢? ", 1);
                        } else if (status === V++) {
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                          cm.warp(302090140, 0);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action6(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#三个月后，艾琳森林。", 1);
        } else {
          if (status === V++) {
            cm.forceCompleteQuest(32631);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
            cm.warp(302020000, 0);
          }
        }
      }
    }
  }
}
function action7(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2510034, "oid=1998435", -810, 66, 5, -860, -760, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1998435", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯？那个……？", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(3400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(1300);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("喂，小孩。", 17, 0, false, true);
                cm.effect_Voice("Voice.img/Library/MnA/M/1", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2"], [1900, -810, 0, 1, 0, 1, 1, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1140);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#fs30#喂！#fs12#", 5, 2510003, false, true);
                    cm.effect_Voice("Voice.img/Library/MnA/M/2", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=1998435");
                      cm.npc_LeaveField("oid=1998435");
                      cm.npc_ChangeController(2510034, "oid=1998743", -810, 66, 5, -860, -760, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=1998743", 'summon', 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("干，干什么呀。吓到人了。", 5, 2510003, false, true);
                        cm.effect_Voice("Voice.img/Library/MnA/M/3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(小孩子家家的，居然拿着枪。难道这家伙是偷猎者？)", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("干嘛盯着我看啊……不想受伤的话，就走你的路吧。我有事情在这里处理。", 5, 2510003, true, true);
                            cm.effect_Voice("Voice.img/Library/MnA/M/4", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("小小年纪，不要杀生。这可是我的经验之谈，快回家去吧。", 17, 0, true, true);
                              cm.effect_Voice("Voice.img/Library/MnA/M/5", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('……家？', 5, 2510003, true, true);
                                cm.effect_Voice("Voice.img/Library/MnA/M/6", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue(" 听到小孩失魂落魄的声音的瞬间，我本能地明白了。", 0);
                                    cm.effect_Voice("Voice.img/Library/MnA/M/7", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue(" ……这家伙无家可归。", 0);
                                      cm.effect_Voice("Voice.img/Library/MnA/M/8", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue(" 没什么好说的，这就是生活。", 1);
                                        cm.effect_Voice("Voice.img/Library/MnA/M/9", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("总之不要把枪口对准无辜的精灵。我就当做没看见你，你快离开艾琳森林吧。", 17, 0, false, true);
                                            cm.effect_Voice("Voice.img/Library/MnA/M/10", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("你说什么啊？我要抓的不是精灵！我想抓的是……", 5, 2510003, true, true);
                                              cm.effect_Voice("Voice.img/Library/MnA/M/11", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_MoveAction(2);
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                    cm.npc_SetForceMove("oid=1998743", 1, 30, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("……？！什么，还有这种家伙？", 5, 2510003, false, true);
                                                      cm.effect_Voice("Voice.img/Library/MnA/M/12", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(32628, "arin=1;guard1=1");
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(302020400, 1, false);
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=1998743");
                                                        cm.npc_LeaveField("oid=1998743");
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action8(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("去艾琳森林的路上，我的好奇进一步扩大。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("妖精女皇好像已经完全被白魔法师迷住了。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("能够让一族的女王沉迷成这样，他究竟是怎么样的人物? ", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("妖精女皇说。「 白魔法师将会创造更美好的世界。」", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("……那是真的吗? ", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("现在还不知道。答案在静谧之林。", 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(700);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.sendNormalTalk("(……嗯？那家伙？怎么还在那里。) \r\n我说，小孩，你怎么还不回去……！", 17, 0, false, true);
                              cm.effect_Voice("Voice.img/Library/Mercenary/M/15", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 200, -1600, 90);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(5804);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#b(……那怪物究竟？！)#k快跑，孩子！", 17, 0, false, true);
                                    cm.effect_Voice("Voice.img/Library/Mercenary/M/16", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk('……', 5, 2510003, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#b(小孩一动不动。好像是被吓到了。必须帮帮他才行……！)#k", 17, 0, true, true);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(302020600, 0, false);
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
function action9(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("小孩的名字叫亚林。\r\n", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("那家伙说，刚才看到的怪物就是杀死他家人的怪物。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("我干掉的怪物，名字叫做#r乌曼#k。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("据说，在乌曼出现的地区，没多久就开始陆续出现不死怪物。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("也就是说，乌曼才是所有事情的元凶。", 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("白魔法师……他知道如何解决吗？", 5, 2510003, false, true);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice.img/Library/MnA/M/15", 100);
                        cm.sendNormalTalk("我不知道。总之只能先找找看。", 17, 0, true, true);
                        cm.effect_Voice("Voice.img/Library/MnA/M/16", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你不知道的还真多。大人们不是所有事情都知道吗？", 5, 2510003, true, true);
                          cm.effect_Voice("Voice.img/Library/MnA/M/17", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……你，是佣兵吧？请你教教我打架吧。我要变得和你一样强大。", 5, 2510003, true, true);
                            cm.effect_Voice("Voice.img/Library/MnA/M/18", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("…… 快睡你的觉吧。", 17, 0, false, true);
                                cm.effect_Voice("Voice.img/Library/MnA/M/19", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(302090230, 0, false);
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
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("那我们走吧。", 17, 0, false, true);
            cm.effect_Voice("Voice.img/Library/MnA/M/20", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#fs30#等一下，佣兵！#fs12#", 5, 2510034, true, true);
              cm.effect_Voice("Voice.img/Library/MnA/M/21", 100);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2510034, "oid=2008707", -500, 66, 19, -550, -450, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=2008707", 'summon', 0, 0);
                cm.npc_SetForceMove("oid=2008707", -1, 500, 100);
                cm.inGameDirectionEvent_AskAnswerTime(7000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你丢下我这是要去哪里？一起走，佣兵。", 5, 2510034, false, true);
                  cm.effect_Voice("Voice.img/Library/MnA/M/22", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("危险。别跟着我。", 17, 0, true, true);
                    cm.effect_Voice("Voice.img/Library/MnA/M/23", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哼，从我下决心要报仇那刻起，我就知道这是件危险的事情。而且你不觉得，把我一个人放在这里，更加危险吗？大人们真是笨。", 5, 2510003, true, true);
                      cm.effect_Voice("Voice.img/Library/MnA/M/24", 100);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2008707", -1, 400, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2008707", 1, 20, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("\t你在做什么，佣兵！要想彻底消灭乌曼的话，不是要找到那个叫做白魔法师的人吗？我也要亲自见见那个人。", 5, 2510003, false, true);
                            cm.effect_Voice("Voice.img/Library/MnA/M/25", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2008707", -1, 800, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2008707");
                                cm.npc_LeaveField("oid=2008707");
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.sendNormalTalk("…………", 17, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue(" 找到白魔法师的话，真的能解决这儿所有的事情吗? ", 0);
                                    cm.effect_Voice("Voice.img/Library/MnA/M/26", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue(" 这一切都不确定。", 0);
                                      cm.effect_Voice("Voice.img/Library/MnA/M/27", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue(" 答案就在静谧之林。", 1);
                                        cm.effect_Voice("Voice.img/Library/MnA/M/28", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(302090240, 0, false);
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
function action11(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -500, 0);
      cm.curNodeEventEnd(true);
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
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 100, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("\r\n\r\n#fnBatang#―――――――#fn黑体#三个月后，静谧之林。", 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……迷路了啊，佣兵。", 5, 2510003, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("(这里是静谧之林……几乎从来没有太阳的森林。也许这里适合研究魔法，但我肯定的是，这里找路可是最不方便的……)", 17, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#fs30#迷路了啊，佣兵。#fs12#", 5, 2510003, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我也知道。别发牢骚，安静点。", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.gainExp(77904);
                            cm.forceCompleteQuest(32635);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.warp(302030000, 0, false);
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
function action12(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2510034, "oid=2012448", -239, 158, 5, -289, -189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2012448", "summon", 0, 0);
      cm.npc_ChangeController(2510032, "oid=2012449", -350, 158, 4, -400, -300, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2012449", 'summon', 0, 0);
      cm.npc_ChangeController(2510032, "oid=2012450", -380, 158, 4, -430, -330, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2012450", 'summon', 0, 0);
      cm.npc_ChangeController(2510032, "oid=2012451", -400, 158, 4, -450, -350, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2012451", 'summon', 0, 0);
      cm.npc_ChangeController(2510032, "oid=2012452", -450, 158, 3, -500, -400, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2012452", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 100, -200, -80);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(7559);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("！！孩子，小心！", 17, 0, false, true);
              cm.effect_Voice("Voice.img/Library/MnA/M/29", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("乌曼居然这么多……这次真的报仇……！", 5, 2510003, true, true);
                cm.effect_Voice("Voice.img/Library/MnA/M/30", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那个傻孩子！\r\n\r\n#b(距离太远了。以我的速度，还是迟了……！)#k", 17, 0, true, true);
                  cm.effect_Voice("Voice.img/Library/MnA/M/31", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("\r\n\r\n#fnBatang#―――――#fnGulim##e「给我去死！」#n", 5, 2510012, false, true);
                      cm.effect_Voice("Voice.img/Library/WhiteWizard/20", 100);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 80, 245, 245, 245, 100, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1180, -80, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1080, -50, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -950, -100, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1200, -120, 0, 0, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(150);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1180, -80, 0, 0, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(50);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1080, -50, 0, 0, 0, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(50);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -950, -100, 0, 0, 0, 0, 0]);
                                      cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1200, -120, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(50);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/effect"], [1800, -1370, -110, 0, 0, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Library/Use", 100);
                                          cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -860, -76, 0, 0, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -880, -70, 0, 0, 0, 0, 0]);
                                            cm.npc_LeaveField("oid=2012449");
                                            cm.npc_LeaveField("oid=2012449");
                                            cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -940, -86, 0, 0, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -900, -50, 0, 0, 0, 0, 0]);
                                                cm.npc_LeaveField("oid=2012450");
                                                cm.npc_LeaveField("oid=2012450");
                                                cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                                cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -870, -56, 0, 0, 0, 0, 0]);
                                                cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(50);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -830, -50, 0, 0, 0, 0, 0]);
                                                  cm.npc_LeaveField("oid=2012451");
                                                  cm.npc_LeaveField("oid=2012451");
                                                  cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(50);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -920, -56, 0, 0, 0, 0, 0]);
                                                    cm.npc_LeaveField("oid=2012452");
                                                    cm.npc_LeaveField("oid=2012452");
                                                    cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(50);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/hit/0"], [540, -800, -30, 0, 0, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Library/Hit", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                          cm.sendNormalTalk("傻小子，这是做好了死的打算了吗！？", 17, 0, false, true);
                                                          cm.effect_Voice("Voice.img/Library/MnA/M/32", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("……刚才发生了什么事？有道光……", 5, 2510003, true, true);
                                                            cm.effect_Voice("Voice.img/Library/MnA/M/33", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("没事吧？", 5, 2510012, true, true);
                                                              cm.effect_Voice("Voice.img/Library/WhiteWizard/1", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(2510012, "oid=2013237", -380, 158, 4, -430, -330, 0, false, 0, false);
                                                                cm.npc_SetSpecialAction("oid=2013237", 'summon', 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("已经很久没在这里看到外人了。", 5, 2510012, false, true);
                                                                  cm.effect_Voice("Voice.img/Library/WhiteWizard/2", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue(" 白色长发。", 0);
                                                                      cm.effect_Voice("Voice.img/Library/Mercenary/M/17", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue(" 智慧的眼神，令人信赖的声音。我一眼就看出来了。\r\n", 0);
                                                                        cm.effect_Voice("Voice.img/Library/Mercenary/M/18", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue(" 他就是我们一直在找的白魔法师。", 1);
                                                                          cm.effect_Voice("Voice.img/Library/Mercenary/M/19", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.dispose();
                                                                            cm.warp(302090310, 0, false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2012448");
                                                                            cm.npc_LeaveField("oid=2012448");
                                                                            cm.npc_LeaveField("oid=2013237");
                                                                            cm.npc_LeaveField("oid=2013237");
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action13(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2510012, "oid=2013432", -1000, 158, 18, -1050, -950, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2013432", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue(" 我将这段时间发生的事情告诉了白魔法师。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue(" 他好像听到了什么了不起的大事一样，不时慎重地点点头。不过这好像是长久以后形成的习惯。", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("原来如此……艾琳森林里居然有偷猎者和盗墓贼。贪婪的人类居然把手伸到了这里。", 5, 2510012, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("妖精女皇已经对人类失去了信心。但是好像唯独非常喜欢你。", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我和妖精女皇有过一个约定。直到现在，我仍然在为遵守这个约定而努力。", 5, 2510012, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("佣兵！魔法师！请稍等，我们一起走？", 5, 2510003, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(30);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("对了，那孩子？", 5, 2510012, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("……他的家人被乌曼夺去了生命。", 17, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("看来刚才看到的黑暗怪物的名字叫做‘乌曼’吧。在这里，没有办法及时知道外面的消息。", 5, 2510012, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("其实我最想问你的问题是这样的。听说你是天才魔法师？你到底一个人在这森林里做什么？", 17, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("我在研究光。", 5, 2510012, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(2);
                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("我想听的答案不是这个。我……", 17, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("想再说点什么，但又闭上了嘴。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("虽然他并没有什么错，但不知道为什么，我很生他的气。", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("我不过是一介佣兵，可你不是啊? ", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("你拥有能够拯救世界的力量。\r\n不，最起码能让世界变得好一些。", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("可你却悠哉悠哉地躲在这里，一个人做什么研究? ", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#那样的话在嘴里转了又转。", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("\r\n但是白魔法师，他好像看透了我的心。露出微微的笑容。", 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("虽然我有很多话想要说，但是首先来纠正一件事。我并不是‘一个人’。", 5, 2510012, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("等等！一个家伙这样，两个家伙也这样，为什么走这么快？！", 5, 2510003, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("虽然我有很多话想要说，但是首先来纠正一件事。我并不是‘一个人’。", 5, 2510012, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("等等！一个家伙这样，两个家伙也这样，为什么走这么快？！", 5, 2510003, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_ChangeController(2510034, "oid=2014880", -1600, 66, 21, -1650, -1550, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2014880", "summon", 0, 0);
                                                                          cm.npc_SetForceMove("oid=2014880", 1, 200, 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("呃，呃。腿疼……还要走多远啊？", 5, 2510003, false, true);
                                                                            cm.effect_Voice("Voice.img/Library/Arin/2", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("快到了。那里就是我们的家，欧罗拉大神殿。", 5, 2510012, true, true);
                                                                              cm.effect_Voice("Voice.img/Library/WhiteWizard/3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 200, -100, 134);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5440);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else if (status === V++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(302090320, 0, false);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=2013432");
                                                                                    cm.npc_LeaveField("oid=2013432");
                                                                                    cm.npc_LeaveField("oid=2014880");
                                                                                    cm.npc_LeaveField("oid=2014880");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action14(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2510034, "oid=2015160", -222, 86, 3, -272, -172, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2015160", 'summon', 0, 0);
      cm.npc_ChangeController(2510012, "oid=2015161", 79, 86, 4, 29, 129, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2015161", "summon", 0, 0);
      cm.npc_ChangeController(2510010, "oid=2015162", 300, 86, 5, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2015162", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("大师，这些人是……？", 5, 2510010, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("马尔斯，这些都是远道而来的客人。给他们准备住所吧。", 5, 2510012, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("啊？但是大师……他们不是外来的人吗。", 5, 2510010, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("不是添麻烦的人。暂时先让他们住下吧。", 5, 2510012, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.forceCompleteQuest(32636);
                  cm.dispose();
                  cm.warp(302040000, 0, false);
                  cm.gainExp(233711);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=2015160");
                  cm.npc_LeaveField("oid=2015160");
                  cm.npc_LeaveField("oid=2015161");
                  cm.npc_LeaveField("oid=2015161");
                  cm.npc_LeaveField("oid=2015162");
                  cm.npc_LeaveField("oid=2015162");
                }
              }
            }
          }
        }
      }
    }
  }
}
function action15(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm26/Serenity", 0, 0);
              cm.sendNormalTalk("乌曼的残骸……那种情况下，这孩子还能想到收集这些，真是个聪明的孩子。请转告他，我会好好用来做实验的。", 5, 2510012, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("无法知道乌曼是如何出现的。但是请不要担心。终极光明研究结束时，乌曼一定会不见的。", 5, 2510012, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那个所谓的研究主要是在屋顶上进行的吧？", 17, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("不是的。这里只是我最喜欢的地方罢了。", 5, 2510012, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("如此说着，他的眼神望向远处的某个地方。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue('我一下子又好奇起来。', 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("抛弃原本的荣华富贵。他到底要追求些什么? ", 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#h0#，你相信神明吗？如果你不相信神明的话，你相信什么？", 5, 2510012, false, true);
                                  cm.effect_Voice("Voice.img/Library/WhiteWizard/4", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("有些人相信金钱，有些人相信权力。但是在所有东西都变成浮云的死亡瞬间，你相信什么呢？", 5, 2510012, true, true);
                                    cm.effect_Voice("Voice.img/Library/WhiteWizard/5", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("我在这里研究的东西……它并不是简单的‘力量’。", 5, 2510012, true, true);
                                      cm.effect_Voice("Voice.img/Library/WhiteWizard/7", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("而是存在于安息地平线那边的无限的知识。\r\n\r\n能够使我们变得更完美，能够在我们所居住的这个世界，再现神的城市的本源的智慧。", 5, 2510012, true, true);
                                        cm.effect_Voice("Voice.img/Library/WhiteWizard/8", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("那才是我所追求的东西。", 5, 2510012, true, true);
                                          cm.effect_Voice("Voice.img/Library/WhiteWizard/9", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("我试着想象了下他所说的本源的智慧。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("而且我还想象了一下他所说的神的城市。", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("\r\n如果人类能达到那种境界的话……应该也能够创造出没有伤心，没有苦痛的世界吧。", 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("……我想要翻过那道墙。", 5, 2510012, false, true);
                                                      cm.effect_Voice("Voice.img/Library/WhiteWizard/10", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("\r\n我既不是贤者，也不是哲学家。", 5, 2510012, true, true);
                                                        cm.effect_Voice("Voice.img/Library/WhiteWizard/13", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("只不过，是好奇光的那头会是什么罢了。", 5, 2510012, true, true);
                                                          cm.effect_Voice("Voice.img/Library/WhiteWizard/14", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("大致和白魔法师进行了简短的对话。", 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("但是和他对话后，有一种进行了长途旅行的感觉。", 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("自那以后，我在欧罗拉大神殿待了一段时间，帮助白魔法师进行研究工作。", 1);
                                                                    } else if (status === V++) {
                                                                      cm.eventSKill(0);
                                                                      cm.dispose();
                                                                      cm.warp(302090402, 0, false);
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
function action16(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#就那样，不知不觉，就过了三个月。", 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue(" 从未想过以后会发生什么事……", 1);
      } else if (status === V++) {
        cm.eventSKill(0);
        cm.dispose();
        cm.warp(302040010, 0, false);
        cm.setInGameDirectionMode(false, true, false);
        cm.forceCompleteQuest(32638);
        cm.gainExp(77904);
        cm.gainItem(4033971, -1);
      }
    }
  }
}
function action17(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm26.img/SpeakInTheVoid", 0, 0);
      cm.npc_ChangeController(2510034, "oid=2033251", -1000, 66, 18, -1050, -950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2033251", "summon", 0, 0);
      cm.npc_ChangeController(2510033, "oid=2033252", -1500, 66, 27, -1550, -1450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2033252", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("那……那是什么？我从未见过那么大的乌曼。", 5, 2510003, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……！！不会吧？\r\n出事了。必须快点去告诉佣兵……", 5, 2510003, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=2033252");
                cm.npc_LeaveField("oid=2033252");
                cm.npc_ChangeController(2510033, "oid=2033427", -1500, 66, 27, -1550, -1450, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=2033427", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('…！！', 5, 2510003, false, true);
                } else {
                  if (status === V++) {
                    cm.forceStartQuest(32644, '');
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.eventSKill(0);
                    cm.dispose();
                    cm.warp(302040010, 0, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2033251");
                    cm.npc_LeaveField("oid=2033251");
                    cm.npc_LeaveField("oid=2033427");
                    cm.npc_LeaveField("oid=2033427");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action18(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很难醒过来啊……\r\n现在几点了？", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("再看看吧……一定会醒过来的。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
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
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.inGameDirectionEvent_Monologue(" 时间变得很缓慢。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue(" 看来，小孩最后是想告诉我什么。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue(" 那是什么呢? ", 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm26.img/SpeakInTheVoid", 0, 0);
                                cm.sendNormalTalk("乌曼……还有一个月的时间……", 17, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("..................!!", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("瞬间，脑子一下子清醒了。\r\n开始整理所有的信息。", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fnBatang#「 这片森林里怎么会有如此多的乌曼? 是因为太暗了吗? 」", 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fnBatang#\r\n\r\n\r\n「 从上个月开始，这片深林里的乌曼开始大量出现。」", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fnBatang#\r\n\r\n\r\n\r\n\r\n「 白魔法师从一个月前加快了研究的进度。」", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fnBatang#\r\n\r\n           「 至今为止，从未见过的，巨大的乌曼……", 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fnBatang#\r\n  「 佣兵……快点逃跑。」", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……怎么会，白魔法师不会这么做的。\r\n\r\n但是……", 17, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("白魔法师是几年前开始在欧罗拉展开魔法研究的。", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("乌曼也是在几年前开始出现的。", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("\r\n白魔法师锁住研究室的门，开始埋头研究是在一个月之前。", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("附近的乌曼数量增多也是从一月前开始。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("怎么会直到现在才发现呢? ", 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("……突然想到白魔法师对我说的话。", 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n#fnBatang#―――――――#fn黑体#「 我是希望能翻过那道墙的人」", 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.forceStartQuest(32645, '');
                                                                  cm.eventSKill(0);
                                                                  cm.dispose();
                                                                  cm.warp(302040010, 0, false);
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
function action19(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm26.img/SpeakInTheVoid", 0, 0);
          cm.sendNormalTalk("白魔法师必须立刻停止研究。", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#e乌曼是白魔法师过度研究而形成的影子。#n 只要他能够终止现在的研究，起码事态不会继续恶化。", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("请不要继续猜测了，#h0#。不会发生这样的事情！", 5, 2510011, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("如果我错了话，请你反驳我看看，马尔斯。", 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……我知道事实。", 5, 2510010, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("据我所知，你提到的‘乌曼’……那是大师研究的副作用的产物。看到和你一起来的孩子转交的物质，一下就明白了啊。", 5, 2510010, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("怎么可能……首席魔法师，那是真的吗？", 5, 2510011, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("白魔法师自己知道这一事实吗？\r\n……应该知道已经有人因为乌曼而失去了生命。即便如此，白魔法师还继续研究……？", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("这是无可避免的牺牲。光变强的话，影子自然会加深。把现在这混沌的世界作为祭礼，为了能够创造出更加美好的世界……那就是大师的想法。所以才会加快研究进度的。", 5, 2510010, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……对不起，我想要继续相信大师。", 5, 2510010, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("无可避免的牺牲……简直可笑。这样的话你能够对着那边屋子里躺着的孩子说吗？", 17, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("快把那扇门打开。否则我就要用武力打开了。", 17, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("那我只能拦住你了。", 5, 2510010, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("不，不要。请停止战斗，两位！", 5, 2510011, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('外面吵吵什么呢。', 5, 2510021, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk('！！', 5, 2510010, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk('白魔法师……？', 17, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("听到门那头传来的声音，起了一身鸡皮疙瘩。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("那是我所认识的白魔法师的声音吗……? ", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("我成功了，也失败了。\r\n违背禁忌，坚持埋头进行光之研究，终于成功越过了那道墙。", 5, 2510021, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("但是……没有终极光明。不是因为我没能找到。而是一开始就不存在。因为只要有光，就必然有黑暗。", 5, 2510021, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("#r#e……然而终极黑暗是存在的。这就是我的结论。#k#n", 5, 2510021, false, true);
                                                              cm.effect_Voice("Voice.img/Library/WhiteWizard/18", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("……！？！大师，那是什么？", 5, 2510010, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("立刻把门打开，马尔斯！！(进入白魔法师的研究室。)", 17, 0, true, true);
                                                                } else if (status === V++) {
                                                                  cm.eventSKill(0);
                                                                  cm.dispose();
                                                                  cm.warp(302090410, 0, false);
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
function action20(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("「 ……!！」", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("仿佛扎根在地板上一样，无法动弹。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("本能地明白了那里的所有状况。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#'那个'可以说不再是人类。", 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……哈哈，大师？！这是什么……？如果你是和我们开玩笑的话，就此打住吧。一点都不好玩#fnBatang#――――", 5, 2510011, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#e……不要，飞鱼丸！都躲到外面去！！！#n", 5, 2510010, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("白魔法师，住手！现在还能回头！", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#r#e太迟了。#k#n", 5, 2510021, false, true);
                            cm.effect_Voice("Voice.img/Library/WhiteWizard/19", 100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                              cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
                              cm.effect_REPEAT("Effect/Direction14.img/effect/WWdark", 1, 1, 1, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_REPEAT("Effect/Direction14.img/effect/WWdarkeye", 1, 1, 1, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 245, 245, 245, 2000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue('……传来雨声。', 0);
                                            cm.effect_Voice("Voice.img/Library/Mercenary/M/20", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("身体……还能移动。", 1);
                                              cm.effect_Voice("Voice.img/Library/Mercenary/M/21", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("我晕过去了多久? ", 1);
                                                cm.effect_Voice("Voice.img/Library/Mercenary/M/22", 100);
                                              } else if (status === V++) {
                                                cm.eventSKill(0);
                                                cm.dispose();
                                                cm.warp(302050020, 0, false);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.forceCompleteQuest(32647);
                                                cm.gainExp(116856);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action21(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm26.img/Serenity", 0, 0);
          cm.sendNormalTalk("#fs20#白魔法师！你在哪里！", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk("#fs20#快出来！", 17, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.sendNormalTalk("…………！！", 17, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(2510035, "oid=2041629", -365, 185, 4, -415, -315, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=2041629", "summon", 0, 0);
                    cm.npc_SetSpecialAction("oid=2041629", "appear", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("无法继续挪动脚步，最终冻住了。", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("其实一开始就知道。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("无法对抗他的力量。", 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("但即便知道会死，我还是去追他了。", 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("……因为我想亲眼看到结局。", 17, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#e白魔法师#n。\r\n\r\n……不，看到你的样子，就不能再这样称呼你了。", 17, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#e#r……黑魔法师。#k#n", 17, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("好，来吧，我不会逃走，就算是牺牲我的生命，我也要给你留下永远忘不掉的伤口。", 17, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2041629");
                                          cm.npc_LeaveField("oid=2041629");
                                          cm.npc_ChangeController(2510036, "oid=2041952", -365, 185, 4, -415, -315, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2041952", 'summon', 0, 0);
                                          cm.npc_SetSpecialAction("oid=2041952", "magic", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.eventSKill(0);
                                            cm.dispose();
                                            cm.warp(302090510, 0, false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2041952");
                                            cm.npc_LeaveField("oid=2041952");
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action22(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk("喂，孩子，你打算跟着我到什么时候。", 5, 2510023, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("佣兵，我们做彼此的家人好吗？", 5, 2510003, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……什么？", 5, 2510023, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你不觉得寂寞吗？就算你从这个世界上消失了，也不会有人记得你。所以，让我们成为彼此的家人吧，我们互相记着对方，怎么样？", 5, 2510003, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('……', 5, 2510023, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("切……开玩笑啦，佣兵。我才不相信这个呢。", 5, 2510003, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm34.img/TheStormyForest", 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b(呼……我发生了什么事吗？)#k", 5, 2510031, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b(身体无法移动……我死了吗？)#k", 5, 2510031, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(眼前变得昏暗……这里。)", 5, 2510031, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("我是流浪佣兵。", 0);
                              cm.effect_Voice("Voice.img/Library/Mercenary/M/27", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("哪怕随时随地死去，也很正常的人生。", 0);
                                cm.effect_Voice("Voice.img/Library/Mercenary/M/28", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("夕阳西下，风吹过衣角的某一天，我的尸体也将如同落叶一般，在某个地方飘荡。", 1);
                                  cm.effect_Voice("Voice.img/Library/Mercenary/M/29", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("但是如果说生命的尽头，有什么迫切的愿望的话……", 1);
                                    cm.effect_Voice("Voice.img/Library/Mercenary/M/30", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("虽然我即将死亡，但如果说在人生尽头，有什么迫切愿望的话……", 1);
                                      cm.effect_Voice("Voice.img/Library/Mercenary/M/34", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("白魔法师……\r\n不，#r黑魔法师。#k", 0);
                                        cm.effect_Voice("Voice.img/Library/Mercenary/M/35", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("我的后代一定要阻止那个恶魔。", 1);
                                          cm.effect_Voice("Voice.img/Library/Mercenary/M/36", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                              cm.sendNormalTalk("#fs30#喂，佣兵！醒醒！不要死啊！#fs12#", 5, 2510003, false, true);
                                              cm.effect_Voice("Voice.img/Library/Arin/13", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(2510034, "oid=2042753", -1300, 120, 25, -1350, -1250, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2042753", "summon", 0, 0);
                                                cm.npc_SetForceMove("oid=2042753", 1, 400, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm34.img/DimensionLibrary", 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("……哈哈……太好了，小孩……你还活着啊。", 1);
                                                    cm.effect_Voice("Voice.img/Library/Mercenary/M/31", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("不是说让我珍惜生命嘛！不是说即便对方很强也不要随意放弃生命嘛！为什么傻瓜一样地追过去！", 5, 2510003, false, true);
                                                      cm.effect_Voice("Voice.img/Library/Arin/14", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("啊……", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("不行，说不出话来。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("小孩的声音也慢慢远去了。\r\n\r\n", 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("…………看来，雨停了。", 1);
                                                              cm.effect_Voice("Voice.img/Library/Mercenary/M/32", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 100, 200, 117);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(12687);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                      cm.effect_Voice("Voice.img/Library/Arin/15", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                        cm.effect_Voice("Voice.img/Library/Arin/16", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("#fs40#章节 I : 白魔法师", 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("故事到此结束了。", 5, 2500000, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("现在请回来吧，回到现实中真正的#h0#！", 5, 2500000, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.forceCompleteQuest(32649);
                                                                                cm.dispose();
                                                                                cm.warp(302000000, 0, false);
                                                                                cm.forceCompleteQuest(32600);
                                                                                cm.finishAchievement(1178);
                                                                                cm.forceCompleteQuest(32600);
                                                                                cm.eventSKill(0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=2042753");
                                                                                cm.npc_LeaveField("oid=2042753");
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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