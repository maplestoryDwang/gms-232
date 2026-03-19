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
        cm.spawnMobLimit(9300790, 1, 516, -37, 100);
        cm.sendNormalTalk("说实话，现在#p2400005#你应该可以自立了吧？你都能靠自己的实力，独自来到这第三个庭院了……", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("实际上#p2400005#你和#p2400006#在一起，应该觉得很烦闷吧。#p2400006#独自生活了太久了，所以不懂人情世故……也不太会表达自己的感情。和他在一起，你该有多难受啊。", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("两个人一起虽然有时可以互相帮助，但有时对方也会成为自己的阻碍。现在你们两位的情况好像就是如此……你好像还没察觉，真让人觉得焦急啊。", 33, 2460000, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
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