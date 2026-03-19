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
    cm.effect_Text(["#fn黑体##fs40##e河津码头", ''], [100, 1800, 4, 0, -130, 1, 4, 3, 0, 0, 0, 0]);
    if (cm.getQuestStatus(65950) == 1) {
      cm.updateInfoQuest(65950, 'chk=1');
      cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0##b（风形已经先在这里等我了。）#k", '', 0);
    }
    cm.dispose();
  }
}