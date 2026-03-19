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
      cm.npc_ChangeController(9401368, "oid=2152648", 150, 240, 30, 100, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152648", 'summon', 0, 0);
      cm.npc_ChangeController(9401368, "oid=2152649", 250, 240, 30, 200, 300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152649", "summon", 0, 0);
      cm.npc_ChangeController(9401368, "oid=2152650", -300, 240, 27, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152650", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2152648", 0, 0);
      cm.Npc_Fadeout("oid=2152649", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -50, 300]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(2128, 0);
          cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2152650", "die", 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
            cm.Npc_Fadeout("oid=2152648", 255, 1000);
            cm.Npc_Fadeout("oid=2152649", 255, 1000);
            cm.npc_SetForceMove("oid=2152648", -1, 100, 200);
            cm.npc_SetForceMove("oid=2152649", -1, 100, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.sendNewEffects(12, [1000, 10, 300]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(2128, 0);
                  cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.Npc_Fadeout("oid=2152650", 0, 0);
                    cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                    cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/special"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001003/Special", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2152648", "die", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                      cm.npc_SetSpecialAction("oid=2152649", 'die', 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/jobChange", 100);
                      cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                      cm.sendNormalTalk_Bottom("#face4##b这……这个力量是……！那天的……那种力量！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                        cm.sendNormalTalk_Bottom("#face4##b再试试吧！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.Npc_Fadeout("oid=2152648", 0, 0);
                          cm.Npc_Fadeout("oid=2152649", 0, 0);
                          cm.inGameDirectionEvent_OneTimeAction(2128, 0);
                          cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                            cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001003/Use", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.teachSkill(175001003, 0, -1);
                              cm.getTopMsgFont("获得了<神功：破碎拳>技能。", 3, 20, 20, 0, 0);
                              cm.playerMessage(5, "神功技能可以在特定招式之后连接使用。");
                              cm.getTopMsgFont("神功技能可以在特定招式之后连接使用。", 3, 20, 20, 0, 0);
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                              cm.sendNormalTalk_Bottom("#face4##b（……行了！虽然还不完美，但是能用了！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                cm.sendNormalTalk_Bottom("#face4##b（这就是武神之……力……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/8", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                  cm.sendNormalTalk_Bottom("#face5##b我为什么会……忘了呢……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                    cm.sendNormalTalk_Bottom("#face5##b要是我有那种力量，要是我有更强的力量……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                        cm.sendNormalTalk_Bottom("#face5##b掌门人……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.sendNormalTalk_Bottom("#face4##b（必须尽快获得力量。武神之力……一定要把它变成我的东西……！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
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
                                                cm.npc_LeaveField("oid=2152648");
                                                cm.npc_LeaveField("oid=2152649");
                                                cm.npc_LeaveField("oid=2152650");
                                                cm.dispose();
                                                cm.warp(875003024, 0, false);
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