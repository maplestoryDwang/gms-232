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
      if (cm.isQuestFinished(32680)) {
        cm.setAmbience("Ambience.img/blizzard_soft", 60, 60);
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(32680, 'enter=1');
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/woodenbox", 100);
      cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("糟了！车轮还是坏了！", 37, 2550001, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我不是让你小心再小心了吗", 37, 2550002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我说，你不来帮忙就算了……", 37, 2550001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呵呵……对不起哦。我体弱多病……咳咳咳！", 37, 2550002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("刚刚还活蹦乱跳的人，怎么……", 37, 2550001, true, true);
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
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk_Bottom("咳咳！咳咳！", 57, 0, false, true);
                    } else if (status === V++) {
                      cm.setAmbience("Ambience.img/blizzard_soft", 60, 60);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;