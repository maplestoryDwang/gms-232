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
      cm.npc_ChangeController(3004430, "oid=783906", -786, 195, -1, -836, -736, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=783906", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=783907", -540, 247, -1, -590, -490, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=783907', "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=783908", -629, 189, -1, -679, -579, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=783908", 'summon', 0, 0);
      cm.npc_ChangeController(3004438, "oid=783909", -1057, 161, -1, -1107, -1007, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=783909", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=783910", -999, 272, -1, -1049, -949, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=783910", "summon", 0, 0);
      cm.npc_SetSpecialAction('oid=783907', 'special3', -1, 1);
      cm.npc_SetSpecialAction('oid=783908', "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=783909", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=783910", "special3", -1, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_SetSpecialAction('oid=783906', "special3", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 312, 186);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
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
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 32, 166);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("（掉在地上的是……标志？）", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/3/1", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("（罗兰德拿着的……是黑太阳之标志吗……）", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3004465, "oid=784368", 168, 147, -1, 118, 218, 1, true, 700, false);
                              cm.npc_SetSpecialAction("oid=784368", 'summon', 0, 0);
                              cm.npc_ChangeController(3004465, "oid=784369", 236, 189, -1, 186, 286, 1, true, 700, false);
                              cm.npc_SetSpecialAction('oid=784369', "summon", 0, 0);
                              cm.npc_ChangeController(3004465, "oid=784370", 217, 225, -1, 167, 267, 1, true, 700, false);
                              cm.npc_SetSpecialAction("oid=784370", "summon", 0, 0);
                              cm.npc_ChangeController(3004465, "oid=784371", 322, 272, -1, 272, 372, 1, true, 700, false);
                              cm.npc_SetSpecialAction("oid=784371", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("（最终，敌人还是通过破损的城门闯了进来。）", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -792, 166);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5#罗兰德……", 37, 3004430, false, true);
                                          cm.effect_Voice("Voice5.img/CH2/Seren/75", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3004431, "oid=784678", -890, 228, -1, -940, -840, 0, true, 500, false);
                                              cm.npc_SetSpecialAction("oid=784678", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#塞伦，塞伦！！", 37, 3004431, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/113", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#从很久以前开始，我就一直在想……", 37, 3004430, false, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Seren/76", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#若有一天，圣剑重拾光芒……\r\n成为圣剑主人的人，应该是像罗兰德这样的。", 37, 3004430, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Seren/77", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#得知他还活着的时候，我真的以为预言马上就实现了。", 37, 3004430, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Seren/78", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#但是，你说对了。他注定不是剑的主人。", 37, 3004430, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Seren/79", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#快起来。敌人涌过来了。", 37, 3004431, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Idea/114", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#没用的。", 37, 3004430, true, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Seren/80", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#也许一切都结束了。", 37, 3004430, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Seren/81", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#城门被攻破，混乱也没有要平息的迹象。", 37, 3004430, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Seren/82", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#那你还等什么？赶紧跑去王城，带着圣剑逃跑啊？\r\n你的职责，不是圣剑守护者吗？", 37, 3004431, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Idea/115", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4# ……", 37, 3004430, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face0#战斗的事情就交给我们吧。\r\n在绝望的情况下，想方设法克服困难，正是我们的专长。", 37, 3004431, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/116", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=783906"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#各位，你们没受伤吧！！", 37, 3004431, false, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Idea/117", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, -57, 166);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_ChangeController(3004435, "oid=785128", -224, 169, -1, -274, -174, 0, true, 500, false);
                                                                                      cm.npc_SetSpecialAction("oid=785128", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_ChangeController(3004436, "oid=785129", -171, 228, -1, -221, -121, 0, true, 500, false);
                                                                                        cm.npc_SetSpecialAction("oid=785129", "summon", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#对抗黑魔法师的时候都活下来了，总不会在这里死掉吧？", 37, 3004435, false, true);
                                                                                          cm.effect_Voice("Voice5.img/CH2/Hawkeye/1", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#有#h0#在，一定能行的。", 37, 3004436, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Checky/8", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, -792, 186);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.setNpcSpecialActionReset('oid=783906');
                                                                                                  cm.sendNormalTalk_Bottom("#face4#啊……", 37, 3004430, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_ChangeController(3004433, "oid=785184", -850, 163, -1, -900, -800, 0, true, 500, false);
                                                                                                    cm.npc_SetSpecialAction('oid=785184', 'summon', 0, 0);
                                                                                                    cm.npcMove(3004433, 0, -15, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=783906", -1);
                                                                                                      cm.sendNormalTalk_Bottom("#face1#塞伦卿。也许预言所说的时刻并不是现在。", 37, 3004433, false, true);
                                                                                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/89", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#或许是明天，也可能是后天，亦或是几年后的事情也说不定。", 37, 3004433, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/90", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#所以，我们先应付眼前的战斗吧。", 37, 3004433, true, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/91", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#只要能一直活到预言实现的那一刻，就是我们的胜利。", 37, 3004433, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/92", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('#face3#……', 37, 3004430, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=783906", 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#属下明白了。", 37, 3004430, false, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH2/Seren/84", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#现在有心思战斗了吗？", 37, 3004431, false, true);
                                                                                                                          cm.effect_Voice("Voice5.img/CH2/Idea/118", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#是的。多亏大家。", 37, 3004430, true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/CH2/Seren/85", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetSpecialAction("oid=783906", "special10", 1, 1);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm53/SanctuaryOfMitra", 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#骑士团听令！！！", 37, 3004430, false, true);
                                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Seren/86", 128);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#列队！！", 37, 3004430, true, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/CH2/Seren/87", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#守护者？", 37, 3004437, true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/CH2/Knight/16", 128);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#守护者平安无恙！！", 37, 3004437, true, true);
                                                                                                                                          cm.effect_Voice("Voice5.img/CH2/Knight/17", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetSpecialAction("oid=783907", "special3", -1, 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_SetSpecialAction('oid=783908', "special3", -1, 1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetSpecialAction("oid=783909", "special3", -1, 1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetSpecialAction("oid=783910", "special3", -1, 1);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#举剑！！", 37, 3004430, false, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Seren/88", 128);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_SetSpecialAction("oid=783907", "special2", 1, 1);
                                                                                                                                                        cm.npc_SetSpecialAction("oid=783908", "special2", 1, 1);
                                                                                                                                                        cm.npc_SetSpecialAction("oid=783909", "special2", 1, 1);
                                                                                                                                                        cm.npc_SetSpecialAction("oid=783910", 'special2', 1, 1);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#全军突击！！！", 37, 3004430, false, true);
                                                                                                                                                          cm.effect_Voice("Voice5.img/CH2/Seren/90", 128);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.setNpcSpecialActionReset('oid=783907');
                                                                                                                                                            cm.setNpcSpecialActionReset("oid=783908");
                                                                                                                                                            cm.setNpcSpecialActionReset("oid=783909");
                                                                                                                                                            cm.setNpcSpecialActionReset("oid=783910");
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                                                                                                              cm.npc_SetForceMove("oid=783907", 1, 700, 100);
                                                                                                                                                              cm.npc_SetForceMove("oid=783908", 1, 700, 100);
                                                                                                                                                              cm.npc_SetForceMove('oid=783909', 1, 700, 100);
                                                                                                                                                              cm.npc_SetForceMove("oid=783910", 1, 700, 100);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_SetSpecialAction("oid=783906", "special6", -1, 1);
                                                                                                                                                                cm.npcMove(3004430, 700, 0, 7000);
                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1500, 7000, -92, 166);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                      cm.warp(410000630, 0, false);
                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                                                                      cm.updateInfoQuest(39817, "mp=1");
                                                                                                                                                                      cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h1;07=h1;17=h1;08=h1;18=h1;09=h0;19=h1");
                                                                                                                                                                      cm.npc_LeaveField("oid=783906");
                                                                                                                                                                      cm.npc_LeaveField("oid=783906");
                                                                                                                                                                      cm.npc_LeaveField("oid=783907");
                                                                                                                                                                      cm.npc_LeaveField("oid=783907");
                                                                                                                                                                      cm.npc_LeaveField('oid=783908');
                                                                                                                                                                      cm.npc_LeaveField("oid=783908");
                                                                                                                                                                      cm.npc_LeaveField("oid=783909");
                                                                                                                                                                      cm.npc_LeaveField("oid=783909");
                                                                                                                                                                      cm.npc_LeaveField("oid=783910");
                                                                                                                                                                      cm.npc_LeaveField('oid=783910');
                                                                                                                                                                      cm.npc_LeaveField('oid=784368');
                                                                                                                                                                      cm.npc_LeaveField("oid=784368");
                                                                                                                                                                      cm.npc_LeaveField("oid=784369");
                                                                                                                                                                      cm.npc_LeaveField("oid=784369");
                                                                                                                                                                      cm.npc_LeaveField("oid=784370");
                                                                                                                                                                      cm.npc_LeaveField("oid=784370");
                                                                                                                                                                      cm.npc_LeaveField("oid=784371");
                                                                                                                                                                      cm.npc_LeaveField('oid=784371');
                                                                                                                                                                      cm.npc_LeaveField("oid=784678");
                                                                                                                                                                      cm.npc_LeaveField("oid=784678");
                                                                                                                                                                      cm.npc_LeaveField("oid=785128");
                                                                                                                                                                      cm.npc_LeaveField('oid=785128');
                                                                                                                                                                      cm.npc_LeaveField('oid=785129');
                                                                                                                                                                      cm.npc_LeaveField("oid=785129");
                                                                                                                                                                      cm.npc_LeaveField("oid=785184");
                                                                                                                                                                      cm.npc_LeaveField("oid=785184");
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