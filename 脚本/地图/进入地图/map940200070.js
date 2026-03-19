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
      cm.克里塞_获得技能();
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(3002107, "oid=1865855", 185, -176, 36, 135, 235, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1865855", "summon", 0, 0);
      cm.sendNormalTalk("阿琅。", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("是谁……？啊！", 1, 3002107, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("好久不见，虽然也许你已经忘了我是谁，但我来这里是有样东西要还给你……", 3, 3002107, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("哇，好神奇啊！！！你，和我的守护精灵长得一模一样！没有耳朵和尾巴，眼睛也是一模一样！", 1, 3002107, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你在说什么？守护精灵，你的守护精灵和我……", 3, 3002107, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("对啊，你想要看看我的守护精灵吗？", 1, 3002107, true, true);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("!!!", 0, 0, 1, 1000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                  cm.sendNormalTalk("(是真的，阿琅有了守护精灵，而且不知道是出于何种缘故，居然与我长得一模一样？)", 3, 3002107, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("嘿嘿，我不分昼夜地向狐神大人祈祷，居然也有了自己的守护精灵！而且还要比其他人的守护精灵更帅！现在我也不会孤单了！", 1, 3002107, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("对了，你是从哪儿来的啊？为什么会和我的守护精灵长得这么像？恩？恩？", 1, 3002107, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3002108, "oid=1865868", 105, -176, 15, 55, 155, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=1865868", "summon", 0, 0);
                        cm.sendNormalTalk('阿琅，有什么事情吗？', 1, 3002108, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("爷爷！", 1, 3002107, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("咳咳，我是听着有点吵就过来看看，居然是有个奇怪的异邦人在！你找我们阿琅做什么！", 1, 3002108, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("爷爷，他不是坏人，你看他和我的守护精灵长得一模一样嘛！", 1, 3002107, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=1865868", 1);
                                cm.npc_setForceFlip("oid=1865868", -1);
                                cm.sendNormalTalk("天啊……真的是啊，我说你，这到底是怎么回事？", 1, 3002108, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我才真的很好奇呢，这到底是怎么一回事？", 3, 3002108, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("恩……我可没见过这种情况……", 1, 3002108, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("难道……虽然那一直以来只是个传说……", 1, 3002108, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("大家都说狐狸的守护精灵会与自己内心深处非常思念的人相像，而且这种精灵的力量会胜过任何精灵的力量。", 1, 3002108, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("你在胡说什么呢，爷爷？怎么会思念没见过的人呢？", 1, 3002107, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("我就是这个意思，阿琅，你见过这个大个子吗？应该叫大块头才对嘛……", 1, 3002108, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("没有啊！我第一次见！啊，话说回来，你来这里是做什么的啊？", 1, 3002107, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("我是来还从你这儿借走的守护精灵的……", 3, 3002107, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("恩？这是什么意思？我没借过啊？而且我已经有了这么帅气的守护精灵了，我不需要其他的守护精灵。", 1, 3002107, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("……好吧。(不知为何，内心既温暖又有些悲伤，看样子是没法继续再待在这里了。)", 3, 3002107, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("等一下，你这就要走了吗？至少要告诉我你的名字啊！", 1, 3002107, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("我的名字是你给我起的，阿琅，以后我会让你再记起来的。", 3, 3002107, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("嘤嘤……哪有这样的道理！", 1, 3002107, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("多亏了你，我找到了今后继续前进的原因。", 3, 3002107, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("我一定会找到方法，让你记起我来的，你把我看得这么重要，我也同样很珍惜你。", 3, 3002107, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("等我找到了方法，我会再来见你的，你能等到那一天吗？", 3, 3002107, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("……恩！虽然不知道你在说些什么，不过欢迎再来玩哦！", 1, 3002107, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("恩，谢谢。(我也一直很思念阿琅……我的守护精灵会不会也越来越像阿琅了呢？)", 3, 3002107, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.forceCompleteQuest(1542);
                                                                    cm.playerMessage(-1, "可以通过[精灵凝聚最大化]形成思念的阿琅的模样。");
                                                                    cm.teachSkill(25121133, 1, 1);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=1865855");
                                                                    cm.npc_LeaveField("oid=1865868");
                                                                    cm.dispose();
                                                                    cm.warp(410000100, 0, false);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}