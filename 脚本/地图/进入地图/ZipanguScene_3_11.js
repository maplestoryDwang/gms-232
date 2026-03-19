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
      cm.forceCompleteQuest(58749);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("……我会改正！！", 37, 9111025, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……下次注意。", 37, 9111014, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……是！辛苦了！请休息吧。", 37, 9111025, true, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9111014, "oid=3655442", -830, -40, 11, -880, -780, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3655442", "summon", 0, 0);
                cm.npc_SetForceMove("oid=3655442", 1, 600, 120);
                cm.sendNormalTalk_Bottom("#face0#唉……没用的家伙。", 37, 9111014, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=3655442", -1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=3655442", 1, 100, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……亡灵队长！", 37, 9111014, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#(……是几天前那些外地人……)", 37, 9111014, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111014, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.npc_setForceFlip("oid=3655442", -1);
                                      cm.sendNormalTalk_Bottom("#face0#……亡灵队长！！", 37, 9111014, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=3655442", 1, 100, 70);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=3655442", -1, 100, 70);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#(……没错。必须马上阻止他们……)", 37, 9111014, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……废物！！！", 37, 9111014, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.sendNormalTalk_Bottom("#face0#亡灵队长！！！", 37, 9111014, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(9111025, "oid=3656373", -830, -40, 11, -880, -780, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=3656373", "summon", 0, 0);
                                                      cm.npc_SetForceMove("oid=3656373", 1, 300, 200);
                                                      cm.sendNormalTalk_Bottom("我来了！！你叫我吗！", 37, 9111025, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.npc_SetSpecialAction("oid=3655442", "attack", 0, 1);
                                                        cm.sendNormalTalk_Bottom("#face0#……你来晚了。", 37, 9111014, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3656373"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.sendNormalTalk_Bottom("对不起！我会改正！", 37, 9111025, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3656373"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face0#……快点，马上去增加圣地的警卫人数。", 37, 9111014, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3656373"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.sendNormalTalk_Bottom("……啊？警卫吗？", 37, 9111025, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#没错，你马上通知下去。很快就会有异教徒入侵。", 37, 9111014, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("…？！", 37, 9111025, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你把那帮家伙引到深处去。", 37, 9111014, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3656373"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.sendNormalTalk_Bottom("什么？？！你说的是那些入侵者吗？", 37, 9111025, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#对。防止他们逃跑。先把他们引到深处，我们再来个瓮中捉鳖。吼吼。", 37, 9111014, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("啊！！不愧是无头鬼大人！鬼点子比狐狸还多！！嘿嘿！！", 37, 9111025, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……赶紧出发！", 37, 9111014, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3656373"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.sendNormalTalk_Bottom('是，遵命！！', 37, 9111025, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField("oid=3656373");
                                                                                cm.npc_LeaveField("oid=3656373");
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3655442"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……哼，这下有好戏看喽。", 37, 9111014, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else if (status === V++) {
                                                                                      cm.npc_LeaveField("oid=3655442");
                                                                                      cm.npc_LeaveField("oid=3655442");
                                                                                      cm.eventSKill(0);
                                                                                      cm.warp(800022000, 0, false);
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