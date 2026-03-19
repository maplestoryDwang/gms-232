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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.gainExp(15);
      cm.gainExp(34);
      cm.gainExp(57);
      cm.gainExp(92);
      cm.gainExp(135);
      cm.gainExp(372);
      cm.gainExp(560);
      cm.gainExp(840);
      cm.gainExp(1242);
      cm.teachSkill(150010079, 1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background('core0', 1, 0, 0, 0);
      cm.Hidden_background("core1", 1, 0, 0, 0);
      cm.onSetMapTagedObjectVisible(1, 'sand', 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3001508, "oid=143719193", -2680, 263, 40, -2730, -2630, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143719193", "summon", 0, 0);
      cm.npc_ChangeController(3001509, "oid=143719194", -2750, 263, 38, -2800, -2700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143719194", 'summon', 0, 0);
      cm.npc_ChangeController(3001510, "oid=143719195", -2400, 263, 34, -2450, -2350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143719195", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm48.img/Doomsday_FULL", 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/6/0", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2600);
            cm.effect_Text(["#fn黑体##fs35#为了战争的战争"], [50, 2100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs35#英雄辈出"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Text(["#fn黑体##fs35#有太多的生命正在因为他而消失。"], [50, 4500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4100);
                  cm.effect_Text(["#fn黑体##fs35#汇聚成一体的强大力量……"], [50, 3600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4700);
                    cm.effect_Text(["#fn黑体##fs35#只有那个，才能终结这场混乱。"], [50, 4200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                      cm.effect_Text(["#fn黑体##fs35#各位！"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(6200);
                        cm.effect_Text(["#fn黑体##fs35#为了我们一族的使命，赌上你们的生命吧。"], [50, 5700, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4700);
                          cm.effect_Text(["#fn黑体##fs35#高等翼人会成为圣殿的执行者。"], [50, 4200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/0/front_particle", 'animation', '', '00'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/1/fire_particle_01", 'animation', '', '01'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/2/fire_particle_02", "animation", '', '02'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#战乱不断的混乱时代", 0);
                                  cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n纷飞的战火烧到了我的身边", 0);
                                    cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#夺走了心爱的人的生命。", 0);
                                      cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n当我陷入绝望之时，冥冥中听到了救赎之音", 0);
                                        cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs22#\r\n\r\n\r\n#fn黑体# 「悲剧的终结」#fn??#―――――――――――――――――――――", 1);
                                          cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#这双手好脏", 0);
                                            cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#如果能切断那条锁链#fn??#――――――――――――――", 0);
                                              cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n\r\n即使在无边无际的夜空的某个地方", 0);
                                                cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#在不知名的某颗星星的战场上", 0);
                                                  cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#无声无息地消失", 0);
                                                    cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n我也会欣然接受这个结局", 1);
                                                      cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2900);
                                                          cm.effect_Voice("Voice4.img/Ark/Mono/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                          cm.effect_Text(["#fn黑体##fs45#……我想了一下。"], [50, 2400, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_取消复合图片动画('00', 0, 0);
                                                              cm.fieldEffect_取消复合图片动画('01', 0, 0);
                                                              cm.fieldEffect_取消复合图片动画('02', 0, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                              cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('d1', "Effect/Direction17.img/effect/ark/illust/0/0", 0, 1500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                      cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                                                                      cm.effect_Text(["#fn黑体##fs35#是因为决心还不够吗？"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(4400);
                                                                        cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                        cm.effect_Text(["#fn黑体##fs35#不，也许这是注定的命运……"], [50, 3900, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2900);
                                                                          cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                                          cm.effect_Text(["#fn黑体##fs35#他看穿了一切……"], [50, 2400, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(6800);
                                                                            cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                                                            cm.effect_Text(["#fn黑体##fs35#看来只能到此为止了……一切就这样结束了吗？"], [50, 6300, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('d1', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  cm.effect_Voice("Voice4.img/ArkNpc/Back/A/7", 100);
                                                                                  cm.effect_Text(["#fn黑体##fs65#亚克！"], [50, 2000, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('d2', "Effect/Direction17.img/effect/ark/illust/0/1", 0, 300, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Now/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('d2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_Hero9(0, 2000);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                              cm.fieldEffect_Hero9(-1, 1000);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2, 180);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.emotion(1, 999999);
                                                                                                  cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/back"], [9999999, 0, 0, 1, -120, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/front_0"], [9999999, 0, 0, 1, 1, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind"], [10000, 0, 0, 1, 2, 0, 0, 0]);
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2, 180);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face1#我……是谁……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind"], [0, 0, 0, 1, 0, 2, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/front_1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind"], [0, 0, 0, 1, 0, 2, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/front_2"], [9999, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind"], [0, 0, 0, 1, 0, 2, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 250, -50);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.OverlapScreenDetail19(0, 300, 300, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2350, -50);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.特效_角色改变相对位置(0, -60, 0);
                                                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -1200, 200);
                                                                                                                            cm.onSetMapTagedObjectVisible(1, "sand", 512);
                                                                                                                            cm.npc_SetForceMove("oid=143719193", 1, 1200, 80);
                                                                                                                            cm.npc_SetForceMove("oid=143719194", 1, 1050, 80);
                                                                                                                            cm.npc_SetForceMove("oid=143719195", 1, 1200, 80);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_running2", 150);
                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -2300, 180);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(17000, 0, 1000, 17000, -1050, 180);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_running2", 150);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#前天，昨天，今天！一直在寻找，但是！", 37, 3001509, 0, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#嘿，但是！", 37, 3001509, 1, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#东西南北，上下，左右！找得头都大了，但是！", 37, 3001509, 1, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#嘿，但是！", 37, 3001509, 1, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#没有，没有，没有！就像是命运之墙在阻挡我们？", 37, 3001509, 1, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#明天，后天，大后天！我要找到天涯海角！", 37, 3001509, 1, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_running2", 150);
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#咳，咳……", 37, 3001509, 1, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/flare_ready", 100);
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#叽，叽勒……噪音终于停止了吗……啊，终于可以集中精神听电波了，叽勒。", 37, 3001510, 0, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_SetForceMove("oid=143719194", 1, 50, 90);
                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -1200, 180);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#咳，咳……你，你说什么……噪音？\r\n你是看不起我巴克巴克唱的劳动歌谣吗？", 37, 3001509, 0, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#妨碍了劳动，就不是劳动歌谣，叽勒。", 37, 3001510, 1, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -1500, 320);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#我可以忍受别人骂我但骂我的音乐就算天塌下来我也忍不了很好来吧总有一天我们要做个了断那个时刻好像就是现在觉悟吧这里就是你的葬身之地！", 37, 3001509, 0, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -1350, 320);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_SetForceMove("oid=143719195", -1, 1, 80);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你这个音痴，就像爆炸之前的锅盖一样，叽勒……叽勒楞。", 37, 3001510, 0, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#你这个只知道电波的傻瓜！", 37, 3001509, 1, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#嗯，喂……孩子们……又在吵架呢……\r\n朋友之间吵架可不好哦……", 37, 3001508, 1, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#你们俩握握手，就当和解了吧……闭上眼睛，来，一，二……", 37, 3001508, 1, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_setForceFlip("oid=143719193", 1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_setForceFlip("oid=143719193", -1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_setForceFlip("oid=143719193", 1);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_setForceFlip("oid=143719193", -1);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.npc_setForceFlip("oid=143719193", 0);
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#别以为我好欺负，锅盖……不要小看电波探测，叽勒！", 37, 3001510, 0, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#让你见识一下爆，爆破，爆炸↗", 37, 3001509, 1, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#呜呜，呜呜呜……呜……呜呜……", 37, 3001508, 1, 1);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#都是我的错……都怪我这个队长没用，你们才会打架……\r\n到今天都没什么成果，全都是因为我……", 37, 3001508, 1, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#叽，叽勒……叽勒楞……", 37, 3001510, 1, 1);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3001509, 1, 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好吧，停手吧……我错了，叽勒。", 37, 3001510, 1, 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#只，只是那家伙和我的音乐见解有点不同罢了……", 37, 3001509, 1, 1);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#早上的占卜结果很不好……\r\n在这种情况下仍然出来探索，是个失误。真对不起……", 37, 3001508, 1, 1);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=143719193", 1, 60, 120);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.npc_SetForceMove("oid=143719193", -1, 30, 120);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.npc_setForceFlip("oid=143719193", 1);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.npc_setForceFlip("oid=143719193", -1);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=143719193", 1);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=143719193", -1);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=143719193", 1);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind"], [999999, 0, 0, 1, 0, 2, 0, 0]);
                                                                                                                                                                                                                        cm.onSetMapTagedObjectVisible(1, "sand", 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=143719193", -1, 10, 100);
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#啊，嗯！？", 37, 3001508, 0, 1);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=143719193", -1, 50, 100);
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#妮雅啊啊啊啊啊啊啊啊啊啊↗", 37, 3001508, 0, 1);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -1350, -400);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哇哦……", 37, 3001509, 0, 1);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#这个……是个未知的生命体。", 37, 3001510, 1, 1);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=143719193");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=143719194");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=143719195");
                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                cm.warp(402090001, 0, false);
                                                                                                                                                                                                                                                cm.updateInfoQuest(34915, "e1=1");
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}