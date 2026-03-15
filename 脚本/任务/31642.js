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
  } else if (status == v++) {
    cm.forceStartQuest(31642, '');
    cm.dispose();
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
      cm.sendNormalTalk("#p3001002#！我来拿#t4033391#！你一定会为我制作的哦？", 2, 3001002, false, true);
    } else {
      if (status === v++) {
        cm.askMenu("嗯。我已经收到通知了。但是作为想要加入影子商团的人，不应该不知道这个啊……\r\n\r\n#b#L0#直接做吧~快点~#l\r\n#L1# 嗯……代价？！#l#k", 0, 3001002);
      } else {
        if (status === v++) {
          cm.askText("这样才对嘛。什么比较好呢……只要你叫我一声#b“尤兰斯哥哥”#k，我就帮你做一个假金币袋。", "(什么哥哥，怎么看都是大叔啊。)", 3001002, 0, 50, 0);
        } else if (status === v++) {
          cm.forceCompleteQuest(31642);
          cm.gainExp(35904);
          cm.sendNormalTalk("吼吼吼。听着真是美啊~被叫做哥哥。给，这是我们说好的假金币袋，确认一下吧。如果你20分钟内没有使用的话，就要再叫我一次“尤兰斯哥哥”啦。", 0, 3001002, false, true);
          cm.gainItem(4033391, 1);
          cm.dispose();
        }
      }
    }
  }
}