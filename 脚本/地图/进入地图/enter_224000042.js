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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 325);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074127, "oid=1941498", 180, 288, 118, 130, 230, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=1941498", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=1941499", 4, 288, 115, -46, 54, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=1941499", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("假发也完成了呢，\r\n那鬼的装扮已经全都穿上了吗？", 37, 2074127, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ChangeEquipment([1052857]);
            cm.inGameDirectionEvent_ChangeEquipment([1004341]);
            cm.inGameDirectionEvent_ChangeEquipment([1302132]);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("来，怎么样？", 37, 2074127, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哇，超帅的呢？不愧是山神，果然是无所不能啊。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b#h0##k，怎么样？能得到一套新衣服当礼物，很开心吧？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('…………', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那我们就等着樵夫找上门来吧……？\r\n嗯……在哪儿好呢……那边！去树后面。", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1941499", -1, 100, 100);
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=1941499");
                              cm.npc_LeaveField("oid=1941498");
                              cm.inGameDirectionEvent_SetHideEffect(1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(2074128, "oid=1941525", 69, 280, 117, 19, 119, 0, false, 500, false);
                                    cm.npc_SetSpecialAction("oid=1941525", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("哎……今天那个小孩子也不在。\r\n不过多亏于此，我倒是有个不错的想法。", 37, 2074128, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这个方法应该能赚到更多的钱。\r\n来，这是迄今为止我所攒到的所有的钱……我全都带过来了。", 37, 2074128, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(2074142, "oid=1941531", 75, 280, 117, 25, 125, 0, false, 500, false);
                                          cm.npc_SetSpecialAction("oid=1941531", 'summon', 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("来，现在就真的要挣笔大钱咯？\r\n在哪儿了呢，山神！！！", 37, 2074128, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("声音太小了吗？\r\n嗯，嗯，来！！！哎哟喂啊！山神！我的钱掉了，\r\n稍微有点沉，我该好好接着的！", 37, 2074128, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                      cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                        cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          cm.effect_NormalSpeechBalloon(".....?", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("发生什么事情了？\r\n搞什么？他终究还是逃跑了吗？真是的！\r\n我说！山神！", 37, 2074128, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(2074100, "oid=1941545", -197, 135, 85, -247, -147, 0, true, 500, false);
                                                              cm.npc_SetSpecialAction("oid=1941545", 'summon', 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#就是现在，\r\n来，出去吧！", 37, 2074100, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -148, 256);
                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("啊，什么啊……\r\n……", 37, 2074128, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=1941525", -1);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1941525"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.sendNormalTalk_Bottom("…………", 37, 2074128, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("额啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！\r\n鬼，是鬼啊啊啊啊啊啊啊啊啊啊啊！", 37, 2074128, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哎……这家伙难不成把火车头给吞下去了吗。", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=1941531");
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/8", 0, 500, 0, 0, 9, 4, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("哎哟喂，鬼大人，是我做错了！\r\n饶了我吧，我还不想死。", 37, 2074128, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.askMenu_Bottom("#face2#干吗呢？赶紧说点什么啊。\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#混账东西！我来就是要抓你走的！#l\r\n#g#L1#咦嘿嘿嘿！我是鬼！#l", 133, 2074100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        if (e == 0) {
                                                                                          cm.sendNormalTalk_Bottom("混账东西！我来就是要抓你走的！", 57, 0, false, true);
                                                                                        } else {
                                                                                          cm.sendNormalTalk_Bottom("咦嘿嘿嘿！我是鬼！", 57, 0, false, true);
                                                                                        }
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("哎哟喂啊！鬼大人，我真的是犯了死罪。\r\n求您了，我现在还不能死。", 37, 2074128, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('…………', 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0##b#h0##k？哎哟喂，你怎么跟个哑巴似的！", 37, 2074100, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#这样可不行……我来发出声音，你只要做个嘴型就行。", 37, 2074100, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("哎哟喂啊……求您了……鬼大人。", 37, 2074128, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#咦嘿嘿，你实在是太过贪心，刚好适合让我带走！\r\n我怎么就不能把你带走呢？你这么贪心！", 37, 2074100, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我，真的还不能死。\r\n我要是死了，谁来伺候我娘啊？\r\n我以后会放下贪心，老老实实生活下去的，求您了……", 37, 2074128, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，贪心是那么容易就放下的吗！\r\n你叫我怎么信你？\r\n好吧，你要是能把那边那个钱袋子给扔了，我就稍微相信你一次。", 37, 2074100, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("那，那个！那可是迄今为止我攒到的所有财产……", 37, 2074128, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#咦嘿嘿！看来你还是没法放下贪心啊。\r\n这可不行，你得和我一起走了！", 37, 2074100, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom('……', 37, 2074128, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0##b(哎哟？好奇怪啊)#k\r\n怎么？你为什么这样！还不赶紧把那个包袱放下！", 37, 2074100, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("那个，我去地狱。", 37, 2074128, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你，你，你说什么？", 37, 2074100, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("不过……在去之前我有一个请求。\r\n我能不能，把那笔钱先给我娘再走？", 37, 2074128, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哼，这，这是什么意思！\r\n我是不会答应你这种心愿的……", 37, 2074100, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("求求您了，您大可以把我带走……\r\n我必须有钱，才能治好娘的病。\r\n虽然我没能给她买房子，也没让她看到我娶媳妇的样子。\r\n但至少我想要……帮她把病治好。", 37, 2074128, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#…………", 37, 2074100, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("求您了，拜托……\r\n能不能让我最后看我娘一眼？\r\n娘这辈子一直在为我牺牲……\r\n我大可以没有了一切，所以求您……", 37, 2074128, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0##b(小声呢喃)#k\r\n……怎，怎么办呢？这，这……", 37, 2074100, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##b(小声呢喃)#k\r\n……哦？樵夫的身上有光……？", 37, 2074100, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 200, 0, 0, 0, 0, 0);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('back2', "Map/Effect2.img/downtown2015/illust/1", 0, 300, 0, 0, 10, 4, 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/13", 0, 1000, 0, 0, 11, 4, 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#宝，宝玉？赶紧拾起来！", 37, 2074100, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#g(获得了贪婪宝玉！)#k", 57, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("……呜呜……您刚刚说什么？", 37, 2074128, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯，嗯……没什么。\r\n嗯……额，该怎么收尾才好呢？", 37, 2074100, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("你刚刚，是说#g花顺#k生病了吗？", 37, 2074127, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1941525"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1941545"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                    cm.npc_ChangeController(2074127, "oid=1941643", 180, 288, 118, 130, 230, 1, false, 500, false);
                                                                                                                                                    cm.npc_SetSpecialAction("oid=1941643", "summon", 0, 0);
                                                                                                                                                    cm.npc_setForceFlip("oid=1941525", 1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("山神？是，#g花顺#k，\r\n你是怎么知道我#g娘的姓名#k的……？", 37, 2074128, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你只要回答我的问题就好，\r\n她病得很重吗？到底是从什么时候开始的？", 37, 2074127, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("……已经病了好久了。\r\n最近这些日子……已经卧床不起了。", 37, 2074128, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("在我离开俗世之前，也未见她有半分这样的迹象啊……\r\n你怎么不早说呢？为什么！", 37, 2074127, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("那，那个……娘让我保密……\r\n……既然你们认识，那有没有什么方法呢？", 37, 2074128, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("真是个傻瓜！你先赶紧告诉我症状！\r\n这样我才能制作药啊！", 37, 2074127, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("什么？是，那，那个吧……", 37, 2074128, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("来，有这里这些药草，应该就能好起来了。\r\n虽然不能完全治愈，但至少要比现在好很多。\r\n往后就得好好调理了。", 37, 2074127, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("真，真的吗？\r\n……真的，我这样的人真的能收下这些吗？", 37, 2074128, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("我对你娘有所亏欠，\r\n我要是早知道，绝对不会放任事情发展到现如今这个地步的。\r\n真是个傻瓜！和你娘一样固执己见！", 37, 2074127, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("对不起……", 37, 2074128, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，嗯……那个？", 37, 2074100, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_setForceFlip("oid=1941525", -1);
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("嗯？啊啊！鬼大人……\r\n真的，真的要麻烦您了。\r\n在我去地府之前，只要将这药交给我娘……", 37, 2074128, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074100, cm.getPlayer().getId());
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#不，算了，\r\n赶紧把药拿去给你娘吧。", 37, 2074100, false, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("什么？您的意思是……那我……", 37, 2074128, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看样子他不仅放下了钱，也放下了贪心。\r\n地狱里目前还没有你这种家伙的位置！赶紧给我滚！", 37, 2074100, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("什么？是，是，是！谢谢！\r\n哎哟喂啊，鬼大人！谢谢！", 37, 2074128, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom('喂！', 37, 2074127, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.npc_setForceFlip("oid=1941525", 1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=1941525"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_ChangeController(2074142, "oid=1941708", 125, 280, 117, 75, 175, 0, false, 500, false);
                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=1941708", 'summon', 0, 0);
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("你有东西落下了！", 37, 2074127, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1941525"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("哎哟喂，山神大人，我现在不需要那些了。\r\n我可收到了比任何东西都令人感激的礼物呢。", 37, 2074128, false, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("我什么时候让你用了？\r\n这笔钱拿去让你娘余生过上好日子。\r\n花顺绝对有这个资格……", 37, 2074127, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("可……我真的，可以这么做吗？", 37, 2074128, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("赶紧的，你娘的病情就在这一刻还在恶化呢吧？\r\n有了这笔钱，就能够好好调理身体了。", 37, 2074127, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("我实在是没脸见您了，\r\n真的太感谢了……", 37, 2074128, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=1941525", -1);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=1941708");
                                                                                                                                                                                                                    cm.npc_ChangeController(2074142, "oid=1941715", 50, 280, 117, 0, 100, 0, false, 500, false);
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=1941715", "summon", 0, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074128, cm.getPlayer().getId());
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=1941525", 1);
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=1941715");
                                                                                                                                                                                                                      cm.npc_ChangeController(2074142, "oid=1941719", 75, 280, 117, 25, 125, 0, false, 500, false);
                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=1941719", 'summon', 0, 0);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("那个，山神。\r\n既然您和我娘是朋友，大可以亲自过来的。\r\n我会一直等着您的。", 37, 2074128, false, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("朋友……朋友啊……\r\n那个，不要跟花顺提起我的事情。", 37, 2074127, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("但是，", 37, 2074128, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("这就是个老人的请求，\r\n我，就只有这点能耐了。", 37, 2074127, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("……是，我知道了。\r\n山神，鬼大人，真的……真的太谢谢了。", 37, 2074128, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=1941525", -1);
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=1941719");
                                                                                                                                                                                                                                  cm.npc_ChangeController(2074142, "oid=1941726", 50, 280, 117, 0, 100, 0, false, 500, false);
                                                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=1941726", "summon", 0, 0);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=1941525");
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=1941726");
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哎……总算是顺利解决了吧，\r\n现在可以脱下这身鬼衣服了。", 37, 2074100, false, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.gainExp(284119);
                                                                                                                                                                                                                                        cm.updateInfoQuest(30434, "gExpCheck=1");
                                                                                                                                                                                                                                        cm.forceStartQuest(30434, '');
                                                                                                                                                                                                                                        cm.forceCompleteQuest(30434);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                                                                                                                                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                                                        cm.warp(224000102, 3, true);
                                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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