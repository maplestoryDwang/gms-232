var status = -1;
var selectionLog = [];
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
      cm.useItem(2210135, true);
      cm.spawnMobLimit(8240075, 1, -162, -126, 5);
      cm.spawnMobLimit(8240075, 1, 499, 60, 5);
      cm.spawnMobLimit(8240075, 1, 778, 60, 5);
      cm.spawnMobLimit(8240075, 1, 1680, 60, 5);
      cm.spawnMobLimit(8240075, 1, 1237, -178, 5);
      if (cm.getNumberFromQuestInfo(33124, 'check2') > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.updateInfoQuest(33188, "pran=1;court=2;scoreR=4;scoreS=4;Tscore=30;kill=Noclear");
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1600, 18);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(5689);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("警备还挺森严的嘛？", 37, 1540460, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不过，这样是无法阻拦我的。哈哈！", 37, 1540460, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
                      cm.dispose();
                      cm.setNumberForQuestInfo(33124, "check2", 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;