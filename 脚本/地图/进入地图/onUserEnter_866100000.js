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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我是 #b#h0##k!\r\n这里是亚伯兰森林中的大树村！", 3, 9390305, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.emotion(1, 2000);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我的耳朵和尾巴是不是很神奇啊?", 3, 9390305, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.emotion(0, 5000);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这不就是我将成为未来之英雄的证据吗?", 3, 9390305, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("每晚睡觉前,罗斯娜奶奶都会给我讲故事。", 3, 9390305, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("击退可怕的#b黑魔法师#k的#b五大英雄#k之故事!!! \r\n我总有一天也会成为像他们一样的大英雄!", 3, 9390305, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/10"], [2000, 0, -120, 1, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 700, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/7"], [2000, 571, -120, 1, 0, 0, 0, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("ShamanBTTuto/sound0", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.emotion(4, 5000);
                                          cm.sendNormalTalk("啊!出大事啦!!", 3, 9390305, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.dispose();
                                            cm.warp(866101000, 0, true);
                                            cm.setStandAloneMode(false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.gainItem(2000001, 50);
                                            cm.gainItem(2000003, 50);
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