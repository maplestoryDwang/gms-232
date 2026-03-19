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
      cm.npc_ChangeController(9400583, "oid=202227", -14, -1, 6, -64, 36, 1, true, false);
      cm.npc_ChangeController(9400584, "oid=202228", 35, 6, 6, -15, 85, 1, true, false);
      cm.npc_ChangeController(9400617, "oid=202229", -513, -48, 3, -563, -463, 1, true, false);
      cm.npc_ChangeController(9400618, 'oid=202230', -375, -46, 4, -425, -325, 0, true, false);
      cm.npc_ChangeController(9400596, "oid=202231", -448, -48, 3, -498, -398, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202232", -647, -49, 2, -697, -597, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202233", -701, -52, 2, -751, -651, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceStartQuest(64060, '');
      cm.forceStartQuest(64151, '');
      cm.npc_ChangeController(9400599, "oid=3711613", 1200, 50, 12, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711613", "summon", 0, 0);
      cm.npc_ChangeController(9400598, "oid=3711614", 1150, 50, 12, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711614", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=3711615", 920, 50, 11, 870, 970, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711615", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=3711616", 820, 50, 11, 770, 870, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711616", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=3711617", 730, 50, 10, 680, 780, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711617", "summon", 0, 0);
      cm.forceStartQuest(64163, '');
      cm.npc_ChangeController(9400582, "oid=3711618", 480, 40, 8, 430, 530, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711618", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=3711619", 420, 40, 8, 370, 470, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711619", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=3711620", 340, 20, 7, 290, 390, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711620", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=3711621", 290, 10, 7, 240, 340, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711621", "summon", 0, 0);
      cm.npc_ChangeController(9400678, "oid=3711622", 170, 10, 7, 120, 220, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711622", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=3711623", -80, -20, 6, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711623", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3711624", -150, -50, 5, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711624", 'summon', 0, 0);
      cm.npc_ChangeController(9400589, "oid=3711625", -290, -50, 4, -340, -240, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711625", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [2000, 920, -90, 0, 0]);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3711615", 1, 120, 80);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=3711615", -1);
                cm.sendNormalTalk_Bottom("#face0#就是这里。", 37, 9400597, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=3711616", -1);
                  cm.npc_setForceFlip("oid=3711621", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=3711617", -1);
                    cm.npc_setForceFlip("oid=3711619", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=3711618", -1);
                      cm.npc_setForceFlip("oid=3711620", -1);
                      cm.npc_setForceFlip("oid=3711621", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=3711616", 1);
                        cm.npc_setForceFlip("oid=3711619", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=3711617", 1);
                          cm.npc_setForceFlip("oid=3711618", 1);
                          cm.npc_setForceFlip("oid=3711621", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=3711616", -1);
                            cm.sendNewEffects(17, [0, 1000, 2000, -620, 50]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(17, [0, 2000, 2000, 1550, -80]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(17, [0, 2000, 1000, 800, -90]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3711616"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3711617"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3711619"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#比起雪原正中央，这可算是豪华了啊！", 37, 9400597, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#这难道是给动物的窝吗？", 37, 9400581, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=3711616", 1);
                                                      cm.npc_setForceFlip("oid=3711619", 1);
                                                      cm.npc_setForceFlip("oid=3711620", 1);
                                                      cm.npc_setForceFlip("oid=3711621", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，虽然有时候也那么用……但是！你们也看到了，现在这里一只动物也没有啊？", 37, 9400597, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=3711616", -1);
                                                          cm.npc_setForceFlip("oid=3711621", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=3711617", -1);
                                                            cm.npc_setForceFlip("oid=3711619", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=3711618", -1);
                                                              cm.npc_setForceFlip("oid=3711620", -1);
                                                              cm.npc_setForceFlip("oid=3711621", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=3711616", 1);
                                                                cm.npc_setForceFlip("oid=3711619", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=3711617", 1);
                                                                  cm.npc_setForceFlip("oid=3711618", 1);
                                                                  cm.npc_setForceFlip("oid=3711621", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=3711619", 1);
                                                                    cm.sendNormalTalk_Bottom("#face0#我先走了，你们就把这当做是自己家~~~好好休息吧！", 37, 9400597, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=3711615", 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=3711615", 1, 800, 100);
                                                                          cm.sendNewEffects(12, [3000, 1200, -90, 0, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=3711613", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=3711613", 1, 700, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=3711614", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=3711614", 1, 50, 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=3711614", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=3711614", 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=3711614", 1, 500, 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNewEffects(12, [1000, 650, -90, 0, 0]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=3711616", -1);
                                                                                              cm.sendNormalTalk_Bottom("#face0#只是有了个栅栏而已……这还不如被烧毁的卡夫塔佩啊……", 37, 9400587, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……如果我早知道会这样……", 37, 9400587, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNewEffects(12, [0, -200, -90, 0, 0]);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在没时间后悔了，反正有高大的木栅栏挡着点风，不用太担心。", 37, 9400589, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNewEffects(12, [0, 650, -90, 0, 0]);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b先把顶上搭起来，准备休息的地方吧。", 57, 0, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=3711616", 1);
                                                                                                            cm.npc_SetForceMove("oid=3711616", 1, 300, 80);
                                                                                                            cm.npc_setForceFlip("oid=3711620", -1);
                                                                                                            cm.npc_SetForceMove("oid=3711620", -1, 300, 80);
                                                                                                            cm.npc_setForceFlip("oid=3711621", -1);
                                                                                                            cm.npc_SetForceMove("oid=3711621", -1, 300, 80);
                                                                                                            cm.npc_setForceFlip("oid=3711622", -1);
                                                                                                            cm.npc_SetForceMove("oid=3711622", -1, 300, 80);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=3711619", -1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=3711619", -1, 300, 70);
                                                                                                                cm.npc_LeaveField("oid=3711615");
                                                                                                                cm.npc_LeaveField("oid=3711615");
                                                                                                                cm.npc_LeaveField("oid=3711613");
                                                                                                                cm.npc_LeaveField("oid=3711613");
                                                                                                                cm.npc_setForceFlip("oid=3711614", -1);
                                                                                                                cm.sendNewEffects(17, [2000, 1000, 2000, 715, 120]);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=3711617", -1);
                                                                                                                    cm.npc_SetForceMove("oid=3711624", 1, 710, 300);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                    cm.effect_NormalSpeechBalloon("通讯兵！", 0, 0, 0, 2000, 9400581, cm.getPlayer().getId());
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      cm.effect_NormalSpeechBalloon("是，副团长。", 0, 0, 0, 2000, 9400585, cm.getPlayer().getId());
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你去通知总部我们现在的位置，然后再次确认下支援兵力出发了没有。", 37, 9400581, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('是！', 37, 9400585, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=3711624", -1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=3711624", -1, 600, 200);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#……这真是越来越往深山老林走了……如果一不小心……", 37, 9400581, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_setForceFlip("oid=3711617", -1);
                                                                                                                                  cm.npc_SetForceMove("oid=3711617", -1, 500, 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                    cm.sendNewEffects(12, [1000, 550, 120, 0, 0]);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#果然，我就说这世界总是会超出你的想象，对吧？", 37, 9400582, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#这之前我们有谁能想到得在动物圈舍里搭棚子睡觉？", 37, 9400582, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b是啊，本来大家都以为到了这儿就能在温暖的屋子里休息的……", 57, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#巴特勒副团长也肯定很郁闷，如果就这么凄惨地失败而归，他肯定会骂我的。", 37, 9400582, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……等下，艾丽卡也会骂人的吧？", 37, 9400582, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#b还没结束呢。我们先让事态平静下来，完成必要的调查就可以了。", 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#很好！非常好！和我一起去亚皮纳斯吧？你已经合格了！", 37, 9400582, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#等下，这么说来，为什么总部一直迟迟没派援军过来？", 37, 9400582, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b难道是能派遣的人力不足？", 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你把我们亚皮纳斯当成什么了？常驻总部的兵力就有好几千，如果没发生战争，就不可能会兵力不足。", 37, 9400582, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#b……嗯", 57, 0, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#算了，不管了，我还是去整理下艾丽卡那边的顶棚吧，待会见！", 37, 9400582, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=3711618", -1);
                                                                                                                                                                cm.npc_SetForceMove("oid=3711618", -1, 300, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_LeaveField("oid=3711617");
                                                                                                                                                                  cm.npc_LeaveField("oid=3711617");
                                                                                                                                                                  cm.npc_LeaveField("oid=3711616");
                                                                                                                                                                  cm.npc_LeaveField("oid=3711616");
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNewEffects(12, [3000, 1500, 120, 0, 0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3711614"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.forceCompleteQuest(64060);
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.warp(867201012, 2, true);
                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                          cm.npc_LeaveField("oid=3711614");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711614");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711618");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711618");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711619");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711619");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711620");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711620");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711621");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711621");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711622");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711622");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711623");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711623");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711624");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711624");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711625");
                                                                                                                                                                          cm.npc_LeaveField("oid=3711625");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;