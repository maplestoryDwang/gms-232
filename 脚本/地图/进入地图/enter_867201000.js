var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(64044)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(64045)) {
      action2(f, E, e);
    } else {
      if (cm.isQuestActive(64047)) {
        if (cm.haveItem(4036385, 50)) {
          cm.warp(867201004, 1, true);
          cm.dispose();
        } else {
          action3(f, E, e);
        }
      } else if (cm.isQuestFinished(64047)) {
        cm.onSetBackEffect("close", 1, 0, 0, 0);
        cm.onSetBackEffect("open", 1, 1, 0, 0);
        cm.dispose();
      } else {
        cm.warp(867201001, 1, true);
        cm.cancelItem(2210211);
        cm.dispose();
      }
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
    cm.npc_ChangeController(9400570, 'oid=202197', -529, -137, 15, -579, -479, 1, false, false);
    cm.Hidden_background("open", 1, 0, 0, 0);
    cm.npc_ChangeController(9400587, "oid=3703280", 670, 0, 11, 620, 720, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703280", 'summon', 0, 0);
    cm.npc_ChangeController(9400584, "oid=3703281", 545, 0, 10, 495, 595, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703281", "summon", 0, 0);
    cm.npc_ChangeController(9400580, "oid=3703282", 420, 0, 9, 370, 470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703282", "summon", 0, 0);
    cm.npc_ChangeController(9400581, "oid=3703283", 335, 0, 9, 285, 385, 0, true, false);
    cm.npc_SetSpecialAction("oid=3703283", "summon", 0, 0);
    cm.npc_ChangeController(9400618, "oid=3703284", 225, 0, 9, 175, 275, 0, true, false);
    cm.npc_SetSpecialAction("oid=3703284", "summon", 0, 0);
    cm.npc_ChangeController(9400593, "oid=3703285", 107, 0, 8, 57, 157, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703285", 'summon', 0, 0);
    cm.npc_ChangeController(9400591, "oid=3703286", 50, 0, 8, 0, 100, 0, true, false);
    cm.npc_SetSpecialAction("oid=3703286", "summon", 0, 0);
    cm.npc_ChangeController(9400589, "oid=3703287", -235, 0, 6, -285, -185, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703287", "summon", 0, 0);
    cm.npc_ChangeController(9400585, "oid=3703288", -335, -10, 5, -385, -285, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703288", "summon", 0, 0);
    cm.npc_ChangeController(9400585, "oid=3703289", -400, -10, 5, -450, -350, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703289", "summon", 0, 0);
    cm.npc_ChangeController(9400588, "oid=3703290", -520, -50, 4, -570, -470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703290", "summon", 0, 0);
    cm.npc_ChangeController(9400583, "oid=3703291", -570, -50, 4, -620, -520, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703291", 'summon', 0, 0);
    cm.npc_ChangeController(9400582, "oid=3703292", -780, -80, 3, -830, -730, 1, true, false);
    cm.npc_SetSpecialAction("oid=3703292", "summon", 0, 0);
    cm.npc_ChangeController(9400620, "oid=3703293", -960, -130, 2, -1010, -910, 0, true, false);
    cm.npc_SetSpecialAction("oid=3703293", 'summon', 0, 0);
    cm.npc_ChangeController(9400621, "oid=3703294", -1020, -130, 2, -1070, -970, 0, true, false);
    cm.npc_SetSpecialAction("oid=3703294", "summon", 0, 0);
    cm.playerMessage(5, "巴特勒：各自去找到50块能吃的肉，尽快！");
    cm.dispose();
  }
}
function action2(f, E, e) {
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
    cm.npc_ChangeController(9400570, "oid=202197", -529, -137, 15, -579, -479, 1, false, false);
    cm.Hidden_background("open", 1, 0, 0, 0);
    cm.npc_ChangeController(9400587, "oid=3707792", 670, 0, 11, 620, 720, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707792", "summon", 0, 0);
    cm.npc_ChangeController(9400584, "oid=3707793", 545, 0, 10, 495, 595, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707793", 'summon', 0, 0);
    cm.npc_ChangeController(9400580, "oid=3707794", 420, 0, 9, 370, 470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707794", "summon", 0, 0);
    cm.npc_ChangeController(9400581, "oid=3707795", 335, 0, 9, 285, 385, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707795", "summon", 0, 0);
    cm.npc_ChangeController(9400618, "oid=3707796", 225, 0, 9, 175, 275, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707796", "summon", 0, 0);
    cm.npc_ChangeController(9400593, "oid=3707797", 107, 0, 8, 57, 157, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707797", "summon", 0, 0);
    cm.npc_ChangeController(9400591, "oid=3707798", 50, 0, 8, 0, 100, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707798", "summon", 0, 0);
    cm.npc_ChangeController(9400589, "oid=3707799", -235, 0, 6, -285, -185, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707799", "summon", 0, 0);
    cm.npc_ChangeController(9400585, "oid=3707800", -335, -10, 5, -385, -285, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707800", "summon", 0, 0);
    cm.npc_ChangeController(9400585, "oid=3707801", -400, -10, 5, -450, -350, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707801", 'summon', 0, 0);
    cm.npc_ChangeController(9400588, "oid=3707802", -520, -50, 4, -570, -470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707802", 'summon', 0, 0);
    cm.npc_ChangeController(9400583, "oid=3707803", -570, -50, 4, -620, -520, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707803", 'summon', 0, 0);
    cm.playerMessage(5, "古纳德：我说，你拿回来的这野狼肉到底是想让谁吃啊？去给我找花花象肉！");
    cm.dispose();
  }
}
function action3(f, E, e) {
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
    cm.npc_ChangeController(9400570, "oid=202197", -529, -137, 15, -579, -479, 1, false, false);
    cm.Hidden_background("open", 1, 0, 0, 0);
    cm.npc_ChangeController(9400587, "oid=3707792", 670, 0, 11, 620, 720, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707792", "summon", 0, 0);
    cm.npc_ChangeController(9400584, "oid=3707793", 545, 0, 10, 495, 595, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707793", 'summon', 0, 0);
    cm.npc_ChangeController(9400580, "oid=3707794", 420, 0, 9, 370, 470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707794", "summon", 0, 0);
    cm.npc_ChangeController(9400581, "oid=3707795", 335, 0, 9, 285, 385, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707795", "summon", 0, 0);
    cm.npc_ChangeController(9400618, "oid=3707796", 225, 0, 9, 175, 275, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707796", 'summon', 0, 0);
    cm.npc_ChangeController(9400593, "oid=3707797", 107, 0, 8, 57, 157, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707797", "summon", 0, 0);
    cm.npc_ChangeController(9400591, "oid=3707798", 50, 0, 8, 0, 100, 0, true, false);
    cm.npc_SetSpecialAction("oid=3707798", 'summon', 0, 0);
    cm.npc_ChangeController(9400589, "oid=3707799", -235, 0, 6, -285, -185, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707799", 'summon', 0, 0);
    cm.npc_ChangeController(9400585, "oid=3707800", -335, -10, 5, -385, -285, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707800", "summon", 0, 0);
    cm.npc_ChangeController(9400585, "oid=3707801", -400, -10, 5, -450, -350, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707801", "summon", 0, 0);
    cm.npc_ChangeController(9400588, "oid=3707802", -520, -50, 4, -570, -470, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707802", "summon", 0, 0);
    cm.npc_ChangeController(9400583, "oid=3707803", -570, -50, 4, -620, -520, 1, true, false);
    cm.npc_SetSpecialAction("oid=3707803", "summon", 0, 0);
    cm.playerMessage(5, "古纳德：狼人毛发呢？狼人毛发在哪啊？");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;