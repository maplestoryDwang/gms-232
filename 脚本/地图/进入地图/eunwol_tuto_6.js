var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getInfoQuest(38900) === '4') {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/gofoxvillage");
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.warp(940200010, 0);
      } else {
        cm.dispose();
      }
    }
  } else {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNextSNoESC('……');
        } else {
          if (status === V++) {
            cm.sendNextSNoESC("我要……死了吗？");
          } else {
            if (status === V++) {
              cm.sendNextSNoESC('……');
            } else {
              if (status === V++) {
                cm.sendNextSNoESC("死后的世界是不存在的。估计没办法在黄泉中再见了。弗里德那个家伙，一定会很失望。");
              } else {
                if (status === V++) {
                  cm.sendNextSNoESC('……');
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/0"], [3200, 300, -210]);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/1"], [2900, -300, -70]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/2"], [2600, 300, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/3"], [2300, -300, 70]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/4"], [2000, 300, 210]);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNextSNoESC("怎么回事，这个声音？");
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/5"], [3200, -300, -70]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/6"], [2900, 300, -210]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/7"], [2600, -300, 70]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/8"], [2300, 300, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg1/9"], [2000, 300, 210]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextSNoESC("吵死了。是他们吗？看来现在还不是去黄泉的时候。");
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 250, 240, 240, 240, 3000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/meetfox");
                                                  cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                } else {
                                                  if (status === V++) {
                                                    while (cm.getLevel() < 10) {
                                                      cm.getPlayer().levelUp();
                                                    }
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.curNodeEventEnd(true);
                                                    cm.setInGameDirectionMode(false, true);
                                                    cm.setStandAloneMode(false);
                                                    cm.dispose();
                                                    cm.warp(940200010, 0);
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