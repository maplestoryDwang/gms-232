var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage47");
  if (V === "start") {
    cm.dispose();
    return;
  }
  em.setProperty("stage47", 'start');
  cm.getMap().getWeatherEffectNotice("这里……呃，我的力量……知道路线……的话……死……看不……", 147, 60000, 1);
  cm.playerMessage(5, "阿丽莎的思念体的力量似乎到不了这里。你自己找出通往下一层的路吧。");
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;