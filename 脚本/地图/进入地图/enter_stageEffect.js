var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getMapId();
  if (V == 701220410) {
    action1(f, E, e);
  } else if (V == 701220510) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  cm.playerMessage(5, "你必须消灭区域内的所有怪物，才能移动至上层。");
  cm.playerMessage(-1, "你必须消灭区域内的所有怪物，才能移动至上层。");
  cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
  cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
  cm.spawnMobLimit(9601066, 1, 614, 253, 100);
  cm.spawnMobLimit(9601066, 1, -12, 17, 100);
  cm.spawnMobLimit(9601066, 1, 513, 123, 100);
  cm.spawnMobLimit(9601066, 1, 615, -37, 100);
  cm.spawnMobLimit(9601066, 1, 139, -171, 100);
  cm.spawnMobLimit(9601066, 1, -162, -171, 100);
  cm.spawnMobLimit(9601066, 1, 334, -171, 100);
  cm.spawnMobLimit(9601066, 1, 574, -171, 100);
  cm.spawnMobLimit(9601064, 1, 473, -171, 100);
  cm.spawnMobLimit(9601064, 1, -555, -171, 100);
  cm.spawnMobLimit(9601064, 1, -302, -171, 100);
  cm.spawnMobLimit(9601064, 1, -30, -171, 100);
  cm.spawnMobLimit(9601064, 1, 224, -171, 100);
  cm.spawnMobLimit(9601064, 1, 677, -171, 100);
  cm.spawnMobLimit(9601064, 1, 261, 253, 100);
  cm.spawnMobLimit(9601064, 1, 734, 253, 100);
  cm.spawnMobLimit(9601064, 1, 400, 253, 100);
  cm.spawnMobLimit(9601064, 1, 38, 253, 100);
  cm.spawnMobLimit(9601064, 1, -243, 253, 100);
  cm.spawnMobLimit(9601064, 1, -488, 253, 100);
  cm.dispose();
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  cm.spawnMobLimit(9601066, 1, -31, 17, 100);
  cm.spawnMobLimit(9601066, 1, -391, 253, 100);
  cm.spawnMobLimit(9601066, 1, 549, 123, 100);
  cm.spawnMobLimit(9601066, 1, 623, -5, 100);
  cm.spawnMobLimit(9601066, 1, 185, -171, 100);
  cm.spawnMobLimit(9601066, 1, 745, 253, 100);
  cm.spawnMobLimit(9601066, 1, -174, -171, 100);
  cm.spawnMobLimit(9601066, 1, -409, -171, 100);
  cm.spawnMobLimit(9601065, 1, -498, -171, 100);
  cm.spawnMobLimit(9601065, 1, -42, -171, 100);
  cm.spawnMobLimit(9601065, 1, -321, -171, 100);
  cm.spawnMobLimit(9601065, 1, 536, -171, 100);
  cm.spawnMobLimit(9601065, 1, 331, -171, 100);
  cm.spawnMobLimit(9601065, 1, 734, -171, 100);
  cm.spawnMobLimit(9601065, 1, 375, 253, 100);
  cm.spawnMobLimit(9601065, 1, 32, 253, 100);
  cm.spawnMobLimit(9601065, 1, 620, 253, 100);
  cm.spawnMobLimit(9601065, 1, 193, 253, 100);
  cm.spawnMobLimit(9601065, 1, -212, 253, 100);
  cm.spawnMobLimit(9601065, 1, -524, 253, 100);
  cm.playerMessage(-1, "你必须消灭区域内的所有怪物，才能移动至上层。");
  cm.playerMessage(5, "你必须消灭区域内的所有怪物，才能移动至上层。");
  cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
  cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;