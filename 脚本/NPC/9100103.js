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
    if (cm.haveItem(5220000)) {
      cm.askYesNo("You have some #bGachapon Tickets#k there.\r\nWould you like to try your luck?");
    } else {
      cm.sendOk("You don't have a single ticket with you. Please buy the ticket at the department store before coming back to me. Thank you.");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      var V = new Array(2040402, 2022130, 4130014, 2000004, 2000005, 2022113, 1322008, 1302021, 1322022, 1302013, 1051010, 1060079, 1002005, 1002023, 1002085, 1332017, 1322010, 1051031, 1002212, 1002117, 1040081, 1051037, 1472026, 1332015, 1041060, 1472003, 1060086, 1060087, 1472009, 1060051, 1041080, 1041106, 1092018);
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