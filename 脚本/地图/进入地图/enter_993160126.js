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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -257, 75);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.Hidden_background("do1", 1, 0, 0, 0);
      cm.Hidden_background('do2', 1, 0, 0, 0);
      cm.Hidden_background("do03", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -45, -52);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -45, 70);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face12#好吧，我帮你解开，你的那个封印。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这就对了，那就赶紧将符咒摘了吧，\r\n现在还不迟，你难道不想尽快施展道术吗？", 37, 3001676, true, true);
                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……虽然是这么说的，但你以为天底下有免费的午餐吗？\r\n代价就是你的身体，蠢货！", 37, 3001676, false, true);
                              cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#呵呵……我会欣然接受你这家伙的身体，\r\n暂时拿来续命。", 37, 3001676, true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#既然能成为宿主，使用我的力量……推敲起来，说是能让你施展道术\r\n也不算说错啊，呵呵呵……", 37, 3001676, true, true);
                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('19', "Effect/Direction9.img/HoyoungStory/19", 0, 500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/amulet1", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（快将符咒摘掉！这个狂妄无礼的小鬼！）", 37, 3001676, false, true);
                                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('20', "Effect/Direction9.img/HoyoungStory/20", 0, 500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/amulet2", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#！？", 37, 3001676, false, true);
                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('20', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/amulet1", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#对了！抱歉，抱歉，一时手滑就！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('21', "Effect/Direction9.img/HoyoungStory/20", 0, 500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/amulet2", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('21', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/amulet1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('19', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face5#噗！噗哈……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#噗，噗嗤！！！呵呵……嘻，嘻嘻！！！哇哈哈！！！\r\n哎哟喂，我的肚子！！！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你这个混蛋……", 37, 3001676, true, true);
                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face6#活该！你以为我天下无敌的虎影会为这种屁大点的诱惑就上钩吗？\r\n你可算是挑错人了。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/12', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face12#我正无聊呢，对我来说可以说是相当愉快的助兴内容了，让我可以大笑一场！\r\n那我就先告辞了~！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/13', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 270);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -45, -56);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Hidden_background('do0', 1, 0, 0, 0);
                                                                                  cm.onSetMapTagedObjectVisible(1, "do1", 512);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/rock1", 100);
                                                                                  cm.Hidden_background("do1", 1, 1, 0, 0);
                                                                                  cm.onSetMapTagedObjectVisible(1, "do1", 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(650);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.Hidden_background("do1", 1, 0, 0, 0);
                                                                                    cm.onSetMapTagedObjectVisible(1, "do2", 512);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/rock2", 100);
                                                                                    cm.Hidden_background("do2", 1, 1, 0, 0);
                                                                                    cm.onSetMapTagedObjectVisible(1, 'do2', 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.Hidden_background("do2", 1, 0, 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face1#你居然敢捉弄我饕餮！？", 37, 3001650, false, true);
                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#（饕……饕餮，我记得在书中看到过，就是那个四凶之一的饕餮？\r\n这么说并不是什么小怪！？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(3001650, "oid=2938209", -80, -240, 3, -130, -30, 1, true, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=2938209", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -85, -200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/8/skeleton", "02_gone", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#真是个混蛋……我定要将你细嚼慢咽吞下果腹！", 37, 3001650, false, true);
                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/16", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -380, 70);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face8#来，来，我看……应该是有什么很深的误会……\r\n我们能不能用对话来解决？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#就算被老虎咬了，只要打起十二分精神就能活下去，师父之前\r\n曾经这么教导过，正是为了这一时刻。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#使用师父抽屉里的符咒吧，据说可以用来封印怪物。\r\n真是庆幸自己偷偷顺来了一张。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face7#不过那家伙实在太强了……不对。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face10#越是这种时候，最需要的东西还是胆识！\r\n当然还需要一点小把戏吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/21', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_OneTimeAction(2, 10);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1250, 1000, -280, 10);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#混账~！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#什么！？", 37, 3001650, true, true);
                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face11#你就是当初恶名昭彰的四凶之一饕餮？\r\n居然敢扯这种谎！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#放肆无礼……你这么弱不禁风，到底是谁啊？", 37, 3001650, true, true);
                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face10#这是个好问题~！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face12#虽然我现在出于无奈才变得这副落魄模样，不过……\r\n我曾经也是靠打怪扬名天下的道士！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/27', 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（……这么说当然是骗人的。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/28', 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face9#啧啧……精气如此模糊缥缈，怕是哪个穷乡僻壤的怪物吧，\r\n居然敢谎称饕餮，这岂能坐视不理！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/29', 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#谎称？", 37, 3001650, true, true);
                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/30", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face9#饕餮曾是一种会带来灾难的怪物，气吞山河，力大无穷，\r\n这样的神兽居然会在如此普通的岩石之中？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/31', 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#那，那是哪儿来的仙人……", 37, 3001650, true, true);
                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/32", 100);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face11#呵呵……我不需要辩解！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/33', 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#不是你这家伙问的吗！？", 37, 3001650, true, true);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/34", 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face11#就别管那些小问题了，\r\n就算快要死了，你这家伙也会坚称自己是饕餮，给我看看确凿的证据吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/35", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#什么证据，你这是什么意思！？", 37, 3001650, true, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/36", 100);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face12#可以说是一个非常简单的考验吧，来判定你到底是不是饕餮。\r\n如果你能通过，那我甘愿被你吃掉。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/37", 100);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#胡闹……", 37, 3001650, true, true);
                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/38", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#想来对于吞下无数怪物的天下无敌的饕餮而言，\r\n搬动那边云下的山根本就不算什么事吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/39", 100);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3001650, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……这是当然，你就瞧好了吧。", 37, 3001650, true, true);
                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/41", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/rollinginthecave", 100);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#（天啊……万万没想到还真能移动大山！？）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/42", 100);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#看到了吗？那现在就乖乖地……", 37, 3001650, false, true);
                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/43", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face12#哎哟！这是做什么！打赌怎么也要三局两胜嘛……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/44", 100);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face11#再说刚刚那个只不过是小试牛刀吧？\r\n要说这是等同于灾难的力量，未免有点不够看吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/45", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/rollinginthecave", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#呼呼……呼呼……现在……可以了吗？\r\n咳咳……现在就遵守承诺吧……坏蛋！", 37, 3001650, false, true);
                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/46", 100);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=2938209", -1, 20, 20);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face6#哈哈！起作用了，我虎影的独门妙招！就叫呼之则来挥之则去！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/47", 100);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face5#居然想要骗我！你就待在这块木牌里好好反省吧！\r\n这里可比那岩石里面还要闷呢！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/48", 100);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/Dong", 100);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#额啊啊啊啊啊啊啊啊啊啊！！", 37, 3001650, false, true);
                                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/49", 100);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face8#成，成功……不，不对，难道不是这样的！？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/B-3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/50", 100);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2938209");
                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2938209");
                                                                                                                                                                                                                                          cm.Hidden_background("do03", 1, 1, 0, 0);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -106, -621);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.setAmbience("Ambience.img/fireworks", 200, 60);
                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
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
                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#啊！美丽的烟花……", 0);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n不对，不是这样的。", 0);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#这家伙不是在木牌里，而是被封印在了我的体内。", 0);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#饕餮体内的怪物全都溜出去了。", 0);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#用来囚禁一堆怪物", 0);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n我的器量实在太小了。", 0);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我原以为只要贴上符咒就可以封印的……", 1);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#居然将怪物释放到世间！", 0);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#而且还是好多只！", 0);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n可至少那一只并没有错过。", 0);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#最叫人头痛的家伙。", 0);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fs25##fn黑体#\r\n像#r饕餮#k……", 1);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.warp(993160102, 0, false);
                                                                                                                                                                                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
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
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}