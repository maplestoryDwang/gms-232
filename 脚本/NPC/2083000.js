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
    if (cm.haveItem(4001086)) {
      cm.askYesNo("石板上的文字发出了奇异的光芒，石板后的一扇小门开启了。想要使用秘密通道吗？", 0, 2083000);
    } else {
      cm.sendNormalTalk("石板上写着看不懂的文字，不知是什么用途。\r\n#b（需要持有#i4001086##e#b#t4001086##k才能进入）", 0, 2083000, 0, 0);
      cm.dispose();
    }
  } else {
    cm.warp(240050400, 0, false);
    cm.dispose();
  }
}