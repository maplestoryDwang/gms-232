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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("对了！有件重要的事情，我差点忘记告诉你！", 37, 3003209, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("如果你想沿着河水逃出去，我劝你最好放弃。这里的河水非常危险。", 37, 3003209, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("如果你掉入河中，#b就会瞬间失去所有力气#k，\r\n然后你会被#b分解为艾尔达的形态。#k\r\n是不是非常可怕啊？", 37, 3003209, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            } else {
              cm.dispose();
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