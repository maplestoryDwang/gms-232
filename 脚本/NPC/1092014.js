var status = -1;
var maps = Array(104000000, 102000000, 100000000, 103000000, 101000000, 105000000);
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
    cm.sendNext("How's it going? I drive the Nautilus' Mid-Sized Taxi. If you want to go from town to town safely and fast, then ride our cab. We'll gladly take you to your destination with an affordable price.");
  } else {
    if (status == 1) {
      if (cm.getJob() == 0) {
        var V = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
        for (var w = 0; w < maps.length; w++) {
          V += "\r\n#L" + w + "##m" + maps[w] + "# (" + costBeginner[w] + " mesos)#l";
        }
      } else {
        var V = "Choose your destination, for fees will change from place to place.#b";
        for (var w = 0; w < maps.length; w++) {
          V += "\r\n#L" + w + "##m" + maps[w] + "# (" + cost[w] + " mesos)#l";
        }
      }
      cm.askMenu(V);
    } else {
      if (status == 2) {
        if (cm.getJob() == 0) {
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
          cm.dispose();
        } else {
          cm.gainMeso(-sCost);
          cm.warp(maps[selectedMap], 0);
          cm.dispose();
        }
      }
    }
  }
}