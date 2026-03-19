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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background("magic_pre", 1, 1, 0, 0);
      cm.Hidden_background("magic_start", 1, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -830, 14);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -265, -108);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003401, "oid=2007726", -275, -55, 5, -325, -225, 1, false, false);
        cm.npc_SetSpecialAction("oid=2007726", "summon", 0, 0);
        cm.npc_ChangeController(3003404, "oid=2007727", -585, 0, 12, -635, -535, 0, true, false);
        cm.npc_SetSpecialAction("oid=2007727", "summon", 0, 0);
        cm.npc_ChangeController(3003408, "oid=2007728", -470, 0, 9, -520, -420, 0, true, false);
        cm.npc_SetSpecialAction("oid=2007728", 'summon', 0, 0);
        cm.npc_ChangeController(3003408, "oid=2007729", -400, 0, 9, -450, -350, 0, true, false);
        cm.npc_SetSpecialAction("oid=2007729", "summon", 0, 0);
        cm.npc_ChangeController(3003408, "oid=2007730", -145, 0, 10, -195, -95, 1, true, false);
        cm.npc_SetSpecialAction("oid=2007730", 'summon', 0, 0);
        cm.npc_ChangeController(3003408, "oid=2007731", -75, 0, 10, -125, -25, 1, true, false);
        cm.npc_SetSpecialAction("oid=2007731", 'summon', 0, 0);
        cm.npc_ChangeController(3003407, "oid=2007732", 270, -22, 13, 220, 320, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2007732", "summon", 0, 0);
        cm.npc_ChangeController(3003451, "oid=2007733", 180, 0, 13, 130, 230, 1, false, false);
        cm.npc_SetSpecialAction("oid=2007733", "summon", 0, 0);
        cm.npc_ChangeController(3003451, "oid=2007734", 370, 0, 15, 320, 420, 1, false, false);
        cm.npc_SetSpecialAction("oid=2007734", "summon", 0, 0);
        cm.Hidden_background('magic_pre', 1, 1, 0, 0);
        cm.Hidden_background("magic_start", 1, 0, 0, 0);
        cm.fieldEffect_PlayBGM("SoundEff.img/morass/magic_ab", 0, 0);
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
              cm.sendNormalTalk_Bottom("(还是失败了。可惜不知道什么原因……)", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('(……那好吧。)', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("(我可没#b夏伊#k那么好的身手。\r\n一旦发生突发状况，我只能立即逃跑。)", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我来了，夏伊。", 37, 3003406, true, true);
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
                            cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -880, 30);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3003406, "oid=2007739", -940, 0, 11, -990, -890, 0, true, false);
                              cm.npc_SetSpecialAction("oid=2007739", "summon", 0, 0);
                              cm.Npc_Fadeout("oid=2007739", 150, 0);
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.sendNormalTalk_Bottom("(江！你来得也太晚了！)", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face11#嘿嘿，主角通常都在决定性的瞬间登场。", 37, 3003406, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face10#嗯？', 37, 3003406, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("怎么？我脸上沾了什么吗？", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face10#你额头上的纹样，好像越来越深了。", 37, 3003406, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("纹样？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face10#你在纸条上留下的纹样。就是那个紫色眼睛。", 37, 3003406, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2007739", 1, 400, 170);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("纸条上留下的……#r#fs18#紫色眼睛纹样#k#fs16#……难道是？", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_ForcedFlip(0);
                                                cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/morass/Arka_Mark/0", 0, 500, 0, 0, 12, 4, 1);
                                                cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/morass/Arka_Mark/1", 0, 500, 0, 0, 12, 4, 1);
                                                cm.fieldEffect_ProcessOnOffLayer('02', "Map/Effect3.img/morass/Arka_Mark/2", 0, 500, 0, 0, 12, 4, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2007739");
                                                    cm.npc_ChangeController(3003406, "oid=2007740", -220, -60, 5, -270, -170, 1, true, false);
                                                    cm.npc_SetSpecialAction("oid=2007740", "summon", 0, 0);
                                                    cm.Npc_Fadeout("oid=2007740", 150, 0);
                                                    cm.npc_LeaveField("oid=2007727");
                                                    cm.npc_ChangeController(3003405, "oid=2007741", -630, 0, 12, -680, -580, 1, true, false);
                                                    cm.npc_SetSpecialAction("oid=2007741", "summon", 0, 0);
                                                    cm.fieldEffect_PlayBGM("Bgm25.img/AltarOfAkayrum", 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face1##fn黑体##fs18#有什么问题吗？#h0#？", 37, 3003404, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(200, 3000, 200, -680, 30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                        cm.sendNormalTalk_Bottom("阿卡伊勒？！", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(3003419, "oid=2007742", -815, 0, 11, -865, -765, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=2007742", "summon", 0, 0);
                                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), -815, -34);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use", 100);
                                                              cm.emotion(1, 999999);
                                                              cm.inGameDirectionEvent_OneTimeAction(4, 999999);
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你不能把嘴闭上吗？好戏才刚刚开始。", 37, 3003405, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#fs18#阿卡伊勒！你这家伙！！果然一开始就是你！！", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#时间神官在过去遗失了自我？\r\n你不觉得奇怪吗？", 37, 3003405, true, true);
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
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -235, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我这就来帮你，塔纳。", 37, 3003406, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#嗯……现在可以出去了。", 37, 3003400, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯，可以出去的。", 37, 3003406, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("江！！不要啊！！是陷阱！", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/key", 100);
                                                                                          cm.sendNormalTalk_Bottom("#face10#额？", 37, 3003406, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face12#钥匙……打不开啊？", 37, 3003406, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#差不多到时间了吧？", 37, 3003405, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#当时由#r#fs20#被洗脑的夏伊#k#fs16#亲自喊……\r\n这次我来替她吧。", 37, 3003405, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#fs18#阿卡伊勒！住手！", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_setForceFlip("oid=2007741", 1);
                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs24##r入侵者！！", 37, 3003405, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#啊啊？", 37, 3003406, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#(赶快……现身吧！)", 37, 3003406, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.Npc_Fadeout("oid=2007740", 255, 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯？！！", 37, 3003407, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#阿卡伊勒，你说的#fs18##r钥匙#k就是这个啊。", 37, 3003407, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 270, 0);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=2007732", "special2", 0, 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.userSetFieldFloating(940204010, 3, 3, 1);
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.userSetFieldFloating(940204010, 0, 0, 0);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#干什么呢！！", 37, 3003407, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -235, 0);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_ChangeController(3003451, "oid=2007745", -140, -120, 6, -190, -90, 1, false, 500, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2007745", "summon", 0, 0);
                                                                                                                                cm.npc_ChangeController(3003451, "oid=2007746", -340, -120, 4, -390, -290, 0, false, 500, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2007746", "summon", 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#干掉他们！！", 37, 3003407, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Map/Effect3.img/morass/Jean/0", 0, 500, 0, 0, 12, 4, 1);
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 500, 0);
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                                                                                                      cm.npc_SetSpecialAction("oid=2007740", 'die', -1, 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('04', "Map/Effect3.img/morass/Jean/1", 0, 2500, 0, -80, 13, 4, 1);
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('05', "Map/Effect3.img/morass/Jean/2", 0, 2500, 0, -80, 12, 4, 1);
                                                                                                                                            cm.sendNormalTalk_Bottom('#face4#！！！', 37, 3003400, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_PlayBGM("Bgm45.img/Pain And Sorrow", 0, 0);
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#啊……塔纳……嘿嘿", 37, 3003406, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#啊啊……", 37, 3003400, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#看来失败了……抱歉……", 37, 3003406, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#我……还……以为……咳咳，会成功……", 37, 3003406, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#江……？", 37, 3003400, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#对不起……我没能守约，公主……", 37, 3003406, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#看来我也……能成为……一名帅气的骑士……", 37, 3003406, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 2500, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 2500, 0, 0, 0, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#排斥反应消失了！仪式开始了！", 37, 3003408, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#成功了？呵哈哈哈，很有效果嘛！", 37, 3003407, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.Hidden_background("magic_pre", 1, 0, 0, 0);
                                                                                                                                                                      cm.Hidden_background("magic_start", 1, 1, 0, 0);
                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -680, 30);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_setForceFlip("oid=2007741", 1);
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#瞬间的冲击、残念，万念俱灰。\r\n怎么样，我猜得没错吧？", 37, 3003405, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("用得着说得这么直白吗？！", 57, 0, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……年轻的时候，我有些偏执。\r\n这我承认。有些事做得有点过火。", 37, 3003405, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -233, -10);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#江……江？", 37, 3003400, false, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#江！", 37, 3003400, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#我感觉到了……仪式已经举行了啊。", 37, 3003407, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#殿下，好像还有口气。\r\n说不定还有救……", 37, 3003451, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没关系，拖出去扔了吧。", 37, 3003407, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("我虽然并非童话中的帅气骑士，", 0);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("但是无论如何，我也想救出塔纳。", 0);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("因为我们约好了，会一直陪在她身边。", 1);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("如果仪式终止……", 0);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("永恒的崩溃与重建……陷入无穷无尽的痛苦。", 0);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("没有那种事，一切都会变好的。", 0);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("大盗江永远有第二个作战计划。", 0);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("第二个……作战计划……？", 1);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("她可能会忘记我……也说不定呢。", 0);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("不过那又如何呢，记忆什么的，重塑就是了。", 0);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("一定能制造出更多美好的，只属于我们的记忆。", 0);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#江……", 37, 3003400, false, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哈哈哈哈。看啊，百姓们！朕成神了！！", 37, 3003407, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#记忆……重塑就行了。", 37, 3003400, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -740, 30);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("不会吧？反魔力石项链？！！", 57, 0, false, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("不可以，塔纳！！如果现在终止仪式，你将永远陷入痛苦的深渊！", 57, 0, true, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("无论如何……一定要撑住……", 57, 0, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_QTE(0);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall1", 100);
                                                                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=2007742", "special0", -1, 1);
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall2", 100);
                                                                                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2007742", "special1", -1, 1);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#没关系。", 37, 3003400, false, true);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('06', "Map/Effect3.img/morass/pendant/0", 0, 500, 0, 0, 0, 4, 1);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#我诅咒你，海加顿……", 37, 3003400, false, true);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#就算必须为此承受无尽的痛苦，我也会欣然接受。", 37, 3003400, true, true);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 100, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('07', "Map/Effect3.img/morass/pendant/1", 0, 100, 0, 0, 0, 4, 1);
                                                                                                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/break_stone", 100);
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/acident", 100);
                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('07', '', 2, 100, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -233, -10);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.Hidden_background("magic_pre", 1, 0, 0, 0);
                                                                                                                                                                                                                                                                              cm.Hidden_background("magic_start", 1, 0, 0, 0);
                                                                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2007726");
                                                                                                                                                                                                                                                                              cm.userSetFieldFloating(940204010, 3, 3, 10);
                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2007732", "special1", -1, 1);
                                                                                                                                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm35.img/Hekaton", 0, 0);
                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#仪、仪式！！", 37, 3003407, false, true);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.userSetFieldFloating(940204010, 0, 0, 0);
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
                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 270, 0);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.userSetFieldFloating(940204010, 3, 3, 10);
                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#怎、怎么了……？发生什么事了？阿卡伊勒！！", 37, 3003407, false, true);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                  cm.userSetFieldFloating(940204010, 0, 0, 0);
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
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -650, 45);
                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                            cm.userSetFieldFloating(940204010, 3, 3, 10);
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我也被这场面吓一跳。没想到竟然有这种办法……\r\n真是做梦都没想到。", 37, 3003405, false, true);
                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#如果对方消失了，那仪式就会失败。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("做这种事到底能得到什么？！", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=2007741", -1);
                                                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我不是说了嘛。我已经预示到仪式注定失败。只不过是好奇失败的过程罢了。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我已经很满足了。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("你疯了吧！", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#当时是这么说的。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##r#fs20#飞得越高……摔得越惨。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#fs20#阿卡伊勒，我饶不了你！！", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#参观到此为止，保重。", 37, 3003405, true, true);
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                                                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall3", 100);
                                                                                                                                                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2007742", "special2", -1, 1);
                                                                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                                                                                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall4", 100);
                                                                                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2007742");
                                                                                                                                                                                                                                                                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -830, 14);
                                                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                                                                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use", 100);
                                                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("没错，在启动那东西之前，我们都没想到。", 0);
                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("我错过的那个小零件……", 0);
                                                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fn黑体##r「那就是我自己」", 1);
                                                                                                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                                                                cm.playerMessage(5, "消灭区域内的所有怪物后再离开吧。");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007728");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007729");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007730");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007731");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007732");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007733");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007734");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007740");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007741");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007745");
                                                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2007746");
                                                                                                                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                                                                                                                cm.warp(940204030, 0);
                                                                                                                                                                                                                                                                                                                                                cm.scheduleWarpTask(600, 940204010);
                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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