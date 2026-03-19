var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("试穿看看", 1, 9330203, false, true);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(52410, "job=1;equip=1");
          cm.emotion(2, 10000);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.gainItem(2000004, 5);
            cm.gainItem(2000000, 10);
            cm.gainItem(2000003, 10);
            cm.sendNormalTalk("怎样?吓到了吗?", 1, 9330203, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("太，太开心了，所以，无话可说。", 3, 9330203, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("好!我从现在开始也是宏武团的一份子!", 3, 9330203, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("如果想象父亲一样成为优秀的侠客,就要更认真的修炼了!", 3, 9330203, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("小姐你开心，连我的心情也变好。对了我要去帮团长，要走了。就算没有我，你也不能疏于修炼！", 1, 9330203, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("恩，知道了!秀禾!谢谢!!", 3, 9330203, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(52408);
                            cm.dispose();
                            cm.warp(743000000, 0, false);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
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