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
      cm.sendNormalTalk("喂……", 0, 3001031, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#p3001005#？听说发生了不好的事情。", 2, 3001031, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("可不是啊。某人受了#p3001004#那坏蛋的唆使，把我的#b蓝筹股#k全部买光了！~", 0, 3001031, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("什么意思？#p3001004#的唆使。我是受了#p3001006#的委托……", 2, 3001031, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("别说谎了！所有的事情都已经很清楚了。经过对#b上周留下的金币#k的追踪，已经确定是#b#p3001004#的物品#k。这样还要说谎吗？", 0, 3001031, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("不是的，我是受了#p3001006#的委托，想帮助#p3001005#和#p3001004#重归于好才这么做的。", 2, 3001031, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("(将和#p3001006#之间的事全部说出来。)", 2, 3001031, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("嗯……如果你说的全都是事实，那我跟#p3001004#闹僵也许从一开始就是#p3001006#的阴谋。我得跟#p3001004#联系一下。请稍后再跟我联系。\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 13,871", 0, 3001031, true, true);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(31640);
                    cm.gainExp(13871);
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