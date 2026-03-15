var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("那个#b#p9390306##k好像在哭，不知道是不是因为我的那个玩笑而哭的？", 0, 9390305, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("呃!……", 2, 9390305, true, true);
      } else {
        if (status === v++) {
          cm.askAcceptDecline("不行!得懂得珍惜朋友啊。赶紧去给#b#p9390306##k道歉吧。", 0, 9390305);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("是!珍惜朋友也是成为英雄的条件之一啊!", 3, 9390305, false, true);
          } else if (status === v++) {
            cm.forceStartQuest(59001, '');
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("布兰，对不起……", 2, 9390306, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("切,我就知道是你干的。", 0, 9390306, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嘿嘿,抱歉。以后我不会再调皮了。\r\n因为我要成为英雄嘛!", 2, 9390306, true, true);
        } else if (status === v++) {
          cm.forceCompleteQuest(59001);
          cm.dispose();
        }
      }
    }
  }
}