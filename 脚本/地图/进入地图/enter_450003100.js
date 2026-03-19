var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(34325) && cm.getQuestStatus(34326) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(3003201, "oid=48289", -374, 1, 1, -424, -324, 0, false, 0, false);
      cm.npc_ChangeController(3003209, "oid=48290", -463, 1, 1, -513, -413, 4, true, 0, false);
      cm.npc_ChangeController(3003217, "oid=48291", 57, -143, 2, 7, 99, 1, false, 0, false);
      cm.npc_ChangeController(3003220, "oid=48292", 22, 1, 1, -28, 72, 1, false, 0, false);
      cm.npc_ChangeController(3003214, 'oid=48293', -67, -143, 2, -117, -17, 1, false, 0, false);
      cm.updateInfoQuest(34340, "enter=7");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face1#你有没有试过在无法摆脱的梦境中不断挣扎？", 37, 3003250, false, true);
        cm.effect_Voice("Voice3.img/Lucid/Q3/0", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#即使知道是梦，却无法挣脱，那种无力感\r\n你有没有感受过？", 37, 3003250, true, true);
          cm.effect_Voice("Voice3.img/Lucid/Q3/1", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#你不妨期待下。\r\n现在才刚刚开始。", 37, 3003250, true, true);
            cm.effect_Voice("Voice3.img/Lucid/Q3/2", 128);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/Lacheln/0", 0, 2000, 0, -80, 1, 4, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly1", 200);
                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly2/buterfly", 'animation', '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                      } else if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm46.img/LachelntheIllusionCity", 0, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;