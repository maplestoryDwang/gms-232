var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1012106, 'oid=116529', 4720, -56, 5);
      cm.npc_ChangeController(1012003, 'oid=116530', 4829, 454, 4);
      cm.npc_ChangeController(1012133, "oid=116531", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=148883847", 5000, 446, 1);
      cm.npc_SetSpecialAction("oid=148883847", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=148883847", -1, 50, 100);
        cm.sendNextNoESC_Bottom("你去确认过了吗？", 1012003);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("嗯，我确实发现了几只比平时更加凶残的怪物，但是没什么更特别的事情了。", 9400031);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("嗯……这样啊……还真是奇怪啊……", 1012003);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom('那个……', 9400031);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("啊，对了。你要问我什么？", 1012003);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("您在这附近见过青蛙吗？", 9400031);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("青蛙？平原上就有很多青蛙啊？你为什么找青蛙？", 1012003);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("嗯……不是普通的青蛙，是跟人一样大的青蛙……", 9400031);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("还有那种青蛙？我没见过啊。", 1012003);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("啊，这么说来……我老婆提到过最近有动物失踪了。", 1012003);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("不知道她能不能帮上你，不过你还是去问问她吧。", 1012003);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("#face2#真的吗？！失踪的动物！好的！谢谢您！", 9400031);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("我才要谢谢你，希望你能找到青蛙。", 1012003);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextSNoESC_Bottom("好，现在笔记本的这一页也写满了吗？");
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.forceCompleteQuest(59706);
                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                        cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                      } else if (status === V++) {
                                        cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                        cm.setInGameDirectionMode(false, false, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=148883847");
                                        cm.dispose();
                                      } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;