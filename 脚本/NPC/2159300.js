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
      cm.sendNormalTalk("干，干嘛！竟然把我好不容易弄到的火焰炸弹弄坏了！你知道这值多少钱吗？这可是我为了研究新的烫发技术，特地花大价钱买来的！", 0, 2159300, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("什么？是监视者命令你来监视我的？连追求完美发型的自由都没有吗？真是忍无可忍！我一定要他赔偿我！", 0, 2159300, true, true);
      } else if (status === V++) {
        cm.forceStartQuest(23979, '1');
        cm.dispose();
      }
    }
  }
}