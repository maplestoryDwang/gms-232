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
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 2004, 514);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("啊啊，是龙神！！！", 3, 9390475, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(613);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你好, 我叫做龙神。你长得真是特别啊。", 1, 9390475, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(我一直想见你。我有很多疑问, 很多想知道的事情, 我要跟你谈一谈。)", 3, 9390475, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我想在冒险岛世界成为像你, 还有其他五位英雄那样的人! 我也想见到女皇! 也想与骑士团对话! ", 3, 9390475, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("看到你的样子, 我觉得你完全可以那么做。我也不是一开始就像他们那样厉害", 1, 9390475, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("等下, 我突然有了些急事, 我要离开了。能够认识你很高兴。目前的你仍有些不足, 但将来如果你见到希纳斯, 你一定要说出你想说的话。终有一天, 你能与我们并驾齐驱。", 1, 9390475, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("嗯！我知道了！再见~", 3, 9390475, true, true);
                      } else if (status === V++) {
                        cm.forceCompleteQuest(59065);
                        cm.gainExp(5309);
                        cm.forceStartQuest(32147, '1');
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setStandAloneMode(false);
                        cm.dispose();
                        cm.warp(100000000, 5, false);
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