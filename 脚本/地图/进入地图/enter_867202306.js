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
      cm.npc_ChangeController(9400635, 'oid=204541', -1176, 106, 5, -1226, -1126, 0, true, false);
      cm.npc_ChangeController(9400636, "oid=204542", -1244, 103, 5, -1294, -1194, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=7536471", 515, -48, 74, 465, 565, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536471", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7536472", 430, 40, 31, 380, 480, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536472", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7536473", 377, 50, 31, 327, 427, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536473", "summon", 0, 0);
      cm.npc_ChangeController(9400600, "oid=7536474", 322, 56, 30, 272, 372, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536474", 'summon', 0, 0);
      cm.npc_ChangeController(9400601, "oid=7536475", 217, 68, 29, 167, 267, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536475", "summon", 0, 0);
      cm.npc_ChangeController(9400586, "oid=7536476", 159, 70, 29, 109, 209, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536476", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7536477", -243, 80, 10, -293, -193, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536477", "summon", 0, 0);
      cm.npc_ChangeController(9400598, "oid=7536478", -296, 80, 10, -346, -246, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536478", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536479", -342, 80, 10, -392, -292, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536479", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("维尔纳，好歹他也是一村之主，是不是有点过头了啊？", 37, 9400586, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("那还能怎么办！自己一点觉悟都没有！", 37, 9400600, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("他根本就没想过要互相帮助，而是一味的只顾自己，只顾自己的村子… ", 37, 9400600, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("现在还不熟练而已。", 37, 9400586, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("唉… ", 37, 9400600, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("在我看来他在慢慢成长，看他们年纪越来越大，就觉得我们也越来越老了。", 37, 9400586, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你说的也对。", 37, 9400600, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9400604, "oid=7536516", 700, -20, 33, 650, 750, 1, true, false);
                    cm.npc_SetSpecialAction("oid=7536516", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=7536516", -1, 250, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("维尔纳村长！", 37, 9400604, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7536474", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=7536474", 1, 180, 60);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7536472", 1);
                            cm.npc_setForceFlip("oid=7536473", 1);
                            cm.sendNormalTalk_Bottom("什么事？", 37, 9400600, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("弩炮的雏形已经完成，性能测试也结束了！", 37, 9400604, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("现在只有按照这个模型继续制作即可… 但现在木材不够，而且人手也不够。", 37, 9400604, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是吗。先把训练中的警卫兵和挖掘场的工程兵各调一半出来吧？", 37, 9400600, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("好的！", 37, 9400604, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=7536516", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=7536516", 1, 500, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=7536474", -1);
                                          cm.sendNormalTalk_Bottom("#b弩炮是什么？", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这位优秀的学者大人，为我们设计的守城武器。因为我们没有材料，所以先做个雏形。", 37, 9400600, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b呜哇！艾丽卡，太了不起了。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嘿嘿，我只是依稀记起了从书本上看到的而已… 关键是斯库亚斯的工程兵们把它弄出来了。", 37, 9400580, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#… 还谦虚。", 37, 9400582, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#斯库亚斯工程兵的实力非同小可。", 37, 9400580, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("呵呵，我们的工程部队可是引以为豪的。", 37, 9400600, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=7536516");
                                                        cm.npc_LeaveField("oid=7536516");
                                                        cm.npc_ChangeController(9400635, "oid=7536536", 950, 0, 33, 900, 1000, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536536", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400636, "oid=7536537", 1000, 0, 33, 950, 1050, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536537", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400637, "oid=7536538", 1050, 0, 33, 1000, 1100, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536538", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400638, "oid=7536539", 1100, 0, 33, 1050, 1150, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536539", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400639, "oid=7536540", 1150, 0, 33, 1100, 1200, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536540", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400640, "oid=7536541", 1200, 0, 33, 1150, 1250, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7536541", "summon", 0, 0);
                                                        cm.npc_SetForceMove("oid=7536536", -1, 200, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=7536537", -1, 200, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=7536538", -1, 200, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=7536539", -1, 200, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=7536540", -1, 200, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=7536541", -1, 200, 100);
                                                                  cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(12, [2000, 500, -55, 0, 0]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=7536474", 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("大家都聚齐了，你们也知道我们正在制作守城武器。", 37, 9400600, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("雏形的性能测试也已全部完成，现在只剩下批量生产了。但现在人手不足，材料也不够。", 37, 9400600, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("那我们去弄木材吧！", 37, 9400603, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("挖掘也暂时告一段落，那就由我们部队来制作吧！", 37, 9400604, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("非常感谢大家的帮忙。", 37, 9400600, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=7536536", 1);
                                                                                    cm.npc_setForceFlip("oid=7536537", 1);
                                                                                    cm.npc_setForceFlip("oid=7536538", 1);
                                                                                    cm.npc_setForceFlip("oid=7536539", 1);
                                                                                    cm.npc_setForceFlip("oid=7536540", 1);
                                                                                    cm.npc_setForceFlip("oid=7536541", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=7536536", 1, 400, 100);
                                                                                      cm.npc_SetForceMove("oid=7536537", 1, 400, 100);
                                                                                      cm.npc_SetForceMove("oid=7536538", 1, 400, 100);
                                                                                      cm.npc_SetForceMove("oid=7536539", 1, 400, 100);
                                                                                      cm.npc_SetForceMove("oid=7536540", 1, 400, 100);
                                                                                      cm.npc_SetForceMove("oid=7536541", 1, 400, 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=7536474", -1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNewEffects(12, [3000, -250, -55, 0, 0]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              cm.effect_NormalSpeechBalloon("井井有条啊…", 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                cm.effect_NormalSpeechBalloon("…村长，你是不是很羡慕？", 0, 0, 0, 2000, 9400598, cm.getPlayer().getId());
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNewEffects(12, [3000, 350, -55, 0, 0]);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("好像古纳德村长因为和斯洛克拌嘴，看起来比较消沉。", 37, 9400600, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b…我去和他们谈谈。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetForceMove("oid=7536474", -1, 530, 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNewEffects(12, [3000, -200, -55, 0, 0]);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#b古纳德村长… ", 57, 0, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哦？… 哦，不，是斯洛克那家伙…咳咳", 37, 9400597, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("古纳德村长说的没错！是那家伙先挑起事端的！", 37, 9400598, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fs15#对着站在这里的我们… #fs12#说怎么不去干活… #fs10#说我们会做什么… ", 37, 9400598, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#咳呃！可恶，那家伙还不是因为我们才能从卡夫塔佩活着出来… ", 37, 9400597, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("你们去做点事情，不就不会听他的埋怨了吗？", 37, 9400600, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#哦？… 不… 那个… ", 37, 9400597, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("… 没有我们可以做的事情。", 37, 9400598, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#b为什么会没有呢？还有很多的事情要我们去做。", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我们那！啊？帐篷也搭了！啊？！修补城墙的时候石头也搬过，啊？！", 37, 9400597, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("… 但是… 一旦怪物军团攻过来，我们真不知道该做什么… ", 37, 9400598, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("凡事都要去尝试过，才能知道能不能帮得上忙，对吧？你们就站着这里，当然什么都帮不上了啊。", 37, 9400600, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400597, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那也教教我们！", 37, 9400597, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那什么，啊？教会卡夫塔佩木匠的耍斧头的武功？！", 37, 9400597, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#也教会我们如何使用鱼枪！", 37, 9400597, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("鱼枪你们不是比 #h0# 更擅长吗？", 37, 9400600, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那是！只要怪物在水里，我们就让他上不了岸！咳呃… 不过… 没在水里啊… ", 37, 9400597, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#b好的！那么和我一起训练吧。其实我没教会他们斧头武功，只是告诉他们如何使用而已… ", 57, 0, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#b攻击方式里不仅仅只有挥砍和斩断，而且利用鱼枪也能很好的战斗。", 57, 0, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("真… 真的吗？", 37, 9400598, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#走！我们走！", 37, 9400597, true, true);
                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                cm.warp(867202403, 0);
                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                cm.updateInfoQuest(64119, "dir1=1");
                                                                                                                                                                cm.forceStartQuest(64119, '');
                                                                                                                                                                cm.npc_LeaveField("oid=7536471");
                                                                                                                                                                cm.npc_LeaveField("oid=7536471");
                                                                                                                                                                cm.npc_LeaveField("oid=7536472");
                                                                                                                                                                cm.npc_LeaveField("oid=7536472");
                                                                                                                                                                cm.npc_LeaveField("oid=7536473");
                                                                                                                                                                cm.npc_LeaveField("oid=7536473");
                                                                                                                                                                cm.npc_LeaveField("oid=7536474");
                                                                                                                                                                cm.npc_LeaveField("oid=7536474");
                                                                                                                                                                cm.npc_LeaveField("oid=7536475");
                                                                                                                                                                cm.npc_LeaveField("oid=7536475");
                                                                                                                                                                cm.npc_LeaveField("oid=7536476");
                                                                                                                                                                cm.npc_LeaveField("oid=7536476");
                                                                                                                                                                cm.npc_LeaveField("oid=7536477");
                                                                                                                                                                cm.npc_LeaveField("oid=7536477");
                                                                                                                                                                cm.npc_LeaveField("oid=7536478");
                                                                                                                                                                cm.npc_LeaveField("oid=7536478");
                                                                                                                                                                cm.npc_LeaveField("oid=7536479");
                                                                                                                                                                cm.npc_LeaveField("oid=7536479");
                                                                                                                                                                cm.npc_LeaveField("oid=7536536");
                                                                                                                                                                cm.npc_LeaveField("oid=7536536");
                                                                                                                                                                cm.npc_LeaveField("oid=7536537");
                                                                                                                                                                cm.npc_LeaveField("oid=7536537");
                                                                                                                                                                cm.npc_LeaveField("oid=7536538");
                                                                                                                                                                cm.npc_LeaveField("oid=7536538");
                                                                                                                                                                cm.npc_LeaveField("oid=7536539");
                                                                                                                                                                cm.npc_LeaveField("oid=7536539");
                                                                                                                                                                cm.npc_LeaveField("oid=7536540");
                                                                                                                                                                cm.npc_LeaveField("oid=7536540");
                                                                                                                                                                cm.npc_LeaveField("oid=7536541");
                                                                                                                                                                cm.npc_LeaveField("oid=7536541");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;