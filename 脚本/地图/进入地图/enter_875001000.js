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
    cm.effect_Text(["#fn黑体##fs40##e河津村", ''], [100, 1800, 4, 0, -130, 1, 4, 3, 0, 0, 0, 0]);
    cm.dispose();
    if (cm.isQuestActive(65928)) {
      cm.OnStartNavigation(875001000, 1, "9401295", 0);
    }
    if (cm.isQuestActive(65937)) {
      cm.updateInfoQuest(65937, "chk=1");
      cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0#风形嘛……好像会在酒肆等我们。", '', 0);
    }
    if (cm.isQuestActive(65938)) {
      cm.setPartner(true, 9401309, 80012075, 0);
      cm.setPartner(true, 9401317, 80012076, 0);
    }
  }
}