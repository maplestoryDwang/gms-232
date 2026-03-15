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
      cm.sendNormalTalk("汤姆跟我说了趾甲的事情, 你能帮我搜集些趾甲吗?那样的话, 我就告诉村中的人汤姆所言属实。", 0, 9390312, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("是真的吗?村长如果想成为英雄的话, 也不能说谎! ", 2, 9390312, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("当然啦! 你忘记啦, 贤者大部分都是老人! ", 0, 9390312);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("那就拜托你了。一定要闪闪发光的东西哦!", 0, 9390312, false, true);
          } else if (status === v++) {
            cm.forceStartQuest(59039, '');
            cm.warp(866000010, 0, false);
            cm.dispose();
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