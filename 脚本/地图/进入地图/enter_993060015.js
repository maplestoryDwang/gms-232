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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003651, "oid=2200518", -1310, 80, 15, -1360, -1260, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200518", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1300, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2200518", 1, 280, 120);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 280);
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1000, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#发现预言书之后，\r\n女皇陛下每天晚上都会被十字军们惨死的噩梦折磨。", 37, 3003651, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#没人知道这只是因为担心而做的噩梦，\r\n还是女皇陛下的预知力发现的不好征兆……", 37, 3003651, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这样的决定必然会付出巨大的牺牲。\r\n虽然我们别无选择。", 37, 3003651, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -280, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm45/Pain And Sorrow", 0, 0);
                              cm.playSoundEffDirectly("Ambience.img/night");
                              cm.npc_ChangeController(3003655, "oid=2200530", -290, 80, 18, -340, -240, 1, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=2200530", 'summon', 0, 0);
                              cm.npc_ChangeController(3003651, "oid=2200531", 450, 80, 8, 400, 500, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2200531", "summon", 0, 0);
                              cm.fieldEffect_BackgroundCanvas(0, 255, 180, 150, 1500, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 160);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2200531", -1, 480, 120);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -180, 160);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#又做噩梦了吗？", 37, 3003651, false, true);
                                              cm.effect_Voice("Voice4.img/BMpre/DIR1/1", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#……", 37, 3003655, true, true);
                                                cm.effect_Voice("Voice4.img/BMpre/DIR1/2", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#在怪物的攻击下，十字军们一个个倒下。\r\n大家都在拼命战斗，但是猛然抬头的时候却发现……", 37, 3003655, false, true);
                                                    cm.effect_Voice("Voice4.img/BMpre/DIR1/3", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#我好害怕。我把所有人都召唤到了残酷的战场，\r\n自己却没有保护他们的力量……", 37, 3003655, true, true);
                                                      cm.effect_Voice("Voice4.img/BMpre/DIR1/4", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#南哈特，像我这样懦弱的人……\r\n真的有资格决定所有人的命运吗？", 37, 3003655, true, true);
                                                        cm.effect_Voice("Voice4.img/BMpre/DIR1/5", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#如果那个不祥的预言变成现实，他们……", 37, 3003655, true, true);
                                                          cm.effect_Voice("Voice4.img/BMpre/DIR1/6", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#我们所有人都……", 37, 3003655, false, true);
                                                              cm.effect_Voice("Voice4.img/BMpre/DIR1/7", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#女皇陛下……", 37, 3003651, false, true);
                                                                  cm.effect_Voice("Voice4.img/BMpre/DIR1/8", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else if (status === V++) {
                                                                        cm.npc_LeaveField("oid=2200518");
                                                                        cm.npc_LeaveField("oid=2200518");
                                                                        cm.npc_LeaveField("oid=2200530");
                                                                        cm.npc_LeaveField("oid=2200530");
                                                                        cm.npc_LeaveField("oid=2200531");
                                                                        cm.npc_LeaveField("oid=2200531");
                                                                        cm.dispose();
                                                                        cm.warp(993060016, 0, false);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}