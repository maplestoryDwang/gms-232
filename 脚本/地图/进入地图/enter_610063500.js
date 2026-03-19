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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063500");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2728296", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728296", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2728297", -890, 772, 3, -940, -840, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728297", 'summon', 0, 0);
      cm.npc_ChangeController(9201568, "oid=2728298", -800, 772, 3, -850, -750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728298", "summon", 0, 0);
      cm.npc_ChangeController(9201571, "oid=2728299", -1100, 772, 3, -1150, -1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728299", "summon", 0, 0);
      cm.npc_ChangeController(9201572, "oid=2728300", -1200, 772, 3, -1250, -1150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728300", "summon", 0, 0);
      cm.npc_ChangeController(9201573, "oid=2728301", -1300, 439, 3, -1350, -1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728301", "summon", 0, 0);
      cm.npc_ChangeController(9201570, "oid=2728302", -680, 439, 3, -730, -630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2728302", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2728297", "hurt", -1, 0);
      cm.npc_SetSpecialAction("oid=2728302", 'cry', -1, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
      cm.inGameDirectionEvent_AskAnswerTime(4200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -950, 800);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#你们这帮无耻的畜生！！\r\n居然趁绯红之心去帮助别人的时候袭击我们！你们就没有廉耻之心吗？", 37, 9201536, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#你们就没有廉耻之心吗", 37, 9201536, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2728299", 1, 20, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("要廉耻有何用。\r\n还想活命的话，就给老子闪开。", 37, 9201571, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2728298", -1, 120, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("只要我还活着，就决不允许你从这里过去。\r\n幻日不能落入你这人的手中。", 37, 9201568, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("求你们不要这样。\r\n这份力量就应该大家一起分享，让世界变得更美好。", 37, 9201568, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2728300", 1, 50, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("漂亮话说够了吧，女士。\r\n快闪开！", 37, 9201572, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你别想阻止我们。\r\n我一定要得到它，哪怕这意味着要杀死你！", 37, 9201571, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("哇——啊啊啊啊啊！", 37, 9201570, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#绯红之心始终在和将幻日之力用于邪道的人战斗。", 37, 9201539, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("他当时怎么没出现？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#他也不可能每次都及时赶到。\r\n他大部分时间都在帮助其他的世界。", 37, 9201539, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#正如人们所说，能力越强，责任越大，幻日之力是用来守护所有人，而不是只守护家人的。", 37, 9201539, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#幻日能让他在任意时空间穿行。", 37, 9201539, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#他拯救了无数的世界，代价却是妻子的性命。", 37, 9201539, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("为什么会有那么多人想要夺取幻日？\r\n不是所有人都能分到它的力量吗？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#你开玩笑吧？\r\n你居然不明白人们为什么会想要这样拥有无限力量的法器？", 37, 9201539, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#此外，这份力量只有反转界人有权使用。\r\n分享的人越多，分到的力量就越少。", 37, 9201539, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我不会让你们得逞的。\r\n拜托你们，住手吧。", 37, 9201568, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2728301", 1, 70, 200);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("够了！", 37, 9201573, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#格罗娜，带上苏巴尼快跑。\r\n我留下来拖住他们！", 37, 9201536, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2728298", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("你已经受伤了。\r\n现在，只有我能守护幻日了……", 37, 9201568, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#但——但是……", 37, 9201536, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("这是我的职责，卢坎。\r\n对不起。", 37, 9201568, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=2728298", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=2728298", "attack2", -1, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(9201569, "oid=2728905", -637, 772, 3, -687, -587, 1, true, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=2728905", "summon", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=2728905", -1, 100, 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("母亲！\r\n你这是要做什么？", 37, 9201569, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我很抱歉，纳瑞。\r\n我没法再照顾你了……", 37, 9201568, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("不！\r\n母亲，不要！", 37, 9201569, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("哇啊啊啊！！", 37, 9201570, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.setNpcSpecialActionReset("oid=2728298");
                                                                                                      cm.npc_SetSpecialAction("oid=2728298", 'attack', 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, -1500, 900);
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
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("啊！搞什么？我怎么不能动了？", 57, 0, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face4#哦哦……看来我的装置让你也受到了魔咒的影响。", 37, 9201539, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#这道魔咒即便是模拟的，也能强大到杀死你吗。\r\n真方便。", 37, 9201539, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("什么？你怎么不早说！", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_QTE(1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -950, 800);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetSpecialAction("oid=2728298", "die", -1, 0);
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
                                                                                                                                                  cm.sendNormalTalk_Bottom("啊，这下咱们就没法穿过这个屏障了。", 37, 9201572, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("但我们也不能半途而废啊！\r\n我们都——", 37, 9201571, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_SetForceMove("oid=2728905", -1, 190, 200);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom('你们这群混蛋！', 37, 9201569, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("嘿，你们快看！", 37, 9201572, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("你们完了！", 37, 9201569, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("放松，他就是个小——", 37, 9201573, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2728905", "angry", -1, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("纳瑞坎！", 37, 9201536, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom('哇啊啊！哇啊啊啊啊！', 37, 9201570, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("去死吧！", 37, 9201569, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Map/EffectGL.img/MBlockbuster/n_attack", "oid=2728905"], [10000, 5, -30, 1, 0, 1, 0, 0]);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                                        cm.warp(610063510, 0, true);
                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728296");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728296");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728297");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728297");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728298");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728298");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728299");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728299");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728300");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728300");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728301");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728301");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728302");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728302");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728905");
                                                                                                                                                                                        cm.npc_LeaveField("oid=2728905");
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