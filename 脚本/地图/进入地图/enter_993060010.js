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
      cm.npc_ChangeController(3003602, 'oid=275651', -2950, 88, 19, -3000, -2900, 1, false, 0, false);
      cm.npc_ChangeController(3003608, "oid=275652", -3488, 88, 36, -3538, -3438, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060010;return=450006130");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.updateInfoQuest(35150, "01=h1;02=h0");
      cm.npc_ChangeController(3003651, "oid=2199434", -2905, 70, 19, -2955, -2855, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199434", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.npc_SetSpecialAction("oid=2199434", "prone", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2983, -430);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_Text(["#fn黑体##fs18#冒险岛世界，圣地入口"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -2983, 150);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                cm.userSetFieldFloating(993060010, 10, 10, 10);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(993060010, 0, 0, 0);
                  cm.sendNormalTalk_Bottom("#face0#嘁……坐标偏离了。这里好像是圣地附近……。", 37, 3003651, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……还好离目的地天渡不是很远。", 37, 3003651, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.npc_SetSpecialAction("oid=2199434", "stand", -1, 1);
                      cm.sendNormalTalk_Bottom("（乘坐的船好像因为坠落的冲击而毁坏了。\r\n只能走到目的地了。）", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呃……对了，大家没受伤吧？", 37, 3003651, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(0);
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -2983, 20);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("为什么……只有我们俩？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=2199434");
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2199434", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#哎呀，我们好像跟沃莉、梅尔朗、休麦他们失散了。", 37, 3003651, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#他们都很强，应该可以到达基地，不过……", 37, 3003651, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0##b#ho##k？", 37, 3003651, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你确定……这里是圣地？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#对你来说，这样的风景多少有点陌生吧。", 37, 3003651, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#神秘河冰冻之后不久，\r\n巨大的锁链就开始在各地出现。", 37, 3003651, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#它们正在将这个世界拖向神秘河那边。\r\n于此同时……", 37, 3003651, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                            cm.sendNormalTalk_Bottom("（附近传来了怪叫声。一个，两个……无数的敌人向这边冲了过来。）", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.playSoundEffDirectly("Ambience.img/night");
                                                              cm.fieldEffect_PlayBGM("Bgm18/Injustice", 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face0#唉……如今连圣地也被敌人……。", 37, 3003651, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3625, 40);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -3625, -330);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                      cm.npc_ChangeController(3003666, "oid=2199455", -4060, -251, 38, -4110, -4010, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2199455", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003666, "oid=2199456", -3960, -248, 29, -4010, -3910, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2199456", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003666, "oid=2199457", -3863, -187, 23, -3913, -3813, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2199457", 'summon', 0, 0);
                                                                      cm.npc_ChangeController(3003666, "oid=2199458", -3777, -124, 24, -3827, -3727, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2199458", 'summon', 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                        cm.npc_ChangeController(3003666, "oid=2199459", -3700, -12, 41, -3750, -3650, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2199459", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003666, "oid=2199460", -3634, 50, 39, -3684, -3584, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2199460", 'summon', 0, 0);
                                                                        cm.npc_ChangeController(3003666, "oid=2199461", -3522, 70, 37, -3572, -3472, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2199461", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                          cm.npc_ChangeController(3003666, "oid=2199462", -4086, -563, 2, -4136, -4036, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2199462", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3003666, "oid=2199463", -3939, -557, 4, -3989, -3889, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2199463", 'summon', 0, 0);
                                                                          cm.npc_ChangeController(3003666, "oid=2199464", -3718, -350, 7, -3768, -3668, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2199464", 'summon', 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                            cm.npc_ChangeController(3003666, "oid=2199465", -3624, -260, 11, -3674, -3574, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2199465", 'summon', 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2800, -220);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -2620, -220);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                                    cm.npc_ChangeController(3003666, "oid=2199469", -2647, -320, 50, -2697, -2597, 1, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=2199469", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_ChangeController(3003666, "oid=2199470", -2548, -320, 47, -2598, -2498, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=2199470", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_ChangeController(3003666, "oid=2199472", -2450, -320, 46, -2500, -2400, 1, true, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=2199472", "summon", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(3003666, "oid=2199473", -2337, -320, 44, -2387, -2287, 1, true, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=2199473", "summon", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(3003666, "oid=2199476", -2217, -320, 43, -2267, -2167, 1, true, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=2199476", 'summon', 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -3400, 150);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -3020, 150);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#哎呀……路被完全堵住了。\r\n只能把他们全部消灭掉，强行突破了……", 37, 3003651, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                                                                                        cm.npc_ChangeController(3003666, "oid=2199481", -3404, 62, 35, -3454, -3354, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2199481", "summon", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(3003666, "oid=2199482", -3291, 62, 34, -3341, -3241, 0, true, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=2199482", "summon", 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_ChangeController(3003666, "oid=2199483", -3010, 62, 31, -3060, -2960, 0, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2199483", "summon", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_ChangeController(3003666, "oid=2199484", -2761, 62, 20, -2811, -2711, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2199484", 'summon', 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_ChangeController(3003666, "oid=2199485", -2641, 62, 27, -2691, -2591, 1, true, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=2199485", "summon", 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……这可有点麻烦。", 37, 3003651, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=2199434", "attack", 900, 1);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Die", 100);
                                                                                                                    cm.npc_SetSpecialAction("oid=2199483", "die1", 2000, 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    cm.effect_Voice("SoundEff.img/blackHeaven/slap1", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=2199483", "special", -1, 1);
                                                                                                                      cm.npc_LeaveField("oid=2199483");
                                                                                                                      cm.npc_LeaveField("oid=2199483");
                                                                                                                      cm.setNpcSpecialActionReset("oid=2199434");
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#呼……", 37, 3003651, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#以为我会坐以待毙吗？", 37, 3003651, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#其他的事等离开这里之后再说。", 37, 3003651, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.forceStartQuest(35603, '');
                                                                                                                                cm.forceCompleteQuest(35603);
                                                                                                                                cm.gainExp(85793345);
                                                                                                                                cm.updateInfoQuest(35603, 'enter=1');
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
                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                      cm.npc_LeaveField("oid=2199434");
                                                                                                                                      cm.npc_LeaveField("oid=2199434");
                                                                                                                                      cm.updateInfoQuest(35150, "01=h1;02=h1");
                                                                                                                                      cm.playerMessage(5, "为了前往圣地，必须把路口挡道的怪物全部干掉！");
                                                                                                                                      cm.npc_LeaveField("oid=2199455");
                                                                                                                                      cm.npc_LeaveField("oid=2199455");
                                                                                                                                      cm.npc_LeaveField("oid=2199456");
                                                                                                                                      cm.npc_LeaveField("oid=2199456");
                                                                                                                                      cm.npc_LeaveField("oid=2199457");
                                                                                                                                      cm.npc_LeaveField("oid=2199457");
                                                                                                                                      cm.npc_LeaveField("oid=2199458");
                                                                                                                                      cm.npc_LeaveField("oid=2199458");
                                                                                                                                      cm.npc_LeaveField("oid=2199459");
                                                                                                                                      cm.npc_LeaveField("oid=2199459");
                                                                                                                                      cm.npc_LeaveField("oid=2199460");
                                                                                                                                      cm.npc_LeaveField("oid=2199460");
                                                                                                                                      cm.npc_LeaveField("oid=2199461");
                                                                                                                                      cm.npc_LeaveField("oid=2199461");
                                                                                                                                      cm.npc_LeaveField("oid=2199462");
                                                                                                                                      cm.npc_LeaveField("oid=2199462");
                                                                                                                                      cm.npc_LeaveField("oid=2199463");
                                                                                                                                      cm.npc_LeaveField("oid=2199463");
                                                                                                                                      cm.npc_LeaveField("oid=2199464");
                                                                                                                                      cm.npc_LeaveField("oid=2199464");
                                                                                                                                      cm.npc_LeaveField("oid=2199465");
                                                                                                                                      cm.npc_LeaveField("oid=2199465");
                                                                                                                                      cm.npc_LeaveField("oid=2199469");
                                                                                                                                      cm.npc_LeaveField("oid=2199469");
                                                                                                                                      cm.npc_LeaveField("oid=2199470");
                                                                                                                                      cm.npc_LeaveField("oid=2199470");
                                                                                                                                      cm.npc_LeaveField("oid=2199472");
                                                                                                                                      cm.npc_LeaveField("oid=2199472");
                                                                                                                                      cm.npc_LeaveField("oid=2199473");
                                                                                                                                      cm.npc_LeaveField("oid=2199473");
                                                                                                                                      cm.npc_LeaveField("oid=2199476");
                                                                                                                                      cm.npc_LeaveField("oid=2199476");
                                                                                                                                      cm.npc_LeaveField("oid=2199481");
                                                                                                                                      cm.npc_LeaveField("oid=2199481");
                                                                                                                                      cm.npc_LeaveField("oid=2199482");
                                                                                                                                      cm.npc_LeaveField("oid=2199482");
                                                                                                                                      cm.npc_LeaveField("oid=2199484");
                                                                                                                                      cm.npc_LeaveField("oid=2199484");
                                                                                                                                      cm.npc_LeaveField("oid=2199485");
                                                                                                                                      cm.npc_LeaveField("oid=2199485");
                                                                                                                                      var O = cm.getEventManager("月桥_战斗2");
                                                                                                                                      O.startInstance(cm.getPlayer(), cm.getMap());
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