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
      cm.npc_ChangeController(9401156, 'oid=262146', -203, 283, 1, -253, -153, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401160, "oid=91714381", 240, 260, 1, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91714381", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=91714382", 140, 260, 1, 90, 190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91714382", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 180, 320]);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#b艾丹，你在这里干嘛？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=91714382", -1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#我，我在帮助杰尼！", 37, 9400923, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#呼呼，可爱鬼艾丹帮了大忙呢。", 37, 9401160, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b可，可爱……鬼？", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=91714382", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#不，不要在别人面前这样！ ", 37, 9400923, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#为什么？我就是觉得你很可爱啊。", 37, 9401160, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_BackgroundCanvas(4, 250, 150, 150, 1000, 0, 9400932);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=91714382", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#我先走了……", 37, 9400923, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=91714382", -1, 100, 150);
                                    cm.sendNewEffects(12, [1000, 150, 320, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.fieldEffect_BackgroundCanvas(4, 250, 255, 255, 1000, 0, 9400932);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=91714382", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#怎，怎么办？", 37, 9400923, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#杰尼总是说我很可爱……", 37, 9400923, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b可能她的爱好……比较奇特。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#还有！！我喜！！……这是秘密！", 37, 9400923, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_BackgroundCanvas(4, 250, 150, 150, 1000, 0, 9400932);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_BackgroundCanvas(4, 250, 255, 255, 1000, 0, 9400932);
                                                        cm.npc_setForceFlip("oid=91714382", -1);
                                                        cm.sendNewEffects(12, [2000, -100, 320, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我该怎么办呢？我喜欢米兰达……", 37, 9400923, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=91714382", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNewEffects(12, [1000, 60, 320, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#杰尼要是想和我交往的话，我该怎么办呢！", 37, 9400923, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#b现在好像还没到那个阶段。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#呼，那是因为你不知道。其实我早就预料到这种情况了。", 37, 9400923, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#可爱鬼？你可以去招待一下3号桌吗？", 37, 9401160, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#好的，杰尼！", 37, 9400923, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=91714382", 1, 300, 200);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(12, [2000, -100, 320, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#真是的……", 37, 9400924, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else if (status === V++) {
                                                                                        cm.forceStartQuest(65442, '');
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.warp(871000003, 0, false);
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField("oid=91714381");
                                                                                        cm.npc_LeaveField("oid=91714382");
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
    }
  }
}