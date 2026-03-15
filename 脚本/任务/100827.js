var status = -1;
var selectionLog = [];
function start(s, Y, W) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  if (s == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = W;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else if (status == j++) {
    cm.openUI(1300);
    cm.dispose();
  }
}
function stage0(s, Y, W) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = W;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else {
    if (status == j++) {
      cm.askYesNo("");
    } else if (status == j++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(s, Y, W) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  if (s == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = W;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else {
    if (status == j++) {
      cm.askYesNo("你完成了#b#e<通关冒险岛综艺秀>#n#k节目录制啊！\r\n要现在上传节目，完成任务吗？\r\n\r\n#e[完成奖励]#n\r\n  #r#e200个#i4310312:# #t4310312#\r\n  #r#e100人#i4310314:# #t4310314##n#k", 4, 9062554);
    } else {
      if (status === j++) {
        cm.updateInfoQuest(100853, "state=2");
        cm.addNumberForQuestInfo(501497, "count", 1);
        cm.addNumberForQuestInfo(100828, 'point', 200);
        cm.addNumberForQuestInfo(100828, "today", 200);
        cm.addNumberForQuestInfo(501470, "follower", 100);
        cm.addNumberForQuestInfo(501470, "dailyF", 100);
        cm.sendNormalTalk("#b#e<通关冒险岛综艺秀>#n#k节目已上传！", 4, 9062554, false, false, 0);
      } else {
        if (status === j++) {
          cm.askYesNo("只要花#r#e300个#i4310312##t4310312##n#k，就可以让#b#e每日任务粉丝增长到3倍！#n#k\r\n你要使用#e#b<每日涨粉神器>#n#k吗？\r\n\r\n\r\n#n #r※涨粉神器效果#e仅应用于每日任务#n，\r\n     维持一天。\r\n ※白银等级下粉丝最多仅能累积到#e6000#n。", 4, 9062554);
        } else {
          if (status === j++) {
            cm.sendNormalTalk("如果你想用#b#e<每日涨粉神器>#n#k就告诉我！", 4, 9062554, false, false, 0);
          } else if (status === j++) {
            cm.dispose();
          }
        }
      }
    }
  }
}