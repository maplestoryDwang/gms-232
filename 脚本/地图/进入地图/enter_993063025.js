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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1030, 155);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003770, "oid=2309624", -1353, 180, 24, -1403, -1303, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2309624", 'summon', 0, 0);
          cm.npc_SetForceMove("oid=2309624", 1, 600, 200);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -650, 155);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#好像是这边……", 37, 3003770, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(嗯？没人啊……)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_downSoldier/0", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM2_downSoldier/1", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("士兵们……？", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊啊……全都……", 37, 3003770, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2309624", 1, 350, 200);
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -290, 155);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#原来已经晚了。", 37, 3003770, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.npc_ChangeController(3003781, "oid=2309658", -450, 180, 7, -500, -400, 1, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309658", "summon", 0, 0);
                                      cm.npc_ChangeController(3003782, "oid=2309659", 558, 180, 12, 508, 608, 0, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309659", 'summon', 0, 0);
                                      cm.npc_ChangeController(3003783, "oid=2309660", -40, 180, 8, -90, 10, 1, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309660", "summon", 0, 0);
                                      cm.npc_ChangeController(3003784, "oid=2309661", 350, 180, 3, 300, 400, 1, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309661", "summon", 0, 0);
                                      cm.npc_ChangeController(3003785, "oid=2309662", 110, 180, 5, 60, 160, 0, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309662", "summon", 0, 0);
                                      cm.npc_ChangeController(3003786, "oid=2309663", 805, 180, 20, 755, 855, 1, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=2309663", 'summon', 0, 0);
                                      cm.npc_SetSpecialAction("oid=2309658", "stand", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2309659", "stand", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2309660", "stand", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2309661", "stand", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2309662", 'stand', -1, 1);
                                      cm.npc_SetSpecialAction("oid=2309663", "stand", -1, 1);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("明明……一个人都没有，这是突然从哪儿……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#这个嘛，是不是#h0#的#b眼睛被挡住了？#k", 37, 3003770, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=2309624", 1, 430, 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 480);
                                                cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1500, 2500, 240, 155);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1##b不然，就是只看到了自己想看的东西。#k", 37, 3003770, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我们得快点。其他联盟成员也很危险。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face2#……', 37, 3003770, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#好吧。跟我来。", 37, 3003770, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=2309624", 1, 700, 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2309624");
                                                                    cm.npc_LeaveField("oid=2309624");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(3003734, "oid=2309710", -450, 180, 7, -500, -400, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309710", 'summon', 0, 0);
                                                                        cm.npc_ChangeController(3003734, "oid=2309711", 558, 180, 12, 508, 608, 0, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309711", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003735, "oid=2309712", -40, 180, 8, -90, 10, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309712", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003735, "oid=2309713", 350, 180, 3, 300, 400, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309713", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003736, "oid=2309714", 110, 180, 5, 60, 160, 0, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309714", 'summon', 0, 0);
                                                                        cm.npc_ChangeController(3003736, "oid=2309715", 805, 180, 20, 755, 855, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2309715", "summon", 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=2309658");
                                                                          cm.npc_LeaveField("oid=2309658");
                                                                          cm.npc_LeaveField("oid=2309659");
                                                                          cm.npc_LeaveField("oid=2309659");
                                                                          cm.npc_LeaveField("oid=2309660");
                                                                          cm.npc_LeaveField("oid=2309660");
                                                                          cm.npc_LeaveField("oid=2309661");
                                                                          cm.npc_LeaveField("oid=2309661");
                                                                          cm.npc_LeaveField("oid=2309662");
                                                                          cm.npc_LeaveField("oid=2309662");
                                                                          cm.npc_LeaveField("oid=2309663");
                                                                          cm.npc_LeaveField("oid=2309663");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                    cm.npc_LeaveField("oid=2309710");
                                                                                    cm.npc_LeaveField("oid=2309710");
                                                                                    cm.npc_LeaveField("oid=2309711");
                                                                                    cm.npc_LeaveField("oid=2309711");
                                                                                    cm.npc_LeaveField("oid=2309712");
                                                                                    cm.npc_LeaveField("oid=2309712");
                                                                                    cm.npc_LeaveField("oid=2309713");
                                                                                    cm.npc_LeaveField("oid=2309713");
                                                                                    cm.npc_LeaveField("oid=2309714");
                                                                                    cm.npc_LeaveField("oid=2309714");
                                                                                    cm.npc_LeaveField("oid=2309715");
                                                                                    cm.npc_LeaveField("oid=2309715");
                                                                                    cm.dispose();
                                                                                    cm.warp(993063026, 0, false);
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}