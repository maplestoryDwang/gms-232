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
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, 'graph');
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, 'eye');
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, "light1");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 1311, -286, 0, 'wall');
      cm.updateInfoQuest(33235, "puzzleNotice=0");
      cm.updateInfoQuest(33235, "puzzleNotice=0;puzzleNotice2=0");
      cm.updateInfoQuest(33235, "start=0;puzzleNotice=0;puzzleNotice2=0");
      cm.updateInfoQuest(33236, "start=0");
      cm.updateInfoQuest(33240, "skip6=1;act5=350053100");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540492, "oid=284750596", 1200, -10, 15, 1150, 1250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=284750596", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=284750596", 'on', -1, 1);
      cm.npc_setForceFlip("oid=284750596", -1);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 1, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 3, 560, -169, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 1, 431, -277, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 1, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 1, 779, -274, 0);
      cm.npc_ChangeController(1540494, "oid=284750597", 303, -547, 12, 253, 353, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=284750597", 'summon', 0, 0);
      cm.npc_ChangeController(1540494, "oid=284750598", 584, -465, 11, 534, 634, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=284750598", 'summon', 0, 0);
      cm.npc_ChangeController(1540494, "oid=284750599", 864, -547, 13, 814, 914, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=284750599", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=284750597", '0', -1, 1);
      cm.npc_SetSpecialAction("oid=284750598", '1', -1, 1);
      cm.npc_SetSpecialAction("oid=284750599", '0', -1, 1);
      cm.npc_setForceFlip("oid=284750597", -1);
      cm.npc_setForceFlip("oid=284750598", -1);
      cm.npc_setForceFlip("oid=284750599", -1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 3000, 700, -150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/fan", 100, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 100, 350, -100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.playSoundEffDirectly("Ambience.img/fan");
                cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 3000, -330, -100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.setAmbience("Ambience.img/fan", 100, 60);
                          cm.npc_ChangeController(1540493, "oid=284757871", -434, -48, 3, -484, -384, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=284757871", "summon", 0, 0);
                          cm.npc_SetSpecialAction("oid=284757871", "awaking", -1, 1);
                          cm.npc_setForceFlip("oid=284757871", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=284757871", 1);
                            cm.npcMove(1540493, 681, 0, 2000);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 100, -70, -100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=284757871", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=284757871", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=284757871", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=284757871");
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("(o_o) !", 1, 0, 1, 2000, 1, 681, -10, 0, 4, 1540493, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=284757871", 1);
                                        cm.npcMove(1540493, 0, -450, 2000);
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 80, 50, -250);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=284757871", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=284757871", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=284757871", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=284757871", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=284757871");
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 300, -400);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=284757871", "act_fast", -1, 1);
                                                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/27101202/Loop", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=284750597");
                                                        cm.npc_LeaveField("oid=284750597");
                                                        cm.npc_SetSpecialAction("oid=284757871", "eat_fast", -1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1360);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/ItemPot.img/2000/eat", 100);
                                                          cm.setNpcSpecialActionReset("oid=284757871");
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 500, 170, -170);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
                                                                cm.getMap().getReactorByName("graph").forceHitReactor(null, 1, 560, -169, 0);
                                                                cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
                                                                cm.getMap().getReactorByName("light2").forceHitReactor(null, 0, 568, -360, 0);
                                                                cm.getMap().getReactorByName("light3").forceHitReactor(null, 1, 779, -274, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/mOff", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1200, 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=284750596", "off", -1, 1);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 300, -200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npcMove(1540493, 180, 80, 500);
                                                                              cm.npcMove(1540493, 100, 0, 200);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=284757871", "act_start", -1, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=284757871", "act_ing", -1, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/27101202/Loop", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                      cm.npc_ChangeController(1540490, "oid=284771702", -396, -66, 4, -446, -346, 0, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=284771702", 'summon', 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('啊！那是！', 37, 1540490, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 200, -200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.setNpcSpecialActionReset("oid=284757871");
                                                                                              cm.npc_setForceFlip("oid=284757871", -1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=284757871", "attacked", -1, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=284757871", 1);
                                                                                                  cm.npc_SetSpecialAction("oid=284757871", "act_ing", -1, 1);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/27101202/Loop", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=284757871", "act_end", -1, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(310);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=284750598");
                                                                                                      cm.npc_LeaveField("oid=284750598");
                                                                                                      cm.npc_SetSpecialAction("oid=284757871", "eat_fast", -1, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1360);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/ItemPot.img/2000/eat", 100);
                                                                                                        cm.setNpcSpecialActionReset("oid=284757871");
                                                                                                        cm.npcMove(1540493, 280, -60, 500);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(530);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=284757871", "act_fast", -1, 1);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/27101202/Loop", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
                                                                                                            cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
                                                                                                            cm.npc_LeaveField("oid=284750599");
                                                                                                            cm.npc_LeaveField("oid=284750599");
                                                                                                            cm.npc_SetSpecialAction("oid=284757871", "eat_fast", -1, 1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1360);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/ItemPot.img/2000/eat", 100);
                                                                                                              cm.setNpcSpecialActionReset("oid=284757871");
                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 200, -150, -200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=284757871", -1);
                                                                                                                cm.npc_SetSpecialAction("oid=284757871", "awaking", -1, 1);
                                                                                                                cm.npcMove(1540493, -770, 0, 2000);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=284757871");
                                                                                                                    cm.npc_LeaveField("oid=284757871");
                                                                                                                    cm.sendNormalTalk_Bottom("它带着连接管道逃跑了。\r\n快去追！", 37, 1540490, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.updateInfoQuest(33240, "skip6=1;skip8=1;act5=350053100");
                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.cameraSwitch_CameraSwitchBack();
                                                                                                                      cm.setInGameDirectionMode(false, true, false);
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
                            }
                          }
                        }
                      }
                    }
                  }
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