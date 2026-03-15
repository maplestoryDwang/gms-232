var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  var V = cm.getMap().getNumMonsters();
  if (V > 0) {
    cm.sendNormalTalk_Bottom("嘤嘤嘤……那些怪物还在！！\r\n得赶紧消灭这里的怪物！", 37, 1540800, false, true);
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 2146, 400);
    } else {
      if (status === w++) {
        cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", 'normal', '', ''], [1, 1, 1, 0, 0, 0, 0, 0]);
        cm.setNpcSpecialActionReset("oid=287625341");
        cm.npc_SetSpecialAction("oid=287625341", 'mouth', -1, 1);
        cm.Hidden_background("pus_click", 1, 0, 0, 0);
        cm.sendNormalTalk_Bottom("谢谢你，勇士！！！！！！", 37, 1540800, false, true);
      } else {
        if (status === w++) {
          cm.sendNormalTalk_Bottom("哎哟，你旁边那个是蜥蜴吗？长得好奇怪啊。", 37, 1540800, true, true);
        } else {
          if (status === w++) {
            cm.sendNormalTalk_Bottom('……', 37, 1540807, true, true);
          } else {
            if (status === w++) {
              cm.sendNormalTalk_Bottom('让我瞧瞧，眼镜在……', 37, 1540800, true, true);
            } else {
              if (status === w++) {
                cm.sendNormalTalk_Bottom("额啊！那不是恶龙嘛！", 37, 1540800, true, true);
              } else {
                if (status === w++) {
                  cm.sendNormalTalk_Bottom("#face0#主人，我突然很想知道企鹅肉什么味道。", 37, 1540807, true, true);
                } else {
                  if (status === w++) {
                    cm.sendNormalTalk_Bottom("救命啊，我错了。", 37, 1540800, true, true);
                  } else {
                    if (status === w++) {
                      cm.sendNormalTalk_Bottom("它这是开玩笑的，别害怕，比起吃肉，米乐更喜欢吃芝士蛋糕，不过你能先解释一下这是什么状况吗？", 37, 1540805, true, true);
                    } else {
                      if (status === w++) {
                        cm.sendNormalTalk_Bottom("什么？你来这里还不知道这座岛上发生了什么吗？", 37, 1540800, true, true);
                      } else {
                        if (status === w++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === w++) {
                            cm.inGameDirectionEvent_Monologue("这座岛原本是玛瑙龙阿弗利埃长眠的岛。", 0);
                          } else {
                            if (status === w++) {
                              cm.inGameDirectionEvent_Monologue("它受了伤，身体与岛合二为一，过着所剩无多的余生。", 1);
                            } else {
                              if (status === w++) {
                                cm.inGameDirectionEvent_Monologue("不过这孤僻的岛上，突然闯进了无恶不作的魔族！", 0);
                              } else {
                                if (status === w++) {
                                  cm.inGameDirectionEvent_Monologue("原本该待在南边绯红的魔族不知为何会来到这里……！", 1);
                                } else {
                                  if (status === w++) {
                                    cm.inGameDirectionEvent_Monologue("魔族瞬间便占领了里恩岛，并闯入了阿弗利埃的处所。", 0);
                                  } else {
                                    if (status === w++) {
                                      cm.inGameDirectionEvent_Monologue("我原本被当成了俘虏，便趁着魔族不注意，逃了出来。", 1);
                                    } else {
                                      if (status === w++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === w++) {
                                          cm.sendNormalTalk_Bottom("#face3#所以我们才会过来，米乐和阿弗利埃一样，也是玛瑙龙，所以它能够感觉到有不对劲的地方。", 37, 1540805, false, true);
                                        } else {
                                          if (status === w++) {
                                            cm.sendNormalTalk_Bottom("果然我们的预感是正确的，先祖肯定是出事了。", 37, 1540807, true, true);
                                          } else {
                                            if (status === w++) {
                                              cm.sendNormalTalk_Bottom("#face3#里面还有很多俘虏吗？", 37, 1540805, true, true);
                                            } else {
                                              if (status === w++) {
                                                cm.sendNormalTalk_Bottom("是，像我这样的企鹅就算了，羸弱的利琳却要经历那样的苦楚……呜呜，光是想想我就心急如焚！", 37, 1540800, true, true);
                                              } else {
                                                if (status === w++) {
                                                  cm.sendNormalTalk_Bottom("现在可不是愣着的时候！得赶紧将利琳救出来！", 37, 1540800, true, true);
                                                } else {
                                                  if (status === w++) {
                                                    cm.sendNormalTalk_Bottom("最好是抓紧时间，主人。", 37, 1540807, true, true);
                                                  } else {
                                                    if (status === w++) {
                                                      cm.sendNormalTalk_Bottom("#face3#好吧，走！", 37, 1540805, true, true);
                                                    } else {
                                                      if (status === w++) {
                                                        cm.sendNormalTalk_Bottom("加油，那我就先行告辞了……", 37, 1540800, true, true);
                                                      } else {
                                                        if (status === w++) {
                                                          cm.setNpcSpecialActionReset("oid=287625341");
                                                          cm.npc_SetSpecialAction("oid=287625341", "stand3", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                        } else {
                                                          if (status === w++) {
                                                            cm.sendNormalTalk_Bottom("#face2#你这话语和行动不一致嘛！", 37, 1540805, false, true);
                                                          } else {
                                                            if (status === w++) {
                                                              cm.sendNormalTalk_Bottom("像我这样的企鹅只会碍事，等你进去了，一定要救出阿弗利埃和利琳，勇士！", 37, 1540800, true, true);
                                                            } else {
                                                              if (status === w++) {
                                                                cm.sendNormalTalk_Bottom("恩，别担心！", 37, 1540805, true, true);
                                                              } else {
                                                                if (status === w++) {
                                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                                  cm.setNpcSpecialActionReset("oid=287625341");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === w++) {
                                                                    cm.npc_setForceFlip("oid=287625341", 1);
                                                                    cm.sendNormalTalk_Bottom('等下……你是玛瑙龙？', 37, 1540800, false, true);
                                                                  } else {
                                                                    if (status === w++) {
                                                                      cm.sendNormalTalk_Bottom("难道这位少年就是传说之龙……弗里德先生的后裔？", 37, 1540800, true, true);
                                                                    } else {
                                                                      if (status === w++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === w++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === w++) {
                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                                                            cm.forceCompleteQuest(33920);
                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                            cm.updateInfoQuest(33960, "33920=1");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                          } else {
                                                                            if (status === w++) {
                                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                            } else {
                                                                              if (status === w++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                              } else {
                                                                                if (status === w++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === w++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else if (status === w++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(350110600, 0, true);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=287625341");
                                                                                    cm.npc_LeaveField("oid=287625341");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}