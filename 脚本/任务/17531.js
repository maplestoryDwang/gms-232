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
      cm.sendNormalTalk("好的，现在要再提高一点难度吗？贝勒德拥有3个主要的核，破坏掉的数量越少，他就会越强。", 0, 9390120, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("虽然可能会有点困难，不过希望你能试一下只破坏掉1个部位，就直接攻击头部的方法。那样可以获得更好的道具，我也会给你对应的奖励。", 0, 9390120);
      } else {
        if (status === v++) {
          cm.forceStartQuest();
          cm.setNumberForQuestInfo(17533, 'ing', 1);
          cm.setNumberForQuestInfo(17533, '3', 0);
          cm.sendNormalTalk("很好。请你去破坏贝勒德的1个核，打倒贝勒德之后，再回来找我。", 0, 9390120, false, true);
        } else if (status === v++) {
          cm.dispose();
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
      cm.sendNormalTalk('真了不起。', 0, 9390120, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("为了向你的强大力量表示敬意，我要送你一份礼物。请收下吧。", 0, 9390120, true, true);
      } else if (status === v++) {
        cm.forceCompleteQuest();
        cm.setNumberForQuestInfo(17533, "ing", 0);
        cm.gainExp(Math.pow(cm.getLevel(), 3) * 10);
        cm.gainItem(4310097, 6);
        cm.dispose();
      }
    }
  }
}