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
      cm.dispelBuff(80011712);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1529, 46);
      cm.Hidden_background("door", 0);
      cm.npc_ChangeController(9400581, "oid=7640486", -1100, 80, 2, -1150, -1050, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640486", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=7640487", -1150, 80, 2, -1200, -1100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640487", "summon", 0, 0);
      cm.forceStartQuest(64163, "riding");
      cm.npc_ChangeController(9400597, "oid=7640488", -1200, 80, 3, -1250, -1150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640488", "summon", 0, 0);
      cm.npc_ChangeController(9400598, "oid=7640489", -1250, 80, 3, -1300, -1200, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640489", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=7640490", -1300, 80, 31, -1350, -1250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640490", 'summon', 0, 0);
      cm.npc_ChangeController(9400580, "oid=7640491", -1600, 80, 8, -1650, -1550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640491", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7640492", -1650, 80, 16, -1700, -1600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640492", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7640493", -1850, 80, 35, -1900, -1800, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640493", "summon", 0, 0);
      cm.npc_ChangeController(9400584, "oid=7640494", -1900, 80, 38, -1950, -1850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640494", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=7640495", -1950, 80, 37, -2000, -1900, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640495", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7640496", -1999, 80, 37, -2049, -1949, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640496", "summon", 0, 0);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7640490", 1, 500, 160);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [6000, 320, 5, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("得… 得救了！我们终于得救啦！", 37, 9400591, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#快，快！托尔逊先过去让他们开门！", 37, 9400597, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("村… 村长！我吗？", 37, 9400598, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那里就是斯库亚斯…？", 37, 9400583, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.Hidden_background("door", 1);
                        cm.onSetMapTagedObjectVisible(1, "door", 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.forceCompleteQuest(64100);
                          cm.warp(867202301, 0);
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