var status = -1;
function start() {
  action(1, 0, 0);
}
function action(i, q, p) {
  status++;
  if (!cm.isQuestFinished(34903) && !cm.isQuestFinished(34904)) {
    action0(i, q, p);
  } else {
    if (cm.isQuestFinished(34903) && !cm.isQuestFinished(34904)) {
      action1(i, q, p);
    } else {
      if (cm.isQuestFinished(34903) && cm.isQuestFinished(34904) && !cm.isQuestFinished(34905) && cm.getNumberFromQuestInfo(34905, 'kill') == 1) {
        action3(i, q, p);
      } else if (cm.isQuestFinished(34903) && cm.isQuestFinished(34904) && !cm.isQuestFinished(34905)) {
        action2(i, q, p);
      } else {
        cm.dispose();
      }
    }
  }
}
function action0(q, p, b) {
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(4300);
      cm.effect_Text(["#fn黑体##fs25#好久不见,朋友。一段时间没见,好像变强了不少嘛？", ''], [0, 2300, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
    } else {
      if (status === H++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face2#那个时候……你不是消失了吗？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
      } else {
        if (status === H++) {
          cm.effect_Text(["#fn黑体##fs25#哼,怎么可能？你忘了吗？严格地说,我是你的一部分。", ''], [0, 2400, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4400);
        } else {
          if (status === H++) {
            cm.effect_Text(["#fn黑体##fs25#只要有你在,我也不会消失。永.远。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === H++) {
              cm.sendNormalTalk_Bottom("#face5#你……到底是什么东西？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === H++) {
                cm.effect_Text(["#fn黑体##fs25#啊,那个嘛……说起来可就复杂了……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === H++) {
                  cm.sendNormalTalk_Bottom('#face5#……', 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                } else {
                  if (status === H++) {
                    cm.effect_Text(["#fn黑体##fs25#呃……还是算了吧。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === H++) {
                      cm.sendNormalTalk_Bottom('#face5#……', 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                    } else {
                      if (status === H++) {
                        cm.effect_Text(["#fn黑体##fs25#呵呵,干嘛做出那种可怕的表情？我说还不行吗？别皱眉头。", ''], [0, 2650, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(4650);
                      } else {
                        if (status === H++) {
                          cm.effect_Text(["#fn黑体##fs25#首先……对了,应该从那个开始说起。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                        } else {
                          if (status === H++) {
                            cm.effect_Text(["#fn黑体##fs25#你……知道有个叫“根源”的东西吗？不是字典上写的那个概念。", ''], [0, 2900, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(4900);
                          } else {
                            if (status === H++) {
                              cm.effect_Text(["#fn黑体##fs25#那个东西……是真实存在的。是世界上所有知识的集合。", ''], [0, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                            } else {
                              if (status === H++) {
                                cm.effect_Text(["#fn黑体##fs25#那是一般人无法到达的领域,但是……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                              } else {
                                if (status === H++) {
                                  cm.effect_Text(["#fn黑体##fs25#有几种方法可以到达那里。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === H++) {
                                    cm.effect_Text(["#fn黑体##fs25#……你也是可以到达那里的人。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === H++) {
                                      cm.sendNormalTalk_Bottom("#face3#但是……我不记得见过那种东西啊？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                                    } else {
                                      if (status === H++) {
                                        cm.effect_Text(["#fn黑体##fs25#你醒来的时候……几乎没剩下多少记忆,不是吗？", ''], [0, 2150, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(4150);
                                      } else {
                                        if (status === H++) {
                                          cm.effect_Text(["#fn黑体##fs25#根源不是可以随便接触到东西。你的记忆被夺走了,作为触犯禁地的代价。", ''], [0, 3250, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(5250);
                                        } else {
                                          if (status === H++) {
                                            cm.effect_Text(["#fn黑体##fs25#但你的情况非常特殊……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === H++) {
                                              cm.effect_Text(["#fn黑体##fs25#本来……除了记忆之外,你的肉体和灵魂也全部会被困在那里。", ''], [0, 2750, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(4750);
                                            } else {
                                              if (status === H++) {
                                                cm.effect_Text(["#fn黑体##fs25#那样的话,你现在也许就会变成……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === H++) {
                                                  cm.effect_Text(["#fn黑体##fs25#幽灵……用你们的话好像是这么说的。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === H++) {
                                                    cm.effect_Text(["#fn黑体##fs25#总而言之,现在你就像是半个幽灵……而我就是另一半。", ''], [0, 2450, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4450);
                                                  } else {
                                                    if (status === H++) {
                                                      cm.effect_Text(["#fn黑体##fs25#我把你召唤过来,也与这件事有关……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                    } else {
                                                      if (status === H++) {
                                                        cm.sendNormalTalk_Bottom("#face2#什么？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                                                      } else {
                                                        if (status === H++) {
                                                          cm.effect_Text(["#fn黑体##fs25#本来幽灵是永恒不灭的,只会回到深渊之中,但是永远不会消失。", ''], [0, 2800, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(4800);
                                                        } else {
                                                          if (status === H++) {
                                                            cm.effect_Text(["#fn黑体##fs25#但是……你……总有一天会死去。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                          } else {
                                                            if (status === H++) {
                                                              cm.effect_Text(["#fn黑体##fs25#所以……这样就尴尬了。你要是死了,我也会消失。", ''], [0, 2250, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(4250);
                                                            } else {
                                                              if (status === H++) {
                                                                cm.effect_Text(["#fn黑体##fs25#你……把生命赌在了无聊的事情上。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                              } else {
                                                                if (status === H++) {
                                                                  cm.effect_Text(["#fn黑体##fs25#随时可能……唉,不过看样子你也不想让出主导权……", ''], [0, 2350, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4350);
                                                                } else {
                                                                  if (status === H++) {
                                                                    cm.effect_Text(["#fn黑体##fs25#所以我决定尽可能救你一命。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                  } else {
                                                                    if (status === H++) {
                                                                      cm.effect_Text(["#fn黑体##fs25#通过唤醒你的力量……这就是我召唤你的目的,哈哈。", ''], [0, 2350, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(4350);
                                                                    } else {
                                                                      if (status === H++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#要是我不相信呢？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                                                                      } else {
                                                                        if (status === H++) {
                                                                          cm.effect_Text(["#fn黑体##fs25#嗯……我就知道会这样,所以刚才已经搞定了……", ''], [0, 2150, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(4150);
                                                                        } else {
                                                                          if (status === H++) {
                                                                            cm.effect_Text(["#fn黑体##fs25#怎么样？哈哈,很高兴见到你,朋友。这次我要做的事情已经结束了……", ''], [0, 3100, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5100);
                                                                          } else {
                                                                            if (status === H++) {
                                                                              cm.sendNormalTalk_Bottom("#face7#你这家伙……", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                                                                            } else {
                                                                              if (status === H++) {
                                                                                cm.effect_Text(["#fn黑体##fs25#呵呵,你一定会喜欢我的……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                              } else {
                                                                                if (status === H++) {
                                                                                  cm.effect_Text(["#fn黑体##fs25#我们下次再会吧。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                } else if (status === H++) {
                                                                                  cm.forceStartQuest(34903, '');
                                                                                  cm.dispose();
                                                                                  cm.warp(cm.getNumberFromQuestInfo(34903, 'map'), 0);
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action1(q, p, b) {
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.effect_Text(["#fn黑体##fs25#咦,咦？竟然没有拒绝……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === H++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs25#看来你决定接受我的力量了吗？", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === H++) {
          cm.sendNormalTalk_Bottom("#face5#我也有事要问你,所以一直在等着你。", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
        } else {
          if (status === H++) {
            cm.effect_Text(["#fn黑体##fs25#切……疑惑还没解开吗？", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === H++) {
              cm.sendNormalTalk_Bottom("#face3#这对我来说非常重要。", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === H++) {
                cm.effect_Text(["#fn黑体##fs25#哈……好吧,既然这么重要,我一定知无不言……", ''], [0, 2100, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(4100);
              } else {
                if (status === H++) {
                  cm.effect_Text(["#fn黑体##fs25#为了我们之间无法替代的友情,呵呵。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === H++) {
                    cm.sendNormalTalk_Bottom("#face5#那我问了。我只有一半变成了幽灵……你知道是为什么吗？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                  } else {
                    if (status === H++) {
                      cm.effect_Text(["#fn黑体##fs25#在侵蚀的过程中出现了几个问题。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === H++) {
                        cm.effect_Text(["#fn黑体##fs25#我想你也应该猜到了。那时刚好受到了外部的妨碍。", ''], [0, 2300, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(4300);
                      } else {
                        if (status === H++) {
                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === H++) {
                            cm.effect_Text(["#fn黑体##fs25#另一方面……是灵魂本身的问题。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === H++) {
                              cm.effect_Text(["#fn黑体##fs25#不知道为什么,你的灵魂无法被吞噬。就像是某种不纯物质一样。", ''], [0, 2850, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(4850);
                            } else {
                              if (status === H++) {
                                cm.sendNormalTalk_Bottom("#face2#我的……灵魂……", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                              } else {
                                if (status === H++) {
                                  cm.effect_Text(["#fn黑体##fs25#你能保留自我,就是因为这个……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === H++) {
                                    cm.effect_Text(["#fn黑体##fs25#你的运气很好。但是我就麻烦了。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === H++) {
                                      cm.effect_Text(["#fn黑体##fs25#因为你的灵魂一直在抵抗,所以我就无法完全占领你的身体。", ''], [0, 2650, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(4650);
                                    } else {
                                      if (status === H++) {
                                        cm.effect_Text(["#fn黑体##fs25#用不着对我太警惕……希望我们能和平相处。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                      } else {
                                        if (status === H++) {
                                          cm.effect_Text(["#fn黑体##fs25#我的回答就是这些。我们很快还会见面的。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else {
                                          if (status === H++) {
                                            cm.effect_Text(["#fn黑体##fs25#下次你需要我力量的时候,就是我们再会之日。", ''], [0, 2050, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(4050);
                                          } else if (status === H++) {
                                            cm.forceStartQuest(34904, '');
                                            cm.dispose();
                                            cm.warp(cm.getNumberFromQuestInfo(34904, "map"), 0);
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action2(q, p, b) {
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.effect_Text(["#fn黑体##fs25#怎么样,朋友？这段时间使用我的力量,感觉如何？", ''], [0, 2200, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(4200);
    } else {
      if (status === H++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs25#应该不坏吧……你也因此变强了,不是吗？", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === H++) {
          cm.effect_Text(["#fn黑体##fs25#在战斗中获得的极度的快感……贪图那种快感是生命的本能。", ''], [0, 2700, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4700);
        } else {
          if (status === H++) {
            cm.effect_Text(["#fn黑体##fs25#没错,这就是我拥有强大力量的原因。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === H++) {
              cm.sendNormalTalk_Bottom("#face0#你就别拐弯抹角了吧。你召唤我,应该不是想说这些吧？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === H++) {
                cm.effect_Text(["#fn黑体##fs25#性子可真急。在这段日子里,在把力量传输给你的同时,我一直在等待着这一天……", ''], [0, 3600, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(5600);
              } else {
                if (status === H++) {
                  cm.sendNormalTalk_Bottom("#face5#果然……有什么原因。", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                } else {
                  if (status === H++) {
                    cm.effect_Text(["#fn黑体##fs25#你和我强烈地连接在一起。在你变强的同时……看……", ''], [0, 2400, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(4400);
                  } else {
                    if (status === H++) {
                      cm.effect_Text(["#fn黑体##fs25#我也变强了。直到今天,我终于拥有了从深渊中出来,与你正面对抗的力量。", ''], [0, 3300, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(5300);
                    } else {
                      if (status === H++) {
                        cm.effect_Text(["#fn黑体##fs25#在你体内默默地等待毁灭,并不符合我的本性。现在我要用我的意志,来寻找出路。", ''], [0, 3600, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(5600);
                      } else {
                        if (status === H++) {
                          cm.sendNormalTalk_Bottom("#face8#你以为我会让你得逞吗？", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === H++) {
                            cm.effect_Text(["#fn黑体##fs25#如果不乖乖交出来,我就只能强抢了……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === H++) {
                              cm.effect_Text(["#fn黑体##fs25#决一胜负吧。看看到底谁才是这个身体的主人！", ''], [0, 2100, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(4100);
                            } else {
                              if (status === H++) {
                                cm.playerMessage(5, '击败深渊之自我');
                                var R = cm.getEventManager("影魂异人_深渊之自我");
                                R.startInstance(cm.getPlayer(), cm.getMap());
                                cm.dispose();
                                cm.setStandAloneMode(false);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action3(q, p, b) {
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.effect_Text(["#fn黑体##fs25#切,这是……你的意志吗？没想到竟然这么强……", ''], [0, 2150, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(4150);
    } else {
      if (status === H++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face5#我……注定不会轻易消失。因为我还有必须做的事。", 37, 3001500 + cm.getPlayer().getGender(), false, true, 1);
      } else {
        if (status === H++) {
          cm.effect_Text(["#fn黑体##fs25#这,这次我先撤了。不过别大意……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === H++) {
            cm.effect_Text(["#fn黑体##fs25#我只是回到原来所在的地方去而已。", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === H++) {
              cm.effect_Text(["#fn黑体##fs25#呵呵……当你的意志……发生一丝动摇的瞬间,我就会重新出现在你面前。", ''], [0, 3250, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5250);
            } else {
              if (status === H++) {
                cm.effect_Text(["#fn黑体##fs25#从那个黑暗、深不见底的地方……", ''], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else if (status === H++) {
                cm.forceStartQuest(34905, '');
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(34905, 'map'), 0);
                cm.setStandAloneMode(false);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
              }
            }
          }
        }
      }
    }
  }
}
function action4(q, p, b) {
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {}
  }
}
function randomNum(i, q) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * i + 1, 10);
    case 2:
      return parseInt(Math.random() * (q - i + 1) + i, 10);
    default:
      return 0;
  }
}