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
      cm.askYesNo("#b（箱子里有东西闪闪发光，要拿出来看看吗？）#k");
    } else {
      if (status === V++) {
        if (cm.isQuestActive(2056)) {
          cm.gainItem(4031040, 1);
          cm.warp(103000000, 0, false);
        } else {
          var w = 1 + Math.floor(Math.random() * 6);
          if (w == 1) {
            cm.gainItem(4010003, 2);
          } else {
            if (w == 2) {
              cm.gainItem(4010000, 2);
            } else {
              if (w == 3) {
                cm.gainItem(4010002, 2);
              } else {
                if (w == 4) {
                  cm.gainItem(4010005, 2);
                } else {
                  if (w == 5) {
                    cm.gainItem(4010004, 2);
                  } else if (w == 6) {
                    cm.gainItem(4010001, 2);
                  }
                }
              }
            }
          }
          cm.warp(103000000, 0, false);
        }
        cm.gainSubAchievement(1069, 0);
        cm.dispose();
      }
    }
  }
}