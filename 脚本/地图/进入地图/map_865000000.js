var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(64630) && !cm.isQuestFinished(64633)) {
    cm.updateInfoQuest(64631, "enter=1");
    cm.setPartner(1, 9400944, 80011836, 0);
    cm.setPartner(1, 9400945, 80011837, 0);
  } else if (cm.isQuestActive(17614)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("这里就是凯梅尔兹的首都#e#b桑凯梅尔兹#k#n吗？", 17, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 5000, 526);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(14007);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(凯梅尔兹的首都真的很大啊。能重新见到莱文吗？我还是先去达尼尔拉商团比较好。)#k", 17, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("去向那边的那个人问问路吧。", 17, 0, true, true);
                } else if (status === V++) {
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
                  cm.forceStartQuest(17614, '到达');
                  cm.forceCompleteQuest(17614);
                  cm.forceCompleteQuest(17711);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;