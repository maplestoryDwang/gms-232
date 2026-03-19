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
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face0#等一下，一直源源不断涌过来！", 36, 3004914, false, true, 1);
      cm.effect_Voice("Voice6.img/kain/14/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face2#大家都停下！", 36, 3004914, true, true, 1);
        cm.effect_Voice("Voice6.img/kain/14/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#强攻进去，跟上了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          cm.effect_Voice("Voice6.img/kain/14/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('#face2#什么？', 36, 3004914, true, true, 1);
            cm.effect_Voice("Voice6.img/kain/14/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face0#唔！', 36, 3004915, true, true, 1);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(993164018, 0, true);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
            }
          }
        }
      }
    }
  }
}