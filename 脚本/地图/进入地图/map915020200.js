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
      cm.npc_ChangeController(2159462, "oid=227923", 290, 182, 4, 240, 340, 1, false, 0, false);
      cm.sendNormalTalk("那就是为了守护秘密仓库而设置的守护者吗？虽然经过了几百年时间，但仍然完好无损。看来果然和幻影吹嘘的一样，是非常珍贵的东西。", 17, 0, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("嗯…………门锁被破坏了不说，如果连那个也被弄坏的话，就算再有钱的人也会愤怒的吧。怎么办呢…………", 17, 0, true, false);
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