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
      cm.npc_ChangeController(9400597, "oid=204587", -357, -65, 18, -407, -307, 1, true, false);
      cm.npc_ChangeController(9400590, "oid=204588", -472, -65, 18, -522, -422, 0, true, false);
      cm.npc_ChangeController(9400591, "oid=204589", -55, 88, 11, -105, -20, 1, true, false);
      cm.npc_ChangeController(9400593, "oid=204590", -134, 96, 11, -184, -84, 0, true, false);
      cm.npc_ChangeController(9400584, "oid=204591", 191, 78, 29, 141, 241, 1, true, false);
      cm.npc_ChangeController(9400638, "oid=204592", 244, -175, 36, 194, 294, 0, true, false);
      cm.npc_ChangeController(9400639, "oid=204593", 399, -175, 37, 349, 449, 1, true, false);
      cm.npc_ChangeController(9400629, "oid=204594", 861, 11, 33, 811, 911, 1, true, false);
      cm.npc_ChangeController(9400632, 'oid=204595', 759, 10, 33, 709, 809, 0, true, false);
      cm.npc_ChangeController(9400620, "oid=204596", 1166, 13, 33, 1116, 1216, 0, true, false);
      cm.npc_ChangeController(9400622, 'oid=204597', 1233, 14, 33, 1183, 1283, 0, true, false);
      cm.npc_ChangeController(9400585, "oid=204598", 446, 48, 31, 396, 496, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400587, "oid=7563395", -990, 70, 6, -1040, -940, 0, true, false);
      cm.npc_SetSpecialAction("oid=7563395", "summon", 0, 0);
      cm.npc_ChangeController(9400602, "oid=7563396", -1050, 70, 6, -1100, -1000, 0, true, false);
      cm.npc_SetSpecialAction("oid=7563396", 'summon', 0, 0);
      cm.forceStartQuest(64168, 'sad');
      cm.npc_ChangeController(9400582, "oid=7563397", -1100, 70, 6, -1150, -1050, 0, true, false);
      cm.npc_SetSpecialAction("oid=7563397", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7563398", -1210, 70, 5, -1260, -1160, 0, true, false);
      cm.npc_SetSpecialAction("oid=7563398", "summon", 0, 0);
      cm.npc_ChangeController(9400586, "oid=7563399", -600, 80, 9, -650, -550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7563399", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=7563400", -600, 80, 9, -650, -550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7563400", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7563401", 1450, 0, 33, 1400, 1500, 1, true, false);
      cm.npc_SetSpecialAction("oid=7563401", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -1050, 110]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=7563399", -1, 170, 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("艾伊纳尔！你还好么？让你辛苦了…", 37, 9400586, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face0#婆婆…', 37, 9400602, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7563396", 1, 100, 50);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("来来，肯定很累了吧。去冲个澡，好好休息吧，一切都结束了。", 37, 9400586, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#朱…朱莉埃塔…朱莉埃塔…", 37, 9400602, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("朱莉埃塔？", 37, 9400586, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=7563396", 1, 40, 50);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#朱莉埃塔……", 37, 9400602, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7563400", -1, 320, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("爸爸！艾丽卡姐姐！勇士！", 37, 9400588, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7563396", -1);
                                    cm.sendNormalTalk_Bottom("爸爸，你还好吗？！", 37, 9400588, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是爸爸消灭了怪物吗？！太了不起了！\r\n你妈妈会回来吗？！", 37, 9400588, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7563396"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=7563396", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(17, [3000, 2000, 2000, -420, -65]);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  cm.effect_NormalSpeechBalloon("喂喂，原来你还活着啊？是躲在一边再出来的吧？呵呵", 0, 0, 0, 2000, 9400590, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    cm.effect_NormalSpeechBalloon("开什么玩笑？你不知道我消灭了多少只怪物！你顶多也躲在后边射几个弓箭吧？", 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(17, [3000, 2000, 2000, -99, 85]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          cm.effect_NormalSpeechBalloon("妈妈！结束了吗？", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            cm.effect_NormalSpeechBalloon("我们可以回家了吗？", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              cm.effect_NormalSpeechBalloon("当然，哈瓦尔。我们可以回家了…", 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNewEffects(17, [3000, 2000, 2000, 310, -180]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    cm.effect_NormalSpeechBalloon("我们的实力果然很厉害！在那混乱之中，也没有几个倒塌的建筑！", 1, 0, 0, 2000, 9400638, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      cm.effect_NormalSpeechBalloon("是啊！太了不起了！新的弩炮效果也不一般！", 1, 0, 0, 2000, 9400639, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(17, [3000, 2000, 2000, 800, 10]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            cm.effect_NormalSpeechBalloon("谢谢你刚才帮了我。", 1, 0, 0, 2000, 9400629, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              cm.effect_NormalSpeechBalloon("吼吼，彼此彼此。我们好像配合的不错？", 1, 0, 0, 2000, 9400632, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                cm.effect_NormalSpeechBalloon("要不改天我们一起出去打猎吧。", 1, 0, 0, 2000, 9400629, cm.getPlayer().getId());
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(17, [3000, 2000, 2000, 1300, 10]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=7563401", -1, 150, 70);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      cm.effect_NormalSpeechBalloon('吉莉，你平安无事啊！', 1, 0, 0, 2000, 9400620, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        cm.effect_NormalSpeechBalloon('先把伤者送过去。', 1, 0, 0, 2000, 9400583, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                          cm.effect_NormalSpeechBalloon('是！吉莉！', 1, 0, 0, 2000, 9400622, cm.getPlayer().getId());
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNewEffects(17, [0, 2000, 2000, -1050, 110]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#face0#…', 37, 9400602, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("怎么了，艾伊纳尔？能告诉我是什么事吗？", 37, 9400586, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#不…没什么… ", 37, 9400602, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=7563396", 1, 1000, 30);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=7563399", 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#…没什么…", 37, 9400602, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=7563399", 1, 1000, 25);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#没什么…什么也不是…", 37, 9400602, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#…什么…也… 不是…", 37, 9400602, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=7563397", 1, 30, 50);
                                                                                                                      cm.npc_setForceFlip("oid=7563400", 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#要不要跟过去一个人？", 37, 9400580, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#b不，让他… 一个人静一下。", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=7563400", -1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=7563400"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("他在说什么？", 37, 9400588, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#… 什么也不是。", 37, 9400587, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetForceMove("oid=7563395", 1, 1000, 50);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=7563400", 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=7563400", 1, 1000, 45);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#凯恩，你能回避一下吗？", 37, 9400580, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#… 好吧。", 37, 9400582, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=7563397", 1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=7563397", 1, 1000, 50);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400580, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你还记得我说过的在森林里做的梦吗？", 37, 9400580, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#b记得，在森林里逃跑… ", 57, 0, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#对，在森林里逃跑的少女和躺在雪地里的少女。", 37, 9400580, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我不知道那两个少女是不是一个人。", 37, 9400580, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#…但是还有一件事我没来得及告诉你… ", 37, 9400580, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#布兰茜，就是莎娜安的孙女，她就是我梦里所见到的那个少女。", 37, 9400580, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b布兰茜？！", 57, 0, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#对… 我敢肯定。黝黑的皮肤黑色的长发，就是照片里的那个少女。", 37, 9400580, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b… 布兰茜怎么会出现在艾丽卡的梦里…？", 57, 0, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#还不止如此… ", 37, 9400580, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#朱莉埃塔… 就是在怪兽里边的那个柔弱少女，就是躺在雪地里的那个少女。", 37, 9400580, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom('#b…？！', 57, 0, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##h0#！你以前说过你知道绑架的幕后黑手吧？", 37, 9400580, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b虽不太确定，但是一定要找到。", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#那我也一起去。", 37, 9400580, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这分明是少女们发给我的求救信号。朱莉埃塔… 朱莉埃塔就这么消失了，但是布兰茜说不定还活着！", 37, 9400580, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#还有，其他消失的阿布鲁的居民，他们应该也和布兰茜在一起吧？", 37, 9400580, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##h0#…… 这已经不是别人的事情了，这是… 这是我的事情… ", 37, 9400580, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#请你和我一起去吧。", 37, 9400580, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b艾丽卡… ", 57, 0, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你不用现在就答应。", 37, 9400580, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b为什么是我？", 57, 0, false, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#… 不知道，我只是感觉要和你一起去。", 37, 9400580, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#至今为止我们从未遇到过彼此… 说不定以后也没有再见的机会", 37, 9400580, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我是受到了梦的启发，而你是收到了求救信，我们俩共同来到这个遥远又危险的地方", 37, 9400580, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#为了去寻找素未谋面的少女在森林里徘徊。我觉得这件事情绝非偶然，我们两个之间肯定有什么关联。", 37, 9400580, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##h0#……这不就是我们要一起去的原因吗？", 37, 9400580, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b…好吧，一起去吧。", 57, 0, false, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                                        cm.warp(867202990, 0);
                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                        cm.forceCompleteQuest(64143);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;