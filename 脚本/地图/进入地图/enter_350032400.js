var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.npc_ChangeController(1540446, 'oid=35827', 180, -118, 5, 136, 230, 0, false, 0, false);
  cm.teachSkill(80001586, -1, 0);
  cm.cancelItem(80001586);
  cm.cancelItem(80001587);
  cm.cancelItem(80001588);
  cm.cancelItem(80001589);
  cm.cancelItem(80001590);
  cm.cancelItem(80001591);
  if (cm.getNumberFromQuestInfo(33178, 'f') == 0) {
    action1(f, E, e);
    cm.setPartner(1, 1540624, 80001615, 0);
    cm.useItem(2023431);
    cm.useItem(2023432);
    cm.setPartner(1, 1540640, 80001616, 0);
  } else {
    if (cm.haveItem(4034229, 30)) {
      action2(f, E, e);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.useItem(2023431);
      cm.useItem(2023432);
      cm.setPartner(1, 1540640, 80001616, 0);
      cm.npc_ChangeController(1540610, "oid=294498553", -200, -200, 6, -250, -150, 0, true, 0, false);
    } else {
      if (cm.haveItem(4034230, 30)) {
        action3(f, E, e);
        cm.setPartner(1, 1540624, 80001615, 0);
        cm.useItem(2023431);
        cm.useItem(2023432);
        cm.setPartner(1, 1540640, 80001616, 0);
        cm.npc_ChangeController(1540610, "oid=294498553", -200, -200, 6, -250, -150, 0, true, 0, false);
      } else {
        if (cm.haveItem(4034231, 30)) {
          action4(f, E, e);
          cm.setPartner(1, 1540624, 80001615, 0);
          cm.setPartner(1, 1540640, 80001616, 0);
          cm.useItem(2023431);
          cm.useItem(2023432);
          cm.npc_ChangeController(1540610, "oid=294498553", -200, -200, 6, -250, -150, 0, true, 0, false);
        } else if (cm.isQuestFinished(33187)) {
          cm.cancelItem(2023431);
          cm.cancelItem(2023432);
          cm.sendNormalTalk_Bottom("#h0#！利用中间的传送口，就可以再次挑战空中战。", 37, 1540610, false, false);
          cm.npc_ChangeController(1540610, "oid=294498553", -200, -200, 6, -250, -150, 0, true, 0, false);
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1540610, "oid=294498553", -700, -145, 1, -750, -650, 0, true, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350032400");
      cm.forceStartQuest(33178, '');
      cm.npc_SetSpecialAction("oid=294498553", 'summon', 0, 0);
      cm.forceStartQuest(33185, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('这……', 37, 1540610, false, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=294498553", 1, 200, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -500, -145);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("飞船……", 37, 1540610, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=294498553", 1, 200, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, -300, -115);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                          cm.sendNormalTalk_Bottom("被毁坏了？？？？？", 37, 1540610, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=294498553", 'angry1', -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.setNpcSpecialActionReset("oid=294498553");
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('可恶的黑色之翼……', 37, 1540612, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("怎么办？要不要回去找吉格蒙特队长？", 37, 1540611, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=294498553", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……不！我来试着修理飞船！\r\n你们不看看我是谁！我可是反抗者1级工程师切奇！", 37, 1540610, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("如果修得好，说不定飞船的性能会变得比之前更好呢！", 37, 1540610, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('吼哦……性能更好？', 37, 1540611, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我会先进行最基本的修理，\r\n你们能去帮我搜集些配件吗？", 37, 1540610, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("敌军智能机器人被摧毁时掉落的铁板好像挺有用的呢？\r\n你只要帮我搜集#r 30个#t4034229##k，我就能立刻修理好飞船了。", 37, 1540610, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你只要到右边甲板上，应该就能看到智能机器人了！快去看看吧！", 37, 1540612, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=294498553", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setNumberForQuestInfo(33178, 'f', 1);
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
function action2(f, E, e) {
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
      cm.forceStartQuest(33178, '');
      cm.npc_SetSpecialAction("oid=294498553", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你终于来啦！\r\n好了，那我再修一次吧？", 37, 1540610, false, true);
        } else {
          if (status === V++) {
            cm.forceCompleteQuest(33185);
            cm.forceStartQuest(33186, '');
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.forceCompleteQuest(33173);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……嗯…………", 37, 1540610, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -150, -115);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                      cm.npc_SetSpecialAction("oid=294498553", "angry1", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                      cm.effect_NormalSpeechBalloon("为什么不行!!!!!!", 0, 0, 0, 2000, 0, 0, -10, 0, 0, 1540610, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=294498553");
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('喔喔，冷静点。', 37, 1540612, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("很抱歉，我在不知不觉间就失去了理性。", 37, 1540610, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们的小熊切奇居然会像这样大喊大叫，\r\n真是越看越可爱呢？", 37, 1540611, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("看来是因为缺少与铁板相连的螺丝，修理才会出现问题的。\r\n如果你们再帮我搜集#r30个#t4034230# #k，我就能把它修得像新的一样！拜托你们啦！", 37, 1540610, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.removeAll(4034229);
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
function action3(f, E, e) {
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
      cm.forceStartQuest(33178, '');
      cm.npc_SetSpecialAction("oid=294498553", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你终于来啦！\r\n好了，那我再修一次吧？", 37, 1540610, false, true);
        } else {
          if (status === V++) {
            cm.forceCompleteQuest(33186);
            cm.forceStartQuest(33187, '');
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.forceCompleteQuest(33174);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("…………嗯……………………", 37, 1540610, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -150, -115);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                      cm.npc_SetSpecialAction("oid=294498553", "angry2", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                      cm.effect_NormalSpeechBalloon("为什么!怎么会这样!#$%@#$^!!!", 0, 0, 0, 2000, 0, 0, -25, 0, 0, 1540610, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=294498553");
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("喂，切奇，冷静点，冷静。", 37, 1540612, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('…………', 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("该死，我又再次失去了理性。\r\n这次我是把飞船修好了……\r\n可惜的是没有燃料，飞船无法运行。", 37, 1540610, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这真的是最后一次。\r\n你能帮我从智能机器人那里抢些燃料过来吗？\r\n敌人的机器人好像拥有充足的燃料，你只要帮忙搜集#r30个#t4034231# #k就行了。", 37, 1540610, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.removeAll(4034230);
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
function action4(f, E, e) {
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
      cm.forceStartQuest(33178, '');
      cm.npc_SetSpecialAction("oid=294498553", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你来啦！", 37, 1540610, false, true);
        } else {
          if (status === V++) {
            cm.forceCompleteQuest(33187);
            cm.forceCompleteQuest(33178);
            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -150, -115);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                    cm.sendNormalTalk_Bottom("成功啦！飞船终于修理好了！", 37, 1540610, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那在出发之前，我先告诉你们几点注意事项！", 37, 1540610, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("- 空战推荐在#b像素为1366*768#k的情况下进行。\r\n- 可以通过Ctrl键进行攻击。\r\n- 如果获得#v2023411##t2023411#，飞船就会变得更强。", 37, 1540610, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("多亏了#h0#帮忙搜集到的材料，我为飞艇增加了新的功能！\r\n- 如果获得敌人掉落的电池，必杀技状态条就会逐渐充满。\r\n#v2023409##t2023409# - 速度急剧上升，启动无敌盾\r\n#v2023408##t2023408# - 瞬间删除所有怪物和枪弹\r\n#v2023410##t2023410# - 在隐身状态下，以最高升级阶段发动攻击", 37, 1540610, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("- 根据电池的颜色，所累积的必杀技状态条是不同的，请注意哦。\r\n- 必杀技可通过Space键使用。\r\n- 当1个以上的必杀技状态条充满时，可以从左开始依次使用。", 37, 1540610, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("好了，那我们现在出发吧！", 37, 1540610, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=294498553");
                                  cm.npc_LeaveField("oid=294498553");
                                  cm.dispose();
                                  cm.removeAll(4034231);
                                  cm.forceStartQuest(33180, '');
                                  cm.warp(350032401, 0, true);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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