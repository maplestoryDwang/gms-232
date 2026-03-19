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
      cm.npc_ChangeController(9401316, "oid=206985", -547, -72, 1, -573, -473, 4, true, 0, false);
      cm.npc_ChangeController(9401325, "oid=206986", -334, 337, 24, -384, -284, 1, false, 0, false);
      cm.npc_ChangeController(9401326, "oid=206987", -206, 337, 24, -256, -156, 1, false, 0, false);
      cm.npc_ChangeController(9401332, 'oid=206988', -551, 293, 74, -616, -516, 4, true, 0, false);
      cm.npc_ChangeController(9401333, "oid=206989", -629, -72, 1, -657, -557, 2, true, 0, false);
      cm.npc_ChangeController(9401339, "oid=206990", -873, 337, 24, -923, -823, 0, false, 0, false);
      cm.npc_ChangeController(9401340, "oid=206991", -681, 18, 34, -731, -631, 0, false, 0, false);
      cm.npc_ChangeController(9401284, "oid=206992", -519, 20, 38, -530, -430, 5, true, 0, false);
      cm.npc_ChangeController(9401365, "oid=206993", -85, 337, 24, -135, -35, 5, true, 0, false);
      cm.npc_ChangeController(9401353, "oid=206994", -745, 337, 24, -795, -695, 0, false, 0, false);
      cm.npc_ChangeController(9401354, "oid=206995", -735, 249, 88, -785, -685, 0, false, 0, false);
      cm.npc_ChangeController(9401355, "oid=206996", -350, 214, 87, -400, -300, 1, false, 0, false);
      cm.npc_ChangeController(9401356, "oid=206997", -987, 337, 24, -1037, -937, 0, false, 0, false);
      cm.npc_ChangeController(9401300, "oid=206998", -416, 18, 42, -466, -366, 1, false, 0, false);
      cm.npc_ChangeController(9401293, "oid=206999", -380, 18, 42, -430, -330, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, -550, 400]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/10', 100);
        cm.sendNormalTalk_Bottom("#face0##b（在魔教的根据地中获得的武神记录。那些没有打开看，也没有丢掉的记录……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
      } else {
        if (status === V++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/11", 100);
          cm.sendNormalTalk_Bottom("#face0##b（现在……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/11", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/burning", 100);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
              cm.sendNormalTalk_Bottom("#face0##b（现在已经可以确信，我和武神不一样。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/13', 100);
                cm.sendNormalTalk_Bottom("#face1##b（不管是现在，还是将来……这些记录都不需要了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                  cm.sendNormalTalk_Bottom("#face1##b（就像现在一样，沿着自己认为正确的路，无怨无悔地向前走吧。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(13, [5000, 0, -800]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                          cm.sendNormalTalk_Bottom("#face0##b（和我想要保护的……人一起。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("VoiceWz2.img/Mukhyun/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/16", 100);
                            cm.sendNormalTalk_Bottom("#face1##b（我是墨玄。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(14, [0, 2000, 1000]);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(19, [0]);
                                } else if (status === V++) {
                                  cm.forceCompleteQuest(65988);
                                  cm.finishAchievement(50028);
                                  cm.dispose();
                                  cm.warp(875000001, 0, false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
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
      }
    }
  }
}