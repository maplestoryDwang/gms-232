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
      cm.npc_ChangeController(1403000, 'oid=219888', -466, 120, 4, -516, -416, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("嗯……比想象的要干净。好的，技能书放在哪里了呢……？啊，对了，好像是放在这里的小抽屉里了。过了几百年时间，一定烂掉了吧？", 17, 0, false, true);
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}