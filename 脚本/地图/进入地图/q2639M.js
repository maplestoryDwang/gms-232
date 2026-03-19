var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(2639)) {
    cm.dispose();
    return;
  }
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
      cm.npc_ChangeController(1057001, "oid=217355", -206, 1, 20, -256, -156, 1, false, 0, false);
      cm.npc_ChangeController(1052001, "oid=217356", 52, 1, 20, 2, 102, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(3);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("…你要说实话，阵，这些记录...崔斯坦的这些记录都是真的吗？你真的是和上一任达克鲁一起追击敌人吗？", 1, 1057001, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("…这件事现在已经无关紧要了，不是吗?", 1, 1052001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("怎么会无关紧要！你不要转移话题！我已经和魔法密林的杰比那里确认过了...! 你真的…没有杀害 上一任达克鲁吗？", 1, 1057001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("......", 1, 1052001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("为什么?你为什么隐瞒了真相？你知道雪姬正在飞花院咬牙切齿，准备报仇吧？那为什么放任不管？为什么？", 1, 1057001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("难道你打算一直缄口，直到雪姬来杀你吗？这对你有什么好处？雪姬那么辛苦可不是为了这么一个真相啊！你为什么要欺骗大家？！", 1, 1057001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("如果我说出来... ", 1, 1052001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("说啊!", 1, 1057001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("如果我说出来，雪姬能成长为现在这个样子吗？", 1, 1052001, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你想说什么？", 1, 1057001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("如果我把所有真相都告诉了雪姬，那接下来会怎么样？是的，就因为你被抓去做人质，达克鲁才不得不牺牲自己…我这样告诉她之后，你说雪姬会怎么说?", 1, 1052001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("......!", 1, 1057001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("现在的雪姬是飞花院的首领，十分冷静，但当时她还只是个孩子。你觉得她能忍受失去心爱的家人…的自责感和罪恶感吗？与其那样...", 1, 1052001, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("还不如不知道真相。这样她至少能在仇恨当中活下去。", 1, 1052001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("…所以…你才一直隐瞒了真相?", 1, 1057001, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("对不起...", 1, 1052001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("你的道歉才是最让雪姬伤心的。", 1, 1057001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("...", 1, 1052001, true, true);
                                          } else if (status === V++) {
                                            cm.forceStartQuest(2644, '1');
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
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
  }
}