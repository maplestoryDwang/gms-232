var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1662636", 706, 1920, 0);
      cm.npc_SetSpecialAction("oid=1662636", 'summon');
      cm.npc_ChangeController(9400032, "oid=1662637", 770, 1920, 1);
      cm.npc_SetSpecialAction("oid=1662637", "summon");
      cm.npc_ChangeController(9400033, "oid=1662638", 850, 1920, 1);
      cm.npc_SetSpecialAction("oid=1662638", 'summon');
      cm.npc_ChangeController(9400034, "oid=1662639", 1500, 1920, 0);
      cm.npc_SetSpecialAction("oid=1662639", 'summon');
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");
      cm.effect_Text(["#fn黑体##fs18#寻找动物销售商而来到勇士部落的侦探团一行人……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(7200);
      cm.curNodeEventEnd(true);
      cm.sendNextNoESC_Bottom("好，到勇士部落了，那就开始吧？", 9400031);
    } else {
      if (status === V++) {
        cm.sendNextNoESC_Bottom("嗯，那我们是先去调查消息，还是先找动物商人呢？", 9400032);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=1662638", 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("等等……你们看到那边那个人了吗？", 9400033);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1662637", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1000, 1878);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1882);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("谁……？", 9400031);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("那个人，他的穿着打扮和这个村子一点都不搭，应该是外地人。", 9400033);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("外地人……难道就是明明女士提到的那个商人？", 9400031);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("我们先和他搭个话看看吧？", 9400033);
                              } else {
                                if (status === V++) {
                                  cm.sendNextSNoESC_Bottom("那个人还在勇士部落吗？就算不在，我还是去那个位置看看吧。");
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=1662637", 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=1662638", 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1662636", 1, 600, 200);
                                          cm.npc_SetForceMove("oid=1662637", 1, 350, 200);
                                          cm.npc_SetForceMove("oid=1662638", 1, 350, 200);
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
                                            } else {
                                              if (status === V++) {
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
                                                        cm.sendNextNoESC_Bottom("那个……我想问你点事情……？", 9400031);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1662639", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC_Bottom('我？', 9400034);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNextNoESC_Bottom("是的，请问你是在出售什么东西吗？", 9400031);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNextNoESC_Bottom("#face0#(咳)……怎么？你为什么这么觉得？", 9400034);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNextNoESC_Bottom("你似乎不是这个村子的人。而且看你似乎有点焦急……", 9400033);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNextNoESC_Bottom("#face0#哎！？嗯……", 9400034);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNextNoESC_Bottom("(没找到小偷，倒是来了其他人……)", 9400034);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNextNoESC_Bottom("废话不多说了，我是赏金猎人。你们这些小鬼……还有奇怪的家伙……我不知道你们是谁，不过看来你们是听说了我散布的假消息而来的。", 9400034);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNextNoESC_Bottom("赏金猎人？不是动物商人？！", 9400031);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNextNoESC_Bottom("贩卖动物什么的是我为了引出我在宇宙中追查的罪犯而设下的诱饵。", 9400034);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNextNoESC_Bottom("宇宙……看来你来自很远的地方啊。", 9400033);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNextNoESC_Bottom("宇宙中臭名昭著的罪犯身上有宇宙警察的悬赏金。警察们只凭自己的力量难以在这广阔的宇宙中找到罪犯，所以就有我这样的赏金猎人存在。", 9400034);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNextNoESC_Bottom("虽然……我被冤枉，也成了被悬赏的犯人，来到了这个冒险岛世界。但是我在这里并没有忘记自己的使命。那些家伙是我一直作为目标的一个组织。", 9400034);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNextNoESC_Bottom("那就是说，你也是罪犯？！啊啊啊", 9400031);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNextNoESC_Bottom("#face0#你说什么呢！我都说了是被冤枉的！被冤枉的！", 9400034);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNextNoESC_Bottom("等等，你要抓的罪犯是什么人？", 9400032);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNextNoESC_Bottom("#face2#你们的好奇心还真重啊……！", 9400034);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNextNoESC_Bottom("不过没关系，我就告诉你们吧。我现在正在寻找的罪犯是个巨大的组织。", 9400034);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNextNoESC_Bottom("他们叫做“APORD”。我现在就是来这里寻找APORD的痕迹。", 9400034);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNextNoESC_Bottom('APORD？', 9400031);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust5", 0, 1500, 0, 0, 14, 4, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1300, 1980);
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
                                                                                                                  cm.sendNextNoESC_Bottom("嗯，说起APORD，他们是进行走私和绑架的犯罪组织，不过他们绑架的不只有人，还有动物。", 9400034);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNextNoESC_Bottom("特别是拥有特殊能力的动物，不管是哪里他们都会绑架回去。", 9400034);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNextNoESC_Bottom("最近听说他们绑架动物进行各种活体实验。虽然得确认一下这个传言是不是真的，但活体实验……真是可怕。", 9400034);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNextNoESC_Bottom("所以，如果得到出售珍稀动物的消息，他们应该就会找过来。没想到不是APORD而是你们找上门了，切。", 9400034);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNextSNoESC_Bottom("APORD……他们就是这样的组织啊！没错，我想起来了！");
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.forceCompleteQuest(59716);
                                                                                                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                  cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                } else if (status === V++) {
                                                                                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                  cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                                                                                  cm.setInGameDirectionMode(false, false, false);
                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                  cm.npc_LeaveField("oid=1662636");
                                                                                                                                  cm.npc_LeaveField("oid=1662637");
                                                                                                                                  cm.npc_LeaveField("oid=1662638");
                                                                                                                                  cm.npc_LeaveField("oid=1662639");
                                                                                                                                  cm.dispose();
                                                                                                                                } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;