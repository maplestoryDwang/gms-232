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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1110, -217);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(200);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(25, 999999);
        cm.npc_ChangeController(3003401, "oid=2008783", -1218, -278, 28, -1268, -1168, 0, false, false);
        cm.npc_SetSpecialAction("oid=2008783", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2008783", "special3", -1, 1);
        cm.npc_ChangeController(3003405, "oid=2008784", -1375, -223, 30, -1425, -1325, 0, true, false);
        cm.npc_SetSpecialAction("oid=2008784", "summon", 0, 0);
        cm.npc_ChangeController(3003417, "oid=2008785", -580, -400, 31, -630, -530, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008785", "summon", 0, 0);
        cm.npc_ChangeController(3003417, "oid=2008786", -700, -400, 31, -750, -650, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008786", "summon", 0, 0);
        cm.npc_ChangeController(3003416, "oid=2008787", -835, -400, 31, -885, -785, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008787", "summon", 0, 0);
        cm.npc_ChangeController(3003416, "oid=2008788", -950, -400, 31, -1000, -900, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008788", "summon", 0, 0);
        cm.npc_ChangeController(3003417, "oid=2008789", -1280, -122, 25, -1330, -1230, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008789", 'summon', 0, 0);
        cm.npc_ChangeController(3003417, "oid=2008790", -1460, -122, 25, -1510, -1410, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008790", 'summon', 0, 0);
        cm.npc_ChangeController(3003416, "oid=2008791", -1650, -172, 25, -1700, -1600, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008791", "summon", 0, 0);
        cm.npc_ChangeController(3003416, "oid=2008792", -1790, -172, 25, -1840, -1740, 1, false, false);
        cm.npc_SetSpecialAction("oid=2008792", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1200, -220);
      } else {
        if (status === V++) {
          cm.emotion(1, 999999);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你着急也没用。哈哈哈哈。", 37, 3003405, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("呃、呃呃呃……醒醒啊，塔纳……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 1500, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -1200, -220);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(940204011, 3, 3, 1);
                      cm.sendNormalTalk_Bottom("#face9#啊……咳呃呃！", 37, 3003400, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_Monologue("塔纳……", 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("塔纳……", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue('打起……精神……', 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face9#江……？", 37, 3003400, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/morass/JeanNTana2/0", 0, 1500, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/morass/JeanNTana2/1", 0, 1500, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('02', "Map/Effect3.img/morass/JeanNTana2/2", 0, 1500, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('03', "Map/Effect3.img/morass/JeanNTana2/3", 0, 1500, 0, -80, 12, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#没关系，塔纳。没关系……", 37, 3003406, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face9#怎么会……咳", 37, 3003400, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face9#江明明就……", 37, 3003400, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#是我！我是江，塔纳。", 37, 3003406, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face8#江？怎么会……", 37, 3003400, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我不是说了嘛。我会在你旁边。", 37, 3003406, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face7#江……", 37, 3003400, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我马上来帮你。", 37, 3003406, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(3003406, "oid=2008795", -1110, -278, 29, -1160, -1060, 1, true, false);
                                                            cm.npc_SetSpecialAction("oid=2008795", 'summon', 0, 0);
                                                            cm.npc_LeaveField("oid=2008783");
                                                            cm.npc_ChangeController(3003450, "oid=2008796", -1218, -278, 28, -1268, -1168, 1, true, false);
                                                            cm.npc_SetSpecialAction("oid=2008796", "summon", 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.userSetFieldFloating(940204011, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1200, -220);
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
                                                                    cm.sendNormalTalk_Bottom("#face0#怎么总能听到爆炸声？！到底是……？", 37, 3003405, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face7#阿卡伊勒……", 37, 3003400, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face7#你明明说了，是……操纵艾尔达的力量吧？", 37, 3003400, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哈，没用的！我也……", 37, 3003405, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
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
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -1130, -200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, -1160, -205);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, -1190, -200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, -1210, -205);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, -1230, -200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.userSetFieldFloating(940204011, 1, 1, 2);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.userSetFieldFloating(940204011, 2, 2, 5);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=2008796", 'special1', 3500, 1);
                                                                                                          cm.setAmbience("SoundEff.img/morass/tana_absorb", 100, 60);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.userSetFieldFloating(940204011, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, -1230, -200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.userSetFieldFloating(940204011, 2, 2, 5);
                                                                                                                cm.npc_SetSpecialAction("oid=2008785", "special", 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008786", 'special', 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008787", "special", 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008788", "special", 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008789", 'special', 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008790", 'special', 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008791", "special", 0, 1);
                                                                                                                cm.npc_SetSpecialAction("oid=2008792", "special", 0, 1);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/knight_die", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/knight_die", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/knight_die", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_LeaveField("oid=2008785");
                                                                                                                      cm.npc_LeaveField("oid=2008786");
                                                                                                                      cm.npc_LeaveField("oid=2008787");
                                                                                                                      cm.npc_LeaveField("oid=2008788");
                                                                                                                      cm.npc_LeaveField("oid=2008789");
                                                                                                                      cm.npc_LeaveField("oid=2008790");
                                                                                                                      cm.npc_LeaveField("oid=2008791");
                                                                                                                      cm.npc_LeaveField("oid=2008792");
                                                                                                                      cm.npc_SetSpecialAction("oid=2008796", "special2", -1, 1);
                                                                                                                      cm.playSoundEffDirectly("SoundEff.img/morass/tana_absorb");
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=2008796", 'special4', 0, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.setAmbience("SoundEff.img/morass/magic_ab", 100, 60);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/morass/Arkarium/2", 0, 1500, 0, -75, 0, 4, 1);
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不、不要啊！！！呃啊啊啊！！！", 37, 3003405, false, true);
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
                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.forceCompleteQuest(34268);
                                                                                                                                        cm.updateInfoQuest(34271, "02=h2;20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h1;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(450006440, 0, true);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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