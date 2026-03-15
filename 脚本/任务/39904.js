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
      cm.sendNormalTalk_Bottom("#face0#材料已经收集够了。谢谢。", 36, 3004442, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo_Bottom("#face0#城墙上好像缺人手。\r\n您要去西城墙看看吗？", 36, 3004442);
      } else if (status === v++) {
        cm.forceStartQuest(39904, '');
        cm.setStringForQuestInfo(39900, '03', 'h1');
        cm.OnStartNavigation(410000580, 1, "3004503", 39904);
        cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#啊，#h0#。你来得正好，这边人手不够。", 36, 3004435, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(39904);
      cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
      cm.dispose();
    }
  }
}