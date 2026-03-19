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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 516, -430);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 277, 80);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.npc_ChangeController(3001952, "oid=6242473", 170, 100, 3, 120, 220, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=6242473", "summon", 0, 0);
            cm.npc_ChangeController(3001968, "oid=6242474", 700, 100, 4, 650, 750, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=6242474", "summon", 0, 0);
            cm.npc_ChangeController(3001968, "oid=6242475", 780, 100, 4, 730, 830, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=6242475", "summon", 0, 0);
            cm.npc_ChangeController(3001968, "oid=6242476", -250, 100, 3, -300, -200, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=6242476", "summon", 0, 0);
            cm.npc_ChangeController(3001968, "oid=6242477", -330, 100, 2, -380, -280, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=6242477", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 200, 90);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=6242474", -1, 50, 80);
                    cm.npc_SetForceMove("oid=6242475", -1, 50, 80);
                    cm.npc_SetForceMove("oid=6242476", 1, 50, 80);
                    cm.npc_SetForceMove("oid=6242477", 1, 50, 80);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    cm.effect_Text(["#fn黑体##fs18#数百年后，某个王国", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6242474", -1, 50, 80);
                      cm.npc_SetForceMove("oid=6242475", -1, 50, 80);
                      cm.npc_SetForceMove("oid=6242476", 1, 50, 80);
                      cm.npc_SetForceMove("oid=6242477", 1, 50, 80);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=6242473", 1, 5, 80);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/foot_night", 100);
                        cm.npc_SetForceMove("oid=6242474", -1, 100, 100);
                        cm.npc_SetForceMove("oid=6242475", -1, 100, 100);
                        cm.npc_SetForceMove("oid=6242476", 1, 100, 100);
                        cm.npc_SetForceMove("oid=6242477", 1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我劝你还是乖乖束手就擒，免得吃苦……", 36, 3001968, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face9#你以为这么说，我就会害怕了！？", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#居然甘当权力的走狗……就你们也配当骑士！？", 36, 3001952, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嘁……", 36, 3001968, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#(……虽然表面上强装淡定，但今天真是我加入自卫队以来遇到的最大危机。\r\n快动动脑筋……要是在这被抓了，我的同伴们怎么办！)", 36, 3001952, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#(呃……完全想不出脱身的法子啊！\r\n在这种危机时刻，要是能有位厉害骑士保护我该多好！)", 36, 3001952, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(拜托了，请倾听我恳切的祈祷……\r\n请赐予我……可以拯救王国于危难的骑士吧！)", 36, 3001952, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 5000, 10000, 200, 250);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=6242473", 'special1', 3500, 0);
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/3/white out_light", "white out_light", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                            cm.sendNormalTalk_Bottom("#face6#嗯！？", 37, 3001952, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呃啊！", 37, 3001968, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#柔和的轻风……好温暖。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                    cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#我终于从那诅咒中解脱了吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#不，也许我只是在做梦。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                        cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#而且是个非常甜蜜的梦……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                          cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(这也是亚空间向我展示的幻像吗？\r\n不对，这感觉比幻像更鲜明得多……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/present/0/0/skeleton", 'animation', '', '01'], [0, 1, 1, 0, 0, 0, 0, 1, 0, -80]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face6#……传说中的骑士？\r\n你真的是来救我的吗？", 36, 3001952, false, true, 1);
                                                                        cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face7#哇……你的制服真威风。\r\n原来从前的故事说的是真的。", 36, 3001952, true, true, 1);
                                                                          cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(……这男子？不对，他的长相很稚嫩，应该还是个少年。\r\n听他的语气……莫非是认识我的人？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年满脸期待的表情，絮絮叨叨地说个没完。\r\n一会儿是传说中的骑士……一会儿又是恳切的期待。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#好，那你快点解救我吧~！", 36, 3001952, true, true, 1);
                                                                                cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                          cm.fieldEffect_取消复合图片动画('01', 1, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#……我不认识你啊？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                            cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我残余的记忆中，并没有对你的印象。\r\n你认识我吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                              cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/11", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face6#你装什么傻。不正是因为我在那喷泉许愿，你就出现了吗。", 36, 3001952, true, true, 1);
                                                                                                cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face6#你不是来和我一起保卫这个王国的吗？", 36, 3001952, true, true, 1);
                                                                                                  cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/13', 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 277, 90);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
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
                                                                                                            cm.sendNormalTalk_Bottom("#face5#……算了，现在没时间计较。", 36, 3001952, false, true, 1);
                                                                                                            cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#你这小毛贼，又耍什么花招！", 36, 3001968, true, true, 1);
                                                                                                              cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/15", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#这回你休想跑掉！", 36, 3001968, true, true, 1);
                                                                                                                cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face9#嘁。", 36, 3001952, true, true, 1);
                                                                                                                  cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#竟还有同伙吗？\r\n有个可疑的家伙忽然从天而降。把他们一起拿下。", 36, 3001968, true, true, 1);
                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/18', 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face5#再不快点动手的话，你也别想安然无恙哦？", 36, 3001952, true, true, 1);
                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face5#是不是该采取点措施？", 36, 3001952, true, true, 1);
                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/foot_night", 100);
                                                                                                                          cm.npc_SetForceMove("oid=6242474", -1, 50, 80);
                                                                                                                          cm.npc_SetForceMove("oid=6242475", -1, 50, 80);
                                                                                                                          cm.npc_SetForceMove("oid=6242476", 1, 50, 80);
                                                                                                                          cm.npc_SetForceMove("oid=6242477", 1, 50, 80);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#不行。我不能在这种地方被抓住。", 36, 3001952, false, true, 1);
                                                                                                                            cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/22", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_BackgroundCanvas(1, 70, 70, 70, 1000, 0, 0);
                                                                                                                                cm.fieldEffect_BackgroundCanvas(4, 70, 70, 70, 1000, 0, 0);
                                                                                                                                cm.fieldEffect_BackgroundCanvas(2, 70, 70, 70, 1000, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 40, -33);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                          cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#得到剑之恩宠的勇士啊……举起你的剑。", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                            cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#守护主君，是你的使命……", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 277, 90);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face6#守护？举剑？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                          cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/23", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face6#不是，我身上没带佩剑啊。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/24", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face6#叫我举剑，到底什么意思？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/25", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(脑海中忽然掠过在战场里作战的影像，\r\n冰冷的剑之轨迹在虚空中划过……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#啊，是那个。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword_return", 100);
                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/etc/sword/1", 0, 1000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=6242474", "special0", -1, 0);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=6242475", 'special0', -1, 0);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=6242476", "special0", -1, 0);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=6242477", 'special0', -1, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_OneTimeAction(4, 2000);
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#刚刚那个……是你召唤出来的吗！？\r\n……不对，现在没工夫说这个。", 36, 3001952, false, true, 1);
                                                                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face9#我们要趁乱赶紧逃跑。跟我来！", 36, 3001952, true, true, 1);
                                                                                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/28", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#呃……看什么？还不快追！", 36, 3001968, false, true, 1);
                                                                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/30", 100);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                        cm.warp(993162003, 0, false);
                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                        cm.npc_LeaveField("oid=6242473");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=6242474");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=6242475");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=6242476");
                                                                                                                                                                                                        cm.npc_LeaveField("oid=6242477");
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