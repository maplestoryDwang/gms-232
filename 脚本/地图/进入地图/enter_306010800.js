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
      cm.updateInfoQuest(32679, "enter=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("曾经高高在上的狮子王之城，如今变成了一片废墟。", 0);
        cm.effect_Voice("Voice3.img/DLep4/g/g_1.mp3", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#r鲜红的火花#k在城中四处乱窜", 0);
          cm.effect_Voice("Voice3.img/DLep4/g/g_2.mp3", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("喷泉中流动的不是雪化成的水，而是#r咕嘟咕嘟冒着热气的岩浆#k。", 0);
            cm.effect_Voice("Voice3.img/DLep4/g/g_3.mp3", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue('', 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("还有，不知为何而死的人们……", 0);
                cm.effect_Voice("Voice3.img/DLep4/g/g4.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("他们是怀着怎样的怨恨与诅咒闭上眼睛的呢……", 0);
                  cm.effect_Voice("Voice3.img/DLep4/g/g_5.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('', 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else if (status === V++) {
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.effect_NormalSpeechBalloon("#fn黑体##fs18#太可怕了……", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("#fn黑体##fs18#这里面……真的有人在吗。", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;