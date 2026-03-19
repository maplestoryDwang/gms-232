var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(64021)) {
    action64021(f, E, e);
  } else {
    cm.dispose();
  }
}
function action64021(f, E, e) {
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
      cm.resetMap(cm.getMapId());
      cm.forceJoinEvent("莫奈德_地图_Act1.1_收集木材");
      cm.sendNormalTalk_Bottom("#face0#来，咱们消灭这圆木独眼触须怪，每人各收集50个结实的木材。", 37, 9400589, false, true);
      cm.spawnMobLimit(9402301, 1, -60, 265, 1);
      cm.spawnMobLimit(9402306, 1, -150, 265, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#这种怪物特别机灵，专挑结实的木材栖身。", 37, 9400589, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#虽然不好意思抢了它们的家，但咱们现在急用。", 37, 9400589, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好的，快点搞定然后咱们就回去！", 37, 9400582, true, true);
          } else if (status === V++) {
            cm.playerMessage(-1, "狩猎圆木独眼触须怪，收集结实的木材。");
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;