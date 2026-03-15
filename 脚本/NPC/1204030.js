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
      cm.npc_ChangeController(1204030, "oid=409158", -229, 68, 22, -279, -179, 0, false, 0, false);
      cm.forceStartQuest(21764, '1');
      cm.sendNormalTalk("封印石应该就在这附近……咦，怎么没有？难道已经被黑色之翼……？！", 2, 1204030, false, false);
    } else if (status === V++) {
      cm.sendNormalTalk("封印石被眼镜将军抢走了！去见见赫丽娜！", 2, 1204030, false, true);
      cm.dispose();
    }
  }
}