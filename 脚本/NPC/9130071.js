var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 807050203) {
        var w = cm.getJob();
        if (cm.getMap().getNumMonsters() > 0) {
          cm.playerMessage(5, "必须消灭掉所有怪物，继续向神殿深处前进。");
        } else {
          cm.warp(807050204, 0);
          if (w == 4002 || w == 4200 || w == 4210 || w == 4211 || w == 4212) {
            cm.forceStartQuest(57437, '1');
          } else {
            cm.forceStartQuest(57141, '1');
          }
        }
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}