var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.sendNormalTalk("你听说了吗？据说和宇宙船内部的外星生命体战斗，可以获得非常好的饰品。\r\n   #b#i1113038:# #t1113038##k\r\n   #b#i1122256:# #t1122256##k\r\n   #b#i1032191:# #t1032191##k\r\n   #b#i1132230:# #t1132230##k\r\n里面的这种头盔，只有偶尔现身的#r#e“稀有的外星访客”#k#n才会掉落。是不是很不错？\r\n   #b#i1003893:# #t1003893##k", 0, 9390010, false, false);
  } else {
    cm.dispose();
  }
}