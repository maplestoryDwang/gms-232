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
      cm.setAmbience("SoundEffWz2.img/Mukhyun/burning_loop", 100, 60);
      cm.sendNewEffects(12, [0, -2000, -120]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9401277, "oid=2750248", -2050, -10, 6, -2100, -2000, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2750248", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2750248", 1, 1000, 150);
                cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                cm.sendNormalTalk_Bottom("#face5#这、这是怎么回事！！！！！！？", 37, 9401277, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face8##b!!!!!!!!?", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [8000, 1200, -120]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                          cm.sendNormalTalk_Bottom("#face5#掌门人！师兄！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！！！', 37, 9401277, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                              cm.sendNormalTalk_Bottom("#face8##b（这到底……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=2750248");
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9401277, "oid=2750327", -560, 10, 25, -610, -510, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2750327", "summon", 0, 0);
                                    cm.npc_SetSpecialAction("oid=2750327", "sit", -1, 0);
                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -830, -90);
                                    cm.inGameDirectionEvent_ForcedFlip(2);
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.sendNewEffects(17, [0, 1000, 2000, -550, -40]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                        cm.sendNormalTalk_Bottom("#face8##b师、师兄……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                          cm.sendNormalTalk_Bottom("#face8##b师弟，师弟！醒醒……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                                cm.sendNormalTalk_Bottom("#face8##b师、师妹……师妹！！！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.emotion(1, 99999);
                                                  cm.inGameDirectionEvent_OneTimeAction(4, 99999);
                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                  cm.sendNormalTalk_Bottom("#face5##b呃，呃呃呃……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 30, 0, 0, 3000, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("noise", "Effect/DirectionWz2.img/MukhyunEff/noise/1366", 0, 500, -5, -5, 0, 4, 1, -1, 1, 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/noise", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/3", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                                        cm.sendNormalTalk_Bottom("#face8##b呃，呃呃呃……！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 30, 0, 0, 1000, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/3", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=2750327");
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(9401277, "oid=2750331", -750, -80, 1, -800, -700, 0, true, 0, false);
                                                                cm.npc_SetSpecialAction("oid=2750331", "summon", 0, 0);
                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -545, -140);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.emotion(1, 99999);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_OneTimeAction(4, 99999);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                      cm.npc_SetForceMove("oid=2750331", 1, 30, 60);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukAwake/startF"], [720, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukAwake/startB"], [720, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukAwake/loopF"], [999999, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukAwake/loopB"], [999999, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                        cm.npc_SetSpecialAction("oid=2750331", "special", -1, 0);
                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                        cm.sendNormalTalk_Bottom("#face8##b呃啊啊啊啊啊！！！！！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                            cm.sendNormalTalk_Bottom("#face8#师，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！！！！！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！！！！！！！", 37, 9401277, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                              cm.sendNormalTalk_Bottom("#face8#醒醒！！！！！！！", 37, 9401277, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_ChangeController(9401301, "oid=2750334", -300, -80, 1, -350, -250, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=2750334", "summon", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2750334", -1, 50, 50);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.playVideoByScript("Mukhyun.avi");
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('noise', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/14', 100);
                                                                                          cm.sendNormalTalk_Bottom("#face8#呜呜呜……掌，掌门……呜呜……", 37, 9401277, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                                cm.sendNormalTalk_Bottom("#face1#……玄儿……玄儿……", 37, 9401282, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                                  cm.sendNormalTalk_Bottom("#face1#能听到我的声音吗？不用起来，只要听我说就行。", 37, 9401282, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face1#……在你10岁那年的春天。\r\n你来找我，说在梦里总是见到一些异常的幻象。", 37, 9401282, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                      cm.sendNormalTalk_Bottom("#face1#一开始我不以为意，但是你的梦越来越频繁，越来越真实。", 37, 9401282, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/20', 100);
                                                                                                        cm.sendNormalTalk_Bottom("#face1#……我……你……", 37, 9401282, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/21', 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face1#……我猜测你是武神重生。", 37, 9401282, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/22', 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face1#......", 37, 9401282, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                              cm.sendNormalTalk_Bottom("#face1#我预见到如果让其他人知道你是武神重生……你就再也无法过上普通人的生活。", 37, 9401282, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                                                                cm.sendNormalTalk_Bottom("#face1#玄儿……我一向把你当作儿孙看待。为了保护你，我把你的力量和记忆……全部封印了起来。\r\n也许……那是个错误。", 37, 9401282, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/25", 100);
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#那时我不该把你的力量和记忆封印起来，而是应该帮助你将力量用在正道之上……抱歉。", 37, 9401282, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#玄儿，你是武神重生。", 37, 9401282, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#你天生就拥有武神之力，拥有武神的记忆和意志。", 37, 9401282, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/28", 100);
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#但并不是说你就必须走上武神之路。", 37, 9401282, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/29', 100);
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#玄儿，决不能失去自我。", 37, 9401282, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/30", 100);
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#走你自己认为正确的路。", 37, 9401282, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/31', 100);
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#不要受武神的力量和记忆的摆布。", 37, 9401282, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/32", 100);
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#抱歉，那条路……我不能陪你一起走了。", 37, 9401282, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/33", 100);
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#玄儿……", 37, 9401282, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.teachSkill(175000006, 0, -1);
                                                                                                                                    cm.teachSkill(175000006, 1, 10);
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                                                                                                                    cm.getTopMsgFont("获得了<觉醒>技能。", 3, 20, 20, 0, 0);
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
                                                                                                                                          cm.updateInfoQuest(65999, "training=1;right=1;entrance=1;main=1;left=1");
                                                                                                                                          cm.forceCompleteQuest(65935);
                                                                                                                                          cm.gainExp(4044);
                                                                                                                                          cm.npc_LeaveField("oid=2750331");
                                                                                                                                          cm.npc_LeaveField("oid=2750334");
                                                                                                                                          cm.dispose();
                                                                                                                                          cm.warp(875003017, 0, false);
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