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
      cm.spawnMobLimit(9300871, 1, 171, 182, 100);
      cm.spawnMobLimit(9300871, 1, 171, 182, 100);
      cm.sendNormalTalk("这里的锁还是完好的。这说明幻影还没来过吗？或者已经走了吗？必须进去之后才能知道。", 17, 0, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("这好像是非常贵的锁……明摆着就在告诉别人里面有好东西。他应该不会光破坏掉一把锁，然后就回去。", 17, 0, true, false);
      cm.dispose();
    }
  }
}