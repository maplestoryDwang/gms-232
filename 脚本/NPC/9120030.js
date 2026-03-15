function start() {
  if (cm.getMapId() != 802000310) {
    cm.askMenu("Waaaaaaaahhh！\r\n#b#L0#Hand in the energy transmitter device#l \r\n#b#L1#Just Run away for now#l");
  }
}
function action(f, W, U) {
  if (f == 1) {
    if (U == 0) {
      if (cm.haveItem(4032192, 10)) {
        cm.gainItem(4032192, -10);
        cm.warp(802000313, 0);
      } else {
        cm.sendOk("Please collect 10 Energy Transmitter device!");
      }
    } else if (U == 1) {
      cm.warp(802000310, 0);
    }
  }
  cm.dispose();
}
var status = -1;