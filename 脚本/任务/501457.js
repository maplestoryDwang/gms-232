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
      cm.sendNormalTalk("你的累计购物次数已经达到15次了吗？真了不起啊，#h0#~！", 4, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("怎么样，你要立即领取奖励吗？\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#i2672175# #t2672175# 1个\r\n#i2633555# #t2633555# 1个#k", 4, 9010010);
      } else if (status === v++) {
        cm.forceCompleteQuest(501457);
        cm.sendNormalTalk("给你，这是我答应你的奖励。希望你能用焕新城堡家具，把你的房子装饰得更加华丽~！\r\n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b1个#i2672175# #t2672175#\r\n1个#i2633555# #t2633555##k", 4, 9010010, false, true);
        cm.gainItem(2672175, 1);
        cm.gainItem(2633555, 1);
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