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
    cm.effect_Text(["#fn黑体##fs40##e魔教根据地", ''], [100, 1800, 4, 0, -130, 1, 4, 3, 0, 0, 0, 0]);
    cm.dispose();
  }
}