var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.npc_ChangeController(1531021, "oid=5566567", 40, -214, 57, -10, 90, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566567", 'summon', 0, 0);
      cm.npc_ChangeController(1531022, "oid=5566568", 211, -215, 57, 161, 261, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566568", "summon", 0, 0);
      cm.npc_ChangeController(1531023, "oid=5566569", 382, -215, 58, 332, 432, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566569", "summon", 0, 0);
      cm.npc_ChangeController(1531024, "oid=5566570", 563, -215, 58, 513, 613, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566570", "summon", 0, 0);
      cm.npc_ChangeController(1531025, "oid=5566571", 740, -215, 59, 690, 790, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566571", 'summon', 0, 0);
      cm.npc_ChangeController(1531001, "oid=5566572", 1008, -215, 59, 958, 1058, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566572", "summon", 0, 0);
      cm.npc_ChangeController(1531021, "oid=5566573", 40, -214, 57, -10, 90, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566573", "summon", 0, 0);
      cm.npc_ChangeController(1531022, "oid=5566574", 211, -215, 57, 161, 261, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566574", "summon", 0, 0);
      cm.npc_ChangeController(1531023, "oid=5566575", 382, -215, 58, 332, 432, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566575", "summon", 0, 0);
      cm.npc_ChangeController(1531024, "oid=5566576", 563, -215, 58, 513, 613, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566576", 'summon', 0, 0);
      cm.npc_ChangeController(1531025, "oid=5566577", 740, -215, 59, 690, 790, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=5566577", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 850, -200);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === O++) {
          cm.npc_ChangeController(1531002, "oid=5566580", 600, -215, 58, 550, 650, 0, true, 1000, false);
          cm.npc_SetSpecialAction("oid=5566580", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === O++) {
            cm.npc_setForceFlip("oid=5566572", -1);
            cm.npc_SetForceMove("oid=5566580", 1, 150, 100);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("#face2#哎哟？走岔开了啊，\r\n凯内西斯刚刚去学校找尤娜你了呢。", 37, 1531001, false, true);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face3#正好，\r\n在#h0#回来之前，就在这里等着吧。", 37, 1531002, true, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face2#有什么事情吗，尤娜？你看上去心情不是很好。", 37, 1531001, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face3#我去了一趟教务室，\r\n老师让我转告#h0#，如果他再不去学校上课，可就难毕业了。", 37, 1531002, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("啊……这么说来。", 37, 1531001, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face2#老实说，在这个问题上我是站在凯内西斯一边的，\r\n因为我也不上学。", 37, 1531001, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face2#……话虽如此。", 37, 1531002, true, true);
                        } else {
                          if (status === O++) {
                            cm.sendNormalTalk_Bottom("#face2#你理解一下凯内西斯吧，\r\n他是想要尽快能够解决好陷坑的问题。", 37, 1531001, true, true);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("虽然现在已经阻止事态扩大，\r\n但谁知道白魔法师又会捅出什么篓子来……", 37, 1531001, true, true);
                            } else {
                              if (status === O++) {
                                cm.userSetFieldFloating(331001400, 10, 10, 20);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === O++) {
                                  cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                } else {
                                  if (status === O++) {
                                    cm.effect_NormalSpeechBalloon("#fn黑体##fs23##r！！！", 0, 0, 0, 1500, 1, 0, -10, 0, 4, 1531001, null, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("#fn黑体##fs23##r！！！", 0, 0, 0, 1500, 1, 0, -20, 0, 4, 1531002, null, cm.getPlayer().getId());
                                    cm.userSetFieldFloating(331001400, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                                  } else {
                                    if (status === O++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                    } else {
                                      if (status === O++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 65, -300);
                                      } else {
                                        if (status === O++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === O++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === O++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                                            } else {
                                              if (status === O++) {
                                                cm.sendNormalTalk_Bottom("#face4#……不会祸从口出吧？", 37, 1531002, false, true);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("#face1#额……嗯……\r\n别担心，那是防弹玻璃，不会碎的……", 37, 1531001, true, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.userSetFieldFloating(331001400, 10, 10, 20);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                                                      cm.userSetFieldFloating(331001400, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 900, -250);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.npc_SetSpecialAction("oid=5566567", "break", -1, 0);
                                                          cm.npc_SetSpecialAction("oid=5566573", "broken", -1, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(450);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.effect_Voice("SoundEff.img/windowcrash1", 100);
                                                            cm.npc_SetSpecialAction("oid=5566568", "break", -1, 0);
                                                            cm.npc_SetSpecialAction("oid=5566574", "broken", -1, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(450);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.effect_Voice("SoundEff.img/windowcrash1", 100);
                                                              cm.npc_SetSpecialAction("oid=5566569", "break", -1, 0);
                                                              cm.npc_SetSpecialAction("oid=5566575", 'broken', -1, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(450);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.effect_Voice("SoundEff.img/windowcrash1", 100);
                                                                cm.npc_SetSpecialAction("oid=5566570", "break", -1, 0);
                                                                cm.npc_SetSpecialAction("oid=5566576", 'broken', -1, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(450);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.effect_Voice("SoundEff.img/windowcrash1", 100);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                  cm.npc_SetSpecialAction("oid=5566571", 'break', -1, 0);
                                                                  cm.npc_SetSpecialAction("oid=5566577", "broken", -1, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.effect_Voice("SoundEff.img/windowcrash1", 100);
                                                                    cm.npc_ChangeController(1531020, "oid=5566757", 670, -195, 63, 620, 720, 0, true, 1500, false);
                                                                    cm.npc_SetSpecialAction("oid=5566757", 'summon', 0, 0);
                                                                    cm.npcMove(1531020, 0, -30, 0);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm43/Kinesis Theme II", 0, 0);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 800, -200);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.npc_LeaveField("oid=5566580");
                                                                          cm.npc_LeaveField("oid=5566580");
                                                                          cm.npc_SetSpecialAction("oid=5566757", "swallow", -1, 0);
                                                                          cm.npc_SetSpecialAction("oid=5566572", "down", -1, 0);
                                                                          cm.npc_setForceFlip("oid=5566572", 1);
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                            } else {
                                                                              if (status === O++) {
                                                                                cm.setNpcSpecialActionReset("oid=5566757");
                                                                                cm.npc_SetSpecialAction("oid=5566757", "runaway", -1, 0);
                                                                                cm.sendNormalTalk_Bottom("#face1#啊……不可以！！", 37, 1531001, false, true);
                                                                              } else {
                                                                                if (status === O++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === O++) {
                                                                                    cm.npc_setForceFlip("oid=5566757", -1);
                                                                                    cm.setNpcSpecialActionReset("oid=5566757");
                                                                                    cm.npc_SetForceMove("oid=5566757", -1, 400, 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                  } else {
                                                                                    if (status === O++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === O++) {
                                                                                        cm.npc_LeaveField("oid=5566757");
                                                                                        cm.npc_LeaveField("oid=5566757");
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 3000, 3000, 990, -170);
                                                                                      } else {
                                                                                        if (status === O++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#额……尤娜！！！尤娜！！", 37, 1531001, false, true);
                                                                                        } else {
                                                                                          if (status === O++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#杰？杰？发生什么事情了！！！现在这是什么巨大的声音？！！！", 37, V, true, true);
                                                                                          } else {
                                                                                            if (status === O++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#凯内西斯……尤娜有危险，赶紧回来吧。", 37, 1531001, true, true);
                                                                                            } else if (status === O++) {
                                                                                              cm.forceCompleteQuest(22831);
                                                                                              cm.gainExp(41400);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.npc_LeaveField("oid=5566567");
                                                                                              cm.npc_LeaveField("oid=5566567");
                                                                                              cm.npc_LeaveField("oid=5566568");
                                                                                              cm.npc_LeaveField("oid=5566568");
                                                                                              cm.npc_LeaveField("oid=5566569");
                                                                                              cm.npc_LeaveField("oid=5566569");
                                                                                              cm.npc_LeaveField("oid=5566570");
                                                                                              cm.npc_LeaveField("oid=5566570");
                                                                                              cm.npc_LeaveField("oid=5566571");
                                                                                              cm.npc_LeaveField("oid=5566571");
                                                                                              cm.npc_LeaveField("oid=5566572");
                                                                                              cm.npc_LeaveField("oid=5566572");
                                                                                              cm.npc_LeaveField("oid=5566573");
                                                                                              cm.npc_LeaveField("oid=5566573");
                                                                                              cm.npc_LeaveField("oid=5566574");
                                                                                              cm.npc_LeaveField("oid=5566574");
                                                                                              cm.npc_LeaveField("oid=5566575");
                                                                                              cm.npc_LeaveField("oid=5566575");
                                                                                              cm.npc_LeaveField("oid=5566576");
                                                                                              cm.npc_LeaveField("oid=5566576");
                                                                                              cm.npc_LeaveField("oid=5566577");
                                                                                              cm.npc_LeaveField("oid=5566577");
                                                                                              cm.dispose();
                                                                                              cm.warp(331001500, 0, true);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}