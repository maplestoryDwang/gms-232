var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = 'action' + cm.getMapId();
  eval(V)(f, E, e);
}
function action330007300(f, E, e) {
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
    cm.spawnMobLimit(2700011, 1, -282, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1540, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1654, 43, 100);
    cm.spawnMobLimit(2700011, 1, 439, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1346, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1286, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1090, 43, 100);
    cm.spawnMobLimit(2700011, 1, 971, 43, 100);
    cm.spawnMobLimit(2700011, 1, -57, 43, 100);
    cm.spawnMobLimit(2700011, 1, 756, 43, 100);
    cm.spawnMobLimit(2700011, 1, 91, 43, 100);
    cm.spawnMobLimit(2700011, 1, 578, 43, 100);
    cm.spawnMobLimit(2700011, 1, 226, 43, 100);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1302335]);
    cm.setInGameDirectionMode(false, true, false);
    cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动至下一个区域。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    cm.dispose();
  }
}
function action330007400(f, E, e) {
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
    cm.spawnMobLimit(2700011, 1, 385, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1085, 43, 100);
    cm.spawnMobLimit(2700011, 1, 1551, 43, 100);
    cm.spawnMobLimit(2700011, 1, -82, 43, 100);
    cm.spawnMobLimit(2700011, 1, 125, 43, 100);
    cm.spawnMobLimit(2700011, 1, 982, -276, 100);
    cm.spawnMobLimit(2700011, 1, 659, -276, 100);
    cm.spawnMobLimit(2700011, 1, 326, -276, 100);
    cm.spawnMobLimit(2700012, 1, 668, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1173, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1556, -237, 100);
    cm.spawnMobLimit(2700012, 1, 1306, -333, 100);
    cm.spawnMobLimit(2700012, 1, 770, -276, 100);
    cm.spawnMobLimit(2700012, 1, 942, -276, 100);
    cm.spawnMobLimit(2700012, 1, 1384, 43, 100);
    cm.spawnMobLimit(2700011, 1, 463, -276, 100);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1302335]);
    cm.setInGameDirectionMode(false, true, false);
    cm.addPopupSay(1530030, 1500, "你感受到所吸收的Rock Soul了吗？", '', 0);
    cm.addPopupSay(1530030, 1500, "一次都没练习，吉他的实力就变得超级厉害！", '', 0);
    cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动至下一个区域。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.dispose();
  }
}
function action330007500(f, E, e) {
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
    cm.spawnMobLimit(2700012, 1, 554, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1549, 43, 100);
    cm.spawnMobLimit(2700012, 1, 760, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1086, 43, 100);
    cm.spawnMobLimit(2700012, 1, -237, 43, 100);
    cm.spawnMobLimit(2700012, 1, -213, 43, 100);
    cm.spawnMobLimit(2700012, 1, 165, -18, 100);
    cm.spawnMobLimit(2700012, 1, 37, -18, 100);
    cm.spawnMobLimit(2700012, 1, 441, -31, 100);
    cm.spawnMobLimit(2700012, 1, 1343, 43, 100);
    cm.spawnMobLimit(2700012, 1, 1165, -42, 100);
    cm.spawnMobLimit(2700012, 1, 884, -42, 100);
    cm.spawnMobLimit(2700012, 1, 238, -18, 100);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1302335]);
    cm.setInGameDirectionMode(false, true, false);
    cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动至下一个区域。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;