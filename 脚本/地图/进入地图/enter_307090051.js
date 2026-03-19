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
  var V = Math.floor(cm.getJob() / 100) == 101;
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(2560008, "oid=3595106", 0, -40, 7, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3595106", 'summon', 0, 0);
      cm.npc_ChangeController(2560012, "oid=3595107", -250, -40, 7, -300, -200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3595107", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon('艾……艾……', 1, 0, 0, 4500, 1, 0, 0, 0, 4, 2560012, null, cm.getPlayer().getId());
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face0#这家伙是怎么回事？是在……说话吗？", 37, 2560008, false, true);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon('艾……艾特……', 1, 0, 0, 4500, 1, 0, 0, 0, 4, 2560012, null, cm.getPlayer().getId());
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face0#不知道你在说什么。我的名字是纳因。", 37, 2560008, false, true);
                } else {
                  if (status === O++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                        cm.effect_PlayMusic("Skill.img/101000200/Use");
                      } else {
                        if (status === O++) {
                          cm.npc_ChangeController(2560012, "oid=3595418", -147, -120, 7, -197, -97, 0, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3595418", "summon", 0, 0);
                          cm.npc_LeaveField("oid=3595107");
                          cm.npc_LeaveField("oid=3595107");
                          cm.sendNormalTalk_Bottom("#face1#呃，干嘛，这家伙！突然扑了上来……", 37, 2560008, false, true);
                        } else {
                          if (status === O++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === O++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                            } else {
                              if (status === O++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                cm.effect_NormalSpeechBalloon("去……神殿……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2560012, null, cm.getPlayer().getId());
                              } else {
                                if (status === O++) {
                                  cm.Npc_Fadeout("oid=3595418", 0, 2500);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face1#怎么回事？明明没喝中和剂……但是身体……安然无恙？", 37, 2560008, false, true);
                                  } else {
                                    if (status === O++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face16#难道中和剂是……假的……？", 37, 2560008, false, true);
                                      } else {
                                        if (status === O++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === O++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, -222, -460);
                                          } else {
                                            if (status === O++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                            } else {
                                              if (status === O++) {
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === O++) {
                                                  cm.inGameDirectionEvent_Monologue("按照古老的传说，\r\n任何谎言都不能骗过#r月亮#k。", 0);
                                                  cm.effect_Voice("Voice3.img/DLep5/pangM/A_1.mp3", 100);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_Monologue(" ", 0);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.inGameDirectionEvent_Monologue("蓄满了雨水的乌云，\r\n深夜中的迷雾，都无法避开月亮。", 0);
                                                      cm.effect_Voice("Voice3.img/DLep5/pangM/A_2.mp3", 100);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_Monologue(" ", 0);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.inGameDirectionEvent_Monologue("因此如果有什么真的很想很想知道的东西，\r\n只要去问问月亮就行。", 1);
                                                          cm.effect_Voice("Voice3.img/DLep5/pangM/A_3.mp3", 100);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.inGameDirectionEvent_Monologue("对于真正想知道的那个问题，月亮必定会如实回答。", 0);
                                                            cm.effect_Voice("Voice3.img/DLep5/pangM/A_4.mp3", 100);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.inGameDirectionEvent_Monologue('', 1);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.inGameDirectionEvent_Monologue("即使……那个真相#r非常非常残酷#k……", 0);
                                                                cm.effect_Voice("Voice3.img/DLep5/pangM/A_5.mp3", 100);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.inGameDirectionEvent_Monologue('', 1);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.fieldEffect_Hero9(0, 2000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#迎月花香味……真让人怀念……", 37, 2560008, false, true);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.fieldEffect_Hero9(100, 0);
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm34/DimensionLibrary", 0, 0);
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              if (V) {
                                                                                cm.sendNormalTalk_Bottom("#face10#影牙……是的……是的。", 45, 1540421, false, true);
                                                                              } else {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                              }
                                                                            } else {
                                                                              if (status === O++) {
                                                                                if (V) {
                                                                                  cm.sendNormalTalk_Bottom("#face13#他是想告诉我中和剂是假的。\r\n所以我们才能从威尔的手中被解救出来。", 45, 1540422, true, true);
                                                                                } else {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                }
                                                                              } else {
                                                                                if (status === O++) {
                                                                                  if (V) {
                                                                                    cm.sendNormalTalk_Bottom("#face10#我完全忘记了。在那里你是我唯一的朋友。", 45, 1540421, true, true);
                                                                                  } else {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                  }
                                                                                } else {
                                                                                  if (status === O++) {
                                                                                    if (V) {
                                                                                      cm.sendNormalTalk_Bottom("#face13#这是没办法的事。不必自责。", 45, 1540422, true, true);
                                                                                    } else {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                    }
                                                                                  } else {
                                                                                    if (status === O++) {
                                                                                      if (V) {
                                                                                        cm.sendNormalTalk_Bottom("#face10#影牙……", 45, 1540421, true, true);
                                                                                      } else {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                      }
                                                                                    } else {
                                                                                      if (status === O++) {
                                                                                        if (V) {
                                                                                          cm.sendNormalTalk_Bottom("#face9#…………", 45, 1540421, true, true);
                                                                                        } else {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                        }
                                                                                      } else {
                                                                                        if (status === O++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === O++) {
                                                                                            cm.sendNormalTalk('故事到此结束了。', 5, 2500000, false, true);
                                                                                          } else {
                                                                                            if (status === O++) {
                                                                                              cm.sendNormalTalk("现在请回来吧，回到现实中真正的#h0#！", 5, 2500000, true, true);
                                                                                            } else if (status === O++) {
                                                                                              cm.forceCompleteQuest(32991);
                                                                                              cm.finishAchievement(1217);
                                                                                              cm.forceCompleteQuest(32989);
                                                                                              cm.updateInfoQuest(32989, "exp=1");
                                                                                              cm.gainExp(1091797);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.npc_LeaveField("oid=3595106");
                                                                                              cm.npc_LeaveField("oid=3595106");
                                                                                              cm.npc_LeaveField("oid=3595418");
                                                                                              cm.npc_LeaveField("oid=3595418");
                                                                                              cm.dispose();
                                                                                              cm.warp(302000000, 0, true);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}