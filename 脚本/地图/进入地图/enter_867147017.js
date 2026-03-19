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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401123, "oid=17459723", 460, -470, 5, 410, 510, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=17459723", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=17459724", 520, -770, 41, 470, 570, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=17459724", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 400, -400]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=17459723", -1, 200, 100);
          cm.npc_SetForceMove("oid=17459724", -1, 400, 100);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
          cm.sendNewEffects(12, [5000, -500, -400, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("好……好黑啊。", 37, 9401029, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(12, [0, 100, -400, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=17459723"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                      cm.npc_setForceFlip("oid=17459723", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你们……有没有听见什么声音？", 37, 9401029, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9401055, "oid=17460599", 460, -470, 5, 410, 510, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=17460599", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=17460599", -1, 100, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=17459723", 1);
                              cm.npc_setForceFlip("oid=17459724", 1);
                              cm.sendNormalTalk_Bottom('哇啊啊！', 37, 9401029, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=17459724", 1, 150, 300);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=17460599", 'die1', 1, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.Npc_Fadeout("oid=17460599", 0, 1000);
                                        cm.npc_setForceFlip("oid=17459724", -1);
                                        cm.sendNormalTalk_Bottom('打起精神！', 37, 9401030, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('谢，谢谢。', 37, 9401029, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(14, [3000, 2000, 1000, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(9401055, "oid=17461007", -100, -220, 7, -150, -50, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=17461007", 'summon', 0, 0);
                                                cm.npc_ChangeController(9401055, "oid=17461008", 0, -220, 7, -50, 50, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=17461008", "summon", 0, 0);
                                                cm.npc_ChangeController(9401055, "oid=17461009", 100, -220, 7, 50, 150, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=17461009", "summon", 0, 0);
                                                cm.npc_ChangeController(9401055, "oid=17461010", 200, -220, 8, 150, 250, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=17461010", 'summon', 0, 0);
                                                cm.npc_ChangeController(9401055, "oid=17461011", 300, -220, 8, 250, 350, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=17461011", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9401055, "oid=17461052", -220, 70, 22, -270, -170, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=17461052", "summon", 0, 0);
                                                  cm.npc_ChangeController(9401055, "oid=17461053", 400, -476, 4, 350, 450, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=17461053", "summon", 0, 0);
                                                  cm.npc_ChangeController(9401055, "oid=17461054", 400, -476, 4, 350, 450, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=17461054", "summon", 0, 0);
                                                  cm.npc_ChangeController(9401055, "oid=17461055", 80, 70, 23, 30, 130, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=17461055", "summon", 0, 0);
                                                  cm.npc_ChangeController(9401055, "oid=17461056", 180, 70, 3, 130, 230, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=17461056", 'summon', 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(9401055, "oid=17461080", 0, -450, 32, -50, 50, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=17461080", "summon", 0, 0);
                                                    cm.npc_ChangeController(9401055, "oid=17461081", -100, -450, 32, -150, -50, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=17461081", "summon", 0, 0);
                                                    cm.npc_ChangeController(9401055, "oid=17461082", -200, -450, 32, -250, -150, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=17461082", "summon", 0, 0);
                                                    cm.npc_ChangeController(9401055, "oid=17461083", 500, -450, 41, 450, 550, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=17461083", "summon", 0, 0);
                                                    cm.sendNormalTalk_Bottom("该死，数量太多了！", 37, 9401030, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.eventSKill(0);
                                                      cm.dispose();
                                                      var O = cm.getEventManager("深渊远征队_教程4");
                                                      O.startInstance(cm.getPlayer());
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.forceStartQuest(64774, '');
                                                      cm.npc_LeaveField("oid=17459723");
                                                      cm.npc_LeaveField("oid=17459723");
                                                      cm.npc_LeaveField("oid=17459724");
                                                      cm.npc_LeaveField("oid=17459724");
                                                      cm.npc_LeaveField("oid=17460599");
                                                      cm.npc_LeaveField("oid=17460599");
                                                      cm.npc_LeaveField("oid=17461007");
                                                      cm.npc_LeaveField("oid=17461007");
                                                      cm.npc_LeaveField("oid=17461008");
                                                      cm.npc_LeaveField("oid=17461008");
                                                      cm.npc_LeaveField("oid=17461009");
                                                      cm.npc_LeaveField("oid=17461009");
                                                      cm.npc_LeaveField("oid=17461010");
                                                      cm.npc_LeaveField("oid=17461010");
                                                      cm.npc_LeaveField("oid=17461011");
                                                      cm.npc_LeaveField("oid=17461011");
                                                      cm.npc_LeaveField("oid=17461052");
                                                      cm.npc_LeaveField("oid=17461052");
                                                      cm.npc_LeaveField("oid=17461053");
                                                      cm.npc_LeaveField("oid=17461053");
                                                      cm.npc_LeaveField("oid=17461054");
                                                      cm.npc_LeaveField("oid=17461054");
                                                      cm.npc_LeaveField("oid=17461055");
                                                      cm.npc_LeaveField("oid=17461055");
                                                      cm.npc_LeaveField("oid=17461056");
                                                      cm.npc_LeaveField("oid=17461056");
                                                      cm.npc_LeaveField("oid=17461080");
                                                      cm.npc_LeaveField("oid=17461080");
                                                      cm.npc_LeaveField("oid=17461081");
                                                      cm.npc_LeaveField("oid=17461081");
                                                      cm.npc_LeaveField("oid=17461082");
                                                      cm.npc_LeaveField("oid=17461082");
                                                      cm.npc_LeaveField("oid=17461083");
                                                      cm.npc_LeaveField("oid=17461083");
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}