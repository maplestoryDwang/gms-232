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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(3001300, "oid=912520", 440, 746, 2, 390, 490, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912520", 'summon', 0, 0);
        cm.npc_ChangeController(3001358, "oid=912521", 805, 746, 2, 755, 855, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=912521', "summon", 0, 0);
        cm.npc_ChangeController(3001358, "oid=912522", 695, 746, 2, 645, 745, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912522", "summon", 0, 0);
        cm.npc_ChangeController(3001358, "oid=912523", 580, 746, 2, 530, 630, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912523", "summon", 0, 0);
        cm.npc_ChangeController(3001358, 'oid=912524', 225, 746, 2, 175, 275, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=912524", "summon", 0, 0);
        cm.npc_ChangeController(3001358, "oid=912525", 110, 746, 1, 60, 160, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=912525", 'summon', 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, 0, 256000, 177920);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_Hero9(40, 1000);
            cm.npc_ChangeController(3001301, "oid=912526", 1160, 746, 3, 1110, 1210, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=912526', "summon", 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001004/Use", 100);
            cm.npc_SetSpecialAction("oid=912526", "appear", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=912526");
              cm.sendNormalTalk_Bottom("#face0#没错,好像就是那个孩子。", 37, 3001301, false, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice3.img/illium/agate/0", 128);
                cm.inGameDirectionEvent_PushScaleInfo(230400, 1, 256000, 230400, 143360, 177920);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove('oid=912523', -1, 30, 100);
                    cm.npc_SetForceMove("oid=912524", 1, 30, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("呜呜……", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001358, null, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("看起来很好吃的样子呢……", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001358, null, cm.getPlayer().getId());
                        cm.npc_SetSpecialAction("oid=912522", "attack1", 0, 1);
                        cm.npc_SetSpecialAction("oid=912525", "attack1", 0, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400309/Attack1", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#利奥……我,没……没力气了……", 37, 3001351, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#药水……不够了……", 37, 3001351, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=912523", "attack1", 0, 1);
                              cm.npc_SetSpecialAction("oid=912524", "attack1", 0, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400309/Attack1", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=912520", 'alert', -1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_warning", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice3.img/illium/user/Female/0", 128);
                                  cm.effect_NormalSpeechBalloon("呃啊！", 0, 0, 0, 1000, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                  cm.sendNormalTalk_Bottom("#face3#目前体力不足20%。如果再不离开这……", 37, 3001300, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice3.img/illium/rhyo/7", 128);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_NormalSpeechBalloon('呃…', 1, 0, 1, 1000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                      cm.effect_Voice("Voice3.img/illium/user/Female/3", 128);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/job", 100);
                                      cm.updateInfoQuest(39391, "level=1");
                                      cm.gainExp(1066);
                                      cm.teachSkill(150000017, 0, -1);
                                      cm.updateInfoQuest(1073, "15200=10");
                                      cm.teachSkill(152001001, 1, 20);
                                      cm.teachSkill(152000007, 1, 10);
                                      cm.teachSkill(152001003, 1, 20);
                                      cm.updateInfoQuest(34900, "job1=1");
                                      cm.teachSkill(150000079, 0, -1);
                                      cm.teachSkill(150000079, 1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_NormalSpeechBalloon("#fs28##e呃…呃啊啊啊！！！！！！", 0, 0, 0, 3000, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                        cm.effect_OnUserEff("Effect/BasicEff.img/JobChangedIlliumFront");
                                        cm.gainItem(1143078, 1);
                                        cm.forceStartQuest(34824, '');
                                        cm.forceCompleteQuest(34824);
                                        cm.npc_SetSpecialAction("oid=912521", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=912522", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=912523", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=912524", "die1", 0, 1);
                                        cm.npc_SetSpecialAction("oid=912525", "die1", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1700);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField('oid=912521');
                                          cm.npc_LeaveField("oid=912522");
                                          cm.npc_LeaveField('oid=912523');
                                          cm.npc_LeaveField('oid=912524');
                                          cm.npc_LeaveField('oid=912525');
                                          cm.inGameDirectionEvent_MoveAction(4);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#主人！！！", 37, 3001300, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice3.img/illium/rhyo/8", 128);
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.npc_LeaveField("oid=912520");
                                              cm.npc_LeaveField("oid=912526");
                                              cm.teachSkill(150001016, 1, 1);
                                              cm.updateInfoQuest(34801, "019=1;hunt1=1;020=1;exp=1");
                                              cm.forceStartQuest(34900, '');
                                              cm.dispose();
                                              cm.warp(940202021, 0, true);
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