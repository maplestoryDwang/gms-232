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
      cm.sendNormalTalk_Bottom("#face0#到达冒险岛世界后，找找射手村弓箭手培训中心负责率领各位冒险家的赫丽娜，应该能帮到你。", 36, 3000001, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#那你现在就用次元传送口吧。\r\n\r\n #r（※接受后自动前往任务地图。）#k", 36, 3000001, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#会在现在这个点出现，来到这里，以及下一趟旅程，都是神指定之路的一部分。", 36, 3000001, false, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#希望能在那条路上留下美好的回忆。", 36, 3000001, true, true, 1);
          } else if (status === v++) {
            cm.dispose();
            cm.warp(993164044, 0, false);
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