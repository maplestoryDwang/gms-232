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
      cm.npc_ChangeController(3004454, "oid=63564120", 4950, -80, 2, 4900, 5000, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63564120", "summon", 0, 0);
      cm.npc_ChangeController(3004465, "oid=63564121", 5050, -80, 10, 5000, 5100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63564121", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 5100, -30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#最后是这样的结果吗……", 37, 3004454, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63564121"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=63564121", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3004460, "oid=63565129", 5200, -80, 9, 5150, 5250, 1, true, 1000, false);
                      cm.npc_SetSpecialAction("oid=63565129", "summon", 0, 0);
                      cm.npc_ChangeController(3004460, "oid=63565130", 5260, -80, 9, 5210, 5310, 1, true, 1000, false);
                      cm.npc_SetSpecialAction("oid=63565130", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#您找我们有何吩咐？", 37, 3004460, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=63564120", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#队长给你们下达了命令。", 37, 3004454, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#请大家消灭名为#b闪电魔女#k的家伙。", 37, 3004454, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#原因呢？", 37, 3004460, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#她发现圣剑的主人是冒牌货了。", 37, 3004454, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#知道了。", 37, 3004460, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.Npc_Fadeout("oid=63565129", 0, 500);
                                        cm.Npc_Fadeout("oid=63565130", 0, 500);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3004454, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#是时候了。", 37, 3004454, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=63564121", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#让奇勒摩动身吧。", 37, 3004454, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是。", 37, 3004465, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout("oid=63564121", 0, 500);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#圣地即将变为一片废墟……", 37, 3004454, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else if (status === V++) {
                                                              cm.eventSKill(0);
                                                              cm.warp(993151020, 0, true);
                                                              cm.npc_LeaveField("oid=63564120");
                                                              cm.npc_LeaveField("oid=63564120");
                                                              cm.npc_LeaveField("oid=63564121");
                                                              cm.npc_LeaveField("oid=63564121");
                                                              cm.npc_LeaveField("oid=63565129");
                                                              cm.npc_LeaveField("oid=63565129");
                                                              cm.npc_LeaveField("oid=63565130");
                                                              cm.npc_LeaveField("oid=63565130");
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