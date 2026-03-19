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
      cm.npc_ChangeController(9400584, "oid=202335", 682, 40, 7, 632, 732, 0, true, false);
      cm.npc_ChangeController(9400583, "oid=202336", 630, 38, 7, 580, 680, 0, true, false);
      cm.npc_ChangeController(9400585, "oid=202337", 542, -138, 11, 492, 592, 1, true, false);
      cm.npc_ChangeController(9400585, 'oid=202338', 495, -130, 11, 445, 545, 1, true, false);
      cm.npc_ChangeController(9400596, 'oid=202339', 52, 8, 6, 2, 102, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1440, 3);
      cm.npc_ChangeController(9400598, "oid=2874261", 1720, 30, 8, 1670, 1770, 1, true, false);
      cm.npc_SetSpecialAction("oid=2874261", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=2874262", 770, 30, 8, 720, 820, 1, true, false);
      cm.npc_SetSpecialAction("oid=2874262", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=2874263", 1130, 30, 8, 1080, 1180, 0, true, false);
      cm.npc_SetSpecialAction("oid=2874263", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 1600, 60]);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#b托尔逊！', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 60);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2874261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2874261", -1, 100, 70);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯，勇士？你叫我了吗？难道需要我帮什么忙吗？！", 37, 9400598, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b嗯，托尔逊。我有事要问你。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("随便问吧！", 37, 9400598, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b你知道在森林中有个和孙女一起生活的老婆婆吗？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2874261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.sendNormalTalk_Bottom("嗯~~！啊！那个魔女孙女和老婆婆！", 37, 9400598, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b魔女？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是的！但你找那个老婆婆做什么？！", 37, 9400598, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b她是不是差不多5个月前来过这个村子？", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊……嗯……老婆婆……", 37, 9400598, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("啊……其实我不太清楚。大部分外乡人都是村长来招待的……", 37, 9400598, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2874261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.sendNormalTalk_Bottom("啊！这样吧！我去问问村长！", 37, 9400598, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2874261", 1);
                                              cm.npc_SetForceMove("oid=2874261", 1, 200, 90);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 220);
                                                  cm.sendNewEffects(17, [2000, 2000, 2000, 1300, 60]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=2874261");
                                                      cm.npc_LeaveField("oid=2874261");
                                                      cm.npc_SetForceMove("oid=2874263", 1, 70, 60);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我听到你们在谈关于莎娜安的事情啊，你打听到她的行踪了吗？", 37, 9400589, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b托尔逊说不知道。他去问古纳德村长了。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#原来如此，那个小伙子还挺勤快的。", 37, 9400589, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b啊，但是……托尔逊说那是魔女的孙女。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2874263", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈哈……", 37, 9400589, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=2874263", -1, 200, 70);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                        cm.sendNewEffects(17, [2000, 2000, 2000, 1000, 60]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#她只是和我们有些不同。你没必要在意。", 37, 9400589, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2874262", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=2874262", -1);
                                                                                cm.sendNormalTalk_Bottom("#b不同？", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#嗯……应该说是特别吧。不管是肤色还是身体能力，都有些特别。", 37, 9400589, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=2874262", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=2874262", 1, 280, 70);
                                                                                      cm.sendNewEffects(17, [2000, 2000, 2000, 1100, 60]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=2874263", 1);
                                                                                          cm.sendNormalTalk_Bottom("#face0##h0#，刚才我忘了把这个给你了", 37, 9400580, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/PL_MONAD1/1");
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=2874262", -1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#佩图尔大叔，你能再详细说下吗？", 37, 9400580, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#莎娜安和她的孙女……名字……布兰茜，没错，是布兰茜。", 37, 9400589, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#他们也曾是卡夫塔佩的居民。但是在我来到这个村子之前。", 37, 9400589, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b这个我还不知道呢。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#莎娜安从布兰茜小的时候就开始抚养她。一开始没什么问题，但布兰茜渐渐长大后，就开始发现自己和别人有些不同。", 37, 9400589, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是这也不是什么大问题。只是同龄人们也开始知道了布兰茜和自己不同，这才是问题。", 37, 9400589, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#青灰色的皮肤，比他人出色许多的跑步速度和弓箭水平……", 37, 9400589, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#虽然我没能亲眼目睹，但是我能想象出那时她受到的歧视。", 37, 9400589, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face4#青灰色皮肤……", 37, 9400580, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2874262"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#难道……", 37, 9400580, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#b她是魔族？", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#传说是那样的。混血魔族……所以莎娜安为了抚养自己的孙女，去了森林里生活。", 37, 9400589, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我知道的就是这些。那之后，莎娜安和她的孙女在森林里经历了多少困难……", 37, 9400589, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#……难道……", 37, 9400580, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_ChangeController(9400598, "oid=2874655", 1500, 30, 8, 1450, 1550, 1, true, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=2874655", 'summon', 0, 0);
                                                                                                                              cm.npc_ChangeController(9400597, "oid=2874656", 1550, 30, 8, 1500, 1600, 1, true, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=2874656", "summon", 0, 0);
                                                                                                                              cm.sendNewEffects(17, [2000, 2000, 2000, 1400, 60]);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=2874655", -1, 170, 100);
                                                                                                                                cm.npc_SetForceMove("oid=2874656", -1, 270, 60);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  cm.effect_NormalSpeechBalloon("勇士！勇士！", 0, 0, 0, 3000, 9400598, cm.getPlayer().getId());
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                    cm.npc_setForceFlip("oid=2874262", 1);
                                                                                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, 1200, 60]);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#咳！怎么了？你有什么想知道的？", 37, 9400597, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#b是的，那个-", 57, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#不，等下。不应该先说下获得情报的代价吗？", 37, 9400597, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom('#b什么？', 57, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#咳，刚才我听托尔逊说了，你帮他找来了小白雪鬼结晶？如果还有剩的，那就给我们一点吧。我们也可能会出现伤者啊？", 37, 9400597, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom('#b……你需要多少？', 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_setForceFlip("oid=2874656", 1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你刚才找了多少个？", 37, 9400597, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("啊……那个……差不多100个？", 37, 9400598, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#什么？！100个？！那就给我一半吧。", 37, 9400597, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=2874656", -1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#b……我再去找一下。请稍等。", 57, 0, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#不，这里就有。", 37, 9400580, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_setForceFlip("oid=2874262", -1);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_SetForceMove("oid=2874262", -1, 300, 200);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.npc_setForceFlip("oid=2874262", 1);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_SetForceMove("oid=2874262", 1, 290, 200);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom('#b那个……', 57, 0, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#你先听我说。小白雪鬼结晶的话，派我们骑士再去找就行。", 37, 9400580, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_setForceFlip("oid=2874262", 1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                                cm.effect_NormalSpeechBalloon('让我看看……', 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon('差不多应该是对的。', 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b好，现在请告诉我吧。你的情报可得值50个小白雪鬼结晶才行啊。", 57, 0, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哎呀~我俩之间干嘛这么斤斤计较啊？", 37, 9400597, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#咳咳，嗯……老婆婆，没错，那个老婆婆，想起来了……她也来过斯巴乐缇，还来过两次！", 37, 9400597, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b两次？", 57, 0, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#第一次是4个月？大概5个月前……她来找孙女，我们就说我们那没有外乡人，送走了她。", 37, 9400597, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("是的，没错。村长一般会追到入口。", 37, 9400598, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#啊啊啊！！！然后差不多是两个月前……就在暴走怪物出现前不久，她又来了。", 37, 9400597, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我们当然说了没有啊。", 37, 9400597, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#然后她就嘟囔着这里已经是最后一个地方了，孙女可能已经回去了什么的。", 37, 9400597, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b看来她最后……回到了小屋啊。", 57, 0, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#怎么样？这个情报值吗？", 37, 9400597, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b现在的小屋……", 57, 0, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#……如果还在小屋里的话，那就危险了。", 37, 9400580, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你为什么要找那个老婆婆？你认识她？", 37, 9400597, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b……没错，她写信给我，让我帮助阿布鲁。", 57, 0, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b我是因为她的信才来的这里，但是现在我还没能见到她。", 57, 0, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我们等于是多亏了莎娜安才能活下来的。", 37, 9400589, true, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#这……居然是这样？因为那个老婆婆……我们才能……活下来的？咳咳！", 37, 9400597, true, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#没错，如果不是那封信，我们的事情恐怕现在……都还传不到阿布鲁外面。", 37, 9400589, true, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#咳咳，是吗……？是啊……", 37, 9400597, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#所，所以说你要去小屋吗？把她请到这里来？", 37, 9400597, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你，应该不是真的想去吧？", 37, 9400589, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#现在森林里太危险了，而且也不知道她在不在……", 37, 9400589, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, 1150, 60]);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b没错，如果她还在危险的森林里……", 57, 0, false, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                          cm.effect_NormalSpeechBalloon('不！别无视我的话啊？', 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你真的……要去？去那个森林里？", 37, 9400580, false, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                              cm.effect_NormalSpeechBalloon("哎，就是因为这样，我才说不能相信外地人。", 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b没错，我要去看看。", 57, 0, false, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9400580, false, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.npc_setForceFlip("oid=2874656", 1);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("托尔逊！你别说废话了，哦？", 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2874656", 1, 300, 100);
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.npc_setForceFlip("oid=2874655", 1);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=2874655", 1, 300, 100);
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b没时间犹豫了。", 57, 0, false, true);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你还真是乱来啊。你知道小屋的位置吗？等一下。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=2874263", -1);
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=2874263", -1, 650, 200);
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b……", 57, 0, false, true);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                            cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 3000, 9400580, cm.getPlayer().getId());
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#……", 37, 9400580, false, true);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b艾丽卡，你在想什么呢，这么入神？", 57, 0, false, true);
                                                                                                                                                                                                                                                                                  cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 3000, 9400580, cm.getPlayer().getId());
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……啊？没，没什么。", 37, 9400580, false, true);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#，请小心安全。", 37, 9400580, true, true);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.npc_setForceFlip("oid=2874262", -1);
                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.npc_SetForceMove("oid=2874262", -1, 1500, 200);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 650);
                                                                                                                                                                                                                                                                                                cm.sendNewEffects(17, [2000, 2000, 2000, 550, 60]);
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=2874263", 1);
                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=2874263", 1, 100, 200);
                                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#来，拿着这个。", 37, 9400589, false, true);
                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b这个……", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                          cm.gainItem(2439030, 1);
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                            cm.playerMessage(-1, "确认佩图尔给的沉睡森林地图。");
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#莎娜安的小屋在沉睡森林里，死亡谷的另一边。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#死亡谷对于第一次去的人来说太危险了，你就绕着去吧。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#但是如果在森林里到了晚上，你干脆就进入峡谷里。那里是怪物都无法轻易进去的地方，你晚上可以在那里好好休息。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……总感觉似乎是因为我说了这些才让你去了危险的地方啊……", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b请别担心，佩图尔，我马上就回来了。", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#当然了，你去吧，希望沉睡森林的气息与你同在。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                                                                                                      cm.warp(867201100, 0, true);
                                                                                                                                                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                                      cm.forceCompleteQuest(64070);
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874262");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874262");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874263");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874263");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874655");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874655");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874656");
                                                                                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2874656");
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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