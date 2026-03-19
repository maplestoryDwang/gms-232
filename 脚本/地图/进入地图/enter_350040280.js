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
      cm.npc_ChangeController(1540650, "oid=290470123", 470, 19, 1, 420, 520, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=290470123", "summon", 0, 0);
      cm.npc_ChangeController(1540651, "oid=290470124", 370, 19, 4, 320, 420, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=290470124", 'summon', 0, 0);
      cm.npc_ChangeController(1540652, "oid=290470125", 270, 19, 15, 220, 320, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=290470125", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 275, -96);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呼，他们真的成功爬上去了。\r\n希望小软柿能阻止格里梅尔……", 37, 1540650, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=290470123", -1, 400, 150);
              cm.npc_SetForceMove("oid=290470124", -1, 400, 150);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('我觉得很难。', 37, 1540652, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=290470123", 1);
                      cm.npc_setForceFlip("oid=290470124", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=290470125", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("那个人是不可能阻止爸爸的。\r\n爸爸比看起来还要强。", 37, 1540652, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你怎么还喊格里梅尔爸爸？", 37, 1540651, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("人类存在感情，所以才会很脆弱……\r\n爸爸总是这么告诉我们。", 37, 1540652, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("嗯，但那也是人类最棒的一点！", 37, 1540650, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("拥有感情是件很棒的事，让人甘愿承受那份脆弱。", 37, 1540650, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我们现在可以体会到啊。不是吗？不高兴。\r\n因为我们也拥有了人类的感情。", 37, 1540651, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你们是的。\r\n但我不是。", 37, 1540652, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("那你为什么不阻止那个人？", 37, 1540650, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290470125"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("如果你还是听从格里梅尔命令的机器，你刚刚应该阻止那个人才对。\r\n但是你没有那么做。", 37, 1540650, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('…………', 37, 1540652, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你现在就承认吧。\r\n我们拥有了人类的感情。\r\n绝对不会像以前那样生活了。", 37, 1540650, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("好了，\r\n现在说不定还有获得感情的智能机器人正经历苦痛。\r\n在回收机器人把它们摧毁之前，我们必须救出它们。", 37, 1540650, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=290470123", -1);
                                                        cm.npc_setForceFlip("oid=290470124", -1);
                                                        cm.npc_SetForceMove("oid=290470123", -1, 500, 200);
                                                        cm.npc_SetForceMove("oid=290470124", -1, 500, 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 275, 79);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("人类的感情……", 37, 1540652, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=290470125", "unmask", -1, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/signal_l", 100);
                                                                    cm.npc_SetSpecialAction("oid=290470125", "standBeril", -1, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=290470125", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#如果你证明爸爸错了……\r\n我也能接受吗？", 37, 1540488, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#小心。\r\n爸爸的#r真正目的#k还没有显露出来。", 37, 1540488, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, 275, -481);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else if (status === V++) {
                                                                                  cm.dispose();
                                                                                  cm.warp(350040290, 0, true);
                                                                                  cm.npc_LeaveField("oid=290470123");
                                                                                  cm.npc_LeaveField("oid=290470123");
                                                                                  cm.npc_LeaveField("oid=290470124");
                                                                                  cm.npc_LeaveField("oid=290470124");
                                                                                  cm.npc_LeaveField("oid=290470125");
                                                                                  cm.npc_LeaveField("oid=290470125");
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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