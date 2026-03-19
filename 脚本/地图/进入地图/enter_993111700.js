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
    cm.addPopupSay(3004435, 3000, "#face1##b攻城兵器#k涌过来了！\r\n去让他们尝尝我们联盟的厉害！", '', 0);
    cm.setNumberForQuestInfo(100356, "point", 0);
    cm.gloryMagicMudmanUI(0, 2, 0);
    cm.dispose();
    cm.openNpc(0, "活动_攻城战车歼灭战_刷怪");
  }
}