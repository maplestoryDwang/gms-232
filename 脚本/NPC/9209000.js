status = -1;
var sel;
var pickup = -1;
function start() {
  cm.askMenu("I'm Abdula, and I am a merchant intermediary who deals with rare goods. What do you have for me?#b\r\n#L0#I want to sell goods.\r\n#L1#I want to know about current market prices.\r\n#L2#A merchant intermediary? What is that?");
}
function action(f, W, U) {
  status++;
  if (f != 1) {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    } else {
      if (f == 0 && sel == 0 && status == 2) {
        cm.sendNext("You don't want to sell it right now? You can sell it later, but remember the Special Items are only valuable for a week.");
        cm.dispose();
        return;
      } else {
        if (f == 0 && sel == 2) {
          status -= 2;
        }
      }
    }
  }
  if (status == 0) {
    if (U == 0) {
      var V = "Let's see what you brought...#b";
      for (var w = 0; w < 5; w++) {
        V += "\r\n#L" + w + "##t" + (3994090 + w) + '#';
      }
      cm.askMenu(V);
    } else {
      if (U == 1) {
        var V = '';
        for (var w = 0; w < 5; w++) {
          V += "The current market price for #t" + (w + 3994090) + "# is #rNOT DONE#k mesos\r\n";
        }
        cm.sendNext(V);
        cm.dispose();
      } else {
        cm.sendNext("I buy the products at the Maple 7th Day Market and sell them in other towns. I trade memorabilia, spices, taxidermy shark, and more... but no Lazy Daisy's eggs.");
      }
    }
  } else {
    if (status == 1) {
      if (sel == 0) {
        if (cm.haveItem(3994090 + U)) {
          pickup = 3994090 + U;
          cm.askYesNo("The current price is 180 mesos. Would you like to sell it now?");
        } else {
          cm.sendNext("You don't have anything. Stop wasting my time... I'm a busy person.");
          cm.dispose();
        }
      } else {
        cm.sendNextPrev("Maple 7th Day Market Sundays are my days off. If you need to see me, you're going to have to come Monday to Friday...");
      }
    } else {
      if (status == 2) {
        if (sel == 0) {
          cm.askNumber("How many would you like to sell?", 0, 0, 200);
        } else {
          cm.sendPrev("Oh, and the prices are subject to change. I can't get the short end of the stick, I have to stay in business！Check back with me frequently, my prices change by the hour!");
        }
      } else {
        if (status == 3) {
          if (sel == 0) {
            if (U != 1) {
              cm.sendNext("Something's not right. Check again.");
            } else {
              cm.sendNext("The transaction has been completed. See you next time.");
              cm.gainMeso(180);
              cm.gainItem(pickup, -1);
            }
          }
          cm.dispose();
        }
      }
    }
  }
}
var status = -1;