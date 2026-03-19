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
      cm.npc_ChangeController(9400582, "oid=4241181", 330, 355, 2, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241181", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=4241182", -30, 355, 2, -80, 20, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241182", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241183", 230, 355, 2, 180, 280, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241183", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241184", 130, 355, 2, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241184", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241185", 30, 355, 2, -20, 80, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241185", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241186", -130, 355, 1, -180, -80, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241186", 'summon', 0, 0);
      cm.npc_ChangeController(9400629, "oid=4241187", -230, 355, 1, -280, -180, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241187", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=4241188", 370, 355, 2, 320, 420, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241188", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.addPopupSay(9400582, 2000, "#face0#哈啊！", '', 0);
        cm.npc_SetSpecialAction("oid=4241181", "attack2", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=4241188", 'die1', 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(1440);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.npc_LeaveField("oid=4241188");
            cm.npc_LeaveField("oid=4241188");
            cm.npc_LeaveField("oid=4241181");
            cm.npc_LeaveField("oid=4241181");
            cm.npc_LeaveField("oid=4241182");
            cm.npc_LeaveField("oid=4241182");
            cm.npc_LeaveField("oid=4241183");
            cm.npc_LeaveField("oid=4241183");
            cm.npc_LeaveField("oid=4241184");
            cm.npc_LeaveField("oid=4241184");
            cm.npc_LeaveField("oid=4241185");
            cm.npc_LeaveField("oid=4241185");
            cm.npc_LeaveField("oid=4241186");
            cm.npc_LeaveField("oid=4241186");
            cm.npc_LeaveField("oid=4241187");
            cm.npc_LeaveField("oid=4241187");
            cm.spawnMobLimit(9402301, 1, 330, 324, 1);
            cm.spawnMobLimit(9402314, 1, 230, 324, 4);
            cm.spawnMobLimit(9402314, 1, 130, 324, 4);
            cm.spawnMobLimit(9402314, 1, 30, 324, 1);
            cm.spawnMobLimit(9402304, 1, -30, 324, 1);
            cm.spawnMobLimit(9402314, 1, -130, 324, 4);
            cm.spawnMobLimit(9402314, 1, -230, 324, 4);
            cm.spawnMobLimit(9402313, 1, -330, 324, 2);
            cm.spawnMobLimit(9402313, 1, -430, 324, 2);
            cm.spawnMobLimit(9402246, 1, 530, 324, 100);
            cm.spawnMobLimit(9402245, 1, 630, 324, 100);
            cm.spawnMobLimit(9402245, 1, 730, 324, 100);
            cm.spawnMobLimit(9402243, 1, 830, 324, 100);
            cm.spawnMobLimit(9402242, 1, 930, 324, 100);
            cm.spawnMobLimit(9402242, 1, 1030, 324, 100);
            cm.spawnMobLimit(9402241, 1, 1130, 324, 100);
            cm.addPopupSay(9400582, 2000, "#face0#哈-呀-嚯-哐！", '', 0);
            cm.addPopupSay(9400582, 2000, "#face0#看我天下第一帅凯恩的特技，风暴突破斩！", '', 0);
            cm.forceJoinEvent("莫奈德_地图_Act1.5_雪地突围");
            cm.dispose();
            cm.cancelItem(2210209);
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