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
    cm.forceStartQuest(31637, '');
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
      cm.sendNormalTalk("这是……怎么了？最近生意怎么如此冷清……", 0, 3001031, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#p3001005#！听说你因为囤积居奇，陷入了困境！所以我决定将#p3001005#的囤货全，部，都买下。嘻嘻。\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 106,969\r\n#i4033392:# #t4033392:# 1个", 2, 3001031, true, true);
      } else if (status === v++) {
        cm.gainExp(106969);
        cm.forceCompleteQuest(31637);
        cm.sendNormalTalk("谢谢。这下本月的业绩总算能打个平手了。\r\n#b(看着充满感激的#p3001005#，心里松了口气？现在去把囤货交给#p3001006#吧。)#k", 0, 3001031, true, false);
        cm.gainItem(4033390, -1);
        cm.gainItem(4033392, 1);
        cm.dispose();
      }
    }
  }
}