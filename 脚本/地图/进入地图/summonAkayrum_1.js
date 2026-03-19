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
      cm.npc_ChangeController(2144019, "oid=39231253", 782, 8, 0);
      cm.sendNextNoESC("从某处传来了低声念咒的声音。", 2144019);
    } else {
      if (status === V++) {
        cm.sendNextPrevSNoESC("这是……!!难道阿卡伊勒这么快就想要解除封印了？");
      } else {
        if (status === V++) {
          cm.sendNextPrevSNoESC("阿卡伊勒！立刻停下来！");
        } else {
          if (status === V++) {
            cm.sendNextPrevNoESC("......到了最后时间却有点不够……作为扭曲时间的代价来说，好像太残酷了。", 2144019);
          } else {
            if (status === V++) {
              cm.sendNextPrevNoESC("竟敢妨碍我，你必须为此付出代价。你已经无路可逃，这里就是你的葬身之地。", 2144019);
            } else if (status === V++) {
              cm.npc_LeaveField("oid=39231253");
              cm.spawnMob(8860001, 309, 71);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}