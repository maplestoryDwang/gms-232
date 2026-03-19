var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = cm.getJob();
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -170, -75);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.npc_ChangeController(3004326, "oid=2773236", 1211, -555, 8, 1161, 1261, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2773236", "summon", 0, 0);
        cm.npc_ChangeController(3004330, "oid=2773237", 1345, -554, 8, 1295, 1395, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2773237", "summon", 0, 0);
        cm.npc_ChangeController(3004323, "oid=2773238", -165, -97, 11, -215, -115, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2773238", 'summon', 0, 0);
        cm.npc_ChangeController(3004322, "oid=2773239", -106, -97, 11, -156, -56, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2773239", "summon", 0, 0);
        cm.npc_ChangeController(3004330, "oid=2773240", 0, -105, 12, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2773240", "summon", 0, 0);
        cm.Npc_Fadeout("oid=2773240", 0, 10);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("看那边！", 57, 0, false, true);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_PushScaleInfo(700, 0, 2000, 700, 1310, -568);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === O++) {
                  cm.fieldEffect_PlayBGM("Bgm26/DarkMage", 0, 0);
                  cm.sendNormalTalk_Bottom("#fs20##r白魔法师#k#n？！", 57, 0, false, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("历史中出现在特鲁埃博的明明是黑魔法师才对？", 57, 0, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face4#超越者可以超越时空对整个世界造成影响。", 37, 3004323, true, true);
                      cm.effect_Voice("Voice5.img/CH1/Lily/6", 128);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face4#你之前说过，真正的黑魔法师在消亡之前，会恢复成必亡者的形态？\r\n可能是受了那时候的影响。", 37, 3004323, true, true);
                        cm.effect_Voice("Voice5.img/CH1/Lily/7", 128);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face0#嘘，听他说。", 37, 3004322, true, true);
                          cm.effect_Voice("Voice5.img/CH1/Elwyn/3", 128);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face1#铲除阿卡伊勒的任务，就交给在莫拉斯重现的另一个我负责。", 37, 3003923, false, true);
                              cm.effect_Voice("Voice5.img/CH1/Heinze/13", 128);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("#face1#达成目的的过程只会漫长而复杂。", 37, 3003923, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Heinze/14", 128);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face1#虽然我依然走在由世间法则制定的道路上……", 37, 3003923, true, true);
                                  cm.effect_Voice("Voice5.img/CH1/Heinze/15", 128);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face1#但因其复杂性和不确定性……\r\n途中或许已悄悄埋下了些许脱离命运的线索。", 37, 3003923, true, true);
                                    cm.effect_Voice("Voice5.img/CH1/Heinze/16", 128);
                                  } else {
                                    if (status === O++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face2#复杂性和不确定性？", 37, 3004323, false, true);
                                        cm.effect_Voice("Voice5.img/CH1/Lily/8", 128);
                                      } else {
                                        if (status === O++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === O++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzTeleport", 100);
                                            cm.npc_SetSpecialAction("oid=2773236", "teleport", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === O++) {
                                              cm.userSetFieldFloating(993135005, 3, 3, 3);
                                              cm.npc_LeaveField("oid=2773236");
                                              cm.npc_LeaveField("oid=2773236");
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === O++) {
                                                cm.userSetFieldFloating(993135005, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("#face1#啊！", 37, 3004322, false, true);
                                                  cm.effect_Voice("Voice5.img/CH1/Elwyn/4", 128);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -114, -115);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.npc_LeaveField("oid=2773237");
                                                            cm.sendNormalTalk_Bottom("#face1#怎么办？我得去追老师……\r\n可有#r那家伙#k在，我没法打开传送口？", 37, 3004322, false, true);
                                                            cm.effect_Voice("Voice5.img/CH1/Elwyn/5", 128);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.sendNormalTalk_Bottom("#face2#呃……接触他，会很危险吧？？", 37, 3004323, true, true);
                                                              cm.effect_Voice("Voice5.img/CH1/Lily/9", 128);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.Npc_Fadeout("oid=2773240", 255, 10);
                                                                  cm.npc_SetSpecialAction("oid=2773240", "tel", 1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/will_teleport", 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2773238"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2773239"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.sendNormalTalk_Bottom('呃……', 57, 0, false, true);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#哈？这……怎么办？！", 37, 3004322, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH1/Elwyn/6", 128);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face4#我不是黑魔法师。\r\n所以，我们应该不会威胁到彼此的存在。", 37, 3003900, false, true);
                                                                            cm.effect_Voice("Voice5.img/CH1/White/1", 128);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#既、既然你没有敌意……请告诉我们。", 37, 3004323, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH1/Lily/10", 128);
                                                                            } else {
                                                                              if (status === O++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#你跟老师聊了什么？老师他去哪里了？老师他去哪儿了？？", 37, 3004323, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH1/Lily/11", 128);
                                                                              } else {
                                                                                if (status === O++) {
                                                                                  cm.sendNormalTalk_Bottom("#face4#他什么都没问。\r\n他一进入这里，就自行领悟了。", 37, 3003900, true, true);
                                                                                  cm.effect_Voice("Voice5.img/CH1/White/2", 128);
                                                                                } else {
                                                                                  if (status === O++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === O++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#他……领悟了什么？", 37, 3004323, false, true);
                                                                                      cm.effect_Voice("Voice5.img/CH1/Lily/12", 128);
                                                                                    } else {
                                                                                      if (status === O++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#超越者为什么而存在…… \r\n他领悟了这个问题的答案。", 37, 3003900, true, true);
                                                                                        cm.effect_Voice("Voice5.img/CH1/White/3", 128);
                                                                                      } else {
                                                                                        if (status === O++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === O++) {
                                                                                            cm.sendNormalTalk_Bottom("超越者……是为什么而存在的呢？", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === O++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === O++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm34.img/TheAurora", 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === O++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === O++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === O++) {
                                                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_01", '', '01'], [0, 1, 1, 100000, 0, 0, 0, 1]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === O++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#很久很久以前，在超越者出现之前，\r\n世界上曾经存在很多无法预测也不受管制的古代神。", 37, 3003900, false, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH1/White/4", 128);
                                                                                                      } else {
                                                                                                        if (status === O++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#祂们各有各的意图和目的，是#r独立的人格神#k，\r\n在某些情况下，甚至还会积极地插手世间的事务。", 37, 3003900, true, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH1/White/5", 128);
                                                                                                        } else {
                                                                                                          if (status === O++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#因此，混沌是不可避免的。", 37, 3003900, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH1/White/6", 128);
                                                                                                          } else {
                                                                                                            if (status === O++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#为了与之对抗，#r世界#k需要秩序和控制。", 37, 3003900, true, true);
                                                                                                              cm.effect_Voice("Voice5.img/CH1/White/7", 128);
                                                                                                            } else {
                                                                                                              if (status === O++) {
                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_02", 'ani_03', '02'], [0, 0, 1, 0, 1, 10000, 0, 1]);
                                                                                                                cm.fieldEffect_取消复合图片动画('01', 1, 10);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#强大的法则开始压制混乱无序的#r古代众神#k。\r\n他们的创造物也随着变化的潮流，渐渐沦落为无足轻重的存在。", 37, 3003900, true, true);
                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/8", 128);
                                                                                                              } else {
                                                                                                                if (status === O++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#就这样，混沌终于慢慢平息下去。", 37, 3003900, true, true);
                                                                                                                  cm.effect_Voice("Voice5.img/CH1/White/9", 128);
                                                                                                                } else {
                                                                                                                  if (status === O++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === O++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#然而，#r世界#k并没有因此而得到满足。", 37, 3003900, false, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH1/White/10", 128);
                                                                                                                    } else {
                                                                                                                      if (status === O++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#沉睡的#r古代神#k不知何时会再次苏醒，\r\n无数的因果关系交织在一起，形成了数之不尽的未来。", 37, 3003900, true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/CH1/White/11", 128);
                                                                                                                      } else {
                                                                                                                        if (status === O++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#这即意味着永不会终结的#r不确定性#k。", 37, 3003900, true, true);
                                                                                                                          cm.effect_Voice("Voice5.img/CH1/White/12", 128);
                                                                                                                        } else {
                                                                                                                          if (status === O++) {
                                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", 'ani_04', '', '03'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                            cm.fieldEffect_取消复合图片动画('02', 1, 10);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                                          } else {
                                                                                                                            if (status === O++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#直到这个时候，未来还是开放的。\r\n不是凡人可以预测或操纵的。", 37, 3003900, false, true);
                                                                                                                              cm.effect_Voice("Voice5.img/CH1/White/13", 128);
                                                                                                                            } else {
                                                                                                                              if (status === O++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === O++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#于是#r超越者#k应运而生。", 37, 3003900, false, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/CH1/White/14", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === O++) {
                                                                                                                                    cm.fieldEffect_取消复合图片动画('03', 1, 1000);
                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", 'ani_05', 'ani_06', '04'], [0, 0, 1, 0, 1, 10000, 0, 1]);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                  } else {
                                                                                                                                    if (status === O++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#一方面，他们抑制着古代神，使祂们永远不能苏醒，\r\n另一方面，他们同时又对整个世界产生了巨大的影响力。", 37, 3003900, false, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/CH1/White/15", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === O++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#他们的存在不但减少了世界的不确定性，也使未来变成了#r注定的结果#k。", 37, 3003900, true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/CH1/White/16", 128);
                                                                                                                                      } else {
                                                                                                                                        if (status === O++) {
                                                                                                                                          cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_07", '', '05'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                          cm.fieldEffect_取消复合图片动画('04', 1, 10);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                        } else {
                                                                                                                                          if (status === O++) {
                                                                                                                                            cm.fieldEffect_取消复合图片动画('05', 1, 10);
                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                          } else {
                                                                                                                                            if (status === O++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                            } else {
                                                                                                                                              if (status === O++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === O++) {
                                                                                                                                                  switch (Math.floor(V / 100)) {
                                                                                                                                                    case 31:
                                                                                                                                                      cm.sendNormalTalk_Bottom("（原来我们也不过是被制造出来用以#r操纵命运#k的工具而已？！）", 57, 0, true, true);
                                                                                                                                                      break;
                                                                                                                                                    default:
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#连超越者也……确切地说，超越者才是#r被当成操纵工具的可怜虫#k啊。", 37, 3004323, false, true);
                                                                                                                                                      cm.effect_Voice("Voice5.img/CH1/Lily/13", 128);
                                                                                                                                                      break;
                                                                                                                                                  }
                                                                                                                                                } else {
                                                                                                                                                  if (status === O++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#那么老师他得到这个领悟之后，他满足了吗？", 37, 3004323, true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/Lily/14", 128);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === O++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === O++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom('#face0#……', 37, 3003900, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === O++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#（白魔法师摇了摇头。）", 37, 3003900, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === O++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === O++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#超越者的缺席，给世界造成的这种现象，依然没有得到解释。", 37, 3003923, false, true);
                                                                                                                                                              cm.effect_Voice("Voice5.img/CH1/Heinze/17", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === O++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === O++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else if (status === O++) {
                                                                                                                                                                  cm.warp(993132500, 0, false);
                                                                                                                                                                  cm.eventSKill(0);
                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                                  cm.forceCompleteQuest(39717);
                                                                                                                                                                  cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
                                                                                                                                                                  cm.npc_LeaveField("oid=2773238");
                                                                                                                                                                  cm.npc_LeaveField("oid=2773238");
                                                                                                                                                                  cm.npc_LeaveField("oid=2773239");
                                                                                                                                                                  cm.npc_LeaveField("oid=2773239");
                                                                                                                                                                  cm.npc_LeaveField("oid=2773240");
                                                                                                                                                                  cm.npc_LeaveField("oid=2773240");
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