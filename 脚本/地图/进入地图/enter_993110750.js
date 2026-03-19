var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = cm.getJob();
  var O = "action" + Math.floor(V / 100);
  eval(O)(f, E, e);
}
function action23(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 350, 180);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
        cm.npc_ChangeController(3004065, "oid=2254057", 483, 180, 1, 433, 533, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2254057", "summon", 0, 0);
        cm.setSessionValue("blackME_a", "2254057");
        cm.npc_ChangeController(3004062, "oid=2254058", 553, 180, 1, 503, 603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2254058", 'summon', 0, 0);
        cm.setSessionValue("blackME_l", '2254058');
        cm.npc_ChangeController(3004060, "oid=2254059", -299, 180, 2, -349, -249, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2254059", 'summon', 0, 0);
        cm.setSessionValue('blackME_e', "2254059");
        cm.npc_ChangeController(3004064, "oid=2254060", 430, 180, 1, 380, 480, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2254060", 'summon', 0, 0);
        cm.setSessionValue('blackME_w', "2254060");
        cm.npc_ChangeController(3004061, "oid=2254061", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2254061", "summon", 0, 0);
        cm.setSessionValue("blackME_d", "2254061");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我还是头一次参加这么热闹的宴会！", 36, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 36, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……我也不想在那种地方输给战神嘛……", 36, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#诶？怎么可能？除了我之外，其他人应该不会来这里……", 36, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#大家……大家都在这儿干什么呢？", 36, 1540805, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你们不都是有事要忙就回去了吗？！", 36, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#呀，你现在的表情真的超好笑。", 36, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那个……不知怎么就……", 56, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 36, 1540804, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.npc_ChangeController(3004063, "oid=2254166", -156, 172, 3, -206, -106, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2254166", "summon", 0, 0);
                                                      cm.setSessionValue('blackME_p', "2254166");
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 36, 1540803, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2254166", 1, 50, 100);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位。", 36, 1540803, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿摆了几百年的红酒！", 56, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇，这么说加上幻影，大家就到齐了呢！", 36, 1540805, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呵……哈哈。", 36, 1540803, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 56, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('谁能想到……', 36, 1540803, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然来到这样的穷乡僻壤，在破烂不堪的屋子里再度聚首。", 36, 1540803, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 36, 1540804, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 36, 1540803, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2254166", 1, 10, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 36, 1540802, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face5#……', 36, 1540803, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 56, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("坐在这里，应该能看到屋顶那片美妙的星光。", 56, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.Npc_Fadeout("oid=2254059", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2254058", 0, 10);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.Npc_Fadeout("oid=2254166", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2254061", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2254057", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2254060", 0, 10);
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -128, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
                                                                                                        cm.npc_ChangeController(3004065, "oid=2254304", 0, 250, 2, -50, 50, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254304", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_a", "2254304");
                                                                                                        cm.npc_ChangeController(3004062, "oid=2254305", 50, 250, 2, 0, 100, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254305", 'summon', 0, 0);
                                                                                                        cm.setSessionValue('blackME_l', "2254305");
                                                                                                        cm.npc_ChangeController(3004060, "oid=2254306", -200, 250, 2, -250, -150, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254306", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_e", "2254306");
                                                                                                        cm.npc_ChangeController(3004064, "oid=2254307", 160, 250, 1, 110, 210, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254307", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_w", "2254307");
                                                                                                        cm.npc_ChangeController(3004061, "oid=2254308", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254308", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_d", '2254308');
                                                                                                        cm.npc_ChangeController(3004063, "oid=2254309", -300, 250, 2, -350, -250, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2254309", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_p", "2254309");
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这种静谧也并不赖。", 36, 1540803, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 36, 1540805, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 36, 1540803, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那倒没有，这木屋原本就是不蔽风雨的样子。", 36, 1540802, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其实弗里德出人意料的懒，懒得可厉害了。", 36, 1540802, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 36, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们现在欣赏的这副光景，他当年应该也十分喜欢。", 36, 1540806, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#总之可以确认，他就是个怪咖嘛。", 36, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 36, 1540805, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 36, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 56, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 36, 1540805, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 56, 0, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 56, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#好吧，我们也该告辞了。", 36, 1540803, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#什么啊，你是在向谁告辞呢？", 36, 1540802, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#还有谁啊，当然是这屋子的主人咯。", 36, 1540803, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 36, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 36, 1540805, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我们可从来没有像一家人那样凝聚在一起过。", 36, 1540803, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#等结束了各自的旅行之后，自然就会见面的。", 36, 1540803, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 56, 0, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#没错~毕竟这就是所谓的英雄嘛。", 36, 1540802, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("下回再见了，弗里德。", 56, 0, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来你在下雪的时候该小心点了。", 36, 1540802, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=2254304", 0, 500);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#从前没能接受你夜里的邀请，今晚就权当是践约吧……", 36, 1540804, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("啊，说起来。", 36, 1540805, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得我们这支队伍还挺不错的吗？", 36, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#应该说……还可以吧。", 36, 1540804, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.Npc_Fadeout("oid=2254305", 0, 500);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#你就不会夸几句嘛。", 36, 1540803, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我们可是独一无二……", 36, 1540803, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#最棒的组合了啊。", 36, 1540803, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110751, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254057");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254057");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254058");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254058");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254059");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254059");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254060");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254060");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254061");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254061");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254166");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254166");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254304");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254304");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254305");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254305");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254306");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254306");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254307");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254307");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254308");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254308");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254309");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2254309");
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
function action24(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(3004066, "oid=2363005", 350, 180, 1, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363005", 'summon', 0, 0);
        cm.npc_ChangeController(3004065, "oid=2363006", 483, 180, 1, 433, 533, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363006", "summon", 0, 0);
        cm.npc_ChangeController(3004062, "oid=2363007", 553, 180, 1, 503, 603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363007", 'summon', 0, 0);
        cm.npc_ChangeController(3004060, "oid=2363008", -299, 180, 2, -349, -249, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363008", "summon", 0, 0);
        cm.npc_ChangeController(3004064, "oid=2363009", 430, 180, 1, 380, 480, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363009", 'summon', 0, 0);
        cm.npc_ChangeController(3004061, "oid=2363010", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363010", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我还是头一次参加这么热闹的宴会！", 36, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 36, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……我也不想在那种地方输给战神嘛……", 36, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#诶？怎么可能？除了我之外，其他人应该不会来这里……", 36, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#大家……大家都在这儿干什么呢？", 36, 1540805, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你们不都是有事要忙，所以回去了吗？！", 36, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#呀，你现在的表情真的超好笑。", 36, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#那个……不知怎么就……", 36, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 36, 1540804, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), -156, 172);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 3);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 56, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位。", 56, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿那瓶摆了几百年的葡萄酒！", 36, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇，这么说加上幻影，大家就到齐了呢！", 36, 1540805, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("呵……哈哈。", 56, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 36, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("谁能想到……", 56, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然会待在这么冷清的地方，真是有够寒酸的呢。", 56, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 36, 1540804, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 56, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 36, 1540802, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('……', 56, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2363005", -1, 50, 80);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 36, 1540801, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#坐在这里，应该能看到屋顶那片美妙的星光。", 36, 1540801, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.Npc_Fadeout("oid=2363008", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2363007", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2363005", 0, 10);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.Npc_Fadeout("oid=2363010", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2363006", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2363009", 0, 10);
                                                                                                        cm.npc_ChangeController(3004066, "oid=2363057", -128, 250, 2, -178, -78, 1, true, 1, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363057", "summon", 0, 0);
                                                                                                        cm.npc_ChangeController(3004065, "oid=2363058", 0, 250, 2, -50, 50, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363058", "summon", 0, 0);
                                                                                                        cm.npc_ChangeController(3004062, "oid=2363059", 50, 250, 2, 0, 100, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363059", 'summon', 0, 0);
                                                                                                        cm.npc_ChangeController(3004060, "oid=2363060", -200, 250, 2, -250, -150, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363060", "summon", 0, 0);
                                                                                                        cm.npc_ChangeController(3004064, "oid=2363061", 160, 250, 1, 110, 210, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363061", "summon", 0, 0);
                                                                                                        cm.npc_ChangeController(3004061, "oid=2363062", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2363062", 'summon', 0, 0);
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -300, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 3);
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这时的静谧也不错啊。", 56, 0, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 36, 1540805, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 56, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那倒没有，这木屋原本就是不蔽风雨的样子。", 36, 1540802, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其实弗里德出人意料的懒，懒得可厉害了。", 36, 1540802, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 36, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们现在欣赏的这副光景，他当年应该也十分喜欢。", 36, 1540806, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("总之可以确认，他就是个怪咖嘛。", 56, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 36, 1540805, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 36, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 36, 1540801, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 36, 1540805, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 36, 1540801, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 36, 1540801, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("好吧，也该告辞了。", 56, 0, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#什么啊，你是要向谁告辞呢？", 36, 1540802, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("还有谁啊，当然是这屋子的主人咯。", 56, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 56, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 36, 1540805, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("我们可从来没有像一家人那样凝聚在一起过。", 56, 0, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("等结束了各自的旅行之后，自然就会见面的。", 56, 0, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 36, 1540801, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#没错~毕竟这就是所谓的英雄嘛。", 36, 1540802, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#下回再见了，弗里德。", 36, 1540801, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.Npc_Fadeout("oid=2363057", 0, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来你在下雪的时候该小心点了。", 36, 1540802, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=2363058", 0, 500);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#从前没能接受你夜里的邀请，今晚就权当是践约吧……", 36, 1540804, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom('啊，说起来。', 36, 1540805, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得我们这支队伍还挺不错的吗？", 36, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#应该说……还可以吧。", 36, 1540804, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.Npc_Fadeout("oid=2363059", 0, 500);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("你就不会夸几句嘛。", 56, 0, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('我们可是独一无二……', 56, 0, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("最棒的组合了啊。", 56, 0, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110752, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363005");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363005");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363006");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363006");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363007");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363007");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363008");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363008");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363009");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363009");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363010");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363010");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363057");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363057");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363058");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363058");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363059");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363059");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363060");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363060");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363061");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363061");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363062");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2363062");
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
function action22(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(3004066, "oid=2196138", 350, 180, 1, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196138", "summon", 0, 0);
        cm.setSessionValue("blackME_m", "2196138");
        cm.npc_ChangeController(3004065, "oid=2196139", 483, 180, 1, 433, 533, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196139", "summon", 0, 0);
        cm.setSessionValue("blackME_a", "2196139");
        cm.npc_ChangeController(3004062, "oid=2196140", 553, 180, 1, 503, 603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196140", "summon", 0, 0);
        cm.setSessionValue("blackME_l", "2196140");
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -299, 180);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 3);
        cm.npc_ChangeController(3004064, "oid=2196141", 430, 180, 1, 380, 480, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196141", "summon", 0, 0);
        cm.setSessionValue("blackME_w", "2196141");
        cm.npc_ChangeController(3004061, "oid=2196142", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196142", 'summon', 0, 0);
        cm.setSessionValue("blackME_d", '2196142');
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我还是头一次参加这么热闹的宴会！", 56, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 56, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嘿嘿……我也不想在那种地方输给战神嘛……", 56, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("诶？怎么可能？除了我之外，其他人应该不会来这里……", 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("大家……大家都在这儿干什么呢？", 56, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你们不都是有事要忙就回去了吗？！", 56, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#呀，你现在的表情真的超好笑。", 36, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#那个……不知怎么就……", 36, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 36, 1540804, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.npc_ChangeController(3004063, "oid=2196150", -156, 172, 3, -206, -106, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2196150", "summon", 0, 0);
                                                      cm.setSessionValue("blackME_p", "2196150");
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 36, 1540803, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2196150", 1, 50, 100);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位。", 36, 1540803, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿摆了几百年的红酒！", 36, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("哇，这么说加上幻影，大家就到齐了呢！", 56, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呵……哈哈。", 36, 1540803, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 36, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("谁能想到……", 36, 1540803, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然来到这样的穷乡僻壤，在破烂不堪的屋子里再度聚首。", 36, 1540803, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 36, 1540804, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 36, 1540803, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2196150", 1, 10, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 36, 1540802, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face5#……', 36, 1540803, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2196138", -1, 50, 80);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 36, 1540801, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#坐在这里，应该能看到屋顶那片美妙的星光。", 36, 1540801, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.Npc_Fadeout("oid=2196140", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2196138", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2196150", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2196142", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2196139", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2196141", 0, 10);
                                                                                                        cm.npc_ChangeController(3004066, "oid=2196397", -128, 250, 2, -178, -78, 1, true, 1, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196397", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_m", '2196397');
                                                                                                        cm.npc_ChangeController(3004065, "oid=2196398", 0, 250, 2, -50, 50, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196398", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_a", "2196398");
                                                                                                        cm.npc_ChangeController(3004062, "oid=2196399", 50, 250, 2, 0, 100, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196399", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_l", "2196399");
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 3);
                                                                                                        cm.npc_ChangeController(3004064, "oid=2196400", 160, 250, 1, 110, 210, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196400", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_w', "2196400");
                                                                                                        cm.npc_ChangeController(3004061, "oid=2196401", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196401", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_d', '2196401');
                                                                                                        cm.npc_ChangeController(3004063, "oid=2196402", -300, 250, 2, -350, -250, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2196402", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_p", "2196402");
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这种静谧也并不赖。", 36, 1540803, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 56, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 36, 1540803, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那倒没有，这木屋原本就是不蔽风雨的样子。", 36, 1540802, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其实弗里德出人意料的懒，懒得可厉害了。", 36, 1540802, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 36, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们现在欣赏的这副光景，他当年应该也十分喜欢。", 36, 1540806, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#总之可以确认，他就是个怪咖嘛。", 36, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 56, 0, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 56, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 36, 1540801, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 56, 0, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 36, 1540801, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 36, 1540801, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#好吧，我们也该告辞了。", 36, 1540803, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#什么啊，你是在向谁告辞呢？", 36, 1540802, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#还有谁啊，当然是这屋子的主人咯。", 36, 1540803, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 36, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 56, 0, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我们可从来没有像一家人那样凝聚在一起过。", 36, 1540803, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#等结束了各自的旅行之后，自然就会见面的。", 36, 1540803, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 36, 1540801, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#没错~毕竟这就是所谓的英雄嘛。", 36, 1540802, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#下回再见了，弗里德。", 36, 1540801, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.Npc_Fadeout("oid=2196397", 0, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来你在下雪的时候该小心点了。", 36, 1540802, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=2196398", 0, 500);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#从前没能接受你夜里的邀请，今晚就权当是践约吧……", 36, 1540804, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("啊，说起来。", 56, 0, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("你不觉得我们这支队伍还挺不错的吗？", 56, 0, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#应该说……还可以吧。", 36, 1540804, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.Npc_Fadeout("oid=2196399", 0, 500);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#你就不会夸几句嘛。", 36, 1540803, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我们可是独一无二……", 36, 1540803, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#最棒的组合了啊。", 36, 1540803, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110754, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196138");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196138");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196139");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196139");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196140");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196140");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196141");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196141");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196142");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196142");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196150");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196150");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196397");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196397");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196398");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196398");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196399");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196399");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196400");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196400");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196401");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196401");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196402");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2196402");
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
function action25(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(3004066, "oid=2362574", 350, 180, 1, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2362574", "summon", 0, 0);
        cm.setSessionValue("blackME_m", "2362574");
        cm.npc_ChangeController(3004065, "oid=2362575", 483, 180, 1, 433, 533, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2362575", 'summon', 0, 0);
        cm.setSessionValue('blackME_a', "2362575");
        cm.npc_ChangeController(3004062, "oid=2362576", 553, 180, 1, 503, 603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2362576", 'summon', 0, 0);
        cm.setSessionValue("blackME_l", "2362576");
        cm.npc_ChangeController(3004060, "oid=2362577", -299, 180, 2, -349, -249, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2362577", 'summon', 0, 0);
        cm.setSessionValue("blackME_e", "2362577");
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 430, 180);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
        cm.npc_ChangeController(3004061, "oid=2362578", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2362578", 'summon', 0, 0);
        cm.setSessionValue("blackME_d", "2362578");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我还是头一次参加这么热闹的宴会！", 36, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 36, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……我也不想在那种地方输给战神嘛……", 36, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#诶？怎么可能？除了我之外，其他人应该不会来这里……", 36, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#大家……大家都在这儿干什么呢？", 36, 1540805, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你们不都是有事要忙就回去了吗？！", 36, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#呀，你现在的表情真的超好笑。", 36, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#那个……不知怎么就……", 36, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 36, 1540804, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.npc_ChangeController(3004063, "oid=2362670", -156, 172, 3, -206, -106, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2362670", 'summon', 0, 0);
                                                      cm.setSessionValue("blackME_p", '2362670');
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 36, 1540803, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2362670", 1, 50, 100);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位。", 36, 1540803, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿摆了几百年的红酒！", 36, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇，这么说加上幻影，大家就到齐了呢！", 36, 1540805, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呵……哈哈。", 36, 1540803, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 36, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("谁能想到……", 36, 1540803, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然来到这样的穷乡僻壤，在破烂不堪的屋子里再度聚首。", 36, 1540803, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 36, 1540804, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 36, 1540803, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2362670", 1, 10, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 36, 1540802, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face5#……', 36, 1540803, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2362574", -1, 50, 80);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 36, 1540801, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#坐在这里，应该能看到屋顶那片美妙的星光。", 36, 1540801, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.Npc_Fadeout("oid=2362577", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2362576", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2362574", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2362670", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2362578", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2362575", 0, 10);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.npc_ChangeController(3004066, "oid=2362727", -128, 250, 2, -178, -78, 1, true, 1, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362727", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_m', "2362727");
                                                                                                        cm.npc_ChangeController(3004065, "oid=2362728", 0, 250, 2, -50, 50, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362728", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_a", '2362728');
                                                                                                        cm.npc_ChangeController(3004062, "oid=2362729", 50, 250, 2, 0, 100, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362729", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_l", "2362729");
                                                                                                        cm.npc_ChangeController(3004060, "oid=2362730", -200, 250, 2, -250, -150, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362730", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_e", "2362730");
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 160, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
                                                                                                        cm.npc_ChangeController(3004061, "oid=2362731", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362731", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_d", "2362731");
                                                                                                        cm.npc_ChangeController(3004063, "oid=2362732", -300, 250, 2, -350, -250, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2362732", 'summon', 0, 0);
                                                                                                        cm.setSessionValue("blackME_p", '2362732');
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这种静谧也并不赖。", 36, 1540803, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 36, 1540805, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 36, 1540803, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那倒没有，这木屋原本就是不蔽风雨的样子。", 36, 1540802, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其实弗里德出人意料的懒，懒得可厉害了。", 36, 1540802, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 56, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我们现在欣赏的这副光景，他当年应该也十分喜欢。", 56, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#总之可以确认，他就是个怪咖嘛。", 36, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 36, 1540805, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 36, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 36, 1540801, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 36, 1540805, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 36, 1540801, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 36, 1540801, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#好吧，我们也该告辞了。", 36, 1540803, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#什么啊，你是在向谁告辞呢？", 36, 1540802, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#还有谁啊，当然是这屋子的主人咯。", 36, 1540803, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 36, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 36, 1540805, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我们可从来没有像一家人那样凝聚在一起过。", 36, 1540803, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#等结束了各自的旅行之后，自然就会见面的。", 36, 1540803, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 36, 1540801, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#没错~毕竟这就是所谓的英雄嘛。", 36, 1540802, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#下回再见了，弗里德。", 36, 1540801, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.Npc_Fadeout("oid=2362727", 0, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来你在下雪的时候该小心点了。", 36, 1540802, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=2362728", 0, 500);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#从前没能接受你夜里的邀请，今晚就权当是践约吧……", 36, 1540804, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("啊，说起来。", 36, 1540805, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得我们这支队伍还挺不错的吗？", 36, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#应该说……还可以吧。", 36, 1540804, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.Npc_Fadeout("oid=2362729", 0, 500);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#你就不会夸几句嘛。", 36, 1540803, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我们可是独一无二……", 36, 1540803, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#最棒的组合了啊。", 36, 1540803, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110756, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362574");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362574");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362575");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362575");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362576");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362576");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362577");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362577");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362578");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362578");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362670");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362670");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362727");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362727");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362728");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362728");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362729");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362729");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362730");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362730");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362731");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362731");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362732");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2362732");
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
function action21(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(3004066, "oid=2670377", 350, 180, 1, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2670377", "summon", 0, 0);
        cm.setSessionValue('blackME_m', "2670377");
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 483, 180);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
        cm.npc_ChangeController(3004062, "oid=2670378", 553, 180, 1, 503, 603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2670378", "summon", 0, 0);
        cm.setSessionValue('blackME_l', '2670378');
        cm.npc_ChangeController(3004060, "oid=2670379", -299, 180, 2, -349, -249, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2670379", "summon", 0, 0);
        cm.setSessionValue("blackME_e", '2670379');
        cm.npc_ChangeController(3004064, "oid=2670380", 430, 180, 1, 380, 480, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2670380", "summon", 0, 0);
        cm.setSessionValue("blackME_w", '2670380');
        cm.npc_ChangeController(3004061, "oid=2670381", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2670381", 'summon', 0, 0);
        cm.setSessionValue("blackME_d", '2670381');
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我还是头一次参加这么热闹的宴会！", 36, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 36, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……我也不想在那种地方输给战神嘛……", 36, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#诶？怎么可能？除了我之外，其他人应该不会来这里……", 36, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#大家……大家都在这儿干什么呢？", 36, 1540805, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你们不都是有事要忙就回去了吗？！", 36, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("呀，你现在的表情真的超好笑。", 56, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#那个……不知怎么就……", 36, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 36, 1540804, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound('Phantom/0', 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.npc_ChangeController(3004063, "oid=2670450", -156, 172, 3, -206, -106, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2670450", "summon", 0, 0);
                                                      cm.setSessionValue('blackME_p', "2670450");
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 36, 1540803, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2670450", 1, 50, 100);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位。", 36, 1540803, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿摆了几百年的红酒！", 36, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇，这么说加上幻影，大家就到齐了呢！", 36, 1540805, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呵……哈哈。", 36, 1540803, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 36, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('谁能想到……', 36, 1540803, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然来到这样的穷乡僻壤，在破烂不堪的屋子里再度聚首。", 36, 1540803, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 36, 1540804, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 36, 1540803, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2670450", 1, 10, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 56, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face5#……', 36, 1540803, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2670377", -1, 50, 80);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 36, 1540801, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#坐在这里，应该能看到屋顶那片美妙的星光。", 36, 1540801, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.Npc_Fadeout("oid=2670379", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2670378", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2670377", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2670450", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2670381", 0, 10);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.Npc_Fadeout("oid=2670380", 0, 10);
                                                                                                        cm.npc_ChangeController(3004066, "oid=2670492", -128, 250, 2, -178, -78, 1, true, 1, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670492", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_m', "2670492");
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
                                                                                                        cm.npc_ChangeController(3004062, "oid=2670493", 50, 250, 2, 0, 100, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670493", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_l", "2670493");
                                                                                                        cm.npc_ChangeController(3004060, "oid=2670494", -200, 250, 2, -250, -150, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670494", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_e", "2670494");
                                                                                                        cm.npc_ChangeController(3004064, "oid=2670495", 160, 250, 1, 110, 210, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670495", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_w', "2670495");
                                                                                                        cm.npc_ChangeController(3004061, "oid=2670496", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670496", 'summon', 0, 0);
                                                                                                        cm.setSessionValue('blackME_d', "2670496");
                                                                                                        cm.npc_ChangeController(3004063, "oid=2670497", -300, 250, 2, -350, -250, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2670497", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_p', "2670497");
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这种静谧也并不赖。", 36, 1540803, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 36, 1540805, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 36, 1540803, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("那倒没有，这木屋原本就是不蔽风雨的样子。", 56, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("其实弗里德出人意料的懒，懒得可厉害了。", 56, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 36, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们现在欣赏的这副光景，他当年应该也十分喜欢。", 36, 1540806, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#总之可以确认，他就是个怪咖嘛。", 36, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 36, 1540805, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 36, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 36, 1540801, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 36, 1540805, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 36, 1540801, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 36, 1540801, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#好吧，我们也该告辞了。", 36, 1540803, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("什么啊，你是在向谁告辞呢？", 56, 0, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#还有谁啊，当然是这屋子的主人咯。", 36, 1540803, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 36, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 36, 1540805, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我们可从来没有像一家人那样凝聚在一起过。", 36, 1540803, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#等结束了各自的旅行之后，自然就会见面的。", 36, 1540803, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 36, 1540801, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("没错~毕竟这就是所谓的英雄嘛。", 56, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#下回再见了，弗里德。", 36, 1540801, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.Npc_Fadeout("oid=2670492", 0, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("看来你在下雪的时候该小心点了。", 56, 0, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#从前没能接受你夜里的邀请，今晚就权当是践约吧……", 36, 1540804, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom('啊，说起来。', 36, 1540805, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得我们这支队伍还挺不错的吗？", 36, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#应该说……还可以吧。", 36, 1540804, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.Npc_Fadeout("oid=2670493", 0, 500);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#你就不会夸几句嘛。", 36, 1540803, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我们可是独一无二……", 36, 1540803, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#最棒的组合了啊。", 36, 1540803, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110758, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670377");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670377");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670378");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670378");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670379");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670379");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670380");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670380");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670381");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670381");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670450");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670450");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670492");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670492");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670493");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670493");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670494");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670494");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670495");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670495");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670496");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670496");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670497");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2670497");
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
function action27(f, E, e) {
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
      cm.forceCompleteQuest(39702);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, -138, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(3004066, "oid=2194251", 350, 180, 1, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2194251", "summon", 0, 0);
        cm.setSessionValue("blackME_m", '2194251');
        cm.npc_ChangeController(3004065, "oid=2194252", 483, 180, 1, 433, 533, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2194252", "summon", 0, 0);
        cm.setSessionValue("blackME_a", '2194252');
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 553, 180);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
        cm.npc_ChangeController(3004060, "oid=2194253", -299, 180, 2, -349, -249, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2194253", "summon", 0, 0);
        cm.setSessionValue("blackME_e", "2194253");
        cm.npc_ChangeController(3004064, "oid=2194254", 430, 180, 1, 380, 480, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2194254", "summon", 0, 0);
        cm.setSessionValue("blackME_w", '2194254');
        cm.npc_ChangeController(3004061, "oid=2194255", -396, 180, 2, -446, -346, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2194255", "summon", 0, 0);
        cm.setSessionValue("blackME_d", "2194255");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我还是头一次参加这么热闹的宴会！", 36, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人……撑死我了，\r\n好像干酪蛋糕吃太多了啊。", 36, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#米乐你刚刚把蛋糕整个直接吞掉好像是有点勉强……", 36, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#话是这么说，主人不也夹起旁边的那块肉整块塞进嘴里了嘛！", 36, 1540807, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……我也不想在那种地方输给战神嘛……", 36, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不过主人，这里好像有脚印哎？", 36, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#诶？怎么可能？除了我之外，其他人应该不会来这里……", 36, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45.img/Endless Journey", 0, 0);
                            cm.forceStartQuest(39703, '');
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Text(["#fn黑体##fs18#弗里德的老家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#大家……大家都在这儿干什么呢？", 36, 1540805, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 282, 190);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你们不都是有事要忙就回去了吗？！", 36, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#呀，你现在的表情真的超好笑。", 36, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#那个……不知怎么就……", 36, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看样子大家要忙的事情都一样啊。", 56, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -155, 185, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.npc_ChangeController(3004063, "oid=2194355", -156, 172, 3, -206, -106, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2194355", 'summon', 0, 0);
                                                      cm.setSessionValue("blackME_p", '2194355');
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("糟糕，难道我来得最迟吗？", 36, 1540803, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2194355", 1, 50, 100);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit3", 100);
                                                            cm.sendNormalTalk_Bottom("不过说到底，主角总是姗姗来迟的那一位……", 36, 1540803, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#幻影！架子摆得十足，结果还不是你第一个溜掉的！\r\n还说什么……要回水晶花园拿摆了几百年的红酒！", 36, 1540801, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇，这么说加上幻影，大家就到齐了呢！", 36, 1540805, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呵……哈哈。", 36, 1540803, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你一个人在那里笑什么呢？", 36, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('谁能想到……', 36, 1540803, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("谁能想到击退黑魔法师的英雄们居然来到这样的穷乡僻壤，在破烂不堪的屋子里再度聚首。", 36, 1540803, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("幻影，你脚下有只蜘蛛。", 56, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#哈，你当我是谁？怪盗幻影怎么可能被一句玩笑话骗到。", 36, 1540803, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2194355", 1, 10, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咦？你刚刚有没有听到什么东西被踩爆的声音啊？", 36, 1540802, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face5#……', 36, 1540803, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2194251", -1, 50, 80);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#来，难得我们几个齐聚一堂，不如先坐下来喝杯暖茶吧。", 36, 1540801, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#坐在这里，应该能看到屋顶那片美妙的星光。", 36, 1540801, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                  cm.forceCompleteQuest(39703);
                                                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 50);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/night", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm50.img/NewBeginningNotTheEnd", 0, 0);
                                                                                                        cm.Npc_Fadeout("oid=2194253", 0, 10);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                        cm.Npc_Fadeout("oid=2194251", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2194355", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2194255", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2194252", 0, 10);
                                                                                                        cm.Npc_Fadeout("oid=2194254", 0, 10);
                                                                                                        cm.npc_ChangeController(3004066, "oid=2194416", -128, 250, 2, -178, -78, 1, true, 1, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194416", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_m", "2194416");
                                                                                                        cm.npc_ChangeController(3004065, "oid=2194417", 0, 250, 2, -50, 50, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194417", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_a", "2194417");
                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 50, 250);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
                                                                                                        cm.npc_ChangeController(3004060, "oid=2194418", -200, 250, 2, -250, -150, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194418", 'summon', 0, 0);
                                                                                                        cm.setSessionValue('blackME_e', "2194418");
                                                                                                        cm.npc_ChangeController(3004064, "oid=2194419", 160, 250, 1, 110, 210, 1, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194419", "summon", 0, 0);
                                                                                                        cm.setSessionValue('blackME_w', "2194419");
                                                                                                        cm.npc_ChangeController(3004061, "oid=2194420", -349, 250, 2, -399, -299, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194420", "summon", 0, 0);
                                                                                                        cm.setSessionValue("blackME_d", '2194420');
                                                                                                        cm.npc_ChangeController(3004063, "oid=2194421", -300, 250, 2, -350, -250, 0, true, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2194421", 'summon', 0, 0);
                                                                                                        cm.setSessionValue("blackME_p", "2194421");
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 142, 130);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("虽说宴会的喧嚣我很喜欢，不过这种静谧也并不赖。", 36, 1540803, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_heros/0", 0, 3000, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                            cm.forceStartQuest(39702, '');
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗里德也曾经像我们一样在这里仰望星星吗？", 36, 1540805, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么会，那家伙还在的时候，这个家应该也是好端端的。", 36, 1540803, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那倒没有，这木屋原本就是不蔽风雨的样子。", 36, 1540802, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其实弗里德出人意料的懒，懒得可厉害了。", 36, 1540802, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("懒也未必，弗里德不过是寄情风雅而已。", 36, 1540806, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们现在欣赏的这副光景，他当年应该也十分喜欢。", 36, 1540806, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#总之可以确认，他就是个怪咖嘛。", 36, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我好像明白……弗里德为什么没有修好屋顶了。", 36, 1540805, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("沐浴在月光里……内心也变得很温暖。", 36, 1540805, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("就是谚语里说的物似主人形啦。", 36, 1540801, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("大家……都是怎么想的呢？", 36, 1540805, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("这个嘛……", 36, 1540801, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("大概……我们所有人想的都是同一回事吧。", 36, 1540801, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceCompleteQuest(39702);
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                              cm.forceStartQuest(39703, '');
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#好吧，我们也该告辞了。", 36, 1540803, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#什么啊，你是在向谁告辞呢？", 36, 1540802, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#还有谁啊，当然是这屋子的主人咯。", 36, 1540803, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("大摇大摆地进进出出，不打声招呼貌似有些失礼吧。", 36, 1540803, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我们又要这样不做任何约定，就各奔东西吗？", 36, 1540805, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#我们可从来没有像一家人那样凝聚在一起过。", 36, 1540803, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#等结束了各自的旅行之后，自然就会见面的。", 36, 1540803, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果有一天世界再度面临危机，我们自然而然就会聚到一起了吧？", 36, 1540801, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#没错~毕竟这就是所谓的英雄嘛。", 36, 1540802, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#下回再见了，弗里德。", 36, 1540801, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.Npc_Fadeout("oid=2194416", 0, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来你在下雪的时候该小心点了。", 36, 1540802, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=2194417", 0, 500);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("从前没能接受你夜里的邀请，今晚就权当是践约吧……", 56, 0, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("啊，说起来。", 36, 1540805, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得我们这支队伍还挺不错的吗？", 36, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("应该说……还可以吧。", 56, 0, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#你就不会夸几句嘛。", 36, 1540803, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我们可是独一无二……", 36, 1540803, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#最棒的组合了啊。", 36, 1540803, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.warp(993110759, 0, false);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194251");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194251");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194252");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194252");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194253");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194253");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194254");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194254");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194255");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194255");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194355");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194355");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194416");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194416");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194417");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194417");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194418");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194418");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194419");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194419");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194420");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194420");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194421");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=2194421");
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