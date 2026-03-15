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
      var V;
      if (Math.floor(Math.random() * 300) == 0) {
        var w = new Array(1382047, 1372037, 1382045, 1372035, 1382048);
        V = cm.gainGachaponItem(w[Math.floor(Math.random() * w.length)], 1);
      } else {
        var N = new Array(2000005, 2022113, 2002018, 1382001, 1050008, 1442017, 1002084, 1050003, 1002064, 1061006, 1051027, 1442009, 1050056, 1051047, 1050049, 1040080, 1051055, 1372010, 1422005, 1002143, 1302027, 1061087, 1372003, 1302019, 1051023, 1050054, 1061083, 1051017, 1002028, 1322010, 1332013, 1050055, 1002245);
        V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1);
      }
      if (V != -1) {
        cm.gainItem(5220000, -1);
        cm.sendOk("You have obtained #b#t" + V + "##k.");
      } else {
        cm.sendOk("Please check your item inventory and see if you have the ticket, or if the inventory is full.");
      }
      cm.dispose();
    }
  }
}