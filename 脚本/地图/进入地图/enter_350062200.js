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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.playVideoByScript("BlackHeaven5.avi");
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540495, "oid=286537139", 200, -17, 1, 150, 250, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=286537139", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=286537139", 'orcaangry5', -1, 1);
            cm.npc_ChangeController(1540460, "oid=286537140", -20, -33, 1, -70, 30, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=286537140", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.setAmbience("Ambience.img/gravity", 80, 60);
                cm.sendNormalTalk_Bottom("#face2#奥尔卡……！", 37, 1540460, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm41.img/BigMachine_mission", 0, 0);
                  cm.sendNormalTalk_Bottom("#face1#快藏起来，弗朗西斯。", 37, 1540490, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#我要用斯乌最后的力量，了结格里梅尔。", 37, 1540490, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350062410, 0, true);
                      cm.npc_LeaveField("oid=286537139");
                      cm.npc_LeaveField("oid=286537139");
                      cm.npc_LeaveField("oid=286537140");
                      cm.npc_LeaveField("oid=286537140");
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