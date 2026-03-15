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
      cm.sendNormalTalk_Bottom("#face0#伊黛娜大人在里面。", 36, 3004437, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我还来不及阻拦，艾伦大人就跟着进去了。", 36, 3004437, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("必须尽快救出他们两人。", 56, 3004517);
        } else if (status === v++) {
          cm.setStringForQuestInfo(39900, '29', 'h1');
          cm.forceStartQuest(39919, '');
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
      cm.sendNextS_Bottom("伊黛娜呢？");
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#在更深处。", 37, 3004434, false, true);
      } else if (status == v++) {
        cm.warp(993151023, 0, false);
        cm.dispose();
      }
    }
  }
}