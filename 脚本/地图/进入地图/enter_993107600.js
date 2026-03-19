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
    cm.obstacleFall魔王皮洛克(20);
    cm.addPopupSay(9062172, 3000, "#r魔王皮洛克#k和他手下的#r迷你皮洛克#k现身了！赶快进攻！", '', 0);
    cm.fieldEffect_ScreenMsg("Effect/EventEffect.img/16thEventText/start");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
    cm.setNumberForQuestInfo(100244, 'point', 0);
    cm.dispose();
    cm.openNpc(0, "活动_新复古_魔王皮洛克_刷怪");
  }
}