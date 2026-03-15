var status = -1;
function action(f, W, U) {
  status++;
  if (status == 0) {
    cm.sendNext("Aww, you found me. I thought I found a great spot, too.");
  } else if (status == 1) {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;