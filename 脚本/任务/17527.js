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
      cm.sendNormalTalk("如果能最终让贝勒德的头部瘫痪，就能让他的力量减半。", 0, 9390120, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("如果能让他的肚脐瘫痪，他就会变弱很多。肚脐瘫痪之后，保护他的灵气就会变弱，体力就会减半。和头部战斗的时候各种状态异常效果的发生次数也会大大减少。", 0, 9390120, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("怎么样？你想试试看吗？", 0, 9390120);
        } else {
          if (status === v++) {
            cm.forceStartQuest(17527, '');
            cm.sendNormalTalk("如果能先让他的肚脐瘫痪，就能向着制服贝勒德迈出一大步。", 0, 9390120, false, false);
          } else if (status === v++) {
            cm.dispose();
          }
        }
      }
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
      cm.sendNormalTalk("祝贺你。你成功地让贝勒德的肚脐瘫痪了。没想到你拥有这么强的力量，看来应该用不了多久就能让贝勒德恢复原来状态。接下去该进行下一阶段的工作了。", 0, 9390120, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("为了对你的强大力量表示祝贺，我要送你一份礼物。请收下吧。", 0, 9390120, true, true);
      } else {
        if (status === v++) {
          cm.gainExp(Math.pow(cm.getLevel(), 3) * 10);
          cm.forceCompleteQuest();
          cm.sendNormalTalk("我已经把奖励送给你了。请到背包中去确认一下。", 0, 9390120, true, false);
          cm.gainItem(4310097, 2);
        } else if (status === v++) {
          cm.dispose();
        }
      }
    }
  }
}