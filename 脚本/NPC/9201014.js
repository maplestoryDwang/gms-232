var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getInfoQuest(33961) == "ing") {
        cm.askMenu("你看上去忧心忡忡啊。找我有什么事吗？#b\r\n\r\n#L2# 我想取消离婚申请。#l\r\n#L1# 不……没什么事。#k#l", 0, 9201014);
      } else {
        cm.askMenu("你看上去忧心忡忡啊。找我有什么事吗？#b\r\n\r\n#L0# 我想离婚。#l\r\n#L1# 不……没什么事。#k#l", 0, 9201014);
      }
    } else {
      if (status === V++) {
        switch (U) {
          case 0:
            cm.askYesNo("我第一次见到你的时候，就已经料到了。你做出这种不幸的决定，真是让我感到遗憾啊。你再好好考虑一下怎么样啊？#r提出离婚申请后，就无法体验结婚后的活动——“结婚纪念活动”了。#k 你真打算离婚吗？", 0, 9201014);
            break;
          case 1:
            cm.dispose();
            break;
          case 2:
            cm.forceCompleteQuest(7615);
            cm.forceStartQuest(1103, "end");
            cm.sendNormalTalk("你回心转意了啊。太好了，这样才对嘛。婚后的生活中虽然会遇到很多辛苦和困难，但如果你们能互相理解和包容，给对方更多的爱，就能体会到幸福所在。", 0, 9201014, false, true);
            cm.dispose();
            break;
        }
      } else {
        if (status === V++) {
          cm.forceStartQuest(1103, "ing");
          cm.forceStartQuest(7615, "21/05/08/14/25");
          cm.sendNormalTalk("结婚可是人生大事，同时也是人生中最大的约定之一。我想你们之间肯定经历了困难和摩擦。但在我看来，你的这一决定着实有点草率啊。", 0, 9201014, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("总之，我先接受你的离婚申请，但我要给你有一个建议。现在起，我给你#b1小时#k的考虑时间，希望你好好想一想，是否真的要离婚，又或者你的决定是否过于草率了呢？", 0, 9201014, true, true);
          } else if (status === V++) {
            cm.sendNormalTalk("如果在此期间你回心转意，请你来找我并告诉我你想取消离婚申请。那我就撤销你的离婚申请。可万一到那时你依旧坚决要离婚的话，我将会正式受理你的离婚申请。#b1小时后见吧。#k", 0, 9201014, true, true);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}