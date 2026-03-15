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
      cm.updateInfoQuest(100630, "point=0");
      cm.updateInfoQuest(501096, "cCount=0;date=21/01/29;coinCount=0;todayRecord=0;cName=0;record=0");
      cm.sendNormalTalk("时隔千年来访的人原来是你，#b#h0##k。\r\n我是负责#b#e<仙人岩修炼场>#k#n的#b#p9062334##k。", 4, 9062334, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e<仙人岩修炼场>#k#n是传说中的仙人们修炼的地方，可以根据挑战结果获得#b觉醒铸币#k。\r\n时隔千年，难得见到你这位访客，我想给你个机会去挑战一下……", 4, 9062334, true, true);
      } else {
        if (status === v++) {
          cm.updateInfoQuest(100630, "point=0;start=1");
          cm.askYesNo("怎么样？你要挑战一下在#b#e仙人岩修炼场#n#k里进行修炼吗？", 4, 9062334);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(993184200, 2, false);
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