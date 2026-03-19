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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -80, 150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.Hidden_background("cernium_door1", 1, 0, 0, 0);
        cm.Hidden_background("cernium_door2", 1, 1, 0, 0);
        cm.Hidden_background("cernium_shadow", 1, 1, 0, 0);
        cm.Hidden_background("cernium_shadow2", 1, 1, 0, 0);
        cm.npc_ChangeController(3004320, "oid=2688465", -48, 200, 6, -98, 2, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2688465", "summon", 0, 0);
        cm.npc_ChangeController(3004321, "oid=2688466", -144, 200, 6, -194, -94, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2688466", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你们来得正是时候。", 37, 3004320, false, true);
            cm.effect_Voice("Voice5.img/CH1/Hawkeye/1", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#怎么回事？", 37, 1540451, true, true);
              cm.effect_Voice("Voice5.img/CH1/Nineheart/19", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我也不知道。\r\n但显然威尔那家伙对汉斯耍了什么花招。", 37, 3004320, true, true);
                cm.effect_Voice("Voice5.img/CH1/Hawkeye/2", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face2#汉斯？', 37, 1540451, true, true);
                  cm.effect_Voice("Voice5.img/CH1/Nineheart/20", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, -210, 150);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3004324, "oid=2688832", -500, 200, 7, -550, -450, 0, true, 500, false);
                        cm.npc_SetSpecialAction("oid=2688832", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#汉斯大人的两位徒弟来了。", 37, 3004324, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3004322, "oid=2688928", -330, 200, 7, -380, -280, 0, true, 1000, false);
                            cm.npc_SetSpecialAction("oid=2688928", 'summon', 0, 0);
                            cm.npc_ChangeController(3004323, "oid=2688929", -400, 200, 7, -450, -350, 0, true, 1000, false);
                            cm.npc_SetSpecialAction("oid=2688929", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我是结界魔法师·埃尔文。", 37, 3004322, false, true);
                              cm.effect_Voice("Voice5.img/CH1/Elwyn/1", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#我是操作魔法师·莉莉。这是怎么回事？", 37, 3004323, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Lily/1", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2688465");
                                    cm.npc_LeaveField("oid=2688465");
                                    cm.npc_LeaveField("oid=2688466");
                                    cm.npc_LeaveField("oid=2688466");
                                    cm.npc_LeaveField("oid=2688832");
                                    cm.npc_LeaveField("oid=2688832");
                                    cm.npc_LeaveField("oid=2688928");
                                    cm.npc_LeaveField("oid=2688928");
                                    cm.npc_LeaveField("oid=2688929");
                                    cm.npc_LeaveField("oid=2688929");
                                    cm.npc_ChangeController(3004320, "oid=2689220", -187, 200, 6, -237, -137, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2689220", 'summon', 0, 0);
                                    cm.npc_ChangeController(3004325, "oid=2689221", -300, 200, 7, -350, -250, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2689221", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                    cm.effect_Text(["#fn黑体##fs18#几分钟前……"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.Hidden_background("cernium_door1", 1, 1, 0, 0);
                                      cm.Hidden_background("cernium_door2", 1, 0, 0, 0);
                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                      cm.npc_ChangeController(3004324, "oid=2689546", -450, 200, 7, -500, -400, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=2689546", 'summon', 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#真的……不要紧吗？", 37, 3004320, false, true);
                                          cm.effect_Voice("Voice5.img/CH1/Hawkeye/3", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#不要紧。开门吧。", 37, 3003923, true, true);
                                            cm.effect_Voice("Voice5.img/CH1/Heinze/1", 128);
                                            cm.npc_LeaveField("oid=2687396");
                                            cm.npc_LeaveField("oid=2687397");
                                            cm.npc_LeaveField("oid=2688622");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#face0#……。', 37, 3004320, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2689221", 1, 200, 150);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 192, 150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/openCage", 100);
                                                          cm.Hidden_background("cernium_door1", 1, 0, 0, 0);
                                                          cm.Hidden_background("cernium_door2", 1, 1, 0, 0);
                                                          cm.Hidden_background("cernium_shadow", 1, 0, 0, 0);
                                                          cm.Hidden_background("cernium_shadow2", 1, 0, 0, 0);
                                                          cm.npc_ChangeController(3004327, "oid=2691280", 286, 200, 9, 236, 336, 1, false, 0, false);
                                                          cm.npc_SetSpecialAction("oid=2691280", "summon", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust/6", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayBGM("Bgm49/Diffraction", 0, 0);
                                                                cm.sendNormalTalk_Bottom("#face0#（这家伙……）", 37, 3003923, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#你……动了核心啊。", 37, 3003503, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH1/Will/1", 128);
                                                                    cm.Npc_Fadeout("oid=2690758", 0, 300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom('#face0#……！', 37, 3003923, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#没错。", 37, 3003923, false, true);
                                                                          cm.effect_Voice("Voice5.img/CH1/Heinze/2", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#感想如何？\r\n应该和我当初的感受差不多吧……？", 37, 3003503, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH1/Will/2", 128);
                                                                            cm.npc_LeaveField("oid=2690758");
                                                                            cm.npc_LeaveField("oid=2692012");
                                                                            cm.npc_LeaveField("oid=2687699");
                                                                            cm.npc_LeaveField("oid=2690757");
                                                                            cm.npc_LeaveField("oid=2690756");
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#不对……那是不可能的。\r\n如今他已消失，你能感受到的应该只有后悔和绝望。", 37, 3003503, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH1/Will/3", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#从今往后，人类只剩下一条路。\r\n就是被囚禁在世间法则创造的牢笼中，像牲口一样浑浑噩噩的混日子。", 37, 3003503, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH1/Will/4", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#就算是如此，也不能让一切都回归虚无。\r\n无论如何，人类都想要活下去。", 37, 3003923, true, true);
                                                                                  cm.effect_Voice("Voice5.img/CH1/Heinze/3", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#确实，人类是这样的。\r\n但对于我们这样的人来说，那是比死亡更难以忍受的耻辱。不是吗？", 37, 3003503, true, true);
                                                                                    cm.effect_Voice("Voice5.img/CH1/Will/5", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3003923, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#你有话想问我吧。", 37, 3003503, false, true);
                                                                                          cm.effect_Voice("Voice5.img/CH1/Will/6", 128);
                                                                                          cm.npc_LeaveField("oid=2692728");
                                                                                          cm.npc_LeaveField("oid=2692729");
                                                                                          cm.npc_LeaveField("oid=2692730");
                                                                                          cm.npc_LeaveField("oid=2692731");
                                                                                          cm.npc_LeaveField("oid=2692754");
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我看见了黑魔法师选择的未来。\r\n对抗者在埃斯佩拉的尽头，杀死艾欧娜的未来。", 37, 3003923, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH1/Heinze/4", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#原本是计划这样的。", 37, 3003503, true, true);
                                                                                              cm.effect_Voice("Voice5.img/CH1/Will/7", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#然而，即使是这个未来，也分出了数条走向。", 37, 3003923, true, true);
                                                                                                cm.effect_Voice("Voice5.img/CH1/Heinze/5", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#怎么会……？", 37, 3003503, false, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH1/Will/8_2.mp3", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#企图颠覆世界的超越者不止有黑魔法师一个。", 37, 3003923, true, true);
                                                                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/6", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#……怎么可能。", 37, 3003503, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH1/Will/8", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#（难道，吉伦·达勒莫尔……）", 37, 3003503, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#我问你，威尔。\r\n超越者究竟是一种什么样的存在？他们是为了什么目的被创造出来的？", 37, 3003923, true, true);
                                                                                                              cm.effect_Voice("Voice5.img/CH1/Heinze/7", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#呵呵呵……\r\n有人是这么说的。", 37, 3003503, true, true);
                                                                                                                cm.effect_Voice("Voice5.img/CH1/Will/10", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#“真相有时会变成诱人的毒苹果，懂得拒绝它也是种智慧。”", 37, 3003503, true, true);
                                                                                                                  cm.effect_Voice("Voice5.img/CH1/Will/11", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_LeaveField("oid=2689220");
                                                                                                                      cm.npc_LeaveField("oid=2689220");
                                                                                                                      cm.npc_LeaveField("oid=2689221");
                                                                                                                      cm.npc_LeaveField("oid=2689221");
                                                                                                                      cm.npc_LeaveField("oid=2691280");
                                                                                                                      cm.npc_LeaveField("oid=2691280");
                                                                                                                      cm.npc_ChangeController(3004320, "oid=2696720", -240, 200, 6, -290, -190, 0, true, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2696720", "summon", 0, 0);
                                                                                                                      cm.npc_ChangeController(3004327, "oid=2696721", 330, 200, 9, 280, 380, 1, false, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2696721", "summon", 0, 0);
                                                                                                                      cm.npc_ChangeController(3004325, "oid=2696722", 236, 200, 11, 186, 286, 0, true, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2696722", "summon", 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                      cm.Hidden_background("cernium_door1", 1, 1, 0, 0);
                                                                                                                      cm.Hidden_background("cernium_door2", 1, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 300, 150);
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
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#从这个意义上来说，我们真是天下第一号大傻瓜。\r\n对真理的渴望，那是无论如何都难以放弃的追求。", 37, 3003503, false, true);
                                                                                                                              cm.effect_Voice("Voice5.img/CH1/Will/12", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom('#face0#……', 37, 3003923, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.onSetNpcScript("oid=2696721", 1, ['special', "special2"], [1, -1]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                  cm.npc_LeaveField("oid=2687398");
                                                                                                                                  cm.npc_LeaveField("oid=2687399");
                                                                                                                                  cm.npc_LeaveField("oid=2692907");
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=2696720", 0);
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, -240, 150);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2696720"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.npc_SetForceMove("oid=2696720", 1, 5, 120);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#啊？！他居然一直藏着那样的东西？！", 37, 3004320, false, true);
                                                                                                                                          cm.effect_Voice("Voice5.img/CH1/Hawkeye/4", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_SetForceMove("oid=2696720", 1, 70, 120);
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#汉斯？别碰那个！来人！快开门！！来人啊！！", 37, 3004320, false, true);
                                                                                                                                              cm.effect_Voice("Voice5.img/CH1/Hawkeye/5", 128);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, 236, 150);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/illust/7", "oid=2696721"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzBlack", 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.Npc_Fadeout("oid=2696722", 0, 300);
                                                                                                                                                        cm.npc_ChangeController(3004326, "oid=2697934", 236, 200, 11, 186, 286, 0, true, 300, false);
                                                                                                                                                        cm.npc_SetSpecialAction("oid=2697934", "summon", 0, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#……", 37, 3003923, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.onSetNpcScript("oid=2697934", 1, ['teleport', "special"], [1, -1]);
                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzTeleport", 100);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.userSetFieldFloating(993135002, 5, 5, 1);
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.userSetFieldFloating(993135002, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                                                                                                                                                  cm.Hidden_background("cernium_door1", 1, 0, 0, 0);
                                                                                                                                                                  cm.Hidden_background("cernium_door2", 1, 1, 0, 0);
                                                                                                                                                                  cm.npc_LeaveField("oid=2696722");
                                                                                                                                                                  cm.npc_LeaveField("oid=2696722");
                                                                                                                                                                  cm.npc_LeaveField("oid=2697934");
                                                                                                                                                                  cm.npc_LeaveField("oid=2697934");
                                                                                                                                                                  cm.npc_LeaveField("oid=2689546");
                                                                                                                                                                  cm.npc_LeaveField("oid=2689546");
                                                                                                                                                                  cm.npc_ChangeController(1540451, "oid=2698542", -149, 200, 6, -199, -99, 0, true, 0, false);
                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2698542", "summon", 0, 0);
                                                                                                                                                                  cm.npc_ChangeController(3004322, "oid=2698543", -330, 200, 7, -380, -280, 0, true, 0, false);
                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2698543", "summon", 0, 0);
                                                                                                                                                                  cm.npc_ChangeController(3004323, "oid=2698544", -400, 200, 7, -450, -350, 0, true, 0, false);
                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2698544", "summon", 0, 0);
                                                                                                                                                                  cm.npc_ChangeController(3004320, "oid=2698545", -50, 200, 6, -100, 0, 1, true, 0, false);
                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2698545", "summon", 0, 0);
                                                                                                                                                                  cm.npc_LeaveField("oid=2696721");
                                                                                                                                                                  cm.npc_LeaveField("oid=2696721");
                                                                                                                                                                  cm.npc_LeaveField("oid=2696720");
                                                                                                                                                                  cm.npc_LeaveField("oid=2696720");
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -210, 150);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_ChangeController(3004327, "oid=2698546", 273, 200, 9, 223, 323, 1, false, 0, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=2698546", "summon", 0, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                    cm.npc_setForceFlip("oid=2698545", -1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#嗯……原来如此。", 37, 1540451, false, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Nineheart/21", 128);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#最近老师天天埋头研究黑魔法师的核心，状态看着很不稳定。但没想到会变成这样……", 37, 3004323, true, true);
                                                                                                                                                                              cm.effect_Voice("Voice5.img/CH1/Lily/2", 128);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_setForceFlip("oid=2698545", 1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 170, 150);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#快说，威尔！你干了什么？你把汉斯怎么了？！", 37, 3004320, false, true);
                                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH1/Hawkeye/6", 128);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哈哈哈……他已经太执着于钻研黑魔法师的思想，\r\n发生这样的事情是迟早的事。", 37, 3003503, true, true);
                                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH1/Will/13", 128);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我只不过…… \r\n在他背后稍稍推了一把而已。", 37, 3003503, true, true);
                                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH1/Will/14", 128);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#你给他的那个核心是什么？", 37, 3004323, true, true);
                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Lily/3", 128);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#之前你们弄到的核心里只保存着未来情境的简单罗列，\r\n而我给他的核心，却蕴藏着黑魔法师的思想。", 37, 3003503, true, true);
                                                                                                                                                                                              cm.effect_Voice("Voice5.img/CH1/Will/15", 128);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice5.img/CH1/Will/16", 128);
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#里面包含着伟大人物的思想、用意以及他所经受的挫折。", 37, 3003503, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom('#face4#……。', 37, 3004323, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.warp(993130500, 0, false);
                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                    cm.forceCompleteQuest(39713);
                                                                                                                                                                                                    cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698542");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698542");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698543");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698543");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698544");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698544");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698545");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698545");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698546");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2698546");
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