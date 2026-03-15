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
      cm.sendNormalTalk("#h0#，这里的冒险让你心情愉悦吗？\r\n我听说你已经经历无数次冒险了。\r\n冒险家家族为你准备了一份小小的报答。", 4, 1012100, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("要领取#b#t1190300##k吗？", 4, 1012100);
      } else if (status === v++) {
        cm.forceCompleteQuest(32233);
        cm.sendNormalTalk("冒险家本该是最自由的存在。\r\n\r\n但这个时代在你面前铺开了一条艰难的道路。\r\n\r\n希望你怀着无所畏惧的勇气，将试炼看做是自己的冒险，勇敢前行吧。", 4, 1012100, false, false);
        cm.gainItem(1190300, 1);
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