var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestActive(64595)) {
    cm.dispose();
    cm.warp(871000012, 1, true);
    return;
  }
  if (cm.isQuestActive(500927)) {
    cm.dispose();
    cm.warp(871000053, 0, true);
    return;
  }
  if (cm.isQuestActive(64905)) {
    cm.dispose();
    cm.warp(871000057, 0, true);
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.rand(1, 3) == 1 && !cm.isQuestActive(64600)) {
      cm.setPartner(1, 9400926, 80011838, 0);
      cm.setPartner(1, 9400927, 80011839, 0);
      cm.addPopupSay(9400926, 3000, "#face1#勇者大人~~~！", '');
    } else {
      cm.npc_ChangeController(9400926, "oid=9552190", 500, 300, 1);
      cm.npc_SetSpecialAction("oid=9552190", "summon", 0, 0);
      cm.npc_ChangeController(9400927, "oid=9552191", 600, 300, 1);
      cm.npc_SetSpecialAction("oid=9552191", "summon", 0, 0);
    }
    if (cm.isQuestFinished(65443)) {
      cm.npc_ChangeController(9401153, "oid=91725077", -350, 300, 88, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91725077", 'summon', 0, 0);
    }
    if (cm.isQuestFinished(64596) && !cm.isQuestFinished(64598)) {
      cm.setPartner(1, 9400928, 80011836, 0);
    }
    if (cm.isQuestActive(64605)) {
      cm.OnStartNavigation(cm.getMapId(), 0, "goKenneth", 0);
    }
    if (cm.isQuestActive(64901)) {
      cm.npc_ChangeController(9401091, "oid=2519758", 420, 300, 92, 370, 470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2519758", 'summon', 0, 0);
      cm.npc_ChangeController(9401092, "oid=2519759", 575, 300, 92, 525, 625, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2519759", 'summon', 0, 0);
    }
    if (cm.isQuestActive(65438)) {
      cm.npc_ChangeController(9401158, "oid=91704929", 1030, -300, 26, 980, 1080, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=91704929", "summon", 0, 0);
      cm.npc_ChangeController(9401159, "oid=91704930", -250, 300, 88, -300, -200, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=91704930", 'summon', 0, 0);
      cm.npc_ChangeController(9401153, "oid=91704931", -350, 300, 88, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91704931", "summon", 0, 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;