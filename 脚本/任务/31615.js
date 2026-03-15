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
      cm.sendNormalTalk("你怎么会来这里？不过我提醒你，要小心哦。幽灵们的行动不太对劲。看来是有人泄漏了#r苍龙炮运送计划#k。如果这些家伙是为抢夺苍龙炮而来，可就麻烦了。", 0, 3001010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("(好像猜到了泄密的人是谁……) 还是一样啊，狂龙战士。只要我们两个齐心协力，任何挡在我们面前的人和事物都不可能阻止我们。就让我们用实力解决这一切吧。", 2, 3001010, true, true);
      } else {
        if (status === v++) {
          cm.askAcceptDecline("…爆莉萌天使，无论你有多强大，我都不能把这种事交给你。虽然有很多事让你去做，但#r暴力战场#k和你的气质完全不符。#b破坏和扰乱格兰蒂斯的事都由我来做#k。我来拖延时间，你负责将苍龙炮运去#b#p3001000##k那里。", 0, 3001010);
        } else if (status === v++) {
          cm.forceStartQuest(31615, '');
          cm.sendNormalTalk("一切，拜托你了。", 1, 3001010, false, true);
          cm.gainItem(4033388, 1);
          cm.npc_LeaveField("oid=1082998");
          cm.dispose();
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