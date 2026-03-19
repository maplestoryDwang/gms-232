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
      cm.npc_ChangeController(3001925, 'oid=434234', 809, -167, 3, 759, 859, 1, false, 0, false);
      cm.npc_ChangeController(3001926, "oid=434235", 1072, -167, 5, 1022, 1122, 1, false, 0, false);
      cm.npc_ChangeController(3001927, "oid=434236", 971, -167, 5, 969, 1021, 1, false, 0, false);
      cm.npc_ChangeController(3001928, "oid=434237", -418, -167, 1, -468, -368, 0, false, 0, false);
      cm.npc_ChangeController(3001942, "oid=434238", 896, -167, 3, 846, 929, 0, false, 0, false);
      cm.npc_ChangeController(3001943, "oid=434239", 62, -167, 2, 12, 112, 0, false, 0, false);
      cm.npc_ChangeController(3001945, "oid=434240", -317, -167, 1, -367, -267, 0, false, 0, false);
      cm.npc_ChangeController(3001944, "oid=434241", 730, -167, 3, 680, 780, 1, false, 0, false);
      cm.npc_ChangeController(3001939, "oid=434242", 135, -167, 2, 85, 185, 0, false, 0, false);
      cm.npc_ChangeController(3001968, "oid=434243", 566, -167, 4, 516, 566, 5, true, 0, false);
      cm.npc_ChangeController(3001968, "oid=434244", 640, -167, 3, 590, 690, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/door", 100);
      cm.Hidden_background("obj", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 390, -540);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 800, -175);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -117, -175);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face8#差不多该到了啊……他在哪里？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 25);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face6#我在这儿，阿黛尔！转头看！", 36, 3001954, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face8#……转头？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 5);
                                    cm.npc_ChangeController(3001954, "oid=6557923", -20, -210, 2, -70, 30, 1, true, 1000, false);
                                    cm.npc_SetSpecialAction("oid=6557923", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=6557923", -1, 55, 120);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=6557923", 'special0', -1, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#愿意与我共舞一曲吗？", 36, 3001954, false, true, 1);
                                          cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#嘻嘻，吓一跳吧？", 36, 3001954, true, true, 1);
                                            cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/8', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face8#别开这种玩笑。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                              cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#呃，知道啦……", 36, 3001954, true, true, 1);
                                                cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#那什么……你能牵着我的手吗？", 36, 3001954, true, true, 1);
                                                  cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#你该让自己融入舞会的氛围。", 36, 3001954, true, true, 1);
                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/12', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face8#我不懂跳舞。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#你只管跟着我的动作就行。", 36, 3001954, false, true, 1);
                                                          cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/present/4/0/skeleton", 'ani1', '', '01'], [0, 1, 1, 0, 0, 0, 0, 1, 0, -80]);
                                                                      cm.setNpcSpecialActionReset("oid=6557923");
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -117, -175);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(他这么打扮起来，真像个贵公子。\r\n简直不敢相信这就是我认识的那个少年。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#那个，阿黛尔……其实。", 36, 3001954, false, true, 1);
                                                                              cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/15', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face8#嗯？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face5#我，还有话没对你说。", 36, 3001954, true, true, 1);
                                                                                  cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/17', 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#我怕你不会相信……", 36, 3001954, true, true, 1);
                                                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#其实……其实我……", 36, 3001954, true, true, 1);
                                                                                      cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_Hero9(0, 1000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                            cm.fieldEffect_Hero9(100, 500);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                    cm.fieldEffect_取消复合图片动画('01', 1, 0);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -117, -175);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/4/1", 0, 500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face5#啊呀！", 37, 3001954, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(人潮突然涌过来，将我和杰罗姆给挤散了。\r\n他似乎就在附近，可我看不见他。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face8#！？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                  cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/20", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face5#……阿黛尔？", 36, 3001954, true, true, 1);
                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/21', 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(身后有人猛地扯了我一下。之前没察觉到\r\n任何动静……那人究竟是谁？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face4#好久不见了，阿黛尔。你真的还活着啊？", 36, 3001870, false, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_Hero9(0, 1000);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm53/MaskedHeart", 0, 0);
                                                                                                                              cm.fieldEffect_Hero9(100, 500);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/present/4/2", 0, 1000, 0, -40, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#你变迟钝了，阿黛尔。我就站在你身后，你都没发现。", 36, 3001870, false, true, 1);
                                                                                                                                  cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/22', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face8#你认识我吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/23', 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#当然认识……虽然你好像不知道我是谁。", 36, 3001870, true, true, 1);
                                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/24', 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face8#你是谁？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/25', 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#想知道吗？不行，就这么告诉你，多没意思。", 36, 3001870, true, true, 1);
                                                                                                                                          cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/26', 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(我悄悄唤出御剑，抵在了对方的脖颈处。\r\n然而，对方依然是从容不迫的表情。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#嗬，你那把令人讨厌的剑，还是老样子呢。", 36, 3001870, true, true, 1);
                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#可是你敢攻击我吗？就在这儿？", 36, 3001870, true, true, 1);
                                                                                                                                                cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/28', 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#呵呵……你和那小子似乎关系很好哦？", 36, 3001870, true, true, 1);
                                                                                                                                                  cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/29', 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face8#……我不会放过你的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/30", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#别害怕，我今天只是来跟你打个招呼而已。", 36, 3001870, true, true, 1);
                                                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/31", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#就你现在这脓包样，我才懒得跟你动手！", 36, 3001870, true, true, 1);
                                                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/32", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#下回相见……就是你完全恢复力量之后了。\r\n到时候我们再正经打一场。明白吗？", 36, 3001870, true, true, 1);
                                                                                                                                                          cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/33', 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#所以说，拜托你发奋点啊，阿黛尔。\r\n拖太久的话，我也保不准自己会弄出什么事情。", 36, 3001870, true, true, 1);
                                                                                                                                                            cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/34", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#那我们后会有期。", 36, 3001870, true, true, 1);
                                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/35", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face8#你等等！", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/36", 100);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(神秘人物说完那番话，就消失在了人群之中。\r\n紧接着，就听见宣布舞会结束，伯爵登场了。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_ChangeController(3001957, "oid=6571137", 360, -200, 4, 310, 410, 1, true, 0, false);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=6571137", "summon", 0, 0);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=6571137", 'special0', -1, 0);
                                                                                                                                                                        cm.Hidden_background("obj", 1, 1, 0, 0);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face7#很荣幸在此迎接前来参加艺术节的各位。我是伯爵塞德里克，\r\n目前代替空悬的国王之位，料理政事。", 36, 3001957, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/wagon", 100);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 377, -170);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face7#接下来，将为大家揭晓本次艺术节的压轴之作，\r\n即里斯托尼亚王国的参展作品。请各位稍候……", 36, 3001957, false, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.forceCompleteQuest(39624);
                                                                                                                                                                                        cm.gainExp(10627);
                                                                                                                                                                                        cm.gainExp(1056);
                                                                                                                                                                                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h1;09=h0;19=h0;37=f;47=h0");
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
                                                                                                                                                                                              cm.warp(410000342, 0, false);
                                                                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                              cm.npc_LeaveField("oid=6557923");
                                                                                                                                                                                              cm.npc_LeaveField("oid=6571137");
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