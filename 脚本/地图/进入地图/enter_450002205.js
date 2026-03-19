var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34215) && !cm.isQuestFinished(34216)) {
    action1(f, E, e);
  } else {
    action2(f, E, e);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003160, "oid=1840654", 660, -119, 12, 610, 710, 1, true, false);
      cm.npc_SetSpecialAction("oid=1840654", "summon", 0, 0);
      cm.npc_ChangeController(3003162, "oid=1840655", 727, -119, 12, 677, 777, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840655", "summon", 0, 0);
      cm.npc_ChangeController(3003163, "oid=1840656", 794, -119, 13, 744, 844, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840656", "summon", 0, 0);
      cm.npc_ChangeController(3003164, "oid=1840657", 861, -119, 13, 811, 911, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840657", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#旅行者！你这么快就搜集到#b呲溜果#k啦！", 37, 3003151, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那让我们来尝尝加入呲溜果后#b欧呕唉！天啊？转转转！三明治#k的味道吧？", 37, 3003151, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我…我先吃…我先吃~呵呵呵 ", 37, 3003155, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯嗯……吧嗒吧嗒……", 37, 3003155, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 0, 784, -119);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003164, cm.getPlayer().getId());
                      cm.sendNormalTalk_Bottom('！！！！咳咳咳！！！', 37, 3003155, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=1840654", 1);
                        cm.sendNormalTalk_Bottom("哔嘟啊！你怎么啦！", 37, 3003151, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊…这味道真的是…已经到了我无法用言语形容的…地步…… 它的香味令人沉醉…… 口感酥脆，同时又不缺乏嚼劲…它触动着我的味蕾，让我有种飘飘然的感觉…啊…！此味只应天上有，人间难得几回尝！", 37, 3003155, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哔嘟啊！你恢复理智啦！", 37, 3003154, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯嗯嗯？？什……什么？呵呵", 37, 3003155, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哔嘟有时候受到#b强烈的刺激#k，会暂时恢复理智。从哔嘟的反应来看，我们的料理应该很成功。", 37, 3003151, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom(" 希望穆托会喜欢#b欧呕唉！天啊？转转转！三明治#k……", 37, 3003151, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(450002205, 30, 30, 10);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(450002205, 0, 0, 0);
                                      cm.sendNormalTalk_Bottom("怎么回事…！我怎么这么紧张！", 37, 3003155, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("哥哥…！看来#r古拉#k已经开始行动了！", 37, 3003154, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看来古拉已经开始攻击了，旅行者！你快去找#b瑞昂#k长老吧！我和孩子们先带着食物去找穆托！", 37, 3003151, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(450002023, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.Hidden_background("obj_01", 1, 0, 0, 0);
      cm.Hidden_background("obj_02", 1, 0, 0, 0);
      cm.Hidden_background("obj_03", 1, 0, 0, 0);
      cm.Hidden_background('obj_04', 1, 0, 0, 0);
      cm.updateInfoQuest(34220, "a=1;b=1;c=1;e=1");
      cm.forceCompleteQuest(34206);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003160, "oid=1837419", 477, -119, 14, 427, 527, 1, true, false);
      cm.npc_SetSpecialAction("oid=1837419", 'summon', 0, 0);
      cm.npc_ChangeController(3003162, "oid=1837420", 670, -119, 12, 620, 720, 1, false, false);
      cm.npc_SetSpecialAction("oid=1837420", 'summon', 0, 0);
      cm.npc_ChangeController(3003163, "oid=1837421", 727, -119, 12, 677, 777, 1, false, false);
      cm.npc_SetSpecialAction("oid=1837421", "summon", 0, 0);
      cm.npc_ChangeController(3003164, "oid=1837422", 784, -119, 13, 734, 834, 1, false, false);
      cm.npc_SetSpecialAction("oid=1837422", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那…那个……。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=1837419", -1, 1, 250);
              cm.sendNormalTalk_Bottom("什…什么啊！是妨碍我们吃饭的#b小偷#k吗？！！", 37, 3003153, true, true);
            } else {
              if (status === V++) {
                cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003160, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003162, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003163, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003164, cm.getPlayer().getId());
                cm.sendNormalTalk_Bottom("怎么可能~ 猴姐的食物#b只有我们才能吃下去#k啊~如果你是来都偷东西的~ #r我不会放过你的#k……。", 37, 3003154, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不是的……我只是个路过的#b旅行者#k……因为闻到了很香的味道，所以想过来看看能不能要点吃的……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们的…食…物应该#b不合你口味#k…你肯定吃不下的…吧？呵呵？", 37, 3003155, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不会的啦…这食物的味道#b这么香#k，怎么可能不好吃……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我拒绝！！！", 37, 3003153, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哔比啊~难得有客人来，你不能这么无礼~", 37, 3003151, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("看你好像不是这里的人…就像小鸡们所说的，我做的食物应该#b不合你的口味#k~", 37, 3003151, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('就……。就一口……', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("嗯~你好像很饿，你先尝尝吧。", 37, 3003151, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("谢…谢谢……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("啊…这！", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 0, cm.getPlayer().getId());
                                      cm.sendNormalTalk_Bottom("看吧～我不是说了吗？我们和其他居民的口味完全不同，你一定吃不了的～", 37, 3003151, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你在说什么啊？！我还是第一次吃到#b这么好吃的食物#k！", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你撒谎！！", 37, 3003153, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我没有撒谎！这味道真的很赞！比我刚刚吃的#b顶级大厨舔舔#k做的食物要好吃太多了！不，#b简直是没法比较嘛#k！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你怎么对我们说话这么随便？", 37, 3003154, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哔比，哔美！你们不要这么对待客人~ 不过，你认识我们#b主厨#k吗？", 37, 3003151, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("嗯…其实发生了这样的事……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 300, 255, 255, 255, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.sendNormalTalk_Bottom("啊哈…你经历了这样的事啊……", 37, 3003151, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b穆托#k不吃东西，这真是太糟糕了…旅行者你好像也要尽快离开这里，前往其他地方，你肯定很为难吧……", 37, 3003151, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("不过，你说穆托很喜欢你带来的食物，这是真的吗？", 37, 3003151, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("嗯！没错！虽然只有一点，但他说我的#b三明治#k很好吃！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你能把那个#b三明治#k给我们尝尝吗？", 37, 3003151, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("嗯…我这里还有一点其他村民吃剩下的……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#啊！这些就足够了~\r\n我们的小鸡三兄妹在#b品尝味道方面#k可是高手！", 37, 3003151, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#还有，虽然我只是#b厨房助手#k，但怎么说我也在餐厅工作！！", 37, 3003151, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#好了~ 孩子们，我们一起尝尝这食物吧~", 37, 3003151, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("嗯…这味道真是…太棒了！", 37, 3003153, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("哇！除了猴姐做的食物之外，我还是第一次吃到这么好吃的东西呢！", 37, 3003154, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("转转转转转！(真好吃！)", 37, 3003155, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#真的很好吃！我还是第一次尝到这种味道！", 37, 3003151, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我知道了！旅行者你也跟我们一样#r口味独特#k！", 37, 3003151, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("呃…我的口味算不上独特吧……", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("不！觉得这种食物好吃的人，肯定是#r口味独特#k的人！", 37, 3003151, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("很高兴遇到你，同志。", 37, 3003153, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("啊哈，你看看我这脑袋。\r\n我们还没有自我介绍吧？我叫#b猴姐#k，我在顶级大厨舔舔的厨房中担任#b厨房助手#k。他们是小鸡三兄妹，和我生活在一起。", 37, 3003151, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("我们四个跟旅行者你一样，#r口味独特#k。所以，我们要跟村里的人吃不同的食物。", 37, 3003151, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("为此……。我…我们被…赶出来了…现在单独生活…呵呵呵", 37, 3003155, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("其他村民跟我们吃#b不同的食物#k…所以觉得我们#b很奇怪#k，不想和我们生活在一起…… 所以，我就带着这些孩子到村子外面生活。", 37, 3003151, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("果然…村民们果然有着奇怪的味觉…！", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("口味奇怪的人是#b我们#k…所以，虽然我想成为一名#b厨师#k，但只能当个#b厨房助手#k……", 37, 3003151, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("而是村民们……你做的料理非常美味，拿到#b冒险岛世界#k去的话一定会大受欢迎。", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("哈哈…虽然不知道那是什么地方，但听到你这么说，我觉得很开心。不过，我现在没那么悲伤了。因为有这些#b喜欢吃我做的食物的小鸡们#k在我身边~", 37, 3003151, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("没错~姐姐做的食物是最棒的！", 37, 3003154, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("嗯…居然就因为口味不同，而被赶出村庄……", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("并不是厨师就要做出#b所有人都爱吃的#k食物啊？\r\n所有活着的生命都会肚子饿…肚子饿就要吃东西。每个人都可以选择自己觉得#b好吃~的食物#k。", 37, 3003151, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#有这些孩子爱吃我做的食物，我就已经够幸福了。", 37, 3003151, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("虽然量有些少，但味道没得说！", 37, 3003153, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("嗯…我现在终于大致了解情况了…… 穆托为什么会喜欢我的食物，不喜欢村民们给他的食物……", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("穆托肯定也和我们一样#r口味独特#k(？)……", 57, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("你叫做猴姐？请你帮帮我！据说3天后#r古拉#k会发起进攻，在此之前，你能和我一起制作#b穆托爱吃的食物#k吗？", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("你说穆托…… #r口味独特#k，这真是让我意外…… 穆托一直在吃顶级大厨舔舔做的食物啊？", 37, 3003151, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("不是的…… 穆托确实#b口味独特#k！从他喜欢我的食物这一点就能看出来！", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("不过，我不是#b正式厨师#k…如果我擅自做料理，肯定会被#b顶级大厨舔舔#k骂的……", 37, 3003151, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("你是不是正式厨师并不重要…如果是在我来的世界，#b猴姐#k你会成为比#b顶级大厨舔舔#k更优秀的主厨。", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("还有，如果是真正的#b厨师#k，看到穆托饿了这么多天，肯定会给他做些食物的吧…？就算穆托#b不爱吃#k……", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom('……', 37, 3003151, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("旅行者，你说的…好像没错…… ", 37, 3003151, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("就算穆托不喜欢我的料理…我也要试着为#b饿了好几天的穆托#k制作食物……", 37, 3003151, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("没错！穆托那家伙肯定也会喜欢姐姐你做的料理的！", 37, 3003153, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("谢谢你，猴姐！你的选择是对的！", 57, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("不过…要做#b什么料理#k呢？", 37, 3003154, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("嗯…… #b三明治#k！我们就做三明治吧！反正，穆托也#b喜欢吃三明治#k！", 57, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("呵呵呵~ 三……三明治…… 如果做的#b大一些#k…嗯嗯…应该很好吃！", 37, 3003155, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#好的，那我们就试着做那个#b三明治#k吧！\r\n为了让穆托吃饱，一定要做得#b非常~~大#k才行！", 37, 3003151, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#小鸡们对#b食物的味道#k非常敏感，所以你们快告诉我刚刚那个三……明治和哪些材料的味道相似！", 37, 3003151, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("好的！", 37, 3003153, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("哇~ 我们要给穆托做食物了！我真的好期待啊，姐姐！", 37, 3003154, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("转转转转！(肯定很好吃！)", 37, 3003155, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.dispose();
                                                                                                                                                            cm.warp(450002023, 0);
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