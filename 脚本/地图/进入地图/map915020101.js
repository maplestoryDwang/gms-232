var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  var V = cm.getJob();
  if (V == 2005 || V == 2500 || V == 2510 || V == 2511 || V == 2512) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159461, "oid=227919", -82, -69, 4, -132, -43, 1, false, 0, false);
      cm.sendNormalTalk("看来沙漠中富人云集的传闻是真的了。幻影这家伙到底偷了多少？嗯，这么看来，那只箱子似乎就是传说中装有珍贵宝物的那个了。我得看看。", 17, 0, false, true);
    } else if (status === V++) {
      cm.forceStartQuest(38052, "clear");
      cm.dispose();
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}