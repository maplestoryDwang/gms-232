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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 1000, 102, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004085, "oid=2368340", 246, 25, 1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 255, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#片刻后，通往狐狸村的路"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咦，你是谁？长得和我的守护灵一模一样嘛！", 36, 3004085, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你是从哪儿来的？怎么长成这副模样？", 36, 3004085, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2368340", -1, 50, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=2368340"], [0, 5, -10]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("还有，如此熟悉的这股味道是……？", 36, 3004085, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("阿琅，你可以一个个问题慢慢问。", 56, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("连我的名字都知道啊！", 36, 3004085, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这就是爷爷所说的守护灵吗……", 36, 3004085, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("大家都说心中有所牵挂，会渐渐变得与那人相像。", 56, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎哟？你怎么知道的？", 36, 3004085, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("（虽说在与黑魔法师决战的时候，就已经做好了玉石俱焚的准备，然而……）", 56, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("（其实还是有些事让我放心不下。）", 56, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("怎么不说话了？你是从哪里听来的这些话？", 36, 3004085, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我啊，是从一个想要捉住风的傻瓜那里听来的。", 56, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("如今也不算太晚……想要继续制造回忆的话。", 56, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('嗯？', 36, 3004085, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我来自只有一颗月亮的地方。", 56, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1600, 0, 90, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我叫#h0#，今后可不要再忘记了。", 56, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.setInGameDirectionMode(false, false, false);
                                                            cm.npc_LeaveField("oid=2368340");
                                                            cm.warp(993141003, 0, false);
                                                            cm.dispose();
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}