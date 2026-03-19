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
      cm.npc_ChangeController(1530110, "oid=37763489", 48, 78, 1, -2, 98, 0, true, false);
      cm.npc_SetSpecialAction("oid=37763489", "summon", 0, 0);
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
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Text(["#fn黑体##fs26#当天晚上\r\n#fs14#科学室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("唉，真是的，为什么科学室偏偏这个时候没电啊……\r\n我得尽快将实验准备物放回原位，然后回家。", 37, 1530110, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 120, 198, 78);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=37763489", 1, 350, 150);
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37763489"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=37763489", -1);
                    cm.sendNormalTalk_Bottom("……？有人在那里吗？", 37, 1530110, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('难道是我听错了……？', 37, 1530110, false, true);
                      } else {
                        if (status === V++) {
                          cm.playSoundEffDirectly("Ambience.img/wind");
                          cm.setAmbience("Skill.img/12121001/Loop", 100, 60);
                          cm.npc_ChangeController(1530560, "oid=37770633", 235, 20, 1, 185, 285, 1, false, 1000, false);
                          cm.npc_SetSpecialAction("oid=37770633", 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1530561, "oid=37771025", 235, 20, 1, 185, 285, 1, false, 1000, false);
                            cm.npc_SetSpecialAction("oid=37771025", 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=37763489", "huk", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##fs20#啊呀呀~~！！", 37, 1530110, false, true);
                                cm.effect_Voice("Voice2.img/Friends/NPC_oz/4", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 235, 38);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, 235, 38);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_Voice("SoundEff.img/pianoEnd", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=37763489", 0);
                                              cm.setNpcSpecialActionReset("oid=37763489");
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37763489"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.npc_SetForceMove("oid=37763489", -1, 400, 300);
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                              cm.effect_Voice("Voice2.img/Friends/NPC_oz/5", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                cm.effect_Text(["#fn黑体##fs18#事发时间：22点20分"], [100, 1800, 6, -50, -50, 1, 4, 0, 0, 0]);
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
                                                                            } else if (status === V++) {
                                                                              cm.forceStartQuest(32861, '');
                                                                              cm.forceCompleteQuest(32861);
                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;