var status = -1;
function start() {
  if (cm.haveItem(4031508, 5) && cm.haveItem(4031507, 5)) {
    cm.sendNext("Wow~ You have succeeded in collecting 5 of each #b#t4031508##k and #b#t4031507##k. Okay then, I will send you to Zoo. Please talk to me again when you get there.");
  } else {
    cm.askYesNo("You haven't completed the requirements. Are you sure you want to leave?");
  }
}
function action(f, W, U) {
  status++;
  if (f != 1) {
    if (status > 0) {
      cm.warp(230000003);
    }
    cm.dispose();
    return;
  }
  if (status == 0) {
    if (cm.haveItem(4031508, 5) && cm.haveItem(4031507, 5)) {
      cm.warp(230000003);
      cm.dispose();
    } else {
      cm.sendOk("Well okay, I will send you back.");
      cm.warp(230000003);
      cm.dispose();
    }
  } else {
    cm.warp(230000003);
    cm.dispose();
  }
}