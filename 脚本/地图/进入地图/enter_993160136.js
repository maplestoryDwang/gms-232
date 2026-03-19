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
      cm.gainSkillBuff(80002824);
      cm.npc_ChangeController(3001682, "oid=375541", -912, 29, 13, -938, -838, 4, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375542", -717, 29, 29, -777, -677, 5, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375543", -66, 29, 18, -110, -10, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375544', -436, 29, 25, -436, -336, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375545', -482, 29, 26, -519, -419, 3, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/cloud", 100);
      cm.setAmbience("Ambience.img/cloud_ambi", 200, 60);
      cm.npc_ChangeController(3001661, "oid=2979299", 850, -38, 40, 800, 900, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2979299", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -969, -873);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -140, -400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4500);
              cm.effect_Text(["#fn黑体##fs18#俊秀法师的寺院入口"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#关键是能让我见到俊秀法师，\r\n虽说我是个解决师，可再怎么说我也只是个外人。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#啊，如果连那些修行者都是一伙的……\r\n啊，修行者过来了呢。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 501, -35);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2979299", -1, 250, 180);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2979299", "special2", -1, 1);
                              cm.fieldEffect_PlayBGM("Bgm53/CreepyTemple", 0, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/mouse", 100);
                              cm.sendNormalTalk_Bottom("#face0#叽叽……", 37, 3001661, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=2979299");
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -140, -400);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face7#那该不会是……老鼠吧？明明都在捡掉在地上的东西吃嘛？\r\n寺院的修行者一定发生了什么。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#……这样可不行，还是偷偷进去尝试接近吧。\r\n另外还得确认一下寺院里发生了什么。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -440, -400);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=2979299");
                                                          cm.npc_LeaveField("oid=2979299");
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                          cm.npc_ChangeController(3001661, "oid=2979722", -141, 19, 19, -191, -91, 1, true, 0, false);
                                                          cm.npc_SetSpecialAction("oid=2979722", "summon", 0, 0);
                                                          cm.npc_SetSpecialAction("oid=2979722", 'special1', -1, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -141, 4);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                                  cm.inGameDirectionEvent_PushScaleInfo(4500, 0, 3000, 4500, -141, 150);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 2);
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
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                            } else if (status === V++) {
                                                                              cm.npc_LeaveField("oid=2979722");
                                                                              cm.npc_LeaveField("oid=2979722");
                                                                              cm.dispose();
                                                                              cm.warp(993160109, 0, false);
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}