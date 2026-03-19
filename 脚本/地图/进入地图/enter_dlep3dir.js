var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getMapId();
  eval(V)(f, E, e);
}
function action304090000(f, E, e) {
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
          cm.sendNormalTalk("这里是黑色之翼的洞穴……果然阴森森的，很大啊。", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("「 黑色之翼」.", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("想要复活黑魔法师的黑暗势力。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("那股势力非常强大，足以轻松占领整个埃德尔斯坦。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("我之所以孤身一人来到这危险的地方，是有原因的。我要找一个人。", 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#h0#，这次的任务很危险。", 5, 2530000, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("不久前，我们的情报网截获了不同寻常的传言。说是有黑色之翼势力要#r暗杀女皇#k。", 5, 2530000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你也知道…… \r\n我们即将#e出兵埃德尔斯坦#n。这种时候，居然有人要暗杀女皇，真是不爽啊。", 5, 2530000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#fNpc/2531001.img/stand/0#\r\n\r\n针对此事，我们派出了诚实的骑士#b都纳米斯#k。\r\n话说你再怎么不认识周围的人，再怎么记忆力差，应该知道他是谁吧？不错，正是你的前辈骑士。", 5, 2530000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("都纳米斯带着能够找到'有关黑魔女的线索'的物品回来了，就是这个。\r\n\r\n#i4001207##t4001207#", 5, 2530000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("但是她说没能逮到要暗杀女皇的犯人，然后就离开圣地了。果然不愧是固执的她说的话。", 5, 2530000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("……「 必须抓住#e#r黑魔女#k#n。」\r\n\r\n这是他最后留下的话。", 5, 2530000, true, true);
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
                                            cm.inGameDirectionEvent_Monologue("同时，收到消息说，都纳米斯被黑色之翼抓走，送到埃德尔斯坦去了。", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("都纳米斯是极为忠诚的骑士。他绝对不会背叛希纳斯骑士团，告诉敌人情报的。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("\r\n另外，黑色之翼……他们很残忍。不知道都纳米斯会不会出事啊。", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("听说黑色之翼的各个干部都有自己独特的能力。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("其中最让人有压力的就是都纳米斯提过的「 黑魔女 」……她究竟有多大能力，还没人清楚。", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("……想那么多也没用。\r\n先集中精力找都纳米斯吧。", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("再说一遍，这次的任务很危险。请务必平安回来。你们每个人的生命对骑士团来说都是宝贵的财产。", 5, 2530000, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("成功完成任务回来的话，可以获得奖励。", 5, 2530000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("……好吧，一起悠闲地喝杯茶怎么样？", 5, 2530000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs40#章节 III : 黑魔女", 1);
                                                                  } else if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.dispose();
                                                                    cm.warp(304000000, 0, false);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceCompleteQuest(32651);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action304090300(f, E, e) {
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
          cm.sendNormalTalk("差点出了大事。多亏了你，才得以阻止圣地的进攻者。", 5, 2530000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("令人惋惜的消息，由于这次黑魔女的袭击，没能向反叛者派出援军。", 5, 2530000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("反叛者大概认为我们背弃了约定。要想恢复这一关系，看来要花费不短时间了。", 5, 2530000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("封锁我们派兵，借此诱导反叛者的分裂。我们完全陷入了敌人的阴谋之中。", 5, 2530000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("都是我的错，如果我没有被敌人的奸计蒙骗的话……", 5, 2531001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("切，即使这样小心了，居然还是中了敌人的奸计……。", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("请不要自责。", 5, 2530000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("真正可怕的诅咒不是魔法。而是无论我们再怎么努力，也无法改变现在的状况……这种无力感才是真正可怕的诅咒。", 5, 2530000, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("\t解开圣地的诅咒。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("\t但是黑魔女的话一直在耳边萦绕。", 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
                                  cm.effect_REPEAT("Effect/Direction1.img/effect/aran1/blackWizardBack/0", 1, 1, 1, 0, 0);
                                  cm.effect_REPEAT("Effect/Direction1.img/effect/aran1/blackWizard/0", 1, 1, 1, 0, 0);
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
                                        cm.inGameDirectionEvent_Monologue("\t「 放弃吧，黑魔法师复活的话，你们是绝对不可能战胜他的，不是吗? ", 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("\t……那仿佛是一种无可奈何的残酷的事实，又像是诅咒。", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("\t未来还将遇见怎样强大的敌人呢? ", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                                cm.effect_REPEAT("Effect/Direction1.img/effect/aran1/blackWizardBack/0", 1, 0, 0, 0, 0);
                                                cm.effect_REPEAT("Effect/Direction1.img/effect/aran1/blackWizard/0", 1, 0, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("……大家都气馁了呢。不会是被黑魔女的话影响的吧？", 5, 2530000, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("未来我们还会遇到更艰难的试炼。想要阻止它的我们的尝试是有意义的吗？", 17, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("…………", 5, 2530000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.sendNormalTalk("大家，都听说过#b次元图书馆#k吗？", 5, 2530000, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("次元……图书馆？", 17, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(304090310, 0, false);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action304090310(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
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
            cm.sendNormalTalk("存有世界上所有知识和记录的魔法图书馆。不是由什么人专门去记载而成，而是自动记载的结果。", 5, 2530000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("还有如此神奇的地方。为什么突然提起……？", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("这个嘛……我是想说，这个世界上，没有毫无意义的行为。", 5, 2530000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我们大家可能不会被记在历史书上，但这并不是说我们的生活是没有任何意义的。", 5, 2530000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("事实上，我们大家的生活，会被一五一十地记载在世界的某个地方。", 5, 2530000, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(304090320, 0, false);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action304090320(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
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
            cm.sendNormalTalk("不知道未来，会是谁来看到记载你的故事的书呢。", 5, 2530000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("也许我们在做的事情不过是以卵击石。但是一定会有人记住你。记住你的勇气，你的选择，你的旅途。", 5, 2530000, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(304090330, 0, false);
              }
            }
          }
        }
      }
    }
  }
}
function action304090330(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
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
            cm.sendNormalTalk("小的胜利将会汇聚成巨大的胜利。", 5, 2530000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("请鼓起勇气起来吧。请做你现在力所能及的事情。这将是我们对抗诅咒的唯一的方法。", 5, 2530000, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(304090340, 0, false);
              }
            }
          }
        }
      }
    }
  }
}
function action304090340(f, E, e) {
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
          cm.sendNormalTalk("现在力所能及的事……", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("是的，现在力所能及的事情。首先……", 5, 2530000, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("好的，先让我们一起喝杯茶怎么样？顺便讨论一下未来的对策。", 5, 2530000, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 100, -350, -800);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(8082);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs40#章节 III : 黑魔女", 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("现在请回来吧，回到现实中真正的#h0#！", 5, 2500000, false, true);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.dispose();
                                cm.warp(302000000, 0, false);
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