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
      cm.Hidden_background("q64025Obj", 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.forceForfeitQuest(64164);
      cm.forceStartQuest(64166, 'sad');
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 2910, 350);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400580, "oid=2280492", 2850, 400, 47, 2800, 2900, 1, true, false);
      cm.npc_SetSpecialAction("oid=2280492", 'summon', 0, 0);
      cm.npc_ChangeController(9400593, "oid=2280493", 2790, 400, 47, 2740, 2840, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280493", 'summon', 0, 0);
      cm.npc_ChangeController(9400595, "oid=2280494", 3000, 400, 47, 2950, 3050, 1, true, false);
      cm.npc_SetSpecialAction("oid=2280494", 'summon', 0, 0);
      cm.npc_ChangeController(9400620, "oid=2280495", 2000, 350, 46, 1950, 2050, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280495", "summon", 0, 0);
      cm.npc_ChangeController(9400621, "oid=2280496", 1950, 350, 46, 1900, 2000, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280496", "summon", 0, 0);
      cm.npc_ChangeController(9400622, "oid=2280497", 1900, 350, 46, 1850, 1950, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280497", 'summon', 0, 0);
      cm.npc_ChangeController(9400582, "oid=2280498", 2000, 350, 46, 1950, 2050, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280498", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=2280499", 2000, 350, 46, 1950, 2050, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280499", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=2280500", 2000, 350, 46, 1950, 2050, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280500", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=2280501", 1950, 350, 46, 1900, 2000, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280501", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=2280502", 1900, 350, 46, 1850, 1950, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280502", "summon", 0, 0);
      cm.npc_SetForceMove("oid=2280495", 1, 500, 100);
      cm.inGameDirectionEvent_AskAnswerTime(250);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=2280496", 1, 500, 100);
        cm.inGameDirectionEvent_AskAnswerTime(250);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2280497", 1, 500, 100);
          cm.inGameDirectionEvent_AskAnswerTime(250);
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
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon('学者！', 0, 0, 0, 2000, 9400620, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("学者！！！", 0, 0, 0, 2000, 9400621, cm.getPlayer().getId());
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("你没事吧？", 0, 0, 0, 2000, 9400622, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2280498", 1, 560, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#艾丽卡！！！！", 37, 9400582, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2280499", 1, 650, 200);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                              cm.effect_NormalSpeechBalloon("哈瓦尔！", 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_NormalSpeechBalloon("你平安就好……太好了……", 0, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.forceStartQuest(64166, "happy");
                                  cm.npc_SetForceMove("oid=2280493", -1, 10, 50);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    cm.effect_NormalSpeechBalloon("谢谢，谢谢，谢谢你们……", 0, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2280499", 'thankyou', 930, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(930);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=2280499");
                                        cm.npc_setForceFlip("oid=2280499", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2280499", "thankyou", 930, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(930);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=2280499");
                                            cm.npc_setForceFlip("oid=2280499", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2280499", 'thankyou2', 930, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(930);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=2280499");
                                                cm.npc_setForceFlip("oid=2280499", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2280499", -1, 1000, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=2280493", -1, 1000, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2280494", -1, 1300, 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2280500", 1, 700, 150);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=2280501", 1, 700, 150);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2280502", 1, 700, 150);
                                                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#我的姑奶奶！你跑上那么危险的地方干嘛去？？！", 37, 9400581, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#说了多少遍叫你好好待在安全的地方！怎么不听话？！", 37, 9400581, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#眼下这里哪儿有安全的地方？", 37, 9400580, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#呃！我这不是担心你吗！你要是受伤了，谁来负责！？", 37, 9400581, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#现在艾丽卡也吓坏了，晚点再说她吧。", 37, 9400582, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=2280498", 1, 10, 50);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2280500", -1);
                                                                            cm.sendNormalTalk_Bottom("#face1#你自己的责任都没尽到，还敢帮她说话？", 37, 9400581, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2280500", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#你们别忘了我们来这里的缘由，记住自己的任务！", 37, 9400581, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=2280500", -1);
                                                                                    cm.sendNormalTalk_Bottom("#face1#去收拾村子。", 37, 9400581, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#除了凯恩之外，其他骑士跟我走。", 37, 9400581, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=2280500", -1, 1000, 150);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=2280502", -1);
                                                                                          cm.npc_setForceFlip("oid=2280501", -1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=2280501", -1, 1000, 150);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            cm.effect_NormalSpeechBalloon("……加油！", 1, 0, 0, 2000, 9400583, cm.getPlayer().getId());
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=2280502", -1, 1000, 150);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=2280495", -1);
                                                                                                cm.npc_setForceFlip("oid=2280496", -1);
                                                                                                cm.npc_setForceFlip("oid=2280497", -1);
                                                                                                cm.npc_SetForceMove("oid=2280497", -1, 500, 150);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=2280496", -1, 500, 150);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=2280495", -1, 500, 150);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=2280498", 1, 50, 50);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNewEffects(17, [1000, 1000, 2000, 2850, 450]);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……艾丽卡……我以为你在家里……你不是答应我会 待在安全的地方嘛。", 37, 9400582, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#对不起，都是我的错，我该一刻不停地守在你身边的……", 37, 9400582, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#是我拜托你去的，说什么对不起，没关系。", 37, 9400580, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#还有……谢谢你的帮助。", 37, 9400580, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=2280493");
                                                                                                                    cm.npc_LeaveField("oid=2280493");
                                                                                                                    cm.npc_LeaveField("oid=2280494");
                                                                                                                    cm.npc_LeaveField("oid=2280494");
                                                                                                                    cm.npc_LeaveField("oid=2280495");
                                                                                                                    cm.npc_LeaveField("oid=2280495");
                                                                                                                    cm.npc_LeaveField("oid=2280496");
                                                                                                                    cm.npc_LeaveField("oid=2280496");
                                                                                                                    cm.npc_LeaveField("oid=2280497");
                                                                                                                    cm.npc_LeaveField("oid=2280497");
                                                                                                                    cm.npc_LeaveField("oid=2280499");
                                                                                                                    cm.npc_LeaveField("oid=2280499");
                                                                                                                    cm.npc_LeaveField("oid=2280500");
                                                                                                                    cm.npc_LeaveField("oid=2280500");
                                                                                                                    cm.npc_LeaveField("oid=2280501");
                                                                                                                    cm.npc_LeaveField("oid=2280501");
                                                                                                                    cm.npc_LeaveField("oid=2280502");
                                                                                                                    cm.npc_LeaveField("oid=2280502");
                                                                                                                    cm.sendNormalTalk_Bottom("#b不客气，这是我该做的。", 57, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊！你是刚才一起战斗的……你不是亚皮纳斯麾下的人，怎么称呼？", 37, 9400582, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我叫#b#h0##k，刚才谢谢你。", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#很高兴认识你，#h0#。我是亚皮纳斯里有名的花美男凯恩。", 37, 9400582, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#还有这位是我的女神，艾丽卡。", 37, 9400582, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……说了叫你别这么肉麻……", 37, 9400580, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#谢谢你救了艾丽卡。有机会我一定报答你这个人情。", 37, 9400582, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#b你已经帮过我了哦。", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊……？对！是哦！要不是我，你早成烤人肉串了！", 37, 9400582, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#人的缘分真的很难说，幸好先前我救了你。", 37, 9400582, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#凯恩……", 37, 9400580, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯？艾丽卡，什么事！你哪儿不舒服吗？", 37, 9400582, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNewEffects(14, [1000, 2000, 1000, 0, 0]);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#现在不是说这些的时候，你看看周围。", 37, 9400580, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_ChangeController(9400591, "oid=2280626", 1180, 253, 45, 1130, 1230, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280626", "summon", 0, 0);
                                                                                                                                                  cm.npc_setForceFlip("oid=2280626", 1);
                                                                                                                                                  cm.forceStartQuest(64160, "down");
                                                                                                                                                  cm.npc_ChangeController(9400593, "oid=2280627", 1055, 200, 74, 1005, 1105, 0, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280627", "summon", 0, 0);
                                                                                                                                                  cm.npc_setForceFlip("oid=2280627", -1);
                                                                                                                                                  cm.forceStartQuest(64166, "sad");
                                                                                                                                                  cm.npc_ChangeController(9400596, "oid=2280628", 250, 280, 24, 200, 300, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280628", 'summon', 0, 0);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280628", "rest", -1, 0);
                                                                                                                                                  cm.npc_ChangeController(9400589, "oid=2280629", 150, 280, 23, 100, 200, 0, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280629", "summon", 0, 0);
                                                                                                                                                  cm.npc_ChangeController(9400587, "oid=2280630", -900, 330, 17, -950, -850, 0, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280630", "summon", 0, 0);
                                                                                                                                                  cm.npc_ChangeController(9400588, "oid=2280631", -510, 380, 20, -560, -460, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280631", 'summon', 0, 0);
                                                                                                                                                  cm.npc_ChangeController(9400585, "oid=2280632", -200, 370, 21, -250, -150, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280632", "summon", 0, 0);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280632", "rest", -1, 0);
                                                                                                                                                  cm.npc_ChangeController(9400585, "oid=2280633", -1325, 350, 16, -1375, -1275, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280633", "summon", 0, 0);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280633", "rest", -1, 0);
                                                                                                                                                  cm.npc_ChangeController(9400596, "oid=2280634", -1680, 350, 14, -1730, -1630, 1, true, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280634", "summon", 0, 0);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2280634", "rest", -1, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNewEffects(17, [20000, 1000, 1000, -1950, 250]);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        cm.effect_NormalSpeechBalloon("去哪儿了……？一定得找到……在哪儿啊……", 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                          cm.effect_NormalSpeechBalloon("呜哇啊啊-妈妈……", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            cm.effect_NormalSpeechBalloon('你还好吧……？', 1, 0, 0, 2000, 9400589, cm.getPlayer().getId());
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("呃呃……", 0, 0, 0, 2000, 9400596, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                cm.effect_NormalSpeechBalloon("爸爸！！你没事吧？！", 0, 0, 0, 2000, 9400588, cm.getPlayer().getId());
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                  cm.effect_NormalSpeechBalloon('……', 0, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNewEffects(19, [0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#我们得帮帮村民们。", 37, 9400580, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.npc_SetForceMove("oid=2280492", -1, 300, 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.npc_setForceFlip("oid=2280498", -1);
                                                                                                                                                                              cm.npc_SetForceMove("oid=2280498", -1, 200, 100);
                                                                                                                                                                              cm.askMenu_Bottom("#b（我……该怎么办？）\r\n#L0#我得去找老婆婆。#l\r\n#L1#跟着艾丽卡和凯恩去帮助村民们要紧。#l", 57, 0);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                if (e == 0) {
                                                                                                                                                                                  end();
                                                                                                                                                                                  return;
                                                                                                                                                                                }
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##h0#？干嘛呢！还不快跟上？", 37, 9400582, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我知道你很累，但帮帮忙。眼下多一个人多份力量。拜托了。", 37, 9400582, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.askMenu_Bottom("#b（……老婆婆的信中也是求我帮助阿布鲁。）\r\n#L0#跟随艾丽卡和凯恩。#l\r\n#L1#还是去见老婆婆吧？#l", 57, 0);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      if (e == 0) {
                                                                                                                                                                                        end();
                                                                                                                                                                                        return;
                                                                                                                                                                                      }
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你还考虑什么！现在没这闲工夫！", 37, 9400582, false, true);
                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                      end();
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function end() {
  cm.forceStartQuest(64017, '');
  cm.playerMessage(-1, '跟上艾丽卡和凯恩。');
  cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
  cm.warp(867200400, 3, true);
  cm.setInGameDirectionMode(false, true, false);
  cm.npc_LeaveField("oid=2280492");
  cm.npc_LeaveField("oid=2280492");
  cm.npc_LeaveField("oid=2280498");
  cm.npc_LeaveField("oid=2280498");
  cm.npc_LeaveField("oid=2280626");
  cm.npc_LeaveField("oid=2280627");
  cm.npc_LeaveField("oid=2280628");
  cm.npc_LeaveField("oid=2280629");
  cm.npc_LeaveField("oid=2280630");
  cm.npc_LeaveField("oid=2280631");
  cm.npc_LeaveField("oid=2280632");
  cm.npc_LeaveField("oid=2280633");
  cm.npc_LeaveField("oid=2280634");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;