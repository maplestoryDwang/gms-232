function start() {
    if (cm.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
        cm.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1")
    }
};