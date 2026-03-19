var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestFinished(59005)) {
        cm.dispose();
        return;
      }
      cm.forceJoinEvent("林之灵_消灭野狼");
      cm.sendNormalTalk("像刚才一样挥舞着树枝来消灭野狼吧喵。", 5, 9390300, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("还有，你要时刻注意不要让自己体力耗尽啊。\r\n画面下方的#b血量#k是象征着生命的#b体力#k。\r\n#i03800626#\r\n最后，如果血量不足，就来找我啊！我会像这次一样#b帮你恢复啦#k！", 5, 9390300, true, true);
      } else if (status === V++) {
        cm.forceStartQuest(59005, '');
        cm.updateInfoQuest(59005, "mob=0");
        cm.spawnMobLimit(9390931, 1, 661, 246, 5);
        cm.spawnMobLimit(9390931, 1, 761, 246, 5);
        cm.spawnMobLimit(9390931, 1, 861, 246, 5);
        cm.spawnMobLimit(9390931, 1, 961, 246, 5);
        cm.spawnMobLimit(9390931, 1, 1061, 246, 5);
        cm.dispose();
      }
    }
  }
}