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
      cm.updateInfoQuest(26900, "sf=0;mt=0;id=0;al=1");
      cm.updateInfoQuest(26902, '');
      cm.updateInfoQuest(26903, '');
      cm.updateInfoQuest(26904, '');
      cm.updateInfoQuest(26905, '');
      cm.npc_ChangeController(3004918, 'oid=363502', 1284, -321, 16, 1284, 1319, 1, false, 0, false);
      cm.npc_ChangeController(3004918, "oid=363503", 1197, -321, 14, 1147, 1197, 1, false, 0, false);
      cm.npc_ChangeController(3004920, "oid=363504", 116, 2, 93, 66, 166, 1, false, 0, false);
      cm.npc_ChangeController(3004920, "oid=363505", 204, 2, 93, 154, 254, 1, false, 0, false);
      cm.npc_ChangeController(3004919, "oid=363506", -177, -249, 88, -227, -127, 1, false, 0, false);
      cm.npc_ChangeController(3004918, 'oid=363507', 316, -249, 88, 266, 366, 1, false, 0, false);
      cm.npc_ChangeController(3004920, "oid=363508", 689, -321, 20, 661, 691, 1, false, 0, false);
      cm.npc_ChangeController(3004920, "oid=363509", 896, -109, 29, 896, 946, 1, false, 0, false);
      cm.npc_ChangeController(3004921, "oid=363510", 581, 2, 93, 531, 631, 1, false, 0, false);
      cm.npc_ChangeController(3004919, "oid=363511", 86, -249, 88, 36, 136, 0, false, 0, false);
      cm.npc_ChangeController(3004921, "oid=363512", 198, -249, 88, 148, 248, 1, false, 0, false);
      cm.npc_ChangeController(3004918, "oid=363513", -115, -249, 88, -165, -65, 1, false, 0, false);
      cm.npc_ChangeController(3004919, "oid=363514", 801, -321, 22, 801, 851, 1, false, 0, false);
      cm.npc_ChangeController(3004919, "oid=363515", 880, -321, 23, 830, 900, 1, false, 0, false);
      cm.setSessionValue('kill_count', '0');
      cm.npc_ChangeController(3004907, 'oid=560593', -500, -57, 92, -550, -450, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=560593", "summon", 0, 0);
      cm.npc_ChangeController(3004917, "oid=560594", -100, -57, 92, -150, -50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560594", "summon", 0, 0);
      cm.npc_ChangeController(3004919, "oid=560595", -220, -57, 92, -270, -170, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560595", "summon", 0, 0);
      cm.npc_ChangeController(3004919, "oid=560596", -160, -57, 92, -210, -110, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560596", 'summon', 0, 0);
      cm.npc_ChangeController(3004912, "oid=560597", -400, -57, 92, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=560597", "summon", 0, 0);
      cm.npc_ChangeController(3004912, "oid=560598", -240, -57, 92, -290, -190, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=560598', 'summon', 0, 0);
      cm.npc_ChangeController(3004912, "oid=560599", 782, -142, 33, 732, 832, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=560599", 'summon', 0, 0);
      cm.npc_ChangeController(3004912, "oid=560600", 702, -40, 93, 652, 752, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=560600', "summon", 0, 0);
      cm.npc_ChangeController(3004912, "oid=560601", 400, -277, 88, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560601", "summon", 0, 0);
      cm.npc_ChangeController(3004912, "oid=560602", 470, -277, 88, 420, 520, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560602", 'summon', 0, 0);
      cm.npc_ChangeController(3004912, "oid=560603", 330, -40, 89, 280, 380, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=560603", 'summon', 0, 0);
      cm.npc_ChangeController(3004912, "oid=560604", 400, -40, 89, 350, 450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=560604", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=560593", "warn", -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2670, -1010);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(16150, '');
        cm.updateInfoQuest(66044, '');
        cm.updateInfoQuest(14756, "d=21/07/19/12/50");
        cm.updateInfoQuest(14755, '');
        cm.updateInfoQuest(52998, '');
        cm.updateInfoQuest(65132, '');
        cm.updateInfoQuest(61585, "0=20210718;1=20210718");
        cm.updateInfoQuest(61585, "0=20210719;1=20210718");
        cm.updateInfoQuest(26011, '');
        cm.forceStartQuest(7290, '0');
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(32547, "lastDecTime=2021/07/19 12:50:12");
          cm.Npc_Fadeout('oid=560594', 0, 0);
          cm.Npc_Fadeout("oid=560597", 0, 0);
          cm.Npc_Fadeout("oid=560598", 0, 0);
          cm.Npc_Fadeout("oid=560599", 0, 0);
          cm.Npc_Fadeout('oid=560600', 0, 0);
          cm.Npc_Fadeout("oid=560601", 0, 0);
          cm.Npc_Fadeout('oid=560602', 0, 0);
          cm.Npc_Fadeout("oid=560603", 0, 0);
          cm.Npc_Fadeout('oid=560604', 0, 0);
          cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/noise", 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(25000, 0, 1000, 25000, -370, -102);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我在此以自治会的权限下令，各位非法强占了公共设施，请现在立刻撤离。", 37, 3004907, false, true, 1);
                  cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我再重复一遍，各位非法强占了公共设施，\r\n请现在立刻撤离。", 37, 3004907, false, true, 1);
                      cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                      } else {
                        if (status === V++) {
                          cm.Npc_Fadeout('oid=560594', 255, 500);
                          cm.npc_SetForceMove("oid=560594", -1, 200, 100);
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -370, -27);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这是最后通牒，但凡不听令行事，我们德拉卡兹对后果概不负责。", 36, 3004907, false, true, 1);
                                cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset('oid=560593');
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#德……德拉卡……什么来着？", 36, 3004917, false, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#是德拉卡兹，大哥。", 36, 3004919, true, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#好吧，就是那个什么德拉卡兹，你们给我听好了。", 36, 3004917, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#吃屎去吧，你们这帮蠢货。", 36, 3004917, false, true, 1);
                                                cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004907, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Npc_Fadeout("oid=560593", 0, 1500);
                                                        cm.npc_setForceFlip("oid=560593", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#哼……", 36, 3004917, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=560594", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 542, -120);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#来，派对开起来喽~！", 36, 3004917, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/laugh2", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这么做没问题吗？那些人的名声可不太好。", 36, 3004919, false, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哼，就凭他们几个还能闹翻天去？", 36, 3004917, true, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 10, 0);
                                                                              cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 10, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 10, 0);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier2", 100);
                                                                                    cm.fieldEffect_InsertCanvas(1, 180, 0, 0, 0, 10, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#什么情况，怎么回事啊？！", 36, 3004919, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm56/DispossessedAnger", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.Npc_Fadeout("oid=560599", 255, 100);
                                                                                              cm.Npc_Fadeout('oid=560600', 255, 100);
                                                                                              cm.Npc_Fadeout("oid=560601", 255, 100);
                                                                                              cm.Npc_Fadeout("oid=560602", 255, 100);
                                                                                              cm.Npc_Fadeout('oid=560603', 255, 100);
                                                                                              cm.Npc_Fadeout("oid=560604", 255, 100);
                                                                                              cm.npc_SetSpecialAction("oid=560599", "regen", 1, 1);
                                                                                              cm.npc_SetSpecialAction("oid=560600", "regen", 1, 1);
                                                                                              cm.npc_SetSpecialAction('oid=560601', "regen", 1, 1);
                                                                                              cm.npc_SetSpecialAction("oid=560602", "regen", 1, 1);
                                                                                              cm.npc_SetSpecialAction("oid=560603", "regen", 1, 1);
                                                                                              cm.npc_SetSpecialAction("oid=560604", "regen", 1, 1);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#额啊！", 36, 3004919, false, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/kain/1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/13', 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/rainWalk2", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#呼呼……该死……这……这不可能……", 36, 3004917, false, true, 1);
                                                                                                            cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#那么多同伴居然都……", 36, 3004917, true, true, 1);
                                                                                                              cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1730, -7);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -1768, -60);
                                                                                                                  cm.npc_ChangeController(3004917, "oid=560851", -1600, -47, 91, -1650, -1550, 1, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=560851", 'summon', 0, 0);
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=363505");
                                                                                                                    cm.npc_LeaveField("oid=363507");
                                                                                                                    cm.npc_LeaveField('oid=363508');
                                                                                                                    cm.npc_LeaveField('oid=363509');
                                                                                                                    cm.npc_LeaveField("oid=363510");
                                                                                                                    cm.npc_LeaveField('oid=363512');
                                                                                                                    cm.npc_LeaveField('oid=363514');
                                                                                                                    cm.npc_LeaveField("oid=363515");
                                                                                                                    cm.npc_LeaveField("oid=560599");
                                                                                                                    cm.npc_LeaveField("oid=560600");
                                                                                                                    cm.npc_LeaveField("oid=560601");
                                                                                                                    cm.npc_LeaveField("oid=560602");
                                                                                                                    cm.npc_LeaveField('oid=560603');
                                                                                                                    cm.npc_LeaveField("oid=560604");
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#科本！谢尔梅！阿尔伦！", 36, 3004917, false, true, 1);
                                                                                                                      cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#该不会逃出来的……就只有我一个人吧？", 36, 3004917, true, true, 1);
                                                                                                                        cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#好像确实如此。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#……你！！", 36, 3004917, true, true, 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#德拉，德拉卡兹……！", 36, 3004917, false, true, 1);
                                                                                                                                      cm.effect_Voice("Voice6.img/kain/2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/fall", 100);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                            } else if (status === V++) {
                                                                                                                                              cm.npc_LeaveField("oid=560593");
                                                                                                                                              cm.npc_LeaveField("oid=560594");
                                                                                                                                              cm.npc_LeaveField("oid=560595");
                                                                                                                                              cm.npc_LeaveField('oid=560596');
                                                                                                                                              cm.npc_LeaveField("oid=560597");
                                                                                                                                              cm.npc_LeaveField("oid=560598");
                                                                                                                                              cm.npc_LeaveField("oid=560851");
                                                                                                                                              cm.dispose();
                                                                                                                                              cm.warp(993164002, 0, true);
                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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