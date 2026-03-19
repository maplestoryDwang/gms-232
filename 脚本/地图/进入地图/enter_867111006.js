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
      cm.npc_ChangeController(1012106, "oid=116551", 4720, -56, 5);
      cm.npc_ChangeController(1012003, "oid=116552", 3333, 124, 3);
      cm.npc_ChangeController(1012133, "oid=116553", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1807981", 4957, -66, 1);
      cm.npc_SetSpecialAction("oid=1807981", 'summon');
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("我清理了10个垃圾。", 9400031);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("噢！谢谢你。我也有个消息要告诉你~", 1012106);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom('啊！有什么消息吗？', 9400031);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("我打听了一下，附近似乎没有人见过青蛙。", 1012106);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("啊……原来如此……看来它确实没有来这里。", 9400031);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("那我就先告辞了……", 9400031);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("等等，你要不要去见见玛亚？玛亚说有人丢了乌龟，而不是青蛙……我想这件事是不是和你有关联。", 1012106);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("乌龟？嗯……我知道了，谢谢你告诉了我这么重要的情报。", 9400031);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("而且有消息说，在勇士部落有人正在贩卖珍稀动物。", 1012106);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("贩卖珍稀动物？嗯，这个可能与嘟嘟有关……", 9400031);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("谢谢你的情报，明明女士！！", 9400031);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("你太客气了，祝你好运！", 1012106);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNextSNoESC_Bottom("笔记本应该又有一页写满了吧？让我来确认一下。");
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.forceCompleteQuest(59708);
                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                      cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                      cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                                    } else if (status === V++) {
                                      cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                      cm.updateInfoQuest(18418, "B=163");
                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                      cm.setInGameDirectionMode(false, false, false);
                                      cm.setStandAloneMode(false);
                                      cm.npc_LeaveField("oid=1807981");
                                      cm.npc_LeaveField("oid=116551");
                                      cm.npc_LeaveField("oid=116552");
                                      cm.npc_LeaveField("oid=116553");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;