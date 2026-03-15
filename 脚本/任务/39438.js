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
      cm.sendNormalTalk_Bottom("#face0#冒险岛世界和格兰蒂斯相互影响，\r\n也许现如今再来划分两个次元已经毫无意义。", 36, 3003655, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#眼下我们迫切需要像你这样的能人志士帮助，\r\n请你一定要与我们并肩作战。", 36, 3003655, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face0#该隐，请你帮忙，\r\n助我们勇士同盟一臂之力。", 36, 3003655, 1);
        } else if (status === v++) {
          cm.teachSkill(60030190, 0, -1);
          cm.teachSkill(60030190, 1, 0);
          cm.playerMessage(-1, "已获得<联盟的意志>技能。");
          cm.playerMessage(5, "已获得<联盟的意志>技能。");
          cm.forceCompleteQuest(39438);
          cm.sendNormalTalk_Bottom("#face0#这股特殊的力量能够证明你已经成为了联盟的一员，\r\n愿你能汇集同盟的力量，为两个世界带来和平与宁静……", 36, 3003655, false, true, 1);
          cm.dispose();
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