var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f != 1) {
    cm.dispose();
  } else {
    status++;
    if (status == 0) {
      cm.askMenu("Welcome to Golden Temple！I can issue you a Golden Ticket.\r\n\r\n#b#L0#Golden Ticket for 2,000,000 meso (one time use)#l\r\n#L1#Premium Golden Ticket for 50,000,000 meso#l#k");
    } else {
      if (status == 1) {
        if (U == 0) {
          if (cm.getMeso() < 2000000) {
            cm.sendOk("You do not have enough meso.");
          } else if (!cm.canHold(4001431) || cm.haveItem(4001431)) {
            cm.sendOk("Either you have this already or can't hold it.");
          } else {
            cm.gainMeso(-2000000);
            cm.gainItem(4001431, 1);
            cm.sendOk("Thank you.");
          }
        } else {
          if (cm.getMeso() < 50000000) {
            cm.sendOk("You do not have enough meso.");
          } else if (!cm.canHold(4001432) || cm.haveItem(4001432)) {
            cm.sendOk("Either you have this already or can't hold it.");
          } else {
            cm.gainMeso(-50000000);
            cm.gainItem(4001432, 1);
            cm.sendOk("Thank you.");
          }
        }
        cm.dispose();
      }
    }
  }
}