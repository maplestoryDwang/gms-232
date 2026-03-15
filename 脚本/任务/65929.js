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
      cm.askAcceptDecline_Bottom("#face4#啊哈！首先必须设法减少它们的数量。\r\n先来点热身运动，消灭掉20只狂暴的家兔之后再见吧，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 36, 9401277, 1);
    } else if (status === v++) {
      cm.forceStartQuest(65929, '');
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
      cm.sendNormalTalk_Bottom("#face2#不过……好像少一些了。\r\n对吧？没错吧？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b看上去挺像。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face4#必须调查一下更外围的情况。\r\n我们在河边2见，师弟！", 36, 9401277, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(65929);
          cm.OnStartNavigation(875001101, 1, "9401311", 65930);
          cm.dispose();
        }
      }
    }
  }
}