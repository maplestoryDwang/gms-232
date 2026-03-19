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
      cm.npc_ChangeController(9401280, "oid=2757361", 0, 70, 1, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757361", "summon", 0, 0);
      cm.npc_ChangeController(9401277, "oid=2757362", -600, 70, 6, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757362", "summon", 0, 0);
      cm.setNPC_Fadein(9401277, 1);
      cm.npc_ChangeController(9401285, "oid=2757363", -650, 70, 6, -700, -600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757363", "summon", 0, 0);
      cm.setNPC_Fadein(9401285, 1);
      cm.npc_ChangeController(9401288, "oid=2757364", -700, 70, 5, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757364", "summon", 0, 0);
      cm.setNPC_Fadein(9401288, 1);
      cm.npc_ChangeController(9401305, "oid=2757365", -740, 70, 5, -790, -690, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757365", "summon", 0, 0);
      cm.npc_ChangeController(9401303, "oid=2757366", -780, 70, 5, -830, -730, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757366", 'summon', 0, 0);
      cm.npc_ChangeController(9401287, "oid=2757367", -820, 70, 5, -870, -770, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757367", "summon", 0, 0);
      cm.setNPC_Fadein(9401287, 1);
      cm.npc_ChangeController(9401304, "oid=2757368", -860, 70, 5, -910, -810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757368", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -280, 70);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.Npc_Fadeout("oid=2757362", 0, 0);
      cm.Npc_Fadeout("oid=2757363", 0, 0);
      cm.Npc_Fadeout("oid=2757364", 0, 0);
      cm.Npc_Fadeout("oid=2757365", 0, 0);
      cm.Npc_Fadeout("oid=2757366", 0, 0);
      cm.Npc_Fadeout("oid=2757367", 0, 0);
      cm.Npc_Fadeout("oid=2757368", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, -90, 140]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2757361", "die", -1, 0);
            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
            cm.sendNormalTalk_Bottom("#face4#咳咳……", 37, 9401280, false, true, 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/13", 100);
              cm.sendNormalTalk_Bottom("#face4#…", 37, 9401280, true, true, 1);
            } else {
              if (status === V++) {
                cm.Npc_Fadeout("oid=2757362", 255, 1000);
                cm.Npc_Fadeout("oid=2757363", 255, 1000);
                cm.Npc_Fadeout("oid=2757364", 255, 1000);
                cm.Npc_Fadeout("oid=2757365", 255, 1000);
                cm.Npc_Fadeout("oid=2757366", 255, 1000);
                cm.Npc_Fadeout("oid=2757367", 255, 1000);
                cm.Npc_Fadeout("oid=2757368", 255, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2757362", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757363", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757364", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757365", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757366", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757367", 1, 230, 100);
                  cm.npc_SetForceMove("oid=2757368", 1, 230, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [2000, -350, 140]);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon('墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401277, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("师父！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                        cm.sendNormalTalk_Bottom("#face4#…", 37, 9401280, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=2757361");
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                            cm.sendNormalTalk_Bottom("#face2#哈哈，哈哈哈哈……", 37, 9401280, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                              cm.sendNormalTalk_Bottom("#face2#哈哈哈哈！！！！哈哈哈哈！！！！！！", 37, 9401280, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(12, [2000, -90, 140]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2757362", 1, 150, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                      cm.sendNormalTalk_Bottom("#face7#真的是疯了吗？！", 37, 9401277, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                          cm.sendNormalTalk_Bottom("#face2#渴望获得力量……这也有错吗？", 37, 9401280, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/18', 100);
                                            cm.sendNormalTalk_Bottom("#face4#不想被任何人无视……这个愿望就那么难实现吗？", 37, 9401280, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                              cm.sendNormalTalk_Bottom("#face3##b学武之人当然希望能获得强大的力量。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                cm.sendNormalTalk_Bottom("#face6##b但并非所有人都会和你一样选择。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                  cm.sendNormalTalk_Bottom("#face6##b只是为了获得那种力量，就背叛了师门，真是……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                    cm.sendNormalTalk_Bottom("#face0#你不明白。拥有一切的你不会明白。", 37, 9401280, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                      cm.sendNormalTalk_Bottom("#face7#喂，我们这些比你更普通的人，希望变得和你一样强的人，都没有做出像你一样的选择。", 37, 9401277, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/24", 100);
                                                        cm.sendNormalTalk_Bottom("#face4#……哈哈哈，哈哈哈……", 37, 9401280, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100);
                                                          cm.sendNormalTalk_Bottom("#face7#掌门人……真是……真是……", 37, 9401277, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#…? ", 37, 9401280, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/26", 100);
                                                                cm.sendNormalTalk_Bottom("#face7#亏掌门人在最后一刻还在担心你。掌门人真是太可怜了！", 37, 9401277, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/27', 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#……掌门人怎么了……？", 37, 9401280, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/10", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                    cm.setAmbience("SoundEffWz2.img/Mukhyun/burning_loop", 60, 60);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
                                                                      cm.sendNormalTalk_Bottom("#face6#掌、掌门人！快、快醒醒！", 37, 9401277, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/29", 100);
                                                                        cm.sendNormalTalk_Bottom("#face1#……素笑……抱歉，就这样丢下……咳咳，你和玄儿两个人……", 37, 9401282, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/30", 100);
                                                                          cm.sendNormalTalk_Bottom("#face6#别、别说了，掌门人！别丢下我们！", 37, 9401277, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/31", 100);
                                                                            cm.sendNormalTalk_Bottom("#face1#……云雾……帮我和他说声对不起……", 37, 9401282, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/32", 100);
                                                                              cm.sendNormalTalk_Bottom("#face1#……望着天才的背影，云雾一定感觉到了无力和绝望……咳咳。", 37, 9401282, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/33", 100);
                                                                                cm.sendNormalTalk_Bottom("#face1#我以为只是因为年轻气盛，觉得那会成为成长的动力……都是我的错。", 37, 9401282, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/34', 100);
                                                                                  cm.sendNormalTalk_Bottom("#face6#好的，好的，我一定转告！求你，不要……掌门人……！呜呜呜呜……！", 37, 9401277, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.playSoundEffDirectly("SoundEffWz2.img/Mukhyun/burning_loop");
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/35", 100);
                                                                                      cm.sendNormalTalk_Bottom("#face7#掌门人一直对你心怀歉意。但是，但是！", 37, 9401277, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=2757363", 1, 150, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("掌门人也……一直都很疼爱你。", 37, 9401285, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("快点祈求原谅吧。", 37, 9401285, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/DirectionWz2.img/MukhyunStory/5", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#云雾，那个孩子怎么样？\r\n虽然很晚才开始修炼，但能力却非常出众。", 37, 9401321, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#那都是过去的事情了。据我所知，最近好像一无所成。", 37, 9401320, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#虽然很努力，但还是……", 37, 9401322, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#墨玄似乎更好些。", 37, 9401321, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom('#face0#…', 37, 9401282, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', "Effect/DirectionWz2.img/MukhyunStory/6", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/36", 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#不过率领其他孩子，继承玄山武学的人将会是云雾。", 37, 9401282, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/37", 100);
                                                                                                              cm.sendNormalTalk_Bottom("#face0#即便会一时动摇，我也相信你会坚守正道。", 37, 9401282, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("掌门人，茶沏好了。", 37, 9401285, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/38", 100);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这件事就说到这里吧。", 37, 9401282, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('#face3#...', 37, 9401280, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/39', 100);
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#够了，别说了。", 37, 9401280, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/40', 100);
                                                                                                                          cm.sendNormalTalk_Bottom("#face3#呵呵哈哈……呵呵……呵哈哈哈哈哈哈……", 37, 9401280, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/41", 100);
                                                                                                                              cm.sendNormalTalk_Bottom("#face3#看来……都是……我的错……", 37, 9401280, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/42', 100);
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#连我都不相信自己……还说什么相信我……", 37, 9401280, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3##b…...", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/43", 100);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#哈……", 37, 9401280, false, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/44", 100);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#……魔教几十年间一直蛰伏在江湖最黑暗的角落，伺机恢复力量。", 37, 9401280, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/45', 100);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#魔教长老之一的毒手魔女正在四处寻找，希望得到武神之力。", 37, 9401280, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/46", 100);
                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#是的，就是你。", 37, 9401280, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/47', 100);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#居然一点都不吃惊……好吧，原来如此。", 37, 9401280, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/48', 100);
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#即便在这里……我也依然无法超越你……", 37, 9401280, true, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/49", 100);
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#哈哈……", 37, 9401280, true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/50", 100);
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#不管逃到哪里，都逃不出你的影子……是不是很好笑？你就尽管嘲笑吧。", 37, 9401280, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/51", 100);
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3##b……现在没人在嘲笑你。请你看清楚。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/52", 100);
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#呵呵……呵哈哈哈……哈哈哈……", 37, 9401280, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/53", 100);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#……魔教……这就是全部吗……", 37, 9401280, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_ChangeController(9401281, "oid=2757442", 280, 70, 2, 230, 330, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=2757442", 'summon', 0, 0);
                                                                                                                                                              cm.Npc_Fadeout("oid=2757442", 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Mukhyun/2", "oid=2757361"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_SetSpecialAction("oid=2757361", "die", -1, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#话太多了。 没用的东西。", 37, 9401281, false, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.Npc_Fadeout("oid=2757442", 255, 1000);
                                                                                                                                                                    cm.npc_SetForceMove("oid=2757442", -1, 200, 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNewEffects(12, [2000, -20, 140]);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#呵呵，我等你好久了，武神。\r\n把你请到这种地方，实在是抱歉。", 37, 9401281, false, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/54", 100);
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4##b我是玄山派墨玄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#是的，我知道。你是武神，对吧？呵呵。还有，过去……", 37, 9401281, true, true, 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/55", 100);
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4##b不，我就是我。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#别担心。只要找回记忆，一切就不一样了。呵呵。", 37, 9401281, true, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/56", 100);
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4##b魔教只是我的敌人和仇人。除此之外没有任何瓜葛。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哈……我就知道会这样。正派的人真是一点用都没有。 ", 37, 9401281, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#但是别担心。只要找回记忆，一切就会恢复正常。\r\n希望你能原谅我的无礼，武神。", 37, 9401281, true, true, 1);
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
                                                                                                                                                                                                cm.forceCompleteQuest(65985);
                                                                                                                                                                                                cm.forceStartQuest(65986, '');
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757361");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757362");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757363");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757364");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757365");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757366");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757367");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757368");
                                                                                                                                                                                                cm.npc_LeaveField("oid=2757442");
                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                cm.openNpc(9110002, '墨玄_毒手魔女');
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
  }
}