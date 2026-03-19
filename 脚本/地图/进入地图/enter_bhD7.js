var status = -1;
var selectionLog = [];
function action(W, D, t) {
  var k = "action" + (cm.getMapId() - 350058000);
  eval(k)(W, D, t);
}
function action50(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else {
    if (status === k++) {
      cm.spawnMobLimit(8240091, 1, -1112, 149, 100);
      cm.spawnMobLimit(8240091, 1, -1279, 149, 100);
      cm.spawnMobLimit(8240091, 1, -1475, 149, 100);
      cm.setPartner(1, 1540721, 80001635, 0);
      cm.setPartner(1, 1540722, 80001602, 0);
      cm.setPartner(1, 1540451, 80001601, 0);
      cm.forceForfeitQuest(33247);
      cm.forceForfeitQuest(33248);
      cm.forceForfeitQuest(33249);
      cm.updateInfoQuest(33247, '');
      cm.updateInfoQuest(33248, '');
      cm.updateInfoQuest(33249, '');
      cm.updateInfoQuest(33213, "area=D7_Z77;x=4;y=2");
      cm.updateInfoQuest(33213, "area=D7_Z77;x=0;y=2");
      cm.updateInfoQuest(33213, "area=D7_Z77;x=0;y=0");
      cm.updateInfoQuest(33214, "ul=1");
      cm.updateInfoQuest(33213, "area=D7_Z77;x=0;y=2");
      cm.updateInfoQuest(33214, "ul=1001");
      cm.updateInfoQuest(33214, "ul=1801");
      cm.openUI(251);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.addPopupSay(1540451, 2000, '这是……!', '', 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 300, 2400, 44);
      cm.curNodeEventEnd(true);
    } else {
      if (status === k++) {
        cm.inGameDirectionEvent_AskAnswerTime(16302);
        cm.spawnMobLimit(8240092, 1, -1112, 149, 100);
        cm.spawnMobLimit(8240092, 1, -1279, 149, 100);
        cm.spawnMobLimit(8240092, 1, -1475, 149, 100);
      } else {
        if (status === k++) {
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === k++) {
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else if (status === k++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.getTopMsgFont("请消灭所有敌人, 继续往前. ", 3, 20, 20, 0);
            cm.addPopupSay(1540453, 2000, "大量的炸弹. ", '', 0);
            cm.addPopupSay(1540452, 2000, "格里梅尔……他究竟打算做什么!", '', 0);
            cm.spawnMobLimit(8240092, 1, -452, 149, 100);
            cm.spawnMobLimit(8240092, 1, -613, 149, 100);
            cm.spawnMobLimit(8240092, 1, 394, -134, 100);
            cm.spawnMobLimit(8240092, 1, 849, -134, 100);
            cm.spawnMobLimit(8240092, 1, 1732, -131, 100);
            cm.spawnMobLimit(8240092, 1, 1433, -131, 100);
            cm.spawnMobLimit(8240092, 1, 2061, -131, 100);
            cm.spawnMobLimit(8240092, 1, 2390, -131, 100);
            cm.dispose();
          }
        }
      }
    }
  }
}
function action100(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.npc_ChangeController(1540747, "oid=285775329", -77, 633, 11, -127, -27, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=285775329", "summon", 0, 0);
    cm.npcMove(1540747, 0, -353, 0);
    cm.onSetBackEffect("down", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([73], [1]);
    cm.npc_ChangeController(1540720, "oid=285775330", -535, 133, 60, -585, -485, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=285775330", "summon", 0, 0);
    cm.updateInfoQuest(33213, "area=D7_Z77;x=1;y=2");
    cm.updateInfoQuest(33214, "ul=3801");
    cm.openUI(251);
    cm.dispose();
  }
}
function action150(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.getTopMsgFont("请消灭所有敌人, 继续往前. ", 3, 20, 20, 0);
    cm.updateInfoQuest(33213, "area=D7_Z77;x=2;y=2");
    cm.updateInfoQuest(33214, "ul=7801");
    cm.openUI(251);
    cm.spawnMobLimit(8240094, 1, 30, -671, 100);
    cm.spawnMobLimit(8240094, 1, -60, -671, 100);
    cm.spawnMobLimit(8240094, 1, 734, -671, 100);
    cm.spawnMobLimit(8240094, 1, 31, -671, 100);
    cm.spawnMobLimit(8240094, 1, 168, -671, 100);
    cm.spawnMobLimit(8240094, 1, 162, -671, 100);
    cm.spawnMobLimit(8240094, 1, 7, -671, 100);
    cm.spawnMobLimit(8240094, 1, -107, -671, 100);
    cm.spawnMobLimit(8240094, 1, 561, -671, 100);
    cm.spawnMobLimit(8240094, 1, -74, -671, 100);
    cm.spawnMobLimit(8240094, 1, -81, -671, 100);
    cm.spawnMobLimit(8240094, 1, 1050, -131, 100);
    cm.spawnMobLimit(8240094, 1, 1545, -131, 100);
    cm.spawnMobLimit(8240094, 1, 1574, -131, 100);
    cm.spawnMobLimit(8240094, 1, 1039, -131, 100);
    cm.spawnMobLimit(8240094, 1, 2299, -131, 100);
    cm.dispose();
  }
}
function action200(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.npc_ChangeController(1540747, "oid=285827497", -77, 633, 14, -127, -27, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=285827497", "summon", 0, 0);
    cm.npcMove(1540747, 0, -353, 0);
    cm.onSetBackEffect("down", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([46], [1]);
    cm.npc_ChangeController(1540720, "oid=285827498", 430, 133, 45, 380, 480, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=285827498", 'summon', 0, 0);
    cm.updateInfoQuest(33213, "area=D7_Z77;x=3;y=2");
    cm.updateInfoQuest(33214, "ul=f801");
    cm.openUI(251);
    cm.dispose();
  }
}
function action250(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.npc_ChangeController(1540756, "oid=54005", -66, -505, 2, -109, -66, 1, false, 0, false);
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.npc_ChangeController(1540747, "oid=26211253", -77, 633, 17, -127, -27, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=26211253", "summon", 0, 0);
    cm.npcMove(1540747, 0, -353, 0);
    cm.onSetBackEffect("down", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([87], [1]);
    cm.npc_ChangeController(1540720, "oid=26211254", 430, 133, 72, 380, 480, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=26211254", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=26211254", 'broken', -1, 1);
    cm.updateInfoQuest(33213, "area=D7_Z77;x=4;y=2");
    cm.updateInfoQuest(33214, "ul=1f801");
    cm.openUI(251);
    cm.dynamicObjMoveSchedule(1335, -49, 1735, -49, 1335, -49, 1, 15, 0, 'm1', 12000, 0);
    cm.dynamicObjMoveSchedule(2427, -48, 2027, -48, 2427, -48, 1, -15, 0, 'm2', 12000, 0);
    cm.dynamicObjMoveSchedule(2094, -97, 2494, -97, 2094, -97, 1, 15, 0, 'm3', 12000, 0);
    cm.dynamicObjMoveSchedule(2662, -146, 2262, -146, 2662, -146, 1, -15, 0, 'm4', 12000, 0);
    cm.dynamicObjMoveSchedule(3016, -73, 3016, -473, 3016, -73, 1, 0, -15, 'm5', 12000, 0);
    cm.dynamicObjMoveSchedule(1735, -49, 1335, -49, 1735, -49, 1, -15, 0, 'm1', 12000, 6000);
    cm.dynamicObjMoveSchedule(2027, -48, 2427, -48, 2027, -48, 1, 15, 0, 'm2', 12000, 6000);
    cm.dynamicObjMoveSchedule(2494, -97, 2094, -97, 2494, -97, 1, -15, 0, 'm3', 12000, 6000);
    cm.dynamicObjMoveSchedule(2262, -146, 2662, -146, 2262, -146, 1, 15, 0, 'm4', 12000, 6000);
    cm.dynamicObjMoveSchedule(3016, -473, 3016, -73, 3016, -473, 1, 0, 15, 'm5', 12000, 6000);
    cm.dispose();
  }
}
function action300(W, D, t) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = t;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.spawnMobLimit(8240093, 1, -1235, 149, 100);
    cm.spawnMobLimit(8240093, 1, -1579, 149, 100);
    cm.spawnMobLimit(8240093, 1, -1872, 149, 100);
    cm.spawnMobLimit(8240091, 1, -1072, 149, 100);
    cm.spawnMobLimit(8240091, 1, -1400, 149, 100);
    cm.spawnMobLimit(8240091, 1, -1686, 149, 100);
    cm.spawnMobLimit(8240091, 1, -2013, 149, 100);
    cm.npc_ChangeController(1540723, "oid=54972", 685, 149, 51, 635, 735, 1, false, 0, false);
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.getTopMsgFont("请消灭所有敌人, 继续往前. ", 3, 20, 20, 0);
    cm.updateInfoQuest(33213, "area=D7_Z77;x=4;y=1");
    cm.updateInfoQuest(33214, "ul=1fc01");
    cm.openUI(251);
    cm.spawnMobLimit(8240094, 1, -1235, 149, 100);
    cm.spawnMobLimit(8240094, 1, -1579, 149, 100);
    cm.spawnMobLimit(8240094, 1, -1872, 149, 100);
    cm.spawnMobLimit(8240092, 1, -1072, 149, 100);
    cm.spawnMobLimit(8240092, 1, -1400, 149, 100);
    cm.spawnMobLimit(8240092, 1, -1686, 149, 100);
    cm.spawnMobLimit(8240092, 1, -2013, 149, 100);
    cm.spawnMobLimit(8240094, 1, -532, 149, 100);
    cm.spawnMobLimit(8240094, 1, -891, 149, 100);
    cm.spawnMobLimit(8240092, 1, -391, 149, 100);
    cm.spawnMobLimit(8240092, 1, -769, 149, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;