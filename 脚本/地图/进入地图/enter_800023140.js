var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111060, "oid=3867953", 350, -30, 7, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867953", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3867954", 432, -30, 3, 382, 482, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867954", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3867955", 530, -30, 18, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867955", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3867956", 615, -30, 14, 565, 665, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867956", 'summon', 0, 0);
      cm.npc_ChangeController(9111061, "oid=3867957", 33, -30, 8, -17, 83, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867957", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3867958", -73, -30, 5, -123, -23, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867958", 'summon', 0, 0);
      cm.npc_ChangeController(9111061, "oid=3867959", -180, -30, 9, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867959", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3867960", -260, -30, 9, -310, -210, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3867960", "summon", 0, 0);
      cm.npc_ChangeController(9111032, "oid=3867961", 285, -30, 7, 235, 335, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3867961", 'summon', 0, 0);
      cm.npc_ChangeController(9111033, "oid=3867962", 240, -30, 10, 190, 290, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3867962", "summon", 0, 0);
      cm.npc_ChangeController(9111032, "oid=3867963", 200, -30, 10, 150, 250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3867963", "summon", 0, 0);
      cm.npc_ChangeController(9111033, "oid=3867964", 145, -30, 11, 95, 195, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3867964", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哎？什么人！", 37, 9111033, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#这么多狐狸是从哪儿冒出来的？", 37, 9111032, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#领袖，那边那座建筑物就是恶人的老巢！", 37, 9111060, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……走！去那里展现一下我们新技能的威力！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哇啊啊啊-！", 37, 9111061, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("(消灭碍事的流氓团伙！)", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=3867953");
                        cm.npc_LeaveField("oid=3867953");
                        cm.npc_LeaveField("oid=3867954");
                        cm.npc_LeaveField("oid=3867954");
                        cm.npc_LeaveField("oid=3867955");
                        cm.npc_LeaveField("oid=3867955");
                        cm.npc_LeaveField("oid=3867956");
                        cm.npc_LeaveField("oid=3867956");
                        cm.npc_LeaveField("oid=3867957");
                        cm.npc_LeaveField("oid=3867957");
                        cm.npc_LeaveField("oid=3867958");
                        cm.npc_LeaveField("oid=3867958");
                        cm.npc_LeaveField("oid=3867959");
                        cm.npc_LeaveField("oid=3867959");
                        cm.npc_LeaveField("oid=3867960");
                        cm.npc_LeaveField("oid=3867960");
                        cm.npc_LeaveField("oid=3867961");
                        cm.npc_LeaveField("oid=3867961");
                        cm.npc_LeaveField("oid=3867962");
                        cm.npc_LeaveField("oid=3867962");
                        cm.npc_LeaveField("oid=3867963");
                        cm.npc_LeaveField("oid=3867963");
                        cm.npc_LeaveField("oid=3867964");
                        cm.npc_LeaveField("oid=3867964");
                        cm.spawnMobLimit(9400041, 1, 285, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 240, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 200, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 145, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 285, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 240, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 200, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 145, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 285, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 240, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 200, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 145, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 285, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 240, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 200, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 145, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 285, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 240, -25, 100);
                        cm.spawnMobLimit(9400041, 1, 200, -25, 100);
                        cm.spawnMobLimit(9400042, 1, 145, -25, 100);
                        cm.spawnMobLimit(9400043, 1, 350, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 432, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 530, -25, 100);
                        cm.spawnMobLimit(9400043, 1, 615, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 33, -25, 100);
                        cm.spawnMobLimit(9400043, 1, -73, -25, 100);
                        cm.spawnMobLimit(9400044, 1, -180, -25, 100);
                        cm.spawnMobLimit(9400043, 1, -260, -25, 100);
                        cm.spawnMobLimit(9400043, 1, 350, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 432, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 530, -25, 100);
                        cm.spawnMobLimit(9400043, 1, 615, -25, 100);
                        cm.spawnMobLimit(9400044, 1, 33, -25, 100);
                        cm.spawnMobLimit(9400043, 1, -73, -25, 100);
                        cm.spawnMobLimit(9400044, 1, -180, -25, 100);
                        cm.spawnMobLimit(9400043, 1, -260, -25, 100);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else if (status === V++) {
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
  }
}