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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004456, "oid=1094627", 1, -29, 4, -49, 51, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1094627", 'summon', 0, 0);
      cm.npc_ChangeController(3004465, "oid=1094628", -726, -26, 18, -776, -676, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1094628", "summon", 0, 0);
      cm.npc_ChangeController(3004465, "oid=1094629", -600, -26, 17, -650, -550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1094629", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=1094630", -965, -29, 21, -1015, -915, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1094630", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/night", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 190, -5026);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=1094627", "special", -1, 1);
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
              cm.inGameDirectionEvent_AskAnswerTime(5000);
              cm.effect_Text(["#fn黑体##fs18#同一时刻，翼人军营地某处。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -700, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#总感觉周围有些闹哄哄的。", 37, 3004465, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#就是说啊，可奇怪的是只有这边很安静。", 37, 3004465, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1094628"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1094629"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.npc_setForceFlip("oid=1094628", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645111/Attack1", 100);
                                cm.npc_SetSpecialAction("oid=1094630", "special9", 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645120/Die", 100);
                                  cm.npc_SetSpecialAction("oid=1094628", "die1", 1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=1094628");
                                    cm.npc_LeaveField("oid=1094628");
                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645120/Die", 100);
                                    cm.npc_SetSpecialAction("oid=1094629", "die1", 1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=1094629");
                                      cm.npc_LeaveField("oid=1094629");
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1094630", 1, 200, 150);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#是这边吗。", 37, 3004430, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=1094630", 1, 300, 150);
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
                                                  cm.npc_LeaveField("oid=1094630");
                                                  cm.npc_LeaveField("oid=1094630");
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -60, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(3004430, "oid=1098432", -270, -29, 8, -320, -220, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=1098432", "summon", 0, 0);
                                                    cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face4#团……长……？", 37, 3004430, false, true);
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
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#（这魔法阵是……？）", 37, 3004430, false, true);
                                                            cm.effect_Voice("Voice5.img/CH3/4_2", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.onSetNpcScript("oid=1094627", 1, ['special6', "special7"], [1, -1]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1098432"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#塞伦……你还活着。", 37, 3004456, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH3/4_1", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你是一个人来到这里的吗？", 37, 3004456, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH3/4_3", 128);
                                                                        cm.Npc_Fadeout("oid=1093843", 0, 500);
                                                                        cm.Npc_Fadeout("oid=1099941", 0, 500);
                                                                        cm.npc_LeaveField("oid=1090869");
                                                                        cm.npc_LeaveField("oid=1093843");
                                                                        cm.npc_LeaveField("oid=1099941");
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#为了让我顺利潜入，其他人负责去引开敌人了。", 37, 3004430, false, true);
                                                                            cm.effect_Voice("Voice5.img/CH3/4_4", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#我刚才听见周边闹哄哄的，原来是这个原因。", 37, 3004456, false, true);
                                                                                cm.effect_Voice("Voice5.img/CH3/4_5", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#虽说是深夜突袭……\r\n但能把翼人军中心阵地搅得鸡犬不宁的……就只有那个人了。", 37, 3004456, false, true);
                                                                                    cm.effect_Voice("Voice5.img/CH3/4_6", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我说的是对抗者。", 37, 3004456, false, true);
                                                                                        cm.effect_Voice("Voice5.img/CH3/4_7", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#你……都知道吗？", 37, 3004430, true, true);
                                                                                          cm.effect_Voice("Voice5.img/CH3/4_8", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#原先我琢磨着，要是开展营救作战的话，#b对抗者#k会亲自来找我。", 37, 3004456, false, true);
                                                                                              cm.effect_Voice("Voice5.img/CH3/4_9", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.onSetNpcScript("oid=1094627", 1, ["special2", 'special3'], [1, -1]);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/magicGone", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.setNpcSpecialActionReset("oid=1094627");
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1098432"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#（这魔法阵难道不是用来拘禁的吗？！）", 37, 3004430, false, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/4_11", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_ChangeController(3004465, "oid=1108757", 1106, 14, 36, 1056, 1156, 1, true, 1000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=1108757", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(3004465, "oid=1108758", 996, 14, 33, 946, 1046, 1, true, 1000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=1108758", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(3004465, "oid=1108759", 897, 14, 34, 847, 947, 1, true, 1000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=1108759", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(3004465, "oid=1108760", 897, 14, 34, 847, 947, 1, true, 1000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=1108760", 'summon', 0, 0);
                                                                                                      cm.npc_ChangeController(3004465, "oid=1108761", 897, 14, 34, 847, 947, 1, true, 1000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=1108761", "summon", 0, 0);
                                                                                                      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1098432"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                        cm.onSetNpcScript("oid=1098432", 1, ["special10", "special8"], [1, -1]);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#嗬……", 37, 3004430, false, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_10", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#结果，连你也与他们勾结了吗？", 37, 3004430, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH3/4_12", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#你这么说我可不爱听。\r\n确切来说……是我利用了他们。", 37, 3004456, false, true);
                                                                                                                cm.effect_Voice("Voice5.img/CH3/4_13", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#利用了他们？", 37, 3004430, false, true);
                                                                                                                    cm.effect_Voice("Voice5.img/CH3/4_14", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我们失去的天族之力。是这些人帮我找回了那股力量。", 37, 3004456, true, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH3/4_15", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#虽然尚未完成，但只要协助交换#b对抗者#k，\r\n这股力量就能圆满了。", 37, 3004456, false, true);
                                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_16", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4000, 0, 0, 75);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/6", "oid=1094627"], [0, -10, -15, 1, 0, 1, 0, 0]);
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/shinging", 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.setNpcSpecialActionReset("oid=1098432");
                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -60, 0);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#标志……？！！", 37, 3004430, false, true);
                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_17", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你知道吗塞伦，我至今才醒悟。", 37, 3004456, false, true);
                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/4_18", 128);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我们缺少的是殷切的心。\r\n尽管口口声声说要找回失去的光芒，可一直以来只是在等待而已。", 37, 3004456, true, true);
                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/4_19", 128);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在，我不会再继续等待了。", 37, 3004456, true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/4_20", 128);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -160, 0);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_SetForceMove("oid=1094627", -1, 90, 100);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我要成为圣剑的主人。", 37, 3004456, false, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/4_21", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#是时候该扫清这片大地上所有不信神者和异教徒。\r\n建立真正的神之城市了。", 37, 3004456, true, true);
                                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/4_22", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#你要……扫清他们？", 37, 3004430, true, true);
                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/4_23", 128);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004456, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你怎么了，塞伦？你犹豫了？", 37, 3004456, true, true);
                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/4_24", 128);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.onSetNpcScript("oid=1094627", 1, ['special8', 'special9'], [1, -1]);
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#……", 37, 3004430, false, true);
                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_25", 128);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#你该不会已经忘记了被火焚烧的故乡，和那些死去的战友吧。", 37, 3004456, true, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/4_26", 128);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我从未忘记过。", 37, 3004430, false, true);
                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/4_27", 128);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#但是……", 37, 3004430, true, true);
                                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/4_28", 128);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/9", "oid=1094627"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1098432"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1094627"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.npc_ChangeController(3004431, "oid=1112425", -570, -16, 17, -620, -520, 0, true, 0, false);
                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=1112425", 'summon', 0, 0);
                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=1112425", "special2", -1, 1);
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1500, 100, -358, 0);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.npc_setForceFlip("oid=1098432", -1);
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#！", 37, 3004430, false, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#伊黛娜！等一等……！", 37, 3004430, true, true);
                                                                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/4_29", 128);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1500, 100, -160, 0);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/10", "oid=1094627"], [0, -10, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=1094627", 'special4', -1, 1);
                                                                                                                                                                                                    cm.userSetFieldFloating(993151009, 3, 3, 5);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.userSetFieldFloating(993151009, 0, 0, 0);
                                                                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm53/BattleOfCernium", 0, 0);
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#对不起，这回不能听你的。", 37, 3004431, false, true);
                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/4_30", 128);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#咳，卑贱的不信神之人……", 37, 3004456, true, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH3/4_31", 128);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#你觉悟……", 37, 3004456, true, true);
                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_33", 128);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/10", "oid=1094627"], [0, -30, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                            cm.userSetFieldFloating(993151009, 3, 3, 5);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.userSetFieldFloating(993151009, 0, 0, 0);
                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                                                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/10", "oid=1094627"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                              cm.userSetFieldFloating(993151009, 3, 3, 5);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.userSetFieldFloating(993151009, 0, 0, 0);
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/10", "oid=1094627"], [0, 30, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                cm.userSetFieldFloating(993151009, 5, 5, 5);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.userSetFieldFloating(993151009, 0, 0, 0);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=1112425", "special3", -1, 1);
                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#呃……", 37, 3004456, false, true);
                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/4_35", 128);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1500, 100, -358, 0);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#哼。真啰嗦。", 37, 3004431, false, true);
                                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/4_34", 128);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#在那里！！包围他们！！", 37, 3004465, false, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#走，我们快逃吧。", 37, 3004431, false, true);
                                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/4_36", 128);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#可、可是，他……", 37, 3004430, true, true);
                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/4_37", 128);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##h0#！后面就拜托你了！可以的话，把标志也带回来！", 37, 3004431, true, true);
                                                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/4_38", 128);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.Npc_Fadeout("oid=1098432", 0, 500);
                                                                                                                                                                                                                                        cm.Npc_Fadeout("oid=1112425", 0, 500);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -475, -17);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1094627"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1094627");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1094627");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1098432");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1098432");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108757");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108757");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108758");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108758");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108759");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108759");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108760");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108760");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108761");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1108761");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1112425");
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=1112425");
                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                var O = cm.getEventManager("荣耀_被选中之人_营地围剿");
                                                                                                                                                                                                                                                O.startInstance(cm.getPlayer());
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
                }
              }
            }
          }
        }
      }
    }
  }
}