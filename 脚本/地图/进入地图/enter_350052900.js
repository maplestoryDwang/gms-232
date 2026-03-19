var status = -1;
var selectionLog = [];
function action(H, j, A) {
  if (status == 0 && H == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = A;
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status === r++) {
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
      cm.forceCompleteQuest(33272);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1700, 0, 1200, 200);
      cm.curNodeEventEnd(true);
      cm.gainItem(4009324, -1);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === r++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === r++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 1700, 3000, 1100, 200);
        } else {
          if (status === r++) {
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === r++) {
              cm.npc_ChangeController(1540451, "oid=284493626", 1135, 94, 18, 1085, 1185, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=284493626", 'summon', 0, 0);
              cm.npc_SetForceMove("oid=284493626", -1, 150, 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === r++) {
                cm.npc_ChangeController(1540452, "oid=284493630", 1135, 94, 18, 1085, 1185, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=284493630", "summon", 0, 0);
                cm.npc_SetForceMove("oid=284493630", -1, 100, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === r++) {
                  cm.npc_ChangeController(1540453, "oid=284495584", 1135, 94, 18, 1085, 1185, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=284495584", "summon", 0, 0);
                  cm.npc_SetForceMove("oid=284495584", -1, 70, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === r++) {
                    cm.npc_ChangeController(1540611, "oid=284496330", 1135, 94, 18, 1085, 1185, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=284496330", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=284496330", -1, 50, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === r++) {
                      cm.npc_ChangeController(1540612, "oid=284496335", 1135, 94, 18, 1085, 1185, 0, true, 0, false);
                      cm.npc_SetSpecialAction("oid=284496335", "summon", 0, 0);
                      cm.npc_SetForceMove("oid=284496335", -1, 30, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === r++) {
                        cm.npc_ChangeController(1540490, "oid=284497307", 400, 190, 14, 350, 450, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=284497307", "summon", 0, 0);
                        cm.npc_ChangeController(1540460, "oid=284497308", 450, 190, 14, 400, 500, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=284497308", "summon", 0, 0);
                        cm.sendNormalTalk_Bottom("这条路没错！\r\n请相信我，奥尔卡。", 37, 1540460, false, true);
                      } else {
                        if (status === r++) {
                          cm.sendNormalTalk_Bottom("你从刚刚开始就在说同样的话！", 37, 1540490, true, true);
                        } else {
                          if (status === r++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284496335"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284496330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284493630"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284493626"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284495584"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.npc_SetForceMove("oid=284497307", -1, 350, 100);
                            cm.npc_SetForceMove("oid=284497308", -1, 280, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === r++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1700, 300, 300, 200);
                            } else {
                              if (status === r++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === r++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 630);
                                  cm.npc_SetForceMove("oid=284493626", -1, 550, 100);
                                  cm.npc_SetForceMove("oid=284493630", -1, 570, 100);
                                  cm.npc_SetForceMove("oid=284495584", -1, 600, 120);
                                  cm.npc_SetForceMove("oid=284496330", -1, 550, 100);
                                  cm.npc_SetForceMove("oid=284496335", -1, 530, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === r++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1700, 3000, 200, 200);
                                  } else {
                                    if (status === r++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2300);
                                    } else {
                                      if (status === r++) {
                                        cm.npc_setForceFlip("oid=284497308", 1);
                                        cm.npc_SetForceMove("oid=284497308", -1, 50, 100);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284497308"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === r++) {
                                          cm.npc_SetForceMove("oid=284497307", 1, 100, 100);
                                          cm.sendNormalTalk_Bottom("唉，碰到了麻烦的家伙……！", 37, 1540460, false, true);
                                        } else {
                                          if (status === r++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === r++) {
                                              cm.sendNormalTalk_Bottom("什么啊，这不是联盟的傻瓜们吗？", 37, 1540490, false, true);
                                            } else {
                                              if (status === r++) {
                                                cm.sendNormalTalk_Bottom("奥尔卡？\r\n你不是应该待在病房吗，怎么会在这里？！", 37, 1540453, true, true);
                                              } else {
                                                if (status === r++) {
                                                  cm.sendNormalTalk_Bottom("哼。你觉得我会一直待在那种简陋的地方？", 37, 1540490, true, true);
                                                } else {
                                                  if (status === r++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284497307"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === r++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(100, 3500, 0, 250, 230);
                                                    } else {
                                                      if (status === r++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === r++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(100, 1700, 0, 200, 200);
                                                        } else {
                                                          if (status === r++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === r++) {
                                                              cm.sendNormalTalk_Bottom("你……你！！", 37, 1540490, false, true);
                                                            } else {
                                                              if (status === r++) {
                                                                cm.npc_setForceFlip("oid=284497308", 0);
                                                                cm.npc_SetForceMove("oid=284497308", 1, 20, 50);
                                                                cm.sendNormalTalk_Bottom("话说#h0#那家伙！\r\n奥尔卡你也认识吗？", 37, 1540460, true, true);
                                                              } else {
                                                                if (status === r++) {
                                                                  cm.sendNormalTalk_Bottom("#fs20#那家伙就是偷看奥尔卡内在的家伙！", 37, 1540490, true, true);
                                                                } else {
                                                                  if (status === r++) {
                                                                    cm.sendNormalTalk_Bottom("居然敢偷看奥尔卡……从未向其他人展现的……！！！", 37, 1540490, true, true);
                                                                  } else {
                                                                    if (status === r++) {
                                                                      cm.sendNormalTalk_Bottom("……你究竟看了什么，#h0#？", 37, 1540451, true, true);
                                                                    } else {
                                                                      if (status === r++) {
                                                                        cm.sendNormalTalk_Bottom("……#h0#是变态……？", 37, 1540452, true, true);
                                                                      } else {
                                                                        if (status === r++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                        } else {
                                                                          if (status === r++) {
                                                                            cm.sendNormalTalk_Bottom("这是误会。我只是看了她的记……", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === r++) {
                                                                              cm.sendNormalTalk_Bottom("不要再说了！你究竟看到了多少！！", 37, 1540490, true, true);
                                                                            } else {
                                                                              if (status === r++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                              } else {
                                                                                if (status === r++) {
                                                                                  cm.sendNormalTalk_Bottom("我绝不能饶恕你！\r\n#fs20#弗朗西斯，干掉那家伙！！", 37, 1540490, false, true);
                                                                                } else {
                                                                                  if (status === r++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === r++) {
                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === r++) {
                                                                                        cm.sendNormalTalk_Bottom("那个……那家伙非常强大。", 37, 1540460, false, true);
                                                                                      } else {
                                                                                        if (status === r++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284497307"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284496335"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284496330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284493630"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284493626"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=284495584"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                        } else {
                                                                                          if (status === r++) {
                                                                                            cm.sendNormalTalk_Bottom("等等，我们真正的敌人是格里梅尔。\r\n我们没必要在这里浪费战斗力。", 37, 1540451, false, true);
                                                                                          } else {
                                                                                            if (status === r++) {
                                                                                              cm.sendNormalTalk_Bottom("搞什么，真是可笑。\r\n你是说我们联手吗？奥尔卡要怎么信任你们啊？", 37, 1540490, true, true);
                                                                                            } else {
                                                                                              if (status === r++) {
                                                                                                cm.sendNormalTalk_Bottom("……这样啊。现在该怎么做呢，#h0#？", 37, 1540451, true, true);
                                                                                              } else {
                                                                                                if (status === r++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(100, 3500, 0, 250, 230);
                                                                                                } else {
                                                                                                  if (status === r++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                  } else {
                                                                                                    if (status === r++) {
                                                                                                      cm.askMenu_Bottom("#g#fs20#该怎么做呢？#k#fs17#\r\n#L1#击退奥尔卡#l\r\n#L2#说服奥尔卡#l", 37, 1540451);
                                                                                                    } else {
                                                                                                      if (status === r++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(100, 1700, 0, 200, 200);
                                                                                                      } else {
                                                                                                        if (status === r++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                        } else {
                                                                                                          if (status === r++) {
                                                                                                            cm.sendNormalTalk_Bottom("没错。反正就算联手，也不会对我们有什么帮助。", 37, 1540451, false, true);
                                                                                                          } else {
                                                                                                            if (status === r++) {
                                                                                                              cm.sendNormalTalk_Bottom("哼，你们也太自说自话了吧？\r\n我先提前告诉你们，我无论如何，都要把斯乌变回原来的样子。", 37, 1540490, true, true);
                                                                                                            } else {
                                                                                                              if (status === r++) {
                                                                                                                cm.sendNormalTalk_Bottom("……你这想法真是愚蠢。\r\n#r那东西#k已经不再是具备人格的人了。", 37, 1540451, true, true);
                                                                                                              } else {
                                                                                                                if (status === r++) {
                                                                                                                  cm.sendNormalTalk_Bottom("更何况，斯乌的肉体目前正在为格里梅尔所操控。\r\n如果你见到他，他肯定会再次攻击你的。", 37, 1540451, true, true);
                                                                                                                } else {
                                                                                                                  if (status === r++) {
                                                                                                                    cm.sendNormalTalk_Bottom("闭嘴！\r\n你们了解斯乌吗，凭什么这么说？！", 37, 1540490, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === r++) {
                                                                                                                      cm.npc_ChangeController(1540497, "oid=284510734", 242, 170, 13, 192, 292, 1, false, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=284510734", "summon", 0, 0);
                                                                                                                      cm.npcMove(1540497, 0, -100, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === r++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                                                                                                                        cm.npc_SetSpecialAction("oid=284510734", "appear", -1, 1);
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1700, 2000, 250, 170);
                                                                                                                      } else {
                                                                                                                        if (status === r++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284497307"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284497308"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284496335"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284496330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284493630"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284493626"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284495584"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/gel/5_2/1", 100);
                                                                                                                        } else {
                                                                                                                          if (status === r++) {
                                                                                                                            cm.npc_SetSpecialAction("oid=284510734", "saying", -1, 1);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#怎么样，奥尔卡？\r\n你对我的力作还满意吗？", 37, 1540470, false, true);
                                                                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/gel/5_2/2", 100);
                                                                                                                          } else {
                                                                                                                            if (status === r++) {
                                                                                                                              cm.sendNormalTalk_Bottom('格里梅尔……！', 37, 1540490, true, true);
                                                                                                                              cm.effect_Voice("Voice3.img/BlackHeaven/orca/5_2/1", 100);
                                                                                                                            } else {
                                                                                                                              if (status === r++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嘻嘻嘻……你的表情非常棒。\r\n你要看看更有趣的东西吗？", 37, 1540470, true, true);
                                                                                                                                cm.effect_Voice("Voice3.img/BlackHeaven/gel/5_2/3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === r++) {
                                                                                                                                  cm.npc_ChangeController(1540496, "oid=284640278", 200, 170, 13, 150, 250, 1, false, 0, false);
                                                                                                                                  cm.npc_SetSpecialAction("oid=284640278", 'summon', 0, 0);
                                                                                                                                  cm.npcMove(1540496, 0, 70, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === r++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=284497307"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                    cm.npc_SetForceMove("oid=284497307", 1, 50, 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === r++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("斯乌！！", 37, 1540490, false, true);
                                                                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/orca/5_2/2", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === r++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#好了，真是感人的重逢啊！\r\n嘻嘻嘻嘻！", 37, 1540470, true, true);
                                                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/gel/5_2/4", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === r++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("格里梅尔……我一定要亲手了结你！", 37, 1540490, true, true);
                                                                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/orca/5_2/3", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === r++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#……确认入侵者。", 37, 1540495, true, true);
                                                                                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/5_2/1", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === r++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("斯乌，振作起来！\r\n奥尔卡来了！", 37, 1540490, true, true);
                                                                                                                                              cm.effect_Voice("Voice3.img/BlackHeaven/orca/5_2/4", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === r++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4##r目标，消灭。#k", 37, 1540495, true, true);
                                                                                                                                                cm.effect_Voice("Voice3.img/BlackHeaven/sw/5_2/2", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === r++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("斯乌！！！", 37, 1540490, true, true);
                                                                                                                                                  cm.effect_Voice("Voice3.img/BlackHeaven/orca/5_2/5", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === r++) {
                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(100, 1200, 2000, 250, 0);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === r++) {
                                                                                                                                                      cm.npc_ChangeController(1540749, "oid=284641138", 200, 180, 13, 150, 250, 1, false, 0, false);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=284641138", "summon", 0, 0);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=284641138", "drop", 0, 1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === r++) {
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240125/Attack1", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === r++) {
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(150, 2500, 1500, 250, 1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === r++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === r++) {
                                                                                                                                                              cm.npc_SetSpecialAction("oid=284497307", "fall", -1, 1);
                                                                                                                                                              cm.npcMove(1540490, 0, 800, 1500);
                                                                                                                                                              cm.emotion(5, 99999);
                                                                                                                                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 245, 205);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/35", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === r++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                cm.npc_LeaveField("oid=284493626");
                                                                                                                                                                cm.npc_LeaveField("oid=284493630");
                                                                                                                                                                cm.npc_LeaveField("oid=284495584");
                                                                                                                                                                cm.npc_LeaveField("oid=284496330");
                                                                                                                                                                cm.npc_LeaveField("oid=284496335");
                                                                                                                                                                cm.npc_LeaveField("oid=284497307");
                                                                                                                                                                cm.npc_LeaveField("oid=284497308");
                                                                                                                                                                cm.npc_LeaveField("oid=284510734");
                                                                                                                                                                cm.npc_LeaveField("oid=284640278");
                                                                                                                                                                cm.npc_LeaveField("oid=284641138");
                                                                                                                                                              } else {
                                                                                                                                                                if (status === r++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("奥尔卡！！", 37, 1540460, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === r++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom('#h0#！！', 37, 1540451, true, true);
                                                                                                                                                                  } else if (status === r++) {
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(350053900, 0, false);
                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350053000");
                                                                                                                                                                    cm.npc_LeaveField("oid=284493626");
                                                                                                                                                                    cm.npc_LeaveField("oid=284493630");
                                                                                                                                                                    cm.npc_LeaveField("oid=284495584");
                                                                                                                                                                    cm.npc_LeaveField("oid=284496330");
                                                                                                                                                                    cm.npc_LeaveField("oid=284496335");
                                                                                                                                                                    cm.npc_LeaveField("oid=284497307");
                                                                                                                                                                    cm.npc_LeaveField("oid=284497308");
                                                                                                                                                                    cm.npc_LeaveField("oid=284510734");
                                                                                                                                                                    cm.npc_LeaveField("oid=284640278");
                                                                                                                                                                    cm.npc_LeaveField("oid=284641138");
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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