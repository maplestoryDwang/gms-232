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
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
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
      cm.sendNormalTalk("哇哦~ 老大！你，有两下子嘛！但好像被地精的毒弄伤了。你等等~ 老大！", 4, 9390302, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(59009);
      cm.gainExp(135);
      cm.dispose();
    }
  }
}