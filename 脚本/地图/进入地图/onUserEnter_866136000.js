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
      cm.sendNormalTalk("该走了喵。 \r\n晚了的话,伊卡会生气的喵。", 1, 9390381, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('知道了,阿尔。', 3, 9390381, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('奶奶,我得走了。', 3, 9390381, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯。要注意身体啊。可别做什么太危险的行动哦!", 1, 9390304, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('嗯!奶奶!不要担心!', 3, 9390304, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b#h0##k，之前是我错了！\r\n #b#h0##k你真的是英雄！", 1, 9390305, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b#h0##k，你已经是我们村子的英雄了。\r\n 我们以你为傲。", 1, 9390308, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("没错！#b#h0##k已经是英雄啦！", 1, 9390306, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("什么啊！！怎么还不来！！！", 1, 9390384, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('啊，伊卡生气了喵。', 1, 9390381, true, true);
                      } else {
                        if (status === V++) {
                          cm.emotion(1, 5000);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("对老奶奶我来说，#b#h0##k你永远都是可爱漂亮的好孩子。\r\n嗯，我相信#b#h0##k你，你快去快回。\r\n如果你累了，可以随时回来！\r\n还有，把这些带走。\r\n#b(罗斯娜奶奶拿出了什么，然后挂到了我的脖子上。)#k", 1, 9390304, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b#h0##k，你走吧。朋友们在等你呢。", 1, 9390304, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk('这是什么？奶奶？', 3, 9390304, false, true);
                                  cm.gainItem(1352810, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("在你沉睡期间，我感觉迟早会有这样一天的到来，就事先做好了。你带着这个哨子，和你的朋友们好好相处吧。", 1, 9390304, true, true);
                                    cm.updateInfoQuest(65890, "count=669;todayCount=639;lastDate=20210530");
                                    cm.updateInfoQuest(65890, "count=669;todayCount=669;lastDate=20210530");
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(2);
                                      cm.emotion(1, 10000);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(50);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(0);
                                          cm.inGameDirectionEvent_OneTimeAction(113, 540);
                                          cm.inGameDirectionEvent_AskAnswerTime(540);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("好的！希望大家一切平安。\r\n 我很快就会回来的~ 成为真正的英雄之后！\r\n 走吧，阿尔！", 3, 9390304, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(2);
                                              cm.inGameDirectionEvent_MoveAction(0);
                                              cm.fieldEffect_SaveEff("dScreenEffect/fadeInOut");
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setStandAloneMode(false);
                                              cm.dispose();
                                              cm.warp(866137000, 0, false);
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