var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getQuestStatus(34200) == 0) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(34200)) {
      action2(f, E, e);
    } else {
      if (cm.isQuestActive(34217)) {
        action3(f, E, e);
      } else if (cm.isQuestActive(34218)) {
        action4(f, E, e);
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.dispelBuff(80002204);
      cm.npc_ChangeController(3003156, 'oid=48121', 484, 72, 7, 434, 534, 1, false, false);
      cm.Hidden_background("obj_01", 1, 0, 0, 0);
      cm.updateInfoQuest(34220, "e=1");
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -368, 105);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊…飞鱼啊，你突然这么乱扑腾让我怎么办啊……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("怎么突然把我一个人丢下了……？#b飞鱼#k不是来帮我的吗……？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("穆…托…肚…子…饿……", 37, 3003156, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 5);
                  cm.sendNormalTalk_Bottom("这是什么声音？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##fs50#穆！托！肚！子！饿！！！！", 37, 3003156, true, true);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(450002201, 0, 10, 20);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(450002201, 0, 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(800, 1000, -368, 105, 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗬！！那是什么啊？！", 57, 0, false, true);
                        } else if (status === V++) {
                          cm.curNodeEventEnd(true);
                          cm.forceStartQuest(34200, '');
                          cm.dispose();
                          cm.warp(450002201, 0);
                        }
                      }
                    }
                  }
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
      cm.dispelBuff(80002204);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -368, 105);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 2);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("原来是#b这家伙#k拦住了河水，所以飞鱼才逃跑的啊……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("话说……。这大怪物究竟是什么啊…？如果#b这家伙#k不让开，那我就无法通过这里了。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那…那个…… 你好啊…我是#b#h0##k…我现在有些急事…… 所以我必须从这里经过，你能让下路吗…？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不……要……我要好吃的……好吃的……", 37, 3003156, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啊……？好吃的？看来你好像还不知道情况的严重性……如果我不能通过这里，世界就会陷入#r巨大的危险#k……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.forceCompleteQuest(34225);
                    cm.userSetFieldFloating(450002201, 0, 10, 20);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(450002201, 0, 0, 0);
                      cm.sendNormalTalk_Bottom("#face1##fs50#好！！！吃！！！的！！！！", 37, 3003156, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊！吓我一跳！！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗯……吃的东西……只有这块#b三明治#k……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你…要不要尝尝啊？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("拿过来……。快点……。！！！", 37, 3003156, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("(也就只剩下两块了……)", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("吧嗒……吧嗒…… 嗯嗯……。", 37, 3003156, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.forceForfeitQuest(34225);
                                    cm.forceCompleteQuest(34223);
                                    cm.sendNormalTalk_Bottom("#face0#真！好！吃！", 37, 3003156, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我还要…我还要……", 37, 3003156, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯……抱歉，其他真的没有了……", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#请…再…给我…点……", 37, 3003156, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("就算你说请，那也没用…因为我已经没有了啊…？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.forceForfeitQuest(34223);
                                              cm.forceCompleteQuest(34225);
                                              cm.sendNormalTalk_Bottom("#face1##fs50#给！！！我！！！", 37, 3003156, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.userSetFieldFloating(450002201, 0, 10, 20);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.userSetFieldFloating(450002201, 0, 0, 0);
                                                  cm.sendNormalTalk_Bottom("该死！！没办法了。只能用力量来#r突破#k了！！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2##fs50#额啊！！！", 37, 3003156, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.userSetFieldFloating(450002201, 30, 30, 10);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(450002201, 0, 0, 0);
                                                          cm.npc_ChangeController(3003167, "oid=1837055", -370, 20, 9, -420, -320, 0, true, false);
                                                          cm.npc_SetSpecialAction("oid=1837055", 'summon', 0, 0);
                                                          cm.npc_SetSpecialAction("oid=1837055", "appear", 0, 0);
                                                          cm.sendNormalTalk_Bottom("帅气的英雄登场！！！喵喵！！", 37, 3003150, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 0, 0);
                                                            cm.inGameDirectionEvent_MoveAction(4);
                                                            cm.emotion(7, 900000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.sendNormalTalk_Bottom("该死！#b一不小心#k又后颈着地了！我还不擅长着陆！哈哈！", 37, 3003150, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1##fs50#刚才给我的东西！再给一点！！", 37, 3003156, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("噢？#b穆托#k啊！这家伙给你的#b食物#k很好吃吗？！", 37, 3003150, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1##fs50#给！！！我！！！", 37, 3003156, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这真是神奇！#b穆托#k居然有喜欢的#b食物#k！已经很久没出现这种情况了吧？", 37, 3003150, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("嗯…说不定这家伙对我们的村庄很有帮助！先把他带走吧。", 37, 3003150, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.forceForfeitQuest(34225);
                                                                          cm.emotion(0, -1);
                                                                          cm.updateInfoQuest(34200, 'a=2');
                                                                          cm.dispose();
                                                                          cm.warp(450002204, 0);
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003156, "oid=48121", 484, 72, 7, 434, 534, 1, false, false);
      cm.Hidden_background("obj_01", 1, 1, 0, 0);
      cm.updateInfoQuest(34220, "a=1;b=1;c=1;e=1;f=1");
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(3003164, "oid=1840714", 194, 138, 14, 144, 244, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840714", "summon", 0, 0);
      cm.npc_ChangeController(3003162, "oid=1840715", 143, 138, 14, 93, 193, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840715", "summon", 0, 0);
      cm.npc_ChangeController(3003163, "oid=1840716", 75, 138, 14, 25, 125, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840716", 'summon', 0, 0);
      cm.npc_ChangeController(3003160, "oid=1840717", -6, 138, 14, -56, 44, 1, true, false);
      cm.npc_SetSpecialAction("oid=1840717", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background("obj_01", 1, 1, 0, 0);
      cm.forceCompleteQuest(34224);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003167, "oid=1840718", -400, 138, 9, -450, -350, 0, true, false);
          cm.npc_SetSpecialAction("oid=1840718", "summon", 0, 0);
          cm.npc_SetForceMove("oid=1840718", 1, 70, 250);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003168, "oid=1840720", -400, 138, 9, -450, -350, 0, true, false);
            cm.npc_SetSpecialAction("oid=1840720", "summon", 0, 0);
            cm.npc_SetForceMove("oid=1840720", 1, 220, 250);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b族长！主厨！#k 请快点过来！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗬嗬…！你的那个#b帮手#k，还有你的#b食物#k在哪里呢？", 37, 3003150, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("请看…！我来为你介绍下我的食物#b欧呕唉！天啊？转转转！三明治#k，还有我的帮助#b猴姐#k吧！", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什…什么？！#b猴姐#k？", 37, 3003152, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("主厨，你好啊……", 37, 3003151, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你！整个厨房都乱作一团了，我还以为你跑到哪里去了呢……\r\n结果你一直在帮助这个笨蛋做料理吗？！哈？！", 37, 3003152, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("对不起…我知道厨房很忙，但…反正我也做不了料理啊，所以我就帮这个旅行者做点我力所能及的事……", 37, 3003151, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#就算你做不了料理！你可以帮忙倒垃圾啊！哈！要做的事情可多了！\r\n这次的事我绝不会轻易放过你！哈！", 37, 3003152, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("搞什么啊！这大舌头的家伙是？", 37, 3003153, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("看他在姐姐面前这么猖狂，应该是那个主厨吧…事情变成这样，真是没劲……", 37, 3003154, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这些小家伙是？！\r\n啊~啊~ 你们是跟猴姐一样#b口味独特#k的三兄妹啊！哈哈！", 37, 3003152, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#喂~就算时间紧急，你也不能找这些连味道都尝不出来的家伙帮忙\r\n做料理吧！真是可怜啊，可怜！哈哈！", 37, 3003152, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不过，那个#b料理的名字#k让我很是满意！嘿嘿！", 37, 3003150, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#愚蠢的族长！没有时间了！\r\n快让穆托那家伙挑选食物吧！！", 37, 3003152, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("呵呵…这家伙说话真是不中听~我知道啦！\r\n穆托！#b古拉#k已经开始攻击了！我们为你准备了#b两种#k美味的食物，你快吃下去，打起精神击退#b古拉#k吧！", 37, 3003150, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#穆…托…肚…子…饿……", 37, 3003156, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("喂！#b小胖子#k！别再喊你肚子饿了，快挑选出你想吃的食物吧！\r\n不知道你的嘴巴怎么挑剔，不过这次我制作的食物\r\n应该会符合你的口味！哈哈！", 37, 3003152, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("主厨…… 请不要这么对穆托说话…… 是穆托在保护我们，我们应该心怀感激，不是吗？", 37, 3003151, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#什…什么？！你竟敢教训我！你私自离开厨房，在外面做料理就算了，\r\n现在还敢教训我？哈？！", 37, 3003152, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#猴姐！这次事情过后，你永远也别想踏足厨房了！", 37, 3003152, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('……', 37, 3003151, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("快点选择吧，穆托！你知道我们为了你受了多少苦吗？！\r\n快吃下食物，振作起来击退古拉吧！哈！", 37, 3003152, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呃嗯……吭吭……吭吭……", 37, 3003156, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("噢……穆托正在闻食物的味道！！", 37, 3003150, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=1840714", 1);
                                                              cm.npc_setForceFlip("oid=1840715", 1);
                                                              cm.npc_setForceFlip("oid=1840716", 1);
                                                              cm.npc_setForceFlip("oid=1840717", 1);
                                                              cm.sendNormalTalk_Bottom("#fs50#吼？！", 37, 3003156, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#哈哈哈！闻起来是不是很赞啊？快吃下食物，振作起来吧！", 37, 3003152, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer("eat", "Map/Effect2.img/ArcaneRiver2/eat", 0, 1500, 0, 0, 0, 4, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("eat", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 0, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003160, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003162, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003163, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003164, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003167, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003168, cm.getPlayer().getId());
                                                                      cm.sendNormalTalk_Bottom("穆……穆托选择了我们的#b欧呕唉！天啊？转转转！三明治#k…！哇哈哈！", 37, 3003155, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.forceForfeitQuest(34224);
                                                                        cm.forceCompleteQuest(34223);
                                                                        cm.sendNormalTalk_Bottom("#face0##fs30#这…这个…很…好吃…！！", 37, 3003156, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哈？！！你在说什么啊，穆托……！！！你都没吃我做的食物呢！\r\n你快尝尝！！呼呼呼！", 37, 3003152, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#穆托…… 不…不愿意，那东西…还是…你自己吃吧……", 37, 3003156, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#你这愚蠢的胖子！！你不吃我做的食物！？", 37, 3003152, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("主厨！快住手！穆托不是说了不吃嘛！", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("没错！你的食物散发着#b大猩鸦排泄物#k的味道！", 37, 3003153, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#不！！我不相信！！你吃！！你给我立刻吃！！！", 37, 3003152, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceForfeitQuest(34223);
                                                                                      cm.forceCompleteQuest(34225);
                                                                                      cm.userSetFieldFloating(450002201, 0, 10, 20);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.userSetFieldFloating(450002201, 0, 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face1##fs50#我不吃！！！", 37, 3003156, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("嗯…是时候轮到我出马了？！顶级大厨舔舔快沉睡吧！嗬~呼！！", 37, 3003150, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 0, 0);
                                                                                            cm.npc_LeaveField("oid=1840720");
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                              cm.sendNormalTalk_Bottom("我已经把顶级大厨舔舔送到了安全的地方！", 37, 3003150, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("这似曾相似的心情…是什么情况……", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2##fs30#额啊啊！！！我不吃…！！！我不要战斗！！！", 37, 3003156, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("穆托啊~我不是给你好吃的了吗？现在赶紧站起来，击退古拉吧！", 37, 3003150, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('请等一下……族长……', 37, 3003151, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("穆托，一直以来都是你在守护我们，肯定很辛苦吧…？", 37, 3003151, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("也吃不到想吃的食物…你该有多辛苦啊…真是可怜……", 37, 3003151, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("如果你不想战斗，那就不要战斗吧。看到你恢复食欲，我已经很开心了…… 还有，感谢你愿意吃我做的食物。", 37, 3003151, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.forceForfeitQuest(34225);
                                                                                                              cm.sendNormalTalk_Bottom("穆托…… 想吃…剩下的食物……。", 37, 3003156, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯，开始吧，这是#b特意为你#k准备的食物。", 37, 3003151, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.Hidden_background("obj_01", 1, 0, 0, 0);
                                                                                                                  cm.forceCompleteQuest(34223);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fs30#吧嗒吧嗒…嗯~~~真好吃", 37, 3003156, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("噢……！他把顶级大厨舔舔的食物也全部吃掉了！", 37, 3003153, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.userSetFieldFloating(450002201, 0, 10, 20);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.userSetFieldFloating(450002201, 0, 0, 0);
                                                                                                                        cm.sendNormalTalk_Bottom("古拉已经快到了…！！啊！", 37, 3003154, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#穆托…现在吃饱了…谢…谢谢你……", 37, 3003156, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那么…现在…去和#r古拉#k…一起玩玩吧…？", 37, 3003156, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("穆托…你要去守护我们吗？", 37, 3003151, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯嗯…… 穆托…吃了美味的食物…应该守护……  #b朋友们#k……", 37, 3003156, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#b朋友#k…没错，穆托…谢谢你，谢谢……", 37, 3003151, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('fight', "Map/Effect2.img/ArcaneRiver2/fight", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("fight", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else if (status === V++) {
                                                                                                                                      cm.forceForfeitQuest(34223);
                                                                                                                                      cm.forceCompleteQuest(34217);
                                                                                                                                      cm.forceStartQuest(34218);
                                                                                                                                      cm.dispose();
                                                                                                                                      cm.warp(450002021, 0);
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
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003156, "oid=48121", 484, 72, 7, 434, 534, 1, false, false);
      cm.updateInfoQuest(34220, "a=1;b=1;c=1;e=1;f=1;g=1");
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background('obj_01', 1, 0, 0, 0);
      cm.forceCompleteQuest(34223);
      cm.npc_ChangeController(3003164, "oid=1840740", 194, 138, 14, 144, 244, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840740", 'summon', 0, 0);
      cm.npc_ChangeController(3003162, "oid=1840741", 143, 138, 14, 93, 193, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840741", "summon", 0, 0);
      cm.npc_ChangeController(3003163, "oid=1840742", 75, 138, 14, 25, 125, 1, false, false);
      cm.npc_SetSpecialAction("oid=1840742", "summon", 0, 0);
      cm.npc_ChangeController(3003160, "oid=1840743", -6, 138, 14, -56, 44, 1, true, false);
      cm.npc_SetSpecialAction("oid=1840743", "summon", 0, 0);
      cm.npc_ChangeController(3003167, "oid=1840744", -400, 138, 9, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=1840744", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=1840744", 1, 70, 250);
      cm.npc_ChangeController(3003168, "oid=1840745", -400, 138, 9, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=1840745", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=1840745", 1, 220, 250);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哎呦…我的头…这是怎么回事…？", 37, 3003152, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#哦！你起来啦？#b穆托#k刚刚生气了，所以攻击了你！哈哈！喵喵！", 37, 3003150, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#什么…？！这该死的家伙！哼！", 37, 3003152, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#连我做的食物都不吃！噢？！哈！！\r\n话说…… #r古拉#k的进攻怎么样了？！现在是什么情况！？", 37, 3003152, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("在你睡觉的时候，穆托已经成功阻拦了古拉！", 37, 3003153, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什…什么？#b这家伙动了#k…？", 37, 3003152, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#他阻拦得非常漂亮！哈哈！", 37, 3003150, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("对于#b我做的食物#k…连看都不看一眼的家伙……\r\n居然吃完#b猴姐#k做的食物，振作了起来……", 37, 3003152, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=1840745", 'cry', -1, 1);
                          cm.sendNormalTalk_Bottom("#face1##fs30#呜呜…呜呜呜…！", 37, 3003152, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("什么啊？！你在哭吗？！", 37, 3003153, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#呜呜…哇…我的食物…… 我#b认真准备的食物#k……\r\n这家伙连看都不看一眼…呜呜……", 37, 3003152, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#我…我再也不做料理了……\r\n我也不当#b主厨#k了…呜呜……。", 37, 3003152, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("不是的，顶级大厨舔舔…… 主厨的料理#b非常出众#k……", 37, 3003151, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#请你看一下。#b穆托#k把你做的食物也全部吃完了。", 37, 3003151, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#不是的…… #b穆托#k不喜欢我做的食物……\r\n他从一开始就很讨厌我的食物……", 37, 3003152, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("没想到这个大叔这么感性啊？", 37, 3003154, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#穆托…什么都爱吃……。不挑食的孩子…才是好孩子……", 37, 3003156, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#以前就算食物…… #b不好吃#k我也会吃…… 因为我要守护……#b朋友们#k…但是#b猴姐#k做的食物…真的…很好吃。", 37, 3003156, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("顶级大厨舔舔…你也看到了，穆托也跟猴姐和哔比三兄妹一样，#r口味独特#k……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("所以，他才会不喜欢你做的食物。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("别太伤心。对大部分居民们而言，你还是#b最好的主厨#k。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没错，顶级大厨舔舔！我不是就很喜欢你做的料理吗？哈哈！请你不要说你再也不做料理这种可怕的话了！", 37, 3003150, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我…我……", 37, 3003152, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1##b穆托#k…很抱歉……", 37, 3003152, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#我到现在都没弄清楚你的口味……\r\n你一直要吃我做的食物，应该很痛苦吧……", 37, 3003152, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#没…没关系…你做的食物#b份量够多#k…所以我也喜欢……", 37, 3003156, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("那么…… #b穆托#k一直吃着难吃的食物，还要守护我们？", 37, 3003150, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我的料理实力…远不如顶级大厨舔舔…不过，我之所以接受旅行者的建议，正是因为这一点……", 37, 3003151, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我们…一直在接受穆托的保护…… 却从没有关心过穆托……", 37, 3003151, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("我能做的事情并不多…我只想让饿了几天的穆托吃顿好吃的饭……", 37, 3003151, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("主厨，现在的问题不是谁做的食物好吃，谁做的不好吃……", 37, 3003151, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("只是我们…对穆托太漠不关心了…认为穆托的牺牲……\r\n都是理所当然的……", 37, 3003151, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("所以，请你不要生气了，主厨。以后我也会多关心穆托的……", 37, 3003151, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#猴姐…我…… 一直说你#b口味独特#k，没认可你是一名真正的厨师……", 37, 3003152, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#很抱歉，猴姐…看来是我太自满了……", 37, 3003152, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#从现在开始，我想把你视为跟我一样的主厨……\r\n把穆托的料理全权交给你负责……", 37, 3003152, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#你愿意接受吗…？", 37, 3003152, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我是…正式主厨？", 37, 3003151, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("猴姐有足够的资格当主厨！", 37, 3003154, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#嗯…我会继续为村民们做料理……\r\n你就为穆托和一些口味独特的村民做料理吧……", 37, 3003152, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("我…… 是主厨……", 37, 3003151, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#果然…我之前的行为太过分了…你肯定不会答应吧……", 37, 3003152, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#啊……！不是的！顶级大厨舔舔！以后…我会为穆托和其他人努力做料理的！", 37, 3003151, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("嗯…听你们这么说，我觉得我这个族长之前好像对此太不关心了……", 37, 3003150, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("其实你的责任最大！", 37, 3003153, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我知道啦…我以后会努力关心穆托和你们的……", 37, 3003150, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#先不说这个了…… 陌生的旅行者！多亏了你，我们的村庄变得更加团结了！真的很感谢你！", 37, 3003150, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我可以满足你一个愿望！你有什么心愿吗？！", 37, 3003150, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("我…只要从这里过去就行了…我一开始就跟你说过啊……", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#啊，没错！好像是说过！你看我这记性…哈哈！", 37, 3003150, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#好了！穆托，现在美味的食物也吃了，你能给这个旅行者让让路，让他继续前行吗？", 37, 3003150, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#好的…你现在过去吧…我会稍微抬抬我的屁股的……", 37, 3003156, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("谢谢你，穆托…！我现在终于可以向着黑魔法师…继续前进了！", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("不过…你为什么要从这里经过呢？你找那个#r黑魔法师#k有什么事吗？", 37, 3003150, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("嗯…我有#b非常重要的#k事情要找他……", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("等…等一下……", 37, 3003155, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("你，收下这#i1712002#吧。", 37, 3003155, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("噢？？哔嘟又恢复正常啦？不过这是什么啊？", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("这是#r你很需要的#k东西。", 37, 3003155, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("这是…？#b神秘徽章#k啊…？！", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("从看到你的第一眼开始，我就觉得你跟我们#b有所不同#k……", 37, 3003155, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("我们从一开始就#b失去了根基#k…可是你与我们不同，#b某种力量#k正在#b保护着你#k……", 37, 3003155, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("后来我发现，正是你所拥有的#i1712001##b那个圆圆的东西#k在守护着你。", 37, 3003155, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("还有，为了给你这份#b礼物#k，我一直好好保管着#i1712002##b这东西#k。", 37, 3003155, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("果然…… 哔嘟！你果然#b知道些什么#k！\r\n不过…你为什么现在才把它给我呢？", 57, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom('那个……', 37, 3003155, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("呵呵呵呵呵~ 我也…不知道，转转转！", 37, 3003155, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("该死…！他又疯了吗？！", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("嗯…？旅行者，你是第一次见到这东西吗？", 37, 3003151, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("这东西在我们啾啾岛上可不多见。虽然得来不易，但只要#b穆托和古拉发生交战#k，就能很容易见到。", 37, 3003156, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("这是#b神秘徽章#k。只要拥有它，就能获得很强大的力量。", 57, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("虽然不知道是什么情况，但即使我们拥有那东西，也不会发生任何变化啊……", 37, 3003151, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("也不好吃！", 37, 3003153, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("其实，这东西和我要去见的#r黑魔法师#k…与你们和这#b啾啾岛的诞生#k有些密切的关系…你们是#b散开的艾尔达#k凝聚后……", 57, 0, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("旅行者，我们也很好奇我们究竟是怎么出现的，为什么不能离开这个地方。", 37, 3003151, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("没错！如果我们想到河的那一边，总会#b撞在某个东西上#k，无法离开！", 37, 3003153, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("可是我们对这里的生活很满足…同时也很幸福。", 37, 3003151, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("如果你所说的话会威胁到我们的幸福，请你不要说出来。", 37, 3003151, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("嗯…好的，猴姐…我还是不要告诉你们…你们是怎么出现的为好。", 57, 0, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("其实…这个地方最初被创造的原因…我也不是很清楚。", 57, 0, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#旅行者，你心地善良…我相信你所做的事情肯定是对的。", 37, 3003151, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#如果你还需要那东西，可以随时来找我们。只要能帮到你，我们肯定会竭尽全力的。", 37, 3003151, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("那…我们现在要分别了吗？你不能再待段时间吗？", 37, 3003154, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("是的吧…？我已经在这里停留很久了。如果不抓紧时间…事情可能会变得很糟糕……", 57, 0, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("旅行者，感谢你对我们啾啾岛的帮助…我会永远记住的……", 37, 3003151, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("嗯…多亏了你，我们的村庄又恢复了生机…如果你有什么需要，可以随时来我们村庄……！", 37, 3003150, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("谢谢你的#b欧呕唉！天啊？转转转！三明治#k…！呜！", 37, 3003153, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("呼呼呼~ 哥哥…在哭，呼呼", 37, 3003155, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("猴姐、小鸡们、瑞昂族长、顶级大厨舔舔…谢谢大家…如果在我结束旅行的时候…我和这个地方都平安无事……", 57, 0, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("到时我们一定要一起吃#b欧呕唉！天啊？转转转！三明治#k……", 57, 0, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#哈哈！你说的就像是一个要去送死的人！", 37, 3003150, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我们很快就会再见面的，你干嘛要这样！哈哈！看你的脚步这么沉重…我就亲自把你送到河水上吧！", 37, 3003150, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("等…！等一下…！！", 57, 0, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#那你走好！呵呵！！", 37, 3003150, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 0, 0);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                      cm.getTopMsgFont("和穆托对话后，就可以继续进行旅行了。", 3, 20, 20, 0);
                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                      cm.warp(450002021, 0);
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
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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