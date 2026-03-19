var status = -1;
function start() {
  if (cm.getMapId() == 914000200) {
    cm.spawnMobLimit(9300379, 1, 2099, 2, 100);
    cm.spawnMobLimit(9300379, 1, 2099, 2, 100);
    cm.spawnMobLimit(9300379, 1, 1799, 2, 100);
    cm.spawnMobLimit(9300379, 1, 1799, 2, 100);
    cm.spawnMobLimit(9300379, 1, 1515, 2, 100);
    cm.spawnMobLimit(9300379, 1, 1515, 2, 100);
    cm.fieldEffect_ScreenMsg("aran/tutorialGuide1");
    cm.playerMessage(5, "按一下Ctrl键，能够对怪兽进行一般攻击。");
    cm.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
    cm.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon6");
    cm.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
    cm.teachSkill(20000014, 0, -1);
    cm.teachSkill(20000015, 0, -1);
    cm.teachSkill(20000014, 1, 0);
    cm.teachSkill(20000015, 1, 0);
    cm.dispose();
  }
  if (cm.getMapId() == 914000210) {
    cm.spawnMobLimit(9300380, 1, 667, 2, 100);
    cm.spawnMobLimit(9300380, 1, 667, 2, 100);
    cm.spawnMobLimit(9300380, 1, 382, 2, 100);
    cm.spawnMobLimit(9300380, 1, 382, 2, 100);
    cm.spawnMobLimit(9300380, 1, 97, 2, 100);
    cm.spawnMobLimit(9300380, 1, 97, 2, 100);
    cm.fieldEffect_ScreenMsg("aran/tutorialGuide2");
    cm.playerMessage(5, "按住Ctrl键，能够进行连续攻击。");
    cm.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;chain=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;arr2=o;chain=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
    cm.teachSkill(20000016, 0, -1);
    cm.teachSkill(20000016, 1, 0);
    cm.dispose();
  }
  if (cm.getMapId() == 914000220) {
    cm.spawnMobLimit(9300381, 1, -716, 2, 100);
    cm.spawnMobLimit(9300381, 1, -716, 2, 100);
    cm.spawnMobLimit(9300381, 1, -839, 2, 100);
    cm.spawnMobLimit(9300381, 1, -839, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1046, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1046, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1186, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1186, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1332, 2, 100);
    cm.spawnMobLimit(9300381, 1, -1332, 2, 100);
    cm.fieldEffect_ScreenMsg("aran/tutorialGuide3");
    cm.playerMessage(5, "连续攻击后，通过方向键和攻击键可以实现命令攻击。");
    cm.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;chain=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.forceStartQuest(10335, '2');
    cm.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;arr3=o;chain=o;mo1=o;mo2=o;mo3=o;mo4=o");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
    cm.forceStartQuest(10335, '3');
    cm.dispose();
  }
}