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
    cm.fieldEffect_ScreenMsg("Map/EffectWz2.img/Mukhyun/TextEff");
    cm.effect_Text(["#fn黑体##fs40##e河津前海", ''], [100, 1800, 4, 0, -130, 1, 4, 3, 0, 0, 0, 0]);
    if (cm.isQuestActive(65951)) {
      cm.updateInfoQuest(65951, "chk=1");
    }
    cm.npc_ChangeController(9401278, "oid=2153798", -90, 280, 3, -140, -40, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=2153798", "summon", 0, 0);
    cm.addPopupSay(9401278, 3000, "#face0#……你不晕船吧？", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#要是头晕，就看看远处。", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#雄伟的山峰、悬崖、云雾和大海构成的梦幻般的风景。", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#……离开故乡后，连以前天天看厌的风景都会变得无比怀念。", '', 0);
    cm.scheduleWarpTask(30, 104000000, 0, true);
    cm.dispose();
  }
}