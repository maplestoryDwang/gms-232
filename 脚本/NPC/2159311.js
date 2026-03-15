var status = -1;
function action(f, W, U) {
  if (f == 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNextSNoESC("........");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/14"], [2000, 130, 50, 1, 10, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNextSNoESC("(……好像……听到了什么声音……)");
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/15"], [2000, -130, 50, 1, 10, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNextSNoESC("(这是哪里……我还活着吗？)");
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/16"], [2000, 130, 50, 1, 10, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNextSNoESC("(呃……力量在消失……好像有什么在吸走我的力量……)");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/17"], [2000, -130, 50, 1, 10, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNextSNoESC("(它们在吸走我的力量……？快从这里出去！)");
                    } else {
                      if (status === V++) {
                        cm.topMsg("连续按下控制键打破墙壁，然后走出去。");
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/guide1/0"], [3000, 0, -100, 1, 20, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/1"], [6600, 0, 0, 1, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_BreakEffect('17#17#17#', 2, 2, 3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("demonSlayer/punch");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/7"], [2000, 130, 100, 1, 10, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("demonSlayer/punch");
                              cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/0"], [3600, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/1"], [2000, -130, 50, 1, 10, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("demonSlayer/punch");
                                  cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/1"], [3600, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/2"], [2000, -130, 50, 1, 10, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("demonSlayer/punch");
                                    cm.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/breakEgg/2"], [3600, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    cm.fieldEffect_PlayFieldSound("demonSlayer/breakEgg");
                                    cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                    cm.dispose();
                                    cm.warp(931050020, 0);
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