var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_Monologue("\r\n#fs50#欢迎来到[BMS]冒险岛\r\n同步更新150\r\n解卡命令@ea \r\n快速回程@fm \r\n打开万能NPC命令@wn", 1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("\r\n#fs60#请和修嘉完成对话领取新手礼包哦.", 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else if (status === V++) {
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, true);
            cm.setStandAloneMode(false);
            cm.enableActions();
            cm.dispose();
          } else {
            cm.dispose();
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