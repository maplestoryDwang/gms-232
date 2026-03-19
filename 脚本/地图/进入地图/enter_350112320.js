var status = -1;
var selectionLog = [];
function action(d, w, h) {
  if (status == 0 && d == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = h;
  var B = -1;
  if (status <= B++) {
    cm.dispose();
  } else {
    if (status === B++) {
      cm.npc_ChangeController(1540820, "oid=57760", 737, -531, 25, 687, 787, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540821, "oid=288263278", 788, -730, 27, 738, 838, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=288263278", "summon", 0, 0);
      cm.npc_ChangeController(1540802, "oid=288263279", 630, -600, 22, 580, 680, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288263279", "summon", 0, 0);
      cm.npc_ChangeController(1540809, "oid=288263280", 1165, -800, 28, 1115, 1215, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=288263280", "summon", 0, 0);
      cm.npc_ChangeController(1540805, "oid=288263281", 690, -600, 24, 640, 740, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288263281", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=288263282", 500, -600, 18, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288263282", "summon", 0, 0);
      cm.npc_ChangeController(1540806, "oid=288263283", 560, -600, 20, 510, 610, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288263283", "summon", 0, 0);
      cm.npcMove(1540807, 0, -100, 0);
      cm.Hidden_background("AF_Tuto", 1, 0, 0, 0);
      cm.Hidden_background("AF_mark", 1, 0, 0, 0);
      cm.Hidden_background("AF_mark2", 1, 0, 0, 0);
      cm.Hidden_background("AF_Magic", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 700, -550);
      cm.curNodeEventEnd(true);
    } else {
      if (status === B++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === B++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === B++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === B++) {
              cm.sendNormalTalk_Bottom("#face4#额……！", 37, 1540805, false, true);
            } else {
              if (status === B++) {
                cm.sendNormalTalk_Bottom("#face0#你没事吗？", 37, 1540806, true, true);
              } else {
                if (status === B++) {
                  cm.sendNormalTalk_Bottom("你肯定会觉得很头痛。\r\n因为这并非单纯的信息传递，而是记忆的转移……\r\n就连负责传递的我也不知道其中的内容。", 37, 1540820, true, true);
                } else {
                  if (status === B++) {
                    cm.sendNormalTalk_Bottom("不过既然这是弗里德的嘱托，\r\n那就一定是一条值得我豁出性命的重要信息。", 37, 1540820, true, true);
                  } else {
                    if (status === B++) {
                      cm.sendNormalTalk_Bottom("#face2#先祖，你怎么总说得好像自己快没命了似的？\r\n我们不会放下先祖不管就走的。", 37, 1540807, true, true);
                    } else {
                      if (status === B++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === B++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.sendNormalTalk_Bottom("#face0#战利品旁边到处都是苍蝇在飞呢。", 37, 1540809, false, true);
                        } else {
                          if (status === B++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288263281"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288263279"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288263283"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === B++) {
                              cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                              cm.Hidden_background("AF_mark", 1, 1, 0, 0);
                              cm.Hidden_background("AF_mark2", 1, 1, 0, 0);
                              cm.userSetFieldFloating(350112320, 5, 5, 5);
                              cm.npc_SetSpecialAction("oid=288263278", 'special3', 1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/curse", 100);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                              cm.sendNormalTalk_Bottom("#face0#额啊啊啊！", 37, 1540820, false, true);
                            } else {
                              if (status === B++) {
                                cm.setNpcSpecialActionReset("oid=288263278");
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === B++) {
                                  cm.userSetFieldFloating(350112320, 0, 0, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 880, -580);
                                } else {
                                  if (status === B++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === B++) {
                                      cm.npc_SetSpecialAction("oid=288263278", "special1", 1, 1);
                                      cm.Hidden_background("AF_mark2", 1, 0, 0, 0);
                                      cm.Hidden_background("AF_Magic", 1, 0, 0, 0);
                                      cm.sendNormalTalk_Bottom("#face4#你是……！", 37, 1540805, false, true);
                                    } else {
                                      if (status === B++) {
                                        cm.sendNormalTalk_Bottom("戴米安，他就是魔族军的首领。", 37, 1540820, true, true);
                                      } else {
                                        if (status === B++) {
                                          cm.sendNormalTalk_Bottom("#face0#你到底为什么要做这种事？", 37, 1540806, true, true);
                                        } else {
                                          if (status === B++) {
                                            cm.sendNormalTalk_Bottom("#face1#为了能够感染更为强大的力量，我的力量需要变得更加强大才行，仅此而已。", 37, 1540809, true, true);
                                          } else {
                                            if (status === B++) {
                                              cm.sendNormalTalk_Bottom("#face0#只要是为了得到力量，你什么都愿意做吗？", 37, 1540806, true, true);
                                            } else {
                                              if (status === B++) {
                                                cm.sendNormalTalk_Bottom("#face1#只有强者才能活下去，懦弱即罪恶……\r\n这不就是数百年前，你们人类赶走我们时给我们的教训吗？", 37, 1540809, true, true);
                                              } else {
                                                if (status === B++) {
                                                  cm.sendNormalTalk_Bottom("#face1#不过有一点值得表扬，被感染还能够让自己撑到这一步的你是第一个，龙。", 37, 1540809, true, true);
                                                } else {
                                                  if (status === B++) {
                                                    cm.sendNormalTalk_Bottom("#face4#阿弗利埃是信念超群的玛瑙龙，\r\n可不是你这种人能够感染的对象！！", 37, 1540805, true, true);
                                                  } else {
                                                    if (status === B++) {
                                                      cm.sendNormalTalk_Bottom("#face1#果真如此吗？", 37, 1540809, true, true);
                                                    } else {
                                                      if (status === B++) {
                                                        cm.sendNormalTalk_Bottom("#face2#龙，我给你一个让你难以拒绝的提议吧。\r\n如果你能在此攻击他们，我便赐予你全新的生命，让你当我的部下。", 37, 1540809, true, true);
                                                      } else {
                                                        if (status === B++) {
                                                          cm.sendNormalTalk_Bottom("#face4#！！", 37, 1540805, true, true);
                                                        } else {
                                                          if (status === B++) {
                                                            cm.sendNormalTalk_Bottom("……我拒绝。", 37, 1540820, true, true);
                                                          } else {
                                                            if (status === B++) {
                                                              cm.npc_SetSpecialAction("oid=288263280", "special5", 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/curse", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === B++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                                cm.userSetFieldFloating(350112320, 5, 5, 5);
                                                                cm.npc_SetSpecialAction("oid=288263278", "special3", 1, 1);
                                                                cm.Hidden_background("AF_mark", 1, 1, 0, 0);
                                                                cm.Hidden_background('AF_mark2', 1, 1, 0, 0);
                                                                cm.sendNormalTalk_Bottom("#face0#额啊啊啊！", 37, 1540820, false, true);
                                                              } else {
                                                                if (status === B++) {
                                                                  cm.setNpcSpecialActionReset("oid=288263278");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === B++) {
                                                                    cm.userSetFieldFloating(350112320, 0, 0, 0);
                                                                    cm.npc_SetSpecialAction("oid=288263278", "special1", 1, 1);
                                                                    cm.sendNormalTalk_Bottom("#face1#你这家伙还真是没法交流啊！", 37, 1540802, false, true);
                                                                  } else {
                                                                    if (status === B++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 670, -500);
                                                                    } else {
                                                                      if (status === B++) {
                                                                        cm.npc_SetSpecialAction("oid=288263280", "special1", -1, 1);
                                                                        cm.npc_LeaveField("oid=288263279");
                                                                        cm.npc_LeaveField("oid=288263279");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === B++) {
                                                                          cm.userSetFieldFloating(350112320, 5, 5, 5);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                        } else {
                                                                          if (status === B++) {
                                                                            cm.userSetFieldFloating(350112320, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === B++) {
                                                                              cm.npc_SetSpecialAction("oid=288263280", "special2", 1, 1);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === B++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 1110, -730);
                                                                              } else {
                                                                                if (status === B++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === B++) {
                                                                                    cm.userSetFieldFloating(350112320, 5, 5, 5);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === B++) {
                                                                                      cm.npc_SetSpecialAction("oid=288263280", "special3", -1, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === B++) {
                                                                                        cm.sendNormalTalk_Bottom("真叫人失望啊，这就是所谓英雄的一击吗！", 37, 1540809, false, true);
                                                                                      } else {
                                                                                        if (status === B++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === B++) {
                                                                                            cm.userSetFieldFloating(350112320, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === B++) {
                                                                                              cm.npc_SetSpecialAction("oid=288263280", "special4", -1, 1);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                            } else {
                                                                                              if (status === B++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 600, -450);
                                                                                              } else {
                                                                                                if (status === B++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                } else {
                                                                                                  if (status === B++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === B++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#额啊！", 37, 1540802, false, true);
                                                                                                    } else {
                                                                                                      if (status === B++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#……！！那把剑有点奇怪！", 37, 1540806, true, true);
                                                                                                      } else {
                                                                                                        if (status === B++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 880, -580);
                                                                                                        } else {
                                                                                                          if (status === B++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === B++) {
                                                                                                              cm.sendNormalTalk_Bottom("那个人力量强大……现在的你们是无法战胜他的。", 37, 1540820, false, true);
                                                                                                            } else {
                                                                                                              if (status === B++) {
                                                                                                                cm.sendNormalTalk_Bottom("我原先还有些期待……真是无聊。\r\n我现在就送你们上黄泉路。", 37, 1540809, true, true);
                                                                                                              } else {
                                                                                                                if (status === B++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === B++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                    cm.sendNormalTalk_Bottom("在此的大家，谢谢你们见证了我的最后一程。", 37, 1540820, false, true);
                                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/DRAGON2/30", 128);
                                                                                                                  } else {
                                                                                                                    if (status === B++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#……？！", 37, 1540805, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === B++) {
                                                                                                                        cm.setNpcSpecialActionReset("oid=288263280");
                                                                                                                        cm.npc_ChangeController(1540802, "oid=288293594", 430, -550, 16, 380, 480, 0, true, 0, false);
                                                                                                                        cm.npc_SetSpecialAction("oid=288293594", "summon", 0, 0);
                                                                                                                        cm.npcMove(1540802, 0, -20, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === B++) {
                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 880, -580);
                                                                                                                        } else {
                                                                                                                          if (status === B++) {
                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === B++) {
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm45/Heroes Of Maple Theme Piano", 0, 0);
                                                                                                                              cm.sendNormalTalk_Bottom("戴米安，区区卑贱的魔族，\r\n你以为凭你就能改变龙的意志吗？\r\n我的命你拿去便是，但我的意志你是断然取不走的。", 37, 1540820, false, true);
                                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/DRAGON2/31", 128);
                                                                                                                            } else {
                                                                                                                              if (status === B++) {
                                                                                                                                cm.sendNormalTalk_Bottom("……！", 37, 1540809, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === B++) {
                                                                                                                                  cm.npc_SetSpecialAction("oid=288263278", 'special3', 1, 1);
                                                                                                                                  cm.Hidden_background("AF_Magic", 1, 1, 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 700, 3000, 880, -580);
                                                                                                                                } else {
                                                                                                                                  if (status === B++) {
                                                                                                                                    cm.userSetFieldFloating(350112320, 5, 5, 5);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === B++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("你会在这里和我一起上路的，戴米安……！", 37, 1540820, false, true, 1, 2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === B++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#不可以，不要这样，先祖！！！", 37, 1540807, true, true, 1, 2000);
                                                                                                                                      } else {
                                                                                                                                        if (status === B++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 8000, 0);
                                                                                                                                          cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                          cm.sendNormalTalk_Bottom("米乐，谢谢你能成长得这么优秀。", 37, 1540820, true, true, 1, 3500);
                                                                                                                                        } else {
                                                                                                                                          if (status === B++) {
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 690, -500, 1, 0, 1, 1, 0]);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 560, -500, 1, 0, 1, 1, 0]);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 430, -500, 1, 0, 1, 1, 0]);
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                                                                                                                            cm.npc_LeaveField("oid=288263281");
                                                                                                                                            cm.npc_LeaveField("oid=288263281");
                                                                                                                                            cm.npc_LeaveField("oid=288263282");
                                                                                                                                            cm.npc_LeaveField("oid=288263282");
                                                                                                                                            cm.npc_LeaveField("oid=288263283");
                                                                                                                                            cm.npc_LeaveField("oid=288263283");
                                                                                                                                            cm.npc_LeaveField("oid=288293594");
                                                                                                                                            cm.npc_LeaveField("oid=288293594");
                                                                                                                                            cm.sendNormalTalk_Bottom("走吧，\r\n还有不要忘了，玛瑙龙的信念……", 37, 1540820, true, true, 1, 3500);
                                                                                                                                          } else {
                                                                                                                                            if (status === B++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                            } else {
                                                                                                                                              if (status === B++) {
                                                                                                                                                cm.userSetFieldFloating(350112320, 0, 0, 0);
                                                                                                                                                cm.Hidden_background("AF_eye1", 1, 1, 0, 0);
                                                                                                                                                cm.Hidden_background("AF_eye2", 1, 0, 0, 0);
                                                                                                                                                cm.Hidden_background("AF_eye3", 1, 0, 0, 0);
                                                                                                                                                cm.Hidden_background("AF_breath", 1, 0, 0, 0);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#弗里德，我守住了和你的约定，\r\n现在我……会消失在永恒的时间里……", 37, 1540820, false, true);
                                                                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/9", 128);
                                                                                                                                              } else {
                                                                                                                                                if (status === B++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === B++) {
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 99, 20, 1, 0);
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, -100, 20, 7, 0);
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_up2", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 99, 20, 1, 0);
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_down2", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, -100, 20, 7, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === B++) {
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("base", "Map/Effect2.img/HofM/ACT1_bye/base", 0, 2500, 0, 0, 12, 4, 0);
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("mark", "Map/Effect2.img/HofM/ACT1_bye/mark", 0, 2500, 0, 0, 16, 4, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === B++) {
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("eye3", "Map/Effect2.img/HofM/ACT1_bye/eye3", 0, 2500, 0, 0, 13, 4, 0);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("eye2", "Map/Effect2.img/HofM/ACT1_bye/eye2", 0, 2500, 0, 0, 14, 4, 0);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("eye1", "Map/Effect2.img/HofM/ACT1_bye/eye1", 0, 2500, 0, 0, 15, 4, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === B++) {
                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer("mark", '', 2, 2500, 0, 0, 0, 0, 0);
                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer("eye1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === B++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("eye2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === B++) {
                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer("eye3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === B++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("base", '', 2, 3000, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === B++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_up2", '', 1, 5000, 0, 200, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_down2", '', 1, 5000, 0, -200, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === B++) {
                                                                                                                                                                    cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/blink/skeleton", 'animation', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                                                                  } else if (status === B++) {
                                                                                                                                                                    cm.npc_LeaveField("oid=288263278");
                                                                                                                                                                    cm.npc_LeaveField("oid=288263278");
                                                                                                                                                                    cm.npc_LeaveField("oid=288263280");
                                                                                                                                                                    cm.npc_LeaveField("oid=288263280");
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(350112400, 0, true);
                                                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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