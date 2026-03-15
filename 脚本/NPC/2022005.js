var status = -1;
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
    cm.askMenu("#b#L0#Give me Bottle of Ancient Glacial Water.#l\r\n#L1#Go to Ice Ravine by myself. (Quest)#l");
  } else {
    if (status == 1) {
      if (U == 0) {
        if (!cm.haveItem(4032649) && !cm.haveItem(2022698)) {
          cm.gainItem(4032649, 1);
        } else {
          cm.sendOk("You have this already.");
        }
      } else if (U == 1) {
        cm.warp(921120705, 0);
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