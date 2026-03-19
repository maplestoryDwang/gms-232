var status = -1;
function action(m, X, n) {
  status++;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.npc_ChangeController(1064028, "oid=19973623", 724, 440, 28, 674, 774, 1, false, false);
      cm.npc_SetSpecialAction("oid=19973623", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_OnUserEff("Effect/BasicEff.img/dragonBlink");
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_SetHideEffect(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === O++) {
            cm.sendNormalTalk('这是什么地方……？', 3, 1064017, false, true);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 400, 600, 443);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2520);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk("愚蠢的人！为什么要反抗#r“那个人”#k的意志！", 1, 1064017, false, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk("你，你是谁？！", 3, 1064017, true, true);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === O++) {
                          cm.npc_SetSpecialAction("oid=19973623", 'appearance', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(5500);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/bellum/appearance", "oid=19973623"], [0, 218, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                          } else {
                            if (status === O++) {
                              cm.npc_LeaveField("oid=19973623");
                              cm.npc_LeaveField("oid=19973623");
                              cm.npc_ChangeController(1064017, "oid=19979548", 940, 435, 29, 890, 990, 1, false, false);
                              cm.npc_SetSpecialAction("oid=19979548", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk("我是侍奉那位#r“伟大的人”#k的封印守护者#b贝伦#k。愚蠢的人，你为什么要到这里来，破坏#r“那个人”#k的心情？", 1, 1064017, false, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk("封印守护者？将世界树封印起来的人是你吗？", 3, 1064017, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk("封印是#r“那个人”#k设下的。我只是按照#r“那个人”#k的命令，在这里守护护封印。", 1, 1064017, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk("#r“那个人”#k是指一只眼睛戴着眼罩的那个魔族吗？", 3, 1064017, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk("闭嘴！那个人可不是你能随便挂在嘴上的！在那位#r“伟大的人”#k的力量面前，你就像是一粒渺小的灰尘。总有一天，你也会跪在#r“那个人”#k的面前！", 1, 1064017, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk("我不想和他战斗。和他一样都是魔族的恶魔杀手现在也成了我们的同伴。所以你们也应该和我们……", 3, 1064017, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.sendNormalTalk("肮脏的背叛者竟敢怂恿我们背叛#r“那个人”#k，看来你是活得不耐烦了！", 1, 1064017, true, true);
                                          } else {
                                            if (status === O++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, -250, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === O++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, 150, 0, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === O++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, -100, 0, 0, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, 500, 0, 0, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction11.img/effect/stone/0"], [0, 350, 0, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.sendNormalTalk("看来光靠说话行不通。那就只能打败你，然后再获取情报了！", 3, 1064017, false, true);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.sendNormalTalk("凭你也想打败我？那就试试看吧！", 1, 1064017, true, true);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.npc_SetSpecialAction("oid=19979548", "attack", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                cm.effect_OnUserEff("Effect/Direction11.img/effect/skill/fire/0");
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.inGameDirectionEvent_OneTimeAction("鲁塔比斯_坐下", 50000);
                                                                  cm.sendNormalTalk("拦…………", 3, 1064017, false, true);
                                                                  cm.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1", 0, 0, 0);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.sendNormalTalk("这么点程度就不行了吗？现在你知道自己有多无能了吧？", 1, 1064017, true, true);
                                                                    cm.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1", 0, 0, 0);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.sendNormalTalk("除了我之外，这里还有三个封印守护者。要想解开世界树的封印，必须把我们全部打倒才行。但是以你的力量，估计连一个都无法打倒。", 1, 1064017, true, true);
                                                                      cm.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1", 0, 0, 0);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.sendNormalTalk("现在你知道你自己是多么可悲的存在了！？这次暂且饶过你这卑贱的生命，别再踏入此处半步，我的仁慈是有限度的。", 1, 1064017, true, true);
                                                                        cm.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1", 0, 0, 0);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          cm.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1", 0, 0, 0);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_OnUserEff("Effect/BasicEff.img/Teleport");
                                                                          } else if (status === O++) {
                                                                            cm.dispose();
                                                                            cm.forceCompleteQuest(30006);
                                                                            cm.warp(910700200, 0);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=19979548");
                                                                            cm.npc_LeaveField("oid=19979548");
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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