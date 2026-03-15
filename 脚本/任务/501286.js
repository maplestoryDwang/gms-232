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
      cm.askYesNo("你好 #b#h0##k! 为了纪念版本更新，正在发放 #r#i4001839#: #t4001839##n#k.\r\n要用现在的角色领取吗?\r\n\r\n#e#b- 活动期间 : 04-07 7:00 ~ 04-13 23:59\r\n- 奖励在服务器内只能获得1次.#n", 4, 9310650);
    } else if (status === v++) {
      cm.sendNormalTalk("#b#t4001839:# 500个#k已经发放给你了!\r\n祝你冒险快乐~!\r\n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#e#i4001839:# #t4001839:# 500个#n#k", 5, 9310650, false, true);
      cm.gainItem(4001839, 500);
      cm.forceCompleteQuest(501286);
      cm.dispose();
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