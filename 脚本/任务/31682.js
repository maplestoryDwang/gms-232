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
      cm.sendNormalTalk("现在所有准备都已完成！#b#p3001100##k！我们去作慰问演出吧！", 2, 3001100, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("刚开始还有点害羞，现在已经完全放开了呢？", 0, 3001100, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嘿嘿嘿。其实还是不太好意思。但是身体里的另外一个我很喜欢这种场景？！", 2, 3001100, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b(是说我吗？)#k", 4, 3000132, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("#b(.....)#k总之快走吧！", 2, 3001100, true, true);
            } else {
              if (status === v++) {
                cm.askAcceptDecline("吼呼呼呼呼呼呼呼呼……这样啊。那我们走吧？", 0, 3001100);
              } else if (status === v++) {
                cm.forceStartQuest(31682, '');
                cm.dispose();
                cm.warp(940100002, 0, false);
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