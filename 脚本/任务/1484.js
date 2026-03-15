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
      cm.sendNext("根据从卡莱尔那里听来的各种情报和进一步的确认，#b#e原初之力#n#k是一种关于古代神的特殊力量，只有装备上#b原初徽章#k这一烙印，才能在这里发挥真正的力量。", 3004431);
    } else {
      if (status == v++) {
        cm.sendNextPrev("#b#h0 ##k，我先将我找到的1个原初徽章给你。\r\n\r\n#e#b#i1713000##z1713000#", 3004431);
      } else {
        if (status == v++) {
          cm.sendNextPrev("不过为了发挥出真正的力量，必须要更大程度地强化#b原初徽章#k。", 3004431);
        } else {
          if (status == v++) {
            cm.sendNextPrev("为此最好是和在这里进行研究的祭司们聊一聊。", 3004431);
          } else {
            if (status == v++) {
              cm.sendOk("#b#h0 ##k是联盟最重要的战斗力， 一定要时刻准备好发挥出百分百的实力。", 3004431);
            } else if (status == v++) {
              cm.forceCompleteQuest();
              cm.gainItem(1713000, 1);
              cm.getTopMsgFont("装备原初徽章后，可以对全新的怪物造成更多的伤害。", 3, 20, 20, 0);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}