var status = -1;
var sel;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1 || f == 0 && status == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askMenu("What do you want to do?#b\n\r #L0#Go to Fishing Map#l\r\n#L1#Buy fishing nets#l#k");
  } else {
    if (status == 1) {
      if (U == 0) {
        cm.warp(cm.getMapId() == 970020000 ? 970020005 : 970020000, 0);
        cm.dispose();
      } else {
        cm.askYesNo("It requires 300000 meso for 120 nets. Do you want to purchase?");
      }
    } else if (status == 2) {
      if (cm.canHold(2270008, 120) && cm.getMeso() >= 300000) {
        if (!cm.haveItem(2270008)) {
          cm.gainMeso(-300000);
          cm.gainItem(2270008, 120);
          cm.sendNext("Happy Fishing, and remember, you need the Fishing Chair to fish.");
        } else {
          cm.sendNext("You already have fishing bait.");
        }
      } else {
        cm.sendOk("Please check if you have the required meso or sufficient inventory slot.");
      }
      cm.dispose();
    }
  }
}