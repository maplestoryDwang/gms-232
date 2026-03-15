var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askMenu("I wish I had something to hold this water in...#b\r\n#L0#Hey, take these snail shells. You can hold your water with these.#l");
  } else {
    if (status == 1) {
      if (!cm.haveItem(4000436, 100)) {
        cm.sendNext("You don't have enough... I need at least 100.");
        cm.dispose();
      } else {
        cm.askNumber("Hey, that's a good idea！I can give you #i4310000#Perfect Pitch for each 100 #i4000436##t4000436# you give me. How many do you want? (Current Items: " + cm.getPlayer().getItemQuantity(4000436) + ')', java.lang.Math.min(300, cm.getPlayer().getItemQuantity(4000436) / 100), 1, java.lang.Math.min(300, cm.getPlayer().getItemQuantity(4000436) / 100));
      }
    } else if (status == 2) {
      if (U >= 1 && U <= cm.getPlayer().getItemQuantity(4000436) / 100) {
        if (!cm.canHold(4310000, U)) {
          cm.sendOk("Please make some space in ETC tab.");
        } else {
          cm.gainItem(4310000, U);
          cm.gainItem(4000436, -(U * 100));
          cm.sendOk('Thanks!');
        }
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;