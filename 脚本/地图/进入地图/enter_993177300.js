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
    cm.fieldEffect_ScreenMsg("Map/Effect.img/riseChallenge1/start");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
    cm.fieldEffect_SaveEff("Effect/EventEffect.img/ChallengeMission/Count/3");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/3", 100);
    cm.fieldEffect_SaveEff("Effect/EventEffect.img/ChallengeMission/Count/2");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/2", 100);
    cm.fieldEffect_SaveEff("Effect/EventEffect.img/ChallengeMission/Count/1");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/1", 100);
    cm.fieldEffect_SaveEff("Effect/EventEffect.img/ChallengeMission/start");
    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
    cm.getWeatherEffectNotice("攻击拳击王游戏机，测定自己的战斗力吧！", 313, 3000, true);
    cm.dispose();
  }
}