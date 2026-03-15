var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(100004) == 1) {
      cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.");
      status = 3;
    } else {
      if (cm.getQuestStatus(100004) == 2) {
        cm.sendOk("You're truly a hero!");
        cm.dispose();
      } else if (cm.getQuestStatus(100003) >= 1) {
        cm.completeQuest(100003);
        if (cm.getQuestStatus(100003) == 2) {
          cm.sendNext("Oh, isn't this a letter from #bDances with Balrog#k?");
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
          cm.startQuest(100004);
          cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.");
        } else if (status == 4) {
          cm.warp(910230000, 0);
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;