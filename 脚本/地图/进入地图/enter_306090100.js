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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(2550005, "oid=1774143", 1180, 457, 57, 1130, 1230, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1774143", "summon", 0, 0);
      cm.npc_ChangeController(2550006, "oid=1774144", 1006, 457, 64, 956, 1056, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1774144", "summon", 0, 0);
      cm.npcMove(2550006, 0, 10, 0);
      cm.fieldEffect_PlayBGM("Ambience.img/snowwave", 0, 0);
      cm.fieldEffect_Hero9(0, 10);
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
          cm.sendNormalTalk_Bottom('那家伙……是人类吗？', 37, 2550006, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('狮子王？你看哪里呢？', 37, 2550006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("他们好像打算在那上面动什么手脚。", 37, 2550005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('想要炸断大桥……吗？', 37, 2550006, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_Hero9(100, 3000);
                    cm.userSetFieldFloating(306090100, 5, 5, 10);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('切，撤军吧，狮子王！', 37, 2550006, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那才是束手就擒呢。\r\n\r\n#fs22##r全员突击！！", 37, 2550005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#fs16#你！！你难道想让黑魔法师大人给予的军队全军覆没吗？", 37, 2550006, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_Hero9(0, 1000);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Ambience.img/snowwave2", 0, 0);
                                cm.fieldEffect_Hero9(30, 3000);
                                cm.sendNormalTalk_Bottom("#fs20##r是雪崩！！！", 37, 2550007, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是雪崩！全员撤退！快离开危险区域！！", 37, 2550007, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('队长，快躲开！！！', 37, 2550007, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Hero9(100, 2000);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep4/7", 0, 500, 0, -75, 0, 4, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_Hero9(0, 2000);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("队长……？！！", 37, 2550007, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("被雪崩卷走了！", 37, 2550007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('队长！！', 37, 2550007, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/snow2", 100);
                                                      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/DLep4/3", 0, 500, 0, -75, 0, 4, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 100, 0, 0, 0, 0, 0);
                                                        cm.sendNormalTalk_Bottom("咳咳咳咳！！", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('队长！！！', 37, 2550007, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("还有……残余的……敌人……保持……咳咳！阵型……", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("阵、阵型！阵型不要乱了！！！", 37, 2550007, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("烽火……咳咳！还剩多久？！！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("还有半个小时！敌人攻过来了！", 37, 2550007, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("是时候……回归故乡了啊……", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("队长？", 37, 2550007, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                          cm.sendNormalTalk_Bottom("战斗到最后一刻吧！所有人，冲啊！！", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("冲啊！！", 37, 2550007, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_Hero9(50, 2000);
                                                                              cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else if (status === V++) {
                                                                              cm.dispose();
                                                                              cm.warp(306090110, 0, true);
                                                                              cm.eventSKill(0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.npc_LeaveField("oid=1774143");
                                                                              cm.npc_LeaveField("oid=1774143");
                                                                              cm.npc_LeaveField("oid=1774144");
                                                                              cm.npc_LeaveField("oid=1774144");
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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