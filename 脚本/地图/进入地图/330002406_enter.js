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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530070, "oid=37555077", 311, 82, 2, 261, 361, 1, true, false);
      cm.npc_SetSpecialAction("oid=37555077", "summon", 0, 0);
      cm.npc_ChangeController(1530555, "oid=37555078", -189, 82, 1, -239, -139, 1, false, false);
      cm.npc_SetSpecialAction("oid=37555078", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/wind", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_Text(["#fn黑体##fs26#当天晚上\r\n#fs14#阅览室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("灯突然……难道是停电了？", 37, 1530070, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=37555077", -1, 250, 100);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=37555077"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('是谁在那里？', 37, 1530070, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=37555077", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……是风声吗……看来是我听错了。", 37, 1530070, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=37555078", "shake", -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=37555077", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=37555077", "huk", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_Voice("Voice2.img/Friends/NPC_nh/3", 100);
                                cm.effect_NormalSpeechBalloon("……嗬！！", 1, 0, 0, 2000, 1530070, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("cannonshooter/bang", 100);
                                      cm.sendNormalTalk_Bottom("#fs20#呃啊啊！", 37, 1530070, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=37555077", 0);
                                        cm.npc_LeaveField("oid=37555077");
                                        cm.npc_LeaveField("oid=37555077");
                                        cm.npc_SetSpecialAction("oid=37555078", 'down', -1, 1);
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -59, 132);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, -69, 132);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      cm.effect_Text(["#fn黑体##fs18#事发时间：21点30分"], [100, 1800, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                      cm.effect_Voice("UI.img/MenuDown", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        cm.effect_Voice("UI.img/MenuUp", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              cm.effect_Voice("UI.img/MenuDown", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                cm.effect_Voice("UI.img/MenuUp", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                  cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                      cm.effect_Voice("UI.img/MenuDown", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                        cm.effect_Voice("UI.img/MenuUp", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          cm.effect_Voice("UI.img/DragStart", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                            cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              cm.effect_Voice("UI.img/DragStart", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    cm.effect_Text(["#fn黑体##fs26#第二天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceStartQuest(32855, '');
                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                      cm.forceCompleteQuest(32855);
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(330000005, 0);
                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;