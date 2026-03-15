var status = -1;
var selectionLog = [];
function start(Q, T, o) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = o;
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status == r++) {
      if (cm.getNumberFromQuestInfo(501602, "start") > 0) {
        cm.sendNormalTalk("\r\n#b#e<苍穹之审判者荣誉奖励>#n#k\r\n\r\n你还没有攒够游戏点数啊？\r\n多收集点游戏点数来，我的丰厚奖励一定不会让你后悔的！\r\n\r\n#r※可领取时间：截止到2022年3月8日23点59分#k\r\n\r\n#e -世界内游戏点数累计总量：#b120#k#n点游戏点数\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#e1,800点以上：#i2633797:# #t2633797:##l#k#n\r\n#b#e3,600点以上：#i2633798:# #t2633798:##l#k#n", 4, 9062546, false, false, 0);
        cm.dispose();
      }
      cm.sendNormalTalk("\r\n啊！这不是那位很会玩苍穹之审判者的朋友嘛？", 4, 9062546, false, true, 0);
    } else {
      if (status === r++) {
        cm.sendNormalTalk("\r\n每当达到一定分数时，还将发放超赞的#r荣誉奖励#k，一定不会让你后悔的，你可一定要尽情享受游戏的乐趣啊！", 4, 9062546, true, true, 0);
      } else if (status === r++) {
        cm.updateInfoQuest(501602, "start=1");
        cm.dispose();
      }
    }
  }
}
function stage0(Q, T, o) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = o;
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status == r++) {
      cm.askYesNo("");
    } else if (status == r++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(Q, T, o) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = o;
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status == r++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == r++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}