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
      cm.resetMap(cm.getMapId());
      cm.getMap().spawnReactorIfNotExist(8659138, 0, -551, 96, 0, "snow1");
      cm.getMap().spawnReactorIfNotExist(8659139, 0, -303, 116, 0, "snow2");
      cm.getMap().spawnReactorIfNotExist(8659140, 0, -515, 85, 0, 'snow3');
      cm.getMap().spawnReactorIfNotExist(8659141, 0, -409, 123, 0, 'fire1');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background("fire1", 0);
      cm.Hidden_background('snow1', 0);
      cm.Hidden_background("snow2", 0);
      cm.Hidden_background("snow3", 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b（这好像是猎人们用的临时住处？）", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [5000, 500, 100, 0, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
                    cm.sendNormalTalk_Bottom("#b（夜幕就快降临了……在这里歇一晚再走好了。）", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(19, [2000]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b（先把雪扫了，生堆火。）", 57, 0, false, true);
                        } else if (status === V++) {
                          cm.updateInfoQuest(64010, 'enter=1');
                          cm.forceCompleteQuest(64010);
                          cm.forceStartQuest(64011, '');
                          cm.Hidden_background("fire1", 1);
                          cm.Hidden_background('snow1', 1);
                          cm.Hidden_background("snow2", 1);
                          cm.Hidden_background('snow3', 1);
                          cm.setStandAloneMode(false);
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