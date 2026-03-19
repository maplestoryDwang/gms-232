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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face4#小破孩，我迟早要捏死你……", 37, 3004322, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice5.img/CH1/Elwyn/17", 128);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#他到底是什么人？\r\n居然一眼就看出了自己是沼泽幻化出的艾尔达#fc0xFF8f8f8f#投影#k。", 37, 3004323, true, true);
        cm.effect_Voice("Voice5.img/CH1/Lily/21", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#还有，他使用的魔法……\r\n我甚至不知道那能否称为‘魔法’。", 37, 3004323, true, true);
          cm.effect_Voice("Voice5.img/CH1/Lily/22", 128);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm50/TearsOfTheWorld", 0, 0);
                  cm.sendNormalTalk_Bottom("啊，这里是……", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.forceCompleteQuest(39720);
                    cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
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