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
      cm.npc_ChangeController(3004914, "oid=565492", -220, 30, 1, -270, -170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=565492", "summon", 0, 0);
      cm.npc_ChangeController(3004915, "oid=565493", -170, 30, 3, -220, -120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=565493", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -420, 30);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 50, 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -206, 0);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn2", 100);
            cm.inGameDirectionEvent_AskAnswerTime(750);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(750);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn2", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn2", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#打不开……为什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#切，结果重要的东西都在医生的仓库里……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#姐姐，这个……呜呜。", 36, 3004915, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#哦，我找到研究笔记了！啊！", 36, 3004914, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                              cm.npc_setForceFlip('oid=565492', -1);
                              cm.sendNormalTalk_Bottom("#face2#还、还给我！！", 36, 3004914, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#准备逃。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#暴露了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.setAmbience("Ambience.img/warning", 200, 60);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是入侵者！！！", 36, 3004912, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#快点，去窗外。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#把笔记还给我！", 36, 3004914, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#你们转告头目，我会去交换笔记和记忆，让他好好保管。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#唔……", 36, 3004914, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#快走！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Npc_Fadeout('oid=565492', 0, 500);
                                                    cm.Npc_Fadeout("oid=565493", 0, 500);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 462, 30);
                                                            cm.npc_ChangeController(3004904, "oid=565521", -115, -20, 8, -165, -65, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction('oid=565521', "summon", 0, 0);
                                                            cm.npc_ChangeController(3004909, 'oid=565522', -190, 30, 1, -240, -140, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565522", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004912, "oid=565523", -350, 30, 1, -400, -300, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction('oid=565523', "summon", 0, 0);
                                                            cm.npc_ChangeController(3004912, "oid=565524", -300, 30, 1, -350, -250, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction('oid=565524', "summon", 0, 0);
                                                            cm.npc_ChangeController(3004913, "oid=565525", 370, -150, 6, 320, 420, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565525", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004912, 'oid=565526', 450, -150, 6, 400, 500, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565526", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004913, 'oid=565527', 180, 30, 3, 130, 230, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565527", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004913, "oid=565528", 250, 30, 3, 200, 300, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565528", 'summon', 0, 0);
                                                            cm.npc_ChangeController(3004913, "oid=565529", 575, 30, 4, 525, 625, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565529", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004912, "oid=565530", 640, 30, 4, 590, 690, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565530", 'summon', 0, 0);
                                                            cm.npc_ChangeController(3004907, "oid=565531", -435, 23, 1, -485, -385, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565531", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004910, "oid=565532", -416, -150, 5, -466, -366, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction('oid=565532', "summon", 0, 0);
                                                            cm.npc_ChangeController(3004911, "oid=565533", -234, -150, 5, -284, -184, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=565533", 'summon', 0, 0);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -200, 20);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=565521", "sit", -1, 1);
                                                              cm.playSoundEffDirectly("Ambience.img/warning");
                                                              cm.sendNormalTalk_Bottom("#face0#简直砸了个稀巴烂啊。", 36, 3004910, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#犯人貌似已经逃走了。", 36, 3004911, false, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 510);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#嗯……看样子应该是内部所为。", 36, 3004907, false, true, 1);
                                                                              cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你怎么知道的？", 36, 3004911, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/4', 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#这不是明摆着呢嘛，要不是德拉卡兹，要怎么对付这么多警卫机器人。", 36, 3004910, true, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/5', 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#没错，嗯……", 36, 3004911, true, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip('oid=565531', 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哎哟，安保系统已彻底初始化。", 36, 3004907, false, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#这么说终究还是没办法搞清楚到底谁才是犯人咯。", 36, 3004911, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#你倒是动动脑子啊，蠢货。", 36, 3004904, true, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/20", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip('oid=565523', 1);
                                                                                                cm.npc_setForceFlip("oid=565524", 1);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -50, 20);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#犯人要么不在现场，要么就是#b迟后出现的家伙#k，\r\n只要慢慢匹配到达的时间，很快就能推算出可疑对象的。", 36, 3004904, false, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#（切……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我说，管理员，听说最近#r怨恨石有泄露#k？\r\n应该说也是闹出这次事的这家伙所为吧。", 36, 3004904, true, true, 1);
                                                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face4#你说是不是，该隐？", 36, 3004904, false, true, 1);
                                                                                                              cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#（提拉格……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#（该隐，我们明明有机会站在同一战线的。）", 36, 3004904, true, true, 1);
                                                                                                                  cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/24', 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#（我警告过你，不得有失。）", 36, 3004904, true, true, 1);
                                                                                                                    cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/25", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#如果迟后出现的人是犯人……", 36, 3004903, false, true, 1);
                                                                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 350, 40);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_ChangeController(3004903, "oid=565563", 330, 30, 4, 280, 380, 1, true, 0, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=565563", 'summon', 0, 0);
                                                                                                                                cm.npc_ChangeController(3004906, "oid=565564", 390, 30, 4, 340, 440, 1, false, 0, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=565564", 'summon', 0, 0);
                                                                                                                                cm.npc_setForceFlip("oid=565531", 1);
                                                                                                                                cm.npc_setForceFlip("oid=565532", 1);
                                                                                                                                cm.npc_setForceFlip('oid=565533', 1);
                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm56/DoubtYou", 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#最可疑的应该是我吧。", 36, 3004903, false, true, 1);
                                                                                                                                    cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom('#face2#……', 36, 3004904, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#老大房间里的#b安全密钥#k消失了，\r\n据推测，犯人就是用这个打开的安保系统。", 36, 3004906, true, true, 1);
                                                                                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我要开始搜身了，大家都不要动。", 36, 3004906, true, true, 1);
                                                                                                                                          cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#请大家听令行事，谁敢胡来就会被视为犯人。", 36, 3004907, false, true, 1);
                                                                                                                                              cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/14", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#没这个必要，因为我早就知道是谁干的了。", 36, 3004903, true, true, 1);
                                                                                                                                                cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/15', 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetForceMove("oid=565563", -1, 240, 70);
                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, 4, 40);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.setNpcSpecialActionReset('oid=565521');
                                                                                                                                                        cm.npc_setForceFlip("oid=565521", 1);
                                                                                                                                                        cm.npc_setForceFlip('oid=565522', 1);
                                                                                                                                                        cm.npc_setForceFlip("oid=565523", 1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#（唔……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#（……）", 36, 3004904, true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/26', 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=565563", "attack3", 1, 1);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_sword", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#（……！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=565522", "die", -1, 1);
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/midHit", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#唔……！", 36, 3004909, false, true, 1);
                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#这到底是要做什么……！", 36, 3004904, false, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#咳咳！", 36, 3004909, false, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 100);
                                                                                                                                                                                      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/0", 'cc'], [1, 0, 0, 0, 700, -1, 0, 0, -1]);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#切……", 36, 3004904, false, true, 1);
                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#（这个蠢货居然一直留着这个东西……）", 36, 3004904, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_屏幕渐入插图消失A(['00'], [500]);
                                                                                                                                                                                            cm.npc_SetForceMove("oid=565563", 1, 1, 50);
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#一定有帮凶，审问吧。", 36, 3004903, false, true, 1);
                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/16', 100);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我知道了。", 36, 3004907, true, true, 1);
                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_SetForceMove("oid=565563", 1, 20, 50);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#等下。", 36, 3004904, false, true, 1);
                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/29', 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#所以#b门卡#k呢？", 36, 3004904, false, true, 1);
                                                                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/30", 100);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#在这里呢。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/18", 100);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                                                                                                                                                    cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/kain/illust/10", 'cc'], [1, 0, 0, 0, 700, -1, 0, 0, -1]);
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#（假装翻一翻古俞的怀里，露出门卡就可以了吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#你……！！", 36, 3004904, true, true, 1);
                                                                                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/31', 100);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#情况到此结束。", 36, 3004907, false, true, 1);
                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/11/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565492");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565493");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565521");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565522");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565523");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565524");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565525");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565526");
                                                                                                                                                                                                                            cm.npc_LeaveField('oid=565527');
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565528");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565529");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565530");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565531");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565532");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=565533");
                                                                                                                                                                                                                            cm.npc_LeaveField('oid=565563');
                                                                                                                                                                                                                            cm.npc_LeaveField('oid=565564');
                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                            cm.warp(993164015, 0, true);
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
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}