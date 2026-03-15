var status = -1;
var selectionLog = [];
function start(w, o, P) {
  if (status == 0 && w == 0) {
    cm.dispose();
    return;
  }
  if (w == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = P;
  var E = -1;
  if (status <= E++) {
    cm.dispose();
  } else {
    if (status == E++) {
      cm.sendNormalTalk("#b#h0##k. 现在已完成消灭堕落的女皇的所有准备。", 0, 2142001, false, true, 0);
    } else {
      if (status === E++) {
        cm.sendNormalTalk("消灭成为了黑魔法师的傀儡的#b希纳斯#k，将她从黑暗中#b解放出来。#k", 0, 2142001, true, true, 0);
      } else {
        if (status === E++) {
          cm.sendNormalTalk("如果你能消灭#b20次#k#b希纳斯#k，就能获得相应的奖励。", 0, 2142001, true, true, 0);
        } else {
          if (status === E++) {
            cm.askAcceptDecline("怎么样？虽然不容易，但你应该会接受我的提议吧？\r\n\r\n#r（注意：接受后无法放弃任务。）", 0, 2142001);
          } else {
            if (status === E++) {
              cm.forceStartQuest(15095, '');
              cm.sendNormalTalk("谢谢！如果你能平安回来，我就把#i1142906:# #b#t1142906##k送给你。", 0, 2142001, false, true, 0);
            } else {
              if (status === E++) {
                cm.sendNormalTalk("对了，即使消灭#b简单模式的女皇#k，也包括在消灭次数里哦。", 0, 2142001, true, true, 0);
              } else {
                if (status === E++) {
                  cm.sendNormalTalk("祝你好运。", 0, 2142001, true, false, 0);
                } else if (status === E++) {
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}
function end(w, o, P) {
  if (status == 0 && w == 0) {
    cm.dispose();
    return;
  }
  if (w == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = P;
  var E = -1;
  if (status <= E++) {
    cm.dispose();
  } else if (status == E++) {
    cm.sendNormalTalk("辛苦你了！请收下这份礼物！#b#i1142906##z1142906#", 0, 1064002, true, false, 0);
    cm.forceCompleteQuest();
    cm.forceCompleteQuest(15101);
    cm.gainItem(1142906, 1);
    cm.dispose();
  }
}