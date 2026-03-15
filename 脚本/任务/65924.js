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
      cm.sendNormalTalk_Bottom("#face3#我准备好了！", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b你这家伙。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face4#不要放水哦，墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！\r\n\r\n#r（※接受时，自动移动到任务地图。）", 37, 9401277, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65924, '');
          cm.dispose();
          cm.openNpc(9110002, '墨玄_与素笑对练');
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