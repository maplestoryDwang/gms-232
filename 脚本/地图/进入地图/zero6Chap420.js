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
      cm.spawnMobLimit(9300798, 1, 145, -42, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face11#……这里是哪呢？为什么会突然来到这个地方呢？这是成为超越者的意识之一吗？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#这里和时间神殿……很相似。但是又有点不同…… 我不清楚。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face1#稍等！贝塔，那边有#r奇怪的生物#k……？会是敌人吗？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face1#像是敌人！我感到了很强的力量！", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face1#该死…… 从玩具城之后，我们就一直去到奇怪的地方！先把它们消灭吧！", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;