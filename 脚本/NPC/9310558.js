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
      if (cm.isQuestFinished(62116)) {
        cm.askMenu_Bottom("噢！你来了，我等候多时了。这里有一堆只有你才能解决的任务啊！#b\r\n#L0#怎么提升豫园等级？#l\r\n#L1##t4310177#有什么用处？#l\r\n#L2#昨天进行的委托消失了！#l\r\n#L3#没什么问题#l", 32, 9310558);
      } else if (cm.isQuestFinished(62116)) {
        cm.askMenu_Bottom("嗨，有时间没？这里有不少事情需要你的帮忙！#b\r\n#L0#怎么提升豫园等级？#l\r\n#L1##t4310177#有什么用处？#l\r\n#L2#昨天进行的委托消失了！#l\r\n#L3#没什么问题#l", 32, 9310558);
      } else {
        cm.askMenu_Bottom("喂，面生的小屁孩，有什么问题尽管问我~！#b\r\n#L0#怎么提升豫园等级？#l\r\n#L1##t4310177#有什么用处？#l\r\n#L2#昨天进行的委托消失了！#l\r\n#L3#没什么问题#l", 32, 9310558);
      }
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    if (cm.isQuestFinished(62116)) {
      cm.sendNormalTalk_Bottom("你怎么像个新手一样？你看起来没有可以提升的等级啊。", 37, 9310558, false, true);
    } else if (cm.isQuestFinished(62116)) {
      cm.sendNormalTalk_Bottom("继续帮助村民们吧。你应该有那样的能力吧？\r\n如果你帮助豫园的人们，评价自然就会变好，你的豫园等级也会得到提升。所以，继续努力吧。", 37, 9310558, false, true);
    } else {
      cm.sendNormalTalk_Bottom("小屁孩，你想提高豫园等级吗？那你就先帮助一下村民们吧。你应该有那样的能力吧？\r\n如果你帮助豫园的人们，评价自然就会变好，你的豫园等级也会得到提升。所以，稍微努力下吧。", 37, 9310558, false, true);
    }
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#t4310177#的用处多多。\r\n首先，用它可以每晚8点到10点出现的黑市商人那里买到好东西，还能去#p9310556#那里查看运势。\r\n啊！听说最近把#t4310177#交给#p9310557#就能制作衣服。你在村子里好好找找，有很多地方都能使用它！", 37, 9310558, false, true);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("什么啊，昨天收到的委托昨天就结束了啊！每日委托在每晚12点就会重置，所以一定！要在此之前完成委托，领取奖励。", 37, 9310558, false, true);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}