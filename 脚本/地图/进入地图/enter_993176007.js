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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 545, -127);
      cm.npc_ChangeController(3004652, "oid=123396277", 471, -127, 4, 421, 521, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123396277", "summon", 0, 0);
      cm.npc_ChangeController(3004651, "oid=123396278", 720, -127, 5, 670, 770, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123396278", "summon", 0, 0);
      cm.npc_ChangeController(3004650, "oid=123396279", 962, -204, 1, 912, 1012, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123396279", "summon", 0, 0);
      cm.Npc_Fadeout("oid=123396279", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 620, -11);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呼呼，得救了……", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#无人机好像也甩掉了。", 36, 3004651, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#贝尔！难道你跟来了吗？因为担心我？", 36, 3004652, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#现在我知道了。虽然你装作不在意，其实很喜欢我，对吧？！", 36, 3004652, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face0#……', 36, 3004651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#早知道，就、就让你们自生自灭好了。", 36, 3004651, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哎呀，现在不是说这些的时候。必须马上回村里去制定对策。", 36, 3004652, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这样下去，整座城市就……", 36, 3004652, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#不，没那个必、必要。", 36, 3004651, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face0#嗯？', 36, 3004652, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#别管T-boy。他爱、爱干嘛就干嘛去好了。", 36, 3004651, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#反正地下铁路很结实。\r\n就、就算出现黑洞……也不会有、有什么损害。", 36, 3004651, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那叫什么话？那样我们岂不是永远都回不到……", 36, 3004652, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("等等，难道你已经知道T-boy的阴谋了吗？", 56, 0, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123396277"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#他偶尔会来找、找我借书。\r\n所以经常会和我讲起各、各种各样的事情。", 36, 3004651, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#怎么能这样……他是我们的敌人！", 36, 3004652, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#也是我唯、唯一的读者。", 36, 3004651, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我也看过你的书！", 36, 3004652, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你不是说没、没意思吗？", 36, 3004651, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那、那是……（嚅嚅嗫嗫）", 36, 3004652, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 830, -11);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Npc_Fadeout("oid=123396277", 0, 500);
                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                cm.effect_Text(["#fn黑体##fs18#几天前。", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=123396278", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#唧……", 36, 3004662, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1392843;QuestCount=3;accCheck=200722224835967");
                                                                        cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1458454;QuestCount=3;accCheck=200722224835967");
                                                                        cm.sendNormalTalk_Bottom("#face0#还是老样子……只有杂音……", 36, 3004651, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#你在等故乡的朋友们和你联系吗？", 36, 3004650, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123396278"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                                              cm.Npc_Fadeout("oid=123396279", 255, 700);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你还没放下心中的迷恋吗？\r\n当初他们不是丢下了你，自己回去了吗？", 36, 3004650, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……这和你没、没关系。", 36, 3004651, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#哈哈，别这么冷淡嘛。\r\n我可是这个世界上唯一理解你的人。", 36, 3004670, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#对了，这一篇也很有趣嘛。\r\n在被僵尸占领的城市中的生存方法？\r\n你怎么会想到这个的？哈哈哈！！", 36, 3004670, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#怎么样？这篇文章在故乡有人喜欢吗？", 36, 3004670, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#别提了。", 36, 3004651, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#只有非难和嘲笑。", 36, 3004651, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#习惯就好。那是天才的宿命。\r\n这个世界容不下那些超越自己想象的人存在。", 36, 3004670, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#只是那样吗？\r\n他们认为你是怪人和异端，反过来打压你。", 36, 3004650, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#只是因为……和他们的想法不一样。", 36, 3004674, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊，我想到了一个好主意。\r\n下一篇写这个怎么样？", 36, 3004670, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                              cm.sendNormalTalk_Bottom("#face0##r#fs18#如何在黑洞中生存。", 36, 3004670, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#黑……洞？", 36, 3004651, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#没错，黑洞。\r\n某位天才科学怪杰为了实现武器化，制造出了黑洞。", 36, 3004670, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#在和平的城市上空突然然出现的黑色灾难……\r\n变成人间地狱的城市！怎么样？是不是很想知道后面的故事？", 36, 3004671, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#难道……你……", 36, 3004651, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=123396278", 'special', -1, 1);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/reload", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……是认真的吗？", 36, 3004651, false, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#…….", 36, 3004650, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#喂，贝尔，你那样拿枪指着我已经第几次了？", 36, 3004650, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#最后犹犹豫豫没有开枪，又是第几次了？", 36, 3004670, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我再说一遍。我戴在头上的，是非～常普通的显示器。\r\n只要射中，就会被击穿。", 36, 3004670, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果你想阻止我，现在是绝好的机会。", 36, 3004670, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#怎么样，贝尔？你有勇气打倒我，面对现实吗？", 36, 3004670, false, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom('#face0#……', 36, 3004651, false, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                    cm.setNpcSpecialActionReset("oid=123396278");
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哈哈哈哈哈哈。真遗憾。", 36, 3004670, false, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那么……再见吧，朋友。", 36, 3004670, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_SetForceMove("oid=123396279", 1, 300, 100);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 620, -11);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    cm.effect_Text(["#fn黑体##fs18#重新回到现在。", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.npc_setForceFlip("oid=123396278", -1);
                                                                                                                                                                      cm.Npc_Fadeout("oid=123396279", 0, 500);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                                                        cm.Npc_Fadeout("oid=123396277", 255, 500);
                                                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#看来你还是没能扣动扳机。", 36, 3004652, false, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#到底是为什么？", 36, 3004652, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#所有的东西都会被吸进去。\r\n如果城市上空出现#r黑洞#k，我们就永远无法踏上地面。\r\n大叔你也永远无法回到故乡了。", 36, 3004652, true, true, 1);
                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1458454;QuestCount=3;accCheck=200722224936623");
                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1519110;QuestCount=3;accCheck=200722224936623");
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#没、没关系。反正什么都不、不会改变。", 36, 3004651, true, true, 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#地上其实没你想、想象的那么好。", 36, 3004651, true, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我把这个无线电发射机也丢、丢掉了。", 36, 3004651, true, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不切实际的希望反而会让人更加痛苦。", 36, 3004651, true, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#拉索尔，你也别、别做那种危险的事了。", 36, 3004651, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3004652, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我明白你的意思了。", 36, 3004652, false, true, 1);
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1519110;QuestCount=3;accCheck=200722225042309");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1584796;QuestCount=3;accCheck=200722225042309");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1584796;QuestCount=3;accCheck=200722225143397");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1645884;QuestCount=3;accCheck=200722225143397");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1645884;QuestCount=3;accCheck=200722225244254");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1706741;QuestCount=3;accCheck=200722225244254");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1706741;QuestCount=3;accCheck=200722225344930");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1767417;QuestCount=3;accCheck=200722225344930");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1767417;QuestCount=3;accCheck=200722225445477");
                                                                                                                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1827964;QuestCount=3;accCheck=200722225445477");
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#但是……我还是会坚持战斗。", 36, 3004652, true, true, 1);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#看看那个。", 36, 3004652, true, true, 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.npc_setForceFlip("oid=123396277", -1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 329, -155);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=123396277", "special", -1, 1);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那是我们，还有你向往的地方。", 36, 3004652, false, true, 1);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 620, -11);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.setNpcSpecialActionReset("oid=123396277");
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, false, true, 1);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#勇士……", 36, 3004652, false, true, 1);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我不想把你牵扯进来。如果你愿意和我们一起战斗，就到村里来。", 36, 3004652, true, true, 1);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=123396277", -1, 300, 100);
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                                                                                  cm.warp(450014090, 1, true);
                                                                                                                                                                                                                                  cm.updateInfoQuest(37600, "10=h0;11=h0;02=h0;12=h0;13=h0;09=h0");
                                                                                                                                                                                                                                  cm.forceCompleteQuest(37610);
                                                                                                                                                                                                                                  cm.gainExp(17565641);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                                                                                                  cm.gainItem(4036633, -20);
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=123396277");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=123396278");
                                                                                                                                                                                                                                  cm.npc_LeaveField("oid=123396279");
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}