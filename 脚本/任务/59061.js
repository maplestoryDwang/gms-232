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
      cm.sendNormalTalk("看见你,就让我想起了反抗黑魔法师冒险岛世界的英雄们……", 0, 9390312, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("是!我也听奶奶说过,所以都知道!那我能不能见到那些英雄们呢?", 2, 9390312, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嗯,是哦……不过,金银岛的人会不会知道关于英雄们的事情呢?", 0, 9390312, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("要去金银岛的话，你就前往村庄外围的#m866000220#吧。在那里可以乘船。", 0, 9390312, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("那么，我祝愿你的冒险旅途一帆风顺！你肯定能成为一名了不起的英雄！", 0, 9390312, true, true);
            } else if (status === v++) {
              cm.forceStartQuest(59061, '');
              cm.OnStartNavigation(866000220, 0, '', 0);
              cm.dispose();
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