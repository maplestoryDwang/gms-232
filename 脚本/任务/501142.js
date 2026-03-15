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
      cm.sendNormalTalk("\r\n你好，#b#h0##k！", 0, 9062316, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n我给你介绍一下为参加#e<联盟竞技场SEASON 1>#n的勇士们准备的#e#b每日胜利任务#k#n。", 0, 9062316, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n执行任务的方法非常简单。\r\n只要你每天在#e<联盟竞技场SEASON 1>#n里获得#e#b一次以上的胜利#k#n，我就给你发放以下礼物。\r\n\r\n#e<任务奖励>#n\r\n #e#b#i2450167:# #t2450167:# 1个\r\n#i2614018:# #t2614018:# 1个#k#n", 0, 9062316, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n那么，今天也祝你在#e<联盟竞技场SEASON 1>#n里玩得愉快！", 0, 9062316, true, true);
          } else if (status === v++) {
            cm.updateInfoQuest(501142, "tuto=1");
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}