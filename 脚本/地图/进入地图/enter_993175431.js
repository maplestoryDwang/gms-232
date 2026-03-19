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
      cm.forceCompleteQuest(100447);
      cm.updateInfoQuest(100404, 'complete=1');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ProcessOnOffLayer('intro', "Effect/EventEffect.img/2019Halloween/startEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#2020 Haunted Mansion", "NewItem"], [100, 5000, 4, 0, 90, 1, 4, 3, 300, 150, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs60#Episode.3", "NewItem"], [100, 4000, 4, 0, 170, 1, 4, 3, 300, 150, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2300);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs25#哭泣的假面", "NewItem"], [100, 3000, 4, 0, 200, 1, 4, 3, 300, 150, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.npc_ChangeController(9062255, "oid=27498442", -200, 260, 1, -250, -150, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=27498442", "summon", 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -8, 250);
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
                      cm.sendNormalTalk_Bottom("#face0#34231...", 37, 9062260, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#34232...", 37, 9062260, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#34233...", 37, 9062260, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("怎么回事？", 57, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9062260, "oid=27499172", 160, 260, 1, 110, 210, 1, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=27499172", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那里……是谁？\r\n我还有好一会儿才能数到#b10亿#k呢……", 37, 9062260, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.npc_SetForceMove("oid=27499172", -1, 100, 30);
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#干什么？\r\n#b#h0##k 为什么要逃跑！", 37, 9062255, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("像那样一瘸一拐地靠近当然会想要跑了！", 57, 0, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#没事啦，对方不过就是个#b小鬼幽灵#k！", 37, 9062255, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不过是个幽灵……\r\n幽灵可不是说见就能见到的。", 57, 0, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不过……那个客人……为什么没有在动呢？", 37, 9062255, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("就是说……怎么一动不动了？", 57, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我……没有力气……动不……了……", 37, 9062260, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("为什么会没有力气呢？", 57, 0, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#要想恢复力气……\r\n就需要……#b滑溜溜的液体#k和……#b滴溜溜打转的东西#k……", 37, 9062260, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你说什么？", 57, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##r滑溜溜#k的…… #r滴……溜溜……#k……", 37, 9062260, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("不是，我问不是因为没有听到……", 57, 0, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 9062255, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#r滑溜溜#k……#r滴溜溜#k……", 57, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##h0#\r\n这个客人怎么看都好像和之前见到客人#b有些不一样#k，对吧？", 37, 9062255, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("他到底要我们找什么东西？", 57, 0, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#他说要恢复力气……\r\n啊，说不定是……！", 37, 9062255, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你想到什么了吗？", 57, 0, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.npc_LeaveField("oid=27498442");
                                                                            cm.npc_LeaveField("oid=27499172");
                                                                            cm.dispose();
                                                                            cm.warp(993175430, 0, false);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}