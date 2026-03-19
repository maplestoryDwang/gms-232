var status = -1;
var selectionLog = [];
function action(D, L, Y) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  var u = cm.getNumberFromQuestInfo(34021, 'hero1');
  var d = cm.getNumberFromQuestInfo(34021, "hero2");
  status++;
  selectionLog[status] = Y;
  var Z = -1;
  if (status <= Z++) {
    cm.dispose();
  } else {
    if (status === Z++) {
      cm.npc_ChangeController(1540912, "oid=294884420", 1050, -200, 6, 1000, 1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=294884420", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=294884421", 460, -120, 2, 410, 510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294884421", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + u, "oid=294884422", 480, -120, 2, 430, 530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294884422", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + d, "oid=294884423", 420, -120, 2, 370, 470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294884423", 'summon', 0, 0);
      cm.npcMove(1540912, 0, 126, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 5);
      cm.forceCompleteQuest(34014);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 5);
      cm.updateInfoQuest(33964, "34011=1;34012=1;34013=1;34014=1");
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === Z++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 800, -120);
      } else {
        if (status === Z++) {
          cm.mapleHeroSetList([7]);
          cm.setNumberForQuestCustomData(33900, 7);
          cm.showMapleHero();
          cm.npc_SetSpecialAction("oid=294884420", "special2", -1, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === Z++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === Z++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === Z++) {
                cm.npc_SetSpecialAction("oid=294884420", "special1", 1, 1);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS", 100);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === Z++) {
                  cm.sendNormalTalk_Bottom("#face7#额……！", 37, 1540809, false, true);
                } else {
                  if (status === Z++) {
                    cm.sendNormalTalk_Bottom("#face4#那团黑色的到底是……？", 37, 1540801 + u, true, true);
                  } else {
                    if (status === Z++) {
                      cm.sendNormalTalk_Bottom("#face3#那肯定就是戴米安所拥有的力量的源泉。", 37, 1540805, true, true);
                    } else {
                      if (status === Z++) {
                        cm.sendNormalTalk_Bottom("#face3#得赶紧将剑夺走！", 37, 1540805, true, true);
                      } else {
                        if (status === Z++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === Z++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === Z++) {
                              cm.sendNormalTalk_Bottom("#face0#龙神，等一下！有点奇怪！", 37, 1540801 + d, false, true);
                            } else {
                              if (status === Z++) {
                                cm.sendNormalTalk_Bottom('主人！小心点！', 37, 1540807, true, true);
                              } else {
                                if (status === Z++) {
                                  cm.sendNormalTalk_Bottom("已经迟了！我会将你吞噬的，龙神！！", 37, 1540930, true, true);
                                } else {
                                  if (status === Z++) {
                                    cm.npc_SetSpecialAction("oid=294884420", 'special3', 1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evil_evan", 100);
                                    cm.npc_SetForceMove("oid=294884421", 1, 50, 130);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === Z++) {
                                      cm.userSetFieldFloating(350143000, 5, 5, 5);
                                      cm.sendNormalTalk_Bottom("#face4#额啊啊！！", 37, 1540805, false, true, 1, 1500);
                                    } else {
                                      if (status === Z++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === Z++) {
                                          cm.fieldEffect_Hero8(1);
                                          cm.fieldEffect_Hero9(0, 2000);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === Z++) {
                                            cm.userSetFieldFloating(350143000, 0, 0, 0);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 800, -120);
                                          } else {
                                            if (status === Z++) {
                                              cm.sendNormalTalk_Bottom("哇哈哈哈哈！正合适做新的宿主呢。", 37, 1540930, false, true);
                                            } else {
                                              if (status === Z++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === Z++) {
                                                  cm.fieldEffect_PlayBGM("Bgm45.img/The Devil Is Coming", 0, 0);
                                                  cm.fieldEffect_Hero9(60, 10000);
                                                  cm.sendNormalTalk_Bottom('#face0#主人！', 37, 1540786, false, true);
                                                } else {
                                                  if (status === Z++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === Z++) {
                                                      cm.sendNormalTalk_Bottom("#face0#主人？主人！你醒醒！", 37, 1540786, false, true);
                                                    } else {
                                                      if (status === Z++) {
                                                        cm.sendNormalTalk_Bottom("#face4#米乐？这里……是哪里？", 37, 1540805, true, true);
                                                      } else {
                                                        if (status === Z++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我也不清楚……但我们好像是被什么吞噬了，主人。", 37, 1540786, true, true);
                                                        } else {
                                                          if (status === Z++) {
                                                            cm.sendNormalTalk_Bottom("#face3#啊……没错，我想起来了……被什么黑色的东西给吞噬了。", 37, 1540805, true, true);
                                                          } else {
                                                            if (status === Z++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === Z++) {
                                                                cm.sendNormalTalk_Bottom("#face3#是我搞砸了啊，米乐。", 37, 1540805, false, true);
                                                              } else {
                                                                if (status === Z++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#没错……有可能就是。\r\n不过，主人，你看看这股包围着我们的力量，\r\n是不是很厉害啊？", 37, 1540786, true, true);
                                                                } else {
                                                                  if (status === Z++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#这好像是戴米安所使用的力量……\r\n充满了无穷无尽的#r憎恶和怨恨#k。", 37, 1540805, true, true);
                                                                  } else {
                                                                    if (status === Z++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#主人，我们来#r接收这股力量吧，#k \r\n这样一来，我们也能一下子变强的！", 37, 1540786, true, true);
                                                                    } else {
                                                                      if (status === Z++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#真的吗？但是这样一来，#r我不知道自己会变成什么样#k，\r\n有可能会像戴米安那样，对世界充满了愤怒……", 37, 1540805, true, true);
                                                                      } else {
                                                                        if (status === Z++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#主人难道不想变强吗？你看看我们，我们是所有英雄中最弱的啊。\r\n接受了这股力量，以后就不会被任何其他英雄所束缚了。", 37, 1540786, true, true);
                                                                        } else {
                                                                          if (status === Z++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#只要接受了力量，主人也能够成为#r足以与弗里德比肩的大魔法师#k。", 37, 1540786, true, true);
                                                                          } else {
                                                                            if (status === Z++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#能够与弗里德比肩？\r\n那样你也会变得像阿弗利埃一样强大？", 37, 1540805, true, true);
                                                                            } else {
                                                                              if (status === Z++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#这是当然！很厉害吧，主人？", 37, 1540786, true, true);
                                                                              } else {
                                                                                if (status === Z++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#……这股力量非常惊人。", 37, 1540805, true, true);
                                                                                } else {
                                                                                  if (status === Z++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === Z++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/HofM/ACT4_dark/0", 0, 2500, 0, 0, 1, 4, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === Z++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect2.img/HofM/ACT4_dark/1", 0, 2500, 0, 0, 5, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === Z++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', "Map/Effect2.img/HofM/ACT4_dark/2", 0, 2500, 0, 0, 1, 4, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === Z++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#？，？？？？？？？，？？。？？？？？。", 37, 1540786, false, true);
                                                                                          } else {
                                                                                            if (status === Z++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#来，接受这股力量吧，主人。握住我的手。", 37, 1540786, true, true);
                                                                                            } else {
                                                                                              if (status === Z++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === Z++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                } else {
                                                                                                  if (status === Z++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                    cm.effect_Text(["#fn黑体##fs16#……人"], [0, 1500, 4, 0, 0, 1, 4, 3, 1000, 1000]);
                                                                                                  } else {
                                                                                                    if (status === Z++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/HofM/ACT4_dark/0", 0, 1000, 0, 0, 1, 4, 1);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect2.img/HofM/ACT4_dark/1", 0, 1000, 0, 0, 5, 4, 1);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', "Map/Effect2.img/HofM/ACT4_dark/2", 0, 1000, 0, 0, 1, 4, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                    } else {
                                                                                                      if (status === Z++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#什么声音……", 37, 1540805, false, true);
                                                                                                      } else {
                                                                                                        if (status === Z++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#来，只要接受这股力量就好了，\r\n就可以成为万人敬仰的真英雄，大魔法师了。", 37, 1540786, true, true);
                                                                                                        } else {
                                                                                                          if (status === Z++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === Z++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer('13', "Map/Effect2.img/HofM/ACT4_dark/4", 0, 1500, 0, 0, 2, 4, 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === Z++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#是真正的大魔法师。", 37, 1540786, false, true);
                                                                                                              } else {
                                                                                                                if (status === Z++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face20##r……成为大魔法师……", 37, 1540805, true, true);
                                                                                                                } else {
                                                                                                                  if (status === Z++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === Z++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 10, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('13', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                    } else {
                                                                                                                      if (status === Z++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        cm.effect_Text(["#fn黑体##fs18#主人……"], [0, 1500, 4, 0, 0, 1, 4, 3, 1000, 1000]);
                                                                                                                      } else {
                                                                                                                        if (status === Z++) {
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/HofM/ACT4_dark/0", 0, 1000, 0, 0, 1, 4, 1);
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect2.img/HofM/ACT4_dark/1", 0, 1000, 0, 0, 5, 4, 1);
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('13', "Map/Effect2.img/HofM/ACT4_dark/4", 0, 1000, 0, 0, 2, 4, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                        } else {
                                                                                                                          if (status === Z++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#我分明听到什么声音……", 37, 1540805, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === Z++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#主人，你在做什么，赶紧握住我的手。", 37, 1540786, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === Z++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face20#额……手……手……", 37, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === Z++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === Z++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('13', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                  } else {
                                                                                                                                    if (status === Z++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                      cm.effect_Text(["#fn黑体##fs20#要是你再不醒过来，我就把你吃了……"], [0, 2000, 4, 0, 0, 1, 4, 3, 1000, 1000]);
                                                                                                                                    } else {
                                                                                                                                      if (status === Z++) {
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/HofM/ACT4_dark/0", 0, 2500, 0, 0, 1, 4, 1);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('13', "Map/Effect2.img/HofM/ACT4_dark/4", 0, 2500, 0, 0, 2, 4, 1);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('15', "Map/Effect2.img/HofM/ACT4_dark/3", 0, 2500, 0, 0, 5, 4, 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                      } else {
                                                                                                                                        if (status === Z++) {
                                                                                                                                          cm.fieldEffect_Hero9(0, 3000);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#……好吧，我现在知道了。", 37, 1540805, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === Z++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#如果我变得不是我，就算获得了再强大的力量都无济于事。", 37, 1540805, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === Z++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === Z++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#你难道打算再次成为虚有其表的英雄吗？", 37, 1540786, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === Z++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#不许说傻话，\r\n虽然会有些脆弱，但米乐和我秉性纯良，做了不少好事。", 37, 1540805, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === Z++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#你……怎么会……", 37, 1540786, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === Z++) {
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('25', "Map/Effect2.img/HofM/ACT4_dark/5", 0, 2000, 0, 0, 10, 4, 1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === Z++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("放我走吧，再拖下去，真正的米乐说不定会吃了我。", 37, 1540805, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === Z++) {
                                                                                                                                                          cm.npc_SetSpecialAction("oid=294884420", "special4", -1, 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === Z++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('99', "Map/Effect2.img/WhiteOut", 0, 700, 0, 0, 10, 4, 1);
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === Z++) {
                                                                                                                                                              cm.npc_SetForceMove("oid=294884421", -1, 80, 150);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                cm.npc_SetForceMove("oid=294884421", 1, 10, 150);
                                                                                                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 545, -100);
                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 490, 10);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('13', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('15', '', 2, 10, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('25', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                    cm.npc_ChangeController(1540805, "oid=294959806", 530, -120, 2, 480, 580, 1, true, 0, false);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=294959806", "summon", 0, 0);
                                                                                                                                                                    cm.npc_SetSpecialAction("oid=294959806", "special5", -1, 1);
                                                                                                                                                                    cm.sendNormalTalk_Bottom('额啊啊！？', 37, 1540930, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("龙神！", 37, 1540801 + u, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#你回来啦，主人！！", 37, 1540807, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#差一点就出大事了呢，哈哈……", 37, 1540805, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("这……这怎么可能，那个小毛孩子怎么会……？", 37, 1540930, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#我真的会吃了你的哦！不过主人，那到底是什么啊？", 37, 1540807, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#我也搞不清楚，虽然只是一瞬间，但我差点失去理智，被一股巨大的力量所吞噬。", 37, 1540805, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                    cm.npc_ChangeController(1540914, "oid=294965604", 220, -100, 1, 170, 270, 0, true, 1000, false);
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=294965604", 'summon', 0, 0);
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#那是#r魔族的冤魂#k。", 37, 1540808, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                                        cm.npc_setForceFlip("oid=294884421", -1);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                                          cm.npc_setForceFlip("oid=294884422", -1);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(70);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                                            cm.npc_setForceFlip("oid=294884423", -1);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                                              cm.setNpcSpecialActionReset("oid=294959806");
                                                                                                                                                                                              cm.npc_SetForceMove("oid=294965604", 1, 100, 90);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face5#数千年来他们渴求无限的力量，并最终破灭……\r\n作为代价，无数的魔族冤魂在痛苦中死去……", 37, 1540808, false, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5##r黑魔法师……#k \r\n那个邪恶的魔鬼终究还是将我弟弟再次引入了魔族的歧途。", 37, 1540808, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#你被戴米安伤得很重，不要再说话了。", 37, 1540805, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face5#如果现在不把那个破坏掉，终究还是会重复相同的悲剧的……\r\n而且我弟弟的痛苦也不会结束，大家都让开。", 37, 1540808, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#但是……", 37, 1540805, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face5#都让开，求你们了。", 37, 1540808, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                                                              cm.npc_SetForceMove("oid=294965604", 1, 280, 90);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 960, -120);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=294884421", 1);
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=294884422", 0);
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=294884423", 0);
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=294959806", 1);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("你这是打算做什么，你的弟弟已经和我合二为一了！\r\n你该不会不知道，你若是破坏了我，你弟弟也会死的！", 37, 1540930, false, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm45.img/Pain To Hope", 0, 0);
                                                                                                                                                                                                                        cm.fieldEffect_Hero9(70, 10000);
                                                                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 850, 70);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face5#戴米安。", 37, 1540808, false, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face7#……赶紧终结掉。", 37, 1540809, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#……你是我唯一的弟弟。", 37, 1540808, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face8#不，我早已不是哥哥所认识的那个弟弟了。", 37, 1540809, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face9#我分明还有些让我倍为珍惜的记忆，可现在就连这些记忆都变得模糊了。", 37, 1540809, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face9#现在母亲的名字和长相，我都不记得了。", 37, 1540809, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face8#我不后悔背叛了哥哥并发动了攻击，\r\n不，我为自己的懦弱感到寒心感到生气，我居然没有杀死哥哥。", 37, 1540809, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face8#所以在我还是我的时候，终结一切吧。", 37, 1540809, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face6#我对你说了谎。", 37, 1540808, false, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#那天，靠近你身体的时候我就知道了，\r\n你已经到了难以挽回的地步……", 37, 1540808, true, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom('#face10#……', 37, 1540809, true, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === Z++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face6#对不起，戴米安。", 37, 1540808, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === Z++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === Z++) {
                                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=294965604");
                                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=294965604");
                                                                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=294884420", "special5", 1, 1);
                                                                                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/demon_attack", 100);
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === Z++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(300, 1000, 300, 960, -120);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === Z++) {
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === Z++) {
                                                                                                                                                                                                                                                                cm.userSetFieldFloating(350143000, 5, 5, 5);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === Z++) {
                                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#r#fs25#额啊啊！！！！！", 37, 1540930, false, true, 1, 3000);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === Z++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                  } else if (status === Z++) {
                                                                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                                                                    cm.warp(350143300, 0, true);
                                                                                                                                                                                                                                                                    cm.userSetFieldFloating(350143000, 0, 0, 0);
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884420");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884420");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884421");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884421");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884422");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884422");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884423");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294884423");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294959806");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=294959806");
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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