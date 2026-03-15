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
      cm.sendNormalTalk("方法就只有一个,那就是消灭#o9390915#。", 0, 9390312, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk(" ( 嗯, 那个不是我说过的嘛。但你是怎么知道#o9390915#的?  ", 2, 9390312, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嗯, 当然要消灭……", 2, 9390312, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("只要消灭首领，其余的人将不战自败……你能去消灭首领吗？", 0, 9390312);
          } else {
            if (status === v++) {
              cm.sendNormalTalk(" （没时间回答了。快出发吧）", 2, 9390312, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#o9390915#应该不大容易对付哦……", 0, 9390312, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("  （明明知道, 还在装蒜???） ", 2, 9390312, true, true);
                } else if (status === v++) {
                  cm.OnStartNavigation(866000150, 0, "pt01", 59049);
                  cm.forceStartQuest(59049, '');
                  cm.updateInfoQuest(59400, 'quick=1');
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