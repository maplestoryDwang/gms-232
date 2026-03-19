var status = -1;
var selectionLog = [];
function action(g, z, C) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = C;
  var a = -1;
  if (status <= a++) {
    cm.dispose();
  } else {
    if (status === a++) {
      cm.npc_ChangeController(1540809, "oid=293386927", -150, 350, 1, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293386927", "summon", 0, 0);
      cm.npc_ChangeController(1540845, "oid=293386928", 200, 350, 2, 150, 250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=293386928", 'summon', 0, 0);
      cm.npc_ChangeController(1540850, "oid=293386929", 0, 350, 1, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=293386929", 'summon', 0, 0);
      cm.updateInfoQuest(34020, "check4=1");
      cm.setAmbience("Ambience.img/snowwave", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 500, 392);
      cm.curNodeEventEnd(true);
    } else {
      if (status === a++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === a++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_Text(["#fn黑体##fs18#另一方面，#fs15##fn黑体#雪龟岛"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === a++) {
            cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 100, 392);
          } else {
            if (status === a++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === a++) {
                cm.OverlapScreenDetail19(0, 500, 500, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -30, 392);
              } else {
                if (status === a++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3500, 0, 392);
                  } else {
                    if (status === a++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6#二话不说就闯进来，你这是做什么，阿卡伊勒？", 37, 1540809, false, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/1", 128);
                      } else {
                        if (status === a++) {
                          cm.sendNormalTalk_Bottom("我找到了你背叛的证据，戴米安。", 37, 1540845, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/2", 128);
                        } else {
                          if (status === a++) {
                            cm.sendNormalTalk_Bottom("超越石是一种将超越者的力量吸引到必亡者领域的石头！\r\n你若不是为了背叛那个伟大的人，又为什么要寻找这种石头？", 37, 1540845, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT4/OP/3", 128);
                          } else {
                            if (status === a++) {
                              cm.sendNormalTalk_Bottom("#face1#……看来你真够清闲的啊，还有工夫偷偷调查我，阿卡伊勒。", 37, 1540809, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT4/OP/4", 128);
                            } else {
                              if (status === a++) {
                                cm.sendNormalTalk_Bottom("那个伟大的人是信任你，才将事情交给你，可你居然敢谋反！", 37, 1540845, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT4/OP/5", 128);
                              } else {
                                if (status === a++) {
                                  cm.sendNormalTalk_Bottom("#face1#说重点吧，所以你打算怎么办？", 37, 1540809, true, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT4/OP/6", 128);
                                } else {
                                  if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === a++) {
                                      cm.sendNormalTalk_Bottom("把世界树交出来。", 37, 1540845, false, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT4/OP/7", 128);
                                    } else {
                                      if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#哈哈哈，你最终的目的还是要抢夺我的功劳？阿卡伊勒真是个小人啊。", 37, 1540809, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/8", 128);
                                      } else {
                                        if (status === a++) {
                                          cm.sendNormalTalk_Bottom("闭嘴，你这个无礼的家伙！", 37, 1540845, true, true, 1, 2750);
                                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/9", 128);
                                        } else {
                                          if (status === a++) {
                                            cm.setNpcSpecialActionReset("oid=293386928");
                                            cm.npc_SetSpecialAction("oid=293386928", "summon_chain", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === a++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom", 100);
                                              cm.setNpcSpecialActionReset("oid=293386927");
                                              cm.npc_SetSpecialAction("oid=293386927", "chain_start", 0, 0);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/dem_chain", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === a++) {
                                                cm.setNpcSpecialActionReset("oid=293386927");
                                                cm.npc_SetSpecialAction("oid=293386927", 'chain_loop', -1, 0);
                                                cm.sendNormalTalk_Bottom("#face6#！！你什么时候在我身上……！", 37, 1540809, false, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT4/OP/10", 128);
                                              } else {
                                                if (status === a++) {
                                                  cm.sendNormalTalk_Bottom("数百年前关押你的时候就已经刻进去了。\r\n原本终极秘密就应该藏到最后才是，戴米安。", 37, 1540845, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/OP/11", 128);
                                                } else {
                                                  if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face6#哼，你这家伙真是从头到脚都透着卑鄙的味道。", 37, 1540809, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT4/OP/12", 128);
                                                  } else {
                                                    if (status === a++) {
                                                      cm.sendNormalTalk_Bottom("给我闭嘴，你这么傲慢放肆，你以为我能忍你到何时？", 37, 1540845, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/OP/13", 128);
                                                    } else {
                                                      if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("啊，对了，话说起来，我还隐瞒了另外一件事。", 37, 1540845, true, true);
                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/14", 128);
                                                      } else {
                                                        if (status === a++) {
                                                          cm.setNpcSpecialActionReset("oid=293386928");
                                                          cm.npc_SetSpecialAction("oid=293386928", "summon_mother", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === a++) {
                                                              cm.setNpcSpecialActionReset("oid=293386929");
                                                              cm.npc_SetSpecialAction("oid=293386929", "appear2", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === a++) {
                                                                cm.setNpcSpecialActionReset("oid=293386929");
                                                                cm.npc_SetSpecialAction("oid=293386929", "loop", -1, 0);
                                                                cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -20, 392);
                                                              } else {
                                                                if (status === a++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 3000, 2000, 10, 392);
                                                                  } else {
                                                                    if (status === a++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === a++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 25, 392);
                                                                      } else {
                                                                        if (status === a++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(4000, 3000, 4000, 5, 392);
                                                                          } else {
                                                                            if (status === a++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                            } else {
                                                                              if (status === a++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 392);
                                                                              } else {
                                                                                if (status === a++) {
                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === a++) {
                                                                                    cm.setNpcSpecialActionReset("oid=293386929");
                                                                                    cm.npc_SetSpecialAction("oid=293386929", "destroy", 0, 0);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/windowcrash2", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === a++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#！！！！", 37, 1540809, false, true, 1, 1500);
                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/OP/15", 128);
                                                                                    } else {
                                                                                      if (status === a++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom2", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === a++) {
                                                                                          cm.sendNormalTalk_Bottom("你母亲其实只是个虚像，区区人类身体，你以为我会吃那么多苦帮你保管着吗？", 37, 1540845, false, true);
                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/16", 128);
                                                                                        } else {
                                                                                          if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === a++) {
                                                                                              cm.sendNormalTalk_Bottom("#face5#你……说……是虚像？", 37, 1540809, false, true);
                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/OP/17", 128);
                                                                                            } else {
                                                                                              if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("好吧，而且那天杀死你母亲的人并不是你，那全都是我的作品。", 37, 1540845, true, true);
                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT4/OP/18", 128);
                                                                                              } else {
                                                                                                if (status === a++) {
                                                                                                  cm.sendNormalTalk_Bottom('#face5#！！！', 37, 1540809, true, true);
                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/OP/19", 128);
                                                                                                } else {
                                                                                                  if (status === a++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === a++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer("home", "Effect/Direction6.img/effect/tuto/backToHome/0", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                      cm.setAmbience("SoundEff.img/HofM/act4/fire", 200, 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                    } else {
                                                                                                      if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#一切事情……全都是你干的？", 37, 1540934, false, true);
                                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/20", 128);
                                                                                                      } else {
                                                                                                        if (status === a++) {
                                                                                                          cm.sendNormalTalk_Bottom("没错，我把你关起来只是用来当工具，为的就是让你的哥哥恶魔能够堕落得更加彻底。", 37, 1540845, true, true);
                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/21", 128);
                                                                                                        } else {
                                                                                                          if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("不过狼终究是狼……\r\n不管是哥哥还是弟弟，同样都威胁到了我的处境。\r\n既然已经好好使唤了你们数百年，也该够了。", 37, 1540845, true, true);
                                                                                                            cm.effect_Voice("Voice3.img/HofM/ACT4/OP/22", 128);
                                                                                                          } else {
                                                                                                            if (status === a++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer("home", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                              cm.playSoundEffDirectly("SoundEff.img/HofM/act4/fire");
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === a++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                              } else {
                                                                                                                if (status === a++) {
                                                                                                                  cm.playSoundEffDirectly("Ambience.img/snowwave");
                                                                                                                  cm.setAmbience("Ambience.img/blizzard_soft", 70, 60);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 1540934, false, true);
                                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/OP/23", 128);
                                                                                                                } else {
                                                                                                                  if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("呵呵……你的表情可真是有趣啊。\r\n在你上黄泉路之前，我就将真相作为最后的礼物送给你，你是不是会更感激我一些呢？", 37, 1540845, true, true);
                                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT4/OP/24", 128);
                                                                                                                  } else {
                                                                                                                    if (status === a++) {
                                                                                                                      cm.sendNormalTalk_Bottom("那现在我就问你最后一个问题，世界树在哪儿，戴米安？！", 37, 1540845, true, true);
                                                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/OP/25", 128);
                                                                                                                    } else {
                                                                                                                      if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face14#呵呵……呵哈哈……哇哈哈哈哈……", 37, 1540809, true, true);
                                                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/26", 128);
                                                                                                                      } else {
                                                                                                                        if (status === a++) {
                                                                                                                          cm.sendNormalTalk_Bottom("哪里好笑了？", 37, 1540845, true, true);
                                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/27", 128);
                                                                                                                        } else {
                                                                                                                          if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === a++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face15#世界树已经不复存在，因为已经被我吞噬了。", 37, 1540809, false, true);
                                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/OP/28", 128);
                                                                                                                            } else {
                                                                                                                              if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("什么？！", 37, 1540845, true, true);
                                                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT4/OP/29", 128);
                                                                                                                              } else {
                                                                                                                                if (status === a++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face15#你说过终极秘密要藏到最后的吧？", 37, 1540809, true, true);
                                                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/OP/30", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face15#我之所以寻找超越石，不是想要背叛黑魔法师。\r\n我是想让自己成为生命的超越者！", 37, 1540809, true, true);
                                                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT4/OP/31", 128);
                                                                                                                                  } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, -225, 442);
                                                                                                                                    } else {
                                                                                                                                      if (status === a++) {
                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(2500, 1000, 2500, -200, 242);
                                                                                                                                        } else {
                                                                                                                                          if (status === a++) {
                                                                                                                                            cm.setNpcSpecialActionReset("oid=293386927");
                                                                                                                                            cm.npc_SetSpecialAction("oid=293386927", "chain_destroy", 0, 0);
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/dam_chain2", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/OP/32", 128);
                                                                                                                                            } else {
                                                                                                                                              if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这怎么可能，那股力量……！", 37, 1540933, false, true, 1, 2500);
                                                                                                                                              } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === a++) {
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === a++) {
                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm45/Demian", 0, 0);
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face12##r那现在我要问你最后一个问题。#k", 37, 1540809, false, true);
                                                                                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/OP/33", 128);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face11##r我该怎么杀死你呢，阿卡伊勒？#k", 37, 1540809, true, true);
                                                                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/OP/34", 128);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === a++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/HofM/ACT4_akayrum", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/OP/35", 128);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === a++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 3000, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/OP/36", 128);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-Final Act-\r\n#fs28#世界树: #fs20#最后一战", 1);
                                                                                                                                                                } else if (status === a++) {
                                                                                                                                                                  cm.dispose();
                                                                                                                                                                  cm.warp(350140100, 0, true);
                                                                                                                                                                  cm.npc_LeaveField("oid=293386927");
                                                                                                                                                                  cm.npc_LeaveField("oid=293386927");
                                                                                                                                                                  cm.npc_LeaveField("oid=293386928");
                                                                                                                                                                  cm.npc_LeaveField("oid=293386928");
                                                                                                                                                                  cm.npc_LeaveField("oid=293386929");
                                                                                                                                                                  cm.npc_LeaveField("oid=293386929");
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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