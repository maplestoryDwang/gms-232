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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2294, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2597588", -2247, -74, 133, -2297, -2197, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2597588", "summon", 0, 0);
        cm.npc_ChangeController(2074143, "oid=2597589", -2318, -74, 132, -2368, -2268, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2597589", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("呜，呜呜，以后我就真的是一个人了。", 37, 2074143, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哎呀，小荳啊？发生什么事情了吗？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2597589", 1);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2597589"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("终结者姐姐？怎么办？我……以后真的就只有一个人了……\t", 37, 2074143, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2597588");
                  cm.inGameDirectionEvent_SetHideEffect(1);
                  cm.npc_ChangeController(2074146, "oid=2597596", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
                  cm.npc_SetSpecialAction("oid=2597596", 'summon', 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                      cm.effect_Text(["#fn黑体##fs18#之前的状况#fs15##fn黑体#小荳的家"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2597589"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("什么，你说你要去哪儿？", 37, 2074143, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我被任命到那远方的村庄就职，\r\n虽然我也很想一直待在我出生的地方，但看来还是不行啊。", 37, 2074146, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哼，那你什么时候再回来。", 37, 2074143, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我要是走了，估计以后就回不来了。\r\n往后我估计都会在那里生活。", 37, 2074146, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2597589"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("什么？为什么？为什么？为什么回不来了？", 37, 2074143, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("国家的事情不就是这样的嘛，我也没办法。\r\n所以你也赶紧振作起来。\r\n要是没有我在，还有谁会照顾你啊？", 37, 2074146, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074143, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……你真的要走吗？\r\n什么时候？", 37, 2074143, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("大概在一周后吧？\r\n哎哟……小荳啊，我从很久之前就觉得你特别帅气呢？\r\n认真地活着，就算再苦也不会向困难低头……那个样子实在是太帅了。\r\n可是现在……我也搞不懂你了。", 37, 2074146, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("…………", 37, 2074143, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("已经晚了，\r\n走之前我会再来的，再见。", 37, 2074146, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2597596");
                                                    cm.npc_ChangeController(2074100, "oid=2597639", -2247, -74, 133, -2297, -2197, 1, true, 500, false);
                                                    cm.npc_SetSpecialAction("oid=2597639", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        cm.effect_Text(["#fn黑体##fs18#现在#fs15##fn黑体#小荳的家"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("额啊！他说他真的要走了！以后就再也见不到了！\r\n为什么我会泪流不止呢，可能我是喜欢他的吧，怎么办……", 37, 2074143, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#嗯……如果你心意如此，不如表白如何？", 37, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("他……不，你看看我现在的样子。\r\n谁会……喜欢这样的我啊……呜呜，呜呜，哇哇！", 37, 2074143, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不会的，小荳，你想想郡守说过的话。\r\n他不是说过老实过日子的女人很帅嘛。\r\n你得重新恢复那个样子。", 37, 2074100, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("……呜呜，我吗？重新？\r\n我不管啦，所有的一切都很奇怪地让我心烦。\r\n我也很想去改变，但就是不太顺利……", 37, 2074143, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#但要是这么继续下去，你可能真的会错过郡守哦？\r\n这样也无妨吗？", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("郡守……他……\r\n呜呜……我不想这样，不想和他分开。", 37, 2074143, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#是吧？那你就得去努力。\r\n虽然我知道你也不想突然改变，但我终结者\r\n不是陪在你身边呢嘛！", 37, 2074100, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074143, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("呜呜，你为什么要对我这么好，姐姐？", 37, 2074143, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#就只是，总觉得你像是我的妹妹，想要照顾你，\r\n我本来就很爱管闲事的，嘿嘿。", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那……呜呜，\r\n我要从什么开始做起呢？", 37, 2074143, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#那，先去找事儿做怎么样？", 37, 2074100, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("呜呜……那，应该会……有点难吧。", 37, 2074143, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯？为什么？你可得端正心态。", 37, 2074100, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('那个吧……', 37, 2074143, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哎哟，别哭了！姐姐都会帮你解决的。\r\n你去洗一洗，先等着！姐姐会帮你找到工作的。", 37, 2074100, true, true);
                                                                                        } else if (status === V++) {
                                                                                          cm.forceStartQuest(30438, '');
                                                                                          cm.dispose();
                                                                                          cm.warp(224000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;