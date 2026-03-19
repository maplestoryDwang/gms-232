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
    cm.npc_ChangeController(1540446, "oid=33181", 1712, 88, 6, 1662, 1762, 0, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350012010");
    cm.forceCompleteQuest(33152);
    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
    cm.setAmbience("Ambience.img/bird", 100, 60);
    cm.npc_ChangeController(1540451, "oid=12991444", 2098, -49, 118, 2048, 2148, 1, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991444", "summon", 0, 0);
    cm.npc_ChangeController(1540454, "oid=12991445", 870, 70, 34, 820, 920, 0, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991445", "summon", 0, 0);
    cm.npc_ChangeController(1540455, "oid=12991446", 340, 70, 22, 290, 390, 0, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991446", "summon", 0, 0);
    cm.npc_ChangeController(1540456, "oid=12991447", 15, 70, 25, -35, 65, 0, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991447", "summon", 0, 0);
    cm.npc_ChangeController(1540461, "oid=12991448", 655, -64, 89, 605, 705, 1, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991448", "summon", 0, 0);
    cm.npc_ChangeController(1540462, "oid=12991449", -150, 60, 43, -200, -100, 1, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991449", "summon", 0, 0);
    cm.npc_ChangeController(1540463, "oid=12991450", -350, 60, 26, -400, -300, 1, true, 1000, false);
    cm.npc_SetSpecialAction("oid=12991450", "summon", 0, 0);
    cm.npc_SetForceMove("oid=12991444", -1, 2750, 150);
    cm.cameraSwitch_PushSwitchMoveInfo('南哈特', 7000);
    cm.addPopupSay(1540451, 2000, "请跟我来. ", "Voice3.img/BlackHeaven/nh/1", 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;