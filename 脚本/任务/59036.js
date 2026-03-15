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
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
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
      cm.sendNormalTalk("给! 看看这地精的棍棒吧! ", 2, 9390312, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("这个看起来挺沉的啊?你是从哪里得来的?", 0, 9390312, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这是我从地精身上获得的。", 2, 9390312, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这棍棒看起来挺精致的, 就好像从哪里拿来的……", 0, 9390312, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("(他还是不相信有地精存在啊。只能和汤姆谈谈了……)", 2, 9390312, true, true);
            } else if (status === v++) {
              cm.forceCompleteQuest(59036);
              cm.gainExp(1993);
              cm.gainItem(4034050, -1);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}