var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = em.getNumberProperty("state");
  if (status == 0) {
    if (V > 1) {
      cm.sendNextNoESC("你来救我们……真是太感谢了。", 1500016);
    } else {
      cm.sendOk("请消灭那个凶恶的土地鼠！\r\n#b（消灭地鼠王后,重新进行对话。）");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      cm.sendNextNoESC("我这辈子不会忘记你的大恩大德！", 1500018);
    } else if (status == 2) {
      cm.forceCompleteQuest(32128);
      cm.warp(101073200, 0);
      cm.gainExp(6000);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;