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
      cm.npc_ChangeController(3001680, 'oid=375327', 265, 135, 1, 215, 315, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375328", 339, 135, 1, 289, 389, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375329", 465, 135, 1, 415, 515, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375330", 518, 61, 5, 468, 568, 1, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375331', 582, 61, 5, 532, 632, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375332", 660, 61, 5, 610, 710, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375333", -341, 135, 1, -391, -291, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375334", -403, 135, 1, -453, -353, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375335", -263, 135, 1, -313, -213, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375336", -639, 61, 2, -689, -589, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375337", -572, 61, 2, -622, -522, 0, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375338', -512, 61, 2, -562, -462, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375339", -348, 35, 3, -398, -298, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375340", 289, 35, 3, 239, 339, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375341", -276, 35, 3, -326, -226, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375342", 363, 35, 3, 313, 413, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375343", 2101, 61, 10, 2099, 2151, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375344", 2163, 61, 10, 2113, 2213, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375345", 2234, 135, 6, 2184, 2284, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375346", 2019, 135, 6, 1969, 2069, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375347", 2295, 135, 6, 2245, 2345, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375348", 1957, 135, 6, 1907, 2007, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_Hero9(0, 1000);
      cm.inGameDirectionEvent_AskAnswerTime(1300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.npc_ChangeController(3001665, "oid=2986774", 95, 23, 3, 45, 145, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2986774", "summon", 0, 0);
        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#扑通、扑通、扑通。", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n那些家伙在门后面。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#可我并不害怕。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#因为我是个解决师。", 0);
            } else {
              if (status === V++) {
                cm.fieldEffect_Hero9(100, 300);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n不过开门之后，那里……", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n……就像是那华丽的舞会会场。", 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm43.img/Welcome To The Creepy Ghost Park", 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door2", 100);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 0, -349);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 2126, 128);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -357, -356);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -276, -230);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -308, 141);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -458, 141);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face8#嗯？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#哦 ，好吧！", 37, 3001661, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#俊秀法师所说！", 37, 3001661, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 16, 38);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=2986774", -1, 30, 150);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（那就是俊秀法师啊，哼……果然传闻不假，长相俊朗啊。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#那好像不是法师，倒像是只老鼠。", 37, 3001651, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（这么说连法师的脸都被夺走了？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#准确来说是鼠精，虽说变身为修行者的是普通的老鼠，\r\n不过登上台的那个家伙必定是有魔力的。", 37, 3001651, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#而且那只鼠精现下吸食了精气，变得强大了，\r\n这精气应该就来自于那些手持奇妙人偶的人……", 37, 3001651, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这么说所谓的什么驱除厄运全都是……）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#每次都一点点地将精气吸走，好让对方无法察觉，\r\n可如此反复地吸走精气……", 37, 3001651, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（你的意思是说拥有人偶的人可能会有危险吗？\r\n……可是你刚刚不是说你肚子里没有鼠精嘛……）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#俊秀法师看到了这边……", 37, 3001661, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#现在就要开始了，法师的教诲！", 37, 3001661, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#老鼠的霸气！", 37, 3001661, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#既然吸食精气的人偶也已经四散到了村庄深处……\r\n现在差不多该切入正题了。", 37, 3001665, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#等到三日后天空升起圆月，\r\n村民们就会在人偶的力量之下沦为我们的奴隶。", 37, 3001665, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#呵呵……不过我不能就此满足，\r\n要想实现我们的野心，村庄这地方还是太小了。", 37, 3001665, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#拿下村庄后……我要跨越大陆，掌控整个世界。", 37, 3001665, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#为了老鼠……", 37, 3001665, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#为了老鼠！", 37, 3001661, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#（噗哈，要掌控世界，这梦想可真够大的啊！我拜托你赶紧从青春期毕业吧！）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#要论不懂事，我看你好像也不简单吧。", 37, 3001651, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#这声援真是热情似火呢，为了感谢各位的心意，我准备了一个小小的助兴节目。\r\n……不久前有一只小野猫闯入了法堂对吧？", 37, 3001665, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（野猫？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#把人带来。", 37, 3001665, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#是，法师！", 37, 3001661, true, true);
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
                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 16, 38);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_ChangeController(3001653, "oid=2987776", -92, 30, 3, -142, -42, 1, false, 500, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=2987776", 'summon', 0, 0);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=2987776", "special1", -1, 1);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（那不是……前辈嘛？）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#四处扰乱法堂，我便要问罪于你。\r\n那大家都尽情享受吧。", 37, 3001665, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#来……奏乐吧。", 37, 3001665, true, true);
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
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 16, 104);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=2986774", "dance", -1, 1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（那帮家伙……像是疯了。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#看样子似乎并不与这个世界相匹配，\r\n饕餮我怕是无法理解这帮家伙的潮流。", 37, 3001651, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                            cm.fieldEffect_Hero9(100, 500);
                                                                                                                                                                                            cm.forceStartQuest(39599, '');
                                                                                                                                                                                            cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h1");
                                                                                                                                                                                            cm.forceCompleteQuest(39531);
                                                                                                                                                                                            cm.gainExp(4354);
                                                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
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
                                                                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                                                                  cm.warp(410000251, 0, false);
                                                                                                                                                                                                  cm.eventSKill(0);
                                                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                  cm.npc_LeaveField("oid=2986774");
                                                                                                                                                                                                  cm.npc_LeaveField("oid=2986774");
                                                                                                                                                                                                  cm.npc_LeaveField("oid=2987776");
                                                                                                                                                                                                  cm.npc_LeaveField("oid=2987776");
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