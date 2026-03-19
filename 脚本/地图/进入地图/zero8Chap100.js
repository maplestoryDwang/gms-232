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
      cm.npc_ChangeController(2480006, 'oid=28032', -2566, 177, 9, -2603, -2516, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("看来关照者没能帮到两位…… 追忆之路那里没有两位要寻找的答案吗？那样的话，只能进入更深的时间之路了。", 33, 2480000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你们知道#b魔法制炼术士#k吗？他是一位致力于研究如何挽回后悔之事的魔法师。", 33, 2480000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("没有人比他更了解后悔之路，所以…… 你们试着去找他帮忙吧？", 33, 2480000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("魔法制炼术士…… 嗯。名字倒是相当不错！那我们去他那看看吧？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……嗯。", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(……军团长威尔说，已经告诉我们正确答案了。他的意思是已经告诉我们线索，只是我们没能发现吗？)", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b#face10#(最终我们…… 会找出不洁者到底是谁。如果不洁者是我的话…… 或者是#p2400005#的话…… 那时我们该怎么办呢？)", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(328000000, 5, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;