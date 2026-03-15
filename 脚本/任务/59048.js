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
      cm.sendNormalTalk('什么事啊?', 0, 9390315, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("如果你在#b#m866000150##k了解到有关#b#o9390927##k的情报，请马上告诉我吧。", 2, 9390315, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("啊！我见到过巨大的#b#o9390915##k进入了#b#m866000150##k的深处。只要消灭了那家伙，不就能降低#b#o9390927##k的威胁了吗？", 0, 9390315, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("真是帮了大忙了。谢谢你! (得把此事告知伍德乐才是。)", 16, 9390315);
          } else {
            if (status === v++) {
              cm.OnStartNavigation(866000000, 1, '9390312', 59048);
              cm.sendNormalTalk("那就后会有期!", 0, 9390315, false, true);
            } else if (status === v++) {
              cm.forceStartQuest(59048, '');
              cm.dispose();
            }
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}