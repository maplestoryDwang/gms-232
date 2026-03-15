var gm;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (f == 0) {
    cm.sendOk("You'll get to your destination in moment. Go ahead and talk to other people, and before you know it, you'll be there already.");
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("Do you want to leave the waiting room? You can, but the ticket is NOT refundable. Are you sure you still want to leave this room?");
  } else if (status == 1) {
    cm.warp(260000100);
    cm.dispose();
  }
}
var status = -1;