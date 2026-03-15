var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askAcceptDecline("#b#h ##k，里恩出了点问题。冰川正在融化, 我需要你的帮助！来看看我！\r\n\r\n#b#e(接受后移动到里恩.)。", 1201000);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("我在里恩见你。", 1201000);
      } else if (status === V++) {
        cm.forceStartQuest(32160);
        cm.warp(140000000, 0);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;