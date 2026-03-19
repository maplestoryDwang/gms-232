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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
      cm.npc_ChangeController(2570100, "oid=38037382", -180, 145, 6, -230, -130, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38037382", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2570101, "oid=38037383", 215, 165, 4, 165, 265, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38037383", "summon", 0, 0);
      cm.npc_ChangeController(2570102, "oid=38037384", 145, 109, 2, 95, 195, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38037384", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=38037385", 30, 163, 5, -20, 80, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38037385", 'summon', 0, 0);
      cm.npc_ChangeController(2570104, "oid=38037386", -340, 163, 6, -390, -290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38037386", 'summon', 0, 0);
      cm.npc_ChangeController(2570105, "oid=38037387", 275, 145, 3, 225, 325, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38037387", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 170, 146);
      cm.npc_ChangeController(2570107, "oid=38037388", -280, 97, 6, -330, -230, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38037388", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38037388", 'die2', -1, 1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#因为是已经交战过数十次的对手，战斗打得很轻松。", 0);
        cm.effect_Voice("Voice6.img/Library/kel/15-01-kel.1.mp3", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#我不知疲倦地砍杀着敌人。", 1);
          cm.effect_Voice("Voice6.img/Library/kel/15-02-kel.1.mp3", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fc0xFF000000#然而，不管我多么激烈地投入战斗", 0);
            cm.effect_Voice("Voice6.img/Library/kel/15-03-kel.1.mp3", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fc0xFF000000#那个梦，那副情景，那个声音……", 1);
              cm.effect_Voice("Voice6.img/Library/kel/15-04-kel.1.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#始终挥之不去。", 1);
                  cm.effect_Voice("Voice6.img/Library/kel/15-05-kel.1.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5500);
                      cm.effect_Text(["#fn黑体##fs18#第1037个太阳……。", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#……。', 36, 2570100, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=38037384", "sit", -1, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -148, 127);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2200, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#团长……", 36, 2570103, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=38037382", 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -58, 127);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#再也……", 36, 2570103, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#我实在……做不下去了。", 36, 2570103, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#那讨厌的太阳……我实在忍不了了。", 36, 2570103, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#就不能……想想别的办法吗？", 36, 2570103, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#什么方法？", 36, 2570100, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我们要……逃出城市。", 36, 2570103, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那故事，我已经讲过很多遍了。风险太大。", 36, 2570100, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#随着时间流逝，恶魔的力量会呈指数级迅速增强，\r\n万一我们逃脱失败……", 36, 2570100, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#所以，如果让他争取到足够的时间，\r\n到时候就没人能阻止他了。", 36, 2570100, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#圣瑞尼亚……会灭亡吧。", 36, 2570100, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#那我们……\r\n只能不断地像这样继续这场不知何时才会结束的战争吗？", 36, 2570103, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#你悠着点，瑞恩。我们只是后排兵力。", 36, 2570102, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 210, 180);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                              cm.sendNormalTalk_Bottom("#face2#哈丁、艾德，还有魁格都已经战死了好几次。", 36, 2570102, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=38037385", 1);
                                                                                cm.sendNormalTalk_Bottom("#face6#所以呢？", 36, 2570103, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face6#没有战死过的我，连发牢骚的资格都没有吗？", 36, 2570103, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#行了，瑞恩。", 36, 2570101, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#现在不光艾德……\r\n连你也在袒护贵族小姐……", 36, 2570103, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face6#从现在开始……由我来打头阵吗？嗯？", 36, 2570103, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#那也不错……", 36, 2570105, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.setNpcSpecialActionReset("oid=38037387");
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#你……有那样的勇气吗……", 36, 2570105, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570103, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("无尽的疲劳在蚕食着所有人的神志。", 0);
                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/16-01-kel.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("是从哪个瞬间开始的呢……", 0);
                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/16-02-kel.mp3", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("所有人都渐渐发生了变化。", 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/16-02-kel.1.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("哈丁他……一改先前的迟疑，可以毫不犹豫地刺穿敌人的后背。", 0);
                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/16-03-kel.mp3", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue("亚殷开始不时地向敌人施展出超乎需求的魔法。", 0);
                                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/16-05-kel.mp3", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_Monologue("瑞恩的箭再没有射偏，同时也变得十分惊险。", 0);
                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/16-06-kel.mp3", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_Monologue("艾德也几乎变得沉默寡言了。", 1);
                                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/16-08-kel.mp3", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("没有变化的只有魁格。", 0);
                                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/16-09-kel.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue('因为他……', 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/16-10-kel.mp3", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#老师。", 36, 2570107, false, true, 1);
                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/25-1-prince.mp3", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.Npc_Fadeout("oid=38037386", 0, 0);
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, -260, 180);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                                                                            cm.Npc_Fadeout("oid=38037383", 0, 300);
                                                                                                                                            cm.Npc_Fadeout("oid=38037384", 0, 300);
                                                                                                                                            cm.Npc_Fadeout("oid=38037385", 0, 300);
                                                                                                                                            cm.Npc_Fadeout("oid=38037387", 0, 300);
                                                                                                                                            cm.npc_ChangeController(2570107, "oid=38043580", -360, 97, 6, -410, -310, 0, false, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=38043580", 'summon', 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                            cm.npc_setForceFlip("oid=38037382", -1);
                                                                                                                                            cm.Npc_Fadeout("oid=38043580", 180, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom('#face0#！！！', 36, 2570100, false, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你又一次失去了我。", 36, 2570107, false, true, 1);
                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/17-01-prince.mp3", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这都是您自找的。", 36, 2570107, true, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/17-02-prince.mp3", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570100, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你已经料到了吧？", 36, 2570107, false, true, 1);
                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/17-05-prince.mp3", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我想说的话……", 36, 2570107, true, true, 1);
                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/17-06-prince.mp3", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#以及……你知道我终究是无法说出口的。", 36, 2570107, true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/17-07-prince.mp3", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('10', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/6/0", 0, 2500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 2500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#(不……我……我是……)", 36, 2570100, false, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/17-04-kel.mp3", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##r王位簒夺者的下场#k无非这两种之一。", 36, 2570107, true, true, 1);
                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/03-30-prince.mp3", 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#要么死，要么成为国王。", 36, 2570107, true, true, 1);
                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/03-31-prince.mp3", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#老师……我……", 36, 2570107, true, true, 1);
                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/03-32-prince.2.mp3", 100);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#(别说了……不行……)", 36, 2570100, false, true, 1);
                                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/17-08-kel.1.mp3", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2##r(我实在很害怕。)", 36, 2570107, false, true, 1);
                                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/17-09-prince.mp3", 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2##r(所以……请你……保护我吧。)", 36, 2570107, false, true, 1);
                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/17-10-prince.mp3", 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#(王子殿下，我……)", 36, 2570100, true, true, 1);
                                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/17-11-kel.mp3", 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2##r(老师，请你保护我吧。)", 36, 2570107, true, true, 1);
                                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/17-12-prince.mp3", 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2##r(即使那会让你将剑锋对准你保护的国王……)", 36, 2570107, true, true, 1);
                                                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/17-13-prince.mp3", 100);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2##r(即使那会违背你的誓约，你的骄傲，)", 36, 2570107, true, true, 1);
                                                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/17-14-prince.mp3", 100);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2##r(不是为了王国，而是为了你所爱的人……)", 36, 2570107, true, true, 1);
                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/17-15-prince.mp3", 100);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2##r(仅此一次，请举起剑吧。)", 36, 2570107, true, true, 1);
                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/17-16-prince.1.mp3", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#(别说了……)", 36, 2570100, false, true, 1);
                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/17-17-kel.mp3", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2##r(老师，我……好害怕。)", 36, 2570107, true, true, 1);
                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/17-18-prince.mp3", 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('10', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你选择了沉默。", 36, 2570107, false, true, 1);
                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/17-21-prince.mp3", 100);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#因为对老师来说……\r\n那不值一提的骄傲、伪善、自欺，比其他更重要。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/17-22-prince.mp3", 100);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom('#face0#你看。', 36, 2570107, false, true, 1);
                                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/17-24-prince.mp3", 100);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你的沉默与旁观……", 36, 2570107, true, true, 1);
                                                                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/17-25-prince.mp3", 100);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#究竟造成了什么样的结果……", 36, 2570107, true, true, 1);
                                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/17-26-prince.mp3", 100);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('11', "Effect/Direction25.img/Dlep6/ilust/9", 0, 2000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不，我是……", 36, 2570100, false, true, 1);
                                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/17-27-kel.mp3", 100);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#请你记住。", 36, 2570107, false, true, 1);
                                                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/17-28-prince.mp3", 100);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#即使轮回数千，数万遍……", 36, 2570107, true, true, 1);
                                                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/17-29-prince.mp3", 100);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你也无法挽回任何事情。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/17-30-prince.mp3", 100);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#老师……对不起……", 36, 2570107, false, true, 1);
                                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/17-31-prince.mp3", 100);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#请你……遵守当初的誓约……", 36, 2570107, false, true, 1);
                                                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/17-32-prince.mp3", 100);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38043580");
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('11', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#当初的……", 36, 2570100, false, true, 1);
                                                                                                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/17-33-kel.mp3", 100);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.setAccountQuestInfo(252, "count=41124;T=20210420233733");
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#誓约……", 36, 2570100, true, true, 1);
                                                                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/17-34-kel.mp3", 100);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#一定……", 36, 2570100, false, true, 1);
                                                                                                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/17-36-kel.mp3", 100);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 2000, 0);
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037382");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037383");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037384");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037385");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037386");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037387");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=38037388");
                                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                                cm.warp(308000019, 0, false);
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
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}