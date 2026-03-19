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
      cm.npc_ChangeController(9400585, "oid=202292", 1356, 42, 8, 1306, 1406, 1, true, false);
      cm.npc_ChangeController(9400585, 'oid=202293', 1160, 42, 8, 1110, 1210, 0, true, false);
      cm.npc_ChangeController(9400583, "oid=202294", 864, 43, 8, 814, 914, 1, true, false);
      cm.npc_ChangeController(9400595, "oid=9400595", 365, 26, 7, 315, 415, 1, true, false);
      cm.npc_ChangeController(9400596, "oid=9400596", 260, 21, 7, 210, 310, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202297", -947, -63, 1, -997, -897, 1, true, false);
      cm.npc_ChangeController(9400570, "oid=9400570", 138, -136, 13, 88, 188, 1, false, false);
      cm.npc_ChangeController(9400617, "oid=9400617", -791, -58, 2, -841, -741, 0, true, false);
      cm.npc_ChangeController(9400618, "oid=9400618", -665, -50, 2, -715, -615, 1, true, false);
      cm.npc_ChangeController(9400588, "oid=9400588", 903, 43, 8, 853, 953, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202302", 546, -139, 11, 496, 596, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202303", 1100, 43, 8, 1050, 1150, 0, true, false);
      cm.npc_ChangeController(9400589, "oid=9400589", -601, -47, 3, -651, -551, 1, true, false);
      cm.npc_ChangeController(9400592, "oid=9400592", -733, -54, 2, -783, -683, 0, true, false);
      cm.npc_ChangeController(9400593, "oid=9400593", -573, -70, 3, -623, -523, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400593", "summon", 0, 0);
      cm.forceStartQuest(64166, "happy");
      cm.npc_ChangeController(9400584, "oid=9400584", 670, 0, 7, 620, 720, 0, true, false);
      cm.npc_SetSpecialAction("oid=9400584", 'summon', 0, 0);
      cm.npc_ChangeController(9400580, "oid=37194005804994", 785, 0, 8, 735, 835, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400580", 'summon', 0, 0);
      cm.npc_ChangeController(9400620, "oid=9400620", -370, -60, 4, -420, -320, 0, true, false);
      cm.npc_SetSpecialAction("oid=9400620", "summon", 0, 0);
      cm.npc_ChangeController(9400621, "oid=9400621", -280, -50, 4, -330, -230, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400621", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=9400581", 1250, 0, 8, 1200, 1300, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400581", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=9400591", -490, -60, 3, -540, -440, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400591", 'summon', 0, 0);
      cm.npc_ChangeController(9400587, "oid=9400587", 58, -3, 6, 8, 108, 1, true, false);
      cm.npc_SetSpecialAction("oid=9400587", "summon", 0, 0);
      if (cm.isQuestFinished(64067) || cm.isQuestActive(64067) && cm.haveItem(4036382, 30)) {
        cm.npc_ChangeController(9400582, "oid=9400582", 620, 0, 7, 570, 670, 0, true, false);
        cm.npc_SetSpecialAction("oid=9400582", 'summon', 0, 0);
      }
      var O = cm.rand(1, 2);
      if (O == 1) {
        cm.莫奈德_特效("蹑手蹑脚地前往森林", [1, 0, 3000]);
        cm.莫奈德_特效("小声点，不要吵醒对方", [1, 1, 3000], 1);
      } else if (O == 2) {
        cm.莫奈德_特效("拍着圆鼓鼓的肚子", [1, 0, 3000]);
        cm.莫奈德_特效("好开心，我实在是太幸福了", [1, 1, 3000], 1);
      }
      if (!cm.isQuestFinished(64062)) {
        cm.playerMessage(5, "托尔逊：勇，勇士！等一下！");
      }
      if (!cm.isQuestFinished(64070)) {
        cm.npc_ChangeController(9400598, "oid=9400598", 1760, 20, 8, 1710, 1810, 1, true, false);
        cm.npc_SetSpecialAction("oid=9400598", "summon", 0, 0);
      }
      if (!cm.isQuestFinished(64064)) {
        cm.playerMessage(5, "斯密斯：哈……");
        cm.playerMessage(5, "琼森：你能不能别再叹气了……该让村民们听到了……哎……");
        cm.npc_ChangeController(9400622, "oid=9400622", -230, -40, 5, -280, -180, 1, true, false);
        cm.npc_SetSpecialAction("oid=9400622", 'summon', 0, 0);
      } else {
        cm.npc_ChangeController(9400622, "oid=9400622", 430, -125, 10, 380, 480, 1, true, false);
        cm.npc_SetSpecialAction("oid=9400622", "summon", 0, 0);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;