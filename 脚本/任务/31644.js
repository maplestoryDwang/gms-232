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
      cm.sendNormalTalk("#b(噗呜呜呜呜呜呜呜呜呜呜呜-！！)#k\r\n\r\n呃啊！呜啊！咚！啊，是D-03啊。嗯、啊、啊，咳咳。喂？", 2, 3001030, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("你好，我是#p3001004#。祝贺你完成了所有任务。", 0, 3001030, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嘿嘿，没什么。我只是做了该做的事情而已……", 2, 3001030, true, true);
        } else if (status === v++) {
          cm.gainItem(4033461, -1);
          cm.gainExp(77904);
          cm.forceCompleteQuest(31644);
          cm.dispose();
        }
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