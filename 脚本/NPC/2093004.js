var status = -1;
var menu;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.sendNext("Hmmm ... too busy to do it right now? If you feel like doing it, though, come back and find me.");
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("Will you move to #b#m230000000##k now? The price is #b10000 mesos#k.");
  } else if (status == 1) {
    if (cm.getMeso() < 10000) {
      cm.sendOk("I don't think you have enough money...");
      cm.dispose();
    } else {
      cm.gainMeso(-10000);
      cm.warp(230000000);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;