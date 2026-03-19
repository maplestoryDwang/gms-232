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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9401287, "oid=2152979", -520, 325, 15, -570, -470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152979", "summon", 0, 0);
      cm.npc_ChangeController(9401288, "oid=2152980", -450, 325, 15, -500, -400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152980", "summon", 0, 0);
      cm.npc_ChangeController(9401277, "oid=2152981", -900, 325, 15, -950, -850, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152981", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -660, 325);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 2000, -550, 370]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.npc_SetForceMove("oid=2152981", 1, 100, 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
            cm.sendNormalTalk_Bottom('#face1#' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，现在你不就是这些孩子们的师父吗？", 36, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                cm.sendNormalTalk_Bottom("#face1##b是吗？我都忘了自己是你们的师父了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                    cm.sendNormalTalk_Bottom("#face4##b选择学武之路，并不是简单地学习武功。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                      cm.sendNormalTalk_Bottom("#face4##b选择学武之路……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/14", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                          cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                          cm.sendNormalTalk_Bottom("#face0#追寻武学的真理，为了突破自己的极限而努力。", 37, 9401282, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                            cm.sendNormalTalk_Bottom("#face0#但更重要的是明白力量的份量，承担起与之相对应的责任。", 37, 9401282, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                              cm.sendNormalTalk_Bottom("#face0#不要欺压比自己弱小的人。面对需要帮助的人，决不能袖手旁观", 37, 9401282, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是，师父！", 37, 9401287, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是，师父！", 37, 9401288, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                          cm.sendNormalTalk_Bottom("#face4##b我来教你们玄山派拳法中最基础的第1招。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001003/Use", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175121001/Use", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                        cm.teachSkill(170000001, 2, 10);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                                        cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                                                        cm.forceCompleteQuest(65942);
                                                        cm.gainExp(17365);
                                                        cm.npc_LeaveField("oid=2152979");
                                                        cm.npc_LeaveField("oid=2152980");
                                                        cm.npc_LeaveField("oid=2152981");
                                                        cm.dispose();
                                                        cm.warp(875000001, 1, false);
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