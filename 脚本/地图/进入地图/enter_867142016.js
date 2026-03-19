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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9401085, "oid=7547042", 900, -300, 6, 850, 950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7547042", "summon", 0, 0);
      cm.npc_ChangeController(9401120, "oid=7547043", 1250, -300, 5, 1200, 1300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7547043", "summon", 0, 0);
      cm.npc_ChangeController(9401089, "oid=7547044", 1250, -280, 5, 1200, 1300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=7547044", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7547043", "fall", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 500, 1050, -260);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你们……你们在干嘛？", 36, 9401085, 0, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("救救……这个#b人#k吧……", 36, 9401089, 1, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这里面的人，难道是#b杰斯#k？", 36, 9401085, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("一定要……救他……带他出去……他还有气息……", 36, 9401089, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b杰斯#k也是给你们带来痛苦的人啊。\r\n干嘛要救他呢？直接把他丢下吧。", 36, 9401085, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("他……想要帮助我们……虽然制造了我们，给了我们痛苦……但我……也想救他……", 36, 9401089, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('哼，真搞不懂。', 36, 9401085, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("为什么要这样……我们……为什么……会这样……\r\n和#b杰斯#k在一起的话……就会知道的……", 36, 9401089, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你们怎么不一直和赛恩为伴呢？", 36, 9401085, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("赛恩说你们让他#b破坏世界#k，#b清除人类#k。\r\n所以他才会总是执着于这件事。", 36, 9401085, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们……从来没有……那样过……", 36, 9401089, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我们……只是……希望……大家都能……幸福……", 36, 9401089, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你们不想向曾让你们饱受折磨的人复仇吗？", 36, 9401085, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("虽然……有过……那种念头……但现在……", 36, 9401089, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("只希望……不要……再有这种……痛苦……", 36, 9401089, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯？喂，接着说啊。我还想听呢。喂，喂。", 36, 9401085, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('……', 36, 9401085, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哎呦……真无趣。", 36, 9401085, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 240);
                                              cm.inGameDirectionEvent_AskAnswerTime(3200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("斯卡伊！终于找到你了……！\r\n你在这里干嘛……", 56, 0, 0, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=7547042", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这……这些拟真机器人残骸是什么情况……？\r\n貌似是在不自然的包裹着什么……？", 56, 0, 0, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("听说#b杰斯#k在这里。.", 36, 9401085, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("什么？！你怎么不早点告诉我！", 56, 0, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 240);
                                                          cm.npc_setForceFlip("oid=7547042", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_QTE(0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                              cm.forceCompleteQuest(64942);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_QTE(0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                  cm.forceCompleteQuest(64943);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_QTE(0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                      cm.npc_LeaveField("oid=7547044");
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("杰斯！醒醒！\r\n幸好，他还在喘气。要快点把他带到藏身处！", 56, 0, 0, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("呃嗯……", 36, 9401085, 1, 1);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(64945);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.eventSKill(0);
                                                                            cm.warp(867142000, 0, false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.npc_LeaveField("oid=7547042");
                                                                            cm.npc_LeaveField("oid=7547043");
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
              }
            }
          }
        }
      }
    }
  }
}