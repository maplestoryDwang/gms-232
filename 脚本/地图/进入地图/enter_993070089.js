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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onSetMapObjectMove("giant_993070070", "die", [2, 1]);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -5000, -47);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003902, "oid=2273856", -5110, -40, 134, -5160, -5060, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273856", "summon", 0, 0);
        cm.npc_ChangeController(3003409, "oid=2273857", -4800, -40, 134, -4850, -4750, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273857", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -4970, -40);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3003659, "oid=2273858", -2230, -40, 133, -2280, -2180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273858", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273859", -2300, -40, 133, -2350, -2250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273859", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273860", -2400, -40, 133, -2450, -2350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273860", 'summon', 0, 0);
        cm.npc_ChangeController(3003661, "oid=2273861", -2500, -40, 133, -2550, -2450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273861", 'summon', 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273862", -2650, -40, 133, -2700, -2600, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273862", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273863", -2720, -40, 133, -2770, -2670, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273863", "summon", 0, 0);
        cm.npc_ChangeController(3003661, "oid=2273864", -2900, -40, 131, -2950, -2850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273864", 'summon', 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273865", -3050, -40, 131, -3100, -3000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273865", "summon", 0, 0);
        cm.npc_ChangeController(3003660, "oid=2273866", -3150, -40, 131, -3200, -3100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273866", "summon", 0, 0);
        cm.npc_ChangeController(3003761, "oid=2273867", -3300, -40, 131, -3350, -3250, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2273867", "summon", 0, 0);
        cm.npc_ChangeController(3003761, "oid=2273868", -3370, -40, 131, -3420, -3320, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2273868", "summon", 0, 0);
        cm.npc_ChangeController(3003653, "oid=2273869", -3500, -40, 131, -3550, -3450, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273869", "summon", 0, 0);
        cm.npc_ChangeController(3003652, "oid=2273870", -3600, -40, 131, -3650, -3550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273870", "summon", 0, 0);
        cm.npc_ChangeController(3003660, "oid=2273871", -3670, -40, 131, -3720, -3620, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273871", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273872", -3800, -40, 132, -3850, -3750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273872", "summon", 0, 0);
        cm.npc_ChangeController(3003660, "oid=2273873", -4050, -40, 132, -4100, -4000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273873", "summon", 0, 0);
        cm.npc_ChangeController(3003660, "oid=2273874", -4150, -40, 132, -4200, -4100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273874", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273875", -4230, -40, 132, -4280, -4180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273875", 'summon', 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273876", -4350, -40, 132, -4400, -4300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273876", "summon", 0, 0);
        cm.npc_ChangeController(3003659, "oid=2273877", -4470, -40, 132, -4520, -4420, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273877", "summon", 0, 0);
        cm.Npc_Fadeout("oid=2273875", 0, 0);
        cm.Npc_Fadeout("oid=2273874", 0, 0);
        cm.Npc_Fadeout("oid=2273864", 0, 0);
        cm.Npc_Fadeout("oid=2273861", 0, 0);
        cm.Npc_Fadeout("oid=2273860", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('要走了吗？', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                  cm.sendNormalTalk_Bottom("#face0#留在这里干什么呢？还有个女人用可怕的眼神盯着我。", 37, 3003902, false, true);
                  cm.effect_Voice("Voice4.img/BM3/orca/92", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……古瓦洛说，\r\n你因为在没有斯乌的情况下使用力量，所以寿命在渐渐缩短。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯？啊，那个嘛……怎么？你这么关心我？", 37, 3003902, true, true);
                      cm.effect_Voice("Voice4.img/BM3/orca/97", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#没错，减少了很多。非常多。", 37, 3003902, true, true);
                          cm.effect_Voice("Voice4.img/BM3/orca/101", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#现在大概只剩100年了吧？", 37, 3003902, true, true);
                            cm.effect_Voice("Voice4.img/BM3/orca/102", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('什么？', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#干嘛这么吃惊？奥尔卡本来就是黑暗精灵。", 37, 3003902, true, true);
                                cm.effect_Voice("Voice4.img/BM3/orca/108", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#100年……尝试一下人类的生活也不坏嘛。", 37, 3003902, false, true);
                                    cm.effect_Voice("Voice4.img/BM3/orca/111", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##fs6#拜拜……", 37, 3003902, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=2273856", -1, 300, 100);
                                              cm.sendNormalTalk_Bottom('嗯？你说什么？', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -5460, -39);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003902, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#……", 37, 3003902, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2273856", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#再见，笨蛋。", 37, 3003902, false, true);
                                                              cm.effect_Voice("Voice4.img/BM3/orca/121", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Bgm50.img/NewBeginningNotTheEnd", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -4900, -47);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("呼……这下真的结束了吗……", 56, 0, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#上来吧。总得去道个别。", 37, 3003409, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("嗯？道别？", 56, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(135000, 0, 1000, 135000, 934, -222);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2273875"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(750);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=2273877", 1);
                                                                                      cm.npc_setForceFlip("oid=2273876", 1);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2273877"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2273876"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(750);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.Npc_Fadeout("oid=2273875", 255, 1000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        cm.effect_NormalSpeechBalloon("哦……哦哦？！！", 1, 0, 0, 2000, 0, 620, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2273874"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          cm.effect_NormalSpeechBalloon("这……这怎么回事？！", 1, 0, 0, 2000, 0, 740, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.Npc_Fadeout("oid=2273874", 255, 1000);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              cm.effect_NormalSpeechBalloon("哦？！我明明……", 1, 0, 0, 2000, 0, 820, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=2273877", "cheer", -1, 1);
                                                                                                cm.npc_SetSpecialAction("oid=2273876", "cheer", -1, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                cm.effect_NormalSpeechBalloon("回来了！朋友们都回来了！！", 1, 0, 0, 2000, 0, 920, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetSpecialAction("oid=2273873", "cheer", -1, 1);
                                                                                                  cm.npc_SetForceMove("oid=2273872", -1, 120, 150);
                                                                                                  cm.npc_SetForceMove("oid=2273871", -1, 145, 150);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=2273872", "cheer", -1, 1);
                                                                                                    cm.npc_SetSpecialAction("oid=2273871", "cheer", -1, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                    cm.effect_NormalSpeechBalloon("哇啊啊！！", 1, 0, 0, 2000, 0, 1020, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                    cm.effect_NormalSpeechBalloon("万岁！！太好了！！", 1, 0, 0, 2000, 0, 1120, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=2273870", -1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                      cm.effect_NormalSpeechBalloon("消失的战友们都回来了！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003652, null, cm.getPlayer().getId());
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        cm.effect_NormalSpeechBalloon('哈哈，真是太好了！！', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003653, null, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=2273868", -1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          cm.effect_NormalSpeechBalloon("但愿梅尔朗也平安无事。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003652, null, cm.getPlayer().getId());
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_ChangeController(3003660, "oid=2274040", -1100, -40, 130, -1150, -1050, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274040", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003659, "oid=2274041", -1200, -40, 130, -1250, -1150, 0, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274041", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003761, "oid=2274042", -1320, -40, 130, -1370, -1270, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274042", 'summon', 0, 0);
                                                                                                            cm.npc_ChangeController(3003660, "oid=2274043", -1460, -40, 130, -1510, -1410, 0, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274043", 'summon', 0, 0);
                                                                                                            cm.npc_ChangeController(3003660, "oid=2274044", -1520, -40, 130, -1570, -1470, 0, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274044", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003659, "oid=2274045", -1620, -40, 130, -1670, -1570, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274045", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003761, "oid=2274046", -1750, -40, 130, -1800, -1700, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274046", 'summon', 0, 0);
                                                                                                            cm.npc_ChangeController(3003697, "oid=2274047", -1900, -40, 130, -1950, -1850, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274047", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003694, "oid=2274048", -2000, -40, 133, -2050, -1950, 1, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274048", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003761, "oid=2274049", -2100, -40, 133, -2150, -2050, 1, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274049", 'summon', 0, 0);
                                                                                                            cm.npc_ChangeController(3003676, "oid=2274050", 0, -40, 128, -50, 50, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274050", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003677, "oid=2274051", -120, -40, 127, -170, -70, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274051", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003698, "oid=2274052", -200, -40, 127, -250, -150, 1, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274052", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003696, "oid=2274053", -300, -40, 127, -350, -250, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274053", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003659, "oid=2274054", -400, -40, 127, -450, -350, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274054", 'summon', 0, 0);
                                                                                                            cm.npc_ChangeController(3003761, "oid=2274055", -500, -40, 127, -550, -450, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274055", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003760, "oid=2274056", -670, -40, 127, -720, -620, 1, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274056", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003760, "oid=2274057", -780, -40, 127, -830, -730, 0, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274057", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(3003660, "oid=2274058", -930, -40, 127, -980, -880, 0, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2274058", "summon", 0, 0);
                                                                                                            cm.Npc_Fadeout("oid=2274041", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                            cm.effect_NormalSpeechBalloon("这下很快就能见到祭司们了。", 1, 0, 0, 2000, 0, 1670, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2273864"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.Npc_Fadeout("oid=2273864", 255, 1000);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2273866"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2273865"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=2273866", 1, 50, 150);
                                                                                                                  cm.npc_SetForceMove("oid=2273865", 1, 20, 150);
                                                                                                                  cm.npc_SetSpecialAction("oid=2273863", "cheer", -1, 1);
                                                                                                                  cm.npc_SetSpecialAction("oid=2273862", "cheer", -1, 1);
                                                                                                                  cm.npc_SetSpecialAction("oid=2273861", "down2", -1, 1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  cm.effect_NormalSpeechBalloon("哦？？怎么回事？", 1, 0, 0, 2000, 0, 2070, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=2273866", "cheer", -1, 1);
                                                                                                                    cm.npc_SetSpecialAction("oid=2273865", "cheer", -1, 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                      cm.effect_NormalSpeechBalloon("回来了！", 1, 0, 0, 2000, 0, 2250, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2273861"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.Npc_Fadeout("oid=2273861", 255, 1000);
                                                                                                                            cm.npc_setForceFlip("oid=2273860", -1);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2273860"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.Npc_Fadeout("oid=2273860", 255, 1000);
                                                                                                                              cm.setNpcSpecialActionReset("oid=2273861");
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              cm.effect_NormalSpeechBalloon("嗯？？", 1, 0, 0, 2000, 0, 2470, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                cm.effect_NormalSpeechBalloon("活……活过来了？！！", 1, 0, 0, 2000, 0, 2570, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetSpecialAction("oid=2273859", 'cheer', -1, 1);
                                                                                                                                  cm.npc_SetSpecialAction("oid=2273861", "cheer", -1, 1);
                                                                                                                                  cm.npc_SetSpecialAction("oid=2273858", "cheer", -1, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                    cm.effect_NormalSpeechBalloon("哈哈，哈哈哈！", 1, 0, 0, 2000, 0, 2670, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                      cm.effect_NormalSpeechBalloon("所有人可以一起回去了！！", 1, 0, 0, 2000, 0, 2740, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=2274049", 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                        cm.effect_NormalSpeechBalloon("啊……伦娜保佑……", 1, 0, 0, 2000, 0, 2870, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                        cm.effect_NormalSpeechBalloon("真是可喜可贺的一天。", 1, 0, 0, 2000, 0, 2870, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                          cm.effect_NormalSpeechBalloon("今天可以尽情庆祝一下了。", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 3003694, null, cm.getPlayer().getId());
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=2274048", 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                            cm.effect_NormalSpeechBalloon("伊卡尔特，我知道你躲在面具后偷笑。", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 3003694, null, cm.getPlayer().getId());
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                              cm.effect_NormalSpeechBalloon("……哼", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 3003697, null, cm.getPlayer().getId());
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                cm.effect_NormalSpeechBalloon("真想快点回去看我的弟弟妹妹们。", 1, 0, 0, 2000, 0, 3220, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                  cm.effect_NormalSpeechBalloon("我最先想到的是父亲。", 1, 0, 0, 2000, 0, 3350, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    cm.effect_NormalSpeechBalloon("一回去我就要向她求婚。", 1, 0, 0, 2000, 0, 3510, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/7", "oid=2274041"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.Npc_Fadeout("oid=2274041", 255, 1000);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                          cm.effect_NormalSpeechBalloon("妈呀！！", 1, 0, 0, 2000, 0, 3770, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                            cm.effect_NormalSpeechBalloon("小样儿！！哈哈！你都让我担心坏了！！", 1, 0, 0, 2000, 0, 3870, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("我的家人们……应该都过得很好吧？", 1, 0, 0, 2000, 0, 4040, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                cm.effect_NormalSpeechBalloon("好想回家去看我妈妈。", 1, 0, 0, 2000, 0, 4190, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                  cm.effect_NormalSpeechBalloon("啊……好想念松软的床铺。", 1, 0, 0, 2000, 0, 4470, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                    cm.effect_NormalSpeechBalloon("真是场艰苦卓绝的战斗。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003696, null, cm.getPlayer().getId());
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                      cm.effect_NormalSpeechBalloon("是啊，我都饿得前胸贴后背了。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003698, null, cm.getPlayer().getId());
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_setForceFlip("oid=2274052", 1);
                                                                                                                                                                        cm.npc_ChangeController(3003751, "oid=2274115", 1020, -40, 129, 970, 1070, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274115", "summon", 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003750, "oid=2274116", 920, -40, 129, 870, 970, 0, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274116", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003672, "oid=2274117", 820, -40, 129, 770, 870, 0, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274117", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003674, "oid=2274118", 680, -40, 128, 630, 730, 0, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274118", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003673, "oid=2274119", 590, -40, 128, 540, 640, 0, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274119", "summon", 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003760, "oid=2274120", 450, -40, 128, 400, 500, 0, false, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274120", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003675, "oid=2274121", 300, -40, 128, 250, 350, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274121", "summon", 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003695, "oid=2274122", 200, -40, 128, 150, 250, 0, false, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274122", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003659, "oid=2274123", 1300, -40, 129, 1250, 1350, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274123", 'summon', 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003659, "oid=2274124", 1380, -40, 129, 1330, 1430, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274124", "summon", 0, 0);
                                                                                                                                                                        cm.npc_ChangeController(3003659, "oid=2274125", 1460, -40, 129, 1410, 1510, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2274125", "summon", 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                          cm.effect_NormalSpeechBalloon("战友们，等回去了一起吃饭吧？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003698, null, cm.getPlayer().getId());
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                            cm.effect_NormalSpeechBalloon("我赞成！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003677, null, cm.getPlayer().getId());
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                              cm.effect_NormalSpeechBalloon("哈哈，估计我一个人就全吃光了~", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003676, null, cm.getPlayer().getId());
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                cm.effect_NormalSpeechBalloon("巨人就像棉花糖一样……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003695, null, cm.getPlayer().getId());
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("棉花糖？要不我给你做一个？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003675, null, cm.getPlayer().getId());
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("这是一次波澜壮阔的冒险。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003673, null, cm.getPlayer().getId());
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(12000);
                                                                                                                                                                                      cm.effect_NormalSpeechBalloon('总算可以松口气了。', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003674, null, cm.getPlayer().getId());
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 920, -76);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                              cm.effect_NormalSpeechBalloon("这次总算又活下来了。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003672, null, cm.getPlayer().getId());
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                cm.effect_NormalSpeechBalloon("是啊。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003751, null, cm.getPlayer().getId());
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("谢谢大家和我一起并肩作战。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003750, null, cm.getPlayer().getId());
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("再说了……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003750, null, cm.getPlayer().getId());
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_setForceFlip("oid=2274116", -1);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("我们还有" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + '。', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003750, null, cm.getPlayer().getId());
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_setForceFlip("oid=2274117", -1);
                                                                                                                                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), 450, -270);
                                                                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.teachSkill(80002204, 0, -1);
                                                                                                                                                                                                            cm.teachSkill(80002204, 1, 0);
                                                                                                                                                                                                            cm.gainSkillBuff(80002204);
                                                                                                                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 920, -200);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom('再见。', 57, 0, false, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("黑魔法师……", 57, 0, false, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                                              cm.forceCompleteQuest(35814);
                                                                                                                                                                                                                              cm.gainExp(721799016);
                                                                                                                                                                                                                              cm.updateInfoQuest(35831, "60=h1;52=h1;71=h0;53=h1;55=h1;56=h1;65=h0;57=h1;58=h1");
                                                                                                                                                                                                                              cm.updateInfoQuest(35831, "60=h1;52=h1;71=h0;53=h1;72=h0;55=h1;56=h1;65=h0;57=h1;58=h1");
                                                                                                                                                                                                                              cm.teachSkill(80002204, -1, 0);
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2273876");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2273877");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274040");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274040");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274041");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274041");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274042");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274043");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274044");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274045");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274046");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274047");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274048");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274049");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274050");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274050");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274051");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274051");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274052");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274052");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274053");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274053");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274054");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274054");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274055");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274055");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274056");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274056");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274057");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274057");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274058");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274058");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274115");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274115");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274116");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274116");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274117");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274117");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274118");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274118");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274119");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274119");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274120");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274120");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274121");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274121");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274122");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274122");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274123");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274123");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274124");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274124");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274125");
                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2274125");
                                                                                                                                                                                                                              cm.dispose();
                                                                                                                                                                                                                              cm.dispelBuff(80002204);
                                                                                                                                                                                                                              cm.warp(450009050, 4, true);
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}