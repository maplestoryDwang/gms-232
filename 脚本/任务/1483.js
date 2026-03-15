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
      cm.askMenu("好久不见，#b#h0##k。\r\n在<神秘河>的冒险如何？\r\n\r\n#b#L0#虽然有些累，但挺有意思的。#l", 4, 2140001);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("虽然我跟你相距甚远，但对你的活跃表现也是相当了解，\r\n现在的你已经超出了我的预期，能够相当熟练地操控#b全新的力量#k了呢。", 4, 2140001, false, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("虽然我没法直接帮助你，但我会指点你更好地使用#b新的力量#k。", 0, 2140001, true, true);
        } else {
          if (status === v++) {
            cm.forceCompleteQuest(1483);
            cm.openUI(1130);
            cm.sendNormalTalk("愿#b新的力量#k能对你有所帮助。", 1, 2140001, true, true);
          } else if (status == v++) {
            cm.forceStartQuest();
            cm.dispose();
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