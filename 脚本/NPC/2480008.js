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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这里啊，这里！哇…… 影子神殿里面原来是这样的啊？氛围真是可怕。对吧，赛芬？", 33, 2480008, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(#face7#……赛芬？！为什么喊我赛芬呢？我之前的名字是纳因……)", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(#face11#这个不会是…… 我成为纳因之前遗忘的记忆……？所以…… 这里没有#p2400006#吗？因为不是我们一同经历的事？)", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face5#氛围确实很独特呢。但是，没有看到影子怪物，真是奇怪啊，米露前辈。", 41, 2480009, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(#face11#嘴巴随意地说着…… 这就是记忆这回事吗……)", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("没有不是更好吗？我没有信心像你那样轻易抓到怪物。由于任务我才到这个地方的，不然的话……", 33, 2480008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我们应该到更深入的地方观察下吗……？和其他人一起来的话，应该更好吧？", 33, 2480008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face4#我们应该先观察下右边门后的动态，再决定需要多少支援，不是吗？", 41, 2480009, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("什么？队长不是让我们不要进入那里面嘛。我们现在应该回去比较好吧？", 33, 2480008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face5#都没进去，只是在外面观察的话……", 41, 2480009, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("也对。凭你的实力的话，应该也没那么危险。随你便~ 反正和我没关系……", 33, 2480008, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……嗯？你说什么？", 41, 2480009, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("没什么。我让你随便。", 33, 2480008, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
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