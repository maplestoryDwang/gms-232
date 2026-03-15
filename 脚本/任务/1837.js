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
      cm.askYesNo("消灭掉各20个的#o9306206#和#o9306207#了吗？", 0, 9075202);
    } else if (status === v++) {
      cm.forceStartQuest(1840, '9');
      cm.forceCompleteQuest();
      cm.sendNormalTalk("怪物强化模块体验结束了。好好利用进化系统，应该可以获得好的结果。", 0, 9075202, false, true);
      cm.gainItem(4310060, 3);
      cm.dispose();
    }
  }
}