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
      cm.askAcceptDecline_Bottom("#face0#在剑斗你的帮助下，我方人员顺利突入了敌阵。不过，真正的战斗才刚刚拉开帷幕。我希望能够趁势继续稳固我方的胜机。所以，可不可以请你接着帮忙击退敌人呢？", 37, 9130000, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#接下来，请你继续深入敌阵，以击倒敌方的武士队长。只要没了指挥官，那么剩下的杂兵就不过是一些乌合之众罢了。", 37, 9130000, false, true, 1);
      } else if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#请你帮忙打倒300名织田军武士队长。啊哈哈，这一战虽然困难，但我愿意相信神那你的实力！", 37, 9130000, true, true, 1);
        cm.forceStartQuest(57455, '');
        cm.OnStartNavigation(807050502, 0, 'out00', 0);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}