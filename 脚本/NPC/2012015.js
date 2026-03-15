var status = -1;
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  }
  status++;
  if (status == 0) {
    if (cm.haveItem(4001019)) {
      cm.askYesNo("You can use #b#t4001019#k to activate #b#p2012014##k. Will you teleport to where #b#p2012015##k is?");
    } else {
      cm.sendOk("There's a #b#p2012015##k that'll enable you to teleport to where #b#p2012014##k is, but you can't activate it without the scroll.");
      cm.dispose();
    }
  }
  if (status == 1) {
    cm.gainItem(4001019, -1);
    cm.warp(200080200, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;