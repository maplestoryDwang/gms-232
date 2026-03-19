var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.isQuestFinished(34267)) {
    cm.npc_ChangeController(3003435, "oid=49730", -1549, -190, 35, -1566, -1499, 1, false, 0, false);
    cm.npc_ChangeController(3003434, "oid=49731", -1303, -275, 32, -1353, -1253, 1, false, 0, false);
    cm.Hidden_background("magic_pre", 1, 1, 0, 0);
    cm.Hidden_background("magic_start", 1, 0, 0, 0);
    if (!cm.isQuestFinished(34269)) {
      cm.npc_ChangeController(3003450, "oid=2008984", -1218, -278, 33, -1268, -1168, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2008984", "summon", 0, 0);
    }
    cm.dispose();
    return;
  } else {
    action1(f, E, e);
    return;
  }
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
      cm.npc_ChangeController(3003435, "oid=49730", -1549, -190, 35, -1566, -1499, 1, false, false);
      cm.npc_ChangeController(3003434, 'oid=49731', -1303, -275, 32, -1353, -1253, 1, false, false);
      cm.Hidden_background('magic_pre', 1, 1, 0, 0);
      cm.Hidden_background("magic_start", 1, 0, 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1200, -1400);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -2206, -347);
          cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h0;35=h1;54=h0;18=h0;36=h0;28=h0;29=h0");
          cm.npc_ChangeController(3003401, "oid=2008468", -1218, -278, 33, -1268, -1168, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008468", "summon", 0, 0);
          cm.npc_ChangeController(3003417, "oid=2008469", -580, -400, 36, -630, -530, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008469", "summon", 0, 0);
          cm.npc_ChangeController(3003417, "oid=2008470", -700, -400, 36, -750, -650, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008470", 'summon', 0, 0);
          cm.npc_ChangeController(3003416, "oid=2008471", -835, -400, 36, -885, -785, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008471", "summon", 0, 0);
          cm.npc_ChangeController(3003416, "oid=2008472", -950, -400, 36, -1000, -900, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008472", "summon", 0, 0);
          cm.npc_ChangeController(3003417, "oid=2008473", -1280, -122, 30, -1330, -1230, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008473", "summon", 0, 0);
          cm.npc_ChangeController(3003417, "oid=2008474", -1460, -122, 30, -1510, -1410, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008474", "summon", 0, 0);
          cm.npc_ChangeController(3003416, "oid=2008475", -1650, -172, 30, -1700, -1600, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008475", "summon", 0, 0);
          cm.npc_ChangeController(3003416, "oid=2008476", -1790, -172, 30, -1840, -1740, 1, false, false);
          cm.npc_SetSpecialAction("oid=2008476", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2008468", "special2", -1, 1);
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, -1200, -220);
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
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(450006440, 2, 2, 5);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(450006440, 0, 0, 0);
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
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -2000, -270);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(450006440, 2, 2, 5);
                              cm.sendNormalTalk_Bottom("#fn黑体##fs18#阿卡伊勒！！！！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(450006440, 0, 0, 0);
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -1730, -230);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(450006440, 2, 2, 5);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##b#h0##k啊。没想到你这么快就到了。", 37, 3003405, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("到底在打什么主意？！", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#过去的我，原本以为那丫头只拥有长生不老的能力。", 37, 3003405, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你亲眼见到就知道了。操控艾尔达\r\n操控生命根源的力量！你不觉得惊奇吗？", 37, 3003405, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不会吧……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.Hidden_background('magic_pre', 1, 0, 0, 0);
                                                cm.Hidden_background("magic_start", 1, 1, 0, 0);
                                                cm.userSetFieldFloating(450006440, 0, 0, 0);
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -1230, -200);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(450006440, 2, 2, 5);
                                                    cm.sendNormalTalk_Bottom("#face0#没错，我要抢过来。", 37, 3003405, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#现在的我拥有强大的魔法知识和凌驾于人类之上的身躯。", 37, 3003405, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我当然不会眼睁睁看着那丫头站在如此伟大的人旁边！", 37, 3003405, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h0;35=h2;54=h0;18=h0;36=h0;28=h0;29=h0");
                                                          cm.sendNormalTalk_Bottom("住手，阿卡伊勒！！", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face9#站住……阿卡伊勒……咳！！嗬啊啊啊！！", 37, 3003400, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=2008468", "special3", -1, 1);
                                                              cm.sendNormalTalk_Bottom("#face0#好，爆炸吧！那力量最终全都属于我！", 37, 3003405, true, true);
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
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.dispose();
                                                                      cm.setStandAloneMode(false);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.updateInfoQuest(34267, "enter0=1;enter=1");
                                                                      cm.forceCompleteQuest(34267);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}