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
      cm.npc_ChangeController(9400612, "oid=3706170", -1035, 90, 7, -1085, -985, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706170", "summon", 0, 0);
      cm.npc_ChangeController(9400612, "oid=3706171", -570, 90, 19, -620, -520, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706171", 'summon', 0, 0);
      cm.npc_ChangeController(9400612, "oid=3706172", -146, 90, 18, -196, -96, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706172", "summon", 0, 0);
      cm.npc_ChangeController(9400612, "oid=3706173", 390, 90, 30, 340, 440, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706173", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3706174", -795, 90, 16, -845, -745, 0, true, false);
      cm.npc_SetSpecialAction("oid=3706174", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=3706174", 'attack1', -1, 0);
      cm.npc_ChangeController(9400596, "oid=3706175", 650, 90, 1, 600, 700, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706175", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3706175", "attack1", -1, 0);
      cm.npc_ChangeController(9400596, "oid=3706176", -860, 90, 15, -910, -810, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706176", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3706176", "attack1", -1, 0);
      cm.npc_ChangeController(9400582, "oid=3706177", 190, 90, 27, 140, 240, 0, true, false);
      cm.npc_SetSpecialAction("oid=3706177", "summon", 0, 0);
      cm.forceStartQuest(64164, "fight");
      cm.npc_SetSpecialAction("oid=3706177", 'attack1', -1, 0);
      cm.npc_ChangeController(9400589, "oid=3706178", -326, 90, 25, -376, -276, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706178", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3706178", "attack1", -1, 0);
      cm.npc_ChangeController(9400587, "oid=3706179", -450, 90, 17, -500, -400, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706179", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3706179", "attack1", -1, 0);
      cm.npc_ChangeController(9400591, "oid=3706180", -1436, 90, 13, -1486, -1386, 1, true, false);
      cm.npc_SetSpecialAction("oid=3706180", "summon", 0, 0);
      cm.npc_ChangeController(9400675, "oid=3706181", -1503, 90, 10, -1553, -1453, 0, true, false);
      cm.npc_SetSpecialAction("oid=3706181", 'summon', 0, 0);
      cm.inGameDirectionEvent_OneTimeAction(5, 2000);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=3706173", "die1", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=3706172", "die1", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=3706171", "die1", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=3706170", "die1", 0, 0);
              cm.setNpcSpecialActionReset("oid=3706174");
              cm.setNpcSpecialActionReset("oid=3706175");
              cm.setNpcSpecialActionReset("oid=3706176");
              cm.setNpcSpecialActionReset("oid=3706177");
              cm.setNpcSpecialActionReset("oid=3706178");
              cm.setNpcSpecialActionReset("oid=3706179");
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=3706173");
                cm.npc_LeaveField("oid=3706173");
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=3706172");
                  cm.npc_LeaveField("oid=3706172");
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=3706171");
                    cm.npc_LeaveField("oid=3706171");
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=3706170");
                      cm.sendNormalTalk_Bottom("啊呀！！！！！！！！！！！！！！！", 37, 9400591, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.npc_setForceFlip("oid=3706177", -1);
                        cm.sendNormalTalk_Bottom("#face0#什么事？！", 37, 9400582, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(17, [3000, 1000, 2000, -1300, 120]);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=3706181", "skill2", -1, 0);
                            cm.npc_SetSpecialAction("oid=3706180", "grab", -1, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 900);
                              cm.npc_SetForceMove("oid=3706177", -1, 710, 250);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=3706178", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=3706174", -1);
                                  cm.npc_SetForceMove("oid=3706179", -1, 550, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b狼人？", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('救……救命啊！', 37, 9400591, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=3706179", 'attack1', 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=3706177", -1, 550, 300);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                              cm.setNpcSpecialActionReset("oid=3706181");
                                              cm.npc_SetSpecialAction("oid=3706181", "hit1", 300, 0);
                                              cm.setNpcSpecialActionReset("oid=3706180");
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=3706180", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=3706180", 1, 236, 150);
                                                  cm.npc_SetForceMove("oid=3706178", -1, 475, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  cm.npc_LeaveField("oid=3706175");
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=3706177", -1, 50, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=3706181", "attack1", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=3706177", "skill", 0, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402301/Skill1", 128);
                                                        cm.sendNormalTalk_Bottom("#face0#就是现在！", 37, 9400582, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=3706181", "die1", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=3706181");
                                                                cm.npc_LeaveField("oid=3706181");
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                  cm.npc_setForceFlip("oid=3706177", 1);
                                                                  cm.forceForfeitQuest(64164);
                                                                  cm.sendNormalTalk_Bottom("……呜呜呜……可汗……", 37, 9400591, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(17, [2000, 2000, 2000, -1050, 120]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我不是强调要远离森林吗？！", 37, 9400587, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("……对不起……呜呜呜……", 37, 9400591, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#唉……哪怕为了剩下的孩子着想，你也要小心保重自己啊！", 37, 9400587, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#万一受伤了！！！", 37, 9400587, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#可汗！你救人回来是件好事，为什么非要说话这么难听！", 37, 9400589, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#你这太过分，简直让我看不下去了。", 37, 9400589, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#唉，真不知怎么说你好。", 37, 9400589, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=3706175");
                                                                                            cm.npc_LeaveField("oid=3706176");
                                                                                            cm.npc_LeaveField("oid=3706176");
                                                                                            cm.npc_ChangeController(9400596, "oid=3706926", -1850, 0, 4, -1900, -1800, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3706926", "summon", 0, 0);
                                                                                            cm.npc_ChangeController(9400618, "oid=3706927", -1900, 0, 3, -1950, -1850, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3706927", 'summon', 0, 0);
                                                                                            cm.npc_ChangeController(9400619, "oid=3706928", -650, 0, 21, -700, -600, 1, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3706928", "summon", 0, 0);
                                                                                            cm.npc_SetForceMove("oid=3706926", 1, 550, 100);
                                                                                            cm.npc_SetForceMove("oid=3706927", 1, 550, 100);
                                                                                            cm.npc_SetForceMove("oid=3706928", -1, 140, 50);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=3706179", 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……我也很累，心里很苦啊！我不想再看见更多人牺牲，就这一个期望！", 37, 9400587, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#剩下的人都这样陷在悲伤与混乱中不可自拔，他们连自己都照顾不好，我到底能做什么！", 37, 9400587, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我一直竭尽全力只为保护村子！", 37, 9400587, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#佩图尔，如果连你……你都无法谅解我……我……", 37, 9400587, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=3706178", -1, 30, 30);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#不管你说什么，我都是始终支持你的。他们也一样！", 37, 9400589, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#你看看周围！", 37, 9400589, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#为什么光想着只有你在为乡亲们努力？你该看看乡亲们是多么关照你！", 37, 9400589, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=3706179", -1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=3706179", 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=3706179", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=3706179", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=3706179", 1, 150, 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNewEffects(12, [2000, -1000, 120, 0, 0]);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('可汗！！！', 37, 9400591, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("我不介意你骂我软弱。但你没必要说那些让你自己伤心的话。", 37, 9400591, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我们都已经从那天的阴影中走出来了。因为更大的危机，更严峻的考验已经降临到我们身上，尽管如此，我们还是要活下去。", 37, 9400591, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("但是可汗……你还是停留在原地。", 37, 9400591, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetForceMove("oid=3706180", 1, 100, 50);
                                                                                                                                    cm.npc_setForceFlip("oid=3706178", 1);
                                                                                                                                    cm.sendNormalTalk_Bottom("你也从过去走出来吧。不要再折磨自己 了。即使你这样做也无法回到过去。", 37, 9400591, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("述拉大婶说的对，村长！", 37, 9400596, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=3706926", 1, 100, 50);
                                                                                                                                        cm.sendNormalTalk_Bottom("谁也没有说过那天的事情是你的责任。可你为什么……要把自己困在过去呢？", 37, 9400596, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("我们尊敬的村长不是现在这个不听他人意见，一意孤行的专制者。", 37, 9400596, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetForceMove("oid=3706927", 1, 100, 50);
                                                                                                                                            cm.sendNormalTalk_Bottom("请你早点变回从前那个会倾听所有乡亲的心声，和他人分享希望与勇气的可汗吧。", 37, 9400596, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("回到我们身边吧，可汗……", 37, 9400591, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=3706180", 1, 30, 50);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#回到大伙儿中间吧……可汗……", 37, 9400589, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_setForceFlip("oid=3706179", -1);
                                                                                                                                                      cm.npc_SetForceMove("oid=3706926", 1, 40, 50);
                                                                                                                                                      cm.npc_SetForceMove("oid=3706927", 1, 40, 50);
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我……我……我……", 37, 9400587, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你什么都不说也没关系……", 37, 9400589, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("呜……呜呜呜……", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                cm.effect_NormalSpeechBalloon("可汗……", 1, 0, 0, 2000, 9400589, cm.getPlayer().getId());
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                  cm.effect_NormalSpeechBalloon("你尽管放心地哭出来吧……", 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.forceCompleteQuest(64046);
                                                                                                                                                                    cm.sendNewEffects(12, [2000, -1300, 120, 0, 0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_setForceFlip("oid=3706177", -1);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##h0#，咱们别掺和，快去打猎吧。", 37, 9400582, false, true);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.updateInfoQuest(64046, "dir1=1");
                                                                                                                                                                          cm.forceCompleteQuest(64046);
                                                                                                                                                                          cm.warp(867201130, 0);
                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                          cm.npc_LeaveField("oid=3706174");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706174");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706177");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706177");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706178");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706178");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706179");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706179");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706180");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706180");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706926");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706926");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706927");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706927");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706928");
                                                                                                                                                                          cm.npc_LeaveField("oid=3706928");
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