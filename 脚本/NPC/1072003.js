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
  if (status == 0 && cm.getQuestStatus(100010) == 1) {
    status = 3;
  }
  if (status == 0) {
    if (cm.getQuestStatus(6141) == 1) {
      var V = cm.getEventManager("DLPracticeField");
      if (V == null) {
        cm.sendOk("Unknown error occured");
        cm.dispose();
      } else {
        V.startInstance(cm.getPlayer());
        cm.dispose();
      }
    } else {
      if (cm.getQuestStatus(100010) == 2) {
        cm.sendOk("You're truly a hero!");
        cm.dispose();
      } else if (cm.getQuestStatus(100009) >= 1) {
        cm.completeQuest(100009);
        if (cm.getQuestStatus(100009) == 2) {
          cm.sendNext("Oh, isn't this a letter from the #bDark Lord#k?");
        }
      } else {
        cm.sendOk("I can show you the way once your ready for it.");
        cm.dispose();
      }
    }
  } else {
    if (status == 1) {
      cm.sendNextPrev("So you want to prove your skills? Very well...");
    } else {
      if (status == 2) {
        cm.askAcceptDecline("I will give you a chance if you're ready.");
      } else {
        if (status == 3) {
          cm.startQuest(100010);
          cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.");
        } else if (status == 4) {
          cm.warp(910370000, 0);
          cm.dispose();
        }
      }
    }
  }
}