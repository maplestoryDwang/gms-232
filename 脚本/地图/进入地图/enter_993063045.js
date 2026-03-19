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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -635, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(25, 99999);
          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(啊……眼睛逐渐合上了。)", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(真的……很难坚持……)", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(……)", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('咳……', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('喘不……上气……', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("身体……没法……！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("额……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(2, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("什么时候……？", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这里又是哪里！", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3003781, "oid=2310965", -735, 180, 14, -785, -685, 0, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310965", "summon", 0, 0);
                                              cm.npc_ChangeController(3003782, "oid=2310966", -335, 180, 9, -385, -285, 1, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310966", "summon", 0, 0);
                                              cm.npc_ChangeController(3003783, "oid=2310967", -935, 180, 3, -985, -885, 0, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310967", 'summon', 0, 0);
                                              cm.npc_ChangeController(3003784, "oid=2310968", -435, 180, 4, -485, -385, 1, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310968", "summon", 0, 0);
                                              cm.npc_ChangeController(3003785, "oid=2310969", -835, 180, 12, -885, -785, 0, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310969", "summon", 0, 0);
                                              cm.npc_ChangeController(3003786, "oid=2310970", -535, 180, 5, -585, -485, 1, false, 1000, false);
                                              cm.npc_SetSpecialAction("oid=2310970", "summon", 0, 0);
                                              cm.npc_SetSpecialAction("oid=2310965", "stand", -1, 1);
                                              cm.npc_SetSpecialAction("oid=2310966", "stand", -1, 1);
                                              cm.npc_SetSpecialAction("oid=2310967", 'stand', -1, 1);
                                              cm.npc_SetSpecialAction("oid=2310968", 'stand', -1, 1);
                                              cm.npc_SetSpecialAction("oid=2310969", "stand", -1, 1);
                                              cm.npc_SetSpecialAction("oid=2310970", "stand", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('不可以……', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("谁都救不了……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我……这么没用吗……？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我接下来该怎么做……？", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_Hero9(0, 1000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.setAmbience("SoundEff.img/BM2/voiceBstand", 60, 50);
                                                              cm.fieldEffect_Hero9(80, 1000);
                                                              cm.sendNormalTalk_Bottom("#face1##fs10#因为你……", 37, 3003767, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('我能听到……声音……', 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1##fs13#无法逃离……", 37, 3003767, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("一直在我脑海里……", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1##fs16#现在马上……一切……", 37, 3003767, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.playSoundEffDirectly("SoundEff.img/BM2/voiceBstand");
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                                                                          cm.npc_ChangeController(3003734, "oid=2311005", -735, 180, 14, -785, -685, 0, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311005", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3003734, "oid=2311006", -335, 180, 9, -385, -285, 1, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311006", 'summon', 0, 0);
                                                                          cm.npc_ChangeController(3003735, "oid=2311007", -935, 180, 3, -985, -885, 0, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311007", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3003735, "oid=2311008", -435, 180, 4, -485, -385, 1, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311008", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3003736, "oid=2311009", -835, 180, 12, -885, -785, 0, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311009", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3003736, "oid=2311010", -535, 180, 5, -585, -485, 1, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=2311010", "summon", 0, 0);
                                                                          cm.npc_SetSpecialAction("oid=2311005", 'stand', -1, 1);
                                                                          cm.npc_SetSpecialAction("oid=2311006", 'stand', -1, 1);
                                                                          cm.npc_SetSpecialAction("oid=2311007", "stand", -1, 1);
                                                                          cm.npc_SetSpecialAction("oid=2311008", "stand", -1, 1);
                                                                          cm.npc_SetSpecialAction("oid=2311009", 'stand', -1, 1);
                                                                          cm.npc_SetSpecialAction("oid=2311010", "stand", -1, 1);
                                                                          cm.npc_LeaveField("oid=2310965");
                                                                          cm.npc_LeaveField("oid=2310965");
                                                                          cm.npc_LeaveField("oid=2310966");
                                                                          cm.npc_LeaveField("oid=2310966");
                                                                          cm.npc_LeaveField("oid=2310967");
                                                                          cm.npc_LeaveField("oid=2310967");
                                                                          cm.npc_LeaveField("oid=2310968");
                                                                          cm.npc_LeaveField("oid=2310968");
                                                                          cm.npc_LeaveField("oid=2310969");
                                                                          cm.npc_LeaveField("oid=2310969");
                                                                          cm.npc_LeaveField("oid=2310970");
                                                                          cm.npc_LeaveField("oid=2310970");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("不可以……", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("不是我的意志……", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("不是……我的错……", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("逃离……", 57, 0, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('不可以！！！！！', 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                      cm.forceStartQuest(35721, '');
                                                                                                      cm.npc_LeaveField("oid=2311005");
                                                                                                      cm.npc_LeaveField("oid=2311005");
                                                                                                      cm.npc_LeaveField("oid=2311006");
                                                                                                      cm.npc_LeaveField("oid=2311006");
                                                                                                      cm.npc_LeaveField("oid=2311007");
                                                                                                      cm.npc_LeaveField("oid=2311007");
                                                                                                      cm.npc_LeaveField("oid=2311008");
                                                                                                      cm.npc_LeaveField("oid=2311008");
                                                                                                      cm.npc_LeaveField("oid=2311009");
                                                                                                      cm.npc_LeaveField("oid=2311009");
                                                                                                      cm.npc_LeaveField("oid=2311010");
                                                                                                      cm.npc_LeaveField("oid=2311010");
                                                                                                      cm.dispose();
                                                                                                      cm.warp(450011220, 5, false);
                                                                                                      cm.setStandAloneMode(false);
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
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}