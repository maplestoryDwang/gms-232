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
      cm.spawnMobLimit(2700027, 1, -87, 43, 100);
      cm.spawnMobLimit(2700028, 1, 131, 43, 100);
      cm.spawnMobLimit(2700027, 1, 342, 43, 100);
      cm.spawnMobLimit(2700028, 1, 362, 43, 100);
      cm.spawnMobLimit(2700027, 1, 571, 43, 100);
      cm.spawnMobLimit(2700028, 1, 551, 43, 100);
      cm.spawnMobLimit(2700027, 1, 689, 43, 100);
      cm.spawnMobLimit(2700028, 1, 715, 43, 100);
      cm.spawnMobLimit(2700027, 1, 745, 43, 100);
      cm.spawnMobLimit(2700028, 1, 825, -248, 100);
      cm.spawnMobLimit(2700027, 1, 1121, 43, 100);
      cm.spawnMobLimit(2700028, 1, 1234, 43, 100);
      cm.spawnMobLimit(2700027, 1, 1244, 43, 100);
      cm.spawnMobLimit(2700027, 1, 1254, 43, 100);
      cm.spawnMobLimit(2700027, 1, 1451, -167, 100);
      cm.spawnMobLimit(2700028, 1, 1574, -167, 100);
      cm.npc_ChangeController(1530190, "oid=37850034", 600, 20, 5, 550, 650, 1, true, false);
      cm.npc_SetSpecialAction("oid=37850034", "summon", 0, 0);
      cm.npc_SetForceMove("oid=37850034", 1, 1000, 100);
      cm.sendNormalTalk_Bottom("请悄悄跟着那个可疑的看门大叔。\r\n注意不要踩到地上的物品，以免发出声音。", 37, 1530050, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else if (status === V++) {
        cm.npc_LeaveField("oid=37850034");
        cm.npc_LeaveField("oid=37850034");
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;