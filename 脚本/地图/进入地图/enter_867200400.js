var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.Hidden_background("q64025Obj", 1, 0, 0, 0);
  cm.Hidden_background('guide136', 1, 0, 0, 0);
  cm.Hidden_background("guide137", 1, 0, 0, 0);
  cm.Hidden_background("guide135", 1, 0, 0, 0);
  cm.npc_ChangeController(9400569, 'oid=建筑残骸69', 1696, 362, 39, 1646, 1746, 1, false, false);
  cm.npc_SetSpecialAction("oid=建筑残骸69", "summon", 0, 0);
  cm.npc_ChangeController(9400577, "oid=建筑残骸77", 1175, 92, 61, 1125, 1225, 1, false, false);
  cm.npc_SetSpecialAction("oid=建筑残骸77", 'summon', 0, 0);
  cm.npc_ChangeController(9400578, "oid=建筑残骸78", 1440, 312, 39, 1390, 1490, 1, false, false);
  cm.npc_SetSpecialAction('oid=建筑残骸78', 'summon', 0, 0);
  cm.hideNpc(9400629);
  cm.hideNpc(9400617);
  cm.npc_ChangeController(9400629, "oid=201365", -1930, 367, 6, -1980, -1880, 0, true, 0, true);
  cm.npc_ChangeController(9400617, 'oid=201369', -1855, 374, 6, -1905, -1805, 4, true, 0, true);
  if (cm.isQuestActive(64017)) {
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 2917, 370);
    cm.npc_ChangeController(9400580, "oid=2280726", 2200, 400, 40, 2150, 2250, 1, true, false);
    cm.npc_SetSpecialAction("oid=2280726", "summon", 0, 0);
    cm.npc_ChangeController(9400582, "oid=2280727", 2250, 400, 40, 2200, 2300, 1, true, false);
    cm.npc_SetSpecialAction("oid=2280727", 'summon', 0, 0);
    cm.npc_SetForceMove("oid=2280726", -1, 1100, 100);
    cm.npc_SetForceMove("oid=2280727", -1, 1100, 100);
    cm.playerMessage(-1, "跟上艾丽卡和凯恩。");
    cm.forceStartQuest(64160, "down");
    cm.forceStartQuest(64166, '');
    cm.addPopupSay(9400593, 5000, "妈妈啊……呜呜呜", '', 0);
  } else {
    if (cm.isQuestActive(64018)) {
      cm.Hidden_background("guide136", 1, 1, 0, 0);
      cm.Hidden_background("guide137", 1, 1, 0, 0);
      cm.Hidden_background("guide135", 1, 1, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1513, 284);
      cm.npc_ChangeController(9400580, "oid=2280880", 1070, 200, 67, 1020, 1120, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280880", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=2280881", 1200, 250, 39, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=2280881", "summon", 0, 0);
      cm.playerMessage(-1, "收拾开建筑物的残骸，寻找照片和帽子。");
    } else {
      if (cm.isQuestFinished(64022) && cm.isQuestActive(64021)) {
        cm.npc_ChangeController(9400592, "oid=4212906", -1000, 330, 11, -1050, -950, 1, true, false);
        cm.npc_SetSpecialAction("oid=4212906", "summon", 0, 0);
        cm.npc_ChangeController(9400580, "oid=4212907", -950, 320, 11, -1000, -900, 1, true, false);
        cm.npc_SetSpecialAction("oid=4212907", "summon", 0, 0);
        cm.npc_ChangeController(9400582, "oid=4212908", -2330, 250, 4, -2380, -2280, 1, true, false);
        cm.npc_SetSpecialAction("oid=4212908", "summon", 0, 0);
        cm.npc_SetForceMove("oid=4212908", 1, 1300, 100);
        cm.forceStartQuest(64167, "down");
      } else {
        if (cm.isQuestFinished(64024) && cm.getQuestStatus(64025) == 0) {
          cm.npc_ChangeController(9400587, "oid=4214301", -1150, 350, 10, -1200, -1100, 1, true, false);
          cm.npc_SetSpecialAction("oid=4214301", "summon", 0, 0);
          cm.playerMessage(-1, "和可汗以及佩图尔对话");
          cm.playerMessage(5, "佩图尔：总得找到法子将伤员带走吧？");
          cm.playerMessage(5, "可汗：村里的大篷车都被烧了，没法用了……");
        } else {
          if (cm.isQuestActive(64025)) {
            cm.Hidden_background("q64025Obj", 1, 1, 0, 0);
          } else if (cm.isQuestFinished(64025)) {
            cm.Hidden_background('q64025Obj', 1, 1, 0, 0);
            cm.npc_ChangeController(9400588, "oid=2707599", 2530, 400, 41, 2480, 2580, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2707599", "summon", 0, 0);
            cm.npc_ChangeController(9400587, "oid=2707600", 390, 75, 55, 340, 440, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2707600", "summon", 0, 0);
            cm.npc_ChangeController(9400616, "oid=2707601", 525, 70, 27, 475, 575, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2707601", "summon", 0, 0);
          }
        }
      }
    }
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;