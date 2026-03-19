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
      cm.npc_ChangeController(9400668, "oid=3710372", 1500, -5, 19, 1450, 1550, 1, true, false);
      cm.npc_SetSpecialAction("oid=3710372", 'summon', 0, 0);
      cm.npc_ChangeController(9400632, "oid=3710373", 1300, -5, 21, 1250, 1350, 1, true, false);
      cm.npc_SetSpecialAction("oid=3710373", "summon", 0, 0);
      cm.npc_ChangeController(9400633, "oid=3710374", 1250, -5, 21, 1200, 1300, 1, true, false);
      cm.npc_SetSpecialAction("oid=3710374", "summon", 0, 0);
      cm.npc_ChangeController(9400634, "oid=3710375", 1200, -5, 22, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=3710375", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400582, "oid=3710376", 130, -5, 6, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710376", 'summon', 0, 0);
      cm.forceStartQuest(64164, 'fight');
      cm.npc_ChangeController(9400583, "oid=3710377", 80, -5, 6, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710377", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(17, [3000, 1000, 2000, 1050, -30]);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3710372", -1, 200, 100);
          cm.npc_SetForceMove("oid=3710373", -1, 1300, 200);
          cm.npc_SetForceMove("oid=3710374", -1, 1300, 200);
          cm.npc_SetForceMove("oid=3710375", -1, 1300, 200);
          cm.sendNormalTalk_Bottom("怪物来了！", 37, 9400599, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('哇啊啊啊啊啊！', 37, 9400599, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=3710372", "armstretch", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(19, [1000]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
                      cm.npc_SetForceMove("oid=3710376", 1, 1000, 200);
                      cm.npc_SetSpecialAction("oid=3710377", "attack2", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0#火箭！", 37, 9400583, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/kaftafellSkill");
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=3710372");
                          cm.npc_LeaveField("oid=3710372");
                          cm.npc_LeaveField("oid=3710373");
                          cm.npc_LeaveField("oid=3710373");
                          cm.npc_LeaveField("oid=3710374");
                          cm.npc_LeaveField("oid=3710374");
                          cm.npc_LeaveField("oid=3710375");
                          cm.npc_LeaveField("oid=3710375");
                          cm.npc_LeaveField("oid=3710376");
                          cm.npc_LeaveField("oid=3710376");
                          cm.npc_LeaveField("oid=3710377");
                          cm.npc_LeaveField("oid=3710377");
                          cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.playerMessage(-1, "去消灭木栅里的剧毒打嗝怪。");
                          cm.spawnMobLimit(9402268, 1, 1035, -45, 1);
                          cm.spawnMobLimit(9402301, 1, 50, -45, 1);
                          cm.spawnMobLimit(9402304, 1, -100, -45, 1);
                          cm.dispose();
                          cm.forceJoinEvent("莫奈德_地图_Act2.4_保卫新村");
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