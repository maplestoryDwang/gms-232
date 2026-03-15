var ids = [1382001, 1002064, 1050049, 1302027, 1051023, 1332013, 1312001, 1040080, 1061087, 1050054, 1051047, 1312030, 1050008, 1051027, 1051055, 1372003, 1061083, 1050055, 1442017, 1442009, 1372010, 2022113, 1302019, 1051017, 1002245, 1002084, 1050056, 1422005, 2000005, 1002028, 2002018, 1050003, 1002143, 1322010];
var status = 0;
function start() {
  if (cm.haveItem(5451000)) {
    cm.gainItem(5451000, -1);
    cm.processGachapon(ids, true);
    cm.dispose();
  } else {
    if (cm.haveItem(5220000)) {
      cm.askYesNo("You may use Gachapon. Would you like to use your Gachapon ticket?");
    } else {
      cm.askMenu("Welcome to the " + cm.getMap().getMapName() + " Gachapon. How may I help you?\r\n\r\n#L0#What is Gachapon?#l\r\n#L1#Where can you buy Gachapon tickets?#l");
    }
  }
}
function action(f, W, U) {
  if (f == 1 && cm.haveItem(5220000)) {
    cm.processGachapon(ids, false);
    cm.dispose();
  } else {
    if (f > 0) {
      status++;
      if (U == 0) {
        cm.sendNext("Play Gachapon to earn rare scrolls, equipment, chairs, mastery books, and other cool items！All you need is a #bGachapon Ticket#k to be the winner of a random mix of items.");
      } else {
        if (U == 1) {
          cm.sendNext("Gachapon Tickets are available in the #rCash Shop#k and can be purchased using NX or Maple Points. Click on the red SHOP at the lower right hand corner of the screen to visit the #rCash Shop #kwhere you can purchase tickets.");
          cm.dispose();
        } else if (status == 2) {
          cm.sendNext("You'll find a variety of items from the " + cm.getMap().getMapName() + " Gachapon, but you'll most likely find several related items and scrolls since " + cm.getMap().getMapName() + " is known as the town.");
          cm.dispose();
        }
      }
    }
  }
}