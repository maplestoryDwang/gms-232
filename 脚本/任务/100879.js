var status = -1;
var selectionLog = [];
function start(t, R, I) {
  if (status == 0 && t == 0) {
    cm.dispose();
    return;
  }
  if (t == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = I;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else {
    if (status == x++) {
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == x++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function stage0(t, R, I) {
  if (status == 0 && t == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = I;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else {
    if (status == x++) {
      cm.askYesNo("");
    } else if (status == x++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(t, R, I) {
  if (status == 0 && t == 0) {
    cm.dispose();
    return;
  }
  if (t == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = I;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else {
    if (status == x++) {
      var D = cm.getQuest();
      cm.askYesNo("");
    } else if (status == x++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}