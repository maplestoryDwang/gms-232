var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(34201) && !cm.isQuestFinished(34201)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34203) && !cm.isQuestFinished(34204)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34220, "a=1;e=1");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1250, 40);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.npc_ChangeController(3003167, "oid=1837082", 1402, 45, 2, 1352, 1452, 1, true, false);
        cm.npc_SetSpecialAction("oid=1837082", "summon", 0, 0);
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
              cm.sendNormalTalk_Bottom("欢迎来到#b啾啾岛#k的中心--#b啾啾村庄#k！", 37, 3003150, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b啾啾#k吗…？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯，#b啾啾#k！这个名字怎么样？是不是很帅气啊？哈哈哈！这是我起的名字！\r\n这个名字很容易让人有好感吧？", 37, 3003150, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你究竟#b是什么人#k啊…？还有，刚刚拦住我的那个#b大怪物#k又是什么…… 我必须尽快从这里通过才行…… 我的肚子很饿…头也很痛……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这位朋友！你的疑问还真多！", 37, 3003150, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("虽然我对你也很好奇，但我还是先回答你的问题吧。", 37, 3003150, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('我们的身份…就是！！', 37, 3003150, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#其实，我也记不清了！哈哈哈！", 37, 3003150, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("果然…真的很可疑……\r\n你是#r黑魔法师#k的手下吗？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#r黑魔法师#k…？那是什么？", 37, 3003150, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("他住在河水的尽头处，正试图破坏这个世界！同时他也是你们的#b主人#k吧！", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嗯……这条河的尽头有什么东西呢……？我们没有什么#r主人#k！", 37, 3003150, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不过倒是有个#b风度翩翩，英勇神武#k的族长…… 该怎么说呢…虽然其他人想让我#b统治村庄，但我并不想称王称霸#k…… 我应该说是一名#b义工#k吧？喵喵喵喵！", 37, 3003150, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("还有，生活在这里的村民都很奇怪，他们不记得任何#b过去的事情#k。", 37, 3003150, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我们分别在不同的地方、不同的时间睁开双眼，偶然间集聚在一起，然后在这里创造了我们的家园。喵喵喵喵！", 37, 3003150, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("确实…如果说你们是#r黑魔法师的手下#k，那未免也太愚蠢了……", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("狮子一直喵喵叫……还会说人话……这里的居民们好像是#b各种生命体的艾尔达混在一起#k诞生的生物……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#总之，这里非常美丽，而且还很富足，\r\n#b所有~~人#k都在这里生活得#b非~~~常#k幸福。", 37, 3003150, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("只有一个人除外！！那就是#b穆托#k那家伙！", 37, 3003150, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b穆托#k？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("没错！就是刚刚#b攻击#k你，#b抢你食物#k的家伙！", 37, 3003150, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("嗯…那个大怪物是干嘛的？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("穆托是我们#b啾啾村庄#k的#b可爱的老小#k，他是个#b善良正直的小朋友#k。", 37, 3003150, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("嗯…那家伙…好像有些暴力吧……", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我们#b穆托#k原本并不是那种孩子……\r\n#b他本是守护村庄的#k善良小孩……", 37, 3003150, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("在这啾啾岛上，#b个头比较大#k的家伙一共有#b两个#k。", 37, 3003150, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("其中一个是我刚刚所说的#b穆托#k。还有一个是#r古拉#k。", 37, 3003150, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("生活在河水里的#r古拉#k跟#b穆托#k不同，完全无法沟通。", 37, 3003150, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer("attack", "Map/Effect2.img/ArcaneRiver2/attack", 0, 1500, 0, 0, 0, 4, 1);
                                                                      cm.sendNormalTalk_Bottom("而且性格非常#r凶暴#k，#b每10天#k就会跑到陆地上来，#b捕食遇到的一切东西。#k", 37, 3003150, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('attack', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer("fight", "Map/Effect2.img/ArcaneRiver2/fight", 0, 1500, 0, 0, 0, 4, 1);
                                                                        cm.sendNormalTalk_Bottom("但是……幸运的是，#b我们可爱的穆托#k在#r古拉#k攻击啾啾岛的时候，每次都#b把他打败了。#k", 37, 3003150, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer("fight", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                          cm.sendNormalTalk_Bottom("代价是我们必须为穆托准备各种各样好吃的东西。", 37, 3003150, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("但是……不久前出了点#b问题#k……", 37, 3003150, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("……出了什么#b问题#k呢？", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那就是…… #b那家伙#k……", 37, 3003150, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('#b那家伙#k…？！', 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("开始#b绝食抗议#k了……", 37, 3003150, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('？！', 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("穆托说我们给他的食物不好吃，他不要再帮助我们对付古拉了…所以，村民们陷入了对#r古拉的恐惧#k，每天都过得战战兢兢的……", 37, 3003150, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("那……怎么可能？！", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("不…我完全可以理解#b穆托的心情#k…… 没有什么比#b吃难吃的食物#k更让人痛苦了…我们#b可怜的穆托#k啊……", 37, 3003150, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#啊，对了……刚才你给穆托吃的那种#b食物#k！\r\n穆托好像#b非常喜欢那种食物！#k", 37, 3003150, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("如果你为穆托提供那食物，他说不定会重新振作起来！", 37, 3003150, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("但是现在我也只有一块了。\r\n这个能填饱穆托的肚子吗？", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("嗯……确实太小了……那么点东西，连穆托眨一下眼睛消耗的能量都不够……实在是太小了……", 37, 3003150, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我们最讨厌美味，但…份量却不够多的食物了……", 37, 3003150, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("除了穆托之外，有别的#b方法#k可以过河吗？", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#没有那种#b方法#k啦。", 37, 3003150, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("请不要这么斩钉截铁……", 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("那这样吧！你好像必须经过这条河，如果穆托像这样一动不动，你就#b永远无法离开这里#k。", 37, 3003150, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("同样，如果#b穆托#k不帮助我们，我们就无法阻拦#r古拉#k的袭击，所以……", 37, 3003150, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#你能不能帮我们一起制作可以让#b穆托#k满意的食物啊？", 37, 3003150, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#这里有很多#b美味的食材#k，想要制作什么食物都轻而易举！\r\n这不用我多说！", 37, 3003150, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我不太会做食物……", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#啊！那个别担心！我已经把你和那种#b又小又美味的食物#k的事情告诉了我们村的#b顶级大厨舔舔#k！", 37, 3003150, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("你现在就去找#b顶级大厨舔舔#k吧！", 37, 3003150, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("啊，对了！见到#b顶级大厨舔舔#k之后，千万不要对他的#b“舌头”#k说三道四！", 37, 3003150, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(450002000, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34220, "a=1;b=1;e=1");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1305, 85);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -980, 140);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.npc_ChangeController(3003168, "oid=1837382", -810, 109, 17, -860, -760, 1, true, false);
        cm.npc_SetSpecialAction("oid=1837382", 'summon', 0, 0);
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
              cm.sendNormalTalk_Bottom("好了！我的#r特制料理#k已经完成了！哈哈！", 37, 3003152, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("看起来还不错…不知道好不好吃呢…？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("喂，别傻站着，快来尝尝！不要好吃得#r晕过去#k哦！", 37, 3003152, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                    cm.sendNormalTalk_Bottom("嗯……。那就让我来尝尝吧？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(1000, 1800, 0, -1100, 140);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这…… #b这味道#k！！", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 0, cm.getPlayer().getId());
                          cm.userSetFieldFloating(450002202, 0, 10, 20);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(450002202, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("#face4#哈哈！！是不是很赞啊！哈哈！", 37, 3003152, false, true);
                          } else {
                            if (status === V++) {
                              cm.emotion(8, 900000);
                              cm.sendNormalTalk_Bottom("吐！！！这是什么啊？！我实在是吃不下去！", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 0, -980, 140);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=1837382", "angry", 0, 0);
                                  cm.sendNormalTalk_Bottom("#face0##fs30#什么！你说什么！！！", 37, 3003152, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.emotion(0, -1);
                                    cm.sendNormalTalk_Bottom("这个…… #b完全不能吃啊#k…你给穆托这种食物，他当然会抗议啦……", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你敢批评#b啾啾岛最棒的厨师#k我顶级大厨舔舔做的食物？！", 37, 3003152, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("主厨，你的#b舌头#k真是奇怪……", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你说我的舌头长得很奇怪？！！", 37, 3003152, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不……不是长相的问题……", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("啊哈…！话说你这家伙拥有穆托喜欢的#b某种食物#k？", 37, 3003152, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("难怪这么狂妄…！\r\n快把那#r食物#k拿过来！！", 37, 3003152, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("啊……#r三明治#k吗……？现在我只剩一块了……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fs30#拿过来！", 37, 3003152, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 60);
                                                      cm.sendNormalTalk_Bottom("好吧…请你尝尝…我就饿着吧……", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("嗯嗯……。吧嗒吧嗒……", 37, 3003152, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呸呸呸！！这是什么啊！", 37, 3003152, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("嗯……咦？！干嘛！现在我只剩一块了！！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#你要让穆托吃这么垃圾的食物？\r\n哈哈哈哈哈！！！我还以为是什么了不起的食物呢！", 37, 3003152, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("奇怪……这个有那么难吃吗？我觉得应该比#r那个#k……好吃得多啊……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#什…什么？！#r那东西#k？！\r\n好的！那我们去问问那些#b村民#k吧！", 37, 3003152, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(3003167, "oid=1837387", -228, 99, 18, -278, -178, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=1837387", 'summon', 0, 0);
                                                                    cm.npc_ChangeController(3003169, "oid=1837388", -104, 99, 19, -154, -54, 1, false, false);
                                                                    cm.npc_SetSpecialAction("oid=1837388", "summon", 0, 0);
                                                                    cm.npc_ChangeController(3003170, "oid=1837389", 53, 99, 19, 3, 103, 1, false, false);
                                                                    cm.npc_SetSpecialAction("oid=1837389", "summon", 0, 0);
                                                                    cm.npc_SetForceMove("oid=1837382", 1, 300, 250);
                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -269, 140);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("瑞昂！", 37, 3003152, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#呵呵~ 顶级大厨舔舔~人多的时候，希望你能喊我族长~", 37, 3003150, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#别说废话了！你尝尝这家伙拿来的食物！\r\n穆托居然喜欢这种食物？我做的食物要好吃一千倍！\r\n你吃下这两种食物，然后评判下吧！", 37, 3003152, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#呵呵~ 谁让我#b这么善良又帅气#k呢，我就先不跟你计较了。", 37, 3003150, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那我来尝尝吧？\r\n村民们也尝尝吧~", 37, 3003150, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("吧嗒吧嗒……", 37, 3003150, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1800, 0, -269, 140);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003167, cm.getPlayer().getId());
                                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003169, cm.getPlayer().getId());
                                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 3003170, cm.getPlayer().getId());
                                                                                      cm.sendNormalTalk_Bottom("#face1#嗯~~~这味道？！", 37, 3003150, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('怎么样？还不错吧？', 57, 0, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#嗯…！这味道真是！", 37, 3003150, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1##fs30##r超级难吃#k！！", 37, 3003150, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 0, -269, 140);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('啊…？', 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("不是只有我这么觉得！这味道该怎么说呢…… #r就算让我饿十天，我也不会吃的#k！呵呵！", 37, 3003150, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("是……。是吗…？", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("与之相反，我们顶级大厨舔舔做的食物……", 37, 3003150, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#嗯~~~果然#r很好吃#k……", 37, 3003150, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#顶级大厨舔舔，我可以打包点这个吗？我想带回家吃。", 37, 3003150, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#这些都不够给穆托的！！而且，你刚刚不是吃过饭了嘛！", 37, 3003152, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#哈哈…我吃过饭了吗？总之，你的手艺还是那么好！", 37, 3003150, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("真是奇怪…他们怎么会喜欢吃那种食物呢……？", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("难道是多种艾尔达混合的同时…让他们的味觉…变得很奇怪吗……", 57, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("这样下去，我就无法离开这里了……", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetForceMove("oid=1837382", -1, 1, 250);
                                                                                                                        cm.sendNormalTalk_Bottom("#face4#哼~你看到了吧？你还是一脸难以置信的表情啊？哼哼！", 37, 3003152, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("喜欢吃我的食物的穆托#b跟我的口味#k一样…… #b你们觉得好吃的#k食物是无法满足穆托的……", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你还是不肯认可我的料理啊！！！\r\n我#b顶级大厨舔舔#k做的料理所有村民都喜欢！！", 37, 3003152, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("好吧！！那这样吧！\r\n三天后，#r古拉#k将袭击村庄，哈。\r\n在那之前，你就自己想办法#b制作好料理！#k", 37, 3003152, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("嗯…？可是，我连这里有什么食材都不知道……\r\n而且我也不会做食物啊……", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("这不关我的事！哼哼！！\r\n我已经跟你说清楚啦！#b3天后#k把食物带到穆托面前去！", 37, 3003152, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#当然，如果你这个对#b料理#k一窍不通的家伙，因为我的完美料理陷入绝望，\r\n从此销声匿迹的话，我也是可以理解的~哈！", 37, 3003152, true, true);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(450002000, 0);
                                                                                                                                    cm.forceCompleteQuest(34201);
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;