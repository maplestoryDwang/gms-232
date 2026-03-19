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
      cm.npc_ChangeController(3003661, "oid=275988", 407, -480, 17, 357, 433, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275989", 324, -480, 17, 274, 374, 0, true, 0, false);
      cm.npc_ChangeController(3003652, "oid=275990", -220, -480, 16, -270, -170, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275991", -331, -480, 16, -381, -281, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275992', -402, -480, 16, -452, -352, 0, true, 0, false);
      cm.npc_ChangeController(3003672, 'oid=275993', -1425, -480, 1, -1475, -1375, 0, true, 0, false);
      cm.npc_ChangeController(3003673, 'oid=275994', -825, -480, 15, -875, -775, 0, true, 0, false);
      cm.npc_ChangeController(3003675, "oid=275995", -1698, -480, 1, -1748, -1648, 0, true, 0, false);
      cm.npc_ChangeController(3003676, "oid=275996", -1524, -480, 1, -1574, -1474, 0, true, 0, false);
      cm.npc_ChangeController(3003677, "oid=275997", -1631, -480, 1, -1681, -1581, 0, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275998", -2330, -508, 6, -2380, -2280, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275999', -2742, -508, 6, -2792, -2692, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276000', -2823, -508, 6, -2873, -2773, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276001", -2906, -508, 6, -2956, -2856, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276002", -2987, -508, 6, -3037, -2937, 0, true, 0, false);
      cm.npc_ChangeController(3003694, "oid=276003", -2425, -508, 6, -2475, -2375, 0, false, 0, false);
      cm.npc_ChangeController(3003698, 'oid=276004', -2647, -480, 4, -2697, -2597, 0, false, 0, false);
      cm.npc_ChangeController(3003697, 'oid=276005', -2401, -758, 0, -2451, -2351, 0, false, 0, false);
      cm.npc_ChangeController(3003696, "oid=276006", -2571, -508, 6, -2621, -2521, 0, false, 0, false);
      cm.npc_ChangeController(3003695, "oid=276007", -2495, -508, 6, -2545, -2445, 0, false, 0, false);
      cm.npc_ChangeController(3003656, "oid=276008", -2218, -508, 6, -2268, -2168, 0, true, 0, false);
      cm.npc_ChangeController(3003674, "oid=276009", 500, -480, 19, 473, 550, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 694, -450);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003667, "oid=2304638", 792, -520, 19, 742, 842, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2304638", "summon", 0, 0);
          cm.npc_ChangeController(3003667, "oid=2304639", 584, -520, 19, 534, 634, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2304639", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=2304638", "heal_loop", -1, 1);
          cm.npc_SetSpecialAction("oid=2304639", "heal_loop", -1, 1);
          cm.inGameDirectionEvent_MoveAction(4);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_Text(["#fn黑体##fs18#几小时后，白色之矛"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(0);
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
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2304638", "heal0", 540, 1);
                        cm.npc_SetSpecialAction("oid=2304639", "heal0", 540, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(540);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2304638", "stand", -1, 1);
                          cm.npc_SetSpecialAction("oid=2304639", "stand", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你终于醒了，#b#ho##k。", 37, 3003674, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 615, -470);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#巨大怪兽沉了下去。\r\n天上通往黑太阳的路很快就会打开。", 37, 3003674, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##b#ho##k，多亏你破坏掉了核心。", 37, 3003674, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#治疗已经全部结束。请你先去见见希纳斯女皇。", 37, 3003674, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("谢谢你们，伊黛娜，还有各位时间神官。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 710);
                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -140, -470);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我就知道这次你一定也会有出色的表现。", 37, 3003652, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#啊，这个吗？这是你摧毁的核心碎片。\r\n我奉命把它送到前哨基地去。", 37, 3003652, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#这是由黑魔法师的意念形成的东西，\r\n也许会有什么重要的情报。", 37, 3003652, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#啊，有什么需要的话，请尽管说。\r\n回来的时候，我会帮你带过来。", 37, 3003652, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("没关系，沃莉。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#啊，好的。那我去执行护送核心的任务了。\r\n祝你好运。", 37, 3003652, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 620);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -714, -470);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#在我身处波涛之中，精神恍惚的时候。\r\n远远地看到了一道光。", 37, 3003673, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#对于我们这些已经失去希望的人来说，\r\n那道光就像是告诉我们一切还没结束的信号。", 37, 3003673, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#你真的太厉害了，#b#ho##k！！\r\n是你那不屈不挠的意志拯救了我们。", 37, 3003673, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 610);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -1322, -470);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2304638");
                                                                                    cm.npc_LeaveField("oid=2304639");
                                                                                    cm.sendNormalTalk_Bottom("#face0#回来啦，#b#ho##k。你果然不愧是联盟的关键先生。\r\n这次又把不可能的事情变成了可能。", 37, 3003672, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#是的，你真是太棒了，#b#ho##k！！\r\n竟然进入了那个可怕的巨大怪兽内部！？", 37, 3003676, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0##b#ho##k，你是最棒的！！", 37, 3003675, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哦，那片可怕的迷雾正在退去。\r\n从现在开始，我们要去救助其他的船只。", 37, 3003677, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#啊，你好像还应该去见一个人。\r\n呵呵，快去吧。", 37, 3003677, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 700);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -2067, -470);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=275988");
                                                                                                    cm.npc_LeaveField('oid=275989');
                                                                                                    cm.npc_LeaveField("oid=275990");
                                                                                                    cm.npc_LeaveField("oid=275991");
                                                                                                    cm.npc_LeaveField("oid=275992");
                                                                                                    cm.npc_LeaveField("oid=276009");
                                                                                                    cm.sendNormalTalk_Bottom("#face0#你醒啦，#b#ho##k。\r\n你能安然无恙，真是太好了。", 37, 3003656, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.onSetMapTagedObjectVisible(1, 'c1', 512);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#你的英勇表现让人赞叹，#b#ho##k。\r\n多亏了你，联盟才能再一次度过难关。", 37, 3003656, false, true);
                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR7/1", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_Hero9(80, 500);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#就在我感觉神兽的盾牌也不再有用，\r\n失去了一切希望的时候。", 37, 3003656, false, true);
                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR7/2", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#是你的鼓励和支持，让我坚定了决心，\r\n没有在最后的关头倒下。", 37, 3003656, true, true);
                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR7/3", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_Hero9(80, 500);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#如果没有听到你那充满真诚的话，\r\n我一定无法相信自己可以坚持到最后。", 37, 3003656, false, true);
                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR7/4", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#不管在任何绝望的瞬间都决不放弃，带领大家勇敢地站起来……\r\n是你让我明白了自己的力量。", 37, 3003656, true, true);
                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR7/5", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_Hero9(80, 500);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#虽然艰苦的战斗暂时告一段落，\r\n但联盟会马上为进入内部做好准备。", 37, 3003656, false, true);
                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR7/6", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#在那里面，也许会有更大的难关让我们陷入绝望。", 37, 3003656, true, true);
                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR7/7", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#但身为对无数人的心愿负责的指挥官，\r\n不管遇到什么困难，我都不会动摇。", 37, 3003656, true, true);
                                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR7/8", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_Hero9(80, 500);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#因为我相信，凝聚在一起的心愿\r\n是击退黑暗的最强大的力量。", 37, 3003656, false, true);
                                                                                                                                  cm.effect_Voice("Voice4.img/BM1/DIR7/9", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_Hero9(80, 500);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#就像我们之前所做的一样。", 37, 3003656, false, true);
                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR7/10", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -1704, -800);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -868, -950);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.onSetMapTagedObjectVisible(1, 'c1', 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.forceCompleteQuest(35631);
                                                                                                                                                          cm.gainExp(171586691);
                                                                                                                                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;mPark75=1;d10=1;d582=1;d11=1;d30=1;d12=1;di9=1;d13=1;d14=1;d15=1;d16=1;d46=1;medal=1;d74=1;d48=1;d1=1;d4=1");
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
                                                                                                                                                                cm.npc_LeaveField("oid=2304638");
                                                                                                                                                                cm.npc_LeaveField("oid=2304639");
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(450009300, 0, false);
                                                                                                                                                                cm.setStandAloneMode(false);
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