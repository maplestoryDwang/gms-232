var status = -1;
var selectionLog = [];
function start(G, M, d) {
  if (status == 0 && G == 0) {
    cm.dispose();
    return;
  }
  if (G == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = d;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else {
    if (status == K++) {
      cm.sendNormalTalk("#b#h0##k，谢谢你一直以来的帮助。", 0, 1064002, false, true, 0);
    } else {
      if (status === K++) {
        cm.sendNormalTalk("虽然我现在还没有完全恢复自由之身，但是我给为了帮助我而来到鲁塔比斯的人们准备了一些#b礼物#k。", 0, 1064002, true, true, 0);
      } else {
        if (status === K++) {
          cm.sendNormalTalk("不过，这个#b礼物#k的力量十分强大，不是谁都能承担得起的。请你通过我最后的#b考验#k，证明自己的能力吧。如果你能通过，那我就会送给你只有#b真正的强者#k才能获得的礼物。", 0, 1064002, true, true, 0);
        } else {
          if (status === K++) {
            cm.askAcceptDecline("怎么样？你想接受#b考试#k吗？\r\n\r\n#r（注意:接受后无法放弃任务。）", 0, 1064002);
          } else {
            if (status === K++) {
              cm.forceStartQuest();
              cm.sendNormalTalk("请你利用自己强大的力量，消灭#b10次#k#b进阶贝伦#k。", 0, 1064002, false, true, 0);
            } else {
              if (status === K++) {
                cm.sendNormalTalk("给你#i1142905:# #b#t1142905##k作为礼物吧。", 0, 1064002, true, true, 0);
              } else {
                if (status === K++) {
                  cm.sendNormalTalk("对了，如果你能通过#b消灭4名进阶守护者#k的考验，就能有资格挑战将各个#b勋章#k拥有的能力集合起来的#i3700339:# #b#t3700339##k资格。", 0, 1064002, true, true, 0);
                } else {
                  if (status === K++) {
                    cm.sendNormalTalk("我相信你，我在这里等你的消息。", 0, 1064002, true, false, 0);
                  } else if (status === K++) {
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
}
function end(G, M, d) {
  if (status == 0 && G == 0) {
    cm.dispose();
    return;
  }
  if (G == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = d;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else if (status == K++) {
    cm.sendNormalTalk("你真是太了不起了！请收下这份礼物！#b#i1142905##z1142905#", 0, 1064002, true, false, 0);
    cm.forceCompleteQuest();
    cm.gainItem(1142905, 1);
    cm.forceCompleteQuest(15099);
    cm.dispose();
  }
}