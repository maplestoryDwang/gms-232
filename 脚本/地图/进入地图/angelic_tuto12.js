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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(60);
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/4"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(150);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(60);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(60);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(90);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(60);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(510);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/9"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嘿嘿嘿，我的力量如何？", 1, 3000132, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不错嘛？我终于拥有能做点儿什么的力量了！", 17, 3000132, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("这都要归功于我这伟大的诺巴勇士……", 1, 3000132, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("太开心了~哈哈哈。", 17, 3000132, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("(完全没有在听我说嘛……)喂，你要想熟练地运用这股力量，还需要多多练习。", 1, 3000132, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk('练习？什么练习？', 17, 3000132, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("练习如何正确运用新获得的力量啊，要不要练习看看？", 1, 3000132, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("嗯，好！不管是什么练习，我一定认真做！", 17, 3000132, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("(很好！)那么首先从变身练习开始吧！“装扮！”", 1, 3000132, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("装扮？", 17, 3000132, true, true);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(940012020, 0, false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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