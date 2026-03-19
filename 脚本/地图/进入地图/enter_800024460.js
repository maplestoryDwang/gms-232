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
      cm.getMap().resetReactors();
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#怎么办，村里种的黄瓜不能用于祭祀……", 37, 9111035, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果是天然黄瓜的话，可以用于祭祀！摘5根黄瓜回去吧！\r\n#r(※请点击空格键进行采集。)#k", 37, 9111035, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else if (status === V++) {
                cm.eventSKill(0);
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