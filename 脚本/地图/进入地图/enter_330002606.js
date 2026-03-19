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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530629, "oid=39862878", 1156, -201, 7, 1106, 1206, 1, false, false);
      cm.npc_SetSpecialAction("oid=39862878", "summon", 0, 0);
      cm.npc_ChangeController(1530627, "oid=39862879", 1034, -90, 5, 984, 1084, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862879", "summon", 0, 0);
      cm.npc_ChangeController(1530628, "oid=39862880", 1223, -120, 11, 1173, 1273, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862880", "summon", 0, 0);
      cm.npc_ChangeController(1530624, "oid=39862881", 1295, -34, 4, 1245, 1345, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862881", 'summon', 0, 0);
      cm.npc_ChangeController(1530632, "oid=39862882", 1165, 34, 16, 1115, 1215, 1, false, false);
      cm.npc_SetSpecialAction("oid=39862882", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=39862883", 520, 50, 21, 470, 570, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862883", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=39862884", 610, 50, 21, 560, 660, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862884", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=39862885", 700, 50, 18, 650, 750, 1, true, false);
      cm.npc_SetSpecialAction("oid=39862885", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 1170, -20);
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
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
              cm.sendNormalTalk_Bottom("#face6#挺不错的嘛，但是到此为止！", 37, 1530621, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm42.img/Demon's eye", 0, 0);
                cm.userSetFieldFloating(330002606, 1, 1, 20);
                cm.npc_SetSpecialAction("oid=39862878", 'sing5', -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 970, -20);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else if (status === V++) {
                    cm.updateInfoQuest(33506, 'enter=2');
                    cm.dispose();
                    cm.warp(330002607, 0);
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