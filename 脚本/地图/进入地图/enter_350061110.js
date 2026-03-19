var status = -1;
var selectionLog = [];
function action(u, x, s) {
  if (status == 0 && u == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = s;
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540660, "oid=286330107", 4246, 158, 3, 4196, 4296, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286330107", "summon", 0, 0);
      cm.npc_ChangeController(1540661, "oid=286330108", 4500, 158, 12, 4450, 4550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286330108", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === b++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === b++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === b++) {
            cm.npc_SetForceMove("oid=286330107", -1, 100, 100);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === b++) {
              cm.npc_SetForceMove("oid=286330107", 1, 150, 150);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === b++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/4_a", 100);
                cm.effect_NormalSpeechBalloon("你瞧, 我们长出了脚!", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 1540660, cm.getPlayer().getId());
              } else {
                if (status === b++) {
                  cm.npc_SetSpecialAction("oid=286330108", 'hair', 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === b++) {
                    cm.npc_SetForceMove("oid=286330107", -1, 50, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === b++) {
                      cm.npc_SetSpecialAction("oid=286330107", "foot", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === b++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/5", 100);
                        cm.effect_NormalSpeechBalloon("啊哈哈, 脚好凉啊!", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 1540660, cm.getPlayer().getId());
                      } else {
                        if (status === b++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 1540661, cm.getPlayer().getId());
                        } else {
                          if (status === b++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === b++) {
                              cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 20, 1, 1);
                              cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 20, 7, 1);
                              cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeavenCinematic/forestmemory_back", 0, 1500, 0, 0, 12, 4, 0);
                              cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect2.img/blackHeavenCinematic/forestmemory_eff", 0, 1500, 0, 0, 13, 4, 0);
                              cm.fieldEffect_ProcessOnOffLayer("orca1", "Map/Effect2.img/blackHeavenCinematic/forestmemory_orca1", 0, 1500, -50, 0, 15, 4, 0);
                              cm.fieldEffect_ProcessOnOffLayer("sw2", "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw2", 0, 1500, 50, 0, 14, 4, 0);
                              cm.fieldEffect_ProcessOnOffLayer('00', '', 1, 2500, 30, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer('orca1', '', 1, 2500, 50, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer("sw2", '', 1, 2500, -50, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === b++) {
                                cm.sendNormalTalk_Bottom("以后可以开更有趣的玩笑了。", 45, 1540660, false, true);
                                cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/6_a", 100);
                              } else {
                                if (status === b++) {
                                  cm.sendNormalTalk_Bottom("我也想穿漂亮的衣服，尝一尝食物的味道。", 45, 1540660, true, true);
                                  cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/6_b", 100);
                                } else {
                                  if (status === b++) {
                                    cm.sendNormalTalk_Bottom("奥尔卡，变成人类……\r\n不知为何让我觉得恐惧。", 37, 1540661, true, true);
                                    cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/8", 100);
                                  } else {
                                    if (status === b++) {
                                      cm.sendNormalTalk_Bottom("斯乌你也真是的，又要说这件事了？", 45, 1540660, true, true);
                                      cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/7", 100);
                                    } else {
                                      if (status === b++) {
                                        cm.fieldEffect_ProcessOnOffLayer("orca1", '', 2, 1700, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("sw2", '', 2, 1700, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("orca2", "Map/Effect2.img/blackHeavenCinematic/forestmemory_orca2", 0, 500, 0, 0, 15, 4, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("sw1", "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw1", 0, 500, 0, 0, 14, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1700);
                                      } else {
                                        if (status === b++) {
                                          cm.sendNormalTalk_Bottom("我们继续以精灵的身份生活不好吗？\r\n如果是这具身体……我总感觉自己变成了自己都不知道的某种东西。", 37, 1540661, false, true);
                                          cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/9", 100);
                                        } else {
                                          if (status === b++) {
                                            cm.sendNormalTalk_Bottom("如果我们之中的一个人出了事，那该怎么办呢？", 37, 1540661, true, true);
                                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/10_a", 100);
                                          } else {
                                            if (status === b++) {
                                              cm.sendNormalTalk_Bottom("我……自己留下，或者只有你留下，我都不喜欢。", 37, 1540661, true, true);
                                              cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/10_b", 100);
                                            } else {
                                              if (status === b++) {
                                                cm.OverlapScreenDetail19(0, 5000, 1000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 300);
                                              } else {
                                                if (status === b++) {
                                                  cm.fieldEffect_ProcessOnOffLayer("orca2", '', 1, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer("sw1", '', 1, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                } else {
                                                  if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("到那时候，我们一起消失不就行了嘛？", 45, 1540660, false, true);
                                                    cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/8", 100);
                                                  } else {
                                                    if (status === b++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("sw1", '', 2, 2000, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_ProcessOnOffLayer("sw3", "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw3", 0, 500, 0, 0, 14, 4, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === b++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 1, 1700, 30, 0, 0, 0, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer('orca2', '', 1, 1700, 20, 0, 0, 0, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer("sw3", '', 1, 1700, -20, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                      } else {
                                                        if (status === b++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('orca2', '', 2, 2000, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer("orca3", "Map/Effect2.img/blackHeavenCinematic/forestmemory_orca3", 0, 500, 20, 0, 15, 4, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer('sw3', '', 2, 2000, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer('sw4', "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw4", 0, 500, -20, 0, 14, 4, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("奥尔卡没有迷恋。\r\n只要能和斯乌一起做有趣的事情。", 45, 1540660, false, true);
                                                            cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/9", 100);
                                                          } else {
                                                            if (status === b++) {
                                                              cm.sendNormalTalk_Bottom("如果没有斯乌，那就没有奥尔卡。\r\n如果没有奥尔卡，那也没有斯乌。", 45, 1540660, true, true);
                                                              cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/10", 100);
                                                            } else {
                                                              if (status === b++) {
                                                                cm.OverlapScreenDetail19(0, 5000, 1000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 300);
                                                              } else {
                                                                if (status === b++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 1, 0, -30, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("sw4", '', 1, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("orca3", '', 2, 500, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("orca5", "Map/Effect2.img/blackHeavenCinematic/forestmemory_orca5", 0, 500, 20, 0, 15, 4, 0);
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 1, 1700, -10, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("orca5", '', 1, 1700, -20, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("sw4", '', 1, 1700, 20, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                                } else {
                                                                  if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("我们俩必须要在一起。\r\n你会和奥尔卡在一起的吧？", 45, 1540660, false, true);
                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/11", 100);
                                                                  } else {
                                                                    if (status === b++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer("orca5", '', 2, 2000, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer("orca6", "Map/Effect2.img/blackHeavenCinematic/forestmemory_orca6", 0, 500, 0, 0, 15, 4, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer("sw4", '', 2, 2000, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer("sw1", "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw1", 0, 500, 0, 0, 14, 4, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === b++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('sw1', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('sw5', "Map/Effect2.img/blackHeavenCinematic/forestmemory_sw5", 0, 500, 0, 0, 14, 4, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      } else {
                                                                        if (status === b++) {
                                                                          cm.sendNormalTalk_Bottom("嗯，只要奥尔卡愿意，那我也愿意。", 37, 1540661, false, true);
                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/11", 100);
                                                                        } else {
                                                                          if (status === b++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 1, 2200, -40, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('orca6', '', 1, 2200, -20, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer("sw5", '', 1, 2200, 20, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer("orca6", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer("sw5", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === b++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('masking_up', '', 2, 500, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 500, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                                                            } else {
                                                                              if (status === b++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === b++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 30, 1, 1);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 30, 7, 1);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/blackHeavenCinematic/lastword_back", 0, 500, 0, 0, 12, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("glow", "Map/Effect2.img/blackHeavenCinematic/lastword_glow", 0, 500, 0, 0, 15, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('sw', "Map/Effect2.img/blackHeavenCinematic/lastword_sw", 0, 500, 0, 0, 17, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("orca", "Map/Effect2.img/blackHeavenCinematic/lastword_orca", 0, 500, 0, 0, 19, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('p1a', "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -300, 200, 20, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p2a", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 300, 100, 20, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p3a", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -250, -150, 20, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p4a", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 350, -100, 20, 4, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('p1a', '', 1, 20000, -50, -500, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p2a", '', 1, 20000, 100, -500, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p3a", '', 1, 20000, 20, -500, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("p4a", '', 1, 20000, 20, -500, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#奥尔卡，最后我要把……我们的力量给你。", 37, 1540495, false, true);
                                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_3/1", 100);
                                                                                  } else {
                                                                                    if (status === b++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#你可以随意使用我们最后的力量。", 37, 1540495, true, true);
                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_3/2_a", 100);
                                                                                    } else {
                                                                                      if (status === b++) {
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1200, 0, 0, 0);
                                                                                      } else {
                                                                                        if (status === b++) {
                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#奥尔卡，我希望你自己好好活着。", 37, 1540495, false, true);
                                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_3/2_b", 100);
                                                                                          } else {
                                                                                            if (status === b++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#…………！！", 37, 1540499, true, true);
                                                                                              cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_3/23", 100);
                                                                                            } else {
                                                                                              if (status === b++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === b++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp0', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -146, 346, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp0', '', 1, 10020, 113, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp1", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -274, 263, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp1', '', 1, 13745, -51, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp2", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 10, 271, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp2", '', 1, 8202, 235, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp3", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -186, 275, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp3", '', 1, 5152, 157, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp4', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 160, 282, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp4', '', 1, 13711, 51, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp5', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -262, 309, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp5", '', 1, 5617, 244, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp6", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 228, 325, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp6", '', 1, 6270, 206, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp7', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 167, 273, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp7', '', 1, 12169, 78, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp8", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 352, 324, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp8", '', 1, 6884, 230, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp9', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -287, 345, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp9', '', 1, 13108, 386, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp10", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -4, 342, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp10", '', 1, 5061, -88, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp11", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 189, 295, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp11', '', 1, 14060, 544, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp12", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 419, 275, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp12', '', 1, 10504, 24, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp13", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 196, 365, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp13", '', 1, 11261, 464, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp14", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 20, 260, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp14", '', 1, 8543, 205, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp15", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -294, 287, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp15', '', 1, 11188, 249, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp16', "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -166, 258, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp16", '', 1, 14970, 349, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp17', "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 403, 307, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp17", '', 1, 10150, 488, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp18", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 158, 300, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp18", '', 1, 6130, 467, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp19', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 132, 343, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp19", '', 1, 13116, 528, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp20", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -279, 353, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp20", '', 1, 10973, 336, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp21", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -357, 279, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp21', '', 1, 13119, 87, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp22", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -222, 307, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp22", '', 1, 7704, 338, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp23', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -345, 326, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp23", '', 1, 6781, 443, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp24', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -90, 315, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp24", '', 1, 13605, 165, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp25", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 61, 269, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp25', '', 1, 5006, 155, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp26", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -295, 343, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp26", '', 1, 5216, 522, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp27', "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 5, 271, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp27', '', 1, 9732, 422, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp28', "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -202, 348, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp28", '', 1, 14721, 309, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp29", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -195, 379, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp29", '', 1, 5298, -73, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp30", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -52, 256, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp30", '', 1, 9147, -22, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp31', "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -206, 300, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp31", '', 1, 5418, 284, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp32", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -320, 278, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp32', '', 1, 11770, 334, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp33", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -61, 357, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp33", '', 1, 10103, 185, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp34', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 278, 383, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp34", '', 1, 10303, 226, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp35", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 180, 261, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp35", '', 1, 7187, 89, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp36", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 7, 357, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp36", '', 1, 7741, 476, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp37", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 45, 254, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp37", '', 1, 6603, 199, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp38", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -128, 343, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp38", '', 1, 6242, 525, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp39", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 407, 362, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp39', '', 1, 8928, 323, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp40", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -115, 357, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp40", '', 1, 7999, -77, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp41", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -402, 258, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp41', '', 1, 5415, 114, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp42", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -127, 352, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp42", '', 1, 12559, 407, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp43", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 347, 320, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp43", '', 1, 12896, 19, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp44", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 101, 330, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp44', '', 1, 10508, 409, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp45", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -284, 293, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp45', '', 1, 13550, 511, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp46', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 407, 288, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp46", '', 1, 12072, 114, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp47", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 11, 326, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp47", '', 1, 12501, 275, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp48", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 344, 350, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp48", '', 1, 14959, 538, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp49", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -267, 322, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp49", '', 1, 7744, -33, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp50", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 83, 319, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp50", '', 1, 5443, 532, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp51", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, -62, 259, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp51', '', 1, 14913, 397, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp52", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -27, 372, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp52", '', 1, 8165, 209, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp53', "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 215, 268, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp53", '', 1, 11847, 585, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp54', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -239, 283, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp54", '', 1, 7370, 358, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp55", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -17, 370, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp55", '', 1, 9732, 489, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp56', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 438, 310, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp56", '', 1, 8275, -66, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp57", "Map/Effect2.img/blackHeavenCinematic/lastword_p1", 0, 500, 310, 272, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp57", '', 1, 11119, 417, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp58", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -307, 358, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp58", '', 1, 14328, 27, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp59", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 3, 303, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('randomp59', '', 1, 14324, 460, -768, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp60", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -271, 291, 16, 4, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("randomp60", '', 1, 10714, 111, -768, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(17000, 1000, 17000, 0, 0);
                                                                                                } else {
                                                                                                  if (status === b++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", '', 1, 20000, 0, 30, 0, 0, 0);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('sw', '', 2, 15500, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("glow", '', 2, 16000, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                  } else {
                                                                                                    if (status === b++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('orca', '', 2, 9000, 0, 0, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 7000, 0, 0, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === b++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa0", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 35, 324, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa0", '', 1, 7367, 74, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('randompa1', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 149, 272, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa1", '', 1, 7805, 686, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa2", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 273, 282, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('randompa2', '', 1, 4064, 514, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa3", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 332, 342, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa3", '', 1, 6832, 611, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa4", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -121, 297, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa4", '', 1, 4972, 488, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa5", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 249, 301, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa5", '', 1, 6569, 393, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa6", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 88, 345, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa6", '', 1, 5123, 95, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa7", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 78, 282, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa7", '', 1, 5350, -63, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa8", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 283, 374, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa8", '', 1, 3563, 151, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa9", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -301, 377, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa9", '', 1, 6893, 580, -768, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa10", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 338, 345, 16, 4, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("randompa10", '', 1, 5102, 262, -768, 0, 0, 0);
                                                                                                        cm.sendNormalTalk_Bottom("#face3#…………不要，不要走。", 37, 1540499, false, true);
                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_3/21", 100);
                                                                                                      } else {
                                                                                                        if (status === b++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("我们约定好了，奥尔卡。", 37, 1540495, false, true);
                                                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_3/3", 100);
                                                                                                          } else {
                                                                                                            if (status === b++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#不要走。\r\n不要走，斯乌。", 37, 1540499, false, true);
                                                                                                                cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_3/22", 100);
                                                                                                              } else {
                                                                                                                if (status === b++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === b++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp0", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 66, 367, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp0", '', 1, 4156, 35, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp1', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 389, 297, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp1", '', 1, 4449, 291, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp2", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -211, 323, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp2", '', 1, 5913, 284, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp3', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -378, 261, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp3", '', 1, 6463, -100, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp4", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -127, 312, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp4", '', 1, 3220, 559, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp5", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -406, 352, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp5", '', 1, 6501, 174, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp6", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 395, 280, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp6", '', 1, 5237, 75, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp7", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -285, 304, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp7", '', 1, 6855, 153, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp8', "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 223, 383, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp8", '', 1, 3685, 267, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp9", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 130, 261, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp9", '', 1, 5320, 497, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp10", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, 271, 296, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp10", '', 1, 4416, 62, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp11', "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -171, 323, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp11", '', 1, 2102, 110, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp12", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 41, 299, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp12', '', 1, 3421, 638, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp13", "Map/Effect2.img/blackHeavenCinematic/lastword_p2", 0, 500, -263, 307, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp13", '', 1, 5434, -12, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp14", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 33, 357, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp14', '', 1, 4379, 417, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp15', "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 138, 311, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp15", '', 1, 2019, 247, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp16", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -267, 342, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp16", '', 1, 5224, 420, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp17", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, -152, 336, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp17", '', 1, 6609, 646, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp18", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, -399, 304, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp18", '', 1, 5134, 681, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp19", "Map/Effect2.img/blackHeavenCinematic/lastword_p3", 0, 500, 21, 285, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp19", '', 1, 6186, 619, -768, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp20", "Map/Effect2.img/blackHeavenCinematic/lastword_p4", 0, 500, 22, 279, 16, 4, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp20", '', 1, 2281, 21, -768, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                  } else if (status === b++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp6', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp9', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp13", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp14", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp15", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp18", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp21", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp22", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp23", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp24", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp25", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp26', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp27', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp28", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp29', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp30", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp31", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp32", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp33", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp34", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp35", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp36', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp37", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp38", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp39', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp40", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp41', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp42", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp43", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randomp44', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp45", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp46", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp47", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp48", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp49", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp50", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp51", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp52", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp53", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp54", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp55", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp56", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp57", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp58", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp59", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randomp60", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompa0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompa4', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompa10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp10', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp13', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp14', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp15', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp18', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(350061130, 0, true);
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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