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
    cm.fieldEffect_PlayBGM("Bgm43/Unexpected crisis", 0, 0);
    cm.spawnMobLimit(5100201, 1, -751, -17, 4);
    cm.spawnMobLimit(5100201, 1, -751, -17, 4);
    cm.spawnMobLimit(5100201, 1, -801, -17, 4);
    cm.spawnMobLimit(5100201, 1, -851, -17, 4);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;