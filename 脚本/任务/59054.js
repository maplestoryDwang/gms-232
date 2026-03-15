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
      cm.sendNormalTalk("哦,你来啦。嗯……我仔细想过……", 0, 9390312, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("虽然很难开口, 但……对不起……", 0, 9390312, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("没事。我认为这是成为英雄的过程。", 2, 9390312, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("你果然宽宏大量。宽宏大量的人应该拥有更广阔的天空。 ", 0, 9390312);
          } else if (status === v++) {
            cm.forceStartQuest(59054, '');
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}