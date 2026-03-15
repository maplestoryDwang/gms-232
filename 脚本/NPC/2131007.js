var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askMenu("These monsters are a piece of cake！One hit with my sword and I will kill them... better get a sword first.#b\r\n#L0#Hey, take these tree trunks. You can build a better sword with them.#l");
  } else {
    if (status == 1) {
      if (!cm.haveItem(4000438, 100)) {
        cm.sendNext("You don't have enough... I need at least 100.");
        cm.dispose();
      } else {
        cm.askNumber("Hey, that's a good idea！I can give you #i4310000#Perfect Pitch for each 100 #i4000438##t4000438# you give me. How many do you want? (Current Items: " + cm.getPlayer().getItemQuantity(4000438) + ')', java.lang.Math.min(300, cm.getPlayer().getItemQuantity(4000438) / 100), 1, java.lang.Math.min(300, cm.getPlayer().getItemQuantity(4000438) / 100));
      }
    } else if (status == 2) {
      if (U >= 1 && U <= cm.getPlayer().getItemQuantity(4000438) / 100) {
        if (!cm.canHold(4310000, U)) {
          cm.sendOk("Please make some space in ETC tab.");
        } else {
          cm.gainItem(4310000, U);
          cm.gainItem(4000438, -(U * 100));
          cm.sendOk("Thanks!");
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