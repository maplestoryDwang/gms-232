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
      cm.npc_ChangeController(2155103, "oid=6558075", 811, 0, 6, 761, 861, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6558075", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=6558075", "off", -1, 1);
      cm.setPartner(1, 2155104, 80001702, 0);
      cm.sendNormalTalk_Bottom("嗯…是这里吗？\r\n我好像记得，但又好像不记得。\r\n在我插入地面的那个地方说不定有什么东西。我们去看看吧。", 37, 2155104, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("前往笨蛋掉落的地方，试着按下#b采集/NPC对话键#k吧。", 57, 0, true, true);
      } else if (status === V++) {
        cm.addPopupSay(2155104, 1500, "你该不会不记得我掉落的地方了吧? ", '', 0);
        cm.dispose();
      }
    }
  }
}