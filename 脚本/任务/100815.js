var status = -1;
var selectionLog = [];
function start(n, E, l) {
  if (status == 0 && n == 0) {
    cm.dispose();
    return;
  }
  if (n == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = l;
  var q = -1;
  if (status <= q++) {
    cm.dispose();
  } else {
    if (status == q++) {
      cm.askYesNo("现在要参加#b#e<海滨霸主>#n#k吗？\r\n\r\n#r※接受时将在片刻后前往等候地图。\r\n※移动时如果正在组队，将解散队伍，\r\n    #fs16##r#e解除所有增益效果#n#k#fs12#。#k", 4, 9062545);
    } else if (status === q++) {
      cm.updateInfoQuest(100815, "rMap=" + cm.getMapId());
      cm.dispose();
      cm.warp(993194200, 0);
    }
  }
}
function stage0(n, E, l) {
  if (status == 0 && n == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = l;
  var q = -1;
  if (status <= q++) {
    cm.dispose();
  } else {
    if (status == q++) {
      cm.askYesNo("");
    } else if (status == q++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(n, E, l) {
  if (status == 0 && n == 0) {
    cm.dispose();
    return;
  }
  if (n == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = l;
  var q = -1;
  if (status <= q++) {
    cm.dispose();
  } else {
    if (status == q++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == q++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}