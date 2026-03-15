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
      cm.sendNormalTalk_Bottom('（说明情况。）', 57, 0, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#伊黛娜大人好像查出了什么。可是，如果在她理清脉络前广场就被攻破的话，一切就无法挽回了。", 36, 3004433, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face1#敌人正在攻入广场。请帮忙拦住他们吧。", 36, 3004433);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(993151026, 0, false);
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
      cm.sendOk_Bottom("#face1#你来啦。", 3004433);
    } else if (status == v++) {
      cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}