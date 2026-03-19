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
  } else if (status === V++) {
    cm.npc_ChangeController(3003766, "oid=2306641", -1135, 200, 15, -1185, -1085, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=2306641", "summon", 0, 0);
    cm.npc_ChangeController(3003759, "oid=2306642", -1210, 200, 30, -1260, -1160, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306642", "summon", 0, 0);
    cm.npc_ChangeController(3003760, "oid=2306643", -1045, 200, 20, -1095, -995, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306643", 'summon', 0, 0);
    cm.npc_ChangeController(3003758, "oid=2306644", -540, 200, 13, -590, -490, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306644", 'summon', 0, 0);
    cm.npc_ChangeController(3003758, "oid=2306645", 445, 200, 11, 395, 495, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306645", 'summon', 0, 0);
    cm.npc_ChangeController(3003759, "oid=2306646", -215, 200, 4, -265, -165, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306646", "summon", 0, 0);
    cm.npc_ChangeController(3003759, "oid=2306647", 1225, 200, 31, 1175, 1275, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306647", "summon", 0, 0);
    cm.npc_ChangeController(3003760, "oid=2306648", 690, 200, 24, 640, 740, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306648", "summon", 0, 0);
    cm.npc_ChangeController(3003761, "oid=2306649", 40, 200, 1, -10, 90, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2306649", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2306641", "down", -1, 1);
    cm.npc_SetSpecialAction("oid=2306642", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306643", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306644", 'alert', -1, 1);
    cm.npc_SetSpecialAction("oid=2306645", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306646", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306647", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306648", "alert", -1, 1);
    cm.npc_SetSpecialAction("oid=2306649", "alert", -1, 1);
    cm.addPopupSay(0, 2500, "#face0#怪物发起攻击了！大家小心一点！", '', 0);
    cm.addPopupSay(3003758, 1000, "一直涌过来！", '', 0);
    cm.getTopMsgFont("必须将区域内的怪物消灭到一定数量以下才能前往下个关卡。", 3, 20, 4, 0, 0);
    cm.dispose();
  } else {
    cm.dispose();
  }
}