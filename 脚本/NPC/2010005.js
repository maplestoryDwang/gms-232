var msg;
var check;
var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 1) {
      cm.sendNext("You must have some buiness to take care of here. You must be tired from all that traveling and hunting. Go take some rest, and if you feel like changing your mind, then come talk to me.");
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    cm.askMenu("Have you heard of the beach with a spectacular view of the ocean called #b#m110000000##k, located a little far from #m" + cm.getMapId() + "#? I can take you there right now for either #b" + 2000 + " mesos#k, or if you have #b#t" + 4031134 + "##k with you, in which case you'll be in for free.\r\n\r\n#L0##bI'll pay " + 2000 + " mesos.#k#l\r\n#L1##bI have #t" + 4031134 + "##k#l\r\n#L2##bWhat is #t" + 4031134 + '#?#k#l');
  } else {
    if (status == 1) {
      if (U == 0 || U == 1) {
        check = U;
        if (U == 0) {
          msg = "You want to pay #b2000 mesos#k and leave for #m110000000#?";
        } else if (U == 1) {
          msg = "So you have #b#t4031134##k? You can always head over to #m110000000# with that.";
        }
        cm.askYesNo(msg + " Okay!！Please beware that you may be running into some monsters around there though, so make sure not to get caught off-guard. Okat, would you like to head over to #m110000000# right now?");
      } else if (U == 2) {
        cm.sendNext("You must be curious about #b#t4031134##k. Yeah, I can see that. #t4031134# is an item where as long as you have in possession, you may make your way to #m110000000# for free. It's such a rare item that even we had to buy those, but unfortunately I lost mine a few weeks ago during a long weekend.");
        status = 3;
      }
    } else {
      if (status == 2) {
        if (check == 0) {
          if (cm.getMeso() < 2000) {
            cm.sendOk("I think you're lacking mesos. There are many ways to gather up some money, you know, like ... selling your armor ... defeating the monsters ... doing quests ... you know what I'm talking about.");
            cm.dispose();
          } else {
            cm.gainMeso(-2000);
            access = true;
          }
        } else if (check == 1) {
          if (!cm.haveItem(4031134)) {
            cm.sendOk("Hmmm, so where exactly is #b#t4031134##k?? Are you sure you have them? Please double-check.");
            cm.dispose();
          } else {
            access = true;
          }
        }
        if (access == true) {
          cm.saveLocation("FLORINA");
          cm.warp(120030000, 0);
          cm.dispose();
        }
      } else {
        if (status == 3) {
          cm.sendNext("You must be curious about #b#t4031134##k. Yeah, I can see that. #t4031134# is an item where as long as you have in possession, you may make your way to #m110000000# for free. It's such a rare item that even we had to buy those, but unfortunately I lost mine a few weeks ago during a long weekend.");
        } else {
          if (status == 4) {
            cm.sendPrev("I came back without it, and it just feels awful not having it. Hopefully someone picked it up and put it somewhere safe. Anyway this is my story and who knows, you may be able to pick it up and put it to good use. If you have any questions, feel free to ask");
          } else if (status == 5) {
            cm.dispose();
          }
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