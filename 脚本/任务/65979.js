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
      cm.sendNormalTalk_Bottom("#face0#大侠！我收到了风乞丐分舵主的联系！", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#他说找到了存放武神记录的寺院，让你到玄山去一趟。\r\n没想到就在这么近的地方。你想现在出发吗？\r\n#r（※接受时，自动移动到任务地图。）", 36, 9401283, 1);
      } else if (status === v++) {
        cm.forceStartQuest(65979, '');
        cm.dispose();
        cm.warp(875000100, 3, false);
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
      cm.sendNormalTalk_Bottom("#face1#虽然猜到是在江湖之内，但没想到就在这么近的地方。俗话说灯下黑，看来是没错。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#寺院就位于玄山山脚的烛台峰中麓。", 36, 9401278, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#快出发吧！争取在太阳落山之前赶到。", 37, 9401278, true, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65997, '2');
          cm.forceCompleteQuest(65979);
          cm.dispose();
        }
      }
    }
  }
}