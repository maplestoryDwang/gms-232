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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063000");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201578, "oid=2709159", 130, 132, 8, 80, 180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709159", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2709160", -305, 132, 8, -355, -255, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709160", "summon", 0, 0);
      cm.npc_ChangeController(9201539, "oid=2709161", -490, 132, 8, -540, -440, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709161", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -67, -800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, -84, 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(8994);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2709161", 1, 300, 100);
              cm.inGameDirectionEvent_AskAnswerTime(5200);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2709159", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('站住。此地禁入。', 37, 9201578, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("如果你是帝国的公民，请立即返回。", 37, 9201578, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#……我还不能回去。", 37, 9201539, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你说什么？", 37, 9201578, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2709161", "attack", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/DebuffEffect.img/DropBloodingCurse/areaWarning", "oid=2709159"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/DebuffEffect.img/DropBloodingCurse/areaWarning", "oid=2709160"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                            cm.effect_NormalSpeechBalloon('！！', 1, 0, 0, 2000, 1, 0, -30, 0, 4, 9201578, null, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("噶啊啊！这是什么玩意儿？！", 37, 9201578, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好痛！好痛啊——！", 37, 9201578, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2709159");
                                    cm.npc_LeaveField("oid=2709159");
                                    cm.npc_LeaveField("oid=2709160");
                                    cm.npc_LeaveField("oid=2709160");
                                    cm.npc_ChangeController(9201580, "oid=2709421", 130, 132, 8, 80, 180, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2709421", "summon", 0, 0);
                                    cm.npc_ChangeController(9201580, "oid=2709422", -305, 132, 8, -355, -255, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2709422", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2709421", -1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#很抱歉。", 37, 9201539, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#但至少，你能跟我站在一边。", 37, 9201539, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2709161", 'attack', 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2709421", -1, 800, 100);
                                                cm.npc_SetForceMove("oid=2709422", -1, 700, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2709161", -1, 450, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2709161");
                                                    cm.npc_LeaveField("oid=2709161");
                                                    cm.npc_LeaveField("oid=2709422");
                                                    cm.npc_LeaveField("oid=2709422");
                                                    cm.npc_LeaveField("oid=2709421");
                                                    cm.npc_LeaveField("oid=2709421");
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.warp(610063010, 0, true);
                                                    cm.setInGameDirectionMode(false, true, false);
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