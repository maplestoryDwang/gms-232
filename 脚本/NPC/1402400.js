var chat = -1;
var select;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1 || f == 0 && chat == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    chat++;
  } else {
    if (f == 0) {
      chat--;
    }
  }
  if (cm.getMapId() == 300000012 && cm.getPlayer().getLevel() >= 8) {
    Tutorial4(U);
  } else {
    cm.dispose();
  }
}
function Tutorial4(f) {
  if (chat == 0) {
    cm.askMenu("You！Who are you, and what are you doing here?\r\n#L0#I'm just... another ghost#l\r\n#L1#I'm Guard #hh# And I've caught Rhinne, Goddess of Time#l\r\n#L2#I will defeat you!");
  } else {
    if (chat == 1) {
      switch (f) {
        case 0:
          cm.sendNextS("I'm just... another ghost.");
          break;
        case 1:
          cm.sendNextS("I'm Guard #hh# And I've caught Rhinne, Goddess of Time.");
          break;
        case 2:
          cm.sendNextS("I will defeat you!");
          break;
      }
      select = f;
    } else {
      if (chat == 2) {
        switch (select) {
          case 0:
          case 2:
            cm.sendOk("Qucikly, talk to her again！I've made her think you never met.", 2144020);
            cm.dispose();
            break;
          case 1:
            cm.sendNext("Oh, really? I'm very proud of you！Bring her to me!");
            break;
        }
      } else {
        if (chat == 3) {
          cm.sendNext("Ugh！By the powers of time!", 2144020);
        } else {
          if (chat == 4) {
            cm.sendNext("Fast！She's about to cast a spell！Lets get out of here!\r\nI will send you to henesys and I'll try to catch her!");
          } else {
            if (chat == 5) {
              cm.removeNpc(300000012, 1402400);
              cm.removeNpc(300000012, 1402401);
              cm.warp(100000000);
              while (cm.getPlayer().getLevel() < 10) {
                cm.getPlayer().levelUp();
              }
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
var status = -1;