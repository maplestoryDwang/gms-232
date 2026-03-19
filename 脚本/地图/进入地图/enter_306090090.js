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
      cm.Hidden_background("DLep4_door1", 1, 1, 0, 0);
      cm.Hidden_background("DLep4_door2", 1, 0, 0, 0);
      cm.setAmbience("SoundEff.img/DLep4/war2", 80, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1075, 378);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("队长！！敌人从#b东侧城墙#k冲进来了！！", 37, 2550007, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这样下去，城墙撑不了多久就会倒塌了。", 37, 2550007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("难道，被敌人发现了？！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呵呵呵……太轻松了嘛？", 37, 2550006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("东侧城墙倒塌了！！敌人冲进来了！！", 37, 2550007, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不行！坚持住！不要逃跑！！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('城门破了！！', 37, 2550007, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.Hidden_background("DLep4_door1", 1, 0, 0, 0);
                              cm.Hidden_background("DLep4_door2", 1, 1, 0, 0);
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2550010, "oid=1771860", 1090, 480, 59, 1040, 1140, 0, true, 1000, false);
                                cm.npc_SetSpecialAction("oid=1771860", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#fs20#咳咳咳！！咳咳！", 37, 2550010, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#fs20#冲啊！！！", 37, 2550010, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(2550010, "oid=1771885", 1190, 480, 60, 1140, 1240, 0, true, 1000, false);
                                      cm.npc_SetSpecialAction("oid=1771885", 'summon', 0, 0);
                                      cm.npc_ChangeController(2550010, "oid=1771886", 990, 480, 58, 940, 1040, 0, true, 1000, false);
                                      cm.npc_SetSpecialAction("oid=1771886", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(2550019, "oid=1771939", 1032, 300, 55, 982, 1082, 1, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1771939", 'summon', 0, 0);
                                        cm.npc_ChangeController(2550019, "oid=1771940", 1110, 300, 55, 1060, 1160, 0, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1771940", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(2550010, "oid=1771941", 1300, 480, 61, 1250, 1350, 0, true, 1000, false);
                                          cm.npc_SetSpecialAction("oid=1771941", "summon", 0, 0);
                                          cm.npc_ChangeController(2550010, "oid=1771942", 890, 480, 67, 840, 940, 0, true, 1000, false);
                                          cm.npc_SetSpecialAction("oid=1771942", 'summon', 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('敌人扑过来了！！', 37, 2550007, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('咳！', 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("队长，后面！！", 37, 2550007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metalcut", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else if (status === V++) {
                                                    cm.npc_LeaveField("oid=1771860");
                                                    cm.dispose();
                                                    cm.warp(306050300, 1, false);
                                                    cm.npc_LeaveField("oid=1771860");
                                                    cm.npc_LeaveField("oid=1771885");
                                                    cm.npc_LeaveField("oid=1771885");
                                                    cm.npc_LeaveField("oid=1771886");
                                                    cm.npc_LeaveField("oid=1771886");
                                                    cm.npc_LeaveField("oid=1771939");
                                                    cm.npc_LeaveField("oid=1771939");
                                                    cm.npc_LeaveField("oid=1771940");
                                                    cm.npc_LeaveField("oid=1771940");
                                                    cm.npc_LeaveField("oid=1771941");
                                                    cm.npc_LeaveField("oid=1771941");
                                                    cm.npc_LeaveField("oid=1771942");
                                                    cm.npc_LeaveField("oid=1771942");
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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