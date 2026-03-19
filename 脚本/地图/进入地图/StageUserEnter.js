function action(f, E, e) {
  cm.fieldEffect_PlayBGM("BgmTW/MapleHighSchool");
  var V = cm.getMapId() - 744000000;
  if (V == 0) {
    cm.dispose();
    return;
  }
  var O = em.getNumberProperty("state");
  if (V == 16) {
    cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/final");
  } else {
    cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/stage");
    if (O > 10) {
      cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + O % 10);
      cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + Math.floor(O / 10));
    } else {
      cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + O % 10);
    }
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;