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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/horrorpiano", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Text(["#fn黑体##fs26#下一个故事"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你知道我们学校为什么这么多鬼吗……？", 37, 1530180, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH4_04/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那都是有原因的。我接下来说的话都是真的。", 37, 1530180, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH4_04/2", 100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/spinOff1/title", 0, 1500, 0, -50, 12, 4, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(5500);
                    cm.effect_Text(["#fn黑体##fs24#Chapter 4\r\n#fs18#~ 占卜少女卡珊德拉与学校怪谈 ~"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0]);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(100000004, 0);
                    cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;