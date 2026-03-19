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
      cm.npc_ChangeController(2192025, "oid=225087", 1327, 87, 9, 1277, 1377, 1, false, 0, false);
      cm.forceStartQuest(31386, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2192031, "oid=2538390", 826, 9, 13, 776, 876, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2538390", 'summon', 0, 0);
      cm.npc_ChangeController(2192032, "oid=2538391", 975, 9, 12, 925, 1025, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2538391", "summon", 0, 0);
      cm.npc_ChangeController(2192020, "oid=2538392", 495, 9, 17, 445, 545, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2538392", 'summon', 0, 0);
      cm.npc_ChangeController(2192019, "oid=2538393", 395, 9, 22, 345, 445, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2538393", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 0, 900, 9);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_NormalSpeechBalloon("多檀智……你还好吗？\r\n对不起……都是因为我……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_NormalSpeechBalloon("要不是我逞能，带着你出来四处乱走，\r\n也就不会发生这样的事情了……", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
              cm.effect_NormalSpeechBalloon("其实……", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_NormalSpeechBalloon("(哇，四目相对了！！)", 1, 0, 1, 3000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon("我想说的话，\r\n既不是要出来玩……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("额……更不是要坐什么旋转木马……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                      cm.effect_NormalSpeechBalloon("(额，我现在到底在说什么呢！)", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                        cm.effect_NormalSpeechBalloon("不该是这样的……", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("多洛米真是个傻瓜。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                            cm.effect_NormalSpeechBalloon("你……很生气吧？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_NormalSpeechBalloon("多檀智知道，\r\n多洛米是个珍惜多檀智的\r\n善良的松鼠。", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                cm.effect_NormalSpeechBalloon("所以今天出来的时候\r\n可是满怀着期待的。", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  cm.effect_NormalSpeechBalloon("不过可怕的是，\r\n你却带多檀智来坐这个\r\n比树还高的东西……", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_NormalSpeechBalloon("多檀智以为是自己一个人会错意了。", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                      cm.effect_NormalSpeechBalloon("啊……不是那样的……\r\n真的不是……", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_NormalSpeechBalloon("多檀智还弄丢了你送的礼物，\r\n所以一直很担心来着。", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_NormalSpeechBalloon("#e#fs20#我，我喜欢你！！", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=25"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("(扑通扑通)", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                cm.effect_NormalSpeechBalloon("真，真的吗？你不会是要\r\n故意损多檀智才这么说的吧？", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  cm.effect_NormalSpeechBalloon("嗯嗯！！！绝对，绝对不是！！", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                    cm.effect_NormalSpeechBalloon("……哎哟-万幸，\r\n真是万幸啊。", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                      cm.effect_NormalSpeechBalloon("那……", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                        cm.effect_NormalSpeechBalloon("我们每个春天都来玩吧？", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1250, 9);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              cm.effect_NormalSpeechBalloon("哎哟~脸红了呢~", 1, 0, 0, 2000, 2, 0, 0, 0, 4, 2192025, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 950, 9);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    cm.effect_NormalSpeechBalloon("没，没有啦！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      cm.effect_NormalSpeechBalloon("噗嗤。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 3000, 500, 9);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            cm.effect_NormalSpeechBalloon('实在是太感动了呢……', 1, 0, 0, 2000, 1, 0, -180, 0, 4, 2192020, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              cm.effect_NormalSpeechBalloon('#e你闭嘴吧。#n', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 3000, 950, 9);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  cm.effect_NormalSpeechBalloon("不过……你说不是？？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(9000, 1000, 9000, 950, -541);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      cm.effect_NormalSpeechBalloon("是不会再来了吗？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        cm.effect_NormalSpeechBalloon("啊，我不是针对那句话啦~~", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                        } else if (status === V++) {
                                                                                          cm.dispose();
                                                                                          cm.warp(222100000, 1);
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