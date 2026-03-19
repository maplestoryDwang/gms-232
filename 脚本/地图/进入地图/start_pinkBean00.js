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
      cm.updateInfoQuest(26900, "mt=1");
      cm.updateInfoQuest(26900, "mt=1;al=1");
      cm.updateInfoQuest(26900, "mt=1;id=0;al=1");
      cm.updateInfoQuest(26900, "mt=1;id=0;al=1");
      cm.updateInfoQuest(26902, '');
      cm.updateInfoQuest(26903, '');
      cm.updateInfoQuest(26904, '');
      cm.updateInfoQuest(26905, '');
      cm.updateInfoQuest(26900, "sf=0;mt=1;id=0;al=1");
      cm.updateInfoQuest(64542, "gauge=0");
      cm.setSessionValue('kill_count', '0');
      cm.setAccountQuestInfo(6, "enter=202012");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9072302, "oid=495242", -3, -30, 1, -53, 47, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=495242", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        cm.forceStartQuest(14431, '');
        cm.forceStartQuest(15148, '');
        cm.updateInfoQuest(16019, '');
        cm.forceStartQuest(16019, '');
        cm.forceStartQuest(16021, '');
        cm.forceStartQuest(16023, '');
        cm.updateInfoQuest(16025, '');
        cm.forceStartQuest(16025, '');
        cm.updateInfoQuest(16027, '');
        cm.forceStartQuest(16027, '');
        cm.forceStartQuest(16029, '');
        cm.forceStartQuest(16874, '');
        cm.forceCompleteQuest(16874);
        cm.forceStartQuest(16875, '');
        cm.forceCompleteQuest(16875);
        cm.forceStartQuest(16876, '');
        cm.forceCompleteQuest(16876);
        cm.forceStartQuest(18938, '');
        cm.forceStartQuest(26024, '');
        cm.forceStartQuest(100528, '');
        cm.updateInfoQuest(100528, "hide=1");
        cm.updateInfoQuest(32547, "lastDecTime=2020/12/02 20:15:15");
        cm.inGameDirectionEvent_Monologue("祥和安定的品克缤世界的一天……", 1);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction('oid=495242', 'yawn', 1800, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/yawn", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1800);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#今天也好无聊啊……该玩什么呢……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#玩以前常玩的游戏吧. ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                    cm.npc_SetSpecialAction("oid=495242", "fan", 2880, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/fan", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2880);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=495242", 'pogoStick', 2400, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/pogostick", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2400);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=497884");
                        cm.npc_SetSpecialAction("oid=495242", 'moving', 1440, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/beanmoving", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1440);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=495242", "rCcar", 3600, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/rccar", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3600);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=495242", "guitar", 1200, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/guitar", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=495242", "headSet", 2400, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/headset2", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2400);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction('oid=495242', "yoyo", 1680, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/yoyo", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1680);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction('oid=495242', "juice", 2400, 1);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/juice", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2400);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction('oid=495242', "yawn", 1800, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/yawn", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#现在无事可做……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#真是无聊, 难道要继续玩之前的游戏吗……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                          cm.npc_SetSpecialAction("oid=495242", "moving2", 720, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/all", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(720);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=495242", "rCcar2", 540, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(540);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=495242", "fan2", 420, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(420);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=495242", "yoyo2", 300, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=495242", "guitar2", 540, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(540);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction('oid=495242', "pogoStick2", 720, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(720);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=495242", "headSet2", 810, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(810);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction('oid=495242', "juice2", 720, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(720);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=495242", "rCcar3", 270, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(270);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=495242", "headSet3", 270, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(270);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=495242", "moving3", 240, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(240);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=495242", "guitar3", 180, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(180);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=498257");
                                                                  cm.npc_SetSpecialAction("oid=495242", 'fan3', 210, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(210);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=495242", "moving4", 240, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=495242", "yoyo3", 150, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=495242", "pogoStick3", 240, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=495242", "moving5", 240, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=495242", "juice3", 240, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=495242", "yawn", 1800, 1);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/yawn", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=495242", "Rolling", 3550, 1);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/rolling", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs20#无聊! 真无聊! ", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs20#一点没有新意! ", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                    cm.setNpcSpecialActionReset("oid=495242");
                                                                                    cm.npc_ChangeController(9072300, 'oid=499620', -116, -25, 1, -166, -66, 1, false, 0, false);
                                                                                    cm.npc_SetSpecialAction('oid=499620', "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_LeaveField("oid=498567");
                                                                                      cm.npc_SetSpecialAction("oid=495242", "discovery2", -1, 1);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/discovery", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=494709");
                                                                                        cm.npc_LeaveField('oid=497405');
                                                                                        cm.npc_LeaveField("oid=499689");
                                                                                        cm.npc_SetSpecialAction('oid=495242', "worry", -1, 1);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/worry", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#哎……我还以为你做了什么呢, 原来是把我叫到常去的地方啊! ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#要是想去那里玩, 应该会被奇怪的冒险家痛揍一顿吧……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#反正要是去了其他世界, 我就会变弱. ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#嗯, 我对那里也有点厌倦了……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                                  cm.npc_ChangeController(9072303, "oid=500070", 720, -25, 1, 670, 770, 1, false, 0, false);
                                                                                                  cm.npc_SetSpecialAction('oid=500070', 'summon', 0, 0);
                                                                                                  cm.npc_SetSpecialAction("oid=500070", "moving", 8640, 1);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/blackbeanmoving", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(8640);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.setNpcSpecialActionReset("oid=500070");
                                                                                                    cm.npc_LeaveField("oid=500070");
                                                                                                    cm.npc_ChangeController(9072303, "oid=500385", 389, -25, 1, 339, 439, 1, false, 0, false);
                                                                                                    cm.npc_SetSpecialAction('oid=500385', "summon", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#你还是一副和以前一样的傻表情. ", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                      cm.npc_LeaveField("oid=500071");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#你好像完全没有\r\n察觉到我布莱克缤啊! ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                        cm.npc_SetSpecialAction("oid=500385", "giggle", -1, 1);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/giggle", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#好了, 今天也玩弄一下品克缤那家伙吧! ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                            cm.npc_SetSpecialAction('oid=500385', "potal", 2040, 1);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/potal", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1680);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_ChangeController(9072301, "oid=500714", 112, -25, 1, 62, 162, 1, false, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=500714", "summon", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(360);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=500385", "giggle", -1, 1);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/giggle", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#我为你准备了在通过后'等级大大降低'\r\n的特别传送口! ", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_NormalSpeechBalloon("#fn黑体##fs15#嘿嘿！而且这次还获得了可以随意变更颜色的魔法哦！", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#到从未见过的地方锻炼锻炼吧. ", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 9072303, null, cm.getPlayer().getId());
                                                                                                                      cm.npc_SetSpecialAction('oid=500385', "moving2", 10080, 1);
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/blackbeanmoving", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_LeaveField("oid=500385");
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_LeaveField('oid=500389');
                                                                                                                            cm.npc_SetSpecialAction("oid=495242", 'discovery', -1, 1);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/discovery", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#哦? 那个传送口中出现的地方, 我还是第一次看到呢! ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                                                                cm.npc_SetSpecialAction('oid=495242', "expectation", -1, 1);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#去吗……#fs18#去不去……#fs20#去不去! ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                                                                                                                                    cm.npc_LeaveField("oid=500714");
                                                                                                                                    cm.npc_SetSpecialAction("oid=495242", "jumpIn", 2280, 1);
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/jumpin", 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2280);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.npc_LeaveField("oid=500788");
                                                                                                                                    cm.npc_LeaveField("oid=495242");
                                                                                                                                    cm.npc_ChangeController(9072301, "oid=501831", 112, -25, 1, 62, 162, 1, false, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=501831", 'summon', 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.npc_LeaveField("oid=499620");
                                                                                                                                    cm.npc_LeaveField('oid=501831');
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(927030091, 0, true);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}