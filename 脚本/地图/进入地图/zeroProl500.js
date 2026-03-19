var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40002)) {
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
      cm.updateInfoQuest(40008, "act1=clear;act2=clear");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(神殿很安静。地上积满了灰尘……到处都是蜘蛛网……损坏的雕像……)", 41, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/38", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(第一次进来的时候……就觉得那个雕像非常眼熟。)", 41, 2410008, false, true);
                  cm.effect_Voice("Voice.img/Alpha/39", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b(这个雕像到底是谁……)", 41, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/40", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(8000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b(能解答这个疑问的人，就是在这走廊尽头的那个女人。)", 41, 2410008, false, true);
                          cm.effect_Voice("Voice.img/Alpha/41", 100);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;