var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("You have finished all your trainings. Good job. You seem to be ready to start with the journey right away！Good, I will let you move on to the next place.");
  } else {
    if (status == 1) {
      cm.sendNextPrev("But remember, once you get out of here, you will enter a village full with monsters. Well them, good bye!");
    } else if (status == 2) {
      cm.warp(40000, 0);
      cm.gainExp(3);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;