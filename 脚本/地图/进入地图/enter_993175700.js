var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.dispose();
    cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
    cm.OnStartNavigation(993175700, 0, "pt_PatSuccess", 0);
    cm.getTopMsgFont("请避开假面绅士放出的幽灵，前往客房4！", 3, 20, 20, 0, 0);
    cm.killAllMobNoExp();
    cm.spawnMobLimit(9833727, 1, -6, 0, 100);
    cm.spawnMobLimit(9833727, 1, -283, 0, 100);
    cm.spawnMobLimit(9833727, 1, -981, 0, 100);
    cm.spawnMobLimit(9833727, 1, -652, 0, 100);
    cm.spawnMobLimit(9833727, 1, -471, 0, 100);
    cm.spawnMobLimit(9833727, 1, -177, 0, 100);
    cm.spawnMobLimit(9833727, 1, 142, 0, 100);
    cm.spawnMobLimit(9833727, 1, -690, 0, 100);
    cm.spawnMobLimit(9833727, 1, -1333, 0, 100);
    cm.spawnMobLimit(9833727, 1, -266, 0, 100);
    cm.spawnMobLimit(9833727, 1, -468, 0, 100);
    cm.spawnMobLimit(9833727, 1, -147, 0, 100);
    cm.spawnMobLimit(9833727, 1, 266, 0, 100);
    cm.spawnMobLimit(9833727, 1, -865, 0, 100);
    cm.spawnMobLimit(9833727, 1, 548, 0, 100);
    cm.spawnMobLimit(9833727, 1, 1288, 0, 100);
    cm.spawnMobLimit(9833727, 1, 1343, 0, 100);
  }
}