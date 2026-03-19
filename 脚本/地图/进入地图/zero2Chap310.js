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
        cm.sendNormalTalk("#face10#……在这里是吧？这家伙……真是烦死了。我哪知道被困在蜘蛛网里……熬过漫长岁月是什么啊。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#用话来说不就好了，那样说不定就改变了计划。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#……真是笨死了。", 41, 2400005, true, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;