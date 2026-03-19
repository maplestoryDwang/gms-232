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
      cm.npc_ChangeController(9400641, "oid=7610166", 600, 440, 4, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=7610166", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7610167", 550, 100, 4, 500, 600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7610167", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7610168", 500, 440, 4, 450, 550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7610168", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7610169", 0, 450, 4, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=7610169", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=7610170", 1150, 440, 5, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=7610170", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7610171", 1200, 440, 5, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7610171", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7610172", 1250, 440, 5, 1200, 1300, 1, true, false);
      cm.npc_SetSpecialAction("oid=7610172", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7610173", 1300, 440, 5, 1250, 1350, 1, true, false);
      cm.npc_SetSpecialAction("oid=7610173", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 825, 409);
      cm.inGameDirectionEvent_ChangeEquipment([1103125]);
      cm.setMobImage("PL_MONAD.img/EP1/ACT2/forestwind_loop", 100);
      cm.inGameDirectionEvent_MoveAction(6);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(3);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('#face0#呀！', 37, 9400580, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b艾丽卡！你没事吧？", 56, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#呀！太有趣了！", 37, 9400580, true, true);
              cm.npc_LeaveField("oid=7610166");
              cm.npc_LeaveField("oid=7610167");
              cm.npc_LeaveField("oid=7610168");
              cm.npc_LeaveField("oid=7610169");
              cm.npc_LeaveField("oid=7610170");
              cm.npc_LeaveField("oid=7610171");
              cm.npc_LeaveField("oid=7610172");
              cm.npc_LeaveField("oid=7610173");
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b来这边！", 56, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else if (status === V++) {
                  cm.warp(867201540, 0, true);
                  cm.forceCompleteQuest(64077);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=7610166");
                  cm.npc_LeaveField("oid=7610167");
                  cm.npc_LeaveField("oid=7610168");
                  cm.npc_LeaveField("oid=7610169");
                  cm.npc_LeaveField("oid=7610170");
                  cm.npc_LeaveField("oid=7610171");
                  cm.npc_LeaveField("oid=7610172");
                  cm.npc_LeaveField("oid=7610173");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;