var status = -1;
var selectionLog = [];
function action(A, q, L) {
  if (status == 0 && A == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var e = -1;
  if (status <= e++) {
    cm.dispose();
  } else {
    if (status === e++) {
      cm.npc_ChangeController(1540804, "oid=288701155", 2200, -1000, 10, 2150, 2250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701155", "summon", 0, 0);
      cm.npc_ChangeController(1540801, "oid=288701156", 2050, -1000, 9, 2000, 2100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701156", "summon", 0, 0);
      cm.npc_ChangeController(1540803, "oid=288701157", 2130, -1000, 10, 2080, 2180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701157", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=288701158", 1900, -880, 4, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701158", "summon", 0, 0);
      cm.npc_ChangeController(1540806, "oid=288701159", 2100, -880, 1, 2050, 2150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701159", "summon", 0, 0);
      cm.npc_ChangeController(1540805, "oid=288701160", 2000, -880, 1, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701160", 'summon', 0, 0);
      cm.npc_ChangeController(1540802, "oid=288701161", 2200, -880, 1, 2150, 2250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288701161", "summon", 0, 0);
      cm.setNumberForQuestCustomData(33900, 6);
      cm.showMapleHero();
      cm.mapleHeroSetList([6]);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 2300, -1400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === e++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === e++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 2000, -1000);
        } else {
          if (status === e++) {
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === e++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2147, -890);
            } else {
              if (status === e++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === e++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === e++) {
                    cm.sendNormalTalk_Bottom("#face1#在天上飞的遗迹……这我可是头一次见。", 37, 1540801, false, true);
                  } else {
                    if (status === e++) {
                      cm.sendNormalTalk_Bottom("#face4#也不枉辛苦一趟啊。", 37, 1540803, true, true);
                    } else {
                      if (status === e++) {
                        cm.sendNormalTalk_Bottom("#face4#要不是你说了那些不吉利的话，来的路上会更轻松的。", 37, 1540804, true, true);
                      } else {
                        if (status === e++) {
                          cm.sendNormalTalk_Bottom("你们俩还是吵个没完啊。", 37, 1540836, true, true);
                        } else {
                          if (status === e++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === e++) {
                              cm.npc_setForceFlip("oid=288701155", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === e++) {
                                cm.npc_ChangeController(1540836, "oid=288710339", 2300, -1000, 10, 2250, 2350, 1, true, 1000, false);
                                cm.npc_SetSpecialAction("oid=288710339", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === e++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540801, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540803, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540802, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540806, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540804, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs15#弗里德！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540805, cm.getPlayer().getId());
                                } else {
                                  if (status === e++) {
                                    cm.sendNormalTalk_Bottom("对不起，来的路上很辛苦吧？\r\n这是古代人创造的陷阱，我也无能为力。", 37, 1540836, false, true);
                                  } else {
                                    if (status === e++) {
                                      cm.sendNormalTalk_Bottom("弗里德，你现在难道是住在其他什么地方吗？", 37, 1540804, true, true);
                                    } else {
                                      if (status === e++) {
                                        cm.sendNormalTalk_Bottom("我也不清楚，我是个思念体，只拥有生前的记忆。\r\n估计真正的我很久之前就离世了吧。", 37, 1540836, true, true);
                                      } else {
                                        if (status === e++) {
                                          cm.sendNormalTalk_Bottom("……是啊，都已经过去数百年了。", 37, 1540804, true, true);
                                        } else {
                                          if (status === e++) {
                                            cm.sendNormalTalk_Bottom("能再次重逢还是很幸运啊，事到如今，我们五个总算是完整了。", 37, 1540801, true, true);
                                          } else {
                                            if (status === e++) {
                                              cm.sendNormalTalk_Bottom('不对，是六个啊。', 37, 1540836, true, true);
                                            } else {
                                              if (status === e++) {
                                                cm.sendNormalTalk_Bottom('？！', 37, 1540806, true, true);
                                              } else {
                                                if (status === e++) {
                                                  cm.sendNormalTalk_Bottom("想要完成封印黑魔法师的法术，就需要有个人做出牺牲。\r\n因为这是我所创造的法术，我还记得。", 37, 1540836, true, true);
                                                } else {
                                                  if (status === e++) {
                                                    cm.sendNormalTalk_Bottom("如果有谁豁出性命做出牺牲，那个人就会在所有的记忆中被遗忘，\r\n因此我们其实不是五个人，而是六个人。", 37, 1540836, true, true);
                                                  } else {
                                                    if (status === e++) {
                                                      cm.sendNormalTalk_Bottom("这么说来……？", 37, 1540801, true, true);
                                                    } else {
                                                      if (status === e++) {
                                                        cm.sendNormalTalk_Bottom("很抱歉我不记得你的名字了，我该怎么称呼你呢？", 37, 1540836, true, true);
                                                      } else {
                                                        if (status === e++) {
                                                          cm.sendNormalTalk_Bottom("#face1#……隐月，这是我很珍重的另一个朋友给我新起的名字。", 37, 1540806, true, true);
                                                        } else {
                                                          if (status === e++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好吧，赶紧过来，隐月。", 37, 1540836, true, true);
                                                          } else {
                                                            if (status === e++) {
                                                              cm.sendNormalTalk_Bottom("#face5#弗里德……！", 37, 1540806, true, true);
                                                            } else {
                                                              if (status === e++) {
                                                                cm.sendNormalTalk_Bottom("#face0#主人，总有种我们被排挤在外的感觉呢？", 37, 1540807, true, true);
                                                              } else {
                                                                if (status === e++) {
                                                                  cm.sendNormalTalk_Bottom("#face6#看上去多温馨啊。", 37, 1540805, true, true);
                                                                } else {
                                                                  if (status === e++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈哈，是啊，你是我的继承人啊。", 37, 1540836, true, true);
                                                                  } else {
                                                                    if (status === e++) {
                                                                      cm.sendNormalTalk_Bottom("#face8#哦……其实我也不是很明白。\r\n我出生在射手村一个平凡的农家。", 37, 1540805, true, true);
                                                                    } else {
                                                                      if (status === e++) {
                                                                        cm.sendNormalTalk_Bottom("龙神的血不是靠血脉延续的。\r\n而是借助命运的车轮生生不息。我一定要见到你。", 37, 1540836, true, true);
                                                                      } else {
                                                                        if (status === e++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#嘿嘿……", 37, 1540805, true, true);
                                                                        } else {
                                                                          if (status === e++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === e++) {
                                                                              cm.inGameDirectionEvent_Monologue("弗里德和我们聊了很多。", 0);
                                                                            } else {
                                                                              if (status === e++) {
                                                                                cm.inGameDirectionEvent_Monologue("听说了阿弗利埃事情的弗里德，虽然露出了比任何人都要悲伤的表情，但却最先安慰起了米乐。", 1);
                                                                              } else {
                                                                                if (status === e++) {
                                                                                  cm.inGameDirectionEvent_Monologue("另外他也告诉了我们从世界天崩地裂之前就开始存在的独一无二的太古物质。", 1);
                                                                                } else {
                                                                                  if (status === e++) {
                                                                                    cm.sendNormalTalk_Bottom("世界上还存留着这个世界开始之初就已经存在的，\r\n拥有着根源力量的物质。", 37, 1540836, false, true);
                                                                                  } else {
                                                                                    if (status === e++) {
                                                                                      cm.sendNormalTalk_Bottom("我给其中一个取名#b超越石#k。\r\n具体那个物质到底是什么，我到现在也还不清楚。", 37, 1540836, true, true);
                                                                                    } else {
                                                                                      if (status === e++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('illust', "Map/Effect2.img/HofM/ACT2_ab", 0, 2500, 0, 0, 16, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      } else {
                                                                                        if (status === e++) {
                                                                                          cm.sendNormalTalk_Bottom("这种物质只能用阿布拉克萨斯之眼观测得到，\r\n我一直在用它为未来做准备，\r\n那个你们会回来的未来。", 37, 1540836, false, true);
                                                                                        } else {
                                                                                          if (status === e++) {
                                                                                            cm.sendNormalTalk_Bottom("但是当时我并没有方法可以触及那个物质所存在的次元。", 37, 1540836, true, true);
                                                                                          } else {
                                                                                            if (status === e++) {
                                                                                              cm.sendNormalTalk_Bottom("所以我就对遗迹进行了封印，只有我的继承人才能够将其唤醒。", 37, 1540836, true, true);
                                                                                            } else {
                                                                                              if (status === e++) {
                                                                                                cm.sendNormalTalk_Bottom("也许日后你们能够找到……\r\n那些我所没有找到的结果。", 37, 1540836, true, true);
                                                                                              } else {
                                                                                                if (status === e++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("illust", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === e++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === e++) {
                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                    } else {
                                                                                                      if (status === e++) {
                                                                                                        cm.sendNormalTalk_Bottom("如果你说的没错，看来这次的旅行可能要去稍微远点的地方了。", 37, 1540805, false, true);
                                                                                                      } else {
                                                                                                        if (status === e++) {
                                                                                                          cm.sendNormalTalk_Bottom("没错，但是我的旅行只能到这里了。", 37, 1540836, true, true);
                                                                                                        } else {
                                                                                                          if (status === e++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face6#！！弗里德，你那是什么意思？", 37, 1540801, true, true);
                                                                                                          } else {
                                                                                                            if (status === e++) {
                                                                                                              cm.sendNormalTalk_Bottom("估计这个思念体会是我所留下的最后的痕迹，现在我也是时候消失了。", 37, 1540836, true, true);
                                                                                                            } else {
                                                                                                              if (status === e++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#那……", 37, 1540801, true, true);
                                                                                                              } else {
                                                                                                                if (status === e++) {
                                                                                                                  cm.sendNormalTalk_Bottom('……你要走了吗。', 37, 1540804, true, true);
                                                                                                                } else {
                                                                                                                  if (status === e++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#啊……你终究是没有变啊，弗里德。\r\n冷不丁地出现，又像这样托付了什么东西就消失了踪影。", 37, 1540803, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === e++) {
                                                                                                                      cm.sendNormalTalk_Bottom("我们隔了数百年才相遇……居然这么快就。", 37, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === e++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#弗里德，如果这是最后一次道别……我却什么话都想不起来。", 37, 1540801, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === e++) {
                                                                                                                          cm.sendNormalTalk_Bottom("虽然我的记忆并不完整，但我知道你很珍惜我们大家，我有这种想法。", 37, 1540802, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === e++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢，我不会忘记和你们一起展开的旅行。", 37, 1540836, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === e++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face7#……等，等一下，弗里德！", 37, 1540805, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === e++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#龙神，大家就要托付给你了。", 37, 1540836, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === e++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face7#我还有许多话想要问你。", 37, 1540805, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === e++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我相信你能够独自一人找到答案，\r\n因为你肯定就是我的继承人。", 37, 1540836, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === e++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === e++) {
                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                        cm.npc_LeaveField("oid=288710339");
                                                                                                                                        cm.npc_LeaveField("oid=288710339");
                                                                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/prid1/01_bg_effect", 'animation2', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/prid2/02_effect", "animation2", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/prid3/03_character", 'animation2', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                      } else {
                                                                                                                                        if (status === e++) {
                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                        } else {
                                                                                                                                          if (status === e++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                          } else {
                                                                                                                                            if (status === e++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……我还有好多话想说。", 37, 1540801, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === e++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("……我们所有人都一样。", 37, 1540804, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === e++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#没办法了……弗里德一直都是这样的。", 37, 1540806, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === e++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那下一个目的地已经确定了吗。", 37, 1540802, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === e++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("在此之前有件事要做，\r\n虽然大家都聚在了一起，但既然弗里德已经不在了，我们需要全新的领袖。", 37, 1540801, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === e++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛，提到领袖不就只有一位嘛？", 37, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === e++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=288701155", -1);
                                                                                                                                                          cm.npc_setForceFlip("oid=288701156", -1);
                                                                                                                                                          cm.npc_setForceFlip("oid=288701161", -1);
                                                                                                                                                          cm.npc_setForceFlip("oid=288701157", -1);
                                                                                                                                                          cm.npc_setForceFlip("oid=288701159", -1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === e++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我赞成。", 37, 1540802, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === e++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom('#face4#好吧。', 37, 1540804, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === e++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("从现在起你就是我们的领袖，龙神。", 37, 1540801, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === e++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#主人，是不是感觉肩上沉甸甸的。", 37, 1540807, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === e++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#我……你们说的是我吗？", 37, 1540805, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === e++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === e++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face7#额，那个我……\r\n我也不知道我够不够格，以后还请多多……\r\n不对，不是这样的。", 37, 1540805, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === e++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#那先观赏一下风景吧，\r\n这可是弗里德好不容易留给我们的礼物。", 37, 1540803, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === e++) {
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701158", -1, 600, 100);
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701155", -1, 600, 100);
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701156", -1, 600, 100);
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701161", -1, 600, 100);
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701157", -1, 600, 100);
                                                                                                                                                                            cm.npc_SetForceMove("oid=288701159", -1, 600, 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === e++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face8#等，等一下，一起走啊！", 37, 1540805, false, true, 1, 1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === e++) {
                                                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 2000, -1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === e++) {
                                                                                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                  cm.npc_SetForceMove("oid=288701160", -1, 500, 100);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === e++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 1100, -1700);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === e++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === e++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === e++) {
                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === e++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === e++) {
                                                                                                                                                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
                                                                                                                                                                                              cm.forceCompleteQuest(33977);
                                                                                                                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
                                                                                                                                                                                              cm.updateInfoQuest(33962, "33971=1;33972=1;33973=1;33974=1;33975=1;33976=1;33977=1");
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                            } else if (status === e++) {
                                                                                                                                                                                              cm.playerMessage(5, '获得7000点声望。');
                                                                                                                                                                                              cm.updateInfoQuest(33909, "1_5=1;1=1;2=1;3=0;4=0");
                                                                                                                                                                                              cm.updateInfoQuest(15249, "ring=2");
                                                                                                                                                                                              cm.updateInfoQuest(33932, "1_5=1;1=1;2=1");
                                                                                                                                                                                              cm.forceCompleteQuest(33912);
                                                                                                                                                                                              cm.finishAchievement(1199);
                                                                                                                                                                                              cm.gainItem(3017013, 1);
                                                                                                                                                                                              cm.dispose();
                                                                                                                                                                                              cm.warp(350125000, 0, true);
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701155");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701155");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701156");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701156");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701157");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701157");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701158");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701158");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701159");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701159");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701160");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701160");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701161");
                                                                                                                                                                                              cm.npc_LeaveField("oid=288701161");
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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