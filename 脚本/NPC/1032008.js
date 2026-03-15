var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = cm.getEventManager("乘船_蝙蝠魔");
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendNext("看来你还有事情要办吧？");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (V.getProperty("entry") === "true") {
      cm.askYesNo("你现在要乘船去天空之城吗？\r\n怎么样？你要上船吗？", 0, 1032008);
    } else {
      cm.sendOk("船已经在准备出发。对不起，请乘坐下一班船。运行时间表可以通过售票员确认。");
      cm.dispose();
    }
  } else if (status == 1) {
    cm.warp(104020111, 0);
    cm.dispose();
  }
}