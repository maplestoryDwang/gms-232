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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3530, -180);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2607312", -3386, -228, 53, -3436, -3336, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2607312", 'summon', 0, 0);
        cm.npc_ChangeController(2074143, "oid=2607313", -3699, -228, 66, -3749, -3649, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2607313", "summon", 0, 0);
        cm.npc_ChangeController(2074116, "oid=2607314", -3842, -228, 51, -3892, -3792, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2607314", "summon", 0, 0);
        cm.npc_ChangeController(2074146, "oid=2607315", -3921, -228, 52, -3971, -3871, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2607315", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2607314", "standn", -1, 1);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face3#小荳在哪里，\r\n小荳，小荳啊……啊。", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1500, 2400, 1500, -3770, -180);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
              cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/illust/24", 0, 1000, 0, 0, 9, 4, 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……我会让你幸福的。", 37, 2074146, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呜，呜呜，我的眼泪为什么总是……", 37, 2074149, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("以后，我会让你幸福，不会再让你流泪了。", 37, 2074146, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呜，呜呜……额啊啊啊，郡守。", 37, 2074149, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 500, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/23", 0, 1000, 0, 0, 10, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("…………。", 37, 2074143, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("嗯，嗯，姑娘，哭得太凶，你这漂亮的脸蛋可就不美了。\r\n别哭了，停。", 37, 2074146, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呜，呜。\r\n不哭了……好……", 37, 2074149, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("郡守！你在哪儿？\r\n现在该出发了！", 37, 2074113, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("好的，我这就来。", 37, 2074146, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("呜，呜。那我，可以先去洗个脸再来吗？", 37, 2074149, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好的，\r\n我也得赶紧走了，再见。", 37, 2074146, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2607314");
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3640, -180);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2607312");
                                          cm.npc_ChangeController(2074100, "oid=2607340", -3639, -228, 69, -3689, -3589, 1, true, 500, false);
                                          cm.npc_SetSpecialAction("oid=2607340", "summon", 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#……小荳啊。", 37, 2074100, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=2607313", 1);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2607313"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("哦？姐，姐姐？你怎么会来这里？", 37, 2074150, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#来，赶紧去吧，\r\n得最后跟郡守道别啊。", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("什么？啊，不了，我没关系的……", 37, 2074143, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#来，赶紧的！", 37, 2074100, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2607313", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("姐，姐姐，别推我。\r\n啊！", 37, 2074150, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2607313");
                                                                    cm.npc_ChangeController(2074143, "oid=2607389", -3792, -228, 51, -3842, -3742, 1, false, 500, false);
                                                                    cm.npc_SetSpecialAction("oid=2607389", "summon", 0, 0);
                                                                    cm.npc_SetSpecialAction("oid=2607389", "standn", -1, 1);
                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2400, 0, -3770, -180);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2607315"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.sendNormalTalk_Bottom("哦？小荳啊！那个……你之前都在哪儿了？\r\n事情解决得顺利吗？幸好你还没来迟。", 37, 2074146, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("额，嗯，那个……顺利解决了。\r\n额……嗯……", 37, 2074150, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("…………", 37, 2074146, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("……嘿嘿", 37, 2074150, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("……谢谢你。", 37, 2074146, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("…………", 37, 2074150, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("那个……你没什么话要说吗？", 37, 2074146, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……你做得好，真的，你做得很好。", 37, 2074150, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("……这就没了？", 37, 2074146, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("……嗯，不过我是真心的。", 37, 2074150, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("总之……傻瓜啊，谢谢你，多亏了你。\r\n衣服挺漂亮的呢？", 37, 2074146, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("哼！\r\n那可真的超贵的好吗？\r\n你知道多少钱吗？你真的是欠了我一大笔……哎哟。", 37, 2074150, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("知道，我明白，谢谢了，真的。", 37, 2074146, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("郡守大人，现在真的得走了。", 37, 2074113, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("好！那，\r\n嗯……", 37, 2074150, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("好的……嗯。", 37, 2074146, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("偶尔也写封信，让我知道你还活着。", 37, 2074150, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("好的，我一定会寄信回来的。", 37, 2074146, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("大~人！", 37, 2074113, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("好的！我现在真得走了。", 37, 2074146, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("走好，一路保重，一定要幸福啊。", 37, 2074150, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("那是，再见，朋友", 37, 2074146, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=2607389", "stand", -1, 1);
                                                                                                                      cm.sendNormalTalk_Bottom('……再见。', 37, 2074150, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_LeaveField("oid=2607315");
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_LeaveField("oid=2607340");
                                                                                                                          cm.npc_ChangeController(2074100, "oid=2607439", -3743, -228, 66, -3793, -3693, 1, true, 500, false);
                                                                                                                          cm.npc_SetSpecialAction("oid=2607439", "summon", 0, 0);
                                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#……小荳啊。", 37, 2074100, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("…………", 37, 2074143, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#……小荳啊？", 37, 2074100, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=2607389", 1);
                                                                                                                                        cm.npc_SetSpecialAction("oid=2607389", "standn", -1, 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("哎哟！哈，啊啊啊！\r\n心里真舒坦啊~！啊。\r\n总算扔下了一个麻烦的包袱，啊，我好累啊，得赶紧去休息了。", 37, 2074150, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#小荳啊……", 37, 2074100, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("嗯？怎么了？怎么，为什么用那种眼神看着我啊。", 37, 2074143, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#……你没事吗？", 37, 2074100, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("你问我没事吗？谁？我吗？哎，\r\n我什么事儿都没有，姐姐，我真的，真的，一点都……真……的……", 37, 2074143, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#……伤心的时候你大可以哭出来的。", 37, 2074100, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2607389", 'cry', -1, 1);
                                                                                                                                                      cm.sendNormalTalk_Bottom("不，我真的……真的……真的没关系。\r\n我……呜……我……真的……真……的没关……额啊啊啊啊！", 37, 2074156, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#……过来我这里……", 37, 2074100, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("我……我……呜呜，我也真的……真的很喜欢他……呜呜……\r\n额啊啊啊啊！", 37, 2074156, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#过来，过来，哎哟，你这个傻瓜。\r\n你做得好，做得好，没事的。", 37, 2074100, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("我吧，姐姐，呜，真的，真的很喜欢他，呜呜，哇哇！\r\n我也……但是……呜……没法说出口……呜呜呜……呜。", 37, 2074156, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#……没事的，你还会遇到更好的人。\r\n我们小荳，这么漂亮善良……是真的。\r\n一定会有真~的非常帅气的人出现，向你表白的，是真的，\r\n别哭了，别哭了……", 37, 2074100, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("哇哇！额啊啊啊！姐姐……\r\n我以后真的会好好生活的，不会输给任何人。\r\n我真的，呜呜……呜……真的会认真生活，忘记一切，呜呜……", 37, 2074156, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b(啊，小荳身上有光……！)#k", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/1", 0, 300, 0, 0, 8, 4, 1);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/12", 0, 1000, 0, 0, 9, 4, 1);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#g(获得了怠惰宝玉！)#k", 57, 0, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                                            cm.sendNormalTalk_Bottom("我真的，呜呜……呜……真的会认真生活，忘记一切，呜呜……", 37, 2074156, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                              cm.forceStartQuest(30924, '1');
                                                                                                                                                                              cm.forceCompleteQuest(30924);
                                                                                                                                                                              cm.forceForfeitQuest(30924);
                                                                                                                                                                              cm.gainExp(340943);
                                                                                                                                                                              cm.updateInfoQuest(30924, '');
                                                                                                                                                                              cm.forceStartQuest(30922, '2');
                                                                                                                                                                              cm.updateInfoQuest(30445, "gExpCheck=1");
                                                                                                                                                                              cm.forceCompleteQuest(30445);
                                                                                                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                              cm.dispose();
                                                                                                                                                                              cm.warp(224000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;