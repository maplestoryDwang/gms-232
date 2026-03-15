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
      cm.sendNormalTalk_Bottom("#face0#我正打算为了新的画作去补齐用光的材料呢……", 36, 3005103, false, true, 1);
    } else {
      if (status === v++) {
        cm.askYesNo_Bottom("#face0#这次也能帮上忙吗？", 36, 3005103, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#那是当然！", 36, 3005100, false, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#谢谢，我还真是欠了啦啦不少人情呢。", 36, 3005103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#这次需要的是用来洗毛笔的水，你能去#m410004004#捕捉#b50只#k#b#o8645221##k，找到#b10个#k#t4036784#吗？", 37, 3005103, true, true, 1);
            } else if (status === v++) {
              cm.forceStartQuest(36230, '');
              cm.OnStartNavigation(410004004, 0, '', 36230);
              cm.dispose();
            }
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
      cm.sendNormalTalk_Bottom("#face0#啊，回来了啊。", 36, 3005103, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#顺利找到水了吗？", 36, 3005103, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#嗯，在这里！", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#谢谢，多亏了你，我应该能画出不错的画来了。", 36, 3005103, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(36230);
            cm.gainExp(1714);
            cm.gainExp(1404);
            cm.gainItem(4036784, -10);
            cm.dispose();
          }
        }
      }
    }
  }
}