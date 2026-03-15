function start() {
  cm.askYesNo("你想获得#b#i4031179:# #t4031179##k吗？");
}
function action(f, W, U) {
  if (f != 1) {
    cm.dispose();
    return;
  }
  if (cm.haveItem(4031179)) {
    cm.sendNext("你身上已经有#b#i4031179:# #t4031179##k了啊，还来找我做什么？");
  } else {
    cm.gainItem(4031179, 1);
  }
  cm.dispose();
}
var status = -1;