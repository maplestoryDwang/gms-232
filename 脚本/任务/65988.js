var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
      cm.sendNormalTalk_Bottom("#face0##b（现在……感觉武神之力已经与我的力量融为一体。不再显得陌生了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
          cm.sendNormalTalk_Bottom("#face0#玄儿，决不能失去自我。", 37, 9401282, false, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
            cm.sendNormalTalk_Bottom("#face0#走你自己认为正确的路。", 37, 9401282, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/4', 100);
              cm.sendNormalTalk_Bottom("#face0#不要受武神的力量和记忆的摆布。", 37, 9401282, true, true, 1);
            } else {
              if (status === v++) {
                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === v++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                  cm.sendNormalTalk_Bottom("#face0##b掌门人的工作……我……做得还行吧？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                } else {
                  if (status === v++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                    cm.sendNormalTalk_Bottom("#face0#做得好，玄儿。", 37, 9401282, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                      cm.sendNormalTalk_Bottom("#face1##b掌门人……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                        cm.sendNormalTalk_Bottom("#face0##b（还有很多事要做。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                          cm.askAcceptDecline_Bottom("#face0##b(走吧.) \r\n\r\n#r(※回玄山派.)", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 1);
                        } else if (status === v++) {
                          cm.updateInfoQuest(65988, "rMap=875000001");
                          cm.dispose();
                          cm.warp(875003064, 0, false);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}