var status = -1;
var selectionLog = [];
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
      cm.gainSkillBuff(80011712);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_PlayBGM("BgmPL2/TheWaytoHope_gloomy_MR", 0, 0);
      cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part2_0/op4", '0', '', 'part2Op01'], [0, 0, 1, 0, 0, 0, 0, 1]);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/1", 128);
          cm.inGameDirectionEvent_AskAnswerTime(6000);
          cm.effect_Text(["#fn黑体##fs35#斯巴乐缇也沦陷了。"], [50, 3866, 7, 0, -50, 1, 4, 1, 300, 300]);
        } else {
          if (status === V++) {
            cm.fieldEffect_取消复合图片动画("part2Op01", 0, 0);
            cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part2_1/op5", '0', '', "part2Op02"], [0, 0, 1, 0, 0, 0, 0, 1]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_Text(["#fn黑体##fs35#没人相信我所看到的。"], [50, 5000, 7, 0, -50, 1, 4, 1, 300, 300]);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/2", 128);
              cm.inGameDirectionEvent_AskAnswerTime(9500);
            } else {
              if (status === V++) {
                cm.fieldEffect_取消复合图片动画("part2Op02", 0, 0);
                cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part2_2/op6", '0', '', "part2Op03"], [0, 0, 1, 0, 0, 0, 0, 1]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/3", 128);
                  cm.inGameDirectionEvent_AskAnswerTime(6920);
                  cm.effect_Text(["#fn黑体##fs35#人们已经对失去的故乡和凶恶的怪物充满了绝望和恐惧"], [50, 5920, 7, 0, -50, 1, 4, 1, 300, 300]);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/4", 128);
                    cm.inGameDirectionEvent_AskAnswerTime(6720);
                    cm.effect_Text(["#fn黑体##fs35#人们以互相责怪的卑劣方式，试图否认这个现实。"], [50, 5720, 7, 0, -50, 1, 4, 1, 300, 300]);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/5", 128);
                      cm.inGameDirectionEvent_AskAnswerTime(8432);
                      cm.effect_Text(["#fn黑体##fs35#但是反目和猜疑只能让我们更加脆弱。"], [50, 4432, 7, 0, -50, 1, 4, 1, 300, 300]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/6", 128);
                        cm.inGameDirectionEvent_AskAnswerTime(7240);
                        cm.effect_Text(["#fn黑体##fs35#不远的将来，他们还会再回来"], [50, 4240, 7, 0, -50, 1, 4, 1, 300, 300]);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/7", 128);
                          cm.inGameDirectionEvent_AskAnswerTime(7124);
                          cm.effect_Text(["#fn黑体##fs35#我们所需要的只剩下了可团结一体时间。"], [50, 4624, 7, 0, -50, 1, 4, 1, 300, 300]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/8", 128);
                            cm.inGameDirectionEvent_AskAnswerTime(6172);
                            cm.effect_Text(["#fn黑体##fs35#在峡谷中看到的要塞，佩图尔称之为斯库亚斯。"], [50, 4672, 7, 0, -50, 1, 4, 1, 300, 300]);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P2/9", 128);
                              cm.inGameDirectionEvent_AskAnswerTime(8624);
                              cm.effect_Text(["#fn黑体##fs35#我们将在那里一同克服恐惧。"], [50, 4624, 7, 0, -50, 1, 4, 1, 300, 300]);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_取消复合图片动画("part2Op03", 1, 1000);
                                cm.npc_ChangeController(9400581, "oid=7639290", -2200, 20, 37, -2250, -2150, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639290", "summon", 0, 0);
                                cm.npc_ChangeController(9400583, "oid=7639291", -2280, 20, 38, -2330, -2230, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639291", "summon", 0, 0);
                                cm.npc_ChangeController(9400584, "oid=7639292", -2350, 20, 39, -2400, -2300, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639292", "summon", 0, 0);
                                cm.forceStartQuest(64163, 'riding');
                                cm.setMobImage("PL_MONAD.img/EP1/ACT3/caravan", 100);
                                cm.setPartnerAction(1, 9400580, 80011692, 100, 600, 0);
                                cm.setPartnerAction(1, 9400582, 80011702, 160, 600, 0);
                                cm.npc_ChangeController(9400595, "oid=7639293", -2630, 20, 40, -2680, -2580, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639293", 'summon', 0, 0);
                                cm.npc_ChangeController(9400678, "oid=7639294", -2730, 20, 43, -2780, -2680, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639294", "summon", 0, 0);
                                cm.npc_ChangeController(9400679, "oid=7639295", -2890, 20, 45, -2940, -2840, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639295", 'summon', 0, 0);
                                cm.npc_ChangeController(9400587, "oid=7639296", -3030, 20, 44, -3080, -2980, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639296", "summon", 0, 0);
                                cm.npc_ChangeController(9400588, "oid=7639297", -3110, 20, 48, -3160, -3060, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639297", "summon", 0, 0);
                                cm.npc_ChangeController(9400589, "oid=7639298", -3190, 20, 49, -3240, -3140, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639298", "summon", 0, 0);
                                cm.npc_ChangeController(9400591, "oid=7639299", -3300, 20, 50, -3350, -3250, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639299", "summon", 0, 0);
                                cm.npc_ChangeController(9400598, "oid=7639300", -3400, 20, 47, -3450, -3350, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639300", "summon", 0, 0);
                                cm.npc_ChangeController(9400597, "oid=7639301", -3500, 20, 52, -3550, -3450, 0, true, false);
                                cm.npc_SetSpecialAction("oid=7639301", "summon", 0, 0);
                                cm.npc_SetForceMove("oid=7639290", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639291", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639292", 1, 600, 50);
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
                                cm.npc_SetForceMove("oid=7639293", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639294", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639295", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639296", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639297", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639298", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639299", 1, 600, 50);
                                cm.npc_SetForceMove("oid=7639300", 1, 600, 50);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                                        cm.sendNormalTalk_Bottom("#b额啊啊啊啊！", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3##h0#？！你醒了？！", 37, 9400580, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#醒了！", 37, 9400582, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b呵额呵额… ", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#谢天谢地。", 37, 9400580, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=7639290", -1);
                                                                    cm.npc_setForceFlip("oid=7639291", -1);
                                                                    cm.npc_setForceFlip("oid=7639292", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=7639290", -1, 150, 50);
                                                                      cm.npc_SetForceMove("oid=7639296", 1, 30, 50);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=7639297", 1, 30, 50);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=7639298", 1, 30, 50);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=7639299", 1, 30, 50);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=7639300", 1, 30, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#哇，终于醒了！真是万幸！", 37, 9400589, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("勇士！你还好吧？！我们很担心你！", 37, 9400598, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#… 你没事吧？", 37, 9400587, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#可算醒来了。", 37, 9400581, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("哈啊！勇士！你没事吧？", 37, 9400588, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我听艾丽卡说了，是你把怪物引到了死亡谷… ", 37, 9400589, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#多亏了你，斯巴乐缇的怪物数量不至于那么多。", 37, 9400589, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#所以我们也有充足的力量抵挡住。", 37, 9400589, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b那这里呢…？", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#正在前往斯库亚斯的途中。", 37, 9400581, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#我来说吧。#h0# 刚醒来，肯定还很累。", 37, 9400580, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#对对，还得休息一会儿。我只是看到你醒来感到太高兴了，所以就… ", 37, 9400589, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#好，我们走吧。", 37, 9400589, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=7639290", 1);
                                                                                                              cm.npc_setForceFlip("oid=7639296", -1);
                                                                                                              cm.npc_setForceFlip("oid=7639297", -1);
                                                                                                              cm.npc_setForceFlip("oid=7639298", -1);
                                                                                                              cm.npc_setForceFlip("oid=7639299", -1);
                                                                                                              cm.npc_setForceFlip("oid=7639300", -1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=7639300", -1, 50, 50);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=7639299", -1, 50, 50);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=7639298", -1, 50, 50);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=7639297", -1, 50, 50);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetForceMove("oid=7639296", -1, 50, 50);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetForceMove("oid=7639290", 1, 150, 50);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=7639291", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639292", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639296", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639297", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639298", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639299", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7639300", 1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=7639290", 1, 2000, 50);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=7639291", 1, 2000, 50);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetForceMove("oid=7639292", 1, 2000, 50);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 2000);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=7639293", 1, 2000, 50);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=7639294", 1, 2000, 50);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_SetForceMove("oid=7639295", 1, 2000, 50);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetForceMove("oid=7639296", 1, 2000, 50);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_SetForceMove("oid=7639297", 1, 2000, 50);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetForceMove("oid=7639298", 1, 2000, 50);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=7639299", 1, 2000, 50);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=7639300", 1, 2000, 50);
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b那斯巴乐缇还是…？", 57, 0, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#也不完全是。虽然木栅被毁了，但是像卡夫塔佩和其他村子一样，没有完全被沦陷。", 37, 9400580, true, true);
                                                                                                                                                      cm.npc_LeaveField("oid=7639301");
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b那为什么… ", 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#这次算是比较走运。如果再来一次攻击的话，恐怕就没有那么轻易就能抵挡住了。", 37, 9400580, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#b… 也许吧。", 57, 0, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#b看到怪物军团朝着斯巴乐缇进军，我所能做的只有将一部分怪物引到反方向。", 57, 0, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#b之后我也不得以急于逃命… ", 57, 0, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b如果再次相遇，该如何是好… ", 57, 0, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，你还记得在从悬崖之间看到的那个城市吗？", 37, 9400580, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b…记得。", 57, 0, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#斯库亚斯！那地方叫斯库亚斯！据佩图尔叔叔说，那里曾经是300年抵御过战争的天然要塞。", 37, 9400580, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我们正在赶往那个地方。", 37, 9400580, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#噢，不。请你不要摆出那种表情，#h0#。我们并不是在逃跑。", 37, 9400580, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我们是为了争取时间聚集所有力量，准备迎击敌人的。", 37, 9400580, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#一个人当然无法面对那么庞大的怪物军团！所以大家要聚集力量。", 37, 9400580, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b艾丽卡… ", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#虽然大家各持所见，但还是都同意了本次的行程。\r\n嗯… \r\n其实还没达到可迎击的地步，顶多是先去斯库亚斯看看？", 37, 9400580, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#不过这已经很了不起了！因为大家已经开始认同了同心协力！", 37, 9400580, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#以前也有人说过，#h0#。不要任何事情都想着自己承担，试着相信周围的人。", 37, 9400580, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b谢谢你，艾丽卡。", 57, 0, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我可没想让你谢我！是让你快点恢复，好帮我们出点力量！", 37, 9400580, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b我知道了。不过还是要谢谢你。", 57, 0, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#…好吧。", 37, 9400580, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我去找点吃的，你等我一会儿。", 37, 9400580, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.setPartner(0, 9400580, 0, 0);
                                                                                                                                                                                                      cm.setPartner(0, 9400582, 0, 0);
                                                                                                                                                                                                      cm.npc_ChangeController(9400580, "oid=7640080", -1125, 20, 26, -1175, -1075, 1, true, false);
                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=7640080", "summon", 0, 0);
                                                                                                                                                                                                      cm.npc_ChangeController(9400582, "oid=7640081", -1185, 20, 28, -1235, -1135, 1, true, false);
                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=7640081", "summon", 0, 0);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640080", -1, 100, 100);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640081", -1, 100, 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b(… 感觉浑身都在酸痛，好在一切都看起来平安无事。) ", 57, 0, false, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b(艾丽卡好像也没有受伤。不过话说回来，我们是怎么回到这里的？……) ", 57, 0, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.npc_setForceFlip("oid=7640080", 1);
                                                                                                                                                                                                                cm.npc_setForceFlip("oid=7640081", 1);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_SetForceMove("oid=7640080", 1, 300, 100);
                                                                                                                                                                                                                  cm.npc_SetForceMove("oid=7640081", 1, 300, 100);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7640080");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7640080");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7640081");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7640081");
                                                                                                                                                                                                                    cm.setPartnerAction(1, 9400580, 80011692, 100, 600, 0);
                                                                                                                                                                                                                    cm.setPartnerAction(1, 9400582, 80011702, 160, 600, 0);
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，有个好消息。我们即将要到达斯库亚斯！", 37, 9400580, false, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#那么，先吃了这个恢复精气。这个是述拉阿姨用肉熬制的浓汤… 嗯… 不过没多少肉。所以吃起来更方便。", 37, 9400580, true, true);
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=7639299");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=7639300");
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b谢谢。", 57, 0, true, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b对了，艾丽卡… 我们是怎么回到这里的？", 57, 0, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是小石救了我们。", 37, 9400580, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#… 那家伙比你还有用哦。", 37, 9400582, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#凯恩… ", 37, 9400580, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我没说错啊？", 37, 9400582, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#是我自己悄悄跟过来的，和 #h0# 没有关系。", 37, 9400580, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#…你咋那么理直气壮呢？难道就不觉得对不起我吗？", 37, 9400582, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#好了啦… 凯恩，我已经道歉无数次了，也发誓再也不会擅自离开。", 37, 9400580, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b(… 也没告诉凯恩就自己跑到森林里去了，难怪凯恩会如此生气。) ", 57, 0, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("斯…斯库亚斯！我们到达斯库亚斯了！", 37, 9400596, false, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                                                                                                  cm.warp(867202201, 2);
                                                                                                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                  cm.forceStartQuest(64100, '');
                                                                                                                                                                                                                                                  cm.forceStartQuest(64152, '');
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;