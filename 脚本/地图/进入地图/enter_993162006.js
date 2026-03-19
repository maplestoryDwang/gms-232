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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onSetMapTagedObjectVisible(1, 'l1', 512);
      cm.onSetMapTagedObjectVisible(1, 'l2', 512);
      cm.onSetMapTagedObjectVisible(1, 'l3', 512);
      cm.Hidden_background("l00", 1, 0, 0, 0);
      cm.Hidden_background('l01', 1, 0, 0, 0);
      cm.Hidden_background("l02", 1, 0, 0, 0);
      cm.Hidden_background('o', 1, 0, 0, 0);
      cm.npc_ChangeController(3001953, "oid=6284772", 2450, 100, 10, 2400, 2500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6284772", "summon", 0, 0);
      cm.npc_ChangeController(3001989, "oid=6284773", 2530, 100, 11, 2480, 2580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6284773", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2550, 90);
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
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#(我跟他讲述了最后余留的一点模糊的记忆，\r\n也直言那些记忆对我来说，感觉就像是遥远的过去。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face12#翼人，小规模战争……骑士……\r\n除了这些之外，你什么都想不起来了啊。", 36, 3001952, true, true, 1);
                cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face12#我会请我同伴们帮忙打听一下。\r\n我有些朋友很擅长暗地里调查。", 36, 3001952, true, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6284772", -1, 600, 140);
                      cm.npc_SetForceMove("oid=6284773", -1, 600, 140);
                      cm.inGameDirectionEvent_PushScaleInfo(6500, 0, 1500, 6500, 1745, 90);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(这总好过我自己去瞎打听。\r\n有人帮忙总是好的。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.onSetMapTagedObjectVisible(1, 'l1', 0);
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                        } else {
                          if (status === V++) {
                            cm.onSetMapTagedObjectVisible(1, 'l2', 0);
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.onSetMapTagedObjectVisible(1, 'l3', 0);
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.Hidden_background('l1', 1, 0, 0, 0);
                                  cm.Hidden_background('l2', 1, 0, 0, 0);
                                  cm.Hidden_background('l3', 1, 0, 0, 0);
                                  cm.Hidden_background("l00", 1, 1, 0, 0);
                                  cm.Hidden_background("l01", 1, 1, 0, 0);
                                  cm.Hidden_background("l02", 1, 1, 0, 0);
                                  cm.npc_ChangeController(3001953, "oid=6287152", 250, 100, 3, 200, 300, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=6287152", 'summon', 0, 0);
                                  cm.npc_ChangeController(3001989, "oid=6287153", 380, 100, 4, 330, 430, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=6287153", "summon", 0, 0);
                                  cm.npc_SetForceMove("oid=6287152", -1, 250, 140);
                                  cm.npc_SetForceMove("oid=6287153", -1, 250, 140);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
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
                                        cm.npc_SetForceMove("oid=6287152", 1, 10, 140);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, 90);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face12#喂！", 36, 3001952, false, true, 1);
                                                    cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('#face9#！？', 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face12#你在想什么？", 36, 3001952, true, true, 1);
                                                        cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face9#我只是……有点头疼。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                          cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face12#总之，在你协助我的期间，我也会帮助你找回记忆。\r\n这样你没意见吧！？", 36, 3001952, true, true, 1);
                                                            cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face9#我只帮忙到找回记忆为止。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face12#非要那么斤斤计较吗？这可是拯救一个王国的大事，\r\n你别那么不近人情……", 36, 3001952, true, true, 1);
                                                                cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/9-1", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face12#啊，对了。有件东西给你看！", 36, 3001952, true, true, 1);
                                                                  cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9-2', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/1/0", 0, 1000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face12#这是骑士之证。虽然有些磨损，到底是我们家族的传家宝。\r\n就给你作个担保。", 36, 3001952, false, true, 1);
                                                                        cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face12#将来要是觉得我这人不可信，你也可以拿去卖掉。\r\n能卖个大价钱呢。", 36, 3001952, true, true, 1);
                                                                          cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#(可能因为是老物件，已经失去了光泽。\r\n但能看出是被好好珍藏之物。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face9#行，好吧。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face12#说起来，我还没问过你叫什么名字。\r\n要订立骑士誓约的话，总要知道名字吧。", 36, 3001952, false, true, 1);
                                                                                      cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13-1", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face12#把你的名字告诉我吧。", 36, 3001952, true, true, 1);
                                                                                        cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13-2", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face9#我叫阿德莱德。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                          cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face12#阿德莱德……这名字真好听，就是有点长。\r\n在危急情况下，叫起来不方便。所以……", 36, 3001952, true, true, 1);
                                                                                            cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face12#阿黛尔，我就叫你阿黛尔吧。", 36, 3001952, true, true, 1);
                                                                                              cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face9#你别随便篡改我的名字。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face12#你也可以那样叫我啊。", 36, 3001952, true, true, 1);
                                                                                                  cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/18", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face12#我的原名也有点长……你就叫我杰罗姆吧。\r\n我的朋友们都是这么称呼我的。", 36, 3001952, true, true, 1);
                                                                                                    cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/19", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face9#你好啰嗦。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                      cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/20", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face12#而你，就有点沉默寡言了。", 36, 3001952, true, true, 1);
                                                                                                        cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/21", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/bell3", 100);
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
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.Hidden_background('o', 1, 1, 0, 0);
                                                                                                                              cm.setAmbience("Ambience.img/fountain", 200, 60);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=6287152", -1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, 90);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face12#这情景正适合举行骑士授封仪式。那我们开始……", 36, 3001952, false, true, 1);
                                                                                                                                            cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/22", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=6287152", 1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face12#我对着这座让你我相遇的雕像起誓，\r\n今后只会在拯救这个王国的事情上，借助你的力量。", 36, 3001952, false, true, 1);
                                                                                                                                                cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/23", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#(我收到了骑士之证。认真想想，这样也不错。\r\n目前就暂且留在这少年身边，慢慢熟悉这个王国吧。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#(关于我过去的证据，也许就藏在此地的某处……\r\n我没坠落到其他地方，而是来到了这里，应该不单纯是个巧合。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face12#哈哈，这下你就成了我的骑士！大家好好合作吧！", 36, 3001952, true, true, 1);
                                                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face12#再一次正式欢迎你。\r\n此地是格兰蒂斯的首都，艺术与浪漫之城，里斯托尼亚。", 36, 3001952, true, true, 1);
                                                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/25-1", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face12#让我们齐心协力，拯救王国吧！", 36, 3001952, true, true, 1);
                                                                                                                                                          cm.effect_Voice("Voice2.img/adele/present/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/25-2", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face12#警卫兵都撤走了，没必要继续伪装了。\r\n把伪装用长袍给我吧。", 36, 3001952, false, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.forceCompleteQuest(39603);
                                                                                                                                                                  cm.gainExp(86);
                                                                                                                                                                  cm.gainExp(635);
                                                                                                                                                                  cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                                                                                                                  cm.updateInfoQuest(39660, "00=h0;01=h1;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                                                                                                                                                        cm.warp(410000300, 0, false);
                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                        cm.npc_LeaveField("oid=6287152");
                                                                                                                                                                        cm.npc_LeaveField("oid=6287153");
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