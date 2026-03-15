function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (status == 0 && f == 0) {
      cm.sendNext("You have canceled the use of the item.");
      cm.gainItem(2430014, 1);
      cm.dispose();
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
  }
  if (status == 0) {
    cm.askYesNo("Are you going to use the #bKiller Mushroom Spore#k?....#e#r* Take Note#n..Please do not apply directly on the body!..If swallowed, please see the nearest doctor!");
  }
  if (status == 1) {
    cm.sendNextPrevS("Awesome, the barrier is broken!!!");
  }
  if (status == 2) {
    cm.playerMessage("The Mushroom Forest Barrier has been removed, and penetrated.");
    cm.dispose();
  }
}
var status = -1;