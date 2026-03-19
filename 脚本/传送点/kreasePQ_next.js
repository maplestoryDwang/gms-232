function enter() {
  if (cm.getMapId() == 920012000) {
    if (em.getNumberProperty("kreaseIvy") >= 4) {
      cm.warp(920012100, 0, false);
    }
  } else {
    if (cm.getMapId() == 920012100) {
      if (em.getNumberProperty("stage2_clear") > 0) {
        cm.warp(920012200, 0, false);
      } else {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
      }
    } else {
      if (cm.getMapId() == 920012200) {
        cm.warp(920012300, 0, false);
      } else {
        if (cm.getMapId() == 920012300) {
          if (cm.getMap().getNumMonsters() == 0) {
            cm.warp(920012400, 0, false);
          } else {
            cm.getTopMsgFont('地图剩余怪物：' + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
          }
        } else if (cm.getMapId() == 920012400) {
          cm.warp(920012500, 0, false);
        }
      }
    }
  }
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else if (status === R++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}