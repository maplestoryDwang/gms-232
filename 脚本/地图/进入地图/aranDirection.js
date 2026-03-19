function start() {
  cm.curNodeEventEnd(true);
  cm.setInGameDirectionMode(true);
  cm.setStandAloneMode(true);
  switch (cm.getMapId()) {
    case 914090010:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/Scene0");
      break;
    case 914090011:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/Scene1" + (cm.getPlayer().getGender() == 0 ? '0' : '1'));
      break;
    case 914090012:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/Scene2" + (cm.getPlayer().getGender() == 0 ? '0' : '1'));
      break;
    case 914090013:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/Scene3");
      break;
    case 914090100:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/HandedPoleArm" + (cm.getPlayer().getGender() == 0 ? '0' : '1'));
      break;
    case 914090200:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/Maha");
      break;
    case 914090201:
      cm.effect_Direction("Effect/Direction1.img/aranTutorial/PoleArm", 0, 0, 0);
      break;
  }
  cm.dispose();
}
var status = -1;