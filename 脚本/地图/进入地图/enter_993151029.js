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
      cm.npc_ChangeController(3004430, "oid=63725813", 200, 240, 42, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725813", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=63725814", -200, 180, 1, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725814", "summon", 0, 0);
      cm.npc_ChangeController(3004433, "oid=63725815", -500, 240, 31, -550, -450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725815", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=63725816", 470, 180, 15, 420, 520, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725816", 'summon', 0, 0);
      cm.npc_ChangeController(3004436, "oid=63725817", 720, 240, 45, 670, 770, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725817", 'summon', 0, 0);
      cm.npc_ChangeController(3003661, "oid=63725818", -700, 200, 5, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725818", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=63725819", -620, 290, 80, -670, -570, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725819", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=63725820", -800, 256, 50, -850, -750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725820", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63725821", 600, 220, 46, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725821", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63725822", -400, 180, 3, -450, -350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725822", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63725823", 500, 256, 67, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725823", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=63725824", 400, 290, 92, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725824", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=63725825", 800, 290, 90, 750, 850, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725825", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=63725826", 720, 180, 16, 670, 770, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725826", "summon", 0, 0);
      cm.npc_ChangeController(3004434, "oid=63725827", 0, 290, 91, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63725827", "summon", 0, 0);
      cm.npc_ChangeController(3004459, "oid=63725828", 0, 290, 91, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63725828", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -110, 240);
      cm.npc_SetSpecialAction("oid=63725813", "special22", -1, 1);
      cm.npc_SetSpecialAction("oid=63725814", 'special4', -1, 1);
      cm.npc_SetSpecialAction("oid=63725815", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=63725816", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=63725817", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63725818", "down", -1, 1);
      cm.npc_SetSpecialAction("oid=63725819", 'special5', -1, 1);
      cm.npc_SetSpecialAction("oid=63725820", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=63725821", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=63725822", "special5", -1, 1);
      cm.npc_SetSpecialAction("oid=63725823", "special5", -1, 1);
      cm.npc_SetSpecialAction("oid=63725824", "special5", -1, 1);
      cm.npc_SetSpecialAction("oid=63725825", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=63725826", 'special4', -1, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -600, 230);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 2000, 8000, -536, 230);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=63725828", 'special3', -1, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 720, 230);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 2000, 8000, 650, 230);
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
                              cm.inGameDirectionEvent_AskAnswerTime(6000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 250, 250);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npcMove(3004430, 0, -10, 0);
                                      cm.npcMove(3004434, 0, -52, 0);
                                      cm.npcMove(3004459, 0, -52, 0);
                                      cm.npcMove(3004431, 0, 10, 0);
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
                                            cm.sendNormalTalk_Bottom("#face5#圣剑……", 37, 3004430, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#不……可能……", 37, 3004430, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 3000, 8000, -50, 250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_Hero9(0, 3000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("呃呃……", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.onSetNpcScript("oid=63725827", 1, ["special", "special2"], [1, -1]);
                                                              cm.npc_SetSpecialAction("oid=63725828", "special", 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/ATake", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#封印石？！！", 37, 3004431, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_Hero9(100, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm53/OverloadOfLife", 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face0#我警告过你会造成重大伤亡的吧。", 37, 3004434, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=63725827", "special3", 1, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.onSetNpcScript("oid=63725828", 1, ["special2", "special3"], [1, -1]);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/ADestroy", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('#face4#！！', 37, 3004431, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=63725827", -1, 270, 55);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 3000, 4000, -260, 250);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=63725814", -1);
                                                                                      cm.sendNormalTalk_Bottom("#face2#你……到底……是谁……", 37, 3004431, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/8", 0, 2800, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust3/11", 0, 2800, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust3/12", 0, 1500, 0, 0, 20, 4, 0, -1, 0, -1, -1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#愚昧生命的无谓挣扎……", 37, 3004434, false, true);
                                                                                                cm.effect_Voice("Voice5.img/CH3/11_5", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#看上去太可怜了……", 37, 3004434, false, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/11_6", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_Hero9(0, 3000);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.warp(993151039, 0, true);
                                                                                                            cm.npc_LeaveField("oid=63725813");
                                                                                                            cm.npc_LeaveField("oid=63725813");
                                                                                                            cm.npc_LeaveField("oid=63725814");
                                                                                                            cm.npc_LeaveField("oid=63725814");
                                                                                                            cm.npc_LeaveField("oid=63725815");
                                                                                                            cm.npc_LeaveField("oid=63725815");
                                                                                                            cm.npc_LeaveField("oid=63725816");
                                                                                                            cm.npc_LeaveField("oid=63725816");
                                                                                                            cm.npc_LeaveField("oid=63725817");
                                                                                                            cm.npc_LeaveField("oid=63725817");
                                                                                                            cm.npc_LeaveField("oid=63725818");
                                                                                                            cm.npc_LeaveField("oid=63725818");
                                                                                                            cm.npc_LeaveField("oid=63725819");
                                                                                                            cm.npc_LeaveField("oid=63725819");
                                                                                                            cm.npc_LeaveField("oid=63725820");
                                                                                                            cm.npc_LeaveField("oid=63725820");
                                                                                                            cm.npc_LeaveField("oid=63725821");
                                                                                                            cm.npc_LeaveField("oid=63725821");
                                                                                                            cm.npc_LeaveField("oid=63725822");
                                                                                                            cm.npc_LeaveField("oid=63725822");
                                                                                                            cm.npc_LeaveField("oid=63725823");
                                                                                                            cm.npc_LeaveField("oid=63725823");
                                                                                                            cm.npc_LeaveField("oid=63725824");
                                                                                                            cm.npc_LeaveField("oid=63725824");
                                                                                                            cm.npc_LeaveField("oid=63725825");
                                                                                                            cm.npc_LeaveField("oid=63725825");
                                                                                                            cm.npc_LeaveField("oid=63725826");
                                                                                                            cm.npc_LeaveField("oid=63725826");
                                                                                                            cm.npc_LeaveField("oid=63725827");
                                                                                                            cm.npc_LeaveField("oid=63725827");
                                                                                                            cm.npc_LeaveField("oid=63725828");
                                                                                                            cm.npc_LeaveField("oid=63725828");
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