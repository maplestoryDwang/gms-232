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
      cm.sendNormalTalk_Bottom("#face2#哈啊……哈啊……", 36, 2570103, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#究竟要到什么时候……才能结束呢？", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#现在是第几次？", 36, 2570105, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#一百一十五……不，是一百一十六……？", 36, 2570103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#第一百二十五次……。", 36, 2570104, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("停手吧。", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("大家听着，接下来不用计次数了。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#也许……那样更好。", 36, 2570101, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("出发。往#b右边#k走。", 56, 0, true, true, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(37811, '');
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
      cm.sendNormalTalk_Bottom("#face2#能听见吗？有惨叫声。", 36, 2570101, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#惨……惨叫？我……我没听见。", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#我也……没听见。", 36, 2570103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#就在这附近，从墙后面传来的。", 36, 2570101, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#墙壁后面什么都没有。这里是地下，墙后面只有土堆。", 36, 2570103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#但我分明听见了。或许……有什么秘密通道之类的。", 36, 2570101, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("魁格，你是救护骑士团出身吧？你知道睡眠不足的症状吗？", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#每次逆转时间的时候，肉体都在恢复，\r\n我们或许可以利用这一点。", 36, 2570104, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("没关系。你说吧。", 56, 0, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#一般来说，早期会出现疲劳、记忆障碍、注意力低下、头痛等症状，中期则会出现语言能力方面的问题。", 36, 2570104, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#再严重一点，就会出现幻听，幻觉，进而产生被害妄想等精神障碍。", 36, 2570104, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('幻听……，幻觉……', 56, 0, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("亚殷、瑞恩，你们去警戒周围。暂时休息一下。", 56, 0, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face6#等等，我清清楚楚地听到了，不是幻听。", 36, 2570101, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("哈丁，你目前为止有听到过幻听吗？", 56, 0, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face2#一次都没有。", 36, 2570101, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("那么，你凭什么确定你能区分幻听与现实？", 56, 0, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom('#face2#……。', 36, 2570101, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("休息吧。这就是你现在的任务。", 56, 0, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.curNodeEventEnd(true);
                                            cm.setInGameDirectionMode(true, false, false);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === v++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_Monologue("我慢慢地瘫坐下来……", 0);
                                                } else {
                                                  if (status === v++) {
                                                    cm.effect_Voice("Voice6.img/Library/kel/13-01-kel.mp3", 100);
                                                    cm.inGameDirectionEvent_Monologue("小心翼翼地，不为人察觉地堵住了耳朵。", 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.effect_Voice("Voice6.img/Library/kel/13-02-kel.mp3", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.inGameDirectionEvent_Monologue("可是，从很久以前就一直在耳边盘旋的那个声音……", 0);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.effect_Voice("Voice6.img/Library/kel/13-03-kel.mp3", 100);
                                                          cm.inGameDirectionEvent_Monologue("那恳切的呼唤……始终没有停止。", 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.effect_Voice("Voice6.img/Library/kel/13-04-kel.1.mp3", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.inGameDirectionEvent_Monologue('老师……', 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.effect_Voice("Voice6.img/Library/prince/17-19-prince.1.mp3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else if (status === v++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.dispose();
                                                                cm.warp(308090015, 0, false);
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
        }
      }
    }
  }
}