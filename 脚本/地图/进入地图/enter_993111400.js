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
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
    cm.addPopupSay(1540453, 3000, "请你以#b魔法泥人#k为对手，证明自己的实力吧！", '', 0);
    cm.gloryMagicMudmanUI(0, 2, 0);
    cm.dispose();
    cm.openNpc(0, "活动_魔法泥人修炼场_刷怪");
  }
}