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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004001, "oid=7141542", 45, 113, 4, -5, 95, 1, true, false);
      cm.npc_SetSpecialAction("oid=7141542", "summon", 0, 0);
      cm.npc_ChangeController(3001259, "oid=7141543", 910, 113, 9, 860, 960, 1, false, false);
      cm.npc_SetSpecialAction("oid=7141543", 'summon', 0, 0);
      cm.npc_ChangeController(3004014, "oid=7141544", -75, 113, 4, -125, -25, 0, true, false);
      cm.npc_SetSpecialAction("oid=7141544", "summon", 0, 0);
      cm.npc_ChangeController(3004002, "oid=7141545", 233, 113, 5, 183, 283, 1, true, false);
      cm.npc_SetSpecialAction("oid=7141545", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#face0#(咳，黑鸦，这该死的家伙……！！)", 37, 3001259, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion9", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#救命……", 37, 3004014, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction21.img/SavageT/illust/3", 0, 150, 0, -80, 12, 4, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#救我……", 37, 3004014, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#（机器……！！）", 37, 3001259, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 150, 0, 0, 0, 0, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 250);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -37, 96);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=7141544", 'die1', 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#呃呃……", 37, 3004002, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 927, 96);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=7141544");
                                      cm.npc_LeaveField("oid=7141544");
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#(该死的！果然和黑鸦那家伙无关！)", 37, 3001259, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#(如果你不能安静点出去……！)", 37, 3001259, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#天啊？是乌鸦吗？", 37, 3004001, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#(咳……)", 37, 3001259, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#初次见面，你好！", 37, 3004001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我叫塞妮娅。", 37, 3004001, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我叫#fs18##r塞妮娅安哥拉#k。", 37, 3004001, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.gainExp(9487412);
                                                              cm.dispose();
                                                              cm.warp(402000450, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setStandAloneMode(false);
                                                              cm.forceCompleteQuest(37117);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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