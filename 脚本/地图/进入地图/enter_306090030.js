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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 5);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2550005, "oid=1760624", 100, -270, 1, 50, 150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1760624", "summon", 0, 0);
      cm.npc_ChangeController(2550006, "oid=1760625", -100, -270, 1, -150, -50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1760625", "summon", 0, 0);
      cm.npcMove(2550006, 0, 10, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 20, -300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("怎么样？复仇时间？", 37, 2550006, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("简直是轻而易举……黑魔法师竟然能做到这种程度？", 37, 2550005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那位大人的伟大，是你想象不到的。", 37, 2550006, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm23.img/LionHeart", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fnBatang##r―――――――#fn黑体#「黑魔法师……？」#k", 0);
                  cm.effect_Voice("Voice3.img/DLep4/h/h_1.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('', 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("这下我明白了。", 0);
                      cm.effect_Voice("Voice3.img/DLep4/h/h_2.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("现在正在说话的一男一女就是这场#r灾难的罪魁祸首#k。", 0);
                        cm.effect_Voice("Voice3.img/DLep4/h/h_3.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue('', 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#r「快逃！！」", 0);
                            cm.effect_Voice("Voice3.img/DLep4/h/h_4.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#k虽然本能在这样高声呼喊着", 0);
                              cm.effect_Voice("Voice3.img/DLep4/h/h_5.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("但不知怎么地，我却压下本能，迈动双腿，慢慢地往城中走去。", 0);
                                cm.effect_Voice("Voice3.img/DLep4/h/h_6.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue('', 1);
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
                                        cm.sendNormalTalk_Bottom("既然已经报过仇了，下面该做我交给你的事情了吧。", 37, 2550006, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("有什么计划吗？", 37, 2550005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("都准备好了。\r\n只要我发出信号，#fs20##r所有军团长就会同时进攻圣地#k#fs16#。", 37, 2550006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("没人知道我们的计划。圣地的人，连反抗都来不及就会瞬间死亡。", 37, 2550006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这不是战争啊。", 37, 2550005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("是#fs18##r屠杀#k。\r\n#fs15#就像你对你的敌人做过的那样。", 37, 2550006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("…………", 37, 2550005, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#fs20##r(进攻圣地？屠杀？！)", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1760624"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("有人不请自来了呢……\r\n真没想到，外面都乱成一锅粥了，还有人进到这里来。", 37, 2550005, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1760625", -1);
                                                            cm.sendNormalTalk_Bottom('切……', 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1300, 0, 1000, 1300, -80, -300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("哎呀呀～听人墙角可不是个好习惯呢。", 37, 2550006, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom('看起来有点面熟呢……', 37, 2550005, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("狮子王啊，我曾和你比试过剑法。\r\n那是很久之前的事情了。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('是吗……', 37, 2550005, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#fs20##r又一个认识我的人，要从世界上消失了啊。", 37, 2550005, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Ambience.img/flyingdeck_thunder", 100);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("(不祥的预感并没有错。要是不赶快出去……)", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -379, -240, 1, 0, 1, 1, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                        cm.npc_LeaveField("oid=1760625");
                                                                                        cm.npc_LeaveField("oid=1760625");
                                                                                        cm.npc_ChangeController(2550006, "oid=1761102", -379, -270, 2, -429, -329, 0, false, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=1761102", "summon", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("哎呀～就这样放你走，我们可就要头疼了。", 37, 2550006, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('可恶……', 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("住手。他是我的客人。", 37, 2550005, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep4/5", 0, 300, 0, 0, 0, 4, 1);
                                                                                                    cm.sendNormalTalk_Bottom("咳，你不想放我走吗？", 57, 0, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("独特的剑法……啊，我记起你来了。\r\n你是个不错的佣兵团的团长呢。这么久不见，你的实力可有退步啊？", 37, 2550005, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("切，想知道就自己来试试吧！", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("生锈了啊。剑也是，人也是。", 37, 2550005, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("(怎么回事？这人的力量、气质，还有眼神……#fs18#简直就像#r野兽#k一样！)", 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_Monologue("我一边留心观察，一边挥动手中的剑，拼命寻找答案。", 0);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("这个人身上，这个国家身上，到底发生了什么？", 0);
                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/i/i_1.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue("逃出去的路？分散注意力的方法？", 0);
                                                                                                                                  cm.effect_Voice("Voice3.img/DLep4/i/i_2.mp3", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("后方的巫女会使用什么力量？能从那里突破吗？", 0);
                                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/i/i_3_sub.mp3", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("就在我以为必死无疑时，狮子王轻声吟唱了起来。", 0);
                                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/i/i_4.mp3", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/i/i_5_sub1.mp3", 100);
                                                                                                                                            cm.effect_Text(["#fn黑体##fs25##r朕打败了冰峰雪域的所有国家。"], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("你说……什么？", 57, 0, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("你终于集中注意力了啊。\r\n没错，我下了命令，要#fs18##r清除冰峰雪域的所有人类#k。", 37, 2550005, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("太荒唐了，这种事情怎么可能……！！！", 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#fs20##r(是真的！四面八方都升起了浓烟！)", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("太轻松了。轻松得我都有点失望了。", 37, 2550005, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("你……你疯了！\r\n怎么会这样？你不是所有骑士们的榜样吗？！", 57, 0, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("他们抢走了我的一切。\r\n我忠诚的骑士和臣子，我可怜的百姓们……", 37, 2550005, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("还有我挚爱一生的妻子。\r\n#fs18#我的全部。", 37, 2550005, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("就算这样你也不能滥杀无辜！！", 57, 0, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("呵呵，你跟一个被夺走了王国的王说这些，有什么用？", 37, 2550005, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("所以你就要变成野兽吗？\r\n\r\n#fs22##r你这个可怜虫，狮子王！！！", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -76, -240);
                                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                  cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -300);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Aran/down", 100);
                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("咳呃……", 57, 0, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("呃呃……你以为犯下如此大罪……还能得到宽恕吗？", 57, 0, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("我从不打算忏悔，那才是所谓的伪善。", 37, 2550005, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("佣兵啊，\r\n据我所知，你也很擅长让别人家破人亡嘛……", 37, 2550005, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#fs19##r难不成……你还想上天堂？", 37, 2550005, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("咳呃。", 57, 0, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("我们时间不多了。赶快结果了他吧，狮子王。", 37, 2550006, false, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('…………', 37, 2550005, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("我会记住你的，佣兵。你叫什么名字？", 37, 2550005, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("我不想留下什么名字。到此为止吧。", 57, 0, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom('好，我这就送你上路。', 37, 2550005, false, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 150, 30, -200);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_Hero9(0, 1000);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -160, -180, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                                                                                                                    cm.npc_ChangeController(2550004, "oid=1761749", -160, -280, 1, -210, -110, 0, true, 0, false);
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=1761749", "summon", 0, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1760624"], [0, 0, -30, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1761102"], [0, 0, -30, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 30, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster2", 100);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("你看你看，我说什么来着？纯粹是找死吧。", 37, 2550004, false, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("世界树阿丽莎？！\r\n我听说你从不插手人类的事情……", 37, 2550006, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("我有东西要找这家伙拿。我带他走了啊。", 37, 2550004, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("站住！", 37, 2550005, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -160, -183, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -76, -183, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=1761749");
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=1761749");
                                                                                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                                      cm.warp(306090040, 0, true);
                                                                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=1760624");
                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=1760624");
                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=1761102");
                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=1761102");
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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