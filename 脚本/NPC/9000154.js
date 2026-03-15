var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("Christmas Tree decorating will take place every day. Talk to #bCassandra#k for more details.");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;