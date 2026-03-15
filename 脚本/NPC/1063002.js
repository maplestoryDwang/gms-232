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
      if (cm.isQuestActive(2054) && !cm.haveItem(4031028)) {
        cm.gainItem(4031028, 30);
        cm.warp(105000000, 0, false);
      } else {
        var w = 1 + Math.floor(Math.random() * 7);
        if (w == 1) {
          cm.gainItem(4020005, 2);
        } else {
          if (w == 2) {
            cm.gainItem(4020006, 2);
          } else {
            if (w == 3) {
              cm.gainItem(4020004, 2);
            } else {
              if (w == 4) {
                cm.gainItem(4020001, 2);
              } else {
                if (w == 5) {
                  cm.gainItem(4020003, 2);
                } else {
                  if (w == 6) {
                    cm.gainItem(4020000, 2);
                  } else if (w == 7) {
                    cm.gainItem(4020002, 2);
                  }
                }
              }
            }
          }
        }
        cm.warp(105000000, 0, false);
      }
      cm.dispose();
    }
  }
}