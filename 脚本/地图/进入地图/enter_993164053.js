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
      cm.npc_ChangeController(3004910, 'oid=569589', 660, 0, 35, 610, 710, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=569589", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=569589", 'die', -1, 1);
      cm.npcMove(3004910, 0, -5, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 821, -300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 340, 6);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#该……隐……", 36, 3004910, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 550, 12);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(8500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#（终究还是迟了吗……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm56/HappyBirthdayMyDear", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.npc_ChangeController(3004903, "oid=569761", 840, 0, 35, 790, 890, 1, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=569761", "summon", 0, 0);
                                        cm.npc_SetForceMove("oid=569761", -1, 240, 70);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 650, 30);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 2000, 3500, 495, 30);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#露丝卡……？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#怎么会……？姐姐那天明明……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face3#……', 36, 3004903, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#到底怎么回事？既然还活着，为什么一直以来……！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#该隐……好……你就是该隐吧。", 36, 3004903, true, true, 1);
                                                            cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#什么……？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#记忆……被抢走了啊，所以才对伊林……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#那帮家伙……又干出了这样的事……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                    cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#不是，请求抹除记忆的人是我自己。", 36, 3004903, true, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('#face1#什么？', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#为了继续向前，为了逃离死亡，唯有如此。", 36, 3004903, true, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#对现在的我而言，过去不过是我的软肋。", 36, 3004903, true, true, 1);
                                                                            cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#那到底是什么……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                              cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/14", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0", 'oid=569761'], [0, 0, 0, 1, -20, 1, 0, 0, 0]);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#露丝卡？！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#你到底为什么要这样？露丝卡！我……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/16', 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#你是我" + (cm.getPlayer().getGender() == 0 ? '弟弟' : '妹妹') + "啊，所以呢？那又有什么意义呢？", 36, 3004903, true, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#唔！别说这些蠢话了！姐姐你知道自己失忆之前什么样吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#我听说了，为了保护你，落得悲惨的下场。", 36, 3004903, true, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/19", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#该隐，你怎么说？你也能像过去的我一样，为我赴死吗？", 36, 3004903, true, true, 1);
                                                                                                cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/21", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#……这是当然。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#那么……今日就会是你的末路。", 36, 3004903, false, true, 1);
                                                                                                        cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                          cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/attack", 100);
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metalcut", 100);
                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                cm.npc_ChangeController(3004905, "oid=569803", 470, 0, 34, 420, 520, 0, true, 1000, false);
                                                                                                                cm.npc_SetSpecialAction("oid=569803", "summon", 0, 0);
                                                                                                                cm.npcMove(3004905, 0, 5, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#（这个人是……？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm56/Malice", 0, 0);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#好了，到此为止吧。", 36, 3004905, false, true, 1);
                                                                                                                            cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#露丝卡，确认状态的话已经足够了吧？", 36, 3004905, false, true, 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/27', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#让开。", 36, 3004903, true, true, 1);
                                                                                                                                    cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不能这样，该隐也是珍贵的样本。", 36, 3004905, true, true, 1);
                                                                                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/29", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#就算你死了，为了继续研究恶意，\r\n你也是缺一不可的人。", 36, 3004905, true, true, 1);
                                                                                                                                        cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/30', 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom('#face3#……', 36, 3004903, false, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.setNpcSpecialActionReset("oid=569761");
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=569761", 1, 280, 70);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.Npc_Fadeout('oid=569761', 0, 500);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#你们到底在搞什么？你们到底对露丝卡……对姐姐做了什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/34", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayBGM("Bgm56/Malice", 0, 0);
                                                                                                                                                          cm.npc_SetForceMove("oid=569803", -1, 5, 70);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#她下定决心要变强，因为她有了必须这么做的理由。", 36, 3004905, false, true, 1);
                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/35", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#为此，才会下定决心放下那些乱七八糟的过去。", 36, 3004905, true, true, 1);
                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/36", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#别说这种犯蠢的话了，你们不懂露丝卡的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/37", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#呵呵呵……所以才有研究的价值啊？", 36, 3004905, true, true, 1);
                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/38', 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#放下过去的人和追逐过去的人，究竟谁会变得更强呢……", 36, 3004905, false, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/39", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我会饶有兴致地关注下去。", 36, 3004905, false, true, 1);
                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/40", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.npc_SetForceMove("oid=569803", 1, 280, 70);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.Npc_Fadeout("oid=569803", 0, 500);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#唔……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/41", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哈……哈……\r\n（那是让人动弹不得的强烈恶意。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#（不行，不能就这么放走……！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#露丝卡啊！！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/31/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/42', 100);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_Hero9(0, 3500);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                        cm.forceCompleteQuest(39454);
                                                                                                                                                                                                        cm.finishAchievement(267);
                                                                                                                                                                                                        cm.teachSkill(60031005, 0, -1);
                                                                                                                                                                                                        cm.teachSkill(60031005, 1, 1);
                                                                                                                                                                                                        cm.npc_LeaveField("oid=569589");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=569761");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=569803");
                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                        cm.warp(104000000, 0, true);
                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}