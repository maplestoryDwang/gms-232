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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哎…… 哎…… 真不知道这到底是怎么回事。我本来以为这是成为超越者的意识，但…… 也不是。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#那怪物…… 拥有着和时间之力完全不同的力量。就像来自其他世界……", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face11#冒险岛世界？不是的。不是那样的感觉…… 哎。我们先回到神殿吧。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face10#嗯……", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……你为什么那副表情。虽然有点奇怪，但我们遇到的奇怪的事情又不是只有一两件…… 你没必要害怕。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#不知为何，我感到很不安…… 事情好像并没有就这样结束。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face11#…………", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(320000000, 6, false);
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