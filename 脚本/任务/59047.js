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
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
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
      cm.sendNormalTalk("你是来救我的吧!!请把我从这里弄出去。", 0, 9390316, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("吹牛大王汤姆委托我在这里寻找他的母亲。", 2, 9390316, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("啊?是我们汤姆救了我?我的儿子汤姆……\n不愧是我的儿子汤姆……", 0, 9390316, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("那你快离开这里吧~！(接受后，立即移动到村庄)", 0, 9390316);
          } else if (status === v++) {
            cm.forceCompleteQuest(59047);
            cm.gainExp(3841);
            cm.dispose();
            cm.warp(866000000, 1, false);
          }
        }
      }
    }
  }
}