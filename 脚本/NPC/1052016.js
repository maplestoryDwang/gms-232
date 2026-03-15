var status = 0;
var maps = Array(104000000, 102000000, 101000000, 100000000, 120000000, 105000000);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var costBeginner = Array(100, 100, 100, 100, 100, 100);
var show;
var sCost;
var selectedMap = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 1 && f == 0) {
    cm.dispose();
    return;
  } else {
    if (status >= 2 && f == 0) {
      cm.sendNext("There's a lot to see in this town, too. Come back and find us when you need to go to a different town.");
      cm.dispose();
      return;
    }
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("Hello, I drive the Regular Cab. If you want to go from town to town safely and fast, then ride our cab. We'll gladly take you to your destination with an affordable price.");
  } else {
    if (status == 1) {
      var V = cm.getJob();
      if (V == 0 || V == 1000 || V == 2000) {
        var w = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
        for (var N = 0; N < maps.length; N++) {
          w += "\r\n#L" + N + "##m" + maps[N] + "# (" + costBeginner[N] + " mesos)#l";
        }
      } else {
        var w = "Choose your destination, for fees will change from place to place.#b";
        for (var N = 0; N < maps.length; N++) {
          w += "\r\n#L" + N + "##m" + maps[N] + "# (" + cost[N] + " mesos)#l";
        }
      }
      cm.askMenu(w);
    } else {
      if (status == 2) {
        var V = cm.getJob();
        if (V == 0 || V == 1000 || V == 2000) {
          sCost = costBeginner[U];
          show = costBeginner[U];
        } else {
          sCost = cost[U];
          show = cost[U];
        }
        cm.askYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[U] + "##k? It'll cost you #b" + show + " mesos#k.");
        selectedMap = U;
      } else if (status == 3) {
        if (cm.getMeso() < sCost) {
          cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
        } else {
          cm.gainMeso(-sCost);
          cm.warp(maps[selectedMap]);
        }
        cm.dispose();
      }
    }
  }
}