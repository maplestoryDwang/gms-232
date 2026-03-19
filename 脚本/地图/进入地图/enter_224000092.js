var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(30453)) {
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
    cm.npc_ChangeController(2074034, "oid=1942887", -990, -137, 115, -1040, -940, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942887", 'summon', 0, 0);
    cm.npc_ChangeController(2074019, "oid=1942888", -795, -68, 110, -845, -745, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1942888", "summon", 0, 0);
    cm.npc_ChangeController(2074105, "oid=1942889", -657, -64, 107, -707, -607, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942889", 'summon', 0, 0);
    cm.npc_ChangeController(2074136, "oid=1942890", -600, -33, 107, -650, -550, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942890", "summon", 0, 0);
    cm.npc_ChangeController(2074107, "oid=1942891", -547, -19, 105, -597, -497, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1942891", "summon", 0, 0);
    cm.npc_ChangeController(2074150, "oid=1942892", -499, -19, 105, -549, -449, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942892", 'summon', 0, 0);
    cm.npc_SetSpecialAction("oid=1942888", "pain3", -1, 1);
    cm.npc_SetSpecialAction("oid=1942887", "die", -1, 1);
    cm.dispose();
  } else {
    if (cm.isQuestFinished(30452)) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
      cm.npc_ChangeController(2074034, "oid=1942518", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942518", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942519", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942519", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1942520", -657, -64, 107, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942520", "summon", 0, 0);
      cm.npc_ChangeController(2074136, "oid=1942521", -600, -33, 107, -650, -550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942521", "summon", 0, 0);
      cm.npc_ChangeController(2074107, "oid=1942522", -547, -19, 105, -597, -497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942522", 'summon', 0, 0);
      cm.npc_ChangeController(2074150, "oid=1942523", -499, -19, 105, -549, -449, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942523", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=1942518", "cry", -1, 1);
      cm.dispose();
    } else if (cm.isQuestFinished(30451)) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
      cm.npc_ChangeController(2074034, "oid=1942266", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942266", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942267", -795, -68, 110, -845, -745, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942267", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1942268", -657, -64, 107, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942268", "summon", 0, 0);
      cm.dispose();
    } else {
      action1(f, E, e);
    }
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2074100, "oid=1942073", 1081, -99, 41, 1031, 1131, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942073", "summon", 0, 0);
      cm.npc_ChangeController(2074034, "oid=1942074", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942074", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#b(追赶可疑者，跑到了洞穴外面。)", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#这里？禁地悬崖？", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#居然会和这个洞穴连在一起……", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -965, -48);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哦，那边！\r\n是那个鬼怪！", 37, 2074100, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.npc_LeaveField("oid=1942073");
                    cm.npc_ChangeController(2074100, "oid=1942089", -795, -68, 110, -845, -745, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1942089", 'summon', 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else if (status === V++) {
                      cm.cameraSwitch_CameraSwitchBack();
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