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
      cm.npc_ChangeController(3001933, "oid=434295", 911, 121, 4, 879, 979, 4, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434296", 1108, 121, 4, 1041, 1141, 5, true, 0, false);
      cm.npc_ChangeController(3001935, "oid=434297", -481, 21, 11, -531, -431, 0, false, 0, false);
      cm.npc_ChangeController(3001936, "oid=434298", -384, 18, 13, -434, -334, 1, false, 0, false);
      cm.npc_ChangeController(3001933, "oid=434299", -780, 121, 1, -792, -692, 5, true, 0, false);
      cm.npc_ChangeController(3001936, 'oid=434300', 148, 121, 2, 98, 198, 0, false, 0, false);
      cm.npc_ChangeController(3001935, "oid=434301", 53, 121, 2, 3, 103, 0, false, 0, false);
      cm.npc_ChangeController(3001934, "oid=434302", -615, 121, 1, -690, -590, 5, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434303", 767, 121, 3, 693, 793, 5, true, 0, false);
      cm.npc_ChangeController(3001952, "oid=434304", 544, 121, 3, 494, 594, 5, true, 0, false);
      cm.npc_ChangeController(3001962, 'oid=434305', 314, -101, 7, 264, 364, 4, true, 0, false);
      cm.npc_ChangeController(3001963, "oid=434306", 398, -111, 7, 348, 448, 4, true, 0, false);
      cm.npc_ChangeController(3001960, "oid=434307", 268, 121, 2, 218, 318, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 440, 90);
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
            cm.sendNormalTalk_Bottom("#face0#杰罗姆，我们按你的吩咐，把金银财宝全部分给百姓们了。", 36, 3001963, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#逃跑的贵族们留下的财宝数量相当可观呢？", 36, 3001963, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呜呜……大哥，你要离开的消息是真的吗？", 36, 3001962, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#请带我们一起走吧。", 36, 3001963, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#自卫队离开的话，谁来捍卫里斯托尼亚王国？\r\n我已经决定，只带布乌一起去修炼。", 36, 3001952, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#尽管目前暂时恢复了和平，但局势随时可能逆转。\r\n自卫团的职责，不就是做好监视，防止发生那样的情况吗？", 36, 3001952, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#大哥说得有理……", 36, 3001962, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#呜呜……你要常回来看我们哦。", 36, 3001963, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#放心吧，王国有我们守护。\r\n祝你找到想要的答案，早日归来。", 36, 3001963, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#那王国就拜托你们了……", 36, 3001952, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face6#啊，临走之前差点儿忘了有事情要告诉阿黛尔。\r\n布鲁，拉迪，麻烦你们把我之前委托的东西给阿黛尔看看好吗？", 36, 3001952, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.teachSkill(151001004, 0, -1);
                                    cm.teachSkill(151001004, 1, 1);
                                    cm.getTopMsgFont("获得了<空中悬浮>技能。", 3, 20, 20, 0, 0);
                                    cm.forceCompleteQuest(39630);
                                    cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                    cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h1;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else if (status === V++) {
                                            cm.warp(410000314, 0, false);
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.dispose();
                                            cm.gainExp(12741);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}