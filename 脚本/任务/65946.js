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
      cm.sendNormalTalk_Bottom("#face0#墨、墨玄大侠！！！！", 36, 9401299, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#嗯，黑衣人出现了！在村庄外围，外围！燃烧的仓库！", 36, 9401299, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face0#呼，呼……沿着这条路一直走，就能看见着火的仓库了！黑衣人正在那里……！\r\n\r\n#r（※接受时，自动移动到任务地图。）", 36, 9401299, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65946, '');
          cm.dispose();
          cm.openNpc(9110002, "墨玄_黑衣人登场");
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