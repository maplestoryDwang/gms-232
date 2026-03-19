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
      cm.setNumberForQuestCustomData(33900, 4);
      cm.showMapleHero();
      cm.mapleHeroSetList([4]);
      cm.npc_ChangeController(1540807, "oid=287985157", 330, -80, 2, 280, 380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287985157", "summon", 0, 0);
      cm.npc_ChangeController(1540805, "oid=287985158", 310, -80, 2, 260, 360, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287985158", "summon", 0, 0);
      cm.npc_ChangeController(1540801, "oid=287985159", 410, -50, 2, 360, 460, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287985159", 'summon', 0, 0);
      cm.npc_ChangeController(1540803, "oid=287985160", 370, -170, 13, 320, 420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287985160", 'summon', 0, 0);
      cm.npc_ChangeController(1540804, "oid=287985161", 1170, -170, 14, 1120, 1220, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287985161", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 800, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=287985160", "special2", -1, 1);
        cm.npc_SetSpecialAction("oid=287985161", "special2", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=287985159", 1, 350, 120);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#双弩精灵！一起去吧。", 37, 1540805, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=287985157", 1, 350, 120);
                  cm.npc_SetForceMove("oid=287985158", 1, 350, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#你该不会是因为我生气了吧？", 37, 1540805, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=287985159", -1);
                      cm.sendNormalTalk_Bottom("#face3#在一起去之前，有一点我要先明确。", 37, 1540801, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#弗里德曾是我们的领袖，\r\n你并没有资格成为我们的领袖，\r\n不要强迫我使用你的解决方式。", 37, 1540801, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是！我会记住的。", 37, 1540805, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#……", 37, 1540801, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('为什么啊？', 37, 1540805, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#这就完了？我只有这么说才不至于伤自尊嘛？", 37, 1540801, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#？我原以为这个建议很不错，挺有精灵之王风格的啊？", 37, 1540805, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#哎，厚脸皮这一点倒是挺像，不愧是继承人啊。", 37, 1540801, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#抱歉，我一想到没法再见到弗里德，就莫名把火发到你身上了。", 37, 1540801, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("不要把我说的放在心上，以后一起好好干吧。", 37, 1540801, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#以后也要多多麻烦你了！", 37, 1540805, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=287985158", 1, 10, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Trap_new", 100);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287985159"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287985158"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#啊，还有这附近有很多陷阱，要多加……", 37, 1540801, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=287985157");
                                                        cm.npc_LeaveField("oid=287985157");
                                                        cm.npc_LeaveField("oid=287985158");
                                                        cm.npc_LeaveField("oid=287985158");
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Trap", 100);
                                                        cm.npc_SetSpecialAction("oid=287985159", 'special5', -1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=287985159", "special6", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#哇啊啊！！", 37, 1540805, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#……所以我不是说了嘛。", 37, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 735, -120);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm45/Showtime!", 0, 0);
                                                                    cm.fieldEffect_Hero8(1);
                                                                    cm.fieldEffect_Hero9(40, 3000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 269, 5, 1, 0, 1, 1, 0]);
                                                                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                      cm.npc_ChangeController(1540849, "oid=288008502", 269, 0, 2, 219, 319, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=288008502", 'summon', 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 178, 5, 1, 0, 1, 1, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                        cm.npc_ChangeController(1540849, "oid=288008548", 178, 0, 2, 128, 228, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=288008548", 'summon', 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 178, -255, 1, 0, 1, 1, 0]);
                                                                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                          cm.npc_ChangeController(1540848, "oid=288008589", 178, -303, 22, 128, 228, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=288008589", "summon", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1181, -255, 1, 0, 1, 1, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                            cm.npc_ChangeController(1540848, "oid=288008619", 1181, -303, 24, 1131, 1231, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=288008619", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(70);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1181, 5, 1, 0, 1, 1, 0]);
                                                                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                              cm.npc_ChangeController(1540849, "oid=288008622", 1181, 0, 5, 1131, 1231, 1, true, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=288008622", "summon", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(160);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 85, -255, 1, 0, 1, 1, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                                cm.npc_ChangeController(1540848, "oid=288008623", 85, -303, 22, 35, 135, 0, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=288008623", 'summon', 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 85, 5, 1, 0, 1, 1, 0]);
                                                                                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                                  cm.npc_ChangeController(1540849, "oid=288008661", 85, 0, 1, 35, 135, 0, true, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=288008661", 'summon', 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1347, 5, 1, 0, 1, 1, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                                    cm.npc_ChangeController(1540849, "oid=288008684", 1347, 0, 6, 1297, 1397, 1, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=288008684", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 269, -255, 1, 0, 1, 1, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                                                    cm.npc_ChangeController(1540848, "oid=288008685", 269, -303, 23, 219, 319, 0, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=288008685", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1347, -255, 1, 0, 1, 1, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                                                      cm.npc_ChangeController(1540848, "oid=288009265", 1347, -303, 25, 1297, 1397, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=288009265", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(130);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1257, -255, 1, 0, 1, 1, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                                                        cm.npc_ChangeController(1540848, "oid=288009742", 1257, -303, 25, 1207, 1307, 1, true, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=288009742", 'summon', 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(110);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1257, 5, 1, 0, 1, 1, 0]);
                                                                                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                                                          cm.npc_ChangeController(1540849, "oid=288010034", 1257, 0, 5, 1207, 1307, 1, true, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=288010034", "summon", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#有怪物袭来！赶紧逃出去……", 37, 1540805, false, true);
                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/16", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#等一下！你的手这是往哪儿放！", 37, 1540801, true, true);
                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/17", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#额！那不是我的手！", 37, 1540805, true, true);
                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/18", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2##fs20#这要不是你的手，难不成是米乐的脚吗？！", 37, 1540801, true, true);
                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/19", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#火爆脾气还是一如从前啊，双弩精灵。", 37, 1540803, true, true);
                                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/20", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 370, -100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=287985160", "special", -1, 1);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Phan_appear", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=287985160", "special3", -1, 1);
                                                                                                              cm.sendNormalTalk_Bottom("#face1#幻影！", 37, 1540801, false, true);
                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/21", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("就是因为不注意脚下，才会中了那种陷阱。", 37, 1540804, false, true);
                                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/22", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 1170, -100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=287985161", 'special', -1, 1);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Lumi_appear", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=287985161", "special3", -1, 1);
                                                                                                                          cm.sendNormalTalk_Bottom('夜光法师！！', 37, 1540805, false, true);
                                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/23", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("木头，我们要不要打个赌，看谁消灭得更多？", 37, 1540803, true, true);
                                                                                                                            cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/24", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我可不打算陪你玩这种幼稚的游戏，先集中注意力在眼前的敌人上吧！", 37, 1540804, true, true);
                                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES/25", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_Hero9(100, 1000);
                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 735, -120);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.askMenu_Bottom("要用谁进行游戏呢？\r\n#b#L0#幻影#l\r\n#L1#夜光法师#l", 37, 1540795);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.updateInfoQuest(33970, "check2=1;check4=1;check5=1;check=1");
                                                                                                                                        cm.updateInfoQuest(33966, "ph=1;break=21;kill=1");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(350121200 + e * 100, 0, false);
                                                                                                                                        cm.npc_LeaveField("oid=287985159");
                                                                                                                                        cm.npc_LeaveField("oid=287985159");
                                                                                                                                        cm.npc_LeaveField("oid=287985160");
                                                                                                                                        cm.npc_LeaveField("oid=287985160");
                                                                                                                                        cm.npc_LeaveField("oid=287985161");
                                                                                                                                        cm.npc_LeaveField("oid=287985161");
                                                                                                                                        cm.npc_LeaveField("oid=288008502");
                                                                                                                                        cm.npc_LeaveField("oid=288008502");
                                                                                                                                        cm.npc_LeaveField("oid=288008548");
                                                                                                                                        cm.npc_LeaveField("oid=288008548");
                                                                                                                                        cm.npc_LeaveField("oid=288008589");
                                                                                                                                        cm.npc_LeaveField("oid=288008589");
                                                                                                                                        cm.npc_LeaveField("oid=288008619");
                                                                                                                                        cm.npc_LeaveField("oid=288008619");
                                                                                                                                        cm.npc_LeaveField("oid=288008622");
                                                                                                                                        cm.npc_LeaveField("oid=288008622");
                                                                                                                                        cm.npc_LeaveField("oid=288008623");
                                                                                                                                        cm.npc_LeaveField("oid=288008623");
                                                                                                                                        cm.npc_LeaveField("oid=288008661");
                                                                                                                                        cm.npc_LeaveField("oid=288008661");
                                                                                                                                        cm.npc_LeaveField("oid=288008684");
                                                                                                                                        cm.npc_LeaveField("oid=288008684");
                                                                                                                                        cm.npc_LeaveField("oid=288008685");
                                                                                                                                        cm.npc_LeaveField("oid=288008685");
                                                                                                                                        cm.npc_LeaveField("oid=288009265");
                                                                                                                                        cm.npc_LeaveField("oid=288009265");
                                                                                                                                        cm.npc_LeaveField("oid=288009742");
                                                                                                                                        cm.npc_LeaveField("oid=288009742");
                                                                                                                                        cm.npc_LeaveField("oid=288010034");
                                                                                                                                        cm.npc_LeaveField("oid=288010034");
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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