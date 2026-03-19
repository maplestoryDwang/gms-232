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
      cm.npc_ChangeController(3004411, "oid=377782", -2, -128, 0, -52, 48, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004430, "oid=63654547", 80, -38, 10, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63654547", "summon", 0, 0);
      cm.npc_ChangeController(3004456, "oid=63654548", 0, -38, 8, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63654548", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=63654549", -400, -38, 2, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63654549", "summon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_SetSpecialAction("oid=63654547", 'special13', -1, 1);
      cm.npc_SetSpecialAction("oid=63654548", "special9", -1, 1);
      cm.npc_SetSpecialAction("oid=63654549", "special4", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#呃……塞伦……", 37, 3004431, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -440, -40);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#啊！！", 37, 3004431, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, 30, -40);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#你真以为你能打得赢我吗？", 37, 3004456, false, true);
                            cm.effect_Voice("Voice5.img/CH3/7_24", 128);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#去死吧。", 37, 3004456, false, true);
                                cm.effect_Voice("Voice5.img/CH3/7_25", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=63654549", 'special2', -1, 1);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/9"], [4000, 15, -30, 1, 1000, 1, 1, 0]);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63654548"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#塞伦，趁现在！", 37, 3004431, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=63654547", 'special4', -1, 1);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face2#这……', 37, 3004456, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#不可能……我明明是……被太阳选中的……", 37, 3004456, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#怎么可能……", 37, 3004456, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=63654547");
                                                        cm.npc_LeaveField("oid=63654547");
                                                        cm.npc_LeaveField("oid=63654548");
                                                        cm.npc_LeaveField("oid=63654548");
                                                        cm.npc_ChangeController(3004456, "oid=63676359", 0, -38, 8, -50, 50, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=63676359", "summon", 0, 0);
                                                        cm.npc_SetSpecialAction("oid=63676359", "special10", -1, 1);
                                                        cm.npc_ChangeController(3004430, "oid=63676360", 90, -38, 10, 40, 140, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=63676360", 'summon', 0, 0);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 30, -40);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=63676360", "special4", -1, 1);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=63676359", "special11", 1, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63676360"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2800);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.Npc_Fadeout("oid=63676359", 0, 1500);
                                                                    cm.sendNormalTalk_Bottom("#face4#啊！啊啊……", 37, 3004430, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(3004431, "oid=63677666", -90, -38, 8, -140, -40, 0, true, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=63677666", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#塞伦，你还好吗？", 37, 3004431, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#伊、伊黛娜大人……", 37, 3004430, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.setNpcSpecialActionReset("oid=63676360");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('#face5#……', 37, 3004430, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#看来……我搞砸了一切。", 37, 3004430, false, true);
                                                                                      cm.effect_Voice("Voice5.img/CH3/8_1", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face5#从今往后，圣剑将再也无法重拾光芒了。", 37, 3004430, false, true);
                                                                                            cm.effect_Voice("Voice5.img/CH3/8_2", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#塞伦，他不是天选之人。", 37, 3004431, false, true);
                                                                                                cm.effect_Voice("Voice5.img/CH3/8_3", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#这话……什么意思？", 37, 3004430, false, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/8_4", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#高等翼人将他打造成了特殊的#r幽灵#k。", 37, 3004431, false, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH3/8_5", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#他们将大量的灵魂注入了他的体内。", 37, 3004431, true, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH3/8_6", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#以此伪造出了他结合众多人的心愿于一身的假象，而那本是高洁之人应得的荣耀。仅此而已。", 37, 3004431, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH3/8_7", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004430, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#但你不一样。\r\n圣地里的所有人都很信任和依赖你。", 37, 3004431, false, true);
                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_9", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=63677666", 1, 70, 70);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/9", 0, 1500, 0, 50, 20, 4, 0, -1, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face4#(奇勒摩掉落的标志……)", 37, 3004430, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust3/10", 0, 1500, 0, 50, 20, 4, 0, -1, 0, 0, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#大伙都希望你能成为圣剑的主人。", 37, 3004431, false, true);
                                                                                                                              cm.effect_Voice("Voice5.img/CH3/8_10", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face5#可是……标志在我手上并不会发光。", 37, 3004430, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/CH3/8_11", 128);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#我不是天选之人。", 37, 3004430, true, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_12", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#那你觉得对抗者就与众不同吗？", 37, 3004431, false, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/8_13", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63676360"], [0, 0, -24, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#直到与黑魔法师展开最后的决战，\r\n" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "也没能激发出自己的力量。", 37, 3004431, false, true);
                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/8_14", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#当时" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "也很动摇。\r\n就像你现在这样。", 37, 3004431, false, true);
                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/8_15", 128);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_Hero9(0, 3000);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#塞伦，在相信他人之前，你应该先相信自己。", 37, 3004431, false, true);
                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_16", 128);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#标志……！", 37, 3004430, false, true);
                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/8_17", 128);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4000, 0, 90, -20);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/6", "oid=63676360"], [5000, 6, 9, 1, 0, 1, 0, 0]);
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/shinging", 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#艾伦告诉我了。", 37, 3004431, false, true);
                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_18", 128);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#“握紧圣剑吧，拯救之法就在帕尔玛。”", 37, 3004431, true, true);
                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/8_19", 128);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#帕尔玛指的不是塞尔提乌。", 37, 3004434, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那是古代语中“手”或“掌心”的意思。", 37, 3004434, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#分析一下，也就是说……", 37, 3004434, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4##b握紧圣剑吧……拯救之法就在你的手中……", 37, 3004430, false, true);
                                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_22", 128);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_LeaveField("oid=63677666");
                                                                                                                                                                                          cm.npc_LeaveField("oid=63677666");
                                                                                                                                                                                          cm.npc_LeaveField("oid=63676360");
                                                                                                                                                                                          cm.npc_LeaveField("oid=63676360");
                                                                                                                                                                                          cm.npc_ChangeController(3004430, "oid=63686969", 30, -38, 10, -20, 80, 1, true, 0, false);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=63686969", 'summon', 0, 0);
                                                                                                                                                                                          cm.npcMove(3004430, 0, -102, 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.npc_ChangeController(3004431, "oid=63687269", -90, -43, 8, -140, -40, 0, true, 0, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=63687269", "summon", 0, 0);
                                                                                                                                                                                            cm.npcMove(3004431, 0, -50, 0);
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不要干等着预言实现。", 37, 3004431, false, true);
                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/8_23", 128);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#用你自己的手去亲自实现它吧。", 37, 3004431, true, true);
                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/8_24", 128);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#……", 37, 3004430, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm53/RisingSun", 0, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=63686969", "special19", -1, 1);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/2/skeleton", 'animation', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/serenSpine", 100);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(13000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.playVideoByScript("Cpt3_TheChosenOne_Full.avi");
                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                                    cm.warp(993151027, 0, true);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=63654549");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=63676359");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=63686969");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=63687269");
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}