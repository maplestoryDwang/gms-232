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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19783880", -250, 93, 7, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=19783880", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19783881", -460, 93, 7, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=19783881", 'summon', 0, 0);
      cm.npc_ChangeController(9400033, "oid=19783882", -380, 93, 7, -430, -330, 0, true, false);
      cm.npc_SetSpecialAction("oid=19783882", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19783883", -330, 93, 7, -380, -280, 0, true, false);
      cm.npc_SetSpecialAction("oid=19783883", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19783884", -525, 93, 7, -575, -475, 0, true, false);
      cm.npc_SetSpecialAction("oid=19783884", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -330, 22);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这到底是哪里？", 37, 9400032, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 200, -330, -500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2614);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 476, -500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4028);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, 476, 22);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2614);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, -330, 22);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4028);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=19783880", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=19783880", 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("总感觉有一股可怕而奇异的气息！", 37, 9400031, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这里就是APORD的宇宙船吧。作为宇宙范畴的犯罪组织，也许他们在自己的宇宙船里设置了某种陷阱。大家要特别留心。", 37, 9400034, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不管有何种陷阱，只要能找到失踪的动物朋友……我不会惧怕任何东西。", 37, 9400035, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("好……好吧，代号陈！出发！", 37, 9400031, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=19783881", 1, 550, 200);
                                          cm.npc_SetForceMove("oid=19783883", 1, 500, 150);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=19783882", 1, 300, 150);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=19783884", 1, 520, 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(5200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=19783881", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=19783882", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=19783884", -1);
                                                    cm.npc_setForceFlip("oid=19783883", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("怎么还不出发？", 37, 9400032, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#小鬼，难不成你怕了？", 37, 9400034, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("有、有什么好怕的！我这就！去！", 37, 9400031, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=19783880", 1, 1000, 300);
                                                                cm.npc_setForceFlip("oid=19783881", 0);
                                                                cm.npc_setForceFlip("oid=19783882", 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=19783883", 0);
                                                                  cm.npc_setForceFlip("oid=19783884", 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=19783880");
                                                                    cm.sendNormalTalk_Bottom("代号BT的那个人，越看越奇特。", 37, 9400033, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=19783881", 1, 500, 200);
                                                                      cm.npc_SetForceMove("oid=19783882", 1, 400, 150);
                                                                      cm.npc_SetForceMove("oid=19783883", 1, 400, 150);
                                                                      cm.npc_SetForceMove("oid=19783884", 1, 500, 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                    } else if (status === V++) {
                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.eventSKill(0);
                                                                      cm.playerMessage(5, "穿过陷阱，寻找嘟嘟吧！");
                                                                      cm.npc_LeaveField("oid=19783881");
                                                                      cm.npc_LeaveField("oid=19783882");
                                                                      cm.npc_LeaveField("oid=19783883");
                                                                      cm.npc_LeaveField("oid=19783884");
                                                                      cm.dispose();
                                                                      cm.forceCompleteQuest(59728);
                                                                      cm.warp(867110000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;