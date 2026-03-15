var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#该隐，你又一个人将点数一扫而光啊？", 36, 3004910, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#迟了啊。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我们也是很忙的。", 36, 3004911, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#该隐，有额外的任务。", 36, 3004908, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('#face0#嗯？', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#听说有些人没能逃出去，逃到了据点上层，\r\n现在好像去了#b据点屋顶#k。", 36, 3004908, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("#face0#现在这里就交给我们，该隐，你能不能负责屋顶那边？", 36, 3004910, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#好，我去。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                  } else {
                    if (status === v++) {
                      cm.curNodeEventEnd(true);
                      cm.setInGameDirectionMode(true, false, false);
                      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                      cm.setStandAloneMode(true);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#呜呜……呜呜呜呜呜……", 36, 3004925, false, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#我有家人，我不能就这么被带走。", 36, 3004925, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#拜托，拜托……", 36, 3004925, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#我说，德拉卡兹，我们现在会怎样？", 36, 3004925, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#在哭够之后，在可以做到的时候。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else if (status === v++) {
                                          cm.dispose();
                                          cm.warp(993164005, 0, true);
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}