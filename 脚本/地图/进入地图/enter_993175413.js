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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 50, 250);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9062258, "oid=27808258", 150, 290, 4, 100, 200, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=27808258", "summon", 0, 0);
        cm.npc_ChangeController(9062255, "oid=27808259", -176, 236, 4, -226, -126, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=27808259", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#如果没有人受伤的话！\r\n看样子那个家伙……最后顺利逃跑了，还向村民传达了消息！", 37, 9062258, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("可是……你……", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我从以前起就希望能帮助别人。\r\n这也是我做看门人的原因。", 37, 9062258, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#可是，因为我生得身型庞大，长得也吓人，别说帮人了，一直都在不停闯祸！", 37, 9062258, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我一度是村子的大麻烦……\r\n至少最后，我帮上了一点忙，真是太好了！\r\n哈哈哈！", 37, 9062258, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这事就算了，我为什么在这宅子等着开#b派对#k呢？\r\n死了的话……不是会#b消失#k或者去#b别的世界#k吗？", 37, 9062258, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这都是因为#b假面#k。", 37, 9062255, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b假面#k？", 37, 9062258, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是#b假面#k阻止了你，让你无法去#b死者世界#k。\r\n它让你#b忘却死亡#k，并让你困在某种#b感情或是迷恋#k之中，所以你只能一直停留在这个宅子里。", 37, 9062255, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("假面……？", 57, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我就说觉得有些奇怪！\r\n我在这老是有一种#b好像忘记了#k什么重要事情的感觉！\r\n因为担心村庄，也会时常#b感到不安#k！", 37, 9062258, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我自己想想也觉得可笑，哈哈！\r\n居然忘了我自己是怎么死的！\r\n如果让我去世的老母知道了，肯定会狠狠给我几鞭子了。", 37, 9062258, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我说，那边那个#b红头发#k。\r\n关于这个宅子，我看你好像知道些什么……\r\n现在我该怎么做？", 37, 9062258, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#既然我死了，那我想到你说的那个#b死者世界#k去，我要怎么做？", 37, 9062258, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##b今晚午夜#k。\r\n舞会开始后，宅子的主人，#b假面绅士#k会#b演奏钢琴#k。\r\n你到#b那个时候#k……#b必须摘掉假面#k。只有这样才能离开这里去#b死者世界#k。", 37, 9062255, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……必须在#b午夜#k演奏钢琴的时候#b摘掉假面#k？\r\n这有什么难的！就按你说的，午夜的时候把这假面给摘了！", 37, 9062258, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不过，那个#b新闻报纸#k，我可以拿走吗？", 37, 9062258, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你拿#b新闻报纸#k干什么？", 57, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#如果在那个#b死者世界#k见到了我的母亲，我想拿给她看！", 37, 9062258, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#她没事就会说嘛。\r\n既然长了这么高的个子，就该做对得起这个个子的事。", 37, 9062258, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#如果把这个拿给她看，她肯定会觉得很自豪！", 37, 9062258, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('你……不害怕吗？', 57, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你指的是什么？", 37, 9062258, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("去死者世界。\r\n去了那里，就意味着要和这个世界永别了。", 57, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#才不会害怕，这一点都不可怕！\r\n该怎么说呢，像是去一个新的世界#b旅行#k？就是这种心情。", 37, 9062258, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我害怕的是……\r\n#b我没能守护住任何人#k。这才是我最害怕的……", 37, 9062258, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#但是你这家伙，不是帮我把这份#b担忧化解#k了吗！\r\n现在我已经没有任何#b迷恋#k了，就算离开这个世界，也没什么好可惜的了！", 37, 9062258, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("……那什么，你要是看这个#b报道的最后一行#k……", 57, 0, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 9062258, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("小鬼罗宾是这样说的。\r\n“我会像那个看门人大叔一样，成为一个力大无穷、#b勇敢的战士#k，来保卫我的村子，我现在也在#b每天训练#k。”", 57, 0, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哈哈哈！那小子居然会说这么懂事的话！！\r\n真令人无法相信。我一直以为他是个不懂事的调皮蛋！", 37, 9062258, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#既然如此，看来现在是真的不需要我了！\r\n那小鬼头虽然嘴巴有些毒，但也是个言出必行的小子！\r\n他一定会变成比我更优秀的看门人！", 37, 9062258, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#那我们午夜见吧！\r\n在这之前，我该小憩一会了！一直都在担心村庄，都没好好睡上一觉！", 37, 9062258, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#干得不错，#h0#。这样一来，可怕的假面就#b可以自己摘下假面#k了。", 37, 9062255, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我们必须要为客人们消除他们无法释怀的#b留恋和悲伤的感情#k。\r\n只有这样，他们才能#b自己摘下假面#k，离开这间宅子，去往#b死者世界#k。", 37, 9062255, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("不过，究竟是何人，又为何制作了这些#b假面#k呢？\r\n如果一直戴着假面的话，会发生什么事呢？", 57, 0, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#好吧。现在看来，你好像真的可以接触这个宅子以及我的诅咒。\r\n先到我的房间去再说吧。\r\n在这里逗留太久可能会有#r危险#k。", 37, 9062255, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.forceCompleteQuest(100440);
                                                                                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/finishEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.npc_LeaveField("oid=27808258");
                                                                                            cm.npc_LeaveField("oid=27808259");
                                                                                            cm.dispose();
                                                                                            cm.warp(993175400, 0, false);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}