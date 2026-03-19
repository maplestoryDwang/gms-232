var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(37802)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(37802) && !cm.isQuestFinished(37803)) {
    action2(f, E, e);
  } else {
    cm.dispose();
    cm.npc_ChangeController(2570001, "oid=23551", 44, 17, 83, -6, 94, 1, false, 0, false);
    cm.npc_ChangeController(2570002, "oid=23552", 144, 24, 85, 94, 194, 1, false, 0, false);
    cm.npc_ChangeController(2570003, "oid=23553", -212, 77, 60, -262, -162, 0, false, 0, false);
    cm.npc_ChangeController(2570004, "oid=23554", 63, 165, 18, 13, 113, 1, false, 0, false);
    cm.npc_ChangeController(2570005, "oid=23555", 226, -54, 71, 176, 276, 1, false, 0, false);
    cm.npc_ChangeController(2500001, "oid=23556", -531, 165, 12, -581, -481, 1, false, 0, false);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm55/MyPrinceMyKingdom", 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/6/0", 0, 0, 0, -80, 0, 4, 1, -1, 0, 0, 0);
          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 0, 0, -80, 1, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(4500);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("直到几年前，我还在这里教导年幼的王子学习武艺。", 1);
              cm.effect_Voice("Voice6.img/Library/kel/03-01-kel.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("训练之后，我们经常一起俯瞰城市的景色", 0);
                cm.effect_Voice("Voice6.img/Library/kel/03-02-kel.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("淹没在夕阳中的王国全景实在太壮美……", 0);
                  cm.effect_Voice("Voice6.img/Library/kel/03-03-kel.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("甚至有时会让我感到恐惧。", 1);
                    cm.effect_Voice("Voice6.img/Library/kel/03-04-kel.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("因为……", 1);
                        cm.effect_Voice("Voice6.img/Library/kel/03-05-kel.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("正如所有美好事物的结局，也正如那无数伟大王国的遭遇，", 0);
                          cm.effect_Voice("Voice6.img/Library/kel/03-06-kel.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("圣瑞尼亚也迟早会……", 1);
                            cm.effect_Voice("Voice6.img/Library/kel/03-07-kel.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("迟早会，变成人迹荒芜的废墟……", 1);
                                cm.effect_Voice("Voice6.img/Library/prince/03-08-prince.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction25.img/Dlep6/ilust/6/1", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#只能落寞地追忆着曾经的荣耀。", 36, 2570107, false, true, 1);
                                    cm.effect_Voice("Voice6.img/Library/prince/03-09-prince.1.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('10', "Effect/Direction25.img/Dlep6/ilust/6/3", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我到现在还会偶尔想起，\r\n当初与老师在这里进行的那番对话。", 36, 2570107, false, true, 1);
                                          cm.effect_Voice("Voice6.img/Library/prince/03-10-prince.1.mp3", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我没想到你会亲自过来……\r\n要是让#r陛下#k知道……", 56, 0, true, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/prince/03-11-prince.1.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#徒弟去拜访老师，\r\n有什么好顾忌的呢？", 36, 2570107, true, true, 1);
                                              cm.effect_Voice("Voice6.img/Library/prince/03-12-prince.1.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("宫里……发生了什么变故吗？", 56, 0, false, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/prince/03-13-prince.1.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#师父曾作为他的亲信，应该最清楚。", 36, 2570107, false, true, 1);
                                                        cm.effect_Voice("Voice6.img/Library/prince/03-14-prince.1.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#陛下他……已经疯了。", 36, 2570107, false, true, 1);
                                                            cm.effect_Voice("Voice6.img/Library/prince/03-15-prince.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#他从很久以前就开始执迷于有关#r宝石#k的危险传闻。", 36, 2570107, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/Library/prince/03-16-prince.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#数年来，他翻遍整个国家，研究了各种各样的邪术。", 36, 2570107, true, true, 1);
                                                                    cm.effect_Voice("Voice6.img/Library/prince/03-17-prince.1.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#不知你是否了解，听说他最近想召唤#r恶魔#k。", 36, 2570107, true, true, 1);
                                                                      cm.effect_Voice("Voice6.img/Library/prince/03-18-prince.mp3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#宫里现在也传闻四起。", 36, 2570107, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/Library/prince/03-19-prince.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("不会成功的。", 56, 0, false, true, 1);
                                                                            cm.effect_Voice("Voice6.img/Library/prince/03-20-prince.mp3", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#是，我也是这么想的。\r\n但是，我也无法坐视不管。", 36, 2570107, true, true, 1);
                                                                              cm.effect_Voice("Voice6.img/Library/prince/03-21-prince.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#如果一直袖手旁观，万一……真的有#r可怕的灾难#k来临……\r\n到时后悔也来不及了。", 36, 2570107, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/Library/prince/03-22-prince.1.mp3", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#不觉得很美吗？", 36, 2570107, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/Library/prince/03-23-prince.1.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#老师，我很喜欢圣瑞尼亚这个国家。", 36, 2570107, false, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/Library/prince/03-24-prince.mp3", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#即使要背上违背人伦的骂名，\r\n就算被记载成历史上为权利痴狂的暴君……", 36, 2570107, false, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/Library/prince/03-25-prince.mp3", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#尽管如此，我还是想守护，也必须守护……\r\n这个国家。", 36, 2570107, true, true, 1);
                                                                                                cm.effect_Voice("Voice6.img/Library/prince/03-26-prince.mp3", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("(终究是决定……要举事了吗。)", 56, 0, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("这事一旦开始，就无法回头了。", 56, 0, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#我也很清楚。", 36, 2570107, true, true, 1);
                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/03-29-prince.mp3", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0##r王位簒夺者的下场#k无非这两种之一。", 36, 2570107, false, true, 1);
                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/03-30-prince.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#要么死，要么成为国王。", 36, 2570107, false, true, 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/03-31-prince.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_Hero8(1);
                                                                                                                        cm.fieldEffect_Hero9(10, 2500);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#老师……我……", 36, 2570107, false, true, 1);
                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/03-32-prince.2.mp3", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570107, false, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#王子殿下，现在该回去了。", 36, 2570130, false, true, 1);
                                                                                                                                cm.effect_Voice("Voice6.img/Library/knight/03-33-knight.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570107, false, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_Hero9(45, 2500);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#等事情结束后，我再来见你。", 36, 2570107, false, true, 1);
                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/03-34-prince.1.mp3", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('06', "Effect/Direction25.img/Dlep6/ilust/6/1", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#到了那时候，再请你做我的骑士吧。", 36, 2570107, false, true, 1);
                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/03-35-prince.1.mp3", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("……当然。", 56, 0, false, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.setAccountQuestInfo(252, "count=38064;T=20210420224633");
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_Monologue("看着他转身离去的身影，我实在不忍心叫住他。", 0);
                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/03-37-kel.mp3", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("我拼命地抹去了漫长沉寂中蕴藏的意义。", 1);
                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/03-38-kel.mp3", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_Monologue("要么死，要么成为国王。", 1);
                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/03-39-kel.mp3", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_Monologue("不同于他渐渐远去的身影……", 0);
                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/03-40-kel.mp3", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_Monologue("他的话在我心头迟迟盘旋不散。", 1);
                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/03-41-kel.mp3", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("BlackOut2", "Map/Effect2.img/BlackOut", 0, 5000, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('10', '', 2, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_Hero9(0, 5000);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("要么死……要么成为国王……", 56, 0, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("唔……嗯？", 56, 0, false, true, 1);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;q1=clear;04=h1;05=sit;06=h0;dir00=end");
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;q1=clear;04=h1;q2=clear;05=sit;06=h0;dir00=end");
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=h1;02=sit;03=sit;q1=clear;04=h1;q2=clear;05=sit;06=h0;dir00=end");
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=h1;02=h1;03=sit;q1=clear;04=h1;q2=clear;05=sit;06=h0;dir00=end");
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=sit;06=h0;dir00=end");
                                                                                                                                                                          cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end");
                                                                                                                                                                          cm.dispose();
                                                                                                                                                                          cm.warp(308000001, 0, true);
                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#大家都在向某处移动。", 36, 2570103, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#目前显然发生了什么事情……", 36, 2570101, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#只有我们在茫然等待……", 36, 2570102, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#没办法。轻举妄动的话，稍有不慎就可能被看作是造反行为。", 36, 2570105, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#虽说从一开始靠这几个人就干不了什么。", 36, 2570105, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h0;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                    cm.sendNormalTalk_Bottom("#face5#啊，魁格！事情怎么样了？", 36, 2570103, true, true, 1);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}