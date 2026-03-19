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
  } else if (status === V++) {
    cm.npc_ChangeController(1540446, "oid=34244", 81, -237, 11, 31, 131, 0, false, false);
    cm.npc_ChangeController(1540551, "oid=34245", -1279, -118, 18, -1303, -1229, 0, false, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350020100");
    cm.npc_ChangeController(1540550, "oid=23641983", -820, -154, 16, -870, -770, 1, true, false);
    cm.npc_SetSpecialAction("oid=23641983", "summon", 0, 0);
    cm.npc_SetForceMove("oid=23641983", 1, 350, 100);
    cm.cameraSwitch_PushSwitchMoveInfo('赫丽娜', 2500);
    cm.addPopupSay(1540453, 2000, "#h0#, 原来你在这里啊. ", "Field.img/flowervioleta/wink");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;