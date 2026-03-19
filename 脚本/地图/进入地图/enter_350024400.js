var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getNumberFromQuestInfo(33178, 'r');
  var O = 'action' + V;
  eval(O)(f, E, e);
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1540468, "oid=22711561", -450, 25, 2, -500, -400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22711561", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(900, 3000, 900, -426, 58);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22711561", 'appear', -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=22711561");
              cm.npc_SetSpecialAction("oid=22711561", "stand0", -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3700);
                cm.effect_Voice("Voice3.img/BlackHeaven/fran/4", 100);
                cm.effect_NormalSpeechBalloon("奥尔卡在哪里?", 0, 0, 500, 3700, 0, 0, 100, 0, 0, 1540468, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=22711561", 'disappear', -1, 1);
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=22711561");
                        cm.npc_LeaveField("oid=22711561");
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.spawnMobLimit(8240029, 1, -300, 58, 100);
                        cm.spawnMobLimit(8240029, 1, -250, 58, 100);
                        cm.spawnMobLimit(8240029, 1, -200, 58, 100);
                        cm.spawnMobLimit(8240029, 1, -150, 58, 100);
                        cm.spawnMobLimit(8240029, 1, -100, 58, 100);
                        cm.spawnMobLimit(8240029, 1, -50, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 500, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 450, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 400, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 350, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 300, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 250, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 200, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 150, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 100, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 50, 58, 100);
                        cm.spawnMobLimit(8240029, 1, 58, 58, 100);
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
function action2(f, E, e) {
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
      cm.npc_ChangeController(1540468, "oid=22713025", -450, 25, 2, -500, -400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22713025", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(900, 3000, 900, -426, 58);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22713025", "appear", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=22713025");
              cm.npc_SetSpecialAction("oid=22713025", 'stand0', -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
                cm.effect_Voice("Voice3.img/BlackHeaven/fran/6", 100);
                cm.effect_NormalSpeechBalloon("快交出奥尔卡!", 0, 0, 500, 2000, 0, 0, 100, 0, 0, 1540468, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                  cm.effect_NormalSpeechBalloon("要不然你们就没命了!!!", 0, 0, 500, 2000, 0, 0, 100, 0, 0, 1540468, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=22713025", "laugh", -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1700);
                    cm.effect_Voice("Voice3.img/BlackHeaven/fran/7", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=22713025", "disappear", -1, 1);
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=22713025");
                            cm.npc_LeaveField("oid=22713025");
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.spawnMobLimit(8240029, 1, -300, 58, 100);
                            cm.spawnMobLimit(8240029, 1, -250, 58, 100);
                            cm.spawnMobLimit(8240029, 1, -200, 58, 100);
                            cm.spawnMobLimit(8240029, 1, -150, 58, 100);
                            cm.spawnMobLimit(8240029, 1, -100, 58, 100);
                            cm.spawnMobLimit(8240029, 1, -50, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 500, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 450, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 400, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 350, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 300, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 250, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 200, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 150, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 100, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 50, 58, 100);
                            cm.spawnMobLimit(8240029, 1, 58, 58, 100);
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
function action3(f, E, e) {
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
      cm.npc_ChangeController(1540468, "oid=22714231", -450, 25, 2, -500, -400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22714231", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(900, 3000, 900, -426, 58);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22714231", "appear", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=22714231");
              cm.npc_SetSpecialAction("oid=22714231", "stand0", -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.setNpcSpecialActionReset("oid=22714231");
                    cm.npc_SetSpecialAction("oid=22714231", "fail", -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_Voice("Voice3.img/BlackHeaven/fran/8", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 160);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=22714231");
                        cm.npc_LeaveField("oid=22714231");
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.spawnMobLimit(8240038, 1, -450, 58, 100);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;