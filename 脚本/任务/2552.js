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
      cm.sendNormalTalk("呵呵呵～你这么快就完成了斯塔切的第一节采药课。为了以示鼓励，我给你几句建议。", 0, 9031000, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("通过#b匠人街1层最右侧传送口#k可以前往斯塔切精心打理的农场……那里#b长满了适合采集的各种药草#k。", 0, 9031000, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("那你多加努力，争取早日成为优秀的采药师。", 0, 9031000, true, true);
        } else if (status === v++) {
          cm.forceStartQuest(2552, '');
          cm.forceCompleteQuest(2552);
          cm.dispose();
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