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
      cm.askMenu("那边隐约能感到星之力的门扉，要踏入其中吗？\r\n\r\n#b#L0#暖春之国#l\r\n#L1#盛夏之国#l\r\n#L2#晚秋之国#l\r\n#L3#寒冬之国#l", 4, 9201327);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 0) {
          cm.askYesNo("需要前往暖春之国吗？", 4, 9201327);
        } else {
          if (selectionLog[1] == 1) {
            cm.askYesNo("需要前往盛夏之国吗？", 4, 9201327);
          } else {
            if (selectionLog[1] == 2) {
              cm.askYesNo('需要前往晚秋之国吗？', 4, 9201327);
            } else if (selectionLog[1] == 3) {
              cm.askYesNo("需要前往寒冬之国吗？", 4, 9201327);
            }
          }
        }
      } else {
        if (selectionLog[1] == 0) {
          cm.warp(693000000, 2);
        } else {
          if (selectionLog[1] == 1) {
            cm.warp(693000020, 2);
          } else {
            if (selectionLog[1] == 2) {
              cm.warp(693000040, 2);
            } else if (selectionLog[1] == 3) {
              cm.warp(693000060, 1);
            }
          }
        }
        cm.dispose();
      }
    }
  }
}