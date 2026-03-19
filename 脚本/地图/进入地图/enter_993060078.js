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
      cm.npc_ChangeController(3003659, "oid=276051", -3253, -508, 6, -3303, -3203, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276052", -3154, -508, 6, -3204, -3104, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276053', -3053, -508, 6, -3103, -3003, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276054', -2950, -508, 6, -3000, -2900, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276055", -2846, -508, 6, -2896, -2796, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276056', -2741, -508, 6, -2791, -2691, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276057', -2640, -508, 6, -2690, -2590, 4, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=276058', -1115, -480, 2, -1148, -1048, 4, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=276059', -980, -480, 2, -990, -916, 4, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=276060', -761, -480, 15, -842, -742, 4, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=276061", -605, -480, 15, -694, -594, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276062", -1841, -480, 3, -1891, -1816, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276063", -1755, -480, 1, -1776, -1705, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276064", -1666, -480, 1, -1716, -1616, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276065", -1479, -480, 1, -1529, -1429, 5, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276066', -1574, -480, 1, -1624, -1524, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.forceCompleteQuest(35157);
      cm.setAmbience("Ambience.img/BM1_wave", 80, 100);
      cm.npc_ChangeController(3003651, "oid=2204277", -2344, -520, 6, -2394, -2294, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2204277", 'summon', 0, 0);
      cm.npc_ChangeController(3003656, "oid=2204278", -2233, -520, 6, -2283, -2183, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2204278", "summon", 0, 0);
      cm.monadForceMove('white', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2200, -1096);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -1470, -490);
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 5000, -2200, -589);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#路打开了，女皇陛下。", 37, 3003651, false, true);
              cm.effect_Voice("Voice4.img/BM1/DIR3/1", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#保持现有速度的话，大约会在一小时后进入。", 37, 3003651, true, true);
                cm.effect_Voice("Voice4.img/BM1/DIR3/2", 128);
              } else {
                if (status === V++) {
                  cm.fieldEffect_Hero9(80, 1000);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003656, false, true);
                    cm.effect_Voice("Voice4.img/BM1/DIR3/3", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#女皇陛下……？", 37, 3003651, true, true);
                      cm.effect_Voice("Voice4.img/BM1/DIR3/4", 128);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_Hero9(80, 1000);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.monadForceMove('white', 1, 30);
                          cm.inGameDirectionEvent_AskAnswerTime(30);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(30);
                          } else {
                            if (status === V++) {
                              cm.monadForceMove("white", 0, 30);
                              cm.inGameDirectionEvent_AskAnswerTime(30);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(30);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.monadForceMove("white", 1, 30);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.monadForceMove('white', 0, 900);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1990);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#将会折断翅膀，在绝望中毁灭……", 37, 3003656, false, true);
                                          cm.effect_Voice("Voice4.img/BM1/DIR3/5", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……黑魔法师的预言吗？", 37, 3003651, true, true);
                                            cm.effect_Voice("Voice4.img/BM1/DIR3/6", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们避开了预言中提到的警告了吗？", 37, 3003656, true, true);
                                              cm.effect_Voice("Voice4.img/BM1/DIR3/7", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#或者……", 37, 3003656, true, true);
                                                cm.effect_Voice("Voice4.img/BM1/DIR3/8", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_Hero9(80, 1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(0);
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
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1493, -435);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(5500, 0, 1500, 5500, -2200, -470);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 550);
                                                                cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你回来啦。", 37, 3003651, false, true);
                                                                  cm.effect_Voice("Voice4.img/BM1/DIR3/9", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#多亏了你，我们才能摆脱目前的危机。\r\n真是辛苦你了。", 37, 3003651, true, true);
                                                                    cm.effect_Voice("Voice4.img/BM1/DIR3/10", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_Hero9(80, 500);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#马上就要到了。", 37, 3003656, false, true);
                                                                        cm.effect_Voice("Voice4.img/BM1/DIR3/11", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#但是，还是不能大意。\r\n不知道还有什么危险在等待着我们。", 37, 3003656, true, true);
                                                                          cm.effect_Voice("Voice4.img/BM1/DIR3/12", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_Hero9(80, 500);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#好了，大家快回到各自的岗位……", 37, 3003651, false, true);
                                                                              cm.effect_Voice("Voice4.img/BM1/DIR3/13", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.monadForceMove("white", 1, 30);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.monadForceMove("white", 0, 30);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.monadForceMove("white", 1, 30);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.monadForceMove("white", 0, 900);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.userSetFieldFloating(993060078, 0, 10, 500);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR3/14", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#周围的气流好像有点奇怪。", 37, 3003651, false, true);
                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR3/15", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_Hero9(80, 500);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -2107, -450);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.monadForceMove("white", 1, 30);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.monadForceMove("white", 0, 30);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                      cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                      cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                      cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.monadForceMove("white", 1, 30);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.monadForceMove("white", 0, 900);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.userSetFieldFloating(993060078, 10, 10, 10);
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                                                                                                              cm.playSoundEffDirectly("Ambience.img/BM1_wave");
                                                                                                                              cm.setAmbience("Ambience.img/heavyrain", 80, 100);
                                                                                                                              cm.npc_SetSpecialAction("oid=2204277", "prone", -1, 1);
                                                                                                                              cm.npc_setForceFlip("oid=2204277", -1);
                                                                                                                              cm.npc_SetSpecialAction("oid=2204278", 'hit', -1, 1);
                                                                                                                              cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.userSetFieldFloating(993060078, 5, 5, 5);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                                                                cm.onCameraTilt(5, 1000);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.forceStartQuest(35157, '');
                                                                                                                                  cm.fieldEffect_Hero9(80, 500);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#是乱流！！必须降低速度！！", 37, 3003673, false, true);
                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR3/16", 128);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#明白了。把这一情况告诉全体舰队。", 37, 3003656, true, true);
                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR3/17", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#遵命。", 37, 3003673, true, true);
                                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR3/18", 128);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.monadForceMove("white", 1, 30);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.monadForceMove("white", 0, 30);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.monadForceMove("white", 1, 30);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.monadForceMove("white", 0, 900);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.userSetFieldFloating(993060078, 10, 10, 10);
                                                                                                                                                          cm.fieldEffect_Hero9(80, 500);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.userSetFieldFloating(993060078, 5, 5, 5);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#南哈特，白色之矛在前方保护整个舰队！", 37, 3003656, false, true);
                                                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR3/19", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#是，女皇陛下！", 37, 3003651, true, true);
                                                                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR3/20", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                                                                                                cm.onCameraTilt(-5, 2000);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.monadForceMove("white", 1, 30);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.monadForceMove("white", 0, 30);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.monadForceMove("white", 1, 30);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.monadForceMove("white", 0, 900);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#舰队的后面……锁链又攻过来了！！", 37, 3003672, false, true);
                                                                                                                                                                                  cm.effect_Voice("Voice4.img/BM1/DIR3/21", 128);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.monadForceMove('white', 1, 30);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.monadForceMove("white", 0, 30);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.monadForceMove("white", 0, 900);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                                                                                                                                    cm.onCameraTilt(5, 1000);
                                                                                                                                                                                                    cm.fieldEffect_Hero9(80, 500);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#在迷雾的那边……可以感觉到非常强大的意念！", 37, 3003674, false, true);
                                                                                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR3/22", 128);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#这个气息是……！？", 37, 3003674, true, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR3/23", 128);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.monadForceMove('white', 1, 30);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.monadForceMove("white", 0, 30);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.monadForceMove("white", 0, 900);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#呃……那是……？", 37, 3003659, false, true);
                                                                                                                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR3/24", 128);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#喂，喂……看那个！", 37, 3003659, true, true);
                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR3/25", 128);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/boss", 100);
                                                                                                                                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM1_Boss/skeleton", 'idle', '', '02'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                                                                                                                                                                                                                cm.fieldEffect_Hero9(80, 500);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", 'animation', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.fieldEffect_取消复合图片动画('02', 1, 500);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                                        cm.playVideoByScript("BM1_story2_1.avi");
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/fall", 100);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我们……好像……还没从预言中摆脱出来……", 37, 3003651, false, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;mPark75=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2204277");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2204277");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2204278");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=2204278");
                                                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                                                      cm.warp(993060056, 0, false);
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
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}