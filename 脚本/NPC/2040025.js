var status = 0;
var map;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.haveItem(4001020)) {
      cm.askMenu("You can use #bEos Rock Scroll#k to activate #bSecond Eos Rock#k. Which of these rocks would you like to teleport to?#b\r\n#L0#First Eos Rock (100th Floor)#l\r\n#L1#Third Eos Rock (41st Floor)#l");
    } else {
      cm.sendOk("There's a rock that will enable you to teleport to #bFirst Eos Rock or Third Eos Rock#k, but it cannot be activated without the scroll.");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      if (U == 0) {
        cm.askYesNo("You can use #bEos Rock Scroll#k to activate #bSecond Eos Rock#k. Will you teleport to #bFirst Eos Rock#k at the 100th Floor?");
        map = 221023200;
      } else {
        cm.askYesNo("You can use #bEos Rock Scroll#k to activate #bSecond Eos Rock#k. Will you teleport to #bThird Eos Rock#k at the 32nd Floor?");
        map = 221021200;
      }
    } else if (status == 2) {
      cm.gainItem(4001020, -1);
      cm.warp(map, 0);
      cm.dispose();
    }
  }
}