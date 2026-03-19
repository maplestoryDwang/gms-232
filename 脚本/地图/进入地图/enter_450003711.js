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
      cm.npc_ChangeController(3003250, "oid=48458", 429, 51, 6, 379, 479, 0, true, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 543, 70);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003245, "oid=1752610", 600, -10, 7, 550, 650, 1, false, false);
        cm.npc_SetSpecialAction("oid=1752610", "summon", 0, 0);
        cm.npc_ChangeController(3003257, "oid=1752611", 670, -10, 7, 620, 720, 1, true, false);
        cm.npc_SetSpecialAction("oid=1752611", "summon", 0, 0);
        cm.npc_ChangeController(3003257, "oid=1752612", 950, -10, 8, 900, 1000, 1, true, false);
        cm.npc_SetSpecialAction("oid=1752612", "summon", 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/Lacheln/1", 0, 2000, 0, -80, 15, 4, 1);
        cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/Lacheln/2", 0, 2000, 0, -80, 15, 4, 1);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm46.img/ClockTowerofNightmare", 0, 0);
          cm.sendNormalTalk_Bottom("#face1#你有没有试过在无法摆脱的梦境中不断挣扎？", 37, 3003250, false, true);
          cm.effect_Voice("Voice3.img/Lucid/Q1/0", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#即使知道是梦，却无法挣脱，那种无力感\r\n你有没有感受过？", 37, 3003250, true, true);
            cm.effect_Voice("Voice3.img/Lucid/Q1/1", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#当我划破无尽的黑暗，来到这个世界时，我突然明白了。", 37, 3003250, true, true);
              cm.effect_Voice("Voice3.img/Lucid/Q1/2", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#那个懦弱的我已经不复存在。", 37, 3003250, true, true);
                cm.effect_Voice("Voice3.img/Lucid/Q1/3", 128);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0);
                  cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/Lacheln/3", 0, 1500, 0, -80, 15, 4, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1500, 0, 0, 0, 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("饶，饶命……", 37, 3003245, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung", "oid=1752610"], [0, 0, -20, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                            cm.effect_Voice("Skill.img/1201005/Use", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=1752610", 'remove', -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung2", "oid=1752610"], [0, -20, -20, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("又… 一个家伙。", 37, 3003257, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                    cm.npc_SetForceMove("oid=1752612", -1, 200, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('你究竟是谁？', 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#欢迎你。这里是没有悲伤痛苦，只有梦想和幻象的城市拉克兰。", 37, 3003250, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#好了，希望你能做个美梦。", 37, 3003250, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung"], [0, 0, -20, 1, 0, 0, 0, 0]);
                                              cm.effect_Voice("Skill.img/1201005/Use", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("什么事情…………都没有发生？", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#天啊？你是？来了位可爱的客人啊。", 37, 3003250, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.sendNormalTalk_Bottom("#face0#天啊？", 37, 3003250, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#请快点逃跑！", 37, 3003251, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot0", 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot1", 200);
                                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot2", 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot0", 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot1", 200);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot2", 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot0", 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot1", 200);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot2", 200);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot0", 200);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/foot1", 200);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#该死该死…… ", 37, 3003250, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face6#让他逃跑了。", 37, 3003250, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("请… 请发发慈悲…", 37, 3003257, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Skill.img/1201005/Use", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8643000/Die", 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(450003100, 0, true);
                                                                                            cm.setInGameDirectionMode(false, true, false);
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