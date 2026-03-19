var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getInfoQuest(867200800);
  if ('1' === V) {
    action1(f, E, e);
  } else {
    if ("chk=1" === cm.getInfoQuest(64037)) {
      cm.cancelItem(2210211);
      cm.warp(867200850, 0);
      cm.dispose();
    } else if (cm.isQuestActive(64040)) {
      cm.cancelItem(2210211);
      cm.warp(867200852, 0);
      cm.dispose();
    } else {
      cm.cancelItem(2210211);
      cm.npc_ChangeController(9400619, "oid=201825", 672, 313, 1, 622, 722, 5, true, false);
      cm.npc_ChangeController(9400587, "oid=201826", 793, 313, 1, 743, 843, 5, true, false);
      cm.npc_ChangeController(9400591, "oid=201827", 742, 313, 1, 692, 792, 5, true, false);
      cm.npc_ChangeController(9400588, "oid=201828", 353, 313, 1, 303, 403, 5, true, false);
      cm.npc_ChangeController(9400596, "oid=201829", 966, 313, 1, 916, 1016, 5, true, false);
      cm.npc_ChangeController(9400589, 'oid=201830', 549, 313, 1, 499, 599, 4, true, false);
      cm.npc_ChangeController(9400580, "oid=201831", 224, 313, 1, 174, 274, 4, true, false);
      cm.npc_ChangeController(9400584, "oid=201832", 292, 313, 1, 242, 342, 5, true, false);
      cm.npc_ChangeController(9400590, 'oid=201833', -566, 313, 1, -616, -516, 4, true, false);
      cm.npc_ChangeController(9400585, "oid=201834", 91, 313, 1, 41, 141, 4, true, false);
      cm.npc_ChangeController(9400592, 'oid=201835', 481, 313, 1, 431, 531, 4, true, false);
      cm.npc_ChangeController(9400618, "oid=201836", 904, 313, 1, 854, 954, 5, true, false);
      cm.npc_ChangeController(9400571, "oid=201837", 1150, 313, 1, 1100, 1200, 1, false, false);
      cm.npc_ChangeController(9400581, "oid=4245467", -145, 300, 1, -195, -95, 1, true, false);
      cm.npc_SetSpecialAction("oid=4245467", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4245468", -70, 300, 1, -120, -20, 1, true, false);
      cm.npc_SetSpecialAction("oid=4245468", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=4245469", 150, 300, 1, 100, 200, 0, true, false);
      cm.npc_SetSpecialAction("oid=4245469", "summon", 0, 0);
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  cm.cancelItem(2210211);
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
    cm.npc_ChangeController(9400619, 'oid=201825', 672, 313, 1, 622, 722, 5, true, false);
    cm.npc_ChangeController(9400587, "oid=201826", 793, 313, 1, 743, 843, 5, true, false);
    cm.npc_ChangeController(9400591, "oid=201827", 742, 313, 1, 692, 792, 5, true, false);
    cm.npc_ChangeController(9400588, "oid=201828", 353, 313, 1, 303, 403, 5, true, false);
    cm.npc_ChangeController(9400596, "oid=201829", 966, 313, 1, 916, 1016, 5, true, false);
    cm.npc_ChangeController(9400589, "oid=201830", 549, 313, 1, 499, 599, 4, true, false);
    cm.npc_ChangeController(9400580, 'oid=201831', 224, 313, 1, 174, 274, 4, true, false);
    cm.npc_ChangeController(9400584, 'oid=201832', 292, 313, 1, 242, 342, 5, true, false);
    cm.npc_ChangeController(9400590, "oid=201833", -566, 313, 1, -616, -516, 4, true, false);
    cm.npc_ChangeController(9400585, "oid=201834", 91, 313, 1, 41, 141, 4, true, false);
    cm.npc_ChangeController(9400592, "oid=201835", 481, 313, 1, 431, 531, 4, true, false);
    cm.npc_ChangeController(9400618, 'oid=201836', 904, 313, 1, 854, 954, 5, true, false);
    cm.npc_ChangeController(9400571, "oid=201837", 1150, 313, 1, 1100, 1200, 1, false, false);
    cm.npc_ChangeController(9400581, "oid=4245467", -145, 300, 1, -195, -95, 1, true, false);
    cm.npc_SetSpecialAction("oid=4245467", 'summon', 0, 0);
    cm.npc_ChangeController(9400585, "oid=4245468", -70, 300, 1, -120, -20, 1, true, false);
    cm.npc_SetSpecialAction("oid=4245468", "summon", 0, 0);
    cm.npc_ChangeController(9400582, "oid=4245469", 150, 300, 1, 100, 200, 0, true, false);
    cm.npc_SetSpecialAction("oid=4245469", "summon", 0, 0);
    cm.playerMessage(5, "佩图尔：看来得赶紧搭帐篷了。");
    cm.playerMessage(5, "述拉：粮食不够，看来没办法让所有人填饱肚子了……");
    cm.playerMessage(5, "艾丽卡：得先让伤员躺下来才行。");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;