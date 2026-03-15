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
      cm.askYesNo("消灭掉#o9306005#和#o9306100#，修正链接5的错误了吗？", 0, 9075204);
    } else {
      if (status === v++) {
        cm.forceStartQuest(1840, '5');
        cm.forceCompleteQuest(1825);
        cm.gainExp(Math.pow(cm.getPlayer(), 3) * 10);
        cm.sendNormalTalk("修正了链接5的错误。校正技术强化训练成功结束。", 0, 9075204, false, true);
        cm.gainItem(4310060, 1);
      } else if (status === v++) {
        cm.dispose();
      }
    }
  }
}