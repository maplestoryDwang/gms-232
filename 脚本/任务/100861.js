var status = -1;
var selectionLog = [];
function start(v, r, S) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = S;
  var C = -1;
  if (status <= C++) {
    cm.dispose();
  } else {
    if (status == C++) {
      cm.askYesNo("现在就前往#b#e<互动演播室>#k#n吗？", 2, 0);
    } else if (status === C++) {
      cm.updateInfoQuest(100825, "rMap=" + cm.getMapId());
      cm.dispose();
      cm.warp(993194000, 8, false);
    }
  }
}
function stage0(v, r, S) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = S;
  var C = -1;
  if (status <= C++) {
    cm.dispose();
  } else {
    if (status == C++) {
      cm.askYesNo("");
    } else if (status == C++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(v, r, S) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = S;
  var C = -1;
  if (status <= C++) {
    cm.dispose();
  } else {
    if (status == C++) {
      var T = cm.getQuest();
      cm.askYesNo("");
    } else if (status == C++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}