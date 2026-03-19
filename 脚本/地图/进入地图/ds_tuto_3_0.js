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
      cm.forceStartQuest(23206, '2');
      cm.updateInfoQuest(25980, "normal=#");
      cm.updateInfoQuest(25980, "normal=#;hard=#");
      cm.updateInfoQuest(39391, "level=1");
      cm.gainExp(1242);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ScreenMsg("demonSlayer/text12");
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk('........', 3, 2159311, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/14", "oid=0"], [2000, 130, 50, 1, 10, 1, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(……好像……听到了什么声音……)", 3, 2159311, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/15", 'oid=0'], [2000, -130, 50, 1, 10, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("(这是哪里……我还活着吗？)", 3, 2159311, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/16", "oid=0"], [2000, 130, 50, 1, 10, 1, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("(呃……力量在消失……好像有什么在吸走我的力量……)", 3, 2159311, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/17", "oid=0"], [2000, -130, 50, 1, 10, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(它们在吸走我的力量……？快从这里出去！)", 3, 2159311, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/7", "oid=0"], [2000, 130, 100, 1, 10, 1, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
                                  cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/0", "oid=0"], [3600, 0, 0, 1, 0, 1, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/1", 'oid=0'], [2000, -130, 50, 1, 10, 1, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
                                      cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/1", "oid=0"], [3600, 0, 0, 1, 1, 1, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/2", "oid=0"], [2000, 130, 50, 1, 10, 1, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
                                          cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/2", "oid=0"], [9000, 0, 0, 1, 5, 1, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("demonSlayer/breakEgg", 100);
                                          cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                          cm.dispose();
                                          cm.warp(931050020, 0, false);
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