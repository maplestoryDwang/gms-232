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
      cm.sendNormalTalk_Bottom("#face0#不好意思，这个不行。", 36, 3001250, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#这种等级的情报可不便宜。", 36, 3001250, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我刚刚没有提到过吗？我们一直采用一种交易的形式。", 36, 3001250, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#如果你愿意，是可以接受委托的，另外报价大概是这么多。", 36, 3001250, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#（哇，零有一、二、三、四、五……无穷无尽嘛？）", 36, 3005100, true, true, 1);
            } else if (status === v++) {
              cm.forceStartQuest(36241, '');
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
      cm.sendNormalTalk_Bottom("#face0#谢谢你的好意，不过我没这么多钱。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face6#谢谢你替我操心！不过我没事的，铃铛的事我自己去查清楚就好！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#也不至于道谢嘛，反倒让我不好意思了。", 36, 3001250, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#虽然委托人自己似乎没有意识到……不过确实还挺有趣的。", 36, 3001250, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(36241);
            cm.dispose();
          }
        }
      }
    }
  }
}