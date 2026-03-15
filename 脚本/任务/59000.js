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
      cm.sendNormalTalk("那是你做的吧?\r\n这会让#b#p9390305##k很为难的。", 0, 9390304, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("赶紧过去和#b#p9390305##k道歉吧。", 0, 9390304, true, true);
      } else {
        if (status === v++) {
          cm.askAcceptDecline("知错能改,也是作为英雄的一个条件哦。", 0, 9390304);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("英雄的条件!\r\n是!那我赶紧回去道歉。", 3, 9390304, false, true);
          } else if (status === v++) {
            cm.forceStartQuest(59000, '');
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
      cm.sendNormalTalk("赫卡大嫂,对不起……", 2, 9390305, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("你这捣什么蛋啦?", 0, 9390305, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("是,对不起。我只是想让大家快乐……", 2, 9390305, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("哎,每天都吊儿郎当的……好吧,这次我就放过你,不过绝对不会有下次咯?", 0, 9390305, true, true);
          } else if (status === v++) {
            cm.forceCompleteQuest(59000);
            cm.dispose();
          }
        }
      }
    }
  }
}