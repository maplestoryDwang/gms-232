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
      cm.sendNormalTalk("既然已经知道了古龙，爱丝卡达大人的存在，爆莉萌天使你就要好好修炼，争取能够更加自由的运用古龙之力。", 0, 3001002, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("嗯……对。", 4, 3000132, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("所以我在#b空虚幻境#k为你量身打造了一款#b修炼课程#k。请跟我来。", 0, 3001002, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("力量已经可以发挥自如了啊？", 2, 3001002, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("你这样想也无可厚非。因为你是在胡乱运用比自身强大的力量。不过古龙的力量可不是只有这么点。通过修炼，可以获得更强大的力量。不是吗，爱丝卡达。", 0, 3001002, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("当然了。我的力量可不止如此。", 4, 3000132, true, true);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline("(既然爱丝卡达都这么说了，好吧。修炼什么时候开始？)", 2, 3001002);
                } else if (status === v++) {
                  cm.forceStartQuest(31626, '');
                  cm.sendNormalTalk("那么，通过#b#p3001003##k开始修炼就行了。修炼结束后，再来找我吧。", 0, 3001002, false, true);
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
      cm.sendNormalTalk("波波拉的修炼已经结束了吗？\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 59,432", 0, 3001002, false, true);
    } else {
      if (status === v++) {
        cm.forceCompleteQuest(31626);
        cm.gainExp(59432);
        cm.sendNormalTalk("怎么样？身上是不是充满了古龙的力量？呵呵呵。训练课程马上就结束了，要努力啊。", 0, 3001002, true, true);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(940100000, 0, false);
      }
    }
  }
}