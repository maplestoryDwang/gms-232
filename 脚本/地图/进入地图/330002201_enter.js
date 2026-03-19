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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/bird", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530140, "oid=35724669", 30, 20, 1, -20, 80, 0, true, false);
      cm.npc_SetSpecialAction("oid=35724669", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs26#清晨\r\n#fs14#2年级教室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=35724669", 1, 50, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=35724669", -1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=35724669", 1, 50, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Voice2.img/Friends/CH2_01/1", 100);
                    cm.effect_NormalSpeechBalloon("……没有人吧? ", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                      cm.effect_Voice("Voice2.img/Friends/CH2_01/2", 100);
                      cm.effect_NormalSpeechBalloon("哈哈……很好. 清晨计划成功啦. ", 1, 0, 0, 5000, 1530140, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("我已经掌握了她的所有日程. 今天她会为了凑齐出勤天数而来学校上课的！", 0);
                          cm.effect_Voice("Voice2.img/Friends/CH2_01/3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("而且, 就在她坐上座位的瞬间, 就会发现我彻夜不眠, 一字一句所写下的、发自肺腑的情书了. ", 1);
                            cm.effect_Voice("Voice2.img/Friends/CH2_01/4", 100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("letter", "Map/Effect2.img/spinOff1/letter1", 0, 1500, 0, 0, 12, 4, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("虽然是出自我手，但那可是一封非常有男子气概的信呢。就算是再高高在上的偶像明星，读了我的信的话，也会对我倾心的……哈哈哈……", 37, 1530140, false, true);
                                cm.effect_Voice("Voice2.img/Friends/CH2_01/5", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 1500, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=35724669", 1, 440, 120);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 454, 58);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(6500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=35724669", 'lovelove', -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("呼……马上要把信给她了, 我还真有些紧张呢. ", 0);
                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/6", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("就算天生有着魔族血脉的我……在面对爱情的时候, 也不过是一个胆战心惊的小动物罢了！哈哈哈……", 1);
                                                cm.effect_Voice("Voice2.img/Friends/CH2_01/7", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=35724669", "loveshy", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("呃……我还在犹豫什么呢? 该不会是害羞了吧? 我吗? ", 0);
                                                        cm.effect_Voice("Voice2.img/Friends/CH2_01/8", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("喂, 信！还不赶紧从我手里离开? 诶！诶！", 1);
                                                          cm.effect_Voice("Voice2.img/Friends/CH2_01/9", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……所以那个哥哥突然间……", 37, 1530180, false, true);
                                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/10", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('真的吗？太强悍了。', 37, 1530240, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH2_01/11", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 1530140, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#呃……这些碍事的家伙已经！哎呀，不管啦！", 37, 1530140, false, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_01/12", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setNpcSpecialActionReset("oid=35724669");
                                                                      cm.npc_ChangeController(1530549, "oid=35746696", 622, 20, 2, 572, 672, 1, false, false);
                                                                      cm.npc_SetSpecialAction("oid=35746696", "summon", 0, 0);
                                                                      cm.npc_SetForceMove("oid=35724669", -1, 570, 280);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      cm.effect_NormalSpeechBalloon("#b（赶紧把信放下……）#k", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                                                            cm.playSoundEffDirectly("Ambience.img/bird");
                                                                            cm.npc_LeaveField("oid=35724669");
                                                                            cm.npc_LeaveField("oid=35724669");
                                                                            cm.npc_ChangeController(1530180, "oid=35748606", 200, 20, 1, 150, 250, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=35748606", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(1530240, "oid=35748607", 300, 20, 1, 250, 350, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=35748607", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(1530270, "oid=35748608", 420, 20, 1, 370, 470, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=35748608", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(1530280, "oid=35748609", 520, 20, 2, 470, 570, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=35748609", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                  cm.sendNormalTalk_Bottom("……所以说……哎呀，那不是奥尔卡吗？", 37, 1530180, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(1530130, "oid=35750693", 10, 20, 1, -40, 60, 0, true, false);
                                                                                    cm.npc_SetSpecialAction("oid=35750693", "summon", 0, 0);
                                                                                    cm.npc_ChangeController(1530400, "oid=35750694", -30, 20, 1, -80, 20, 0, true, false);
                                                                                    cm.npc_SetSpecialAction("oid=35750694", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 100, 234, 58);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2202);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        cm.effect_NormalSpeechBalloon("晕, 是奥尔卡. ", 1, 0, 0, 2500, 1530270, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          cm.effect_NormalSpeechBalloon("是奥尔卡, 太强了. ", 1, 0, 0, 2500, 1530280, cm.getPlayer().getId());
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("奥尔卡，你好！好久不见啦。最近因为录节目的事很忙吧？", 37, 1530180, false, true);
                                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_01/13", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 1530130, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("……你是？？", 37, 1530130, false, true);
                                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_01/14", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("天呐，你不认识我吗？我是你的同班同学卡珊德拉啊。因为太长时间没来学校都不记得了吗？", 37, 1530180, true, true);
                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_01/15", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我不认识。可不可以别装作跟奥尔卡很亲密的样子来搭讪啊？", 37, 1530130, true, true);
                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_01/16", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=35750693", 1, 650, 120);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_LeaveField("oid=35748606");
                                                                                                        cm.npc_LeaveField("oid=35748606");
                                                                                                        cm.npc_LeaveField("oid=35748607");
                                                                                                        cm.npc_LeaveField("oid=35748607");
                                                                                                        cm.npc_ChangeController(1530180, "oid=35758158", 200, 20, 1, 150, 250, 0, true, false);
                                                                                                        cm.npc_SetSpecialAction("oid=35758158", 'summon', 0, 0);
                                                                                                        cm.npc_ChangeController(1530240, "oid=35758159", 300, 20, 1, 250, 350, 0, true, false);
                                                                                                        cm.npc_SetSpecialAction("oid=35758159", "summon", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=35748608");
                                                                                                          cm.npc_LeaveField("oid=35748608");
                                                                                                          cm.npc_LeaveField("oid=35748609");
                                                                                                          cm.npc_LeaveField("oid=35748609");
                                                                                                          cm.npc_ChangeController(1530270, "oid=35758648", 420, 20, 1, 370, 470, 0, true, false);
                                                                                                          cm.npc_SetSpecialAction("oid=35758648", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(1530280, "oid=35758649", 520, 20, 2, 470, 570, 0, true, false);
                                                                                                          cm.npc_SetSpecialAction("oid=35758649", "summon", 0, 0);
                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 50, 534, 58);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/17", 100);
                                                                                                              cm.effect_NormalSpeechBalloon("真是个浆糊脑子……", 1, 0, 0, 2000, 1530180, cm.getPlayer().getId());
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=35750693");
                                                                                                                cm.npc_LeaveField("oid=35750693");
                                                                                                                cm.npc_ChangeController(1530130, "oid=35760189", 692, 20, 2, 642, 742, 1, true, false);
                                                                                                                cm.npc_SetSpecialAction("oid=35760189", "summon", 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 1530130, cm.getPlayer().getId());
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("嗯？我什么都没说。哈哈哈……", 37, 1530180, false, true);
                                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_01/18", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("对了，奥尔卡，你的桌子上好像有封信？", 37, 1530180, true, true);
                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_01/19", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 1530130, cm.getPlayer().getId());
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("信……？", 37, 1530130, false, true);
                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_01/20", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("看上去像是一封情书呢？哈哈哈。", 37, 1530180, true, true);
                                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_01/21", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("什么嘛，这脏兮兮的信？经纪人，帮我把它扔掉。", 37, 1530130, true, true);
                                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_01/22", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("OK。", 37, 1530400, true, true);
                                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/23", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=35750694", 1, 500, 150);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("等我下课之后来接我吧。要是敢晚1秒的话，知道吧？奥尔卡可是会生气的！", 37, 1530130, false, true);
                                                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_01/24", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom('OK。', 37, 1530400, true, true);
                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_01/25", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_LeaveField("oid=35746696");
                                                                                                                                      cm.npc_LeaveField("oid=35746696");
                                                                                                                                      cm.npc_SetForceMove("oid=35750694", -1, 300, 150);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("……等等！我得先看看是什么内容才行。把它拿回来吧。", 37, 1530130, false, true);
                                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_01/26", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("……？", 37, 1530400, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("……我只是改变主意了。虽然不是很好奇，但万一是什么重要内容呢。", 37, 1530130, false, true);
                                                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_01/27", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("还不快点拿过来，磨蹭什么呢？你现在还不了解奥尔卡的性格吗？非得让我说第二遍吗？", 37, 1530130, true, true);
                                                                                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_01/28", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("……OK。", 37, 1530400, true, true);
                                                                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_01/29", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=35750694", 1, 300, 150);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("……还在那儿愣着干什么？把信放下之后赶紧出去吧。长那么大块头还真是慢腾腾的。", 37, 1530130, false, true);
                                                                                                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_01/30", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom('OK。', 37, 1530400, true, true);
                                                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_01/31", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_ChangeController(1530549, "oid=35777181", 622, 20, 2, 572, 672, 1, false, false);
                                                                                                                                                          cm.npc_SetSpecialAction("oid=35777181", "summon", 0, 0);
                                                                                                                                                          cm.npc_SetForceMove("oid=35750694", -1, 500, 150);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=35750694");
                                                                                                                                                            cm.npc_LeaveField("oid=35750694");
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35758158"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35758159"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35758648"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35758649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#b（那性格可真不是盖的……）#k", 37, 1530270, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#b（和电视里看到的，完全就是两个人嘛……）#k", 37, 1530280, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=35758158", 1, 350, 180);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("那个，上面都写了什么？我可以一起看吗？", 37, 1530180, false, true);
                                                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_01/32", 100);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("哼，那不是明摆着的嘛。当然是夸我奥尔卡漂亮的话了？这种信我早都看腻了。", 37, 1530130, true, true);
                                                                                                                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_01/33", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.setAmbience("Ambience.img/crow", 100, 60);
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("letter", "Map/Effect2.img/spinOff1/letter2", 0, 1500, 0, 0, 12, 4, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom('#fs22#……？？', 37, 1530180, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#fs30#……？！？！？", 37, 1530130, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35758158"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=35760189"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.playSoundEffDirectly("Ambience.img/crow");
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#fs30#啊啊呃~~！！", 37, 1530130, false, true);
                                                                                                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_01/35", 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.playVideoByScript("friendsStory.avi");
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                    cm.effect_Text(["#fn黑体##fs24#Chapter 2\r\n#fs18#~偶像明星奥尔卡与跟踪狂大骚动~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                                                                                                                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                                          cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                                                  cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                                                        cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                          cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                            cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                              cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                                cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                                  cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/1530120.img/stand/0#    Hidden Mission：手脚发麻#fs18#\r\n\r\n                HINT：得了相思病的不只是弗朗西斯。\r\n                           请去尘土那里寻找特别的情书！", 1);
                                                                                                                                                                                                                                      cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                      cm.forceStartQuest(33047, '');
                                                                                                                                                                                                                                      cm.forceStartQuest(32761, '');
                                                                                                                                                                                                                                      cm.forceCompleteQuest(32761);
                                                                                                                                                                                                                                      cm.forceStartQuest(32702, '');
                                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                                      cm.warp(330000000, 1);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;