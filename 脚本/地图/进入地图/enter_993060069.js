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
      cm.fieldEffect_Hero9(0, 1000);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.fieldEffect_Hero9(80, 1000);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_loop", 0, 0);
          cm.setAmbience("Ambience.img/warfare2", 80, 100);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003689, "oid=2206981", -4300, -550, 4, -4350, -4250, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206981", 'summon', 0, 0);
            cm.npc_ChangeController(3003688, "oid=2206982", -3700, -550, 4, -3750, -3650, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206982", 'summon', 0, 0);
            cm.npc_ChangeController(3003689, "oid=2206983", -3500, -550, 1, -3550, -3450, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206983", 'summon', 0, 0);
            cm.npc_ChangeController(3003688, "oid=2206984", -3350, -550, 1, -3400, -3300, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206984", "summon", 0, 0);
            cm.npc_ChangeController(3003688, "oid=2206985", -2900, -550, 1, -2950, -2850, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206985", "summon", 0, 0);
            cm.npc_ChangeController(3003689, "oid=2206986", -2300, -550, 2, -2350, -2250, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206986", "summon", 0, 0);
            cm.npc_ChangeController(3003688, "oid=2206987", -2150, -550, 2, -2200, -2100, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2206987", "summon", 0, 0);
            cm.inGameDirectionEvent_OneTimeAction(5, 999999);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2670, -460);
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
                  cm.userSetFieldFloating(993060069, 5, 5, 5);
                  cm.sendNormalTalk_Bottom("#face1#虽然在一点点前进……\r\n呃……但数量实在是太多了……", 37, 3003659, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(993060069, 0, 0, 0);
                      cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, -1350, -430);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#坚持不……下去了……", 37, 3003617, false, true);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(993060069, 10, 10, 10);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(993060069, 5, 5, 5);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion4", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                  cm.fieldEffect_Hero9(80, 500);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#……这，这是什么声音！？\r\n刚才远处传来了炮声！！", 37, 3003659, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion4", 100);
                                          cm.fieldEffect_Hero9(80, 500);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#呃……我好像也听见了……\r\n那个声音难道是……但是，不可能……", 37, 3003661, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#敌人的数量明显变少了！！\r\n到底发生了什么事？", 37, 3003667, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#……快，快看那边！！", 37, 3003661, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.playSoundEffDirectly("Ambience.img/warfare2");
                                                        cm.fieldEffect_Hero9(80, 500);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM1_Re/0", 0, 1500, 0, -80, 1, 4, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_RiserEdit", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#趁虚而入，直切要害，\r\n是反抗者的特长。", 37, 3003672, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#要是诺特勒斯号被波浪缠住，岂不是很没面子！？\r\n一个都别想跑！！", 37, 3003673, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#哦哦哦！！", 37, 3003675, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#联盟的翅膀……又回来了。", 37, 3003651, false, true);
                                                                      cm.effect_Voice("Voice4.img/BM1/DIR6/1", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#奇迹现在才刚刚开始。", 37, 3003651, false, true);
                                                                          cm.effect_Voice("Voice4.img/BM1/DIR6/2", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                        cm.forceCompleteQuest(35629);
                                                                                        cm.gainExp(171586691);
                                                                                        cm.npc_LeaveField("oid=2206981");
                                                                                        cm.npc_LeaveField("oid=2206981");
                                                                                        cm.npc_LeaveField("oid=2206982");
                                                                                        cm.npc_LeaveField("oid=2206982");
                                                                                        cm.npc_LeaveField("oid=2206983");
                                                                                        cm.npc_LeaveField("oid=2206983");
                                                                                        cm.npc_LeaveField("oid=2206984");
                                                                                        cm.npc_LeaveField("oid=2206984");
                                                                                        cm.npc_LeaveField("oid=2206985");
                                                                                        cm.npc_LeaveField("oid=2206985");
                                                                                        cm.npc_LeaveField("oid=2206986");
                                                                                        cm.npc_LeaveField("oid=2206986");
                                                                                        cm.npc_LeaveField("oid=2206987");
                                                                                        cm.npc_LeaveField("oid=2206987");
                                                                                        cm.dispose();
                                                                                        cm.warp(450009301, 0, false);
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