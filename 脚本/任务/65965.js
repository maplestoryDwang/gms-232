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
      cm.sendNormalTalk_Bottom("#face3#墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "！发现你大师兄的行踪了！这次是在冰峰雪域！", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face3#我已经派小兰过去了。你马上去见见她！\r\n\r\n#r（※接受时，自动移动到冰峰雪域。）", 36, 9401278, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#小兰就在冰峰雪域。你去见见她，听听详细的情况。", 37, 9401278, false, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65965, '');
          cm.dispose();
          cm.warp(211000000, 13, false);
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
      cm.sendNormalTalk_Bottom("#face0#大侠！这里！", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#虽然你才刚到，但是时间紧迫，现在马上移动到发现大师兄的地方去吧！", 37, 9401283, 1);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(875003041, 0, false);
      }
    }
  }
}