var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(2450024, "oid=26475", -1586, -14, 15, -1636, -1536, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你不觉得#p2400008#怎么好像有点消沉吗？是不是出了什么事情？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……不太清楚，总觉得有点……阴冷。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……你应该多学学单词了。向赛尔借本词典吧。知道了吗？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("话说回来，这里是埃德尔斯坦吗？冒险岛世界真是稀奇。竟然又出现了这种氛围完全不同的村庄……", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("等，等一下……那边两位！真，真的很抱歉！#r我要盘问下你们#k…！", 33, 2450024, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("盘问……吗？是什么事？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我们村庄发生了一起重大案件……首先，姓名……嗯，原来是#p2400005#和#p2400006#啊。两位同行吗？你们来埃德尔斯坦的目的是？", 33, 2450024, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("要找一个人。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("这，这样啊……那你们要在埃德尔斯坦待多久呢？另外，如果你们携带了武器的话，需要登记下呢……额啊！两位都携带了这么大的武器啊！", 33, 2450024, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("不行吗？", 41, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("首先我们是允许携带武器的。只是携带的武器要在我们这边进行登记。并且，你得签字声明自己不会用武器来破坏村庄。好了，请在这签名吧。好的，谢谢你们。", 33, 2450024, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("对了，如果你把你们要寻找的那个人的姓名告诉我，也许我能帮到你们。我是本地人，这里的人我几乎都认识。你们要找谁？", 33, 2450024, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("不知道名字。我们只知道那个人有着#b蓝色的头发#k而已…… ", 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("你说蓝色的……头发？", 33, 2450024, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("是的。你知道这样的人吗？", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("嗯……我不知道，不过也许其他人会知道呢。稍等。让我想想……如果查看之前整理的案件资料的目录，也许会找到……", 33, 2450024, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(325000000, 8, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;