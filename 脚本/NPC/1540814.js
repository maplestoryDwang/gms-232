var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_SetSpecialAction("oid=57228", "stand2", -1, 0);
      cm.Hidden_background("light", 1, 0, 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/fire_on", 100);
      cm.sendNormalTalk_Bottom("#face3#赶紧到前面去！", 37, 1540805, false, true);
      cm.effect_DarkenPlayer(1, -80);
      cm.effect_OnUserEff("Effect/CharacterEff.img/HofM/fire0");
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/fire", 1, 0);
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/0", 0, 0);
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/1", 0, 0);
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/2", 0, 0);
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/3", 0, 0);
      cm.effect_AddLayer("Effect/CharacterEff.img/HofM/4", 0, 0);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}