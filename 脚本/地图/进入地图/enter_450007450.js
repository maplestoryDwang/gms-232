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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 868, 150);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(3003512, "oid=2002471", 900, 200, 18, 850, 950, 1, true, false);
        cm.npc_SetSpecialAction("oid=2002471", "summon", 0, 0);
        cm.npc_ChangeController(3003513, "oid=2002472", 970, 200, 18, 920, 1020, 1, true, false);
        cm.npc_SetSpecialAction("oid=2002472", "summon", 0, 0);
        cm.npc_ChangeController(3003512, "oid=2002473", 1040, 200, 22, 990, 1090, 1, true, false);
        cm.npc_SetSpecialAction("oid=2002473", "summon", 0, 0);
        cm.npc_ChangeController(3003513, "oid=2002474", 1110, 200, 24, 1060, 1160, 1, true, false);
        cm.npc_SetSpecialAction("oid=2002474", "summon", 0, 0);
        cm.npc_ChangeController(3003514, "oid=2002475", 760, 200, 17, 710, 810, 0, true, false);
        cm.npc_SetSpecialAction("oid=2002475", "summon", 0, 0);
        cm.npc_ChangeController(3003514, "oid=2002476", 660, 200, 15, 610, 710, 0, true, false);
        cm.npc_SetSpecialAction("oid=2002476", "summon", 0, 0);
        cm.npc_ChangeController(3003514, "oid=2002477", 560, 200, 16, 510, 610, 0, true, false);
        cm.npc_SetSpecialAction("oid=2002477", "summon", 0, 0);
        cm.npc_ChangeController(3003500, "oid=2002478", -181, -115, 59, -231, -131, 1, true, false);
        cm.npc_SetSpecialAction("oid=2002478", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2002471", 'attack1', 0, 1);
                cm.npc_SetSpecialAction("oid=2002474", 'attack1', 0, 1);
                cm.npc_SetSpecialAction("oid=2002476", 'attack1', 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644506/Attack1", 100);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644507/Attack1", 100);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644505/Attack1", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644505/Attack1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2002471", "stand", -1, 1);
                      cm.npc_SetSpecialAction("oid=2002474", "stand", -1, 1);
                      cm.npc_SetSpecialAction("oid=2002476", 'stand', -1, 1);
                      cm.npc_SetSpecialAction("oid=2002472", "attack1", 0, 1);
                      cm.npc_SetSpecialAction("oid=2002473", "attack1", 0, 1);
                      cm.npc_SetSpecialAction("oid=2002475", "attack1", 0, 1);
                      cm.npc_SetSpecialAction("oid=2002477", "attack1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644506/Attack1", 100);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644507/Attack1", 100);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644505/Attack1", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644505/Attack1", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2002472", 'stand', -1, 1);
                            cm.npc_SetSpecialAction("oid=2002473", 'stand', -1, 1);
                            cm.npc_SetSpecialAction("oid=2002475", "stand", -1, 1);
                            cm.npc_SetSpecialAction("oid=2002477", "stand", -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2002471", "die1", 0, 1);
                              cm.npc_SetSpecialAction("oid=2002474", "die1", 0, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644506/Die", 100);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644507/Die", 100);
                              cm.Npc_Fadeout("oid=2002471", 0, 2000);
                              cm.Npc_Fadeout("oid=2002474", 0, 2000);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2002471");
                                cm.npc_LeaveField("oid=2002474");
                                cm.npc_setForceFlip("oid=2002472", 1);
                                cm.npc_setForceFlip("oid=2002473", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2002472", 1, 100, 100);
                                  cm.npc_SetForceMove("oid=2002473", 1, 100, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.Npc_Fadeout("oid=2002472", 0, 500);
                                    cm.Npc_Fadeout("oid=2002473", 0, 500);
                                    cm.npc_SetForceMove("oid=2002475", 1, 300, 150);
                                    cm.npc_SetForceMove("oid=2002476", 1, 300, 150);
                                    cm.npc_SetForceMove("oid=2002477", 1, 300, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2002472");
                                      cm.npc_LeaveField("oid=2002473");
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.Npc_Fadeout("oid=2002475", 0, 1500);
                                        cm.Npc_Fadeout("oid=2002476", 0, 1500);
                                        cm.Npc_Fadeout("oid=2002477", 0, 1500);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2002475");
                                          cm.npc_LeaveField("oid=2002476");
                                          cm.npc_LeaveField("oid=2002477");
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#战斗好像已经结束了。\r\n好像是塔纳创造出来的东西，但可能是打不过，所以撤退了。", 37, 3003500, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("塔纳制造出来的人？那这块石碑也是镜世界的残骸吗？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(300, 1000, 300, -80, 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("等一下。对那块石碑使用法杖，会怎么样呢？\r\n那是塔纳创造出来的地方，也许……", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#好主意！也许可以看到与塔纳有关的记忆。", 37, 3003500, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceCompleteQuest(34573);
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(450007130, 0);
                                                                cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;