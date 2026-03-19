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
      cm.npc_ChangeController(9401277, "oid=2757518", -325, 90, 22, -375, -275, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757518", 'summon', 0, 0);
      cm.setNPC_Fadein(9401277, 1);
      cm.npc_ChangeController(9401285, "oid=2757519", -50, 90, 22, -100, 0, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757519", "summon", 0, 0);
      cm.setNPC_Fadein(9401285, 1);
      cm.npc_ChangeController(9401286, "oid=2757520", 20, 90, 12, -30, 70, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757520", "summon", 0, 0);
      cm.setNPC_Fadein(9401286, 1);
      cm.sendNewEffects(17, [0, 1000, 1500, -180, 140]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
              cm.sendNormalTalk_Bottom("#face0##b……所以，顺利讨伐了魔教残党，然后回来了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                cm.sendNormalTalk_Bottom("#face0#辛苦你了，玄儿。", 37, 9401282, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                  cm.sendNormalTalk_Bottom("#face0##b……掌门人？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                    cm.sendNormalTalk_Bottom('#face0#嗯？', 37, 9401277, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                      cm.sendNormalTalk_Bottom("#face0##b……好像是听错了……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##b…", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                            cm.sendNormalTalk_Bottom("#face0##b掌门人，长老们……还有师叔、师兄……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                              cm.sendNormalTalk_Bottom("#face4##b虽然与过去的玄山派相比还有很多不足之处，但我们一定会守护先辈们的意志和精神。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                cm.sendNormalTalk_Bottom("#face4##b为了不让其他人遭受和我们一样的痛苦，我一定会尽自己的全力。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                  cm.sendNormalTalk_Bottom("#face4#我也一样！你就等着瞧吧，掌门人！", 37, 9401277, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(17, [4000, 1500, 1200, -180, -450]);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我也一样。身为师兄，我会尽自己的一份力。", 37, 9401285, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("……我会管好他们的吃饭和睡觉。", 37, 9401286, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯，嗯……说来真是惭愧，哈哈。", 37, 9401286, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                            cm.sendNormalTalk_Bottom("#face2#嘿嘿，那个最重要了！\r\n好了，大家听到了吗？现在别再担心我们，好好休息吧！", 37, 9401277, true, true, 1);
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
                                                  cm.forceCompleteQuest(65986);
                                                  cm.npc_LeaveField("oid=2757518");
                                                  cm.npc_LeaveField("oid=2757519");
                                                  cm.npc_LeaveField("oid=2757520");
                                                  cm.dispose();
                                                  cm.warp(875000001, 2, false);
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