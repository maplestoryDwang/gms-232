function action(f, W, U) {
  cm.sendNext("你还没有做好出航的准备啊。");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;