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
      cm.sendNormalTalk("你……想听听我的英雄事迹吗？我一个人对付11只#o9390927#的时候，#o9390927#觉得形势不妙，于是就一边撤退一边说了有关#m866000130#的事情~~你觉得它们是不是很蠢啊？喂……？你那是什么表情啊？", 0, 9390313, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("(这家伙是谁？这么能吹牛。不过，这事关#m866000130#，要不要告诉伍德乐呢？)", 16, 9390313);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("你~~该不会又想告诉伍德乐吧？", 0, 9390313, false, true);
        } else if (status === v++) {
          cm.forceStartQuest(59044, '');
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