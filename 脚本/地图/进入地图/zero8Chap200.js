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
      cm.npc_ChangeController(2480006, "oid=28034", -2566, 177, 9, -2603, -2516, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("居然连魔法制炼术士都没能帮到两位…… 真让人遗憾。追忆之路和后悔之路都没有正确答案吗？", 33, 2480000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("那样的话，说不定已经遗忘的记忆中有两位寻找的答案。你们知道吗？遗忘的记忆没有消失。", 33, 2480000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b记录者#k是记录被遗忘的无数记忆的人…… 我将把两位带到忘却之路。你们去见见记录者吧。", 33, 2480000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("忘却之路…… 被遗忘的记忆？但是遗忘的记忆应该没有那么多吧？我们相遇才多久啊。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("是吗？", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("是啊。从在影子神殿相遇到现在…… 虽然我们经历了很多事情，但是时间并不长。我觉得在忘却之路应该也找不到什么。", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这次也失败的话，我们干脆找别的办法吧。不管是否存在不洁者，我们还是寻找成为超越者的方法比较好。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……嗯。", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        cm.warp(328000000, 5, false);
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