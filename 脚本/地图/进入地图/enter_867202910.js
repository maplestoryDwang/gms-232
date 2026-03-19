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
      cm.npc_ChangeController(9400596, "oid=7560446", -1108, 450, 6, -1158, -1058, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560446", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560446", 1);
      cm.npc_ChangeController(9400599, "oid=7560447", -1014, 450, 6, -1064, -964, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560447", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560447", 1);
      cm.npc_ChangeController(9400682, "oid=7560448", -940, 450, 6, -990, -890, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560448", "summon", 0, 0);
      cm.npc_ChangeController(9400682, "oid=7560449", -850, 450, 6, -900, -800, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560449", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7560450", -750, 450, 6, -800, -700, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560450", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560450", -1);
      cm.npc_ChangeController(9400590, "oid=7560451", -670, 450, 6, -720, -620, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560451", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560451", -1);
      cm.npc_ChangeController(9400683, "oid=7560452", -640, 450, 6, -690, -590, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560452", "summon", 0, 0);
      cm.npc_ChangeController(9400682, "oid=7560453", -545, 450, 6, -595, -495, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560453", 'summon', 0, 0);
      cm.npc_ChangeController(9400603, "oid=7560454", -470, 450, 6, -520, -420, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560454", 'summon', 0, 0);
      cm.npc_setForceFlip("oid=7560454", -1);
      cm.npc_ChangeController(9400585, "oid=7560455", -390, 450, 6, -440, -340, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560455", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560455", 1);
      cm.npc_ChangeController(9400682, "oid=7560456", -294, 450, 6, -344, -244, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560456", "summon", 0, 0);
      cm.npc_ChangeController(9400682, "oid=7560457", -230, 450, 6, -280, -180, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560457", "summon", 0, 0);
      cm.npc_ChangeController(9400683, "oid=7560458", -75, 450, 6, -125, -25, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560458", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=7560459", -110, 450, 6, -160, -60, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560459", 'summon', 0, 0);
      cm.npc_setForceFlip("oid=7560459", -1);
      cm.npc_ChangeController(9400684, "oid=7560460", 0, 450, 6, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7560460", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560460", 1);
      cm.npc_ChangeController(9400682, "oid=7560461", 85, 450, 6, 35, 135, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560461", 'summon', 0, 0);
      cm.npc_ChangeController(9400681, "oid=7560462", 850, 450, 6, 800, 900, 1, false, false);
      cm.npc_SetSpecialAction("oid=7560462", "summon", 0, 0);
      cm.npc_setForceFlip("oid=7560462", -1);
      cm.npc_SetSpecialAction("oid=7560446", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7560447", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7560450", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7560451", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7560454", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7560455", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7560459", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7560460", "attack1", -1, 0);
      cm.sendNewEffects(12, [0, 400, 400, 0, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402279/Die", 100);
        cm.npc_SetSpecialAction("oid=7560462", "special1", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b赢…赢了！", 56, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=7560462");
              cm.npc_SetSpecialAction("oid=7560462", 'special2', -1, 0);
              cm.sendNewEffects(12, [5000, -750, 400, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("怪物倒下去了！！！！！！！！！！！！！！！！！", 37, 9400603, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=7560461", "die", -1, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(150);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=7560458", "die", -1, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(110);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=7560457", 'die', -1, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(90);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=7560456", "die", -1, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(150);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=7560453", "die", -1, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(120);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=7560452", "die", -1, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=7560449", "die", -1, 0);
                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=7560448", "die", -1, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402290/Die", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=7560446");
                                      cm.setNpcSpecialActionReset("oid=7560447");
                                      cm.setNpcSpecialActionReset("oid=7560450");
                                      cm.setNpcSpecialActionReset("oid=7560451");
                                      cm.setNpcSpecialActionReset("oid=7560454");
                                      cm.setNpcSpecialActionReset("oid=7560455");
                                      cm.setNpcSpecialActionReset("oid=7560459");
                                      cm.setNpcSpecialActionReset("oid=7560460");
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=7560451", 1);
                                        cm.npc_LeaveField("oid=7560461");
                                        cm.npc_LeaveField("oid=7560461");
                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=7560458");
                                          cm.npc_LeaveField("oid=7560458");
                                          cm.inGameDirectionEvent_AskAnswerTime(110);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=7560457");
                                            cm.npc_LeaveField("oid=7560457");
                                            cm.inGameDirectionEvent_AskAnswerTime(90);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=7560456");
                                              cm.npc_LeaveField("oid=7560456");
                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=7560453");
                                                cm.npc_LeaveField("oid=7560453");
                                                cm.inGameDirectionEvent_AskAnswerTime(120);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=7560452");
                                                  cm.npc_LeaveField("oid=7560452");
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=7560449");
                                                    cm.npc_LeaveField("oid=7560449");
                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=7560448");
                                                      cm.npc_LeaveField("oid=7560448");
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=7560450", 1);
                                                        cm.npc_setForceFlip("oid=7560454", 1);
                                                        cm.npc_setForceFlip("oid=7560459", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            cm.effect_NormalSpeechBalloon("#fs15##e…结束了…！终于！！！", 0, 0, 0, 2000, 9400585, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=7560451", 1, 400, 300);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("怪物倒下去了！！！！！！！！！！！！！！！！！", 37, 9400603, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT3/battlecry2", 128);
                                                                    cm.npc_ChangeController(9400587, "oid=7560810", 60, 430, 6, 10, 110, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7560810", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                    cm.npc_SetForceMove("oid=7560460", -1, 20, 100);
                                                                    cm.sendNewEffects(12, [0, 100, 400, 0, 0]);
                                                                    cm.effect_NormalSpeechBalloon("#fs15##e我们赢了！！！！！！！！！！！！！", 0, 0, 0, 2000, 9400596, cm.getPlayer().getId());
                                                                    cm.effect_NormalSpeechBalloon("#fs15##e得救了！！我们得救了！！！！！！！！！！", 0, 0, 0, 2000, 9400599, cm.getPlayer().getId());
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
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#…终于可以回家了…", 37, 9400587, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哈！看，最终援军还是没有到来，但我们已经赢了！我也完成了我的任务！", 37, 9400581, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b这次真的结束了吧？", 56, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#别乌鸦嘴！咳呵呵，是真的结束了！", 37, 9400590, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=7560451", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=7560451", -1, 500, 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我们要把这好消息告诉大家，咳呵呵！", 37, 9400590, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=7560460"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#b…？', 56, 0, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=7560460", 1, 300, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNewEffects(17, [1000, 1000, 1000, 250, 400]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=7560810", 1);
                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                        cm.forceStartQuest(64168, "sad");
                                                                                                        cm.npc_SetSpecialAction("oid=7560460", "special2", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.setNpcSpecialActionReset("oid=7560460");
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#…这…这是…？", 37, 9400602, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNewEffects(17, [1000, 1000, 1000, 350, 400]);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=7560460", 1, 30, 70);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=7560460", 1, 20, 70);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这是…这是…", 37, 9400602, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=7560460", 1, 50, 70);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNewEffects(17, [500, 1000, 2000, 700, 400]);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#里边…好像有什么？", 37, 9400581, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#…小女孩？！", 37, 9400581, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=7560455", 1, 400, 100);
                                                                                                                              cm.npc_SetForceMove("oid=7560454", 1, 390, 100);
                                                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=7560459", 1, 200, 90);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetForceMove("oid=7560460", 1, 20, 70);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#…朱…朱莉…埃塔…", 37, 9400602, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.effect_PlayMusic("BgmPL2/Reunite");
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#为什么…为什么…", 37, 9400602, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNewEffects(17, [2000, 2000, 1000, 580, 400]);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#为什么… 你会在里边？", 37, 9400602, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#啊？……朱莉埃塔！！！说话呀！！！！！！", 37, 9400602, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_setForceFlip("oid=7560460", -1);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#……#h0# …她…她 …？", 37, 9400602, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#是…我妹妹…", 37, 9400602, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=7560460", 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#她是我妹妹！！！！！！！！！！！为什么她会在里边！！！！！！", 37, 9400602, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_SetSpecialAction("oid=7560460", "special3", -1, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_ChangeController(9400580, "oid=7561785", -450, 400, 6, -500, -400, 1, true, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=7561785", 'summon', 0, 0);
                                                                                                                                                                cm.npc_setForceFlip("oid=7561785", 1);
                                                                                                                                                                cm.npc_ChangeController(9400582, "oid=7561786", -510, 400, 6, -560, -460, 1, true, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=7561786", "summon", 0, 0);
                                                                                                                                                                cm.npc_setForceFlip("oid=7561786", 1);
                                                                                                                                                                cm.npc_ChangeController(9400599, "oid=7561787", -580, 400, 6, -630, -530, 1, true, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=7561787", "summon", 0, 0);
                                                                                                                                                                cm.npc_setForceFlip("oid=7561787", 1);
                                                                                                                                                                cm.npc_ChangeController(9400604, "oid=7561788", -650, 400, 6, -700, -600, 1, true, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=7561788", "summon", 0, 0);
                                                                                                                                                                cm.npc_setForceFlip("oid=7561788", 1);
                                                                                                                                                                cm.npc_SetForceMove("oid=7561785", 1, 330, 100);
                                                                                                                                                                cm.npc_SetForceMove("oid=7561786", 1, 330, 100);
                                                                                                                                                                cm.npc_SetForceMove("oid=7561787", 1, 350, 100);
                                                                                                                                                                cm.npc_SetForceMove("oid=7561788", 1, 350, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNewEffects(17, [2000, 1000, 1000, 400, 400]);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#！怪物终于", 37, 9400580, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      cm.effect_NormalSpeechBalloon("#fs15##e额哈哈！终于！", 0, 0, 0, 2000, 9400604, cm.getPlayer().getId());
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b……", 57, 0, false, true);
                                                                                                                                                                        cm.effect_NormalSpeechBalloon("#fs15##e辛苦…！", 0, 0, 0, 2000, 9400599, cm.getPlayer().getId());
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                            cm.effect_NormalSpeechBalloon("#fs15##e!!!", 0, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那…那孩子…？", 37, 9400580, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.setNpcSpecialActionReset("oid=7560462");
                                                                                                                                                                                cm.npc_SetSpecialAction("oid=7560462", 'special3', 0, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.setNpcSpecialActionReset("oid=7560460");
                                                                                                                                                                                  cm.npc_SetForceMove("oid=7560460", 1, 100, 200);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_LeaveField("oid=7560462");
                                                                                                                                                                                    cm.npc_LeaveField("oid=7560462");
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=7560460", "special4", 0, 0);
                                                                                                                                                                                    cm.sendNewEffects(17, [500, 1000, 2000, 700, 500]);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#朱…朱莉埃塔…！", 37, 9400602, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#快睁开眼睛…快…睁开…", 37, 9400602, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#…是我对不起你… 我应该早点告诉你… 对不起…", 37, 9400602, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#我会对你更好的，朱莉埃塔… 千万别丢下我一个人…", 37, 9400602, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.setNpcSpecialActionReset("oid=7560460");
                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=7560460", "special5", 0, 0);
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#不！！！不！！！！！！！！！！！！", 37, 9400602, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#不，不可以不可以不可以！！！！！！！！", 37, 9400602, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1##h0#，不！快点！啊？艾丽卡，拜托！！！去叫一下扎奈特，啊？！", 37, 9400602, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#不！！！不！！！！！！！！！！！！", 37, 9400602, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.setNpcSpecialActionReset("oid=7560460");
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=7560460", 'special3', -1, 0);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNewEffects(17, [500, 2000, 1000, 700, 500]);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#b(…这…是怎么回事…？)", 56, 0, false, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b(原以为是我们的敌人…)", 56, 0, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b(怎么会是这种柔弱的少女…？)", 56, 0, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#朱莉埃塔… 呜…呜… 都怪我… 是我… 是我…", 37, 9400602, true, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=7561786", 1, 100, 50);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.npc_setForceFlip("oid=7561786", -1);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("让他… 让他哭一会儿吧…", 1, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7561786", 1);
                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=7561786", 1, 300, 50);
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#艾伊纳尔…", 37, 9400582, false, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom('#face1#…。', 37, 9400602, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#我到底做了些什么…？", 37, 9400602, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#艾伊纳尔…", 37, 9400582, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#…朱莉埃塔… 她该有多苦啊…", 37, 9400602, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#她该有多么心急的… 找了我啊…", 37, 9400602, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#在这里边她该有多么… 痛苦？", 37, 9400602, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom('#b…', 56, 0, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#为什么… 为什么到现在为止我什么都没有做…", 37, 9400602, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#不… 应该什么都不该做…", 37, 9400602, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不… 不… 应该… ", 37, 9400602, true, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.npc_SetForceMove("oid=7561786", 1, 100, 50);
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#艾伊纳尔！振作起来！", 37, 9400582, true, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你没有做错！", 37, 9400582, true, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#妹妹失踪也是，今天所做的事情也是。你没有任何错。", 37, 9400582, true, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#…朱莉埃塔…朱莉埃塔…。", 37, 9400602, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#先带着艾伊纳尔回到村里，我来收拾这里。", 37, 9400581, true, true);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b好的。", 56, 0, true, true);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#…朱莉…埃塔…", 37, 9400580, true, true);
                                                                                                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                                                                                                            cm.forceCompleteQuest(64142);
                                                                                                                                                                                                                                                            cm.warp(867202315, 0);
                                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;