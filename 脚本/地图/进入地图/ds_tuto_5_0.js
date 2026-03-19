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
      cm.npc_ChangeController(2159345, 'oid=248744', 150, 58, 28, 100, 200, 0, false, 0, false);
      cm.npc_ChangeController(2159311, "oid=248745", 361, 58, 29, 311, 411, 1, false, 0, false);
      cm.npc_ChangeController(2159312, 'oid=248746', -180, 13, 2, -230, -130, 0, false, 0, false);
      cm.npc_ChangeController(2159313, "oid=248747", -260, 58, 26, -310, -210, 0, false, 0, false);
      cm.npc_ChangeController(2159314, 'oid=248748', 270, 58, 29, 220, 320, 1, false, 0, false);
      cm.npc_ChangeController(2159315, "oid=248749", 210, -41, 5, 160, 260, 1, false, 0, false);
      cm.npc_ChangeController(2159316, 'oid=248750', -90, -41, 5, -140, -40, 0, false, 0, false);
      cm.npc_ChangeController(2159344, 'oid=248751', 100, -41, 5, 50, 150, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("真……真的长着翅膀啊。", 1, 2159314, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("你是谁？难道是黑色之翼的间谍？从情况看，好像又不是……", 1, 2159312, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不要放松警惕。情况还没确认。", 1, 2159313, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你是谁？和黑色之翼什么关系？", 1, 2159315, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我对黑色之翼不是很了解。老实说，我也是头一次听到这个名字。你们想从我这里知道什么？我也不知道……该从何说起。", 3, 2159315, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("首先告诉我你的名字，属于哪个组织，你的经历……还有，如果可以的话，希望你能告诉我为什么长着翅膀。", 1, 2159344, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我叫#h0#，现在不属于任何组织。虽然不久前是黑魔法师的军团长……在和黑魔法师对抗的时候战败了。醒来之后就看到了那个戴帽子的男人。至于翅膀，因为我父亲是魔族，所以一生下来就有了。", 3, 2159344, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("黑魔法师？军团长？听不懂你在说什么。你说的事情和现在的情况差得太远了。你知道吗？黑魔法师已经在几百年前被英雄们封印了起来！", 1, 2159315, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=0"], [1500, -90, -150, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=0"], [1500, 210, -150, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", 'oid=0'], [1500, 100, -150, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=0"], [1500, -180, -100, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=0"], [1500, -260, -50, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", 'oid=0'], [1500, 270, -50, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……嗯……是因为实验让你的脑袋变糊涂了吗？", 1, 2159314, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(几百年前……？黑魔法师被英雄们封印了……？！到底是怎么回事？这些人在说谎吗？但是这陌生的土地、陌生的东西、陌生的势力……那次战斗之后……到底过去了多长时间……)", 3, 2159314, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("呃……搞不明白。喂，#p2159345#！你觉得怎么样？那个人像在说谎吗？", 1, 2159314, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("至少应该没在说谎。虽然很可能脑袋有点不清醒，但应该没有恶意。", 1, 2159345, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("黑杰克说不是说谎的话，应该就不是……这么说，有两个可能性。要么那个人精神不正常，要么他说的是真的。", 1, 2159316, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("如果他说的是真的的话，那他就应该是几百年前的人。而且还是黑魔法师的军团长……但是如果是军团长的话，为什么要对抗黑魔法师呢？", 1, 2159315, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("……我有我个人的原因。我回答了你们的问题，我能问几个问题吗？你们是谁？那些叫做黑色之翼的人又是……？", 3, 2159315, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("见到你的时候我就说过，我们是反抗者，是为了对抗黑色之翼而成立的组织。为了从他们手中夺回埃德尔斯坦，我们正在和他们斗争。", 1, 2159344, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("把你的能量吸走的人就是黑色之翼。我们的村子本来一直很和平，但是他们占领了这里，抢夺我们的能量……不知道他们为什么要搜集那么多能量。我们只知道他们是黑魔法师的先锋。", 1, 2159344, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("黑魔法师的先锋……？你不是说黑魔法师被封印起来了吗？为什么会有那些家伙出现呢？", 3, 2159344, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("那是我们所有人都想知道的事情。他们相信黑魔法师会重新来到冒险岛世界。世界各地也确实出现了类似的征兆……目前的世界并不太平。", 1, 2159312, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("黑魔法师重新来到世界……？这……是个好消息。", 3, 2159312, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……没想到还会有机会向他复仇……", 3, 2159312, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("……虽然你脑袋好像有点问题，但看来你确实很憎恨黑魔法师……", 1, 2159313, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.forceStartQuest(23279, '');
                                                      cm.sendNormalTalk("想向黑魔法师复仇的人……你愿意成为我们的同伴吗？", 1, 2159311, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, -90, -150, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 210, -150, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 100, -150, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, -180, -100, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, -260, -50, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 270, -50, 1, 0, 1, 1, 0, 0]);
                                                        cm.sendNormalTalk("校长？！你怎么突然说这个……", 1, 2159315, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("你想相信这个人吗？他可能不是因为实验的原因才精神恍惚的。就算是那样，他不是说自己是黑魔法师的军团长吗？", 1, 2159313, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("看到大家聚在一起，我感觉很放心。呵呵呵……", 1, 2159311, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("就像#p2159345#说的那样，就算他没有说谎，至少可以确认他对黑魔法师非常憎恨。他只是#b“以前”#k是军团长罢了，现在又不是。", 1, 2159311, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("话虽如此。但是就算他出去，可能也会被黑色之翼重新抓走……", 1, 2159312, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("同伴总是越多越好。只要他和我们的目的是一致的，我们就能一起战斗，不是吗？", 1, 2159311, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("等，等等！情况进展得太快了吧？我还没适应这个情况呢……我需要时间考虑一下！", 3, 2159311, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("需要考虑一下？情况很明确。你说想和黑魔法师战斗，那就不能避免会和追随他的势力黑色之翼战斗。敌人的敌人就是朋友，不是吗？因此我们可以成为朋友。而且现在你没有选择的余地。从这里出去的话，外面到处都是黑色之翼。以你现在的状态能战胜他们吗？", 1, 2159314, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("慎重是好事。反正要你马上信任我们也是不可能的。在和你合作的同时……我们也会监视你，怀疑你。信任是一点一滴积累起来的。", 1, 2159316, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("……你说的没错。那么……我就暂且相信你们吧。", 3, 2159316, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("不管怎样……虽然有点晚了，不过我想对你们表示感谢，谢谢你们救了我。", 3, 2159316, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("听你这么说，我就放心了……知道感恩的人是不会轻易背叛的。", 1, 2159344, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("在你们背叛我之前，我绝不会背叛你们。", 3, 2159344, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("那你先好好待着。如果改变了主意，可以随时跟我说……呵呵呵。", 1, 2159311, true, true);
                                                                                } else if (status === V++) {
                                                                                  cm.forceStartQuest(23209, '1');
                                                                                  cm.forceCompleteQuest(23279);
                                                                                  cm.forceForfeitQuest(23279);
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.dispose();
                                                                                  cm.warp(931050040, 0, false);
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}