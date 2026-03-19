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
      cm.npc_ChangeController(3004012, 'oid=257832', 1406, 64, 21, 1391, 1456, 1, false, false);
      cm.npc_ChangeController(3004007, "oid=257833", 1078, -186, 12, 1058, 1089, 4, true, false);
      cm.npc_ChangeController(3004046, "oid=257834", 663, -186, 9, 613, 677, 0, false, false);
      cm.npc_ChangeController(3004007, "oid=257835", 539, -186, 9, 539, 589, 5, true, false);
      cm.npc_ChangeController(3004007, "oid=257836", 982, -186, 11, 932, 1018, 5, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004008, "oid=7155954", 663, -247, 9, 613, 713, 0, true, false);
          cm.npc_SetSpecialAction("oid=7155954", 'summon', 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("水位上升了！！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#咕噜咕噜！！", 37, 3004007, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#快跑……机器交给我……", 37, 3004008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("但是！", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这个……我穿了……防护服……", 37, 3004008, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(940203213, 0);
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