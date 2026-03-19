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
      cm.npc_ChangeController(2074102, "oid=2584945", 11, -33, 6, -39, 61, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2584945", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#b#h0##k，你来了，我等候多时了。", 37, 2074102, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你过得还好吗？我听说你在很多地方都十分活跃。\r\n所以，这件事只能拜托你了。", 37, 2074102, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("其实，现在在童话村发生了大……", 37, 2074102, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#哇！就是这个人吗？\r\n传说中的勇士？", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2074100, "oid=2584983", 88, -48, 6, 38, 138, 1, true, 500, false);
              cm.npc_SetSpecialAction("oid=2584983", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，比起传说中来说……长得挺一般啊。", 37, 2074100, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#威兹叔叔，不是吗？这长相挺一般……。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("小可爱，对初次见面的人应该怎么说？", 37, 2074102, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#啊！抱歉，我应该先打个招呼的。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#你好！我叫小可爱。\r\n\r\n#b#fs25#可#fs20# ~ 爱~ #fs25#可#fs20# ~ 爱~#g#fs25#小↗ ~ 可↑~ 爱~~！#k", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                            cm.sendNormalTalk_Bottom("#face1##fs12#小~可~爱~小~可~爱~", 37, 2074100, false, true);
                            cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…………", 37, 2074102, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                    cm.sendNormalTalk_Bottom("希望你能够理解我的助手……有些不懂礼貌。", 37, 2074102, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#等下，我怎么……", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不过她其实是个善良的孩子，对吧，小可爱？\r\n你能把行李拿过来吗？", 37, 2074102, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5#我可不是孩子哦？\r\n今天开始我就已经18岁了，已经是成年人了！", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#所以说如果我也一起去……", 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不行，小可爱。通道原本就不稳定，\r\n现在能够来往于那里的只有这位勇士。", 37, 2074102, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("事情就是这样，你也不用再多说了。\r\n这位小朋友，你能帮忙拿一下行李吗？", 37, 2074102, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#哼！明明是我的生日，这都是什么啊……", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2584983");
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("呼，废话说的太多了。只要那孩子在就会变成这样。", 37, 2074102, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("首先1现在情况危急，\r\n正如我在信中所说，#g童话出现了混乱。#k", 37, 2074102, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(30401, "skip=1");
                                                          cm.askYesNo_Bottom("如果不能阻止这场混乱，童话村就危险了。\r\n那么整个玩具城可能也会消失。\r\n\r\n#g请您前往童话村#k阻止这场#g混乱#k吗？", 37, 2074102);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('真的吗？太谢谢你了。', 37, 2074102, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("啊，我们不能再浪费时间了。\r\n详细情况童话村的#b朴大爷#k会告诉你的。", 37, 2074102, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我会把行李给你拿过来的，请稍等。", 37, 2074102, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 600, 1, 0, 0, 0, 4, 2074102, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    cm.effect_NormalSpeechBalloon('....', 1, 0, 0, 600, 1, 0, 0, 0, 4, 2074102, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      cm.effect_NormalSpeechBalloon('.....', 1, 0, 0, 600, 1, 0, 0, 0, 4, 2074102, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 900, 1, 0, 0, 0, 4, 2074102, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=2584945", 1);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=2584945"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.sendNormalTalk_Bottom("…………小可爱？小可爱？", 37, 2074102, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2584945", -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("……请允许我失礼一下。", 37, 2074102, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=2584945", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_LeaveField("oid=2584945");
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(2074102, "oid=2585117", 11, -33, 6, -39, 61, 1, true, 500, false);
                                                                                          cm.npc_SetSpecialAction("oid=2585117", "summon", 0, 0);
                                                                                          cm.sendNormalTalk_Bottom("看来小可爱生气了。去哪儿了呢……\r\n我之后再去找她吧。", 37, 2074102, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(2074101, "oid=2585119", -25, -40, 6, -75, 25, 1, false, 500, false);
                                                                                            cm.npc_SetSpecialAction("oid=2585119", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("在这里是一些能够有助于你阻止童话村混乱的道具。\r\n#b朴大爷#k会告诉你详细情况的。", 37, 2074102, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("童话村和玩具城的未来就掌握在你的手上了。\r\n拜托你了。", 37, 2074102, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_LeaveField("oid=2585119");
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("嗯，那个行李有点重啊，勇士能行吗……", 37, 2074102, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我是不是放了太多书……", 37, 2074102, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("……等一下，难道！", 37, 2074102, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("本来应该在包里面的书为什么在小可爱的房间里……", 37, 2074102, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("那么……在包里的是？\r\n该死！小可爱去了童话村，不知道会发生什么事情……", 37, 2074102, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("……哈。", 37, 2074102, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("……也许，这就是命运的安排吧。", 37, 2074102, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(224000011, 0);
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