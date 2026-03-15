var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getPlayer().getLevel() >= 51) {
      cm.sendOk("I can only be used under level 51.");
      cm.dispose();
    } else if (cm.haveItem(5220000)) {
      cm.askYesNo("You have some #bGachapon Tickets#k there.\r\nWould you like to try your luck?");
    } else {
      cm.sendOk("You don't have a single ticket with you. Please buy the ticket at the department store before coming back to me. Thank you.");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      var V = new Array(2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012);
      var w = cm.gainGachaponItem(V[Math.floor(Math.random() * V.length)], 1);
      if (w != -1) {
        cm.gainItem(5220000, -1);
        cm.sendOk("You have obtained #b#t" + w + "##k.");
      } else {
        cm.sendOk("Please check your item inventory and see if you have the ticket, or if the inventory is full.");
      }
      cm.dispose();
    }
  }
}