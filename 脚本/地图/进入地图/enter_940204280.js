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
    cm.spawnMobLimit(2400262, 1, -1291, -474, 100);
    cm.spawnMobLimit(2400262, 1, -1405, -474, 100);
    cm.spawnMobLimit(2400262, 1, -67, -123, 100);
    cm.spawnMobLimit(2400262, 1, -326, -532, 100);
    cm.spawnMobLimit(2400262, 1, -194, -532, 100);
    cm.spawnMobLimit(2400263, 1, 136, -228, 100);
    cm.spawnMobLimit(2400262, 1, 58, -17, 100);
    cm.spawnMobLimit(2400262, 1, 153, -123, 100);
    cm.spawnMobLimit(2400262, 1, 377, -123, 100);
    cm.spawnMobLimit(2400262, 1, -956, -533, 100);
    cm.spawnMobLimit(2400262, 1, 284, -17, 100);
    cm.spawnMobLimit(2400262, 1, -133, -17, 100);
    cm.spawnMobLimit(2400262, 1, -819, -533, 100);
    cm.spawnMobLimit(2400262, 1, -1147, -328, 100);
    cm.spawnMobLimit(2400262, 1, -1309, -328, 100);
    cm.spawnMobLimit(2400262, 1, -1459, -328, 100);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1103064]);
    cm.setInGameDirectionMode(false, true, false);
    cm.addPopupSay(3002119, 2500, "#face0#看来得我亲自出马才行！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face14##h0#！再加把劲儿！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face14#我必须见到狐神，跟他谈谈！", '', 0);
    cm.spawnMobLimit(2400262, 1, -248, -705, 100);
    cm.spawnMobLimit(2400262, 1, -241, -705, 100);
    cm.spawnMobLimit(2400262, 1, -782, -712, 100);
    cm.spawnMobLimit(2400262, 1, -832, -712, 100);
    cm.spawnMobLimit(2400262, 1, -1512, -615, 100);
    cm.spawnMobLimit(2400262, 1, -1433, -615, 100);
    cm.spawnMobLimit(2400262, 1, -1197, -615, 100);
    cm.spawnMobLimit(2400262, 1, -1386, -815, 100);
    cm.spawnMobLimit(2400262, 1, -1322, -815, 100);
    cm.spawnMobLimit(2400262, 1, -1392, -815, 100);
    cm.spawnMobLimit(2400262, 1, 598, -546, 100);
    cm.spawnMobLimit(2400262, 1, 575, -546, 100);
    cm.spawnMobLimit(2400262, 1, 1158, -382, 100);
    cm.spawnMobLimit(2400262, 1, 567, -546, 100);
    cm.spawnMobLimit(2400262, 1, 1454, -382, 100);
    cm.spawnMobLimit(2400262, 1, 1180, -382, 100);
    cm.spawnMobLimit(2400262, 1, 1350, -545, 100);
    cm.spawnMobLimit(2400262, 1, 1108, -545, 100);
    cm.spawnMobLimit(2400262, 1, 1443, -545, 100);
    cm.spawnMobLimit(2400262, 1, 848, -384, 100);
    cm.spawnMobLimit(2400262, 1, 562, -384, 100);
    cm.spawnMobLimit(2400262, 1, 763, -384, 100);
    cm.spawnMobLimit(2400262, 1, -420, -705, 100);
    cm.spawnMobLimit(2400262, 1, -153, -705, 100);
    cm.spawnMobLimit(2400262, 1, 872, -725, 100);
    cm.spawnMobLimit(2400262, 1, 1073, -725, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;