var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34817) == "m=1;kc=0;clear=1") {
    action34817(f, E, e);
  } else if (cm.getInfoQuest(34817) == "m=1;kc=20;clear=1") {
    action34817_2(f, E, e);
  } else {
    action34817_2(f, E, e);
  }
}
function action34817_2(f, E, e) {
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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, -650);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001301, "oid=762633", -246, -865, 3, -296, -196, 0, true, false);
          cm.npc_SetSpecialAction("oid=762633", "summon", 0, 0);
          cm.npc_ChangeController(3001300, "oid=762634", 4, -865, 4, -46, 54, 1, true, false);
          cm.npc_SetSpecialAction("oid=762634", "summon", 0, 0);
          cm.npc_ChangeController(3001378, "oid=762635", 165, -700, 4, 115, 215, 0, false, false);
          cm.npc_SetSpecialAction("oid=762635", 'summon', 0, 0);
          cm.npc_ChangeController(3001316, 'oid=762636', 60, -700, 4, 10, 110, 1, true, false);
          cm.npc_SetSpecialAction('oid=762636', 'summon', 0, 0);
          cm.npc_ChangeController(3001315, "oid=762637", 110, -700, 4, 60, 160, 1, true, false);
          cm.npc_SetSpecialAction("oid=762637", 'summon', 0, 0);
          cm.npc_ChangeController(3001317, "oid=762638", 160, -700, 4, 110, 210, 1, true, false);
          cm.npc_SetSpecialAction('oid=762638', 'summon', 0, 0);
          cm.npc_ChangeController(3001318, "oid=762639", 210, -700, 4, 160, 260, 1, true, false);
          cm.npc_SetSpecialAction("oid=762639", "summon", 0, 0);
          cm.npc_ChangeController(3001319, "oid=762640", 260, -700, 5, 210, 310, 1, true, false);
          cm.npc_SetSpecialAction('oid=762640', "summon", 0, 0);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_SetSpecialAction("oid=762635", "dot", -1, 1);
          cm.sendNormalTalk_Bottom("#face9#呼，处理得差不多了吧？", 37, 3001351, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("幽灵们怎么会……难道教授们就是……", 37, 3001318, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face9#怎么可能！阿加特大人……", 37, 3001351, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#咳呃……", 37, 3001301, true, true);
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
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.sendNormalTalk_Bottom("#face9#阿加特大人！？", 37, 3001351, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("校长！！", 37, 3001362, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=762633", 1, 120, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("校长！你没事吧？", 37, 3001315, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#阿加特大人的魔法平衡被打破了。原因似乎是魔力消耗过度。", 37, 3001300, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face9#阿加特大人，快来人啊……", 37, 3001351, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#不，没时间了。", 37, 3001301, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                    cm.npc_SetSpecialAction("oid=762635", "open", 0, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#大家赶快离开这。", 37, 3001301, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("校长……", 37, 3001362, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('我们……还能回去吗？', 37, 3001363, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#村庄……学校都可以重建。\r\n重要的是在座的各位。", 37, 3001301, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#没……呃呃……时间了。快！", 37, 3001301, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('孩子们，快走！', 37, 3001365, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.Npc_Fadeout("oid=762636", 0, 1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Npc_Fadeout("oid=762637", 0, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout("oid=762638", 0, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Npc_Fadeout("oid=762639", 0, 1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.Npc_Fadeout("oid=762640", 0, 1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face9#阿加特大人也快……", 37, 3001351, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#那样可不行。", 37, 3001309, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(3001372, "oid=763954", -420, -865, 2, -470, -370, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=763954", "summon", 0, 0);
                                                                cm.npc_ChangeController(3001372, "oid=763955", -500, -865, 1, -550, -450, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=763955", "summon", 0, 0);
                                                                cm.npc_ChangeController(3001372, "oid=763956", -580, -865, 1, -630, -530, 0, true, false);
                                                                cm.npc_SetSpecialAction('oid=763956', "summon", 0, 0);
                                                                cm.npc_ChangeController(3001309, "oid=763957", -350, -700, 2, -400, -300, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=763957", "summon", 0, 0);
                                                                cm.npc_SetSpecialAction("oid=762635", "disappeared", 0, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_close", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=762635");
                                                                  cm.npc_LeaveField('oid=762635');
                                                                  cm.sendNormalTalk_Bottom("#face9#啊，门！", 37, 3001351, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -200, -650);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                      cm.npc_setForceFlip("oid=762633", -1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#戴尔斯……", 37, 3001301, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你们两个今天全都死定了。", 37, 3001309, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=763957", "reachout", -1, 1);
                                                                            cm.sendNormalTalk_Bottom("#face9#阿加特大人，我来挡住！", 37, 3001351, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=762634", 'alert', -1, 1);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_warning", 100);
                                                                              cm.sendNormalTalk_Bottom("#face3#警告！警告！高输出能量！对方的力量远超主人！", 37, 3001300, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#退后，伊利温！", 37, 3001301, true, true);
                                                                                cm.effect_Voice("Voice3.img/illium/agate/2", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=763957", "skill", 0, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction14.img/illium/death/3", 0, 1500, 0, 0, 12, 4, 0);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 0, -650);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#咳！！阿加特！", 37, 3001309, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#竟然还有这么大的力量！", 37, 3001309, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_LeaveField("oid=763957");
                                                                                              cm.npc_LeaveField("oid=763957");
                                                                                              cm.npc_LeaveField("oid=763954");
                                                                                              cm.npc_LeaveField("oid=763954");
                                                                                              cm.npc_LeaveField("oid=763955");
                                                                                              cm.npc_LeaveField("oid=763955");
                                                                                              cm.npc_LeaveField('oid=763956');
                                                                                              cm.npc_LeaveField("oid=763956");
                                                                                              cm.sendNormalTalk_Bottom("#face3#对象脱离战场。", 37, 3001300, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#呃呃……", 37, 3001301, true, true);
                                                                                                cm.effect_Voice("Voice3.img/illium/agate/3", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                                    cm.sendNormalTalk_Bottom("#face9#啊，阿加特大人？！", 37, 3001351, false, true);
                                                                                                    cm.effect_Voice("Voice3.img/illium/user/Female/10", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction14.img/illium/death/0", 0, 1500, 0, -80, 12, 4, 1);
                                                                                                      cm.sendNormalTalk_Bottom("#face1#阿加特大人！！阿加特大人！！", 37, 3001351, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#抱歉，伊利温……看来……是我太逞强了。", 37, 3001301, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#会、会没事的，阿加特大人。好，那快离开这吧。", 37, 3001351, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#不……你先……收下这个。伊利温。", 37, 3001301, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#这、这……", 37, 3001351, true, true);
                                                                                                              cm.effect_Voice("Voice3.img/illium/user/Female/8", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1500, 0, -80, 13, 4, 1);
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction14.img/illium/death/2", 0, 1500, 0, -80, 14, 4, 1);
                                                                                                                cm.sendNormalTalk_Bottom("#face4#敌人之所以攻击我们平民翼人……是因为这个水晶……\r\n这个水晶是……古代神的遗物……", 37, 3001301, true, true);
                                                                                                                cm.effect_Voice("Voice3.img/illium/agate/6", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#古代神的……遗物！", 37, 3001351, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#听好了，伊利温。\r\n赶快去次元那边寻找古代神之圣所。\r\n这样才能……咳咳！唤醒遗物的力量……", 37, 3001301, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#阿加特大人！！", 37, 3001351, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face4#去吧，伊利温……平民翼人的未来就交给你了……", 37, 3001301, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#可我一定要守护阿加特大人……", 37, 3001351, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#别哭了……你已经……咳，对我很好了……", 37, 3001301, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face4#保护水晶……保护同学们，伊利温……", 37, 3001301, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#阿加特大人？阿加特大人！", 37, 3001351, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#别忘了……伊利温，你生来与众不同……", 37, 3001301, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('1', "Effect/Direction14.img/illium/death/1", 0, 1500, 0, -80, 13, 4, 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#阿加特大人！！！！！！！！！！！！！", 37, 3001351, false, true);
                                                                                                                                        cm.effect_Voice("Voice3.img/illium/user/Female/11", 128);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_LeaveField("oid=762633");
                                                                                                                                            cm.npc_LeaveField("oid=762633");
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            cm.effect_Voice("Voice3.img/illium/user/Female/12", 128);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#不要！！！！", 37, 3001351, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#呼呼……", 37, 3001351, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#主人，敌人在持续入侵！必须离开这里！", 37, 3001300, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#阿加特大人……", 37, 3001351, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#你交给我的东西……我会誓死守住的……", 37, 3001351, true, true);
                                                                                                                                                          cm.effect_Voice("Voice3.img/illium/user/Female/14", 128);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#这个古代水晶……", 37, 3001351, true, true);
                                                                                                                                                            cm.effect_Voice("Voice3.img/illium/user/Female/15", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#啊！", 37, 3001351, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#警告！警告！探测到强烈波长。\r\n残存的古代神人格正涌出一股强大的力量。", 37, 3001300, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face9#一股强大的力量……正涌入我的身体！", 37, 3001351, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_ChangeController(3001372, "oid=766352", 200, -865, 4, 150, 250, 1, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766352", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001372, "oid=766353", 325, -865, 5, 275, 375, 1, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766353", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001372, "oid=766354", 450, -865, 5, 400, 500, 1, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766354", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001372, 'oid=766355', 575, -865, 6, 525, 625, 1, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766355", 'summon', 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001373, "oid=766356", -175, -865, 3, -225, -125, 0, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766356", 'summon', 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001373, "oid=766357", -300, -865, 2, -350, -250, 0, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766357", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001373, 'oid=766358', -425, -865, 2, -475, -375, 0, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766358", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001373, 'oid=766359', -550, -865, 1, -600, -500, 0, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766359", "summon", 0, 0);
                                                                                                                                                                    cm.npc_ChangeController(3001373, "oid=766360", -675, -865, 1, -725, -625, 0, true, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=766360", "summon", 0, 0);
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#快后退，主人！\r\n否则会存在力量转移、人格侵蚀以及由此引发的自我崩溃的危险。", 37, 3001300, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#可是……反正也无处可逃。", 37, 3001351, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face9#为了阿加特大人，我赢定了。", 37, 3001351, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.userSetFieldFloating(940202034, 3, 3, 3);
                                                                                                                                                                          cm.effect_Voice("Voice3.img/illium/user/Female/31", 128);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/illium/magic"], [0, 10, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/casting", 100);
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#呃啊啊！！！！", 37, 3001351, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.setNpcSpecialActionReset("oid=762634");
                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.playVideoByScript("Illium1.avi");
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.userSetFieldFloating(940202034, 0, 0, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm47.img/DeathOfAsylumChoir", 0, 0);
                                                                                                                                                                                        cm.playerMessage(5, "转职后获得了更强大的魔法之翼。请查看背包。");
                                                                                                                                                                                        cm.playerMessage(-1, "转职后获得了更强大的魔法之翼。请查看背包。");
                                                                                                                                                                                        cm.updateInfoQuest(34900, "job1=1;job2=1");
                                                                                                                                                                                        cm.gainItem(1282001, 1);
                                                                                                                                                                                        cm.gainItem(1353501, 1);
                                                                                                                                                                                        cm.gainItem(1143079, 1);
                                                                                                                                                                                        cm.forceCompleteQuest(34817);
                                                                                                                                                                                        cm.forceStartQuest(34825, '');
                                                                                                                                                                                        cm.forceCompleteQuest(34825);
                                                                                                                                                                                        cm.updateInfoQuest(34817, "m=1;kc=33;exp=1;clear=1");
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/job", 100);
                                                                                                                                                                                        cm.effect_OnUserEff("Effect/BasicEff.img/JobChangedIlliumFront");
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetSpecialAction('oid=766352', "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction('oid=766353', "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction('oid=766354', "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=766355", 'die1', 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=766356", "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction('oid=766357', "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=766358", "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=766359", "die1", 0, 1);
                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=766360", "die1", 0, 1);
                                                                                                                                                                                          cm.npc_LeaveField("oid=766352");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766352");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766353");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766353");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766354");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766354");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766355");
                                                                                                                                                                                          cm.npc_LeaveField('oid=766355');
                                                                                                                                                                                          cm.npc_LeaveField("oid=766356");
                                                                                                                                                                                          cm.npc_LeaveField('oid=766356');
                                                                                                                                                                                          cm.npc_LeaveField("oid=766357");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766357");
                                                                                                                                                                                          cm.npc_LeaveField('oid=766358');
                                                                                                                                                                                          cm.npc_LeaveField("oid=766358");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766359");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766359");
                                                                                                                                                                                          cm.npc_LeaveField("oid=766360");
                                                                                                                                                                                          cm.npc_LeaveField('oid=766360');
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我感受到力量了……利奥，接下来我会怎么样？", 37, 3001354, false, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#预计会产生多多少少的人格融合，以及由此导致的混乱情况。", 37, 3001300, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#原来如此……", 37, 3001354, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#主人，我劝你最好赶快离开这。\r\n下一波攻击马上就要开始了。", 37, 3001300, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 0, -650);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好……先保住水晶要紧。\r\n阿加特大人一定也很想得到水晶。", 37, 3001354, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.effect_Voice("Voice3.img/illium/user/Female/19", 128);
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#阿加特大人一直守护的平民翼人……\r\n虽然要被迫逃离了……但绝不能忘记我们的仇人。", 37, 3001354, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.effect_Voice("Voice3.img/illium/user/Female/20", 128);
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#必须强大到能对抗他们才行。\r\n不，必须拥有……对抗他们的操控者达尔摩尔的力量才行。", 37, 3001354, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#阿加特大人……你的心愿，我一定会帮你完成的。", 37, 3001354, true, true);
                                                                                                                                                                                                            cm.effect_Voice("Voice3.img/illium/user/Female/22", 128);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#愿您安息……", 37, 3001354, false, true);
                                                                                                                                                                                                                cm.effect_Voice("Voice3.img/illium/user/Female/23", 128);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.updateInfoQuest(34817, "job=1;m=1;kc=33;exp=1;clear=1");
                                                                                                                                                                                                                  cm.npc_LeaveField("oid=762634");
                                                                                                                                                                                                                  cm.npc_LeaveField("oid=762634");
                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(940202032, 1);
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                    while (cm.getLevel() < 30) {
                                                                                                                                                                                                                      cm.getPlayer().levelUp();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    cm.changeJob(15210);
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action34817_3(f, E, e) {
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
    if (status === V++) {}
  }
}
function action34817(f, E, e) {
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
      cm.npc_ChangeController(3001316, "oid=640461", 60, -700, 4, 10, 110, 1, true, false);
      cm.npc_SetSpecialAction('oid=640461', 'summon', 0, 0);
      cm.npc_ChangeController(3001315, "oid=640462", 110, -700, 4, 60, 160, 1, true, false);
      cm.npc_SetSpecialAction("oid=640462", "summon", 0, 0);
      cm.npc_ChangeController(3001317, "oid=640463", 160, -700, 4, 110, 210, 1, true, false);
      cm.npc_SetSpecialAction('oid=640463', "summon", 0, 0);
      cm.npc_ChangeController(3001318, "oid=640464", 210, -700, 4, 160, 260, 1, true, false);
      cm.npc_SetSpecialAction('oid=640464', "summon", 0, 0);
      cm.npc_ChangeController(3001319, "oid=640465", 260, -700, 5, 210, 310, 1, true, false);
      cm.npc_SetSpecialAction("oid=640465", 'summon', 0, 0);
      cm.npc_ChangeController(3001300, "oid=640466", 134, -865, 4, 84, 184, 1, true, false);
      cm.npc_SetSpecialAction("oid=640466", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, -600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('该怎么办啊，伊利温。', 37, 3001315, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#再等一等，教授们马上就来了。", 37, 3001351, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('啊，教授们……', 37, 3001316, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face9#不是的！这……", 37, 3001351, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3001372, "oid=640687", 450, -865, 5, 400, 500, 1, true, false);
                    cm.npc_SetSpecialAction("oid=640687", 'summon', 0, 0);
                    cm.npc_ChangeController(3001373, "oid=640688", 575, -865, 6, 525, 625, 1, true, false);
                    cm.npc_SetSpecialAction('oid=640688', "summon", 0, 0);
                    cm.npc_ChangeController(3001372, 'oid=640689', 700, -865, 6, 650, 750, 1, true, false);
                    cm.npc_SetSpecialAction('oid=640689', "summon", 0, 0);
                    cm.npc_ChangeController(3001372, 'oid=640690', -300, -865, 2, -350, -250, 0, true, false);
                    cm.npc_SetSpecialAction('oid=640690', "summon", 0, 0);
                    cm.npc_ChangeController(3001373, "oid=640691", -425, -865, 2, -475, -375, 0, true, false);
                    cm.npc_SetSpecialAction("oid=640691", "summon", 0, 0);
                    cm.npc_ChangeController(3001372, "oid=640692", -550, -865, 1, -600, -500, 0, true, false);
                    cm.npc_SetSpecialAction("oid=640692", "summon", 0, 0);
                    cm.npc_ChangeController(3001373, 'oid=640693', -675, -865, 1, -725, -625, 0, true, false);
                    cm.npc_SetSpecialAction("oid=640693", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, -690);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("是幽灵！！", 37, 3001318, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face9#全体后退！", 37, 3001351, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.npc_LeaveField("oid=640466");
                                      cm.npc_LeaveField("oid=640466");
                                      cm.npc_LeaveField("oid=640687");
                                      cm.npc_LeaveField("oid=640687");
                                      cm.npc_LeaveField("oid=640688");
                                      cm.npc_LeaveField("oid=640688");
                                      cm.npc_LeaveField("oid=640689");
                                      cm.npc_LeaveField("oid=640689");
                                      cm.npc_LeaveField("oid=640690");
                                      cm.npc_LeaveField("oid=640690");
                                      cm.npc_LeaveField('oid=640691');
                                      cm.npc_LeaveField("oid=640691");
                                      cm.npc_LeaveField("oid=640692");
                                      cm.npc_LeaveField('oid=640692');
                                      cm.npc_LeaveField("oid=640693");
                                      cm.npc_LeaveField("oid=640693");
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else if (status === V++) {
                                      cm.setStandAloneMode(false);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.playerMessage(5, '请消灭区域内的怪物。');
                                      cm.npc_LeaveField("oid=640461");
                                      cm.npc_LeaveField("oid=640461");
                                      cm.npc_LeaveField("oid=640462");
                                      cm.npc_LeaveField("oid=640462");
                                      cm.npc_LeaveField("oid=640463");
                                      cm.npc_LeaveField("oid=640463");
                                      cm.npc_LeaveField('oid=640464');
                                      cm.npc_LeaveField('oid=640464');
                                      cm.npc_LeaveField("oid=640465");
                                      cm.npc_LeaveField("oid=640465");
                                      cm.dispose();
                                      cm.openNpc(2008, "圣晶副本_水晶学院_学院大厅_改造造型物");
                                    } else {
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