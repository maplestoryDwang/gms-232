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
      cm.npc_ChangeController(1052220, "oid=218953", 144, 147, 1, 94, 168, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 160);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 70, 160);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 160);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b（总觉得吉他里有点奇怪的动静。）", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kurningTower/rockSpirit2", 250);
                    cm.sendNormalTalk_Bottom("叽……叽叽叽叽……嗡嗡……叽叽叽叽叽…………", 37, 1052220, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(910310520, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.playerMessage(5, "吉他中跳出了可疑的怪物。看样子得将其消灭。");
                        cm.playerMessage(-1, "吉他中跳出了可疑的怪物。看样子得将其消灭。");
                        cm.spawnMobLimit(4310015, 1, 262, 97, 1);
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