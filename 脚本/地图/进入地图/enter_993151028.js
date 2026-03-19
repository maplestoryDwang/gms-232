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
      cm.npc_ChangeController(3004430, "oid=63712184", 50, 220, 40, 0, 100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712184", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=63712185", -240, 220, 35, -290, -190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712185", "summon", 0, 0);
      cm.npc_ChangeController(3004433, "oid=63712186", -200, 180, 1, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712186", 'summon', 0, 0);
      cm.npc_ChangeController(3004441, "oid=63712187", -50, 220, 37, -100, 0, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712187", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=63712188", -300, 180, 2, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712188", "summon", 0, 0);
      cm.npc_ChangeController(3004436, "oid=63712189", -400, 180, 3, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712189", "summon", 0, 0);
      cm.npc_ChangeController(3004481, "oid=63712190", -500, 180, 4, -550, -450, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63712190", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712191", 600, 180, 17, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712191", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712192", 400, 180, 14, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712192", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712193", 500, 180, 15, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712193", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712194", 600, 300, 98, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712194", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712195", 400, 300, 92, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712195", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=63712196", 500, 300, 93, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63712196", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#最后……全都烧光了啊。", 37, 3004431, false, true);
        cm.effect_Voice("Voice5.img/CH3/9_1", 128);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/6", 0, 800, 0, 0, 1, 4, 0, -1, 0, 0, 0);
            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust3/3", 0, 800, 0, 0, 20, 4, 0, -1, 0, 0, 0);
            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust3/13", 0, 800, 0, 0, 22, 4, 0, -1, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#对不起，艾伦。都怪我，害你心爱的书全被……", 37, 3004431, false, true);
              cm.effect_Voice("Voice5.img/CH3/9_2", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#古文献被烧实在可惜。", 37, 3004434, true, true);
                cm.effect_Voice("Voice5.img/CH3/9_3", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#但是不管它再怎么宝贵，书是没有生命的。", 37, 3004434, true, true);
                  cm.effect_Voice("Voice5.img/CH3/9_4", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face0#……', 37, 3004431, true, true);
                    cm.effect_Voice("Voice5.img/CH3/9_5", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#今天是开心的一天。把这里的事情都抛到脑后，快出发吧。", 37, 3004434, true, true);
                      cm.effect_Voice("Voice5.img/CH3/9_6", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#谢谢。", 37, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH3/9_8", 128);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 37, 3004434, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction23.img/illust3/7", 0, 800, 0, 0, 22, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, 200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -340, 220);
                                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.fieldEffect_PlayBGM("Bgm53/SanctuaryOfMitra", 0, 0);
                                          cm.npc_SetSpecialAction("oid=63712184", "special11", -1, 1);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我宣布，任命你为圣剑的主人。", 37, 3004441, false, true);
                                                cm.effect_Voice("Voice5.img/CH3/10_1", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=63712184", "special12", -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我真不知自己能否担此重任。", 37, 3004430, false, true);
                                                    cm.effect_Voice("Voice5.img/CH3/10_2", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#我很感激大家给我的帮助，\r\n但其中尤其要谢谢伊黛娜和#h0#。", 37, 3004430, true, true);
                                                      cm.effect_Voice("Voice5.img/CH3/10_3", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#哪儿的话。", 37, 3004431, true, true);
                                                        cm.effect_Voice("Voice5.img/CH3/10_4", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#这真是太好了。", 37, 3004433, false, true);
                                                            cm.effect_Voice("Voice5.img/CH3/10_5", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -280, 220);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setNpcSpecialActionReset("oid=63712184");
                                                                cm.npc_SetForceMove("oid=63712184", 1, 50, 70);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.npc_LeaveField("oid=63712187");
                                                                  cm.npc_LeaveField("oid=63712187");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#是啊。", 37, 3004431, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH3/10_6", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#塞伦好像也打心底感到开心。", 37, 3004436, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#到此为止，作战完全成功了，对吧？", 37, 3004435, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#嗯？艾伦怎么来了？", 37, 3004433, false, true);
                                                                            cm.effect_Voice("Voice5.img/CH3/10_7", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(3004434, "oid=63718887", 210, 220, 42, 160, 260, 1, true, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=63718887", "summon", 0, 0);
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 170, 220);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#怎么了？", 37, 3004431, false, true);
                                                                                    cm.effect_Voice("Voice5.img/CH3/10_8", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#这可奇怪了。我从没见过他出席人多的场合……", 37, 3004433, true, true);
                                                                                      cm.effect_Voice("Voice5.img/CH3/10_9", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#祝贺你，塞伦。", 37, 3004434, false, true);
                                                                                          cm.effect_Voice("Voice5.img/CH3/10_10", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你，艾伦。", 37, 3004430, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH3/10_11", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你听见神之语音了吗？", 37, 3004434, true, true);
                                                                                              cm.effect_Voice("Voice5.img/CH3/10_12", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#没有……我可能还没那个资格。", 37, 3004430, false, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH3/10_13", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#那我帮你吧。这事没什么难的。", 37, 3004434, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/10_14", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯？什么意思……", 37, 3004430, true, true);
                                                                                                      cm.effect_Voice("Voice5.img/CH3/10_15", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=63718887", -1, 20, 70);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/whisper", 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face3#（……）", 37, 3004434, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63712184"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("(怎么回事？感觉不大对劲！)", 57, 0, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                  cm.npc_setForceFlip("oid=63712184", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face7#……", 37, 3004430, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.userSetFieldFloating(993151028, 3, 3, 5);
                                                                                                                            cm.onSetNpcScript("oid=63712184", 1, ["special15", "special16"], [1, -1]);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/seren", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.userSetFieldFloating(993151028, 0, 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayBGM("Bgm53/HolyWar", 0, 0);
                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 120, 190);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.Npc_Fadeout("oid=63718887", 0, 500);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.userSetFieldFloating(993151028, 3, 3, 8);
                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("啊！！", 57, 0, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#这不可能！", 37, 3004431, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                                                                                                            cm.effect_Text(["#r#fn黑体##fs26#太阳火焰不会忘记敌人。"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0, 0]);
                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/11_1", 128);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#大家小心！！", 37, 3004431, false, true);
                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/11_2", 128);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.userSetFieldFloating(993151028, 0, 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 120, 90);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.userSetFieldFloating(993151028, 3, 3, 8);
                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.onSetNpcScript("oid=63712184", 1, ['special17', "special18"], [1, -1]);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/serenAttack", 100);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/effect2/7", 0, 1000, 0, 0, -20, 4, 0, -1, 0, -1, -1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 150, 0);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana2", 100);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.warp(993151029, 0, true);
                                                                                                                                                            cm.npc_LeaveField("oid=63712184");
                                                                                                                                                            cm.npc_LeaveField("oid=63712184");
                                                                                                                                                            cm.npc_LeaveField("oid=63712185");
                                                                                                                                                            cm.npc_LeaveField("oid=63712185");
                                                                                                                                                            cm.npc_LeaveField("oid=63712186");
                                                                                                                                                            cm.npc_LeaveField("oid=63712186");
                                                                                                                                                            cm.npc_LeaveField("oid=63712188");
                                                                                                                                                            cm.npc_LeaveField("oid=63712188");
                                                                                                                                                            cm.npc_LeaveField("oid=63712189");
                                                                                                                                                            cm.npc_LeaveField("oid=63712189");
                                                                                                                                                            cm.npc_LeaveField("oid=63712190");
                                                                                                                                                            cm.npc_LeaveField("oid=63712190");
                                                                                                                                                            cm.npc_LeaveField("oid=63712191");
                                                                                                                                                            cm.npc_LeaveField("oid=63712191");
                                                                                                                                                            cm.npc_LeaveField("oid=63712192");
                                                                                                                                                            cm.npc_LeaveField("oid=63712192");
                                                                                                                                                            cm.npc_LeaveField("oid=63712193");
                                                                                                                                                            cm.npc_LeaveField("oid=63712193");
                                                                                                                                                            cm.npc_LeaveField("oid=63712194");
                                                                                                                                                            cm.npc_LeaveField("oid=63712194");
                                                                                                                                                            cm.npc_LeaveField("oid=63712195");
                                                                                                                                                            cm.npc_LeaveField("oid=63712195");
                                                                                                                                                            cm.npc_LeaveField("oid=63712196");
                                                                                                                                                            cm.npc_LeaveField("oid=63712196");
                                                                                                                                                            cm.npc_LeaveField("oid=63718887");
                                                                                                                                                            cm.npc_LeaveField("oid=63718887");
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