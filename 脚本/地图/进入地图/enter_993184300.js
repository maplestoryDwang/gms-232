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
    cm.addPopupSay(9062334, 2000, "开始#rSTAGE 1#k修炼吧。", '', 0);
    cm.getWeatherEffectNotice("通过仙人岩证明你的力量，获得领悟之力吧！", 322, 3000, true);
    cm.setNumberForQuestInfo(100630, 'point', 0);
    cm.gloryMagicMudmanUI(0, 2, 0);
    cm.dispose();
    cm.openNpc(0, "觉醒活动_仙人岩修炼场_刷怪");
  }
}