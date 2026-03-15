var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else if (status == 0) {
    cm.sendNext("You need more time decorating trees, huh? If you ever feel like leaving this place, feel free to come talk to me!");
    cm.dispose();
    status--;
  }
  if (status == 0) {
    cm.askYesNo("Have you decorated your tree nicely? It's an interesting experience, to say the least, decorating a Christmas tree with other people. Don't ya think?  Oh yeah ... are you suuuuure you want to leave this place?");
  } else if (status == 1) {
    cm.warp(209000000, 4);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;