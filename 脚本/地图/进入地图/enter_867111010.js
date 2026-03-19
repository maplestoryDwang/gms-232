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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("#face1#为什么要我……？！", 9400032);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust1", 0, 1500, 0, 0, 14, 4, 0);
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9400032, "oid=1809443", 625, 21, 1);
                cm.npc_SetSpecialAction("oid=1809443", "summon");
                cm.npc_ChangeController(9400037, "oid=1809444", 789, 21, 1);
                cm.npc_SetSpecialAction("oid=1809444", 'summon');
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 9400032, 6654029);
                        cm.npc_SetForceMove("oid=1809443", -1, 100, 100);
                        cm.sendNextNoESC_Bottom('别跟过来。', 9400032);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom('……', 9400037);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("啊真是的，麻烦死了！", 9400032);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2400);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=1809444", -1, 100, 80);
                                    cm.sendNextNoESC_Bottom('……', 9400037);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2400);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("……你要过来就快点啊！慢慢吞吞的！", 9400032);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom('<3', 9400037);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom('……', 9400033);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=1809444");
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(9400033, "oid=1809942", 1631, 21, 1);
                                                    cm.npc_SetSpecialAction("oid=1809942", "summon");
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=1809443", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1809443", 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=1809443", 1, 100, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1809443"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(9400037, "oid=1810099", 730, 21, 1);
                                                                  cm.npc_SetSpecialAction("oid=1810099", "summon");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=1810099", -1, 10, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=1809443", -1, 30, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=1810099", -1, 20, 100);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1810099"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 150, 1514, 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(7451);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1809942"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                } else if (status === V++) {
                                                                                  cm.warp(867111011, 0, true);
                                                                                  cm.npc_LeaveField("oid=1809443");
                                                                                  cm.npc_LeaveField("oid=1809942");
                                                                                  cm.npc_LeaveField("oid=1810099");
                                                                                  cm.dispose();
                                                                                } else {
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;