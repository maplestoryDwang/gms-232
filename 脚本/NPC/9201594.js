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
  } else {
    if (status === V++) {
      cm.askMenu("#e<婚礼地图移动说明>#n\r\n这世界充满了爱！#e#bNew婚礼公园#k#n中满满的爱之气息好像已经蔓延到这里了~！#e在New婚礼公园里，可从#r经典小屋婚礼礼堂、拉斯维加斯婚礼礼堂、日本婚礼礼堂、中国婚礼礼堂#k#n中选择#h0#你喜欢的婚礼礼堂，然后进行#b小屋婚礼#k。\r\n#b#L0# 前往#m620110000#。(#t5250500#)#l", 4, 9201594);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(620110000, 0);
    }
  }
}