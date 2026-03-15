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
      cm.askAcceptDecline_Bottom("#face0#等准备好了，就先去拿下附近的#r敏捷巴伊托兹#k吧。\r\n任务难度为最低，成功后将发放10点点数作为奖励。", 36, 3004908, 1);
    } else if (status === v++) {
      cm.forceStartQuest(39404, '');
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
      cm.sendNormalTalk_Bottom("#face0#已确认该隐完成任务，\r\n将发放10点点数。", 36, 3004908, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(39404);
      cm.getPlayer().levelUp();
      cm.updateInfoQuest(39400, "51=h0;53=h1");
      cm.updateInfoQuest(39400, "51=h0;53=h1;73=h1");
      cm.dispose();
    }
  }
}