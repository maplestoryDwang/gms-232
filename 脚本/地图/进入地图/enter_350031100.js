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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.setPartner(1, 1540618, 80001613, 0);
      cm.setPartner(1, 1540619, 80001613, 0);
      cm.setPartner(1, 1540634, 80001613, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 3000, 1800, 48);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2165);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 3000, -199, 48);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2165);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("走廊和1号宿舍的士兵好像都救完了。\r\n快到2号宿舍看看吧。", 37, 1540624, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(350031100, 20, 10, 20);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                      } else if (status === V++) {
                        cm.userSetFieldFloating(350031100, 0, 0, 0);
                        cm.dispose();
                        cm.warp(350031200, 0, true);
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