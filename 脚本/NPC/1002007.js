var status = 0;
var maps = Array(120000000, 102000000, 100000000, 103000000);
var rCost = Array(1200, 1000, 1000, 1200);
var costBeginner = Array(120, 100, 100, 120);
var cost = new Array("1,200", '1,000', "1,000", "1,200");
var show;
var sCost;
var selectedMap = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 2) {
      cm.sendNext("There's a lot to see in this town, too. Come back and find us when you need to go to a different town.");
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    cm.sendNext("Hi！I drive the Lith Harbor Regular Cab. Would you like to travel to a different town? If so, try using my cab. I can take you to a different town for a cheap price.");
  } else {
    if (status == 1) {
      if (!cm.haveItem(4032313)) {
        var V = cm.getJob();
        if (V == 0 || V == 1000 || V == 2000) {
          var w = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
          for (var N = 0; N < maps.length; N++) {
            w += "\r\n#L" + N + '##m' + maps[N] + "# (" + costBeginner[N] + " mesos)#l";
          }
        } else {
          var w = "Choose your destination, for fees will change from place to place.#b";
          for (var N = 0; N < maps.length; N++) {
            w += "\r\n#L" + N + '##m' + maps[N] + "# (" + cost[N] + " mesos)#l";
          }
        }
        cm.askMenu(w);
      } else {
        cm.sendNextPrev("Hey, since you have a Taxi Coupon, I can take you to the town indicated on the pass for free. It looks like your destination is #bHenesys#k!");
      }
    } else {
      if (status == 2) {
        if (!cm.haveItem(4032313)) {
          var V = cm.getJob();
          if (V == 0 || V == 1000 || V == 2000) {
            sCost = costBeginner[U];
            show = costBeginner[U];
          } else {
            sCost = rCost[U];
            show = cost[U];
          }
          cm.askYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[U] + "##k? It'll cost you #b" + show + " mesos#k.");
          selectedMap = U;
        } else {
          cm.gainItem(4032313, -1);
          cm.warp(100000000, 6);
          cm.dispose();
        }
      } else if (status == 3) {
        if (cm.getMeso() < sCost) {
          cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
          cm.dispose();
        } else {
          cm.gainMeso(-sCost);
          cm.warp(maps[selectedMap]);
          cm.dispose();
        }
      }
    }
  }
}