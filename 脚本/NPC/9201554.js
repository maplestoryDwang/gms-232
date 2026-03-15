var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(61347, 'c1') == 0) {
        cm.sendNormalTalk_Bottom('破旧的书桌。', 57, 9201553, false, true);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("它来自于#b克拉齐亚研究所。#k", 57, 9201554, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("似乎是那个机器的蓝图！", 57, 9201554, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectGL.img/MBlockbuster/illust6", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我好像找到它的使用说明了。", 57, 9201554, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#上面的字我看着跟鸟文似的。\r\n你看得懂吗？", 37, 9201536, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("它的意思是……噢，我的天啊……是#b穿越传送门。#k", 57, 9201554, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("上面详细解释了如何回到过去的指定时间。\r\n没提到未来。", 57, 9201554, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("他们用幻日碎片创造了一个能够回到过去的传送门。", 57, 9201554, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你说过幻日能够操控时空。", 57, 9201554, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("难道说……", 37, 9201536, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("怎么？", 57, 9201554, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#纳瑞坎他……", 37, 9201536, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#他想要回去阻止幻日被破坏！", 37, 9201536, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("原来如此！\r\n幻日是他计划的关键，他唯一的选择就是回到过去得到它！", 57, 9201554, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#那个解除他封印的人肯定是用这个机器回到过去的……", 37, 9201536, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("使用说明上署名是#b张博士#k。", 57, 9201554, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("事实上，这儿的东西几乎都是这“张博士”的。", 57, 9201554, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("他肯定是个被人派来这里研究克拉齐亚的研究员。", 57, 9201554, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#不再是了。\r\n张博士已经堕落为纳瑞坎的爪牙了！", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那我们现在该怎么办？", 57, 9201554, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#我也要使用这邪恶的机器！\r\n纳瑞坎可以逃到过去，但他逃不出我的掌心！", 37, 9201536, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("而且这下……绯红之心说不定就不用死了。\r\n我懂了。", 37, 9201536, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#我可以改正这一切。", 37, 9201536, true, true);
                                                                } else if (status === V++) {
                                                                  if (cm.getNumberFromQuestInfo(61347, 'c1') == 2) {
                                                                    cm.updateInfoQuest(61347, 'c1=3');
                                                                  }
                                                                  cm.eventSKill(0);
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
      }
    }
  }
}