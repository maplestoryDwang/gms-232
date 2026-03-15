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
      cm.askAcceptDecline_Bottom("#face0#现在马上出发吗？", 36, 9401278, 1);
    } else if (status === v++) {
      cm.forceStartQuest(65980, '');
      cm.dispose();
      cm.openNpc(9110002, "墨玄_寻找武神的痕迹");
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
      cm.npc_ChangeController(9401348, "oid=206796", 451, -943, 8, 401, 501, 1, false, 0, false);
      cm.sendNormalTalk_Bottom("#face4#呼，呼……人年纪一大，爬山都觉得累了。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#差不多到了，就在前面。", 37, 9401278, true, true, 1);
      } else if (status === v++) {
        cm.updateInfoQuest(65980, "chk=1;portal=1");
        cm.forceCompleteQuest(65980);
        cm.dispose();
      }
    }
  }
}