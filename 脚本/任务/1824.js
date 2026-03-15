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
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.startQuestClock(1, 1824, 59000);
    cm.dispose();
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
      cm.askYesNo("消灭掉#o9306006#20次以上了吗？", 0, 9075203);
    } else if (status === v++) {
      cm.forceStartQuest(1840, '4');
      cm.forceCompleteQuest(1824);
      cm.endQuestClock(1, 1824);
      cm.gainExp(Math.pow(cm.getPlayer(), 3) * 10);
      cm.sendNormalTalk("速度强化程序成功结束。", 0, 9075203, false, true);
      cm.gainItem(4310060, 1);
      cm.dispose();
    }
  }
}