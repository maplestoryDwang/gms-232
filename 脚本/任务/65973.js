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
      cm.sendNormalTalk_Bottom("#face1#大侠！我们发现了魔教残党的动向，这次是尼哈沙漠！", 37, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face1#你大师兄也和他们在一起。请马上到#m260020610#来！快！！\r\n\r\n#r（※接受时，自动移动到任务地图。）", 37, 9401283, 1);
      } else if (status === v++) {
        cm.forceStartQuest(65973, '');
        cm.dispose();
        cm.warp(260020610, 1, false);
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
      cm.sendNormalTalk_Bottom("#face1#这里！我在这里，大侠！", 37, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#我也联系了分舵主，但是路途遥远，可能需要花费不少时间。", 37, 9401283, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3##b大师兄和魔教残党在哪里？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#就在那个对面！但是一个人太危险了。", 37, 9401283, true, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face3##b（犹犹豫豫的话，又会让他跑了！现在马上移动吧！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 1);
            } else if (status === v++) {
              cm.dispose();
              cm.warp(875003050, 0, false);
            }
          }
        }
      }
    }
  }
}