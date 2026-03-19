var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + (cm.getMapId() - 867131000);
  eval(V)(f, E, e);
}
function action602(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("\r\n…额啊啊！是幽灵~！", 5, 9100028, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n…幽灵，竟然能看得见幽灵？", 5, 9100026, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n好了~这次轮到#b#h0##k的小组了~那么！请出发吧。\r\n#r（避开地区内的怪物，一直移动到最后。）#k", 5, 9100025, true, true);
        } else if (status === V++) {
          cm.addNumberForQuestInfo(64665, 'M2', 1);
          cm.warp(867131800, 0, false);
          cm.setStandAloneMode(false);
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action800(f, E, e) {
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
    cm.spawnMobLimit(9601242, 1, 105, -111, 4);
    cm.spawnMobLimit(9601242, 1, 323, 91, 4);
    cm.spawnMobLimit(9601242, 1, 752, 91, 4);
    cm.spawnMobLimit(9601242, 1, 1123, 91, 4);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.dispose();
  }
}
function action820(f, E, e) {
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
    cm.spawnMobLimit(9601242, 1, -70, 91, 3);
    cm.spawnMobLimit(9601242, 1, 190, 91, 3);
    cm.spawnMobLimit(9601243, 1, 778, -262, 5);
    cm.spawnMobLimit(9601244, 1, 817, 91, 2);
    cm.spawnMobLimit(9601244, 1, 1096, 91, 2);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.spawnMobLimit(9601243, 1, 1619, 91, 5);
    cm.spawnMobLimit(9601243, 1, 2181, -103, 5);
    cm.spawnMobLimit(9601243, 1, 2446, 91, 5);
    cm.spawnMobLimit(9601243, 1, 2446, 91, 5);
    cm.spawnMobLimit(9601242, 1, 190, 91, 3);
    cm.dispose();
  }
}
function action840(f, E, e) {
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
    cm.spawnMobLimit(9601243, 1, -20, 91, 3);
    cm.spawnMobLimit(9601243, 1, 105, -84, 3);
    cm.spawnMobLimit(9601244, 1, 627, 91, 3);
    cm.spawnMobLimit(9601242, 1, 621, -252, 9);
    cm.spawnMobLimit(9601242, 1, 1206, 91, 9);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
    cm.spawnMobLimit(9601242, 1, 1313, 91, 9);
    cm.spawnMobLimit(9601242, 1, 1206, 91, 9);
    cm.spawnMobLimit(9601242, 1, 1313, 91, 9);
    cm.spawnMobLimit(9601242, 1, 1206, 91, 9);
    cm.spawnMobLimit(9601242, 1, 1313, 91, 9);
    cm.spawnMobLimit(9601244, 1, 1313, -120, 3);
    cm.spawnMobLimit(9601242, 1, 1942, 91, 9);
    cm.spawnMobLimit(9601242, 1, 2037, 91, 9);
    cm.spawnMobLimit(9601244, 1, 1989, -102, 3);
    cm.spawnMobLimit(9601243, 1, -20, 91, 3);
    cm.dispose();
  }
}
function action860(f, E, e) {
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
    cm.spawnMobLimit(9601242, 1, 387, 91, 3);
    cm.spawnMobLimit(9601242, 1, 837, 91, 3);
    cm.spawnMobLimit(9601242, 1, 937, 91, 3);
    cm.spawnMobLimit(9601243, 1, 960, -123, 1);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/4");
    cm.dispose();
  }
}
function action880(f, E, e) {
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
    cm.spawnMobLimit(9601246, 1, -234, 91, 6);
    cm.spawnMobLimit(9601246, 1, -234, -119, 6);
    cm.spawnMobLimit(9601246, 1, 171, 91, 6);
    cm.spawnMobLimit(9601246, 1, 171, -119, 6);
    cm.spawnMobLimit(9601246, 1, 573, 91, 6);
    cm.spawnMobLimit(9601246, 1, 573, -119, 6);
    cm.spawnMobLimit(9601243, 1, 1386, 91, 1);
    cm.spawnMobLimit(9601242, 1, 1737, -119, 1);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}