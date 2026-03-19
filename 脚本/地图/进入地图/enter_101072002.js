var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("啊？让我做艾利涅的实习老师？", 5, 1500000, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("校，校长先生？您是要任命人类为实习老师吗？", 5, 1500002, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我觉得，借这次机会，艾利涅里也需要一些改变。真是因为我们过度排斥人类文明，才招来了这样的结果。因此，我们艾利涅也需要和外部进行沟通。", 5, 1500001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("曾几何时，黑魔法师将冒险岛世界笼罩在恐怖之下……很多势力为了将其复活，而在大陆各处活动着。在这种情况下，我们妖精不能再袖手傍观下去了。\r\n要想合力，那就先要同心。你说对不对？", 5, 1500001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("呵呵，既然校长先生这样想的话……", 5, 1500002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("谢谢！这多亏了你啊，#b#h0##k！", 5, 1500000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那么，孩子们现在又可以继续演出了吧。", 17, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("啊，孩子们好像已经修改了剧本正在排练呢。看来，这次事件让他们收获了很多感动啊。", 5, 1500001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('…………？', 17, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 180, -400, 259);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4737);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("来呀，你这个恶党地鼠王！我#b#h0##k，要以正义的名义消灭你，让我送你回地下世界去吧！", 5, 1500006, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("啊，可恶的家伙！我要履行#b#h0##k的职责！", 5, 1500005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我也是，我也是！", 5, 1500007, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("演出的题目是#b邪恶的恶党地鼠王和正义的守护者#h0##k。", 5, 1500001, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("…………", 17, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("哈哈哈，演出一定会非常有趣的。", 5, 1500000, true, true);
                                            } else if (status === V++) {
                                              cm.warp(101072000, 0, false);
                                              cm.eventSKill(0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.forceStartQuest(32129, '');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;