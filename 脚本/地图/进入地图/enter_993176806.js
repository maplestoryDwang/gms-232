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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm54/FungusForestB", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, -15);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 342, 113);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3004751, "oid=1862317", 90, 54, 2, 40, 140, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1862317", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1862317", "stand1", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                    cm.sendNormalTalk_Bottom("呼……还是获得了之前拥有的一部分力量吗？\r\n这也难怪，毕竟是龙骑士身边的玛瑙龙……", 56, 0, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("但是我决不能后退！！！", 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗯……？", 56, 0, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction25.img/YumYumE/effect/web/0"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction25.img/YumYumE/effect/web/1"], [17000, 0, 0, 1, 10, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("呃……", 56, 0, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_NormalSpeechBalloon("有两下子。但是现在结束了。", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004751, null, cm.getPlayer().getId());
                                        cm.npc_ChangeController(3004732, "oid=1862327", 500, 100, 8, 450, 550, 1, true, 500, false);
                                        cm.npc_SetSpecialAction("oid=1862327", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1862327", -1, 200, 180);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=1862317");
                                            cm.npc_SetSpecialAction("oid=1862317", "attack", 2000, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Attack1", 100);
                                            cm.sendNormalTalk_Bottom('不！', 37, 3004732, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction25.img/YumYumE/effect/attack"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=1862317");
                                                  cm.npc_SetSpecialAction("oid=1862317", 'stand1', -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=1862327", "knock", 999999, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.sendNormalTalk_Bottom("#face0#呃……", 36, 3004732, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('退后，卡斯特！', 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_NormalSpeechBalloon('又来了一个渺小之物。', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004751, null, cm.getPlayer().getId());
                                                              cm.sendNormalTalk_Bottom("#face0#我不渺小！", 36, 3004732, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我不是失败作！我……", 36, 3004732, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#就是我！", 36, 3004732, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction25.img/YumYumE/effect/web/2"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_NormalSpeechBalloon('真是愚蠢……', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004751, null, cm.getPlayer().getId());
                                                                      cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                                                                      cm.setNpcSpecialActionReset("oid=1862327");
                                                                      cm.npc_SetSpecialAction("oid=1862327", "angry1", 1500, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=1862327", 'angry2', 1500, 1);
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
                                                                                cm.playerMessage(5, "再次与花中出现存在交手。");
                                                                                cm.npc_LeaveField("oid=1862317");
                                                                                cm.npc_LeaveField("oid=1862327");
                                                                                cm.dispose();
                                                                                cm.forceJoinEvent("真香岛_战斗6_击杀数");
                                                                                cm.setStandAloneMode(false);
                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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