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
      cm.sendNormalTalk_Bottom("#face0#现在该把哪个任务摆在首位？是营救王子？还是消灭恶魔？", 36, 2570104, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("哪个都不是。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("哈丁，我们骑士团的任务是什么？", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我们的任务是#b守护圣瑞尼亚#k。", 36, 2570101, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#直到最后的最后，只要圣瑞尼亚还剩下一位百姓，\r\n我们就会永远#b守护圣瑞尼亚#k。", 36, 2570101, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("答对了。", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("走，我们去守护圣瑞尼亚。", 56, 0, true, true, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(37805, '');
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}