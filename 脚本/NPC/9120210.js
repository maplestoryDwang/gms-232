var status = -1;
var points = Array(500, 350, 250, 200, 150, 100, 75, 50, 30, 20, 10, 1);
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (cm.haveItem(1142321, 1, true, true)) {
      cm.sendNext("You are the highest rank.");
      cm.dispose();
    } else {
      for (var V = 0; V < points.length - 1; V++) {
        if (cm.haveItem(1142321 - (V + 1), 1, true, true)) {
          cm.askYesNo("You are at rank #i" + (1142321 - (V + 1)) + "#. \r\nWould you like to get the next rank? #i" + (1142321 - V) + "#\r\nCost: " + points[V] + " coins");
          return;
        }
      }
      cm.askYesNo("You do not have a medal. \r\nWould you like to get one? #i" + (1142321 - (points.length - 1)) + "#\r\nCost: " + points[points.length - 1] + " coins");
    }
  } else {
    if (status == 1) {
      for (var V = 0; V < points.length - 1; V++) {
        if (cm.haveItem(1142321 - (V + 1), 1, true, true)) {
          giveItem(V);
          return;
        }
      }
      giveItem(points.length - 1);
    }
  }
}
function giveItem(f) {
  if (!cm.haveItem(4310018, points[f])) {
    cm.sendOk("You do not have " + points[f] + " coins.");
  } else {
    if (!cm.canHold(1142321 - f, 1)) {
      cm.sendOk("Please make some space.");
    } else if (cm.hasEquipped(1142321 - (f + 1))) {
      cm.sendOk("Please take off your medal.");
    } else {
      cm.gainItem(4310018, -points[f]);
      cm.gainItem(1142321 - f, 1);
      if (cm.haveItem(1142321 - (f + 1))) {
        cm.gainItem(1142321 - (f + 1), -1);
      }
    }
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;