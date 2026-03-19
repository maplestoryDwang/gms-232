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
  } else if (status === V++) {
    cm.fieldEffect_PlayBGM("Bgm41/BigMachine_mission", 0, 0);
    cm.npc_ChangeController(3004733, "oid=1861508", -590, 100, 2, -640, -540, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=1861508", 'summon', 0, 0);
    cm.npc_ChangeController(3004734, "oid=1861509", -500, 100, 2, -550, -450, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=1861509", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=1861508", "scary", -1, 1);
    cm.npc_SetSpecialAction("oid=1861509", 'stand', -1, 1);
    cm.addPopupSay(3004733, 1500, "#face0#吱吱吱……", '', 0);
    cm.addPopupSay(3004734, 1500, "#face0#为什么会突然火冒三丈呢？！", '', 0);
    cm.addPopupSay(0, 1500, "#face0#卡斯特，快醒醒！", '', 0);
    cm.addPopupSay(0, 1500, "#face0#既然说话不管用，就只能使用蛮力了！", '', 0);
    cm.addPopupSay(3004734, 1500, "#face0#咦？！你长得这么可爱，没想到还挺暴力的！", '', 0);
    cm.addPopupSay(0, 1500, "#face0#……", '', 0);
    cm.dispose();
  }
}