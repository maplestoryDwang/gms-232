var status = -1;
var selectionLog = [];
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
    cm.addPopupSay(9400963, 3000, "#r烟花秀时间#k开始了！消灭烟花仓库袭击者和派对用烟花，发射出火焰吧！", '', 0);
    cm.fieldEffect_ScreenMsg("Map/Effect.img/event/start");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
    cm.dispose();
    cm.openNpc(0, "活动_日冕烟花秀_刷怪");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;