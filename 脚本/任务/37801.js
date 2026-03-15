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
      cm.sendNormalTalk_Bottom("大家不必太过失望。全体休息十分钟。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#那逃跑的田鼠怎么办？", 36, 2570101, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("我亲自解决吧。", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#呀嗬~~！！", 36, 2570103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face4#……。", 36, 2570101, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#……。", 36, 2570105, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face4#啊……咳咳……。", 36, 2570103, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("(向#b左边#k移动，狩猎田鼠)", 56, 0, true, true, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(37801, '');
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
      cm.sendNormalTalk_Bottom("大家都辛苦了。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("农夫们说这次也欠了你的大人情，让我向你转达他们的感激之情。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#是是，托这事的福，现在大家都把我们骑士团称为#b田鼠杀手#k了。", 36, 2570102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#田鼠杀手？哈啊……", 36, 2570103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#小时候，我以为骑士们都是只与龙或恶魔交战的……", 36, 2570103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#白痴~我们有什么办法对付那样的敌人。", 36, 2570105, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#嗯……说起来，追溯起源的话，其实田鼠也是#r恶魔#k的一种。", 36, 2570101, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#这个嘛~~要非得追究起来，确实如此。", 36, 2570102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#嗯~恶魔猎手瑞恩……不错哦？", 36, 2570103, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face5#喂，你没听见我说话吗？", 36, 2570102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3#恶魔猎手瑞恩……。\r\n这外号一定会很受欢迎……嘿嘿……", 36, 2570103, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#好吧，额……", 36, 2570102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face3#不管怎样，田鼠的祖先#e#b一路追溯上去#k#n，\r\n的确曾经是恶魔。", 36, 2570102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom('#face4#……。', 36, 2570103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face4#看来距离挺远的……", 36, 2570101, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face3#结果只是普通的田鼠啊。", 36, 2570105, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("幸好。\r\n如果真有#r恶魔#k在游荡，可就糟糕了。", 56, 0, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face5#诶……？", 36, 2570102, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("(嗯，当然是这样……)", 56, 0, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;q1=clear;04=h1;05=sit;06=h1;dir00=end");
                                              cm.forceCompleteQuest(37801);
                                              cm.updateInfoQuest(37801, "exp=1");
                                              cm.gainExp(5872020);
                                              cm.curNodeEventEnd(true);
                                              cm.setInGameDirectionMode(true, false, false);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 183, 50);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#团长，有人来了。", 36, 2570101, false, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.inGameDirectionEvent_Unknown9(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else if (status === v++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
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
            }
          }
        }
      }
    }
  }
}