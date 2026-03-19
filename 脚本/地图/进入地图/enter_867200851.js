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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400580, "oid=4250604", 390, 300, 29, 340, 440, 1, true, false);
      cm.npc_SetSpecialAction("oid=4250604", "summon", 0, 0);
      cm.npc_ChangeController(9400584, "oid=4250605", 450, 300, 29, 400, 500, 1, true, false);
      cm.npc_SetSpecialAction("oid=4250605", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 270, 320]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
          cm.sendNewEffects(17, [1000, 2000, 2000, 390, 320]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b艾丽卡接着，是木柴和肉。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#谢谢你，#h0#。多亏了你，乡亲们可以早点歇息了。", 37, 9400580, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b嗯……数量不多，煮汤的话还是够大家吃的。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……啊……煮汤……", 37, 9400580, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('#face3#嗯……', 37, 9400580, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=4250604", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#……嗯……啊！扎奈特，你会不会……煮汤？", 37, 9400580, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 9400584, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=4250604", -1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 40);
                                          cm.sendNewEffects(17, [1000, 2000, 2000, 260, 320]);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=4250604", -1, 50, 50);
                                              cm.sendNormalTalk_Bottom('#b啊……先生火……', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b锅里装上水……", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b然后放到火上……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b等到水烧开后，放肉，放调料就可以了！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/simmer", 128);
                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=4250604"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，很简单耶！书上写得好复杂的……", 37, 9400580, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#b书？', 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#对啊，把肉切成1厘米见方的大块，再把胡萝卜、芹菜、辣椒、土豆切成小块备好。洋葱、大葱和口蘑剁碎，大蒜捣成蒜泥。西红柿放开水焯一下，过凉水后把皮和籽……", 37, 9400580, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b……很遗憾，这里只有肉和盐、胡椒。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#好吧。居然用这些就能做料理……好棒啊！", 37, 9400580, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#现在该做什么？", 37, 9400580, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b等它煮熟就行。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 115);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_OneTimeAction(29, 99999999);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=4250604", -1, 30, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=4250604", "sit", -1, 0);
                                                                                cm.setAmbience("Ambience.img/mmf_fire", 100, 60);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(9400592, "oid=4251197", 700, 320, 10, 650, 750, 1, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=4251197", "summon", 0, 0);
                                                                                  cm.npc_SetForceMove("oid=4251197", -1, 390, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……呃……#h0#……", 37, 9400592, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b啊，阿尔西，你今天没……", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，我现在非常清醒！离开卡夫塔佩之后，我就一口酒……嗝，没沾过！", 37, 9400592, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#真的，你要相信我……。啊！这个是水！", 37, 9400592, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b嗯，我相信你，你做得很棒。", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#那个……刚才我在卡夫塔佩时听说……你是接到请求寻找失踪孙女的信，才来到这里的……？", 37, 9400592, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#b啊，是的。（估计他听见我和巴特勒副团长的谈话了。）", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_ChangeController(9400587, "oid=4251373", 700, 320, 10, 650, 750, 1, true, false);
                                                                                                  cm.npc_SetSpecialAction("oid=4251373", 'summon', 0, 0);
                                                                                                  cm.npc_SetForceMove("oid=4251373", -1, 320, 100);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#我……我看见那些绑架犯了！", 37, 9400592, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b绑架犯？", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#对！我看得很清楚。我知道我的话不太可靠，嗝……但你要相信我。我看……看见了！", 37, 9400592, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我的女儿，我们村里人，估计还有你要找的那个小孙女，都是被那帮家伙拐走的！", 37, 9400592, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#b你跟我详细说说！", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_ChangeController(9400588, "oid=4251422", 700, 320, 10, 650, 750, 1, true, false);
                                                                                                            cm.npc_SetSpecialAction("oid=4251422", "summon", 0, 0);
                                                                                                            cm.forceStartQuest(64161, '');
                                                                                                            cm.sendNormalTalk_Bottom("#face0#一天下来挺累的，你别浪费精力听他瞎扯。", 37, 9400587, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#不过是个沉浸悲痛的酒鬼在胡说八道罢了……", 37, 9400587, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#我说的都是事实！我现在非常清醒，压根儿没喝酒！相信我！", 37, 9400592, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=4251373", -1, 210, 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你一身酒味，就像泡在酒坛子里似的，说这种话谁信？", 37, 9400587, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……我……我……可恶！从一开始就没人相信我的话！", 37, 9400592, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#现在倒怪起酒来了？！……嗝……", 37, 9400592, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=4251373", 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……你清醒点。", 37, 9400587, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#唉！算啦……反正我什么都没有了……", 37, 9400592, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#b不，阿尔西，跟我说说你看见的情景。", 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……不说了……嗝……就算说了，我的女儿，我的妻子……也不会回来……我已经……尽力了……", 37, 9400592, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.forceCompleteQuest(64038);
                                                                                                                                        cm.forceStartQuest(64039, '');
                                                                                                                                        cm.playerMessage(-1, "去收集关于绑架犯的信息。");
                                                                                                                                        cm.npc_SetForceMove("oid=4251197", -1, 500, 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_SetForceMove("oid=4251422", -1, 410, 100);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("真是的……爸爸你怎么这样？", 37, 9400588, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("你根本不考虑别人的情绪或心情！", 37, 9400588, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_setForceFlip("oid=4251373", -1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetForceMove("oid=4251373", -1, 500, 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom('唉！', 37, 9400588, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("那个大叔，还有我爸爸，都不让人好过！这些大人真是……", 37, 9400588, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#b村长为什么把阿尔西说看见绑架犯的事当成醉酒胡说？", 57, 0, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("因为他净说些离谱的话，当然没人信啦。再说他总是在喝醉酒的情况下说的，谁会相信……", 37, 9400588, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#b你知道具体情况吗？", 57, 0, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("唔，基本每次说的都差不多。数十名从头到脚披着像死亡谷里的冰石头一样坚硬的雪白盔甲的人，搭乘停在森林里的巨大飞碟消失了！", 37, 9400588, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b这有可能的啊？", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("我自打出生以来，一次都没出过阿布鲁……不光是我，爸爸，阿尔西大叔，还有大部分村里人都一样。", 37, 9400588, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("当然！我有听说过其他地区有那种打扮的人！可是……他们没道理突然出现在这种乡下地方啊？", 37, 9400588, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("而且那么多的人，那么大个飞行物，却只有阿尔西大叔看见了，这说不过去……", 37, 9400588, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("大人们都说，阿尔西大叔只是深陷没能救回女儿和妻子的负罪感，才整天喝酒，编造些无中生有的事。", 37, 9400588, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("臆想出自己救不了她们的情景。", 37, 9400588, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b……原来如此。", 57, 0, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("那大叔肯定又是去喝酒了。", 37, 9400588, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b你怎么知道？", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("我怎么知道 ？因为他经常这样啊！不用看都知道。", 37, 9400588, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("要是努力一把……尝试改变该多好……可惜他总是无法战胜自己，被过去的事牵着鼻子走。", 37, 9400588, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("阿尔西大叔是这样……爸爸也是……", 37, 9400588, false, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#郁兰……", 37, 9400580, false, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("哎呀，现在不是说这些的时候。勇士！明天还要赶路，早点睡吧！", 37, 9400588, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_setForceFlip("oid=4251422", 1);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom('艾丽卡姐姐晚安！', 37, 9400588, false, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#也祝你做个好梦。", 37, 9400580, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.npc_SetForceMove("oid=4251422", 1, 500, 100);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#尝试改变的努力……是啊，我都忘记了改变需要付出很多努力。", 37, 9400580, false, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#郁兰为了开开心心地面对其他人，做了多少努力呢。我原以为她只是个单纯的青春期少女……没想到她比谁都更成熟，心思深沉。", 37, 9400580, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b……但她毕竟还是个孩子。我不希望再让她难过了。", 57, 0, true, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我们要让她幸福起来……一定。", 37, 9400580, true, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b一定……", 57, 0, true, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那就得早点休息哦！", 37, 9400580, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#晚安，#h0#。", 37, 9400580, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                cm.updateInfoQuest(64038, "chk=1;NpcSpeech=94005831/94005912/94005803;dir01=1");
                                                                                                                                                                                                                                cm.warp(867200852, 0, true);
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4250604");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4250604");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4250605");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4250605");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251197");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251197");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251373");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251373");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251422");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=4251422");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;