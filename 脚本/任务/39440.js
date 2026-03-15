var status = -1;
var selectionLog = [];
function start(b, Y, f) {
  if (status == 0 && b == 0) {
    cm.dispose();
    return;
  }
  if (b == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = f;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == W++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function stage0(b, Y, f) {
  if (status == 0 && b == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = f;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      cm.askYesNo("");
    } else if (status == W++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(b, Y, f) {
  if (status == 0 && b == 0) {
    cm.dispose();
    return;
  }
  if (b == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = f;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      var I = cm.getQuest();
      cm.askYesNo("");
    } else if (status == W++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}