var status = -1;
var selectionLog = [];
function start(v, k, W) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = W;
  var Z = -1;
  if (status <= Z++) {
    cm.dispose();
  } else {
    if (status == Z++) {
      cm.sendNormalTalk("#b#h0##k，谢谢你一直以来的帮助。", 0, 1064002, false, true, 0);
    } else {
      if (status === Z++) {
        cm.sendNormalTalk("你已经通过了#b消灭4名进阶守护者#k的考验，有资格挑战将各个#b勋章#k拥有的能力集合起来的#i3700339:# #b#t3700339##k资格了。", 0, 1064002, false, true, 0);
      } else {
        if (status === Z++) {
          cm.askAcceptDecline("怎么样？你想接受#b考试#k吗？\r\n\r\n#r（注意:接受后无法放弃任务。）", 0, 1064002);
        } else {
          if (status === Z++) {
            cm.forceStartQuest();
            cm.sendNormalTalk("请你利用自己强大的力量，分别消灭#b进阶半半，进阶皮埃尔，混沌血腥女王，进阶贝伦#k#b各10次#k。", 0, 1064002, false, true, 0);
          } else {
            if (status === Z++) {
              cm.sendNormalTalk("我相信你，我在这里等你的消息。", 0, 1064002, true, false, 0);
            } else if (status === Z++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function end(v, k, W) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = W;
  var Z = -1;
  if (status <= Z++) {
    cm.dispose();
  } else if (status == Z++) {
    cm.sendNormalTalk("你真是太了不起了！请收下这份礼物！#b#i3700339##z3700339#", 0, 1064002, true, false, 0);
    cm.forceCompleteQuest();
    cm.gainItem(3700339, 1);
    cm.dispose();
  }
}