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
      if (cm.isQuestActive(64040)) {
        cm.warp(867200852, 0);
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(9400622, 'oid=201898', -510, 313, 1, -560, -460, 5, true, false);
      cm.npc_ChangeController(9400623, "oid=201899", -410, 313, 1, -460, -360, 5, true, false);
      cm.npc_ChangeController(9400620, "oid=201900", -460, 313, 1, -510, -410, 5, true, false);
      cm.npc_ChangeController(9400591, "oid=201901", 45, 313, 1, -5, 95, 5, true, false);
      cm.npc_ChangeController(9400593, 'oid=201902', -2, 313, 1, -52, 48, 4, true, false);
      cm.npc_ChangeController(9400596, "oid=201903", 1034, 313, 1, 984, 1084, 4, true, false);
      cm.npc_ChangeController(9400587, "oid=201904", 1095, 313, 1, 1045, 1145, 4, true, false);
      cm.npc_ChangeController(9400580, "oid=201905", 346, 313, 1, 296, 396, 5, true, false);
      cm.npc_ChangeController(9400584, "oid=201906", 411, 313, 1, 361, 461, 5, true, false);
      cm.npc_ChangeController(9400588, "oid=201907", 666, 313, 1, 616, 716, 5, true, false);
      cm.npc_ChangeController(9400617, "oid=201908", 896, 313, 1, 846, 946, 5, true, false);
      cm.npc_ChangeController(9400618, 'oid=201909', 541, 313, 1, 491, 591, 5, true, false);
      cm.npc_ChangeController(9400589, "oid=201910", 600, 313, 1, 550, 650, 5, true, false);
      cm.npc_ChangeController(9400583, "oid=201911", -346, 313, 1, -396, -296, 5, true, false);
      cm.npc_ChangeController(9400619, 'oid=201912', -150, 313, 1, -200, -100, 4, true, false);
      cm.npc_ChangeController(9400595, "oid=201913", 783, 313, 1, 733, 833, 5, true, false);
      cm.npc_ChangeController(9400630, "oid=201914", 980, 313, 1, 930, 1030, 4, true, false);
      cm.npc_ChangeController(9400571, 'oid=201915', 1177, 313, 1, 1127, 1227, 1, false, false);
      cm.forceStartQuest(64166, "happy");
      cm.npc_ChangeController(9400582, "oid=4250245", -600, 300, 1, -650, -550, 0, true, false);
      cm.npc_SetSpecialAction("oid=4250245", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#b给大家伙分发木柴和肉吧。", 57, 0, false, true);
    } else if (status === V++) {
      cm.playerMessage(-1, "给大家伙分发木柴和肉吧");
      cm.forceCompleteQuest(64037);
      cm.forceStartQuest(64038, '');
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;