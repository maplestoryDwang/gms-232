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
  if (em.getNumberProperty("core") == 1) {
    cm.playerMessage(-1, "必须破坏掉露出真面目的迷宫之核，离开这里。");
    cm.dispose();
    return;
  } else {
    if (em.getNumberProperty('core') == 2) {
      cm.playerMessage(-1, "已经破坏了迷宫之核，是时候离开这里了。");
      cm.dispose();
      return;
    }
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
      cm.askMenu("（好像有几根蜡烛灭掉了。要点亮蜡烛吗？）\r\n\r\n#L0#点亮蜡烛。#l\r\n#L2#现在什么都不做。#l", 24, 0);
    } else {
      if (status === V++) {
        if (U == 0) {
          em.setProperty('core', 1);
          cm.lightUpCandle(1, 56228, 0, 1, 10);
          cm.onSetBackEffect("cube", 1, 0, 0, 0);
          cm.playerMessage(-1, "必须破坏掉露出真面目的迷宫之核，离开这里。");
          if (cm.getMapId() == 940300000) {
            mobid = 8644765;
          } else {
            if (cm.getMapId() == 940400000) {
              mobid = 8644766;
            } else if (cm.getMapId() == 940500000) {
              if (cm.isQuestFinished(35731)) {
                mobid = 9833326;
              } else {
                mobid = 8644767;
              }
            }
          }
          cm.spawnMobLimit(mobid, 1, 0, 206, 1);
        }
        cm.dispose();
      }
    }
  }
}