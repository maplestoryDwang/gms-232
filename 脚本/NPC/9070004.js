var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendOk("The path to the Battle Mode has changed. Take the Dimensional Mirror to the Battle Square, and you can join in the #bGrand Battle#k!");
  } else if (status == 1) {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;