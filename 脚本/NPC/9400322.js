var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestActive(63110)) {
    cm.sendOk("我好想荡秋千……");
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(63110)) {
    cm.sendOk("荡秋千真好玩！");
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b孩子，你为什么不坐上秋千，就这么盯着看？", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我也想荡秋千。可是……我没法坐上去。", 5, 9400322, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b你想荡秋千，可是没法坐上去？", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯，事实上……我非常害怕高高的地方。", 5, 9400322, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b是恐高症啊，但是……这秋千不会荡得太高啊。", 3, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嗯，我也知道。可我还是害怕。", 5, 9400322, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b不过，你还是很想荡秋千吧？", 3, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("当然。", 5, 9400322, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b嗯……好。那我想想解决办法。", 3, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('真的吗？', 5, 9400322, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b嗯，那当然。包在我身上。", 3, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b(话虽这么说……可是该怎么办呢……把眼睛蒙上会不会好一点……)", 3, 0, true, true);
                          } else if (status === V++) {
                            cm.forceStartQuest(63110, '');
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
      }
    }
  }
}