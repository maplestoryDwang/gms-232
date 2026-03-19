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
      cm.npc_ChangeController(1530600, "oid=39599230", -100, 0, 1, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=39599230", 'summon', 0, 0);
      cm.npc_ChangeController(1530646, "oid=39599231", 550, 0, 3, 500, 600, 1, false, false);
      cm.npc_SetSpecialAction("oid=39599231", "summon", 0, 0);
      cm.npc_ChangeController(1530647, "oid=39599232", 650, 0, 3, 600, 700, 1, false, false);
      cm.npc_SetSpecialAction("oid=39599232", "summon", 0, 0);
      cm.npc_ChangeController(1530648, "oid=39599233", 730, 0, 3, 680, 780, 1, false, false);
      cm.npc_SetSpecialAction("oid=39599233", "summon", 0, 0);
      cm.npc_ChangeController(1530649, "oid=39599234", 810, 0, 3, 760, 860, 1, false, false);
      cm.npc_SetSpecialAction("oid=39599234", 'summon', 0, 0);
      cm.npc_ChangeController(1530650, "oid=39599235", 890, 0, 3, 840, 940, 1, false, false);
      cm.npc_SetSpecialAction("oid=39599235", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(10, 1700, 10, 0, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/thunder2", 100, 60);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哦？谁？", 37, 1530600, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH6_01/2", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 700, 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 700, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=39599231");
                        cm.npc_LeaveField("oid=39599231");
                        cm.npc_LeaveField("oid=39599232");
                        cm.npc_LeaveField("oid=39599232");
                        cm.npc_LeaveField("oid=39599233");
                        cm.npc_LeaveField("oid=39599233");
                        cm.npc_LeaveField("oid=39599234");
                        cm.npc_LeaveField("oid=39599234");
                        cm.npc_LeaveField("oid=39599235");
                        cm.npc_LeaveField("oid=39599235");
                        cm.npc_ChangeController(1530626, "oid=39604463", 550, 0, 3, 500, 600, 1, true, false);
                        cm.npc_SetSpecialAction("oid=39604463", "summon", 0, 0);
                        cm.npc_ChangeController(1530627, "oid=39604465", 650, 0, 3, 600, 700, 1, true, false);
                        cm.npc_SetSpecialAction("oid=39604465", "summon", 0, 0);
                        cm.npc_ChangeController(1530628, "oid=39604466", 730, 0, 3, 680, 780, 1, true, false);
                        cm.npc_SetSpecialAction("oid=39604466", "summon", 0, 0);
                        cm.npc_ChangeController(1530624, "oid=39604467", 810, 0, 3, 760, 860, 1, true, false);
                        cm.npc_SetSpecialAction("oid=39604467", "summon", 0, 0);
                        cm.npc_ChangeController(1530625, "oid=39604468", 890, 0, 3, 840, 940, 1, true, false);
                        cm.npc_SetSpecialAction("oid=39604468", "summon", 0, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#这个学校真没意思。就只有玩这种无聊音乐的人。\r\n我得让他们听听真正的音乐……", 37, 1530621, false, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_01/3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4##fs25##r那就开始演奏吧？", 37, 1530621, false, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_01/4", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.playSoundEffDirectly("Ambience.img/thunder2");
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm42.img/Demon's eye", 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/spinoff2/0", 0, 3000, 0, 0, 0, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 3000, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(8000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.playVideoByScript("friendsStory.avi");
                                              } else {
                                                if (status === V++) {
                                                  cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  cm.effect_Text(["#fn黑体##fs24#Chapter 6\r\n#fs18#~转学生戴米安和火热的Rock Soul~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
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
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                            cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                cm.effect_Voice("UI.img/DragStart", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                } else if (status === V++) {
                                                                                  cm.forceStartQuest(33500, '');
                                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                  cm.forceCompleteQuest(33500);
                                                                                  cm.forceStartQuest(33530, '');
                                                                                  cm.forceStartQuest(33536, '');
                                                                                  cm.dispose();
                                                                                  cm.warp(330000000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;