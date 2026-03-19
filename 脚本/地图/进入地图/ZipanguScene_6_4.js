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
      cm.forceCompleteQuest(58781);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111023, "oid=3980024", 410, 80, 28, 360, 460, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3980024", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(750);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.sendNormalTalk_Bottom('咳，咳呃……！', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3980024", -1, 150, 80);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#去死吧，人类。", 37, 9111023, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.sendNormalTalk_Bottom('不行，我不能输……！', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(750);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=3980024", "casting", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(750);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#阿姨！低头！！！", 37, 9111018, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_QTE(4);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(4);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/kapaBomb", "oid=3980024"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/bomb");
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#什、什么人……！", 37, 9111023, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/bomb");
                                    cm.inGameDirectionEvent_AskAnswerTime(750);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9111012, "oid=3980879", 115, 80, 26, 65, 165, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=3980879", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(750);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=3980879", "attack", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(750);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=3980024", 'hit', 0, 1);
                                          cm.sendNormalTalk_Bottom("#face0#咳啊……！！！", 37, 9111023, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#援军驾到！", 37, 9111011, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(9111011, "oid=3980984", -80, 80, 25, -130, -30, 0, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=3980984", "summon", 0, 0);
                                              cm.npc_SetSpecialAction("oid=3980984", 'attack2', 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1700);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=3980024", 'hit', 0, 1);
                                                cm.sendNormalTalk_Bottom("#face0#呃啊啊啊啊啊啊啊啊啊啊！！！！", 37, 9111023, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……我们成功了……？", 37, 9111012, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNpcSpecialActionReset("oid=3980024");
                                                        cm.sendNormalTalk_Bottom("#face0#……想得美！", 37, 9111023, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3980879"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3980984"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.npc_SetSpecialAction("oid=3980024", "casting", 0, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(9111016, "oid=3981305", -470, 80, 23, -520, -420, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=3981305", "summon", 0, 0);
                                                            cm.npc_SetForceMove("oid=3981305", 1, 270, 180);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/JP_zipang/iznaShield");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(9111069, "oid=3981306", -305, 80, 24, -355, -255, 0, false, 0, false);
                                                              cm.npc_SetSpecialAction("oid=3981306", 'summon', 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face0#哇咔咔咔咔咔咔咔！！！", 37, 9111023, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=3980024", "anahil", 0, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_LeaveField("oid=3980879");
                                                                      cm.npc_LeaveField("oid=3980879");
                                                                      cm.npc_LeaveField("oid=3980984");
                                                                      cm.npc_LeaveField("oid=3980984");
                                                                      cm.npc_ChangeController(9111066, "oid=3981582", -80, 80, 25, -130, -30, 0, false, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=3981582", "summon", 0, 0);
                                                                      cm.npc_ChangeController(9111067, "oid=3981583", 115, 80, 26, 65, 165, 0, false, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=3981583", 'summon', 0, 0);
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
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2500, 1000, -80, 80);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2500, 1000, 115, 80);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#呃……呃啊。", 37, 9111011, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1000, 159, -50);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#哼！就这点三脚猫功夫还敢炫。", 37, 9111023, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……看我怎么弄死你们。", 37, 9111023, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=3980024", "charge", 0, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetSpecialAction("oid=3981305", "die1", 0, 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=3981305");
                                                                                                    cm.npc_LeaveField("oid=3981305");
                                                                                                    cm.npc_ChangeController(9111068, "oid=3982300", -200, 80, 24, -250, -150, 0, false, 0, false);
                                                                                                    cm.npc_SetSpecialAction("oid=3982300", "summon", 0, 0);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#哇啊！", 37, 9111016, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetSpecialAction("oid=3980024", "charge", 0, 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=3980024", "charge", 0, 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=3980024", 'charge', 0, 1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=3981306", 'end', 0, 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1080);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=3981306");
                                                                                                                cm.npc_LeaveField("oid=3981306");
                                                                                                                cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111016, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("泉奈……！", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_ChangeController(9111015, "oid=3982764", -565, 80, 22, -615, -515, 1, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982764", 'summon', 0, 0);
                                                                                                                    cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/kuraAttack");
                                                                                                                    cm.npc_ChangeController(9111060, "oid=3982765", 60, 40, 16, 10, 110, 0, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982765", "summon", 0, 0);
                                                                                                                    cm.npc_ChangeController(9111061, "oid=3982766", -5, 80, 25, -55, 45, 0, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982766", "summon", 0, 0);
                                                                                                                    cm.npc_ChangeController(9111060, "oid=3982767", 85, 40, 17, 35, 135, 0, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982767", "summon", 0, 0);
                                                                                                                    cm.npc_ChangeController(9111061, "oid=3982768", 320, 40, 19, 270, 370, 1, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982768", "summon", 0, 0);
                                                                                                                    cm.npc_ChangeController(9111060, "oid=3982769", 315, 80, 28, 265, 365, 1, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982769", 'summon', 0, 0);
                                                                                                                    cm.npc_ChangeController(9111061, "oid=3982770", 405, 40, 20, 355, 455, 1, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=3982770", "summon", 0, 0);
                                                                                                                    cm.npc_SetForceMove("oid=3982764", 1, 600, 300);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3980024"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……吃我一招！！", 37, 9111015, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=3982764", "nanta", 0, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=3980024", "hit", 0, 1);
                                                                                                                          cm.npc_SetSpecialAction("oid=3982765", "jump", 0, 1);
                                                                                                                          cm.npc_SetSpecialAction("oid=3982769", 'jump', 0, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetSpecialAction("oid=3982766", "jump", 0, 1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetSpecialAction("oid=3982768", "jump", 0, 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetSpecialAction("oid=3982767", 'jump', 0, 1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetSpecialAction("oid=3982770", "jump", 0, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.setNpcSpecialActionReset("oid=3980024");
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#一群打不死的小强……！！！！", 37, 9111023, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetSpecialAction("oid=3980024", "charge", 0, 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_SetSpecialAction("oid=3982765", "die", 0, 1);
                                                                                                                                          cm.npc_SetSpecialAction("oid=3982766", "die", 0, 1);
                                                                                                                                          cm.npc_SetSpecialAction("oid=3982767", "die", 0, 1);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_LeaveField("oid=3982765");
                                                                                                                                            cm.npc_LeaveField("oid=3982765");
                                                                                                                                            cm.npc_LeaveField("oid=3982766");
                                                                                                                                            cm.npc_LeaveField("oid=3982766");
                                                                                                                                            cm.npc_LeaveField("oid=3982767");
                                                                                                                                            cm.npc_LeaveField("oid=3982767");
                                                                                                                                            cm.npc_ChangeController(9111070, "oid=3983245", 60, 40, 16, 10, 110, 0, false, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=3983245", "summon", 0, 0);
                                                                                                                                            cm.npc_ChangeController(9111070, "oid=3983246", -5, 80, 25, -55, 45, 0, false, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=3983246", "summon", 0, 0);
                                                                                                                                            cm.npc_ChangeController(9111070, "oid=3983247", 85, 40, 17, 35, 135, 0, false, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=3983247", "summon", 0, 0);
                                                                                                                                            cm.npc_SetSpecialAction("oid=3980024", "attack", 0, 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=3980024", 1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetSpecialAction("oid=3980024", "attack", 0, 1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetSpecialAction("oid=3982768", "die", 0, 1);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=3982769", "die", 0, 1);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=3982770", 'die', 0, 1);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_LeaveField("oid=3982768");
                                                                                                                                                    cm.npc_LeaveField("oid=3982768");
                                                                                                                                                    cm.npc_LeaveField("oid=3982769");
                                                                                                                                                    cm.npc_LeaveField("oid=3982769");
                                                                                                                                                    cm.npc_LeaveField("oid=3982770");
                                                                                                                                                    cm.npc_LeaveField("oid=3982770");
                                                                                                                                                    cm.npc_ChangeController(9111070, "oid=3983352", 35, 40, 16, -15, 85, 1, false, 0, false);
                                                                                                                                                    cm.npc_SetSpecialAction("oid=3983352", "summon", 0, 0);
                                                                                                                                                    cm.npc_ChangeController(9111070, "oid=3983353", 315, 80, 28, 265, 365, 1, false, 0, false);
                                                                                                                                                    cm.npc_SetSpecialAction("oid=3983353", "summon", 0, 0);
                                                                                                                                                    cm.npc_ChangeController(9111070, "oid=3983354", 405, 40, 20, 355, 455, 1, false, 0, false);
                                                                                                                                                    cm.npc_SetSpecialAction("oid=3983354", "summon", 0, 0);
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你们就困在我的黑暗中绝望吧！！！！", 37, 9111023, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=3980024", "casting", 0, 1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……我是在漆黑黑暗中重生的黑暗火焰……", 37, 9111013, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#……我是漆黑中的灯塔。我用足以熔化钢铁的双眼洞彻黑暗，我是深渊凝视者！", 37, 9111013, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_ChangeController(9111013, "oid=3983543", 510, 80, 28, 460, 560, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983543", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(9111014, "oid=3983544", 865, 80, 30, 815, 915, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983544", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(9111029, "oid=3983545", 900, 80, 30, 850, 950, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983545", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(9111029, "oid=3983546", 905, 80, 30, 855, 955, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983546", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(9111029, "oid=3983547", 910, 80, 30, 860, 960, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983547", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(9111029, "oid=3983548", 915, 80, 31, 865, 965, 1, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983548", "summon", 0, 0);
                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3980024"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……。！！！", 37, 9111023, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=3983543", 'rage', 0, 1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……竟敢在我面前施展黑暗的把戏……！", 37, 9111013, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/darkyo");
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_SetSpecialAction("oid=3983543", 'attack', 0, 1);
                                                                                                                                                                          cm.npc_SetSpecialAction("oid=3980024", "hit", 0, 1);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/darkyo");
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=3983543", "attack", 0, 1);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=3980024", "hit", 0, 1);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#全体亡灵武士发起冲锋！！协助鵺大人！！", 37, 9111014, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_SetForceMove("oid=3983544", -1, 600, 300);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_SetForceMove("oid=3983545", -1, 600, 300);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_SetForceMove("oid=3983546", -1, 550, 300);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.npc_SetForceMove("oid=3983547", -1, 580, 300);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetForceMove("oid=3983548", -1, 530, 300);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=3983544", "attack", 0, 1);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=3983545", "attack", 0, 1);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=3983546", "attack", 0, 1);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=3983547", "attack", 0, 1);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=3983548", "attack", 0, 1);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#燃。烧。吧！", 37, 9111013, false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_ScreenMsg("Effect2.img/JPzipang/darkyo");
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=3980024", "hit", 0, 1);
                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/darkyo", "oid=3980024"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……结束了吗……！", 37, 9111015, false, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=3980024", 'hit', 0, 1);
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('怎么了……！', 57, 0, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……早着呢……", 37, 9111023, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3982764"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3983543"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3983544"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#(展开你的翅膀吧，人类。)", 37, 9111017, false, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.setNpcSpecialActionReset("oid=3980024");
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……游戏还没完！！！！！", 37, 9111023, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=3980024", 'casting', 0, 1);
                                                                                                                                                                                                                cm.spawnMobLimit(9400075, 1, 180, 93, 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(7800);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3980024");
                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3980024");
                                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3982764"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3983543"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3983544"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……趁现在！\r\n快踩着我起飞，人类！！", 37, 9111013, false, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……快，快去夺回五行，救竹野子！！", 37, 9111013, false, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_QTE(5);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗬啊啊啊啊啊啊！！！！", 37, 9111013, false, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                                                                                  cm.warp(800025004, 0, true);
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3982764");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3982764");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983543");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983543");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983544");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983544");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3981582");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3981582");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3981583");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3981583");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3982300");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3982300");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983545");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983545");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983546");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983546");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983547");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983547");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983548");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983548");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983245");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983245");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983246");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983246");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983247");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983247");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983352");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983352");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983353");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983353");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983354");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=3983354");
                                                                                                                                                                                                                                  cm.eventSKill(0);
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