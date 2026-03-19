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
      cm.npc_ChangeController(9401300, "oid=206879", -674, 94, 33, -724, -624, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.teachSkill(170000241, 0, -1);
      cm.teachSkill(175000001, 1, 20);
      cm.fieldEffect_PlayBGM("BgmMH/GodOfWar", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/0", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
          cm.effect_Text(["#e#fs30##fn隶书#很久很久以前，在人类定居江湖之时，曾经受到了某位高人的指点与保护。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/DirectionWz2.img/MukhyunStory/1", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
            cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
            cm.effect_Text(["#e#fs30##fn隶书#根据记载，数百年来，此人保护苍生免受魔物的侵袭，人人称之为武神。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              cm.effect_Text(["#e#fs30##fn隶书#其人殒命之后，得以真正封神。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.fieldEffect_ProcessOnOffLayer('02', "Effect/DirectionWz2.img/MukhyunStory/2", 0, 2000, 0, 768, 1, 4, 0, -1, 0, 0, 0);
                cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                cm.effect_Text(["#e#fs30##fn隶书#可即便在封神之后，他依然心系苍生。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('02', '', 1, 15000, 0, -1536, 0, 0, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                    cm.effect_Text(["#e#fs30##fn隶书#为了就近庇护人类，最终选择了转世重生。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                        cm.effect_Text(["#e#fs30##fn隶书#从此，世间开始接连诞生拥有武神之力和记忆的孩子。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                            cm.effect_Text(["#e#fs30##fn隶书#江湖也因此平静了多年。", ''], [10, 1000, 7, 0, -100, 0, 4, 0, 0, 0, -1, 1]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                cm.fieldEffect_Hero9(0, 2000);
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(17, [0, 1000, 2000, -720, 120]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_OneTimeAction(29, 1000000);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                    cm.fieldEffect_PlayBGM("BgmMH.img/Hajin", 0, 0);
                                    cm.fieldEffect_Hero9(80, 2000);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                      cm.sendNormalTalk_Bottom("#face0#然而，太平盛世并没有持续多久。", 37, 9401278, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                        cm.sendNormalTalk_Bottom("#face0#随着不断地重生，记忆不断累积，武神的记忆变得越来越模糊，\r\n最终只剩下了武神之力。人类也开始为了争夺那种力量而互相争斗。", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                          cm.sendNormalTalk_Bottom("#face0#之后一直是持续的乱世，人们都相信武神已经消失……\r\n在几百年后的今天，武神已经变成了传说。", 37, 9401278, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                            cm.sendNormalTalk_Bottom("#face1##b但是武神不是传说。\r\n武神会在世界真正需要他的时候再次出现。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                              cm.sendNormalTalk_Bottom("#face1#就是那个！\r\n啊~你怎么知道的？", 37, 9401278, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                                cm.sendNormalTalk_Bottom("#face1##b这个故事我已经听过几十遍了。\r\n现在是不是该换个故事了？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/14', 100);
                                                  cm.sendNormalTalk_Bottom("#face1#唉，真没劲。都说自古乱世出英雄，但是河津太和平了。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                    cm.sendNormalTalk_Bottom("#face2##b哈哈，那是好事。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                      cm.sendNormalTalk_Bottom("#face2#害得我都快饿肚子了。哎呀，啧啧。", 37, 9401278, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/17', 100);
                                                        cm.sendNormalTalk_Bottom("#face3#……但是你该不会认为武神只不过是传说吧？", 37, 9401278, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/18", 100);
                                                          cm.sendNormalTalk_Bottom("#face1##b嗯……就算这个故事是真的，但武神不是已经消失了吗？\r\n失去意志的力量，不能再冠以武神的称呼。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                            cm.sendNormalTalk_Bottom("#face0#……嗯，有道理。\r\n那如果出现继承武神意志的人呢？\r\n可以把称他为武神吗？", 37, 9401278, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                              cm.sendNormalTalk_Bottom("#face0##b……武神……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(9401289, 'oid=366611', -1000, 80, 34, -1050, -950, 0, true, 1000, false);
                                                                cm.npc_SetSpecialAction("oid=366611", "summon", 0, 0);
                                                                cm.npc_ChangeController(9401290, "oid=366612", -1050, 80, 34, -1100, -1000, 0, true, 1000, false);
                                                                cm.npc_SetSpecialAction("oid=366612", 'summon', 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=366611", 1, 100, 100);
                                                                  cm.npc_SetForceMove("oid=366612", 1, 100, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                                      cm.effect_NormalSpeechBalloon('' + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + "，不想迟到的话，必须马上出发。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401289, null, cm.getPlayer().getId());
                                                                      cm.sendNormalTalk_Bottom("#face0#哎呀，我好像占用了你太多时间。\r\n今天又叨扰了。", 37, 9401278, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                        cm.sendNormalTalk_Bottom("#face1#老板娘！今天汤面很筋道，真好吃~给我打包个三人份~\r\n记在这位玄山派大侠账上，呵呵呵。", 37, 9401278, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                          cm.inGameDirectionEvent_OneTimeAction(2, 0);
                                                                          cm.sendNormalTalk_Bottom("#face1##b呃……怎么每次都这样？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                            cm.sendNormalTalk_Bottom("#face2#我们两个什么关系，还要这样？！", 37, 9401278, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/25", 100);
                                                                              cm.sendNormalTalk_Bottom("#face1##b啧，尽情享用吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                cm.sendNormalTalk_Bottom("#face1#呵呵，谢谢，谢谢！\r\n路上小心。", 37, 9401278, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                    cm.sendNormalTalk_Bottom("#face1##b出发吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNewEffects(17, [5000, 2000, 1000, -720, -720]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                                                                                              cm.npc_LeaveField('oid=366611');
                                                                                              cm.npc_LeaveField('oid=366612');
                                                                                              cm.dispose();
                                                                                              cm.warp(875003001, 0, false);
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