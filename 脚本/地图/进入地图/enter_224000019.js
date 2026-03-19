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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1548, 287);
      cm.npc_ChangeController(2074100, "oid=2589080", 1505, 316, 554, 1455, 1555, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2589080", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=2589081", 1642, 304, 559, 1592, 1692, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2589081", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("既然童话村还好好的，\r\n看来是顺利解决了吧。", 37, 2074105, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#呵，要是我不在，肯定就没法解决了吧？\r\n这是怎么一回事吧……", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
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
                  cm.sendNormalTalk_Bottom("额……#g宝玉气息跑到小可爱身上了？#k\r\n有没有什么其他的症状啊？", 37, 2074105, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#心情变得特别古怪。\r\n能够直接感受到兴夫的愤怒……", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("宝玉会#g凝缩人的感情#k，\r\n要是附着在了人的身上，人的感情就会过剩。", 37, 2074105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我看啊……你身上应该是有#g可以将感情分化的力量#k存在。", 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#原本就有这样的人吗？", 37, 2074100, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不清楚，这种情况我也是头一次见到……\r\n我会再去打听看看的。", 37, 2074105, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#嗯……", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……你很担心吗？", 37, 2074105, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#呵！连我都不知道的惊人能力！\r\n怎么样？我算是来对了吧？", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1##b#fs25#小#fs20#~可爱~ #fs25#小#fs20#~可爱~ #g#fs25#小↗ ~可↑ ~爱~~！#k", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                                        cm.sendNormalTalk_Bottom('…………', 37, 2074105, false, true);
                                        cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你会再次来到这里难不成是命运的安排吗……", 37, 2074105, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#什么？您刚刚说什么？", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("啊，没什么，得将宝玉重新放回保管箱才行。", 37, 2074105, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/1", 0, 500, 0, 0, 8, 4, 1);
                                                    cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/2", 0, 500, 0, 0, 9, 4, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("终于可以将宝玉放回原位了……", 37, 2074105, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/0", 0, 500, 0, 0, 7, 4, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('back4', "Map/Effect2.img/downtown2015/box/0", 0, 1000, 0, 0, 8, 4, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer("back5", "Map/Effect2.img/downtown2015/box/1", 0, 300, 0, 0, 9, 4, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#爷爷，这就是封印箱吗？\r\n哇，和书上的长得一模一样呢。", 37, 2074100, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("你对宝玉有所了解吗？", 37, 2074105, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我大概只知道图书馆注意事项上写的内容吧？\r\n啊，这位对#b宝玉#k几乎是一无所知。", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("嗯，好吧……该从哪里开始解释呢。", 37, 2074105, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 200, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer("back4", '', 2, 200, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('back5', '', 2, 200, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/box/0", 0, 200, 0, 0, 7, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer("back1", "Map/Effect2.img/downtown2015/box/1", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer('back2', "Map/Effect2.img/downtown2015/box/2", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer('back3', "Map/Effect2.img/downtown2015/box/3", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer("back4", "Map/Effect2.img/downtown2015/box/4", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer("back5", "Map/Effect2.img/downtown2015/box/5", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer("back6", "Map/Effect2.img/downtown2015/box/6", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.fieldEffect_ProcessOnOffLayer("back7", "Map/Effect2.img/downtown2015/box/7", 0, 200, 0, 0, 8, 4, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("宝玉。\r\n是#b摧毁童心的七种欲望#k的凝缩剂。", 37, 2074105, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("为了不让童话村的#b童心#k被其他访问者所破坏，\r\n宝玉会负责收集他们身上所流淌着的#g七种欲望#k。", 37, 2074105, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("每种宝石会分别负责吸收#b愤怒、后悔、贪婪、怠惰、嫉妒、暴食、猜忌#k。", 37, 2074105, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back1", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back4", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back5", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back6", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back7", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/29", 0, 200, 0, 0, 7, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("但是相信你也听说了，\r\n几年前曾经爆发过一场#b巨大的山火#k，就在那时宝玉全都被盗。", 37, 2074105, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("没有了宝玉，#b外界人心中的欲望#k就会摧毁童心。\r\n所以我们不得已堵住了通往外界的大门。", 37, 2074105, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#现在不是重新打开了吗？", 37, 2074100, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("眼下不是必须要承受危险的紧急状况嘛。", 37, 2074105, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/28", 0, 200, 0, 0, 7, 4, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("不过之前不管怎么找都找不到的宝玉近来却逐渐被发现，\r\n而且还是被附在了我们童话村村民的身上……", 37, 2074105, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("肯定是有人心怀#r恶意#k，将宝玉附在了人的身上。", 37, 2074105, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/27", 0, 200, 0, 0, 7, 4, 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("每一块#b宝玉#k无异于是一个#g欲望的结晶体#k。\r\n它会增大被附着对象的欲望，#b让他变成完全不一样的人。#k", 37, 2074105, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#是，我就曾经亲自经历过。", 37, 2074100, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("故事变得越来越不同，\r\n童话村就很有可能会被扭曲被摧毁。\r\n问题就在于不管是我，还是威兹，我们都无力来阻止这一状况的发生。", 37, 2074105, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 400, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#但是我，小可爱！\r\n今天发现是有能力操控宝玉的啊！", 37, 2074100, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##b#fs25#哟#fs20# ~", 37, 2074100, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("咳咳咳！！小可爱啊……能够分走宝玉的力量，\r\n从某种角度来看，也许是非常危险的事情。", 37, 2074105, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom('#face2#……', 37, 2074100, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("还请你不要轻举妄动。", 37, 2074105, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是！无论如何，只要将宝玉重新集齐就可以了吧？\r\n我们可以用#b万花筒#k找出谁被宝玉附体，\r\n再#g释怀那个人的感情#k，找回宝玉！", 37, 2074100, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("哎哟……你是叫#b#h0##k吗？\r\n还请在童话村被更加扭曲之前，将宝玉给找回来。", 37, 2074105, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#好吧！那就和我超能小可爱一起！\r\n前往寻找剩下的宝玉吧！啊，得从哪儿开始呢？", 37, 2074100, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_LeaveField("oid=2589080");
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("尽可能不要让小可爱太过靠近宝玉。", 37, 2074105, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("小可爱其实，是在童话村被发现的孩子。\r\n我和威兹，目前都还在打听那个孩子的过去。\r\n那孩子，就要麻烦你了。", 37, 2074105, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("好，那现在就和小可爱一起去探访#b村民#k吧？", 37, 2074105, true, true);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.updateInfoQuest(30900, "05=1;06=1;07=1");
                                                                                                                                          cm.updateInfoQuest(30407, "gExpCheck=1");
                                                                                                                                          cm.forceStartQuest(30407, '');
                                                                                                                                          cm.forceCompleteQuest(30407);
                                                                                                                                          cm.forceStartQuest(30913, '2');
                                                                                                                                          cm.gainExp(1420599);
                                                                                                                                          cm.forceStartQuest(30914, '2');
                                                                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                          cm.dispose();
                                                                                                                                          cm.warp(224000000, 21, true);
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