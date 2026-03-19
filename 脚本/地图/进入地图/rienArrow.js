function start() {
  if (cm.getInfoQuest(21019) === "miss=o;helper=clear") {
    cm.updateInfoQuest(21019, "miss=o;arr=o;helper=clear");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
  }
  cm.dispose();
}
var status = -1;