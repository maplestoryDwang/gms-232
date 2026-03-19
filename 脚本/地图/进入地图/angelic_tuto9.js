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
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("好。我也不能只懂得哭哭啼啼的，得想想办法。", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("再去圣物原来所在的东侧圣殿看看吧，那里应该能有什么方法可以解开诅咒。", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.updateInfoQuest(65665, "ldate=20/09/02;playCount=0");
            cm.updateInfoQuest(65585, '');
            cm.updateInfoQuest(65585, '');
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/1"], [1200, 30, -70, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/2"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(60);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(120);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(60);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(60);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/7"], [1200, 30, -70, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/3"], [1200, 30, -70, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/4"], [1200, 30, -70, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/8"], [1200, 30, -70, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("现在你能看见我了吧？？", 1, 3000132, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("嗯……你是……什么？爱丝卡达？", 17, 3000132, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("嗯，我是爱丝卡达。我就寄居在你戴的这个手镯里。为了给你力量我才跟你说话的。", 1, 3000132, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("力量？你到底在说什么啊。", 17, 3000132, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("你先到圣物起反应的圣殿去吧。", 1, 3000132, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("嗯……我正在去的路上。", 17, 3000132, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("嗯。在那里你能找到某种可以再现我力量的东西。", 1, 3000132, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("我……我怎么能相信你的话！", 17, 3000132, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("随便你爱信不信，不过相信我你也不吃亏啊？", 1, 3000132, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("嗯，这倒是。反正我也要到那里去。", 17, 3000132, true, true);
                                                    } else if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                      cm.curNodeEventEnd(true);
                                                      cm.forceCompleteQuest(7707);
                                                      cm.dispose();
                                                      cm.warp(940011100, 0, false);
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
        }
      }
    }
  }
}