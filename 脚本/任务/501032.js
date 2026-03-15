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
      cm.sendNormalTalk("你能帮我，我真的很开心……", 4, 1012108, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("如果你能收集到所有的#b#e闪耀花瓣#n#k，我就送你花笺，并把花语也一起告诉你。", 4, 1012108, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("#b#e闪耀花瓣#n#k……你能现在马上去收集吗？", 4, 1012108);
        } else {
          if (status === v++) {
            cm.updateInfoQuest(501031, "current=1");
            cm.updateInfoQuest(501032, "count=0");
            cm.forceStartQuest(501032, '');
            cm.forceStartQuest(501034, '');
            cm.sendNormalTalk("那就请你去收集#b#e闪耀花瓣#n#k，然后交给我……", 4, 1012108, false, false);
          } else if (status === v++) {
            cm.dispose();
          }
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
      var e = cm.addNumberForQuestInfo(501033, "count", 1);
      cm.setNumberForQuestInfo(501032, 'count', 0);
      cm.forceCompleteQuest();
      cm.sendNormalTalk("太感谢你了……请收下这份#b花笺#k吧。\r\n\r\n#b#h0##k，现在你拥有的花笺数量是#b#e" + e + "个#n#k……", 4, 1012108, false, true);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}