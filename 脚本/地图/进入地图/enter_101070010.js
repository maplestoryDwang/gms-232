var status = -1;
function action(f, E, e) {
  status++;
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;