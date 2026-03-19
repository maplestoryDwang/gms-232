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
      cm.npc_ChangeController(9400035, "oid=293621762", -1083, 1876, 3, -1133, -1033, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293621762", "summon", 0, 0);
      cm.npc_ChangeController(9400039, "oid=293621763", 467, 1204, 19, 417, 517, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293621763", 'summon', 0, 0);
      cm.npc_ChangeController(9400041, "oid=293621764", 635, 1204, 20, 585, 685, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293621764", "summon", 0, 0);
      cm.npc_ChangeController(9400038, "oid=293621765", 552, 1204, 19, 502, 602, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293621765", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=293621765", "tube", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=293621762", 1, 500, 200);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("灵灵，我找来吃的了，你在那儿呢？", 37, 9400035, false, true);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=293621762", -1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=293621762", 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#吭吭！嘤！", 37, 9400038, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("灵灵？！", 37, 9400035, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 300, 130, 1670);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=293621762", 1, 500, 250);
                        cm.inGameDirectionEvent_AskAnswerTime(3614);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 0, 550, 1790);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 0, 130, 1670);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                        cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400035, null, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=293621763", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=293621763", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=293621763"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                              cm.onViewOrHide("oid=293621763", 0, 0);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=293621764"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                              cm.onViewOrHide("oid=293621764", 0, 0);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=293621765"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                              cm.onViewOrHide("oid=293621765", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=293621762", 1, 100, 250);
                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#不行……！你给我站住！", 37, 9400035, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust2", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=293621762", 1, 200, 250);
                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.eventSKill(0);
                                                          cm.warp(867111023, 0, true);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.setStandAloneMode(false);
                                                          cm.npc_LeaveField("oid=293621762");
                                                          cm.npc_LeaveField("oid=293621762");
                                                          cm.npc_LeaveField("oid=293621763");
                                                          cm.npc_LeaveField("oid=293621763");
                                                          cm.npc_LeaveField("oid=293621764");
                                                          cm.npc_LeaveField("oid=293621764");
                                                          cm.npc_LeaveField("oid=293621765");
                                                          cm.npc_LeaveField("oid=293621765");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;