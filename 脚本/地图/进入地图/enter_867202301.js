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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400581, "oid=7640658", -750, 80, 8, -800, -700, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640658", 'summon', 0, 0);
      cm.forceStartQuest(64163, '');
      cm.npc_ChangeController(9400587, "oid=7640659", -800, 80, 8, -850, -750, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640659", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7640660", -850, 80, 7, -900, -800, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640660", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7640661", -900, 80, 7, -950, -850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640661", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7640662", -950, 80, 6, -1000, -900, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640662", 'summon', 0, 0);
      cm.npc_ChangeController(9400583, "oid=7640663", -1050, 80, 6, -1100, -1000, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640663", "summon", 0, 0);
      cm.npc_ChangeController(9400584, "oid=7640664", -1100, 80, 6, -1150, -1050, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640664", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=7640665", -1150, 80, 6, -1200, -1100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640665", 'summon', 0, 0);
      cm.npc_ChangeController(9400589, "oid=7640666", -1200, 80, 5, -1250, -1150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640666", "summon", 0, 0);
      cm.npc_ChangeController(9400598, "oid=7640667", -1250, 80, 5, -1300, -1200, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640667", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=7640668", -1300, 80, 5, -1350, -1250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640668", "summon", 0, 0);
      cm.npc_ChangeController(9400596, "oid=7640669", -1350, 80, 5, -1400, -1300, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640669", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7640670", -1400, 80, 4, -1450, -1350, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640670", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7640671", -1450, 80, 4, -1500, -1400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640671", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=7640672", -1500, 80, 4, -1550, -1450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640672", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7640673", -1550, 80, 4, -1600, -1500, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640673", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=7640674", -1600, 80, 3, -1650, -1550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7640674", "summon", 0, 0);
      cm.npc_ChangeController(9400600, "oid=7640675", -200, 80, 10, -250, -150, 1, true, false);
      cm.npc_SetSpecialAction("oid=7640675", "summon", 0, 0);
      cm.npc_ChangeController(9400603, "oid=7640676", -150, 80, 11, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7640676", 'summon', 0, 0);
      cm.npc_ChangeController(9400603, "oid=7640677", -100, 80, 11, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7640677", "summon", 0, 0);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [8000, 1250, -500, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(8000);
          } else {
            if (status === V++) {
              cm.sendNewEffects(17, [0, 1000, 2000, -735, 120]);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7640675", -1, 300, 100);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7640676", -1, 300, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=7640677", -1, 300, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你们终于来了… 真是辛苦大家了。", 37, 9400600, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("卡夫塔佩村长、古纳德村长，真是好久不见。看你们平安无事，让我大感欣慰啊。", 37, 9400600, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#…哦？……", 37, 9400597, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7640659", 1, 160, 60);
                              cm.inGameDirectionEvent_AskAnswerTime(250);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#村长，感谢你为我们敞开城门。", 37, 9400587, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我们又不是外人？作为相同的民族，这是理所当然的事情。我们的祖先也这样过，我们的后代也会这样。", 37, 9400600, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我听到了有关你们的传闻，也非常为你们担心。", 37, 9400600, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(17, [1000, 2000, 2000, -825, -150]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("本想派人过去打听一下… 但正如你们所见，我们的情况也不容乐观… 虽然很不好意思，但实在是让我无可奈何。", 37, 9400600, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(17, [0, 2000, 1000, -735, 120]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("只不过看到你们安然无恙，我也就放下了心头上这块石头了。", 37, 9400600, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("…啊，看我都在做些什么。你们肯定舟车劳累了，让我给你们安排居所。请稍等。", 37, 9400600, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=7640675", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=7640675", 1, 400, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=7640677", 1);
                                                          cm.npc_setForceFlip("oid=7640676", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=7640677", 1, 400, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=7640676", 1, 400, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setMobImage("PL_MONAD.img/EP1/ACT3/talking", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                cm.effect_NormalSpeechBalloon("传闻他性情如虎… \r\n但传闻终究时传闻。\r\n其实是位仁慈的人。", 1, 0, 0, 3000, 9400591, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  cm.effect_NormalSpeechBalloon("他在搞什么鬼？\r\n维尔纳村长本来不是这样的人？\r\n这到底怎么回事？！", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=7640659", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=7640659", -1, 50, 50);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                        cm.effect_NormalSpeechBalloon("请不要用你的标准\r\n去衡量他人。", 1, 0, 0, 3000, 9400587, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                          cm.effect_NormalSpeechBalloon("你没觉得吗！\r\n他分明时有什么企图。", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                            cm.effect_NormalSpeechBalloon("还有！\r\n为什么还提起先祖的事情？\r\n是自己做的还是什么？", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                              cm.effect_NormalSpeechBalloon("从过去学习经验并确切实践，\r\n不是很了不起吗？", 1, 0, 0, 3000, 9400589, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                cm.effect_NormalSpeechBalloon("古纳德村长也得从过去的错误中\r\n吸取教训啊。", 1, 0, 0, 3000, 9400589, cm.getPlayer().getId());
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.playSoundEffDirectly("PL_MONAD.img/EP1/ACT3/talking");
                                                                                  cm.sendNewEffects(17, [2000, 1000, 2000, -700, 120]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=7640658", 1, 100, 50);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=7640658", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=7640658", 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=7640658", -1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#果然是个天然要塞。虽然部分被损坏，但城墙依旧坚如铁壁。", 37, 9400581, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=7640658", -1, 100, 50);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNewEffects(12, [2000, -900, 120, 0, 0]);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#这个程度应该能抵挡住攻击。#h0#，你有什么看法？", 37, 9400581, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#对于防守战来说再好不过了。", 37, 9400582, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#但是，从森林到入口处丝毫没有障碍，怪物们肯定能迅速到达。所以要在路上摆一些障碍。", 37, 9400582, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我没问你。", 37, 9400581, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#而且，那种程度我也知道。", 37, 9400581, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b…对。按照凯恩的话设置障碍，再修复墙壁的话… ", 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#果然，大家的想法都一样。", 37, 9400581, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                cm.npc_setForceFlip("oid=7640675", -1);
                                                                                                                cm.npc_setForceFlip("oid=7640676", -1);
                                                                                                                cm.npc_setForceFlip("oid=7640677", -1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                  cm.npc_SetForceMove("oid=7640675", -1, 380, 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                    cm.npc_SetForceMove("oid=7640676", -1, 380, 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                      cm.npc_SetForceMove("oid=7640677", -1, 380, 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNewEffects(12, [2000, -800, 120, 0, 0]);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=7640658", 1);
                                                                                                                            cm.npc_setForceFlip("oid=7640659", 1);
                                                                                                                            cm.sendNormalTalk_Bottom("很不幸，我们现在没有可以容纳所有人的空间。", 37, 9400600, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你瞧！我就知道！", 37, 9400597, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#古纳德村长！请你闭上嘴！", 37, 9400587, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("首先，老弱和伤者可以先安排到村里的宾馆里。", 37, 9400600, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("如果需要的话，可以从杂货店索取一些药品，直接去找艾尔巴就好了。", 37, 9400600, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=7640675", -1, 50, 50);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("然后，剩下的人… ", 37, 9400600, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("就委屈你们，暂时在那边的空地上搭帐篷安居了。", 37, 9400600, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#什么？！那里不是还有房子吗，为什么让我们露宿街头？！", 37, 9400597, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#… 这已经足够了。谢谢你，维尔纳村长。", 37, 9400587, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("那你们先休息一会儿，如果有什么需要帮忙的尽管来找我。", 37, 9400600, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#谢谢你，村长。", 37, 9400587, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNewEffects(17, [2000, 2000, 1000, -900, 120]);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        cm.effect_NormalSpeechBalloon("太感谢你了", 1, 0, 0, 3000, 9400591, cm.getPlayer().getId());
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          cm.effect_NormalSpeechBalloon("感谢你", 1, 0, 0, 3000, 9400596, cm.getPlayer().getId());
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                            cm.effect_NormalSpeechBalloon("谢谢你", 1, 0, 0, 3000, 9400589, cm.getPlayer().getId());
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs15#为什么无视我的话？！", 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNewEffects(17, [2000, 1000, 2000, -500, 120]);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好在这里好像还有守城的士兵。", 37, 9400581, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#有多少兵力？战斗能力如何？", 37, 9400581, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("啊…？", 37, 9400600, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("这位时亚皮纳斯的派遣队长巴特勒大人。", 37, 9400585, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#幸会幸会，我叫巴特勒。", 37, 9400581, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#如果可以的话，我想去看一下军备和士兵们。", 37, 9400581, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("好的，巴特勒派遣队长，请随我来。", 37, 9400600, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                  cm.npc_setForceFlip("oid=7640675", 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                    cm.npc_SetForceMove("oid=7640675", 1, 400, 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640677", 1);
                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640676", 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640677", 1, 400, 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                          cm.npc_SetForceMove("oid=7640676", 1, 400, 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            cm.npc_SetForceMove("oid=7640658", 1, 600, 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                              cm.npc_SetForceMove("oid=7640670", 1, 1000, 150);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                cm.npc_SetForceMove("oid=7640671", 1, 1000, 150);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, -1000, 120]);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("城墙垮塌是攻击的痕迹吗？还是？", 37, 9400591, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#… 我们得抓紧修补城墙。", 37, 9400589, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640660", -1);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#切，早知道城墙会垮塌，就不来这里了！", 37, 9400597, false, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("至少比木栅坚固对了吧？", 37, 9400598, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那又能怎样？还是得露宿街头，而且在这么寒冷的天气下！", 37, 9400597, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=7640659", -1);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你好像不记得我们在斯巴乐缇所说的话。", 37, 9400587, false, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#什么？什么！", 37, 9400597, true, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#和雪原比起来，这里已经很高档了。", 37, 9400587, true, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#得了吧！我看啊，还是得留在斯巴乐缇！都是被你们给骗的！", 37, 9400597, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#斯巴乐缇的木栅已经倒了一半… 剩下的另一半也快了。", 37, 9400589, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那也不应该来这里迎击敌人！而是去更大的城市避难！", 37, 9400597, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("你是说，要抛弃故乡… 吗？", 37, 9400598, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#哦？……咳咳！我只是说说而已！", 37, 9400597, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7640659"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7640660"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("到底会不会有援军过来呢？", 37, 9400585, false, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640672", -1);
                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640673", -1);
                                                                                                                                                                                                                                          cm.sendNewEffects(17, [2000, 2000, 2000, -1400, 120]);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("就是说… 总部不是还没有回信吗？", 37, 9400585, false, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("回信？", 37, 9400585, true, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("哦哦！", 37, 9400585, true, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640667", -1);
                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640668", -1);
                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640669", -1);
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("… 这是什么情况？你碰到过这种情况吗？", 37, 9400585, true, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("没有！所以我说这很奇怪啊！", 37, 9400585, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("… 难不成… 我们被抛弃了… ", 37, 9400585, true, true);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640663", -1);
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.npc_SetForceMove("oid=7640663", -1, 300, 100);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你们还有闲情在那里聊天吗？", 37, 9400583, false, true);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                cm.npc_setForceFlip("oid=7640672", 1);
                                                                                                                                                                                                                                                                cm.npc_setForceFlip("oid=7640673", 1);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#居民和其他的骑士们都在听呢，请小心你们的用词。", 37, 9400583, false, true);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#还有… 这是我们派遣队的职责。", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#援军是援军，我们自己的事情还是得我们自己解决。", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("吉莉大人，但是… ", 37, 9400585, true, true);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#拿出你们的勇气！", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我们是亚皮纳斯骄傲的骑士团。", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("…是，明白。吉莉大人。", 37, 9400585, true, true);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#尽快搭建营帐，趁有时间快点休息，恢复体力。", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640672", -1);
                                                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640673", -1);
                                                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7640674", -1);
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=7640674", -1, 300, 100);
                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640673", -1, 350, 100);
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=7640672", -1, 400, 100);
                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.sendNewEffects(17, [2000, 2000, 2000, -1000, 120]);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.npc_setForceFlip("oid=7640663", 1);
                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.npc_SetForceMove("oid=7640663", 1, 200, 100);
                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#来来，我们也开始动起来吧。", 37, 9400589, false, true);
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=7640666", -1);
                                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom('#face0#哼！', 37, 9400597, false, true);
                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640659", -1);
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640660", -1);
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640665", -1);
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640667", -1);
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640668", -1);
                                                                                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=7640669", -1);
                                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640669", -1, 550, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640668", -1, 600, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640667", -1, 650, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640666", -1, 700, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640665", -1, 750, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640660", -1, 800, 100);
                                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7640659", -1, 850, 100);
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640661", -1);
                                                                                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7640662", -1);
                                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#第一次看到吉莉如此激昂，和平时不一样哦。", 37, 9400580, false, true);
                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#居民们都在听呢，说这些话肯定会动摇… ", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#做的好。", 37, 9400582, true, true);
                                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#呃啊，真的吗？非常感谢！", 37, 9400583, true, true);
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，你不再休息一会儿吗？", 37, 9400580, true, true);
                                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('#b我已经没关系了。', 57, 0, true, true);
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#稍微整顿过后，大家在一起协商对策。", 37, 9400580, true, true);
                                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b好主意。那么我们先去帮帮居民们。", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                                            cm.npc_setForceFlip("oid=7640663", -1);
                                                                                                                                                                                                                                                                                                                            cm.npc_setForceFlip("oid=7640664", -1);
                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=7640663", -1, 400, 100);
                                                                                                                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=7640664", -1, 400, 100);
                                                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                                cm.npc_SetForceMove("oid=7640661", -1, 400, 100);
                                                                                                                                                                                                                                                                                                                                cm.npc_SetForceMove("oid=7640662", -1, 400, 100);
                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                                                                                                                                    cm.warp(867202302, 0);
                                                                                                                                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                                                    cm.forceCompleteQuest(64101);
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
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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