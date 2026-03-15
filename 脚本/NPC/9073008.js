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
      cm.askYesNo("手一碰到时空门，身体就好像被吸进去的感觉。要移动到时空门里面去吗？", 0, 9073008);
    } else {
      switch (cm.getMapId()) {
        case 102040600:
          cm.warp(931050410, 1, false);
          break;
        case 220040200:
          cm.warp(931050413, 1, false);
          break;
        case 260010201:
          cm.warp(931050415, 1, false);
          break;
        case 261020500:
          cm.warp(931050417, 1, false);
          break;
        case 251010500:
          cm.warp(931050418, 1, false);
          break;
        case 240010200:
          cm.warp(931050419, 1, false);
          break;
        case 240010600:
          cm.warp(931050420, 1, false);
          break;
        case 240020200:
          cm.warp(931050422, 1, false);
          break;
        case 261020200:
          cm.warp(931050424, 1, false);
          break;
        case 240020401:
          cm.warp(931050425, 1, false);
          break;
        case 240020101:
          cm.warp(931050426, 1, false);
          break;
        case 220080000:
          cm.warp(931050427, 1, false);
          break;
        case 211041400:
          cm.warp(931050428, 1, false);
          break;
        case 230040410:
          cm.warp(931050429, 1, false);
          break;
        case 240040400:
          cm.warp(931050430, 1, false);
          break;
        case 270010500:
          cm.warp(931050431, 1, false);
          break;
        case 270020500:
          cm.warp(931050432, 1, false);
          break;
        case 270030500:
          cm.warp(931050433, 1, false);
          break;
        case 261010002:
          cm.warp(931050434, 1, false);
          break;
        case 261010103:
          cm.warp(931050435, 1, false);
          break;
        case 250010502:
          cm.warp(931050436, 1, false);
          break;
      }
      cm.dispose();
    }
  }
}