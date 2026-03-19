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
      cm.npc_ChangeController(9400617, "oid=3697725", 790, 330, 3, 740, 840, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697725", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=3697726", 740, 330, 3, 690, 790, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697726", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3697727", 640, 330, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697727", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=3697728", 540, 330, 2, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697728", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3697729", 590, 330, 2, 540, 640, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697729", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=3697730", 690, 330, 2, 640, 740, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697730", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=3697731", 330, 330, 2, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697731", 'summon', 0, 0);
      cm.npc_ChangeController(9400583, "oid=3697732", -30, 330, 2, -80, 20, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697732", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697733", 130, 330, 2, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697733", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697734", 170, 330, 2, 120, 220, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697734", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697735", 110, 330, 2, 60, 160, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697735", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697736", 270, 330, 2, 220, 320, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697736", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697737", 230, 330, 2, 180, 280, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697737", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=3697738", 930, 330, 3, 880, 980, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697738", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=3697739", 1030, 330, 3, 980, 1080, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697739", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=3697740", 830, 330, 3, 780, 880, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697740", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=3697741", 1130, 330, 3, 1080, 1180, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697741", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=3697742", 530, 330, 2, 480, 580, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697742", "summon", 0, 0);
      cm.npc_SetForceMove("oid=3697725", -1, 2000, 210);
      cm.npc_SetForceMove("oid=3697726", -1, 2000, 300);
      cm.npc_SetForceMove("oid=3697727", -1, 2000, 270);
      cm.npc_SetForceMove("oid=3697728", -1, 2000, 230);
      cm.npc_SetForceMove("oid=3697729", -1, 2000, 200);
      cm.npc_SetForceMove("oid=3697730", -1, 2000, 250);
      cm.sendNormalTalk_Bottom('哇啊啊啊啊啊！', 37, 9400619, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=3697725");
          cm.npc_LeaveField("oid=3697725");
          cm.npc_LeaveField("oid=3697726");
          cm.npc_LeaveField("oid=3697726");
          cm.npc_LeaveField("oid=3697727");
          cm.npc_LeaveField("oid=3697727");
          cm.npc_LeaveField("oid=3697728");
          cm.npc_LeaveField("oid=3697728");
          cm.npc_LeaveField("oid=3697729");
          cm.npc_LeaveField("oid=3697729");
          cm.npc_LeaveField("oid=3697730");
          cm.npc_LeaveField("oid=3697730");
          cm.sendNormalTalk_Bottom("#face0#幸好怪物数量不多。快消灭他们就回去吧。", 37, 9400582, false, true);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=3697733");
            cm.npc_LeaveField("oid=3697733");
            cm.npc_LeaveField("oid=3697734");
            cm.npc_LeaveField("oid=3697734");
            cm.npc_LeaveField("oid=3697735");
            cm.npc_LeaveField("oid=3697735");
            cm.npc_LeaveField("oid=3697736");
            cm.npc_LeaveField("oid=3697736");
            cm.npc_LeaveField("oid=3697737");
            cm.npc_LeaveField("oid=3697737");
            cm.npc_LeaveField("oid=3697731");
            cm.npc_LeaveField("oid=3697731");
            cm.npc_LeaveField("oid=3697732");
            cm.npc_LeaveField("oid=3697732");
            cm.npc_LeaveField("oid=3697738");
            cm.npc_LeaveField("oid=3697738");
            cm.npc_LeaveField("oid=3697739");
            cm.npc_LeaveField("oid=3697739");
            cm.npc_LeaveField("oid=3697740");
            cm.npc_LeaveField("oid=3697740");
            cm.npc_LeaveField("oid=3697741");
            cm.npc_LeaveField("oid=3697741");
            cm.npc_LeaveField("oid=3697742");
            cm.npc_LeaveField("oid=3697742");
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.spawnMobLimit(9402301, 1, 330, 291, 1);
            cm.spawnMobLimit(9402304, 1, -411, 291, 1);
            cm.spawnMobLimit(9402314, 1, 230, 291, 5);
            cm.spawnMobLimit(9402314, 1, 130, 291, 5);
            cm.spawnMobLimit(9402314, 1, 30, 291, 5);
            cm.spawnMobLimit(9402314, 1, -130, 291, 5);
            cm.spawnMobLimit(9402314, 1, -230, 291, 5);
            cm.spawnMobLimit(9402313, 1, -330, 291, 2);
            cm.spawnMobLimit(9402243, 1, -430, 291, 3);
            cm.spawnMobLimit(9402246, 1, 530, 291, 1);
            cm.spawnMobLimit(9402245, 1, 630, 291, 2);
            cm.spawnMobLimit(9402245, 1, 730, 291, 2);
            cm.spawnMobLimit(9402243, 1, 830, 291, 3);
            cm.spawnMobLimit(9402242, 1, 930, 291, 2);
            cm.spawnMobLimit(9402242, 1, 1030, 291, 2);
            cm.spawnMobLimit(9402241, 1, 1130, 291, 1);
            cm.spawnMobLimit(9402313, 1, -202, 291, 2);
            cm.spawnMobLimit(9402243, 1, -363, 291, 3);
            cm.forceJoinEvent("莫奈德_地图_Act1.10_路见不平");
            cm.dispose();
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