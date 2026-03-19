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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 300, -530);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3002128, "oid=35135384", 322, -87, 8, 272, 372, 1, true, false);
        cm.npc_SetSpecialAction("oid=35135384", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(100);
        cm.effect_Text(["#fn黑体##fs18#几年前，村外的狐狸谷"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 300, -135);
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
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#这是什么地方……走得太远了吗？……", 37, 3002128, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400255/Attack1", 200);
                    cm.npc_setForceFlip("oid=35135384", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=35135384", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=35135384", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=35135384", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Time Is Gold", 0, 0);
                            cm.sendNormalTalk_Bottom("#face3#呃……有奇怪的声音……我好怕……", 37, 3002128, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3002127, "oid=35137528", 102, -87, 4, 52, 152, 0, true, false);
                              cm.npc_SetSpecialAction("oid=35137528", "summon", 0, 0);
                              cm.npc_ChangeController(3002127, "oid=35137529", -18, -87, 3, -68, 32, 0, true, false);
                              cm.npc_SetSpecialAction("oid=35137529", 'summon', 0, 0);
                              cm.npc_ChangeController(3002127, "oid=35137530", 542, -87, 11, 492, 592, 1, true, false);
                              cm.npc_SetSpecialAction("oid=35137530", 'summon', 0, 0);
                              cm.npc_ChangeController(3002127, "oid=35137531", 662, -87, 14, 612, 712, 1, true, false);
                              cm.npc_SetSpecialAction("oid=35137531", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face9#哎呀！", 37, 3002128, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=35137528", 1, 100, 100);
                                  cm.npc_SetForceMove("oid=35137529", 1, 100, 100);
                                  cm.npc_SetForceMove("oid=35137530", -1, 100, 100);
                                  cm.npc_SetForceMove("oid=35137531", -1, 100, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#别，别过来！走开！", 37, 3002128, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#呜呜……好可怕……", 37, 3002128, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400255/Die", 200);
                                        cm.npc_SetSpecialAction("oid=35137528", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=35137529", 'die1', 0, 1);
                                        cm.npc_SetSpecialAction("oid=35137530", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=35137531", "die1", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=35137528");
                                          cm.npc_LeaveField("oid=35137528");
                                          cm.npc_LeaveField("oid=35137529");
                                          cm.npc_LeaveField("oid=35137529");
                                          cm.npc_LeaveField("oid=35137530");
                                          cm.npc_LeaveField("oid=35137530");
                                          cm.npc_LeaveField("oid=35137531");
                                          cm.npc_LeaveField("oid=35137531");
                                          cm.sendNormalTalk_Bottom("#face12#怎，怎么回事？", 37, 3002128, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayBGM("Bgm36.img/foxvillage", 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(1, 125, 125, 125, 3000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 3000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 3000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 3000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(6, 125, 125, 125, 3000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(7, 125, 125, 125, 3000, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face13#咦？周围……？", 37, 3002128, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3002121, "oid=35140235", 22, -87, 3, -28, 72, 1, false, 2000, false);
                                                cm.npc_SetSpecialAction("oid=35140235", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你没事吧？", 37, 3002121, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face13#你，你是谁？嗯？", 37, 3002128, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face12#难道……石像……你是……狐神？", 37, 3002128, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face12#我，我错了……！！！以后我会好好听大人们的话的！\r\n再也不会跑到村外来了！", 37, 3002128, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#别怕，我……#fc0xFFAAAAAA#（哎呀！）", 37, 3002121, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#呵呵，少年，别害怕。\r\n我来到这里，是为了保护珍贵的东西。", 37, 3002121, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face13#珍贵的东西……？", 37, 3002128, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你，还有尖耳狐狸村，对我来说是非常珍贵的东西。", 37, 3002121, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face13#我……对狐神来说……非常珍贵……？", 37, 3002128, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你能答应我，今后别再做太危险的事情吗？", 37, 3002121, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face13#和狐神的约定……", 37, 3002128, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#希望你小心身体，好好长大。\r\n还有，不管任何时候，都要保护好尖耳狐狸村……", 37, 3002121, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.Npc_Fadeout("oid=35140235", 0, 1000);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face12#狐神！狐神！", 37, 3002128, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face12#对我来说非常珍贵的东西……", 37, 3002128, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face12#对我来说非常珍贵的东西……是狐神！\r\n#b我答应您！我一定会……保护好尖耳狐狸村！", 37, 3002128, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.npc_LeaveField("oid=35140235");
                                                                                        cm.npc_LeaveField("oid=35140235");
                                                                                        cm.npc_LeaveField("oid=35135384");
                                                                                        cm.npc_LeaveField("oid=35135384");
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                      } else if (status === V++) {
                                                                                        cm.dispose();
                                                                                        cm.warp(410000100, 0);
                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.updateInfoQuest(34743, "talk=1");
                                                                                        cm.updateInfoQuest(34746, "talk=1");
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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