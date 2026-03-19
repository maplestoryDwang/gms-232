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
      cm.npc_ChangeController(1540472, "oid=34328", 468, 120, 4, 418, 468, 1, false, 0, false);
      cm.npc_ChangeController(1540472, "oid=34329", 557, 120, 6, 507, 607, 0, false, 0, false);
      cm.forceStartQuest(33168, '');
      cm.updateInfoQuest(33168, "faker=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.npc_ChangeController(1540558, "oid=22658004", 250, 57, 4, 200, 300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22658004", "summon", 0, 0);
      cm.npc_ChangeController(1540559, "oid=22658005", 128, 57, 3, 78, 178, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22658005", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=22658005", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 172, 157);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        selectionLog[100] = -1;
                        cm.askMenu_Bottom("哪边才是真的南哈特呢？\r\n#b\r\n#L0#左边 #l  #L1#右边 #l", 37, 1540446);
                      } else {
                        if (selectionLog[100] == -1) {
                          selectionLog[100] = e;
                        }
                        var O = 'action分支' + selectionLog[100];
                        eval(O)(f, E, e, V);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
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
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("你来啦, #h0#. ", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540559, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我抓住了变成我模样的变身术士。\r\n虽然在此过程中，有几名士兵受伤了……", 37, 1540451, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我们要去向女皇报告这件事吧。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=22658005", -1, 200, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=22658005");
                          cm.npc_LeaveField("oid=22658005");
                          cm.inGameDirectionEvent_SetHideEffect(1);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不行……不能把那个人带到女皇那里！", 37, 1540558, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.fieldEffect_SaveEff("orbis_mysticGate/bomb");
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_PlayMusic("SoundEff.img/blackHeaven/explosion5");
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_SaveEff("orbis_mysticGate/bomb1");
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_SaveEff("hillah/fail");
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(350020800, 1, true);
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
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
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
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=22658005"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('你还在思考什么？', 37, 1540451, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("南哈特不能在打架中获胜。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                        cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540559, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540558, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=22658005");
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/3110001/Use", 100);
                            cm.npc_ChangeController(1540460, "oid=278136095", 128, 57, 3, 78, 178, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=278136095", "summon", 0, 0);
                            cm.npc_SetSpecialAction("oid=278136095", "boom", 1500, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=278136095");
                              cm.npc_LeaveField("oid=278136095");
                              cm.npc_ChangeController(1540469, "oid=278138785", 128, 57, 3, 78, 178, 1, false, 0, false);
                              cm.npc_SetSpecialAction("oid=278138785", 'summon', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=278138785");
                                  cm.npc_LeaveField("oid=278138785");
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.addPopupSay(1540451, 2000, "请小心, 那家伙有非常可怕的必杀技!", '', 0);
                                      cm.dispose();
                                      var O = cm.getPlayer().getLevel();
                                      cm.spawnMobStats(8240039, 1, O * O * 10000, O * O * 100, 66, 120);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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