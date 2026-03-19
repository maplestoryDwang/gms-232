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
      cm.setNumberForQuestCustomData(867200400, cm.getMapId());
      for (var V = 2210207; V <= 2210211; V++) {
        cm.cancelItem(V);
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.Hidden_background("open", 0);
      cm.npc_ChangeController(9400587, "oid=3700903", 600, 0, 22, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700903", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=3700904", 360, 0, 20, 310, 410, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700904", "summon", 0, 0);
      cm.forceStartQuest(64164, '');
      cm.npc_ChangeController(9400581, "oid=3700905", 550, 0, 21, 500, 600, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700905", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=3700906", 420, 0, 20, 370, 470, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700906", "summon", 0, 0);
      cm.npc_ChangeController(9400584, "oid=3700907", 250, 0, 20, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700907", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=3700908", 200, 0, 19, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700908", 'summon', 0, 0);
      cm.npc_ChangeController(9400588, "oid=3700909", 150, 0, 19, 100, 200, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700909", 'summon', 0, 0);
      cm.npc_ChangeController(9400593, "oid=3700910", 80, 0, 19, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700910", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=3700911", 35, 0, 19, -15, 85, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700911", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=3700912", -40, 0, 18, -90, 10, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700912", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3700913", -180, 0, 18, -230, -130, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700913", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3700914", -240, 0, 17, -290, -190, 0, true, false);
      cm.npc_SetSpecialAction("oid=3700914", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=3700903", 1, 100, 50);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_NormalSpeechBalloon("有人吗？！", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_NormalSpeechBalloon("村长！", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3700905", 1, 80, 50);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#看样子他们还没遭到袭击……是全村去避难了吗？", 37, 9400581, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b等一会儿吧。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(17, [3000, 1000, 2000, 750, 30]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.onSetBackEffect("door", 1, 0, 0, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9400597, "oid=3701114", 858, -45, 9, 808, 908, 1, true, false);
                              cm.npc_SetSpecialAction("oid=3701114", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face0#咳咳~', 37, 9400597, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=3700903", 1, 20, 50);
                                    cm.sendNormalTalk_Bottom("#face0#古纳德村长！", 37, 9400587, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……咳。", 37, 9400597, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#卡夫塔佩也遭到怪物的袭击了吗~？", 37, 9400597, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我有听说河对岸村子的遭遇，没想到卡夫塔佩也……", 37, 9400597, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯，他们也和我们同时……", 37, 9400587, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#等等！！！慢着慢着，", 37, 9400597, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我有话要说！", 37, 9400597, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#可汗村长？很抱歉，我们不打算收留你们这支队伍！这事不管怎么算，我们都亏大了~", 37, 9400597, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我们村既没有收容你们的场所，也没有可以分给你们的食物……况且，你们这堆人里有一半都是来路不明的外地人！", 37, 9400597, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你也是村长，能理解我吧？站在我们立场上来说，我们没理由不惜承受这种损失也要帮你们~~", 37, 9400597, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我要说的就这些！恕不远送~", 37, 9400597, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.onSetBackEffect("door", 1, 1, 0, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=3701114");
                                                                cm.npc_LeaveField("oid=3701114");
                                                                cm.sendNormalTalk_Bottom("#face0#等等，请留步。我是亚皮纳斯的派遣队长巴特勒。", 37, 9400581, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=3700905", 1, 30, 50);
                                                                  cm.sendNormalTalk_Bottom("#face0#我们是被派来帮助阿布鲁盆地的。", 37, 9400581, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#只要你们为这些失去家园的村民提供栖身的场所，我们保证竭尽全力保护你们的村子。", 37, 9400581, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
                                                                        cm.onSetBackEffect("door", 1, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_ChangeController(9400597, "oid=3701221", 858, -45, 9, 808, 908, 1, true, false);
                                                                          cm.npc_SetSpecialAction("oid=3701221", "summon", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……亚皮纳斯？咳咳~", 37, 9400597, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我有听说骑士团被派到这里的消息，咳~~~可你们来得太迟了吧？", 37, 9400597, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#援助的事哪有早晚之分。", 37, 9400581, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……。", 37, 9400597, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我说，你们这是求人的态度吗？至少拿出点诚意来，我们才能考虑一下吧？", 37, 9400597, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#……想要什么你直接说吧。", 37, 9400581, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#如你们所见，我们现在也只是勉强糊口的程度，要再加上你们，还不都得饿死？", 37, 9400597, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#你们好歹得带点吃的来啊？不是吗？", 37, 9400597, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#知道了。", 37, 9400587, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#是不是不乐意？哦？让你们卡夫塔佩村的人去打猎，不算过分的要求吧？", 37, 9400597, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#face0#……', 37, 9400587, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=3700906", 1, 170, 80);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#请你说话放尊重点，村长！！！", 37, 9400580, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=3700905", -1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#艾丽卡！这儿没你说话的份！没大没小。", 37, 9400581, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face4#……？！", 37, 9400580, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 9400581, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=3700904", 1, 270, 130);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=3700905", -1, 140, 50);
                                                                                                                    cm.sendNewEffects(13, [2000, -200, 0, 0, 0]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#大家都听见了吧。为了尽快完事，咱们要跟猎人们一起去打猎。", 37, 9400581, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#负伤者除外，能动的人全部出列！", 37, 9400581, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=3700904", -1);
                                                                                                                              cm.npc_SetForceMove("oid=3700908", 1, 180, 150);
                                                                                                                              cm.npc_SetForceMove("oid=3700913", 1, 480, 150);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=3700914", 1, 480, 150);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_setForceFlip("oid=3700907", -1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetForceMove("oid=3700907", -1, 50, 50);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=3700907", 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=3700905", 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#凯恩也出来。", 37, 9400581, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#副团长！我留下来保护艾丽卡。", 37, 9400582, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不许讨价还价。我留下来保护艾丽卡。", 37, 9400581, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=3700906", -1);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#还有……谁再敢对我的命令有异议，均视作不服从军令。", 37, 9400581, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……遵命", 37, 9400582, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b我也一起去。", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……随你便。", 37, 9400581, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#每人去收集50个能吃的肉，速度越快越好。", 37, 9400581, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=3700908", -1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_setForceFlip("oid=3700913", -1);
                                                                                                                                                              cm.npc_setForceFlip("oid=3700914", -1);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_SetForceMove("oid=3700914", -1, 1000, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=3700913", -1, 1000, 100);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_SetForceMove("oid=3700908", -1, 1000, 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                        cm.forceCompleteQuest(64043);
                                                                                                                                                                        cm.forceStartQuest(64044, '');
                                                                                                                                                                        cm.warp(867201110, 0);
                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                        cm.npc_LeaveField("oid=3700903");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700903");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700904");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700904");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700905");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700905");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700906");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700906");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700907");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700907");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700908");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700908");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700909");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700909");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700910");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700910");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700911");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700911");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700912");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700912");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700913");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700913");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700914");
                                                                                                                                                                        cm.npc_LeaveField("oid=3700914");
                                                                                                                                                                        cm.npc_LeaveField("oid=3701221");
                                                                                                                                                                        cm.npc_LeaveField("oid=3701221");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;