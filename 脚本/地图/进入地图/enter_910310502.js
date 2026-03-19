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
      cm.npc_ChangeController(1052207, 'oid=218920', -86, 361, 3, -136, -36, 1, false, false);
      cm.npc_ChangeController(1052247, "oid=218921", 95, 361, 4, 72, 145, 0, false, false);
      cm.npc_ChangeController(1052248, "oid=218922", -307, 361, 2, -357, -257, 1, false, false);
      cm.npc_ChangeController(1052249, 'oid=218923', -193, 361, 3, -214, -143, 1, false, false);
      cm.npc_ChangeController(1052250, "oid=218924", 21, 361, 3, -29, 32, 1, false, false);
      cm.npc_ChangeController(1052251, "oid=218925", 195, 361, 4, 145, 245, 1, false, false);
      cm.npc_ChangeController(1052252, "oid=218926", -372, 361, 2, -422, -322, 0, false, false);
      cm.npc_ChangeController(1052253, "oid=218927", 249, 361, 4, 199, 299, 1, false, false);
      cm.updateInfoQuest(34437, "c0=1;c1=1");
      cm.fieldEffect_PlayBGM("SoundEff.img/kurningTower/busking", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b（听到了轻快的吉他声，顺着声音跟过去，说不定能找到有明星潜质的人。）#k", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, -85, 249);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.sendNormalTalk_Bottom("强劲有力的吉他声，很有魅力！", 37, 1052251, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你什么时候出道啊？我完全被迷住了呢！", 37, 1052253, false, true);
                } else {
                  if (status === V++) {
                    cm.forceCompleteQuest(34439);
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/ruby/0", 0, 1000, 0, -90, 12, 4, 0);
                        cm.sendNormalTalk_Bottom("#face0#嘻嘻，谢谢大家的倾听！那，我就继续下一首歌了！", 37, 1052231, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#那，还请大家支持我到最后哦！", 37, 1052231, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 200);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(103041000, 0);
                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;