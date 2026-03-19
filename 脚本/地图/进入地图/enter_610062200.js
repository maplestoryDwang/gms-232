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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062200");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceCompleteQuest(61344);
      cm.forceForfeitQuest(61344);
      cm.forceCompleteQuest(61345);
      cm.forceForfeitQuest(61345);
      cm.npc_ChangeController(9201546, "oid=2674055", -88, 200, 19, -138, -38, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674055", 'summon', 0, 0);
      cm.npc_ChangeController(9201547, "oid=2674056", -30, 200, 19, -80, 20, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674056", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2674057", 30, 200, 18, -20, 80, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674057", "summon", 0, 0);
      cm.npc_ChangeController(9201549, "oid=2674058", 70, 200, 18, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674058", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2674059", -740, 200, 8, -790, -690, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674059", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2674060", -175, 200, 16, -225, -125, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2674060", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.inGameDirectionEvent_AskAnswerTime(7200);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#守护者的要塞      #fs15##fn黑体#宗师大厅"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#绯——绯红之心……！", 37, 9201536, false, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2674060", -1);
          cm.sendNormalTalk_Bottom("#face0#你好，卢坎。你……", 37, 9201535, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2674059", 1, 400, 300);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -200, 200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.sendNormalTalk_Bottom("#face1#绯红之心！绯红之心！", 37, 9201536, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#真……真不敢相信我还能再见到你……", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你……你不是去巡逻了？", 37, 9201535, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#那是很久很久以前的事了……\r\n你没事就好！", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2674060", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                cm.effect_NormalSpeechBalloon('？', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201546, null, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2674060", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201535, null, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我能出什么事？", 37, 9201535, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("卢坎这家伙老是循规蹈矩的。\r\n他可能终于被规矩逼疯了。", 37, 9201549, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#利瑞尼！\r\n你这懦夫，居然敢——", 37, 9201536, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            cm.effect_NormalSpeechBalloon('？', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201549, null, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("喂，卢坎！利瑞尼这时候还没离开呢。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……是的，当然了。\r\n谢谢你提醒我，英雄。", 37, 9201536, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('话说，这小家伙是谁？', 37, 9201535, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你是怎么打破我的屏障进来的？", 37, 9201535, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("卢坎，你今天有点奇怪啊。", 37, 9201547, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你生病了吗？要不要我……", 37, 9201547, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#不，戴尔格兰德。\r\n没时间做这种事了。", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#绯红之心，我有话跟你说！", 37, 9201536, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这位殿下是货真价实的英雄，曾多次救我于水火之中。", 37, 9201536, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("多亏了他的协助，我才能站在这里，警告你们即将来临的危机。", 37, 9201536, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("卢坎……一次巡逻而已你至于吗？", 37, 9201546, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("森林里那些怪物居然那么厉害？", 37, 9201546, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你变弱了，卢坎。真让我失望。", 37, 9201535, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("你们请先听我解释。\r\n事情是这样的……", 37, 9201536, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#……", 37, 9201546, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom('……', 37, 9201548, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我……", 37, 9201547, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("你说的是真的吗，卢坎？\r\n你愿意用你的性命担保？", 37, 9201549, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#我愿意。我绝不会向绯红之心和我的兄弟们撒谎。", 37, 9201536, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("你的新朋友倒是多少证明了你的故事，我可从没见过这么奇怪的打扮。", 37, 9201535, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("告诉我，孩子，你从哪里，什么时候而来？", 37, 9201535, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("孩子……？\r\n1啊，我来自#b1000年后的#k冒险岛世界。", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("1000年后……\r\n纳瑞坎的野心真是够顽固的。", 37, 9201535, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("事实上，他的野心反而更加庞大了。\r\n而且还找了个帮手。", 37, 9201536, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("虽然我不清楚是谁，但有个1000年后的人帮助纳瑞坎穿越到了这里，对我们图谋不轨。", 37, 9201536, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("令人发指……\r\n但你们告诉我，你们又是怎么从未来来到这里的呢？", 37, 9201535, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("纳瑞坎盗走的幻日碎片就在未来的守护者的要塞。\r\n它为那个，那个……什么东西来着？", 37, 9201536, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom('穿越传送门。', 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("对，为穿越传送门供能。\r\n顾名思义，它是一种能够穿越到过去的装置。", 37, 9201536, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("纳瑞坎还真是获得强援了。\r\n真不明白为什么一千年后的未来还会有人做出这种愚蠢之举。", 37, 9201546, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("这点我们也暂时无从知晓，苏巴尼。\r\n但我们还是能在发现穿越传送门后紧跟他们来到这里。", 37, 9201536, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("他的盟友……难道是#b克拉奇安博士#k吗？", 37, 9201549, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("不清楚，我们是发现她叫#b张博士#k来着。\r\n她是个科学家。", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("科学家？那是什么？", 37, 9201547, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("他们是未来的魔法师。\r\n他们能凭借一些金属和闪光就使出魔法，连念咒都不用。", 37, 9201536, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("这附近的生物也发生了一些诡异的变化。\r\n据说有人目击到它们和一些可疑的机器呆在一起过。", 37, 9201549, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("克拉奇安帝国的人民也说最近出现了个叫克拉奇安博士的古怪家伙。", 37, 9201549, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("她们难道是同一个人？", 37, 9201549, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("很有可能。\r\n我们再来这里的路上也与一些强化生物战斗过，它们身上的机器也跟我的年代很相似。", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("越来越复杂了，真好。", 37, 9201549, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("慢着。\r\n我想去找纳瑞坎。", 37, 9201535, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("卢坎……你说纳瑞坎会杀死我。", 37, 9201535, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#比起这个，我更愿意相信你的时间旅行，兄弟！", 37, 9201546, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#纳瑞坎或许很自大，甚至有点贪婪，但他并不是个邪恶的人。", 37, 9201546, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("我知道这让你很痛苦，但我向你保证这是真的。\r\n我亲眼看到他下的手，我英勇的朋友也看到了。", 37, 9201536, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我居然被他所欺骗，真是无地自容。\r\n或许我并不是一个称职的守护者。", 37, 9201535, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom('绯红之心！', 37, 9201547, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("但是，我依旧得履行我的职责。\r\n就算收到了你们的警告，这点也不会改变。", 37, 9201535, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("我们必须加强对幻日的守备。", 37, 9201535, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("根据卢坎所说，只要我保持清醒，不让纳瑞坎有机可乘，我们就不会失败。", 37, 9201535, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我这就给其他战士下令。", 37, 9201535, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_SetForceMove("oid=2674057", -1, 1000, 200);
                                                                                                                                                                cm.npc_SetForceMove("oid=2674058", -1, 1000, 100);
                                                                                                                                                                cm.npc_SetForceMove("oid=2674059", -1, 1000, 150);
                                                                                                                                                                cm.npc_SetForceMove("oid=2674060", -1, 1000, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_LeaveField("oid=2674057");
                                                                                                                                                                  cm.npc_LeaveField("oid=2674057");
                                                                                                                                                                  cm.npc_LeaveField("oid=2674058");
                                                                                                                                                                  cm.npc_LeaveField("oid=2674058");
                                                                                                                                                                  cm.npc_LeaveField("oid=2674059");
                                                                                                                                                                  cm.npc_LeaveField("oid=2674059");
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_LeaveField("oid=2674060");
                                                                                                                                                                    cm.npc_LeaveField("oid=2674060");
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#……", 37, 9201546, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.npc_SetForceMove("oid=2674055", -1, 50, 100);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("留神了，苏巴尼。\r\n现在不是时候。", 37, 9201547, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.npc_setForceFlip("oid=2674055", 1);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom('……你说什么？', 37, 9201546, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("绯红之心不忍心亲自动手。", 37, 9201547, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("我估计你也不忍心。\r\n但如果他们所说的属实，那他已经没救了。", 37, 9201547, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#我……我和纳瑞是很亲近的。\r\n如果他能想起来……", 37, 9201546, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("欲望会吞噬美好的记忆。\r\n现在他的眼中只有幻日了。", 37, 9201547, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("你们听着……我对你们的爱是一视同仁的。\r\n我看着你们从牙牙学语的孩童成长为顶天立地的男子汉。", 37, 9201547, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("因此，你要明白，你和纳瑞坎是完全不同的两个人。", 37, 9201547, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("你们几乎没有任何相似之处。\r\n你也要意识到这点，不然在面对他的时候就提不起勇气了。", 37, 9201547, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.npc_SetForceMove("oid=2674056", -1, 700, 100);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_setForceFlip("oid=2674055", -1);
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('……', 37, 9201546, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2674055", -1, 700, 100);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.npc_LeaveField("oid=2674056");
                                                                                                                                                                                                            cm.npc_LeaveField("oid=2674056");
                                                                                                                                                                                                            cm.npc_LeaveField("oid=2674055");
                                                                                                                                                                                                            cm.npc_LeaveField("oid=2674055");
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
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