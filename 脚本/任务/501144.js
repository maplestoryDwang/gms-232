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
        cm.sendNormalTalk("\r\n我给你介绍一下为参加#e<联盟竞技场SEASON 1>#n的勇士们准备的#e#b累计胜利任务#k#n。", 0, 9062316, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n任务执行方法非常简单。\r\n只需在#e<联盟竞技场SEASON 1>#n里获得以下次数的胜利，我就给你发放指定的礼物。\r\n\r\n\r\n #e<累计胜利20次>\r\n#b#i2630512:# #t2630512:# 10个#k#n\r\n\r\n #e<累计胜利50次>\r\n#b#i2632282:# #t2632282:##k#n\r\n\r\n #e<累计胜利100次>\r\n#b#i2632283:# #t2632283:##k#n\r\n", 0, 9062316, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n那么，今天也祝你在#e<联盟竞技场SEASON 1>#n里玩得愉快！", 0, 9062316, true, true);
          } else if (status === v++) {
            cm.updateInfoQuest(501144, "tuto=1");
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