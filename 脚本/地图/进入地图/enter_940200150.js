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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 360, 70);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003273, "oid=1798273", -680, 0, 1, -730, -630, 0, true, false);
        cm.npc_SetSpecialAction("oid=1798273", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
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
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 360, 70);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(10);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 360, 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
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
                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -20, -50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(10);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -50, -50);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -50, 250);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                      } else {
                                        if (status === V++) {
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
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -460, 300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=1798273", 1, 630, 160);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -50, 300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=1798273", -1, 10, 160);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#终于完成了。我梦中的城市，拉克兰。", 37, 3003272, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#准备都结束了。现在马上…", 37, 3003272, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6#……", 37, 3003272, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1798273"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.setNpcSpecialActionReset("oid=1798273");
                                                                    cm.npc_SetSpecialAction("oid=1798273", "sleep", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
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
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.setNpcSpecialActionReset("oid=1798273");
                                                                                cm.npc_SetSpecialAction("oid=1798273", "sleep2", -1, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                } else if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=1798273");
                                                                                  cm.dispose();
                                                                                  cm.warp(940200151, 0);
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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